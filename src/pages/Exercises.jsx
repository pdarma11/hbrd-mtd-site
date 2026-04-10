import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, Dumbbell, ChevronDown, CheckCircle2, XCircle } from 'lucide-react'
import { exercises } from '../data/mockData'

const levelColors = {
  'Débutant': 'tag-green',
  'Intermédiaire': 'tag-blue',
  'Avancé': 'tag-red',
}

const typeColors = {
  'Force': 'tag-accent',
  'Hypertrophie': 'tag-purple',
  'Cardio': 'tag-red',
  'Gainage': 'tag-blue',
}

const MUSCLES = ['Tous', 'Quadriceps', 'Dos', 'Pectoraux', 'Épaules', 'Fessiers', 'Biceps', 'Triceps', 'Ischio-jambiers', 'Mollets', 'Abdominaux', 'Core', 'Global']
const LEVELS = ['Tous', 'Débutant', 'Intermédiaire', 'Avancé']
const TYPES = ['Tous', 'Force', 'Hypertrophie', 'Cardio', 'Gainage']

export default function Exercises() {
  const [search, setSearch] = useState('')
  const [muscle, setMuscle] = useState('Tous')
  const [level, setLevel] = useState('Tous')
  const [type, setType] = useState('Tous')
  const [expanded, setExpanded] = useState(null)

  const filtered = exercises.filter(ex => {
    if (search && !ex.name.toLowerCase().includes(search.toLowerCase())) return false
    if (muscle !== 'Tous' && ex.muscle !== muscle) return false
    if (level !== 'Tous' && ex.level !== level) return false
    if (type !== 'Tous' && ex.type !== type) return false
    return true
  })

  return (
    <div className="pt-20">
      <section className="py-24 px-4 sm:px-6 grid-bg">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-label mb-6 inline-flex"><Dumbbell size={12} />Exercices</span>
            <h1 className="font-anton text-6xl md:text-7xl tracking-wider mb-4">
              BASE<br /><span className="gradient-text">D'EXERCICES</span>
            </h1>
            <p className="text-lg" style={{ color: 'var(--text-secondary)' }}>
              {exercises.length} exercices avec descriptions, muscles ciblés et niveau
            </p>
          </motion.div>

          {/* Filters */}
          <motion.div
            className="card p-6 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {/* Search */}
            <div className="relative mb-6">
              <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2" style={{ color: 'var(--text-muted)' }} />
              <input
                type="text"
                placeholder="Rechercher un exercice..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-lg text-sm outline-none focus:border-white/20 transition-colors"
                style={{
                  background: 'var(--bg-elevated)',
                  border: '1px solid var(--border)',
                  color: 'white',
                }}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Muscle filter */}
              <div>
                <label className="text-xs font-semibold uppercase tracking-widest mb-2 block" style={{ color: 'var(--text-muted)' }}>Muscle</label>
                <div className="flex flex-wrap gap-2">
                  {MUSCLES.map(m => (
                    <button
                      key={m}
                      onClick={() => setMuscle(m)}
                      className="text-xs px-3 py-1.5 rounded-lg transition-all"
                      style={{
                        background: muscle === m ? 'var(--accent)' : 'var(--bg-elevated)',
                        color: muscle === m ? '#000' : 'var(--text-secondary)',
                        border: `1px solid ${muscle === m ? 'var(--accent)' : 'var(--border)'}`,
                        fontWeight: muscle === m ? 700 : 500,
                      }}
                    >
                      {m}
                    </button>
                  ))}
                </div>
              </div>

              {/* Level filter */}
              <div>
                <label className="text-xs font-semibold uppercase tracking-widest mb-2 block" style={{ color: 'var(--text-muted)' }}>Niveau</label>
                <div className="flex flex-wrap gap-2">
                  {LEVELS.map(l => (
                    <button
                      key={l}
                      onClick={() => setLevel(l)}
                      className="text-xs px-3 py-1.5 rounded-lg transition-all"
                      style={{
                        background: level === l ? 'var(--accent)' : 'var(--bg-elevated)',
                        color: level === l ? '#000' : 'var(--text-secondary)',
                        border: `1px solid ${level === l ? 'var(--accent)' : 'var(--border)'}`,
                        fontWeight: level === l ? 700 : 500,
                      }}
                    >
                      {l}
                    </button>
                  ))}
                </div>
              </div>

              {/* Type filter */}
              <div>
                <label className="text-xs font-semibold uppercase tracking-widest mb-2 block" style={{ color: 'var(--text-muted)' }}>Type</label>
                <div className="flex flex-wrap gap-2">
                  {TYPES.map(t => (
                    <button
                      key={t}
                      onClick={() => setType(t)}
                      className="text-xs px-3 py-1.5 rounded-lg transition-all"
                      style={{
                        background: type === t ? 'var(--accent)' : 'var(--bg-elevated)',
                        color: type === t ? '#000' : 'var(--text-secondary)',
                        border: `1px solid ${type === t ? 'var(--accent)' : 'var(--border)'}`,
                        fontWeight: type === t ? 700 : 500,
                      }}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Results count */}
          <p className="text-sm mb-4" style={{ color: 'var(--text-muted)' }}>
            {filtered.length} exercice{filtered.length !== 1 ? 's' : ''} trouvé{filtered.length !== 1 ? 's' : ''}
          </p>

          {/* Exercise list */}
          <div className="space-y-2">
            <AnimatePresence>
              {filtered.map((ex, i) => (
                <motion.div
                  key={ex.id}
                  layout
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2, delay: i * 0.02 }}
                  className="card overflow-hidden"
                >
                  <button
                    className="w-full flex items-center gap-4 p-5 text-left"
                    onClick={() => setExpanded(expanded === ex.id ? null : ex.id)}
                  >
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 font-bold text-xs" style={{ background: 'var(--bg-elevated)', color: 'var(--accent)' }}>
                      {ex.id}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold text-sm">{ex.name}</div>
                      <div className="text-xs mt-0.5" style={{ color: 'var(--text-muted)' }}>{ex.muscle} · {ex.equipment}</div>
                    </div>
                    <div className="flex items-center gap-2 flex-shrink-0">
                      <span className={`tag ${levelColors[ex.level] || 'tag-accent'}`}>{ex.level}</span>
                      <span className={`tag ${typeColors[ex.type] || 'tag-accent'} hidden sm:inline-flex`}>{ex.type}</span>
                      <ChevronDown
                        size={16}
                        className="transition-transform"
                        style={{
                          color: 'var(--text-muted)',
                          transform: expanded === ex.id ? 'rotate(180deg)' : 'rotate(0)',
                        }}
                      />
                    </div>
                  </button>

                  <AnimatePresence>
                    {expanded === ex.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 pb-6 ml-12" style={{ borderTop: '1px solid var(--border)' }}>
                          {/* Description */}
                          <p className="text-sm leading-relaxed mt-4 mb-5" style={{ color: 'var(--text-secondary)' }}>
                            {ex.description}
                          </p>

                          {/* Points clés + erreurs */}
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                            {/* 3 points clés */}
                            <div className="rounded-xl p-5" style={{ background: 'rgba(74,222,128,0.05)', border: '1px solid rgba(74,222,128,0.15)' }}>
                              <div className="flex items-center gap-2 mb-4">
                                <CheckCircle2 size={15} style={{ color: '#4ade80' }} />
                                <span className="text-xs font-bold uppercase tracking-widest" style={{ color: '#4ade80' }}>
                                  3 points clés
                                </span>
                              </div>
                              <ul className="space-y-3">
                                {ex.keyPoints?.map((point, i) => (
                                  <li key={i} className="flex items-start gap-2.5">
                                    <span
                                      className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold mt-0.5"
                                      style={{ background: 'rgba(74,222,128,0.15)', color: '#4ade80' }}
                                    >
                                      {i + 1}
                                    </span>
                                    <span className="text-xs leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                                      {point}
                                    </span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            {/* 3 erreurs à éviter */}
                            <div className="rounded-xl p-5" style={{ background: 'rgba(248,113,113,0.05)', border: '1px solid rgba(248,113,113,0.15)' }}>
                              <div className="flex items-center gap-2 mb-4">
                                <XCircle size={15} style={{ color: '#f87171' }} />
                                <span className="text-xs font-bold uppercase tracking-widest" style={{ color: '#f87171' }}>
                                  3 erreurs à éviter
                                </span>
                              </div>
                              <ul className="space-y-3">
                                {ex.avoidPoints?.map((point, i) => (
                                  <li key={i} className="flex items-start gap-2.5">
                                    <span
                                      className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold mt-0.5"
                                      style={{ background: 'rgba(248,113,113,0.15)', color: '#f87171' }}
                                    >
                                      !
                                    </span>
                                    <span className="text-xs leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                                      {point}
                                    </span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>

                          <div className="flex flex-wrap gap-2">
                            <span className={`tag ${typeColors[ex.type] || 'tag-accent'}`}>{ex.type}</span>
                            <span className={`tag ${levelColors[ex.level] || 'tag-accent'}`}>{ex.level}</span>
                            <span className="tag" style={{ background: 'rgba(255,255,255,0.05)', color: 'var(--text-muted)', border: '1px solid var(--border)' }}>
                              {ex.equipment}
                            </span>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>
    </div>
  )
}
