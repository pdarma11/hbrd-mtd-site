import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Cookie, X, CheckCircle2 } from 'lucide-react'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)
  const [accepted, setAccepted] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) {
      setTimeout(() => setVisible(true), 2000)
    }
  }, [])

  const accept = () => {
    localStorage.setItem('cookie-consent', 'accepted')
    setAccepted(true)
    setTimeout(() => setVisible(false), 800)
  }

  const decline = () => {
    localStorage.setItem('cookie-consent', 'declined')
    setVisible(false)
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          style={{
            position: 'fixed',
            bottom: 24,
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 9999,
            width: '100%',
            maxWidth: 680,
            padding: '0 16px',
          }}
        >
          <div
            style={{
              background: 'rgba(17,17,17,0.95)',
              border: '1px solid rgba(245,197,24,0.2)',
              borderRadius: 16,
              padding: '20px 24px',
              backdropFilter: 'blur(20px)',
              boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
            }}
          >
            <div className="flex items-start gap-4">
              <div
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 10,
                  background: 'rgba(245,197,24,0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                {accepted ? (
                  <CheckCircle2 size={20} style={{ color: '#4ade80' }} />
                ) : (
                  <Cookie size={20} style={{ color: 'var(--accent)' }} />
                )}
              </div>
              <div className="flex-1">
                <p className="text-sm font-semibold mb-1">
                  {accepted ? 'Préférences enregistrées ✓' : 'Ce site utilise des cookies'}
                </p>
                <p className="text-xs" style={{ color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                  Nous utilisons des cookies pour améliorer votre expérience, analyser le trafic et personnaliser le contenu.
                  En continuant, vous acceptez notre{' '}
                  <a href="/confidentialite" style={{ color: 'var(--accent)', textDecoration: 'underline' }}>
                    politique de confidentialité
                  </a>
                  .
                </p>
              </div>
              {!accepted && (
                <button onClick={decline} style={{ color: 'var(--text-muted)', flexShrink: 0, padding: 4 }}>
                  <X size={16} />
                </button>
              )}
            </div>
            {!accepted && (
              <div className="flex gap-3 mt-4 justify-end">
                <button
                  onClick={decline}
                  className="text-xs font-semibold px-5 py-2 rounded-lg transition-all"
                  style={{
                    background: 'transparent',
                    border: '1px solid var(--border)',
                    color: 'var(--text-secondary)',
                  }}
                >
                  Refuser
                </button>
                <button
                  onClick={accept}
                  className="text-xs font-bold px-5 py-2 rounded-lg transition-all"
                  style={{
                    background: 'var(--accent)',
                    color: '#000',
                  }}
                >
                  Accepter
                </button>
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
