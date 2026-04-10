import { useState, useRef, useCallback } from 'react'
import { motion } from 'framer-motion'
import { Star, TrendingUp, ArrowRight, MoveHorizontal } from 'lucide-react'
import { Link } from 'react-router-dom'
import { clients } from '../data/mockData'
import SEOMeta from '../components/SEOMeta'

// Before/After comparison slider
function CompareSlider({ beforeLabel = 'AVANT', afterLabel = 'APRÈS', beforeColor = '#666', afterColor = '#F5C518', beforeStats, afterStats }) {
  const [position, setPosition] = useState(50)
  const isDragging = useRef(false)
  const containerRef = useRef(null)

  const getPos = useCallback((clientX) => {
    const rect = containerRef.current?.getBoundingClientRect()
    if (!rect) return 50
    const x = clientX - rect.left
    return Math.max(5, Math.min(95, (x / rect.width) * 100))
  }, [])

  const onMouseMove = useCallback((e) => {
    if (!isDragging.current) return
    setPosition(getPos(e.clientX))
  }, [getPos])

  const onTouchMove = useCallback((e) => {
    if (!isDragging.current) return
    setPosition(getPos(e.touches[0].clientX))
  }, [getPos])

  const startDrag = () => { isDragging.current = true }
  const stopDrag = () => { isDragging.current = false }

  return (
    <div
      ref={containerRef}
      onMouseMove={onMouseMove}
      onMouseUp={stopDrag}
      onMouseLeave={stopDrag}
      onTouchMove={onTouchMove}
      onTouchEnd={stopDrag}
      className="relative rounded-2xl overflow-hidden select-none"
      style={{
        height: 220,
        cursor: 'col-resize',
        background: 'var(--bg-elevated)',
        border: '1px solid var(--border)',
      }}
    >
      {/* AFTER side (right, full width) */}
      <div className="absolute inset-0 flex flex-col items-end justify-center pr-8">
        <div className="text-right">
          <div
            className="text-xs uppercase tracking-widest font-bold mb-3"
            style={{ color: afterColor }}
          >
            {afterLabel}
          </div>
          {afterStats.map((s) => (
            <div key={s.label} className="mb-2 text-right">
              <div className="font-bold" style={{ color: afterColor, fontSize: 18 }}>{s.value}</div>
              <div className="text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* BEFORE side (left, clipped) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <div
          className="absolute inset-0 flex flex-col items-start justify-center pl-8"
          style={{ background: 'rgba(0,0,0,0.3)' }}
        >
          <div className="text-left">
            <div className="text-xs uppercase tracking-widest font-bold mb-3" style={{ color: 'rgba(255,255,255,0.5)' }}>
              {beforeLabel}
            </div>
            {beforeStats.map((s) => (
              <div key={s.label} className="mb-2">
                <div className="font-bold text-white" style={{ fontSize: 18 }}>{s.value}</div>
                <div className="text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Divider */}
      <div
        className="absolute top-0 bottom-0 w-px"
        style={{ left: `${position}%`, background: afterColor }}
      >
        {/* Handle */}
        <div
          onMouseDown={startDrag}
          onTouchStart={startDrag}
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 40,
            height: 40,
            borderRadius: '50%',
            background: afterColor,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'col-resize',
            boxShadow: '0 4px 20px rgba(0,0,0,0.5)',
            zIndex: 10,
          }}
        >
          <MoveHorizontal size={18} color="#000" />
        </div>
      </div>

      {/* Instruction */}
      <div
        className="absolute bottom-3 left-1/2 -translate-x-1/2 text-xs font-semibold px-3 py-1 rounded-full"
        style={{ background: 'rgba(0,0,0,0.6)', color: 'rgba(255,255,255,0.5)', pointerEvents: 'none' }}
      >
        Glisse pour comparer
      </div>
    </div>
  )
}

const fadeUp = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6 } }

export default function Results() {
  return (
    <div className="pt-20">
      <SEOMeta path="/results" />

      <section className="py-24 px-4 sm:px-6 grid-bg">
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center mb-16" {...fadeUp}>
            <span className="section-label mb-6 inline-flex"><TrendingUp size={12} />Résultats clients</span>
            <h1 className="font-anton text-6xl md:text-7xl tracking-wider mb-4">
              DES RÉSULTATS<br /><span className="gradient-text">RÉELS & MESURÉS</span>
            </h1>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
              Pas de promesses vides. Des chiffres concrets, des transformations documentées.
            </p>
          </motion.div>

          {/* Client Results */}
          <div className="space-y-10">
            {clients.map((client, i) => (
              <motion.div
                key={client.id}
                className="card overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-3">
                  {/* Profile */}
                  <div className="p-8 flex flex-col justify-between" style={{ background: 'var(--bg-elevated)', borderRight: '1px solid var(--border)' }}>
                    <div>
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-xl font-bold" style={{ background: 'var(--accent)', color: '#000' }}>
                          {client.avatar}
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg">{client.name}</h3>
                          <p className="text-sm" style={{ color: 'var(--text-muted)' }}>{client.age} ans · {client.height}cm</p>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="text-xs uppercase tracking-widest font-semibold mb-3" style={{ color: 'var(--text-muted)' }}>Objectif</div>
                        <span className="tag tag-accent">{client.goal}</span>
                      </div>
                    </div>
                    <div className="mt-6">
                      <div className="text-xs uppercase tracking-widest font-semibold mb-3" style={{ color: 'var(--text-muted)' }}>Programme</div>
                      <p className="text-sm font-medium">{client.program.name}</p>
                      <p className="text-xs mt-1" style={{ color: 'var(--text-muted)' }}>{client.program.duration} · {client.program.frequency}</p>
                    </div>
                  </div>

                  {/* Stats + Slider */}
                  <div className="p-8 col-span-2">
                    {/* Comparison slider */}
                    <div className="mb-8">
                      <h4 className="text-sm font-semibold mb-4 flex items-center gap-2">
                        <MoveHorizontal size={14} style={{ color: 'var(--accent)' }} />
                        Comparaison avant / après
                      </h4>
                      <CompareSlider
                        beforeStats={[
                          { label: 'Poids de départ', value: `${client.stats.weightStart} kg` },
                          { label: 'Body fat', value: `${client.stats.bodyFatStart}%` },
                        ]}
                        afterStats={[
                          { label: 'Poids actuel', value: `${client.stats.weightCurrent} kg` },
                          { label: 'Body fat', value: `${client.stats.bodyFatCurrent}%` },
                        ]}
                      />
                    </div>

                    {/* Stats numbers */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                      {[
                        { label: 'Poids départ', value: `${client.stats.weightStart} kg`, delta: null },
                        { label: 'Poids actuel', value: `${client.stats.weightCurrent} kg`, delta: client.stats.weightCurrent - client.stats.weightStart },
                        { label: 'Body fat départ', value: `${client.stats.bodyFatStart}%`, delta: null },
                        { label: 'Body fat actuel', value: `${client.stats.bodyFatCurrent}%`, delta: client.stats.bodyFatCurrent - client.stats.bodyFatStart },
                      ].map((stat) => (
                        <div key={stat.label} className="card-elevated p-4 rounded-xl text-center">
                          <div className="font-anton text-2xl text-white">{stat.value}</div>
                          {stat.delta !== null && (
                            <div className="text-xs font-bold text-green-400">
                              {stat.delta > 0 ? '+' : ''}{stat.delta.toFixed(1)} {stat.label.includes('fat') ? '%' : 'kg'}
                            </div>
                          )}
                          <div className="text-xs mt-1" style={{ color: 'var(--text-muted)' }}>{stat.label}</div>
                        </div>
                      ))}
                    </div>

                    {/* Progress bar */}
                    <div className="mb-6">
                      <div className="flex justify-between text-sm mb-2">
                        <span style={{ color: 'var(--text-secondary)' }}>Progression du programme</span>
                        <span className="font-semibold">
                          Semaine {client.program.currentWeek}/{client.program.totalWeeks}
                        </span>
                      </div>
                      <div className="progress-bar">
                        <motion.div
                          className="progress-bar-fill"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${(client.program.currentWeek / client.program.totalWeeks) * 100}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.3 }}
                        />
                      </div>
                    </div>

                    {/* Testimonial */}
                    <div className="rounded-xl p-5" style={{ background: 'var(--bg-elevated)' }}>
                      <div className="flex gap-1 mb-3">
                        {Array.from({ length: client.testimonial.stars }).map((_, j) => (
                          <Star key={j} size={12} fill="currentColor" style={{ color: 'var(--accent)' }} />
                        ))}
                      </div>
                      <p className="text-sm italic leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                        "{client.testimonial.text}"
                      </p>
                      <div className="mt-3">
                        <span className="tag tag-green">{client.testimonial.result}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div className="text-center mt-16" {...fadeUp}>
            <h2 className="font-anton text-4xl tracking-wider mb-4">TU VEUX ÇA ?</h2>
            <p className="mb-8" style={{ color: 'var(--text-secondary)' }}>Rejoins le programme et commence ta transformation dès aujourd'hui.</p>
            <Link to="/subscriptions" className="btn-primary flex items-center gap-2 mx-auto w-fit text-base px-8 py-4">
              Voir les abonnements <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
