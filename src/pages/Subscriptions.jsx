import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Check, X, Zap, Dumbbell, Wind, Trophy, ChevronRight, ArrowLeft } from 'lucide-react'
import { subscriptions, disciplinePricing } from '../data/mockData'

const fadeUp = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6 } }

const DISCIPLINES = [
  { slug: 'musculation', label: 'Musculation', icon: Dumbbell, color: '#F5C518', desc: 'Prise de masse, force, définition musculaire', emoji: '🏋️' },
  { slug: 'running', label: 'Running', icon: Wind, color: '#60a5fa', desc: '5km, 10km, semi-marathon, marathon', emoji: '🏃' },
  { slug: 'hybrid-athlete', label: 'Hybrid Athlete', icon: Zap, color: '#c084fc', desc: 'Force + endurance, performance complète', emoji: '⚡' },
  { slug: 'hyrox', label: 'HYROX', icon: Trophy, color: '#f87171', desc: 'Préparation compétition, 8km + 8 stations', emoji: '🏆' },
]

export default function Subscriptions() {
  const [selectedDiscipline, setSelectedDiscipline] = useState(null)
  const disc = DISCIPLINES.find(d => d.slug === selectedDiscipline)

  // Fusionne le plan de base avec le tarif spécifique à la discipline
  const getDiscPlan = (sub) => {
    const override = (disciplinePricing[selectedDiscipline] || []).find(p => p.id === sub.id)
    return override ? { ...sub, price: override.price, period: override.period, description: override.desc } : sub
  }

  return (
    <div className="pt-20">
      <section className="py-24 px-4 sm:px-6 grid-bg min-h-screen">
        <div className="max-w-7xl mx-auto">

          {/* Header */}
          <motion.div className="text-center mb-16" {...fadeUp}>
            <span className="section-label mb-6 inline-flex"><Zap size={12} />Abonnements</span>
            <h1 className="font-anton text-6xl md:text-7xl tracking-wider mb-4">
              CHOISIS TON<br /><span className="gradient-text">PROGRAMME</span>
            </h1>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
              Trois formules adaptées à ton niveau et tes objectifs. Satisfait ou remboursé 14 jours.
            </p>
          </motion.div>

          <AnimatePresence mode="wait">
            {!selectedDiscipline ? (
              /* ── ÉTAPE 1 : Discipline ── */
              <motion.div key="step1" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.35 }}>
                <div className="text-center mb-10">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-4" style={{ background: 'rgba(245,197,24,0.1)', border: '1px solid rgba(245,197,24,0.2)', color: 'var(--accent)' }}>
                    Étape 1 / 2
                  </div>
                  <h2 className="font-anton text-3xl tracking-wider">QUELLE EST TA DISCIPLINE ?</h2>
                  <p className="mt-2 text-sm" style={{ color: 'var(--text-muted)' }}>Sélectionne ta discipline pour voir les plans adaptés</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
                  {DISCIPLINES.map((d, i) => {
                    const Icon = d.icon
                    return (
                      <motion.button
                        key={d.slug}
                        onClick={() => setSelectedDiscipline(d.slug)}
                        className="card p-7 flex flex-col items-center text-center gap-4 group cursor-pointer"
                        style={{ border: `1px solid ${d.color}20` }}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: i * 0.08 }}
                        whileHover={{ scale: 1.03, borderColor: d.color + '60' }}
                      >
                        <div className="text-4xl">{d.emoji}</div>
                        <div className="w-12 h-12 rounded-2xl flex items-center justify-center" style={{ background: d.color + '15' }}>
                          <Icon size={22} style={{ color: d.color }} />
                        </div>
                        <div>
                          <div className="font-anton text-xl tracking-wider mb-1" style={{ color: d.color }}>{d.label}</div>
                          <div className="text-xs leading-relaxed" style={{ color: 'var(--text-muted)' }}>{d.desc}</div>
                        </div>
                        <div className="flex items-center gap-1 text-xs font-semibold mt-auto opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: d.color }}>
                          Voir les plans <ChevronRight size={12} />
                        </div>
                      </motion.button>
                    )
                  })}
                </div>

                <div className="text-center mt-10">
                  <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
                    Tu ne sais pas encore ?{' '}
                    <Link to="/quiz" className="underline hover:text-white transition-colors" style={{ color: 'var(--accent)' }}>
                      Fais le quiz orientation →
                    </Link>
                  </p>
                </div>
              </motion.div>

            ) : (
              /* ── ÉTAPE 2 : Plans ── */
              <motion.div key="step2" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.35 }}>
                <div className="text-center mb-10">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-4" style={{ background: (disc?.color || 'var(--accent)') + '15', border: `1px solid ${disc?.color || 'var(--accent)'}30`, color: disc?.color || 'var(--accent)' }}>
                    Étape 2 / 2 — {disc?.emoji} {disc?.label}
                  </div>
                  <h2 className="font-anton text-3xl tracking-wider">CHOISIS TON PLAN</h2>
                  <button onClick={() => setSelectedDiscipline(null)} className="mt-3 flex items-center gap-1 text-sm mx-auto hover:text-white transition-colors" style={{ color: 'var(--text-muted)' }}>
                    <ArrowLeft size={13} /> Changer de discipline
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                  {subscriptions.map((rawSub, i) => {
                    const sub = getDiscPlan(rawSub)
                    return (
                    <motion.div
                      key={sub.id}
                      className="card flex flex-col relative"
                      style={{ borderColor: sub.popular ? disc?.color || 'var(--accent)' : undefined, borderWidth: sub.popular ? 1 : undefined, transform: sub.popular ? 'scale(1.02)' : undefined }}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                    >
                      {sub.popular && (
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 text-xs font-bold px-5 py-1.5 rounded-full z-10" style={{ background: disc?.color || 'var(--accent)', color: '#000' }}>
                          ⭐ POPULAIRE
                        </div>
                      )}
                      {sub.badge && !sub.popular && (
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 text-xs font-bold px-5 py-1.5 rounded-full z-10" style={{ background: 'white', color: '#000' }}>
                          {sub.badge}
                        </div>
                      )}
                      <div className="p-8 flex-1 flex flex-col">
                        <div className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full mb-4 w-fit" style={{ background: (disc?.color || 'var(--accent)') + '15', color: disc?.color || 'var(--accent)' }}>
                          {disc?.emoji} {disc?.label}
                        </div>
                        <div className="mb-6">
                          <h2 className="font-anton text-2xl tracking-wider mb-1">{sub.name}</h2>
                          <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>{sub.description}</p>
                        </div>
                        <div className="mb-8">
                          <div className="flex items-baseline gap-1">
                            <span className="font-anton text-5xl gradient-text">{sub.price}€</span>
                            <span className="text-sm" style={{ color: 'var(--text-muted)' }}>/ {sub.period}</span>
                          </div>
                        </div>
                        <div className="separator mb-6" />
                        <div className="space-y-3 mb-8 flex-1">
                          {sub.features.map((f) => (
                            <div key={f} className="flex items-start gap-3">
                              <Check size={16} className="flex-shrink-0 mt-0.5" style={{ color: '#4ade80' }} />
                              <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>{f}</span>
                            </div>
                          ))}
                          {sub.notIncluded.map((f) => (
                            <div key={f} className="flex items-start gap-3 opacity-40">
                              <X size={16} className="flex-shrink-0 mt-0.5" style={{ color: '#f87171' }} />
                              <span className="text-sm line-through" style={{ color: 'var(--text-muted)' }}>{f}</span>
                            </div>
                          ))}
                        </div>
                        <Link
                          to="/checkout"
                          state={{ subscription: sub, discipline: selectedDiscipline }}
                          className={`text-center py-3 rounded-lg font-bold text-sm uppercase tracking-wider transition-all ${sub.popular ? 'btn-primary' : 'btn-outline'}`}
                        >
                          {sub.cta}
                        </Link>
                      </div>
                    </motion.div>
                  )})}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <motion.div className="text-center mt-16" {...fadeUp}>
            <p style={{ color: 'var(--text-muted)' }}>
              Des questions ?{' '}
              <Link to="/faq" className="underline hover:text-white transition-colors" style={{ color: 'var(--text-secondary)' }}>Consulte notre FAQ</Link>
              {' '}ou{' '}
              <Link to="/contact" className="underline hover:text-white transition-colors" style={{ color: 'var(--text-secondary)' }}>contacte-nous</Link>.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
