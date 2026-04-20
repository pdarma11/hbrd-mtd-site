import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HelpCircle, ArrowRight, ArrowLeft, CheckCircle2, RotateCcw, Star, X } from 'lucide-react'
import { Link } from 'react-router-dom'
import { subscriptions, disciplinePricing } from '../data/mockData'

const QUESTIONS = [
  {
    id: 1,
    question: 'Quel est ton objectif principal ?',
    options: [
      { label: 'Perdre du poids / me sécher', value: 'perte', icon: '🔥' },
      { label: 'Prendre du muscle / force', value: 'masse', icon: '💪' },
      { label: 'Améliorer mon endurance', value: 'endurance', icon: '🏃' },
      { label: 'Compétition HYROX / performance', value: 'competition', icon: '🏆' },
    ],
  },
  {
    id: 2,
    question: 'Quel est ton niveau actuel ?',
    options: [
      { label: 'Débutant — Je commence à peine', value: 'debutant', icon: '🌱' },
      { label: 'Intermédiaire — 1-2 ans de pratique', value: 'intermediaire', icon: '📈' },
      { label: 'Avancé — 3+ ans réguliers', value: 'avance', icon: '⚡' },
      { label: 'Compétiteur — Je participe à des events', value: 'competiteur', icon: '🎯' },
    ],
  },
  {
    id: 3,
    question: 'Combien de séances par semaine peux-tu faire ?',
    options: [
      { label: '2 séances / semaine', value: '2', icon: '🕐' },
      { label: '3 séances / semaine', value: '3', icon: '🕐' },
      { label: '4-5 séances / semaine', value: '4-5', icon: '🕐' },
      { label: '6+ séances / semaine', value: '6+', icon: '🕐' },
    ],
  },
  {
    id: 4,
    question: "Quel type d'entraînement préfères-tu ?",
    options: [
      { label: 'Salle de sport uniquement', value: 'salle', icon: '🏋️' },
      { label: 'Running / Cardio outdoor', value: 'running', icon: '🏃' },
      { label: 'Mix salle + running', value: 'mix', icon: '🔀' },
      { label: 'Peu importe, je veux des résultats', value: 'flexible', icon: '💡' },
    ],
  },
  {
    id: 5,
    question: 'Quel est ton budget mensuel pour le coaching ?',
    options: [
      { label: 'Moins de 50€ / mois', value: 'basic', icon: '💰' },
      { label: '50-100€ / mois', value: 'pro', icon: '💰' },
      { label: '+100€ / mois', value: 'premium', icon: '💎' },
      { label: "Le budget n'est pas une limite", value: 'premium', icon: '🚀' },
    ],
  },
  {
    id: 6,
    question: 'En combien de temps veux-tu voir des résultats ?',
    options: [
      { label: '1 mois — Résultats rapides', value: 'fast', icon: '⚡' },
      { label: '3 mois — Transformation sérieuse', value: 'medium', icon: '📅' },
      { label: '6 mois — Transformation complète', value: 'long', icon: '🎯' },
      { label: "Je prends le temps qu'il faut", value: 'patient', icon: '🧘' },
    ],
  },
]

// Returns plan object merged with discipline-specific pricing
function getPlan(id, disciplineSlug) {
  const base = subscriptions.find((s) => s.id === id) || subscriptions[0]
  const override = (disciplinePricing[disciplineSlug] || []).find((p) => p.id === id)
  return override ? { ...base, price: override.price, period: override.period, description: override.desc } : base
}

function getRecommendation(answers) {
  const { objective, level, sessions, type, budget, timeline } = answers

  // ── Discipline ──────────────────────────────────────────────────────────────
  let discipline = { name: 'Musculation', slug: '/musculation', color: '#F5C518' }
  if (type === 'running') {
    discipline = { name: 'Running', slug: '/running', color: '#60a5fa' }
  } else if (objective === 'competition') {
    discipline = { name: 'HYROX', slug: '/hyrox', color: '#f97316' }
  } else if (objective === 'endurance' || type === 'mix') {
    discipline = { name: 'Hybrid Athlete', slug: '/hybrid-athlete', color: '#4ade80' }
  } else if (objective === 'perte') {
    discipline = { name: 'Hybrid Athlete', slug: '/hybrid-athlete', color: '#4ade80' }
  }

  // ── Primary plan based on budget ────────────────────────────────────────────
  let primaryId = 'starter'
  if (budget === 'premium') {
    primaryId = 'quarterly'
  } else if (budget === 'pro') {
    primaryId = 'monthly'
  } else {
    // budget = basic
    // If level/sessions suggest more investment, still starter but offer monthly as upgrade
    primaryId = 'starter'
  }

  // Override: high level or competition always needs at least monthly
  if ((level === 'competiteur' || level === 'avance') && primaryId === 'starter') {
    primaryId = 'monthly'
  }
  // Long timeline always suggests quarterly
  if ((timeline === 'long' || timeline === 'medium') && budget === 'premium') {
    primaryId = 'quarterly'
  }

  // ── Secondary plan (upgrade suggestion) ─────────────────────────────────────
  let secondaryId = null
  if (primaryId === 'starter') {
    secondaryId = 'monthly' // always offer upgrade
  } else if (primaryId === 'monthly' && (level === 'competiteur' || objective === 'competition' || timeline === 'long' || timeline === 'medium')) {
    secondaryId = 'quarterly'
  }

  // ── Reasons ─────────────────────────────────────────────────────────────────
  const reasons = []

  if (objective === 'masse') reasons.push('La musculation est la discipline la plus efficace pour ta prise de masse et de force')
  else if (objective === 'perte') reasons.push('La méthode hybride maximise la combustion des graisses tout en préservant le muscle')
  else if (objective === 'endurance') reasons.push("L'entraînement hybride combine force et cardio pour booster ton endurance")
  else if (objective === 'competition') reasons.push('Le programme HYROX est conçu spécifiquement pour la compétition fonctionnelle')

  if (type === 'running') reasons.push('Ton affinité pour le running oriente vers un programme de course structuré')

  if (level === 'debutant') reasons.push('Le programme est adapté aux débutants avec une progression douce et encadrée')
  else if (level === 'avance' || level === 'competiteur') reasons.push('Ton niveau élevé nécessite un suivi individualisé pour progresser encore')

  if (sessions === '4-5' || sessions === '6+') reasons.push('Avec autant de séances par semaine, un programme structuré est indispensable pour éviter le surentraînement')

  if (timeline === 'medium' || timeline === 'long') reasons.push('Pour une transformation durable, un accompagnement sur plusieurs mois est fortement recommandé')

  const discSlug = discipline.slug.replace('/', '')
  const primaryPlan = getPlan(primaryId, discSlug)
  const secondaryPlan = secondaryId ? getPlan(secondaryId, discSlug) : null

  return { primaryPlan, secondaryPlan, discipline, reasons }
}

// Plan colors
const PLAN_COLORS = {
  starter: '#60a5fa',
  monthly: '#F5C518',
  quarterly: '#4ade80',
}

function PlanCard({ plan, isPrimary, discipline }) {
  const color = PLAN_COLORS[plan.id] || '#F5C518'
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="card p-6 relative overflow-hidden"
      style={{ border: isPrimary ? `1px solid ${color}50` : undefined }}
    >
      {/* Glow */}
      {isPrimary && (
        <div
          className="absolute top-0 right-0 w-48 h-48 rounded-full blur-[80px] opacity-10 pointer-events-none"
          style={{ background: color }}
        />
      )}

      {/* Badge */}
      <div className="flex items-start justify-between mb-4">
        <div>
          {isPrimary && (
            <span
              className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full mb-2"
              style={{ background: color + '20', color }}
            >
              <Star size={10} fill="currentColor" /> RECOMMANDÉ POUR TOI
            </span>
          )}
          {!isPrimary && (
            <span
              className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full mb-2"
              style={{ background: 'rgba(255,255,255,0.06)', color: 'var(--text-muted)' }}
            >
              OPTION ALTERNATIVE
            </span>
          )}
          <div className="font-anton text-2xl tracking-wider" style={{ color: isPrimary ? color : 'white' }}>
            {plan.name}
          </div>
        </div>
        <div className="text-right">
          <div className="font-anton text-3xl" style={{ color: isPrimary ? color : 'white' }}>
            {plan.price}€
          </div>
          <div className="text-xs" style={{ color: 'var(--text-muted)' }}>/ {plan.period}</div>
        </div>
      </div>

      <p className="text-sm mb-4 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
        {plan.description}
      </p>

      {/* Features */}
      <ul className="space-y-2 mb-5">
        {plan.features.map((f) => (
          <li key={f} className="flex items-start gap-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
            <CheckCircle2 size={13} className="mt-0.5 flex-shrink-0" style={{ color: '#4ade80' }} />
            {f}
          </li>
        ))}
        {plan.notIncluded && plan.notIncluded.map((f) => (
          <li key={f} className="flex items-start gap-2 text-sm opacity-40">
            <X size={13} className="mt-0.5 flex-shrink-0" />
            {f}
          </li>
        ))}
      </ul>

      <Link
        to={`/subscriptions`}
        className={isPrimary ? 'btn-primary w-full flex items-center justify-center gap-2 py-3' : 'btn-outline w-full flex items-center justify-center gap-2 py-3'}
      >
        {plan.cta} <ArrowRight size={14} />
      </Link>
    </motion.div>
  )
}

export default function QuizPage() {
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState({})
  const [selectedOption, setSelectedOption] = useState(null)
  const [result, setResult] = useState(null)

  const currentQ = QUESTIONS[step - 1]
  const isIntro = step === 0
  const isDone = step > QUESTIONS.length

  const next = () => {
    if (selectedOption === null || !currentQ) return
    const keys = ['objective', 'level', 'sessions', 'type', 'budget', 'timeline']
    const newAnswers = { ...answers, [keys[step - 1]]: selectedOption }
    setAnswers(newAnswers)
    setSelectedOption(null)
    if (step === QUESTIONS.length) {
      setResult(getRecommendation(newAnswers))
      setStep(step + 1)
    } else {
      setStep(step + 1)
    }
  }

  const prev = () => {
    if (step > 1) {
      setStep(step - 1)
      setSelectedOption(null)
    }
  }

  const restart = () => {
    setStep(0)
    setAnswers({})
    setSelectedOption(null)
    setResult(null)
  }

  const progress = isDone ? 100 : step === 0 ? 0 : (step / QUESTIONS.length) * 100

  return (
    <div className="pt-20 min-h-screen">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10"
        >
          <span className="section-label mb-6 inline-flex"><HelpCircle size={12} />Quiz coaching</span>
          <h1 className="font-anton text-5xl tracking-wider mb-2">
            TON PROGRAMME
            <br />
            <span className="gradient-text">IDÉAL</span>
          </h1>
          <p style={{ color: 'var(--text-secondary)' }}>6 questions pour trouver le programme fait pour toi</p>
        </motion.div>

        {/* Progress bar */}
        {!isIntro && !isDone && (
          <div className="mb-8">
            <div className="flex justify-between text-xs mb-2" style={{ color: 'var(--text-muted)' }}>
              <span>Question {step} / {QUESTIONS.length}</span>
              <span>{Math.round(progress)}%</span>
            </div>
            <div className="h-1.5 rounded-full" style={{ background: 'var(--border)' }}>
              <motion.div
                className="h-full rounded-full"
                style={{ background: 'var(--accent)' }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.4 }}
              />
            </div>
          </div>
        )}

        <AnimatePresence mode="wait">
          {/* INTRO */}
          {isIntro && (
            <motion.div
              key="intro"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="card p-10 text-center"
            >
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6" style={{ background: 'rgba(245,197,24,0.1)' }}>
                <HelpCircle size={28} style={{ color: 'var(--accent)' }} />
              </div>
              <h2 className="font-semibold text-xl mb-4">Comment ça marche ?</h2>
              <p className="text-sm leading-relaxed mb-8" style={{ color: 'var(--text-secondary)' }}>
                Réponds à 6 questions rapides sur tes objectifs, ton niveau et tes disponibilités.
                En moins de 2 minutes, tu recevras une recommandation personnalisée avec les programmes et tarifs adaptés à ton budget.
              </p>
              <div className="flex flex-col gap-2 text-sm mb-8" style={{ color: 'var(--text-secondary)' }}>
                {['Discipline adaptée à ton objectif', '1 ou 2 programmes avec prix exacts', 'Raisons personnalisées'].map((f) => (
                  <div key={f} className="flex items-center gap-2 justify-center">
                    <CheckCircle2 size={14} style={{ color: '#4ade80' }} />
                    {f}
                  </div>
                ))}
              </div>
              <button onClick={() => setStep(1)} className="btn-primary w-full py-4 flex items-center justify-center gap-2">
                Commencer le quiz <ArrowRight size={16} />
              </button>
            </motion.div>
          )}

          {/* QUESTION */}
          {!isIntro && !isDone && currentQ && (
            <motion.div
              key={`q-${step}`}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.3 }}
              className="card p-8"
            >
              <h2 className="font-semibold text-xl mb-6">{currentQ.question}</h2>
              <div className="space-y-3 mb-8">
                {currentQ.options.map((opt) => (
                  <button
                    key={opt.value + opt.label}
                    onClick={() => setSelectedOption(opt.value)}
                    className="w-full flex items-center gap-4 p-4 rounded-xl text-left transition-all"
                    style={{
                      background: selectedOption === opt.value ? 'rgba(245,197,24,0.1)' : 'var(--bg-elevated)',
                      border: `1px solid ${selectedOption === opt.value ? 'rgba(245,197,24,0.4)' : 'var(--border)'}`,
                    }}
                  >
                    <span className="text-xl">{opt.icon}</span>
                    <span
                      className="text-sm font-medium"
                      style={{ color: selectedOption === opt.value ? 'var(--accent)' : 'white' }}
                    >
                      {opt.label}
                    </span>
                    {selectedOption === opt.value && (
                      <CheckCircle2 size={16} className="ml-auto" style={{ color: 'var(--accent)' }} />
                    )}
                  </button>
                ))}
              </div>
              <div className="flex gap-3">
                {step > 1 && (
                  <button onClick={prev} className="btn-outline flex items-center gap-2 py-3 px-5">
                    <ArrowLeft size={14} />
                  </button>
                )}
                <button
                  onClick={next}
                  disabled={selectedOption === null}
                  className="btn-primary flex-1 flex items-center justify-center gap-2 py-3"
                  style={{ opacity: selectedOption === null ? 0.4 : 1 }}
                >
                  {step === QUESTIONS.length ? 'Voir mon résultat' : 'Suivant'}
                  <ArrowRight size={14} />
                </button>
              </div>
            </motion.div>
          )}

          {/* RESULT */}
          {isDone && result && (
            <motion.div
              key="result"
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="space-y-5"
            >
              {/* Header card */}
              <div className="card p-8 text-center">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4" style={{ background: 'rgba(74,222,128,0.1)' }}>
                  <CheckCircle2 size={32} style={{ color: '#4ade80' }} />
                </div>
                <h2 className="font-anton text-3xl tracking-wider mb-2">TON RÉSULTAT</h2>
                <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                  {result.secondaryPlan
                    ? 'Voici les 2 programmes qui correspondent le mieux à ton profil'
                    : 'Voici le programme qui correspond le mieux à ton profil'}
                </p>
              </div>

              {/* Primary plan */}
              <PlanCard plan={result.primaryPlan} isPrimary={true} discipline={result.discipline} />

              {/* Secondary plan (if any) */}
              {result.secondaryPlan && (
                <PlanCard plan={result.secondaryPlan} isPrimary={false} discipline={result.discipline} />
              )}

              {/* Discipline */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="card p-6"
              >
                <h3 className="font-semibold mb-3 text-sm" style={{ color: 'var(--text-muted)' }}>DISCIPLINE RECOMMANDÉE</h3>
                <div
                  className="flex items-center justify-between rounded-xl px-5 py-4"
                  style={{ background: result.discipline.color + '10', border: `1px solid ${result.discipline.color}30` }}
                >
                  <span className="font-anton text-2xl tracking-wider" style={{ color: result.discipline.color }}>
                    {result.discipline.name}
                  </span>
                  <Link
                    to={result.discipline.slug}
                    className="text-xs font-semibold flex items-center gap-1 px-3 py-1.5 rounded-lg"
                    style={{ background: result.discipline.color + '20', color: result.discipline.color }}
                  >
                    Découvrir <ArrowRight size={12} />
                  </Link>
                </div>
              </motion.div>

              {/* Reasons */}
              {result.reasons.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  className="card p-6"
                >
                  <h3 className="font-semibold mb-4 text-sm" style={{ color: 'var(--text-muted)' }}>POURQUOI CES PROGRAMMES ?</h3>
                  <div className="space-y-3">
                    {result.reasons.map((r, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <CheckCircle2 size={14} className="mt-0.5 flex-shrink-0" style={{ color: '#4ade80' }} />
                        <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{r}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Bottom actions */}
              <div className="flex gap-3">
                <button onClick={restart} className="btn-outline flex-1 flex items-center justify-center gap-2 py-3">
                  <RotateCcw size={14} />
                  Recommencer
                </button>
                <Link to="/contact" className="btn-primary flex-1 flex items-center justify-center gap-2 py-3">
                  Contacter Péryk <ArrowRight size={14} />
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
