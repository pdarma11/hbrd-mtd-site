import { useState } from 'react'
import { useNavigate, Link, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { LogIn, Eye, EyeOff, AlertCircle, ArrowLeft } from 'lucide-react'
import { useAuth } from '../contexts/AuthContext'

export default function Login() {
  const { user, login } = useAuth()
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPwd, setShowPwd] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  if (user) {
    return <Navigate to={user.role === 'coach' ? '/admin' : '/client'} replace />
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)
    await new Promise(r => setTimeout(r, 600))
    const result = login(email, password)
    setLoading(false)
    if (result.success) {
      navigate(result.user.role === 'coach' ? '/admin' : '/client')
    } else {
      setError(result.error)
    }
  }

  const demoAccounts = [
    { label: 'Coach Péryk', email: 'coach@hbrdmtd.fr', password: 'coach2024', role: 'Coach' },
    { label: 'Thomas', email: 'thomas@gmail.com', password: 'thomas123', role: 'Client' },
    { label: 'Sarah', email: 'sarah@gmail.com', password: 'sarah123', role: 'Client' },
    { label: 'Lucas', email: 'lucas@gmail.com', password: 'lucas123', role: 'Client' },
  ]

  return (
    <div className="min-h-screen flex items-center justify-center px-4 pt-16 grid-bg">
      {/* Back button */}
      <button
        onClick={() => navigate(-1)}
        className="fixed top-5 left-4 z-50 flex items-center gap-2 text-sm font-medium transition-colors hover:text-white px-3 py-2 rounded-lg hover:bg-white/5"
        style={{ color: 'var(--text-secondary)' }}
      >
        <ArrowLeft size={16} />
        Retour
      </button>

      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ background: 'radial-gradient(circle at 50% 40%, var(--accent), transparent 60%)' }} />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md relative z-10"
      >
        {/* Logo */}
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="font-anton text-3xl" style={{ color: 'var(--accent)' }}>HBRD</span>
            <span className="font-anton text-3xl text-white">MTD</span>
          </div>
          <p style={{ color: 'var(--text-secondary)' }}>Connecte-toi à ton espace personnel</p>
        </div>

        {/* Form */}
        <div className="card p-8">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: 'var(--text-muted)' }}>
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="ton@email.fr"
                required
                className="w-full px-4 py-3 rounded-lg text-sm outline-none focus:border-white/30 transition-colors"
                style={{ background: 'var(--bg-elevated)', border: '1px solid var(--border)', color: 'white' }}
              />
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: 'var(--text-muted)' }}>
                Mot de passe
              </label>
              <div className="relative">
                <input
                  type={showPwd ? 'text' : 'password'}
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                  className="w-full px-4 py-3 pr-10 rounded-lg text-sm outline-none focus:border-white/30 transition-colors"
                  style={{ background: 'var(--bg-elevated)', border: '1px solid var(--border)', color: 'white' }}
                />
                <button
                  type="button"
                  onClick={() => setShowPwd(!showPwd)}
                  className="absolute right-3 top-1/2 -translate-y-1/2"
                  style={{ color: 'var(--text-muted)' }}
                >
                  {showPwd ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            {error && (
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 p-3 rounded-lg text-sm"
                style={{ background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.2)', color: '#f87171' }}
              >
                <AlertCircle size={14} />
                {error}
              </motion.div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="btn-primary w-full py-3.5 flex items-center justify-center gap-2"
            >
              {loading ? (
                <div className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />
              ) : (
                <>
                  <LogIn size={16} />
                  Se connecter
                </>
              )}
            </button>
          </form>

          <div className="separator my-6" />

          <p className="text-xs text-center mb-4" style={{ color: 'var(--text-muted)' }}>Comptes démo — clic pour remplir</p>
          <div className="grid grid-cols-2 gap-2">
            {demoAccounts.map((acc) => (
              <button
                key={acc.email}
                onClick={() => { setEmail(acc.email); setPassword(acc.password) }}
                className="p-3 rounded-lg text-left transition-colors hover:bg-white/5"
                style={{ background: 'var(--bg-elevated)', border: '1px solid var(--border)' }}
              >
                <div className="text-xs font-semibold">{acc.label}</div>
                <div className="text-xs mt-0.5" style={{ color: 'var(--accent)' }}>{acc.role}</div>
              </button>
            ))}
          </div>
        </div>

        <p className="text-center text-sm mt-6" style={{ color: 'var(--text-muted)' }}>
          Pas encore client ?{' '}
          <Link to="/subscriptions" className="underline hover:text-white transition-colors" style={{ color: 'var(--text-secondary)' }}>
            Voir les abonnements
          </Link>
        </p>
      </motion.div>
    </div>
  )
}
