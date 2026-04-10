import { useState } from 'react'
import { useLocation, Link, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, Lock, CreditCard, CheckCircle2, User, Mail, Phone, MapPin, Calendar, Target, ChevronRight, Dumbbell, Wind, Zap, Trophy } from 'lucide-react'
import { subscriptions } from '../data/mockData'

const DISCIPLINE_LABELS = {
  musculation: { label: 'Musculation', emoji: '🏋️', color: '#F5C518' },
  running: { label: 'Running', emoji: '🏃', color: '#60a5fa' },
  'hybrid-athlete': { label: 'Hybrid Athlete', emoji: '⚡', color: '#c084fc' },
  hyrox: { label: 'HYROX', emoji: '🏆', color: '#f87171' },
}

const STEPS = [
  { n: 1, label: 'Coordonnées' },
  { n: 2, label: 'Paiement' },
  { n: 3, label: 'Confirmation' },
]

function StepBar({ current }) {
  return (
    <div className="flex items-center gap-0 mb-10">
      {STEPS.map((s, i) => (
        <div key={s.n} className="flex items-center flex-1">
          <div className="flex flex-col items-center">
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all"
              style={{
                background: current >= s.n ? 'var(--accent)' : 'var(--bg-elevated)',
                color: current >= s.n ? '#000' : 'var(--text-muted)',
                border: current === s.n ? '2px solid var(--accent)' : '1px solid var(--border)',
              }}
            >
              {current > s.n ? '✓' : s.n}
            </div>
            <span className="text-[10px] mt-1 uppercase tracking-wider" style={{ color: current >= s.n ? 'var(--accent)' : 'var(--text-muted)' }}>{s.label}</span>
          </div>
          {i < STEPS.length - 1 && (
            <div className="flex-1 h-px mx-2 mb-4" style={{ background: current > s.n ? 'var(--accent)' : 'var(--border)' }} />
          )}
        </div>
      ))}
    </div>
  )
}

export default function Checkout() {
  const location = useLocation()
  const navigate = useNavigate()
  const sub = location.state?.subscription || subscriptions[1]
  const disciplineSlug = location.state?.discipline
  const disc = disciplineSlug ? DISCIPLINE_LABELS[disciplineSlug] : null

  const [step, setStep] = useState(1)
  const [form, setForm] = useState({
    firstName: '', lastName: '', email: '', phone: '', address: '', city: '', postalCode: '',
    objective: '', level: 'debutant',
    card: '', expiry: '', cvv: '', cardName: '',
  })
  const [loading, setLoading] = useState(false)
  const set = (k, v) => setForm(f => ({ ...f, [k]: v }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (step === 1) { setStep(2); window.scrollTo(0, 0); return }
    setLoading(true)
    await new Promise(r => setTimeout(r, 1800))
    setLoading(false)
    setStep(3)
  }

  /* ── Page de remerciement ── */
  if (step === 3) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center px-4" style={{ background: 'var(--bg)' }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="max-w-lg w-full"
        >
          {/* Confetti orb */}
          <div className="relative mb-8">
            <div className="absolute inset-0 rounded-full blur-3xl opacity-20" style={{ background: 'radial-gradient(circle, #4ade80, transparent)' }} />
            <motion.div
              className="w-24 h-24 rounded-full flex items-center justify-center mx-auto relative"
              style={{ background: 'rgba(74,222,128,0.12)', border: '2px solid rgba(74,222,128,0.3)' }}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
            >
              <CheckCircle2 size={48} style={{ color: '#4ade80' }} />
            </motion.div>
          </div>

          <div className="card p-10 text-center">
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
              <h1 className="font-anton text-4xl tracking-wider mb-2">BIENVENUE !</h1>
              <p className="font-semibold text-lg mb-6" style={{ color: 'var(--accent)' }}>
                Ta commande est confirmée 🎉
              </p>

              {/* Récap commande */}
              <div className="rounded-xl p-5 mb-6 text-left" style={{ background: 'var(--bg-elevated)', border: '1px solid var(--border)' }}>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-semibold">{sub.name}</span>
                  <span className="font-anton text-xl gradient-text">{sub.price}€<span className="text-xs font-sans font-normal ml-1" style={{ color: 'var(--text-muted)' }}>/{sub.period}</span></span>
                </div>
                {disc && (
                  <div className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full" style={{ background: disc.color + '15', color: disc.color }}>
                    {disc.emoji} {disc.label}
                  </div>
                )}
                <div className="separator my-3" />
                <div className="flex items-center gap-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
                  <Mail size={13} />
                  Confirmation envoyée à <strong className="text-white">{form.email}</strong>
                </div>
              </div>

              {/* Prochaines étapes */}
              <div className="text-left mb-8">
                <p className="text-xs uppercase tracking-widest font-semibold mb-4" style={{ color: 'var(--text-muted)' }}>Prochaines étapes</p>
                {[
                  { icon: '📧', title: 'Email de bienvenue', desc: 'Tu vas recevoir un email avec tes accès et les premières instructions.' },
                  { icon: '📞', title: 'Appel de démarrage', desc: 'Péryk te contacte sous 24h pour ton bilan initial et lancer ton programme.' },
                  { icon: '💪', title: 'Programme prêt', desc: 'Ton programme personnalisé sera disponible dans ton espace client sous 48h.' },
                ].map((step, i) => (
                  <div key={i} className="flex items-start gap-4 mb-4">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center text-base flex-shrink-0" style={{ background: 'var(--bg-elevated)' }}>
                      {step.icon}
                    </div>
                    <div>
                      <div className="text-sm font-semibold mb-0.5">{step.title}</div>
                      <div className="text-xs leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{step.desc}</div>
                    </div>
                  </div>
                ))}
              </div>

              <Link to="/login" className="btn-primary flex items-center gap-2 justify-center w-full py-4 text-base">
                Accéder à mon espace client
              </Link>
              <Link to="/" className="block mt-3 text-sm hover:text-white transition-colors" style={{ color: 'var(--text-muted)' }}>
                Retour à l'accueil
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="pt-20 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <button onClick={() => step === 1 ? navigate('/subscriptions') : setStep(1)} className="flex items-center gap-2 text-sm mb-8 hover:text-white transition-colors" style={{ color: 'var(--text-secondary)' }}>
            <ArrowLeft size={16} /> Retour
          </button>

          <h1 className="font-anton text-4xl tracking-wider mb-2">COMMANDER</h1>
          <StepBar current={step} />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Form */}
            <div className="lg:col-span-2">
              <AnimatePresence mode="wait">
                {step === 1 && (
                  <motion.form
                    key="step1"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-6"
                  >
                    {/* Identité */}
                    <div className="card p-7">
                      <h2 className="font-semibold mb-5 flex items-center gap-2">
                        <div className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold" style={{ background: 'var(--accent)', color: '#000' }}>1</div>
                        <User size={15} /> Informations personnelles
                      </h2>
                      <div className="grid grid-cols-2 gap-4 mb-4">
                        {[
                          { key: 'firstName', label: 'Prénom', placeholder: 'Thomas', type: 'text' },
                          { key: 'lastName', label: 'Nom', placeholder: 'Martin', type: 'text' },
                        ].map(({ key, label, placeholder, type }) => (
                          <div key={key}>
                            <label className="block text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: 'var(--text-muted)' }}>{label}</label>
                            <input type={type} placeholder={placeholder} value={form[key]} onChange={e => set(key, e.target.value)} required
                              className="w-full px-4 py-3 rounded-lg text-sm outline-none"
                              style={{ background: 'var(--bg-elevated)', border: '1px solid var(--border)', color: 'white' }} />
                          </div>
                        ))}
                      </div>
                      <div className="grid grid-cols-2 gap-4 mb-4">
                        {[
                          { key: 'email', label: 'Email', placeholder: 'thomas@gmail.com', type: 'email' },
                          { key: 'phone', label: 'Téléphone', placeholder: '06 12 34 56 78', type: 'tel' },
                        ].map(({ key, label, placeholder, type }) => (
                          <div key={key}>
                            <label className="block text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: 'var(--text-muted)' }}>{label}</label>
                            <input type={type} placeholder={placeholder} value={form[key]} onChange={e => set(key, e.target.value)} required
                              className="w-full px-4 py-3 rounded-lg text-sm outline-none"
                              style={{ background: 'var(--bg-elevated)', border: '1px solid var(--border)', color: 'white' }} />
                          </div>
                        ))}
                      </div>
                      <div className="grid grid-cols-3 gap-4">
                        <div className="col-span-2">
                          <label className="block text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: 'var(--text-muted)' }}>Adresse</label>
                          <input type="text" placeholder="12 rue des Sports" value={form.address} onChange={e => set('address', e.target.value)}
                            className="w-full px-4 py-3 rounded-lg text-sm outline-none"
                            style={{ background: 'var(--bg-elevated)', border: '1px solid var(--border)', color: 'white' }} />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: 'var(--text-muted)' }}>Code postal</label>
                          <input type="text" placeholder="75001" value={form.postalCode} onChange={e => set('postalCode', e.target.value)} maxLength={5}
                            className="w-full px-4 py-3 rounded-lg text-sm outline-none"
                            style={{ background: 'var(--bg-elevated)', border: '1px solid var(--border)', color: 'white' }} />
                        </div>
                      </div>
                    </div>

                    {/* Profil sportif */}
                    <div className="card p-7">
                      <h2 className="font-semibold mb-5 flex items-center gap-2">
                        <div className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold" style={{ background: 'var(--bg-elevated)', color: 'var(--accent)', border: '1px solid var(--accent)40' }}>2</div>
                        <Target size={15} /> Profil sportif
                      </h2>
                      <div className="mb-4">
                        <label className="block text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: 'var(--text-muted)' }}>Niveau</label>
                        <div className="flex gap-3">
                          {[
                            { key: 'debutant', label: 'Débutant', desc: '< 1 an' },
                            { key: 'intermediaire', label: 'Intermédiaire', desc: '1–3 ans' },
                            { key: 'avance', label: 'Avancé', desc: '> 3 ans' },
                          ].map(l => (
                            <button key={l.key} type="button" onClick={() => set('level', l.key)}
                              className="flex-1 py-2.5 rounded-lg text-xs font-semibold transition-all flex flex-col items-center gap-0.5"
                              style={{
                                background: form.level === l.key ? 'rgba(245,197,24,0.12)' : 'var(--bg-elevated)',
                                color: form.level === l.key ? 'var(--accent)' : 'var(--text-secondary)',
                                border: `1px solid ${form.level === l.key ? 'rgba(245,197,24,0.4)' : 'var(--border)'}`,
                              }}>
                              <span>{l.label}</span>
                              <span className="text-[10px] opacity-60">{l.desc}</span>
                            </button>
                          ))}
                        </div>
                      </div>
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: 'var(--text-muted)' }}>Objectif principal (optionnel)</label>
                        <input type="text" placeholder="Ex : perdre 5kg d'ici cet été, courir un semi-marathon..." value={form.objective} onChange={e => set('objective', e.target.value)}
                          className="w-full px-4 py-3 rounded-lg text-sm outline-none"
                          style={{ background: 'var(--bg-elevated)', border: '1px solid var(--border)', color: 'white' }} />
                      </div>
                    </div>

                    <button type="submit" className="btn-primary w-full py-4 flex items-center justify-center gap-2 text-base">
                      Continuer vers le paiement <ChevronRight size={16} />
                    </button>
                  </motion.form>
                )}

                {step === 2 && (
                  <motion.form
                    key="step2"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="card p-7">
                      <h2 className="font-semibold mb-6 flex items-center gap-2">
                        <div className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold" style={{ background: 'var(--accent)', color: '#000' }}>2</div>
                        <CreditCard size={15} /> Informations de paiement
                      </h2>

                      {/* Sécurité badge */}
                      <div className="flex items-center gap-2 text-xs px-3 py-2 rounded-lg mb-6" style={{ background: 'rgba(74,222,128,0.08)', border: '1px solid rgba(74,222,128,0.2)', color: '#4ade80' }}>
                        <Lock size={12} /> Paiement 100% sécurisé — SSL 256 bits
                      </div>

                      <div className="space-y-4">
                        <div>
                          <label className="block text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: 'var(--text-muted)' }}>Nom sur la carte</label>
                          <input type="text" placeholder="THOMAS MARTIN" value={form.cardName} onChange={e => set('cardName', e.target.value)} required
                            className="w-full px-4 py-3 rounded-lg text-sm outline-none"
                            style={{ background: 'var(--bg-elevated)', border: '1px solid var(--border)', color: 'white' }} />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: 'var(--text-muted)' }}>Numéro de carte</label>
                          <input type="text" placeholder="4242 4242 4242 4242" value={form.card}
                            onChange={e => {
                              const v = e.target.value.replace(/\D/g, '').slice(0, 16)
                              set('card', v.replace(/(.{4})/g, '$1 ').trim())
                            }}
                            required maxLength={19}
                            className="w-full px-4 py-3 rounded-lg text-sm outline-none font-mono"
                            style={{ background: 'var(--bg-elevated)', border: '1px solid var(--border)', color: 'white' }} />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="block text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: 'var(--text-muted)' }}>Expiration</label>
                            <input type="text" placeholder="MM/AA" value={form.expiry}
                              onChange={e => {
                                let v = e.target.value.replace(/\D/g, '').slice(0, 4)
                                if (v.length >= 2) v = v.slice(0, 2) + '/' + v.slice(2)
                                set('expiry', v)
                              }}
                              required maxLength={5}
                              className="w-full px-4 py-3 rounded-lg text-sm outline-none"
                              style={{ background: 'var(--bg-elevated)', border: '1px solid var(--border)', color: 'white' }} />
                          </div>
                          <div>
                            <label className="block text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: 'var(--text-muted)' }}>CVV</label>
                            <input type="text" placeholder="123" value={form.cvv} onChange={e => set('cvv', e.target.value.replace(/\D/g, '').slice(0, 3))} required maxLength={3}
                              className="w-full px-4 py-3 rounded-lg text-sm outline-none"
                              style={{ background: 'var(--bg-elevated)', border: '1px solid var(--border)', color: 'white' }} />
                          </div>
                        </div>
                      </div>

                      <button type="submit" disabled={loading} className="btn-primary w-full py-4 flex items-center justify-center gap-2 mt-8 text-base">
                        <Lock size={14} />
                        {loading ? (
                          <><div className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" /> Traitement sécurisé...</>
                        ) : `Payer ${sub.price}€`}
                      </button>

                      <p className="text-xs text-center mt-3" style={{ color: 'var(--text-muted)' }}>
                        En cliquant, vous acceptez nos <Link to="/cgv" className="underline">CGV</Link>. Annulation possible à tout moment.
                      </p>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>

            {/* Récapitulatif */}
            <div className="space-y-4">
              <div className="card p-6 sticky top-24">
                <h3 className="font-semibold mb-4 text-sm uppercase tracking-widest" style={{ color: 'var(--text-muted)' }}>Récapitulatif</h3>
                {disc && (
                  <div className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full mb-4" style={{ background: disc.color + '15', color: disc.color }}>
                    {disc.emoji} {disc.label}
                  </div>
                )}
                <div className="mb-4">
                  <div className="font-anton text-xl tracking-wider">{sub.name}</div>
                  <div className="text-sm mt-1" style={{ color: 'var(--text-muted)' }}>{sub.description}</div>
                </div>
                <div className="separator mb-4" />
                <div className="flex justify-between items-center mb-2">
                  <span style={{ color: 'var(--text-secondary)' }}>Sous-total</span>
                  <span>{sub.price}€</span>
                </div>
                <div className="flex justify-between items-center mb-4">
                  <span style={{ color: 'var(--text-secondary)' }}>TVA (20%)</span>
                  <span>{Math.round(sub.price * 0.2)}€</span>
                </div>
                <div className="separator mb-4" />
                <div className="flex justify-between items-center">
                  <span className="font-semibold">Total TTC</span>
                  <span className="font-anton text-2xl gradient-text">{sub.price}€<span className="text-sm font-sans font-normal ml-1" style={{ color: 'var(--text-muted)' }}>/ {sub.period}</span></span>
                </div>
                <p className="text-xs mt-4 text-center" style={{ color: 'var(--text-muted)' }}>
                  🔒 Paiement sécurisé · Satisfait ou remboursé 14j
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
