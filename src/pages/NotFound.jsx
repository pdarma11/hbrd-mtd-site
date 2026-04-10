import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, Home, Search } from 'lucide-react'

export default function NotFound() {
  const suggestions = [
    { label: 'Accueil', to: '/', icon: Home },
    { label: 'Programmes', to: '/subscriptions', icon: Search },
    { label: 'Exercices', to: '/exercises', icon: Search },
  ]

  return (
    <div className="min-h-screen flex items-center justify-center px-4 grid-bg relative overflow-hidden">
      {/* Animated orb */}
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full opacity-5 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, var(--accent) 0%, transparent 70%)',
          top: '50%',
          left: '50%',
          x: '-50%',
          y: '-50%',
        }}
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="relative z-10 text-center max-w-lg">
        {/* 404 number with glitch effect */}
        <div className="relative mb-4">
          <motion.div
            className="font-anton text-[160px] md:text-[220px] leading-none select-none"
            style={{ color: 'rgba(245,197,24,0.15)' }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
          >
            404
          </motion.div>

          {/* Glitch layers */}
          <motion.div
            className="font-anton text-[160px] md:text-[220px] leading-none select-none absolute inset-0 gradient-text"
            style={{ clipPath: 'inset(30% 0 50% 0)' }}
            animate={{
              x: [-3, 3, -3, 0],
              opacity: [0, 0.8, 0, 0],
            }}
            transition={{ duration: 0.3, repeat: Infinity, repeatDelay: 3 }}
          >
            404
          </motion.div>
          <motion.div
            className="font-anton text-[160px] md:text-[220px] leading-none select-none absolute inset-0"
            style={{ clipPath: 'inset(60% 0 20% 0)', color: '#60a5fa' }}
            animate={{
              x: [3, -3, 3, 0],
              opacity: [0, 0.6, 0, 0],
            }}
            transition={{ duration: 0.3, repeat: Infinity, repeatDelay: 3, delay: 0.05 }}
          >
            404
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h1 className="font-anton text-3xl md:text-4xl tracking-wider mb-3">PAGE INTROUVABLE</h1>
          <p className="mb-8 text-base" style={{ color: 'var(--text-secondary)' }}>
            Cette page n'existe pas ou a été déplacée.<br />
            Retourne sur le bon chemin 👇
          </p>
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row gap-3 justify-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.45 }}
        >
          <Link to="/" className="btn-primary flex items-center gap-2 justify-center px-8 py-3">
            <ArrowLeft size={16} />
            Retour à l'accueil
          </Link>
          <Link to="/subscriptions" className="btn-outline flex items-center gap-2 justify-center px-8 py-3">
            Voir les programmes
          </Link>
        </motion.div>

        {/* Suggestions */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <p className="text-xs uppercase tracking-widest mb-4" style={{ color: 'var(--text-muted)' }}>
            Pages suggérées
          </p>
          <div className="flex gap-3 justify-center flex-wrap">
            {suggestions.map((s) => (
              <Link
                key={s.to}
                to={s.to}
                className="text-sm px-4 py-2 rounded-lg transition-all"
                style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border)',
                  color: 'var(--text-secondary)',
                }}
              >
                {s.label}
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
