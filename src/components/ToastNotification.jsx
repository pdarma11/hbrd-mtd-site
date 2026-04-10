import { createContext, useContext, useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react'

const ToastContext = createContext(null)

const icons = {
  success: { Icon: CheckCircle2, color: '#4ade80' },
  error: { Icon: AlertCircle, color: '#f87171' },
  info: { Icon: Info, color: '#60a5fa' },
}

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([])

  const toast = useCallback((message, type = 'info', duration = 4000) => {
    const id = Date.now()
    setToasts((prev) => [...prev, { id, message, type }])
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id))
    }, duration)
  }, [])

  const remove = (id) => setToasts((prev) => prev.filter((t) => t.id !== id))

  return (
    <ToastContext.Provider value={toast}>
      {children}
      <div
        style={{
          position: 'fixed',
          top: 80,
          right: 24,
          zIndex: 99000,
          display: 'flex',
          flexDirection: 'column',
          gap: 10,
          maxWidth: 360,
          width: '100%',
          padding: '0 16px',
          pointerEvents: 'none',
        }}
      >
        <AnimatePresence>
          {toasts.map(({ id, message, type }) => {
            const { Icon, color } = icons[type] || icons.info
            return (
              <motion.div
                key={id}
                initial={{ opacity: 0, x: 60, scale: 0.9 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 60, scale: 0.9 }}
                transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                style={{
                  background: 'rgba(17,17,17,0.97)',
                  border: `1px solid ${color}33`,
                  borderRadius: 12,
                  padding: '14px 16px',
                  backdropFilter: 'blur(20px)',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 12,
                  pointerEvents: 'all',
                }}
              >
                <Icon size={18} style={{ color, flexShrink: 0 }} />
                <p style={{ flex: 1, fontSize: 13, color: 'rgba(255,255,255,0.9)', lineHeight: 1.4 }}>
                  {message}
                </p>
                <button onClick={() => remove(id)} style={{ color: 'rgba(255,255,255,0.3)', flexShrink: 0 }}>
                  <X size={14} />
                </button>
              </motion.div>
            )
          })}
        </AnimatePresence>
      </div>
    </ToastContext.Provider>
  )
}

export function useToast() {
  const ctx = useContext(ToastContext)
  if (!ctx) throw new Error('useToast must be inside ToastProvider')
  return ctx
}
