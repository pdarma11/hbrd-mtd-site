import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Instagram, CheckCircle2 } from 'lucide-react'

export default function Contact() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    await new Promise(r => setTimeout(r, 1200))
    setLoading(false)
    setSent(true)
  }

  if (sent) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center px-4">
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="card p-12 max-w-md w-full text-center">
          <CheckCircle2 size={64} className="mx-auto mb-6" style={{ color: '#4ade80' }} />
          <h2 className="font-anton text-3xl tracking-wider mb-4">MESSAGE ENVOYÉ !</h2>
          <p style={{ color: 'var(--text-secondary)' }}>Péryk te répondra sous 24h. Vérifie tes spams si tu ne reçois rien.</p>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="pt-20 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="text-center mb-12">
            <span className="section-label mb-6 inline-flex"><Mail size={12} />Contact</span>
            <h1 className="font-anton text-5xl tracking-wider mb-4">PRENDRE<br /><span className="gradient-text">CONTACT</span></h1>
            <p style={{ color: 'var(--text-secondary)' }}>Une question ? Un doute ? Écris-moi directement.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              {[
                { icon: Mail, label: 'Email', value: 'coach@hbrdmtd.fr' },
                { icon: Instagram, label: 'Instagram', value: '@hbrd_mtd' },
              ].map((c) => (
                <div key={c.label} className="card p-5 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: 'rgba(245,197,24,0.1)' }}>
                    <c.icon size={18} style={{ color: 'var(--accent)' }} />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-widest" style={{ color: 'var(--text-muted)' }}>{c.label}</div>
                    <div className="text-sm font-medium">{c.value}</div>
                  </div>
                </div>
              ))}
              <div className="card p-5">
                <div className="text-xs uppercase tracking-widest mb-2" style={{ color: 'var(--text-muted)' }}>Réponse garantie</div>
                <div className="text-sm font-medium">Sous 24h en semaine</div>
              </div>
            </div>

            <div className="md:col-span-2">
              <form onSubmit={handleSubmit} className="card p-8 space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { key: 'name', label: 'Nom', placeholder: 'Thomas Martin', type: 'text' },
                    { key: 'email', label: 'Email', placeholder: 'thomas@gmail.com', type: 'email' },
                  ].map(({ key, label, placeholder, type }) => (
                    <div key={key}>
                      <label className="block text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: 'var(--text-muted)' }}>{label}</label>
                      <input type={type} placeholder={placeholder} value={form[key]} onChange={e => setForm(f => ({ ...f, [key]: e.target.value }))} required className="w-full px-4 py-3 rounded-lg text-sm outline-none" style={{ background: 'var(--bg-elevated)', border: '1px solid var(--border)', color: 'white' }} />
                    </div>
                  ))}
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: 'var(--text-muted)' }}>Sujet</label>
                  <input type="text" placeholder="Question sur le coaching..." value={form.subject} onChange={e => setForm(f => ({ ...f, subject: e.target.value }))} required className="w-full px-4 py-3 rounded-lg text-sm outline-none" style={{ background: 'var(--bg-elevated)', border: '1px solid var(--border)', color: 'white' }} />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: 'var(--text-muted)' }}>Message</label>
                  <textarea rows={5} placeholder="Décris ta situation, tes objectifs, tes questions..." value={form.message} onChange={e => setForm(f => ({ ...f, message: e.target.value }))} required className="w-full px-4 py-3 rounded-lg text-sm outline-none resize-none" style={{ background: 'var(--bg-elevated)', border: '1px solid var(--border)', color: 'white' }} />
                </div>
                <button type="submit" disabled={loading} className="btn-primary w-full py-3.5">
                  {loading ? 'Envoi en cours...' : 'Envoyer le message'}
                </button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
