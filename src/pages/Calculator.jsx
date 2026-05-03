import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Calculator, ArrowRight, RotateCcw, CalendarDays, Target, TrendingDown, TrendingUp } from 'lucide-react'
import { Link } from 'react-router-dom'
import SEOMeta from '../components/SEOMeta'

const ACTIVITY_LEVELS = [
  { key: 'sedentaire', label: 'Sédentaire', desc: 'Peu ou pas d\'exercice', factor: 1.2 },
  { key: 'leger', label: 'Léger', desc: '1-3 séances/semaine', factor: 1.375 },
  { key: 'modere', label: 'Modéré', desc: '3-5 séances/semaine', factor: 1.55 },
  { key: 'actif', label: 'Actif', desc: '6-7 séances/semaine', factor: 1.725 },
  { key: 'tres_actif', label: 'Très actif', desc: '2x/jour', factor: 1.9 },
]

const GOALS = [
  { key: 'perte', label: 'Perte de poids', modifier: -500, color: '#f87171' },
  { key: 'maintien', label: 'Maintien', modifier: 0, color: '#60a5fa' },
  { key: 'prise', label: 'Prise de masse', modifier: +300, color: '#4ade80' },
]

function getBMICategory(bmi) {
  if (bmi < 18.5) return {
    label: 'Insuffisance pondérale', color: '#60a5fa',
    tip: 'Ton poids est en dessous de la normale. Consulte un professionnel de santé et envisage un programme de prise de masse douce, riche en protéines et calories de qualité.'
  }
  if (bmi < 25) return {
    label: 'Poids normal', color: '#4ade80',
    tip: 'Excellent — tu es dans la zone idéale. Focus sur la composition corporelle (muscle vs. graisse) plutôt que sur le poids total.'
  }
  if (bmi < 30) return {
    label: 'Surpoids', color: '#fbbf24',
    tip: 'Un déficit de 300–500 kcal/jour combiné à 3–4 séances de sport par semaine est la formule la plus efficace et durable.'
  }
  return {
    label: 'Obésité', color: '#f87171',
    tip: 'Commence par un déficit modéré (300 kcal max) et augmente progressivement l\'activité. Un suivi médical est recommandé avant de démarrer.'
  }
}

const GOAL_TIPS = {
  perte: [
    { icon: '🥩', tip: 'Maintiens un apport en protéines élevé (2g/kg) pour préserver le muscle pendant la perte de poids.' },
    { icon: '⏰', tip: 'Répartis tes repas en 3–4 prises pour éviter les fringales et stabiliser la glycémie.' },
    { icon: '💧', tip: 'Bois 2–3L d\'eau par jour — la déshydratation est souvent confondue avec la faim.' },
  ],
  maintien: [
    { icon: '📊', tip: 'Le maintien est idéal pour faire de la recomposition corporelle : perdre du gras et prendre du muscle simultanément.' },
    { icon: '🔄', tip: 'Varie tes sources de protéines et glucides pour optimiser les micronutriments sans te restreindre.' },
    { icon: '🏋️', tip: 'Concentre-toi sur la progression en force — c\'est le meilleur indicateur de recomposition au maintien.' },
  ],
  prise: [
    { icon: '📈', tip: 'Un surplus de 200–300 kcal/jour est optimal pour prendre de la masse sans accumuler trop de graisse.' },
    { icon: '🍚', tip: 'Augmente d\'abord les glucides autour de tes séances (avant et après) pour maximiser l\'énergie et la récupération.' },
    { icon: '😴', tip: 'Le muscle se construit pendant le sommeil. Vise 7–9h par nuit pour optimiser la synthèse protéique.' },
  ],
}

// Deadline section — calcule le poids cible à la date butoir
function DeadlineSection({ tdee, goal, currentWeight }) {
  const [deadline, setDeadline] = useState('')
  const [targetWeight, setTargetWeight] = useState('')
  const [deadlineResult, setDeadlineResult] = useState(null)

  const calcDeadline = () => {
    if (!deadline) return

    const today = new Date()
    const target = new Date(deadline)
    const diffDays = Math.round((target - today) / (1000 * 60 * 60 * 24))
    if (diffDays <= 0) return

    const goalObj = GOALS.find(g => g.key === goal)

    if (targetWeight && currentWeight) {
      // Mode : poids cible → calcul des calories nécessaires
      const weightDiff = parseFloat(targetWeight) - parseFloat(currentWeight) // positif = prise, négatif = perte
      // 1 kg de graisse ≈ 7700 kcal
      const totalCaloriesDelta = weightDiff * 7700
      const dailyCaloriesDelta = totalCaloriesDelta / diffDays
      const dailyTarget = Math.round(tdee + dailyCaloriesDelta)

      // Sécurité : ne pas descendre sous 1200 kcal
      const isSafe = dailyTarget >= 1200 && dailyTarget <= tdee + 800
      const feasible = Math.abs(dailyCaloriesDelta) <= 1000

      setDeadlineResult({
        mode: 'target_weight',
        days: diffDays,
        weeks: Math.round(diffDays / 7),
        weightDiff: weightDiff.toFixed(1),
        dailyTarget,
        dailyDelta: Math.round(dailyCaloriesDelta),
        isSafe,
        feasible,
        targetWeight: parseFloat(targetWeight),
      })
    } else {
      // Mode : date seule → calcul du résultat avec le déficit/surplus actuel
      const dailyDelta = goalObj?.modifier || 0
      // 7700 kcal = 1kg
      const weightChange = (dailyDelta * diffDays) / 7700
      setDeadlineResult({
        mode: 'date_only',
        days: diffDays,
        weeks: Math.round(diffDays / 7),
        weightChange: weightChange.toFixed(1),
        dailyTarget: Math.round(tdee + dailyDelta),
        projectedWeight: currentWeight ? (parseFloat(currentWeight) + weightChange).toFixed(1) : null,
      })
    }
  }

  const reset = () => { setDeadline(''); setTargetWeight(''); setDeadlineResult(null) }

  // Min date = tomorrow
  const tomorrow = new Date()
  tomorrow.setDate(tomorrow.getDate() + 1)
  const minDate = tomorrow.toISOString().split('T')[0]

  const goalObj = GOALS.find(g => g.key === goal)

  return (
    <div className="card p-6" style={{ border: `1px solid ${goalObj?.color}30` }}>
      <div className="flex items-center gap-2 mb-5">
        <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: goalObj?.color + '18' }}>
          <CalendarDays size={16} style={{ color: goalObj?.color }} />
        </div>
        <div>
          <h3 className="font-semibold">Date butoir</h3>
          <p className="text-xs" style={{ color: 'var(--text-muted)' }}>Calcule tes calories jusqu'à une date cible</p>
        </div>
      </div>

      <div className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {/* Date picker */}
          <div>
            <label className="text-xs uppercase tracking-widest font-semibold mb-2 block" style={{ color: 'var(--text-muted)' }}>
              Date objectif
            </label>
            <input
              type="date"
              min={minDate}
              value={deadline}
              onChange={e => { setDeadline(e.target.value); setDeadlineResult(null) }}
              className="w-full px-3 py-3 rounded-lg text-sm outline-none"
              style={{ background: 'var(--bg-elevated)', border: '1px solid var(--border)', color: 'white', colorScheme: 'dark' }}
            />
          </div>

          {/* Poids cible (optionnel) */}
          <div>
            <label className="text-xs uppercase tracking-widest font-semibold mb-2 block" style={{ color: 'var(--text-muted)' }}>
              Poids cible (optionnel)
            </label>
            <div className="relative">
              <input
                type="number"
                placeholder={currentWeight || '70'}
                value={targetWeight}
                onChange={e => { setTargetWeight(e.target.value); setDeadlineResult(null) }}
                className="w-full px-3 py-3 rounded-lg text-sm outline-none pr-10"
                style={{ background: 'var(--bg-elevated)', border: '1px solid var(--border)', color: 'white' }}
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs" style={{ color: 'var(--text-muted)' }}>kg</span>
            </div>
          </div>
          {/* Bouton dans le grid 3e colonne */}
          <div className="flex flex-col justify-end">
            <label className="text-xs uppercase tracking-widest font-semibold mb-2 block opacity-0 hidden sm:block" style={{ color: 'var(--text-muted)' }}>
              &nbsp;
            </label>
            <button
              onClick={calcDeadline}
              disabled={!deadline}
              className="w-full py-3 rounded-lg text-sm font-bold flex items-center justify-center gap-2 transition-all"
              style={{
                background: deadline ? goalObj?.color : 'var(--bg-elevated)',
                color: deadline ? '#000' : 'var(--text-muted)',
                opacity: deadline ? 1 : 0.5,
              }}
            >
              <Target size={14} />
              Calculer mon plan
            </button>
          </div>
        </div>

        <AnimatePresence>
          {deadlineResult && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="space-y-3"
            >
              {/* Résumé temporel */}
              <div className="rounded-xl p-4 text-center" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid var(--border)' }}>
                <div className="font-anton text-3xl" style={{ color: goalObj?.color }}>
                  {deadlineResult.days} jours
                </div>
                <div className="text-xs mt-1" style={{ color: 'var(--text-muted)' }}>
                  soit environ <strong style={{ color: 'white' }}>{deadlineResult.weeks} semaines</strong> jusqu'à ta date
                </div>
              </div>

              {deadlineResult.mode === 'target_weight' ? (
                <>
                  {/* Calories quotidiennes nécessaires */}
                  <div
                    className="rounded-xl p-5"
                    style={{
                      background: deadlineResult.isSafe ? goalObj?.color + '10' : 'rgba(248,113,113,0.08)',
                      border: `1px solid ${deadlineResult.isSafe ? goalObj?.color + '30' : 'rgba(248,113,113,0.3)'}`,
                    }}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: deadlineResult.isSafe ? goalObj?.color : '#f87171' }}>
                        {deadlineResult.isSafe ? '✓ Plan réalisable' : '⚠ Plan exigeant'}
                      </span>
                      {parseFloat(deadlineResult.weightDiff) < 0
                        ? <TrendingDown size={14} style={{ color: '#f87171' }} />
                        : <TrendingUp size={14} style={{ color: '#4ade80' }} />
                      }
                    </div>
                    <div className="text-center">
                      <div className="font-anton text-4xl mb-1" style={{ color: deadlineResult.isSafe ? goalObj?.color : '#f87171' }}>
                        {deadlineResult.dailyTarget} kcal
                      </div>
                      <div className="text-xs" style={{ color: 'var(--text-muted)' }}>à consommer chaque jour</div>
                    </div>
                    <div className="mt-3 pt-3" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                      <div className="flex justify-between text-xs">
                        <span style={{ color: 'var(--text-muted)' }}>Écart vs. maintenance</span>
                        <span className="font-bold" style={{ color: deadlineResult.dailyDelta < 0 ? '#f87171' : '#4ade80' }}>
                          {deadlineResult.dailyDelta > 0 ? '+' : ''}{deadlineResult.dailyDelta} kcal/jour
                        </span>
                      </div>
                      <div className="flex justify-between text-xs mt-2">
                        <span style={{ color: 'var(--text-muted)' }}>
                          {parseFloat(deadlineResult.weightDiff) < 0 ? 'Poids à perdre' : 'Masse à prendre'}
                        </span>
                        <span className="font-bold text-white">
                          {Math.abs(deadlineResult.weightDiff)} kg
                        </span>
                      </div>
                    </div>
                  </div>

                  {!deadlineResult.feasible && (
                    <div className="rounded-xl p-4 text-sm" style={{ background: 'rgba(248,113,113,0.08)', border: '1px solid rgba(248,113,113,0.2)' }}>
                      <p style={{ color: '#f87171' }}>
                        ⚠️ Cet objectif demande un déficit/surplus de plus de 1000 kcal/jour. On recommande d'étaler sur plus longtemps ou d'ajuster le poids cible.
                      </p>
                    </div>
                  )}
                </>
              ) : (
                /* Mode date seule : projection du résultat */
                <div className="rounded-xl p-5" style={{ background: goalObj?.color + '10', border: `1px solid ${goalObj?.color}30` }}>
                  <p className="text-xs mb-3" style={{ color: 'var(--text-muted)' }}>
                    Avec <strong style={{ color: 'white' }}>{deadlineResult.dailyTarget} kcal/jour</strong>, en {deadlineResult.days} jours tu devrais :
                  </p>
                  <div className="text-center">
                    <div className="font-anton text-4xl" style={{ color: goalObj?.color }}>
                      {parseFloat(deadlineResult.weightChange) > 0 ? '+' : ''}{deadlineResult.weightChange} kg
                    </div>
                    <div className="text-xs mt-1" style={{ color: 'var(--text-muted)' }}>
                      {parseFloat(deadlineResult.weightChange) < 0 ? 'perdus' : 'pris'} d'ici ta date
                    </div>
                  </div>
                  {deadlineResult.projectedWeight && (
                    <div className="mt-3 pt-3 text-center" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                      <div className="text-xs" style={{ color: 'var(--text-muted)' }}>Poids estimé à la date :</div>
                      <div className="font-semibold text-lg">{deadlineResult.projectedWeight} kg</div>
                    </div>
                  )}
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

const RATES = [
  { value: 0.5, label: '0,5 kg', desc: 'Doux' },
  { value: 1,   label: '1 kg',   desc: 'Modéré' },
  { value: 1.5, label: '1,5 kg', desc: 'Rapide' },
]

export default function CalculatorPage() {
  const [form, setForm] = useState({ age: '', weight: '', height: '', gender: 'homme', activity: 'modere', goal: 'maintien', rate: 1 })
  const [result, setResult] = useState(null)

  const set = (key, val) => setForm(f => ({ ...f, [key]: val }))

  const calculate = () => {
    const age = parseInt(form.age)
    const weight = parseFloat(form.weight)
    const height = parseFloat(form.height)

    if (!age || !weight || !height) return

    const bmi = weight / Math.pow(height / 100, 2)
    const idealWeight = form.gender === 'homme'
      ? 50 + 0.91 * (height - 152.4)
      : 45.5 + 0.91 * (height - 152.4)

    const bmr = form.gender === 'homme'
      ? 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age)
      : 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age)

    const activityFactor = ACTIVITY_LEVELS.find(a => a.key === form.activity)?.factor || 1.55
    const tdee = bmr * activityFactor

    // Calcul dynamique du modificateur selon le rythme choisi (kg/mois → kcal/jour)
    let goalModifier = 0
    if (form.goal === 'perte') goalModifier = -Math.round((form.rate * 7700) / 30)
    else if (form.goal === 'prise') goalModifier = Math.round((form.rate * 7700) / 30)
    const targetCalories = tdee + goalModifier

    const proteins = Math.round((targetCalories * 0.30) / 4)
    const carbs = Math.round((targetCalories * 0.40) / 4)
    const fats = Math.round((targetCalories * 0.30) / 9)

    setResult({ bmi: bmi.toFixed(1), idealWeight: idealWeight.toFixed(1), bmr: Math.round(bmr), tdee: Math.round(tdee), targetCalories: Math.round(targetCalories), proteins, carbs, fats })
  }

  const reset = () => {
    setResult(null)
    setForm({ age: '', weight: '', height: '', gender: 'homme', activity: 'modere', goal: 'maintien', rate: 1 })
  }

  const bmiCategory = result ? getBMICategory(parseFloat(result.bmi)) : null

  return (
    <div className="pt-20 min-h-screen">
      <SEOMeta path="/" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="text-center mb-12">
            <span className="section-label mb-6 inline-flex"><Calculator size={12} />Calculateur</span>
            <h1 className="font-anton text-5xl md:text-6xl tracking-wider mb-4">
              IMC &<br /><span className="gradient-text">CALORIES</span>
            </h1>
            <p style={{ color: 'var(--text-secondary)' }}>
              Calcule ton IMC, tes besoins caloriques et ton plan jusqu'à une date cible.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Form */}
            <div className="card p-8 space-y-6">
              <h2 className="font-semibold text-lg">Tes données</h2>

              {/* Gender */}
              <div>
                <label className="text-xs uppercase tracking-widest font-semibold mb-3 block" style={{ color: 'var(--text-muted)' }}>Sexe</label>
                <div className="flex gap-3">
                  {['homme', 'femme'].map(g => (
                    <button
                      key={g}
                      onClick={() => set('gender', g)}
                      className="flex-1 py-2.5 rounded-lg text-sm font-semibold capitalize transition-all"
                      style={{
                        background: form.gender === g ? 'var(--accent)' : 'var(--bg-elevated)',
                        color: form.gender === g ? '#000' : 'var(--text-secondary)',
                        border: `1px solid ${form.gender === g ? 'var(--accent)' : 'var(--border)'}`,
                      }}
                    >
                      {g === 'homme' ? '♂ Homme' : '♀ Femme'}
                    </button>
                  ))}
                </div>
              </div>

              {/* Metrics */}
              <div className="grid grid-cols-3 gap-4">
                {[
                  { key: 'age', label: 'Âge', unit: 'ans', placeholder: '25' },
                  { key: 'weight', label: 'Poids', unit: 'kg', placeholder: '75' },
                  { key: 'height', label: 'Taille', unit: 'cm', placeholder: '175' },
                ].map(({ key, label, unit, placeholder }) => (
                  <div key={key}>
                    <label className="text-xs uppercase tracking-widest font-semibold mb-2 block" style={{ color: 'var(--text-muted)' }}>{label}</label>
                    <div className="relative">
                      <input
                        type="number"
                        placeholder={placeholder}
                        value={form[key]}
                        onChange={e => set(key, e.target.value)}
                        className="w-full px-3 py-3 rounded-lg text-sm outline-none pr-10"
                        style={{ background: 'var(--bg-elevated)', border: '1px solid var(--border)', color: 'white' }}
                      />
                      <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs" style={{ color: 'var(--text-muted)' }}>{unit}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Activity */}
              <div>
                <label className="text-xs uppercase tracking-widest font-semibold mb-3 block" style={{ color: 'var(--text-muted)' }}>Niveau d'activité</label>
                <div className="space-y-2">
                  {ACTIVITY_LEVELS.map(a => (
                    <button
                      key={a.key}
                      onClick={() => set('activity', a.key)}
                      className="w-full flex items-center justify-between px-4 py-3 rounded-lg text-sm transition-all text-left"
                      style={{
                        background: form.activity === a.key ? 'rgba(245,197,24,0.1)' : 'var(--bg-elevated)',
                        border: `1px solid ${form.activity === a.key ? 'rgba(245,197,24,0.3)' : 'var(--border)'}`,
                      }}
                    >
                      <span style={{ color: form.activity === a.key ? 'var(--accent)' : 'white' }} className="font-semibold">{a.label}</span>
                      <span className="text-xs" style={{ color: 'var(--text-muted)' }}>{a.desc}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Goal */}
              <div>
                <label className="text-xs uppercase tracking-widest font-semibold mb-3 block" style={{ color: 'var(--text-muted)' }}>Objectif</label>
                <div className="flex gap-3">
                  {GOALS.map(g => (
                    <button
                      key={g.key}
                      onClick={() => set('goal', g.key)}
                      className="flex-1 py-2.5 rounded-lg text-xs font-semibold transition-all"
                      style={{
                        background: form.goal === g.key ? g.color + '20' : 'var(--bg-elevated)',
                        color: form.goal === g.key ? g.color : 'var(--text-secondary)',
                        border: `1px solid ${form.goal === g.key ? g.color + '50' : 'var(--border)'}`,
                      }}
                    >
                      {g.label}
                    </button>
                  ))}
                </div>

                {/* Rythme mensuel — visible seulement si perte ou prise */}
                <AnimatePresence>
                  {(form.goal === 'perte' || form.goal === 'prise') && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <div className="mt-3">
                        <p className="text-xs mb-2" style={{ color: 'var(--text-muted)' }}>
                          Rythme souhaité <span className="font-semibold" style={{ color: 'white' }}>par mois</span>
                        </p>
                        <div className="flex gap-2">
                          {RATES.map(r => {
                            const goalColor = GOALS.find(g => g.key === form.goal)?.color
                            const active = form.rate === r.value
                            return (
                              <button
                                key={r.value}
                                onClick={() => set('rate', r.value)}
                                className="flex-1 py-2 rounded-lg text-xs font-semibold transition-all flex flex-col items-center gap-0.5"
                                style={{
                                  background: active ? goalColor + '20' : 'var(--bg-elevated)',
                                  color: active ? goalColor : 'var(--text-muted)',
                                  border: `1px solid ${active ? goalColor + '50' : 'var(--border)'}`,
                                }}
                              >
                                <span className="font-bold">{r.label}</span>
                                <span className="text-[10px] opacity-70">{r.desc}</span>
                              </button>
                            )
                          })}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <button onClick={calculate} className="btn-primary w-full py-4 flex items-center justify-center gap-2">
                <Calculator size={16} />
                Calculer
              </button>
            </div>

            {/* Results */}
            <div>
              <AnimatePresence mode="wait">
                {!result ? (
                  <motion.div
                    key="empty"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="card p-8 h-full flex flex-col items-center justify-center text-center gap-4"
                    style={{ minHeight: 400 }}
                  >
                    <div className="w-16 h-16 rounded-2xl flex items-center justify-center" style={{ background: 'rgba(245,197,24,0.1)' }}>
                      <Calculator size={28} style={{ color: 'var(--accent)', opacity: 0.5 }} />
                    </div>
                    <p style={{ color: 'var(--text-muted)' }}>
                      Remplis le formulaire et clique sur <strong style={{ color: 'white' }}>Calculer</strong> pour voir tes résultats.
                    </p>
                  </motion.div>
                ) : (
                  <motion.div
                    key="results"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="space-y-4"
                  >
                    {/* BMI */}
                    <div className="card p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="font-semibold">Ton IMC</h3>
                        <span
                          className="text-xs font-bold px-3 py-1 rounded-full"
                          style={{ background: bmiCategory.color + '20', color: bmiCategory.color, border: `1px solid ${bmiCategory.color}40` }}
                        >
                          {bmiCategory.label}
                        </span>
                      </div>
                      <div className="font-anton text-5xl gradient-text mb-1">{result.bmi}</div>
                      <div className="text-xs mb-4" style={{ color: 'var(--text-muted)' }}>
                        Poids idéal estimé (formule Devine) : <strong style={{ color: 'white' }}>{result.idealWeight} kg</strong>
                      </div>
                      <div className="mt-2 relative mb-4">
                        <div className="h-2 rounded-full" style={{ background: 'linear-gradient(90deg, #60a5fa 0%, #4ade80 30%, #fbbf24 60%, #f87171 100%)' }} />
                        <div
                          className="absolute top-0 w-3 h-2 rounded-full bg-white shadow-lg -translate-x-1/2"
                          style={{ left: `${Math.min(95, Math.max(5, ((parseFloat(result.bmi) - 15) / 25) * 100))}%` }}
                        />
                        <div className="flex justify-between text-xs mt-1.5" style={{ color: 'var(--text-muted)' }}>
                          <span>Maigreur &lt;18.5</span><span>Normal 25</span><span>Surpoids 30</span><span>Obésité 35+</span>
                        </div>
                      </div>
                      {/* Conseil contextuel */}
                      <div className="flex items-start gap-2.5 px-3 py-2.5 rounded-lg mt-2" style={{ background: bmiCategory.color + '10', border: `1px solid ${bmiCategory.color}25` }}>
                        <span className="text-sm mt-0.5">💡</span>
                        <p className="text-xs leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{bmiCategory.tip}</p>
                      </div>
                    </div>

                    {/* Calories */}
                    <div className="card p-6">
                      <h3 className="font-semibold mb-4">Besoins caloriques</h3>
                      <div className="grid grid-cols-2 gap-3 mb-4">
                        <div className="rounded-xl p-4 text-center" style={{ background: 'var(--bg-elevated)' }}>
                          <div className="text-xs uppercase tracking-widest mb-1" style={{ color: 'var(--text-muted)' }}>Métabolisme de base</div>
                          <div className="font-anton text-2xl">{result.bmr}</div>
                          <div className="text-xs" style={{ color: 'var(--text-muted)' }}>kcal / jour</div>
                        </div>
                        <div className="rounded-xl p-4 text-center" style={{ background: 'rgba(245,197,24,0.08)', border: '1px solid rgba(245,197,24,0.2)' }}>
                          <div className="text-xs uppercase tracking-widest mb-1" style={{ color: 'var(--accent)' }}>Objectif {form.goal}</div>
                          <div className="font-anton text-2xl gradient-text">{result.targetCalories}</div>
                          <div className="text-xs" style={{ color: 'var(--text-muted)' }}>kcal / jour</div>
                        </div>
                      </div>
                      {/* Explication BMR vs TDEE */}
                      <div className="space-y-2">
                        <div className="flex items-start gap-2 text-xs px-3 py-2 rounded-lg" style={{ background: 'var(--bg-elevated)' }}>
                          <span className="mt-0.5">🔥</span>
                          <span style={{ color: 'var(--text-muted)' }}><strong style={{ color: 'white' }}>Métabolisme de base (BMR)</strong> — calories brûlées au repos, même sans bouger. C'est le minimum vital.</span>
                        </div>
                        <div className="flex items-start gap-2 text-xs px-3 py-2 rounded-lg" style={{ background: 'var(--bg-elevated)' }}>
                          <span className="mt-0.5">⚡</span>
                          <span style={{ color: 'var(--text-muted)' }}><strong style={{ color: 'white' }}>Ton objectif ({result.targetCalories} kcal)</strong> — ton TDEE ajusté pour {form.goal === 'perte' ? 'créer un déficit et perdre du poids' : form.goal === 'prise' ? 'créer un surplus et prendre de la masse' : 'maintenir ton poids actuel'}.</span>
                        </div>
                      </div>
                    </div>

                    {/* Macros */}
                    <div className="card p-6">
                      <h3 className="font-semibold mb-4">Macronutriments suggérés</h3>
                      <div className="grid grid-cols-3 gap-3 mb-4">
                        {[
                          { label: 'Protéines', value: result.proteins, unit: 'g', color: '#f87171' },
                          { label: 'Glucides', value: result.carbs, unit: 'g', color: '#fbbf24' },
                          { label: 'Lipides', value: result.fats, unit: 'g', color: '#60a5fa' },
                        ].map(m => (
                          <div key={m.label} className="rounded-xl p-4 text-center" style={{ background: m.color + '12', border: `1px solid ${m.color}25` }}>
                            <div className="font-anton text-2xl" style={{ color: m.color }}>{m.value}{m.unit}</div>
                            <div className="text-xs mt-1" style={{ color: 'var(--text-muted)' }}>{m.label}</div>
                          </div>
                        ))}
                      </div>
                      {/* Explications + exemples alimentaires */}
                      <div className="space-y-2">
                        {[
                          {
                            color: '#f87171', icon: '💪', title: 'Protéines', value: result.proteins,
                            desc: 'Construisent et réparent les muscles. Essentielles pour la récupération.',
                            examples: [
                              { food: '100g poulet', amount: '31g' },
                              { food: '100g thon', amount: '29g' },
                              { food: '2 œufs', amount: '13g' },
                              { food: '100g fromage blanc 0%', amount: '10g' },
                            ],
                          },
                          {
                            color: '#fbbf24', icon: '⚡', title: 'Glucides', value: result.carbs,
                            desc: 'Carburant principal de l\'effort. Rechargent le glycogène musculaire.',
                            examples: [
                              { food: '100g riz cuit', amount: '28g' },
                              { food: '100g pâtes cuites', amount: '25g' },
                              { food: '1 banane', amount: '27g' },
                              { food: '100g flocons d\'avoine', amount: '62g' },
                            ],
                          },
                          {
                            color: '#60a5fa', icon: '🛡️', title: 'Lipides', value: result.fats,
                            desc: 'Régulent les hormones. Indispensables au bon fonctionnement de l\'organisme.',
                            examples: [
                              { food: '1 cs huile d\'olive', amount: '14g' },
                              { food: '30g amandes', amount: '15g' },
                              { food: '½ avocat', amount: '15g' },
                              { food: '100g saumon', amount: '13g' },
                            ],
                          },
                        ].map(m => (
                          <div key={m.title} className="rounded-lg overflow-hidden" style={{ background: 'var(--bg-elevated)' }}>
                            <div className="flex items-start gap-3 px-3 py-2.5">
                              <span className="text-base mt-0.5">{m.icon}</span>
                              <div className="flex-1">
                                <span className="text-xs font-bold" style={{ color: m.color }}>{m.title} ({m.value}g) — </span>
                                <span className="text-xs" style={{ color: 'var(--text-muted)' }}>{m.desc}</span>
                              </div>
                            </div>
                            {/* Exemples alimentaires */}
                            <div className="px-3 pb-2.5 flex flex-wrap gap-1.5">
                              {m.examples.map(ex => (
                                <span key={ex.food} className="text-[10px] px-2 py-0.5 rounded-full" style={{ background: m.color + '12', color: m.color, border: `1px solid ${m.color}20` }}>
                                  {ex.food} = <strong>{ex.amount}</strong>
                                </span>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Conseils personnalisés selon l'objectif */}
                    {GOAL_TIPS[form.goal] && (
                      <div className="card p-6">
                        <h3 className="font-semibold mb-3 text-sm">
                          💡 Conseils pour{' '}
                          <span style={{ color: GOALS.find(g => g.key === form.goal)?.color }}>
                            {form.goal === 'perte' ? 'la perte de poids' : form.goal === 'prise' ? 'la prise de masse' : 'le maintien'}
                          </span>
                        </h3>
                        <div className="space-y-2">
                          {GOAL_TIPS[form.goal].map((t, i) => (
                            <div key={i} className="flex items-start gap-3 px-3 py-2.5 rounded-lg" style={{ background: 'var(--bg-elevated)' }}>
                              <span className="text-sm mt-0.5">{t.icon}</span>
                              <p className="text-xs leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{t.tip}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="flex gap-3">
                      <button onClick={reset} className="btn-outline flex-1 flex items-center justify-center gap-2 py-3">
                        <RotateCcw size={14} />
                        Recalculer
                      </button>
                      <Link to="/subscriptions" className="btn-primary flex-1 flex items-center justify-center gap-2 py-3">
                        Mon programme <ArrowRight size={14} />
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* DATE BUTOIR — pleine largeur, visible après calcul */}
          <AnimatePresence>
            {result && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="mt-8"
              >
                <DeadlineSection
                  tdee={result.tdee}
                  goal={form.goal}
                  currentWeight={form.weight}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  )
}
