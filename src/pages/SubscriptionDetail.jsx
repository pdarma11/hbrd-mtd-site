import { useParams, Link, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, Check, ArrowRight } from 'lucide-react'
import { subscriptions } from '../data/mockData'

export default function SubscriptionDetail() {
  const { id } = useParams()
  const sub = subscriptions.find(s => s.id === id)
  if (!sub) return <Navigate to="/subscriptions" replace />

  return (
    <div className="pt-20 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <Link to="/subscriptions" className="flex items-center gap-2 text-sm mb-8 hover:text-white transition-colors" style={{ color: 'var(--text-secondary)' }}>
            <ArrowLeft size={16} /> Retour aux abonnements
          </Link>

          <div className="card p-10">
            {sub.popular && (
              <div className="inline-block text-xs font-bold px-4 py-1.5 rounded-full mb-6" style={{ background: 'var(--accent)', color: '#000' }}>
                ⭐ POPULAIRE
              </div>
            )}

            <h1 className="font-anton text-5xl tracking-wider mb-2">{sub.name}</h1>
            <p className="text-lg mb-8" style={{ color: 'var(--text-secondary)' }}>{sub.description}</p>

            <div className="flex items-baseline gap-2 mb-10">
              <span className="font-anton text-6xl gradient-text">{sub.price}€</span>
              <span className="text-lg" style={{ color: 'var(--text-muted)' }}>/ {sub.period}</span>
            </div>

            <div className="separator mb-8" />

            <h2 className="font-semibold mb-6 text-sm uppercase tracking-widest" style={{ color: 'var(--text-muted)' }}>Ce qui est inclus</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
              {sub.features.map((f) => (
                <div key={f} className="flex items-start gap-3 p-4 rounded-xl" style={{ background: 'var(--bg-elevated)' }}>
                  <Check size={16} className="flex-shrink-0 mt-0.5" style={{ color: '#4ade80' }} />
                  <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>{f}</span>
                </div>
              ))}
            </div>

            <Link
              to="/checkout"
              state={{ subscription: sub }}
              className="btn-primary flex items-center gap-2 justify-center text-base py-4 w-full"
            >
              Commander — {sub.price}€ / {sub.period} <ArrowRight size={16} />
            </Link>

            <p className="text-center text-xs mt-4" style={{ color: 'var(--text-muted)' }}>
              Satisfait ou remboursé 14 jours · Annulation à tout moment
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
