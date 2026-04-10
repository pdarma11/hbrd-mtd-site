import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HelpCircle, ArrowRight, ArrowLeft, CheckCircle2, RotateCcw } from 'lucide-react'
import { Link } from 'react-router-dom'

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
    question: 'Quel type d\'entraînement préfères-tu ?',
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
      { label: 'Le budget n\'est pas une limite', value: 'premium', icon: '🚀' },
    ],
  },
  {
    id: 6,
    question: 'En combien de temps veux-tu voir des résultats ?',
    options: [
      { label: '1 mois — Résultats rapides', value: 'fast', icon: '⚡' },
      { label: '3 mois — Transformation sérieuse', value: 'medium', icon: '📅' },
      { label: '6 mois — Transformation complète', value: 'long', icon: '🎯' },
      { label: 'Je prends le temps qu\'il faut', value: 'patient', icon: '🧘' },
    ],
  },
]

function getRecommendation(answers) {
  const { objective, level, sessions, type, budget } = answers

  let program = { name: 'Basic', id: 'basic', slug: '/subscriptions/basic', color: '#60a5fa' }
  let discipline = { name: 'Musculation', slug: '/musculation', color: '#F5C518' }
  let reasons = []

  if (objective === 'endurance' || objective === 'competition') {
    discipline = { name: objective === 'competition' ? 'HYROX' : 'Hybrid Athlete', slug: objective === 'competition' ? '/hyrox' : '/hybrid-athlete', color: '#4ade80' }
    reasons.push('Ton objectif orienté endurance/performance correspond parfaitement à ce programme')
  } else if (objective === 'masse') {
    discipline = { name: 'Musculation', slug: '/musculation', color: '#F5C518' }
    reasons.push('La musculation est la discipline la plus efficace pour ta prise de masse')
  } else if (objective === 'perte') {
    discipline = { name: 'Hybrid Athlete', slug: '/hybrid-athlete', color: '#f87171' }
    reasons.push('La méthode hybride maximise la combustion des graisses tout en préservant le muscle')
  }

  if (type === 'running') {
    discipline = { name: 'Running', slug: '/running', color: '#60a5fa' }
    reasons.push('Ton affinité pour le running oriente vers un programme de course structuré')
  }

  if (budget === 'premium' || level === 'competiteur') {
    program = { name: 'Premium', id: 'premium', slug: '/subscriptions/premium', color: '#F5C518' }
    reasons.push('Ton niveau ou tes exigences nécessitent un suivi individualisé et intensif')
  } else if (budget === 'pro' || level === 'avance' || sessions === '4-5' || sessions === '6+') {
    program = { name: 'Pro', id: 'pro', slug: '/subscriptions/pro', color: '#4ade80' }
    reasons.push('Ton niveau d\'engagement justifie un programme plus complet')
  } else {
    reasons.push('Pour ton niveau actuel et tes disponibilités, le programme Basic est un excellent départ')
  }

  return { program, discipline, reasons }
}

export default function QuizPage() {
  const [step, setStep] = useState(0) // 0 = intro
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

  const progress = isDone ? 100 : step === 0 ? 0 : ((step) / QUESTIONS.length) * 100

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
                En moins de 2 minutes, tu recevras une recommandation personnalisée sur le programme et la discipline faits pour toi.
              </p>
              <div className="flex flex-col gap-2 text-sm mb-8" style={{ color: 'var(--text-secondary)' }}>
                {['Objectif & discipline adaptée', 'Programme (Basic, Pro ou Premium)', 'Raisons personnalisées'].map(f => (
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
                    key={opt.value}
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
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="space-y-5"
            >
              <div className="card p-8 text-center">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4" style={{ background: 'rgba(74,222,128,0.1)' }}>
                  <CheckCircle2 size={32} style={{ color: '#4ade80' }} />
                </div>
                <h2 className="font-anton text-3xl tracking-wider mb-2">TON RÉSULTAT</h2>
                <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>Basé sur tes réponses, voici nos recommandations</p>
              </div>

              {/* Program recommendation */}
              <div className="card p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 rounded-full" style={{ background: result.program.color }} />
                  <h3 className="font-semibold">Programme recommandé</h3>
                </div>
                <div
                  className="text-center rounded-xl p-6 mb-4"
                  style={{ background: result.program.color + '10', border: `1px solid ${result.program.color}30` }}
                >
                  <div className="font-anton text-4xl tracking-wider mb-1" style={{ color: result.program.color }}>
                    {result.program.name}
                  </div>
                  <div className="text-sm" style={{ color: 'var(--text-secondary)' }}>Formule recommandée</div>
                </div>
                <Link to={result.program.slug} className="btn-primary w-full flex items-center justify-center gap-2 py-3">
                  Voir ce programme <ArrowRight size={14} />
                </Link>
              </div>

              {/* Discipline */}
              <div className="card p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 rounded-full" style={{ background: result.discipline.color }} />
                  <h3 className="font-semibold">Discipline recommandée</h3>
                </div>
                <div
                  className="text-center rounded-xl p-6 mb-4"
                  style={{ background: result.discipline.color + '10', border: `1px solid ${result.discipline.color}30` }}
                >
                  <div className="font-anton text-3xl tracking-wider" style={{ color: result.discipline.color }}>
                    {result.discipline.name}
                  </div>
                </div>
                <Link to={result.discipline.slug} className="btn-outline w-full flex items-center justify-center gap-2 py-3">
                  Découvrir la discipline <ArrowRight size={14} />
                </Link>
              </div>

              {/* Reasons */}
              <div className="card p-8">
                <h3 className="font-semibold mb-4">Pourquoi ce programme ?</h3>
                <div className="space-y-3">
                  {result.reasons.map((r, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 size={16} className="mt-0.5 flex-shrink-0" style={{ color: '#4ade80' }} />
                      <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>{r}</p>
                    </div>
                  ))}
                </div>
              </div>

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
