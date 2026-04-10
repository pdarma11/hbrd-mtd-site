import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Users, TrendingUp, Calendar, LogOut, ChevronRight, Dumbbell,
  Plus, Trash2, Pencil, X, Check, MessageSquare, ChevronDown,
  ChevronUp, Star, Save, StickyNote, Clock, AlertCircle
} from 'lucide-react'
import { useAuth } from '../../contexts/AuthContext'
import { clients as initialClients } from '../../data/mockData'
import { useNavigate } from 'react-router-dom'

// ─── Helpers ───────────────────────────────────────────────────────────────

function formatDate(d = new Date()) {
  return d.toLocaleDateString('fr-FR', { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' })
}

const EMPTY_EXERCISE = { name: '', muscles: '', sets: 3, reps: '8-12', rest: '60s', rpe: 7 }

// ─── Sub-components ────────────────────────────────────────────────────────

function ExerciseModal({ exercise, onSave, onClose }) {
  const [form, setForm] = useState(exercise || EMPTY_EXERCISE)
  const set = (k, v) => setForm(f => ({ ...f, [k]: v }))

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4" style={{ background: 'rgba(0,0,0,0.75)' }}>
      <motion.div
        className="card w-full max-w-lg p-6"
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.2 }}
      >
        <div className="flex items-center justify-between mb-6">
          <h3 className="font-semibold text-lg">{exercise ? 'Modifier l\'exercice' : 'Ajouter un exercice'}</h3>
          <button onClick={onClose} className="p-1.5 rounded-lg hover:bg-white/10 transition-colors">
            <X size={16} />
          </button>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-widest mb-1.5" style={{ color: 'var(--text-muted)' }}>Nom de l'exercice</label>
            <input
              className="input w-full"
              value={form.name}
              onChange={e => set('name', e.target.value)}
              placeholder="ex : Squat barre"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold uppercase tracking-widest mb-1.5" style={{ color: 'var(--text-muted)' }}>Muscles ciblés</label>
            <input
              className="input w-full"
              value={form.muscles}
              onChange={e => set('muscles', e.target.value)}
              placeholder="ex : Quadriceps / Fessiers"
            />
          </div>
          <div className="grid grid-cols-3 gap-3">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-widest mb-1.5" style={{ color: 'var(--text-muted)' }}>Séries</label>
              <input
                type="number"
                className="input w-full"
                value={form.sets}
                min={1} max={10}
                onChange={e => set('sets', Number(e.target.value))}
              />
            </div>
            <div>
              <label className="block text-xs font-semibold uppercase tracking-widest mb-1.5" style={{ color: 'var(--text-muted)' }}>Répétitions</label>
              <input
                className="input w-full"
                value={form.reps}
                onChange={e => set('reps', e.target.value)}
                placeholder="8-12"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold uppercase tracking-widest mb-1.5" style={{ color: 'var(--text-muted)' }}>Repos</label>
              <input
                className="input w-full"
                value={form.rest}
                onChange={e => set('rest', e.target.value)}
                placeholder="60s"
              />
            </div>
          </div>
          <div>
            <label className="block text-xs font-semibold uppercase tracking-widest mb-1.5" style={{ color: 'var(--text-muted)' }}>
              RPE — Effort perçu <span style={{ color: 'var(--accent)' }}>{form.rpe}/10</span>
            </label>
            <input
              type="range" min={1} max={10} step={1}
              value={form.rpe}
              onChange={e => set('rpe', Number(e.target.value))}
              className="w-full accent-yellow-400"
            />
          </div>
        </div>

        <div className="flex gap-3 mt-6">
          <button onClick={onClose} className="btn-outline flex-1 py-2 text-sm">Annuler</button>
          <button
            onClick={() => { if (form.name.trim()) onSave(form) }}
            className="btn-primary flex-1 py-2 text-sm flex items-center justify-center gap-2"
            disabled={!form.name.trim()}
          >
            <Check size={14} />
            {exercise ? 'Modifier' : 'Ajouter'}
          </button>
        </div>
      </motion.div>
    </div>
  )
}

function NoteCard({ note, onDelete }) {
  const starColors = { info: '#60a5fa', warning: '#fbbf24', success: '#4ade80', urgent: '#f87171' }
  const starLabels = { info: 'Info', warning: 'Attention', success: 'Bravo', urgent: 'Urgent' }
  return (
    <motion.div
      className="card p-4 flex gap-3"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, x: 20 }}
      transition={{ duration: 0.2 }}
    >
      <div className="flex-shrink-0 mt-0.5">
        <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background: (starColors[note.type] || '#60a5fa') + '18' }}>
          {note.type === 'urgent' ? <AlertCircle size={13} style={{ color: starColors[note.type] }} /> : <StickyNote size={13} style={{ color: starColors[note.type] || '#60a5fa' }} />}
        </div>
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1 flex-wrap">
          <span className="text-xs font-bold px-2 py-0.5 rounded-full" style={{ background: (starColors[note.type] || '#60a5fa') + '18', color: starColors[note.type] || '#60a5fa' }}>
            {starLabels[note.type] || 'Info'}
          </span>
          {note.stars > 0 && (
            <div className="flex gap-0.5">
              {Array.from({ length: note.stars }).map((_, i) => <Star key={i} size={10} fill="currentColor" style={{ color: 'var(--accent)' }} />)}
            </div>
          )}
          <span className="text-xs flex items-center gap-1 ml-auto" style={{ color: 'var(--text-muted)' }}>
            <Clock size={10} />{note.date}
          </span>
        </div>
        <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{note.text}</p>
      </div>
      <button
        onClick={onDelete}
        className="flex-shrink-0 p-1 rounded-lg hover:bg-red-500/10 text-red-400 opacity-50 hover:opacity-100 transition-all"
      >
        <Trash2 size={12} />
      </button>
    </motion.div>
  )
}

// ─── Main Dashboard ────────────────────────────────────────────────────────

export default function AdminDashboard() {
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  // Client data (editable, local state)
  const [clientData, setClientData] = useState(initialClients)
  const [selectedClient, setSelectedClient] = useState(null)

  // Exercise editing state
  const [expandedDay, setExpandedDay] = useState(null)
  const [editingExercise, setEditingExercise] = useState(null) // { dayIdx, exIdx }
  const [addingToDay, setAddingToDay] = useState(null) // dayIdx

  // Notes state per client
  const [allNotes, setAllNotes] = useState({}) // { clientId: [note, ...] }
  const [noteText, setNoteText] = useState('')
  const [noteType, setNoteType] = useState('info')
  const [noteStars, setNoteStars] = useState(0)
  const [activeTab, setActiveTab] = useState('programme') // 'programme' | 'notes'

  const client = selectedClient ? clientData.find(c => c.id === selectedClient) : null
  const notes = (allNotes[selectedClient] || [])

  const handleLogout = () => { logout(); navigate('/') }

  // ── Exercise CRUD ──────────────────────────────────────────────────────

  const updateClient = (id, updater) =>
    setClientData(prev => prev.map(c => c.id === id ? updater(c) : c))

  const saveExercise = (dayIdx, exIdx, data) => {
    updateClient(selectedClient, c => {
      const schedule = c.program.schedule.map((day, di) => {
        if (di !== dayIdx) return day
        const exercises = [...day.exercises]
        if (exIdx === null) exercises.push(data)
        else exercises[exIdx] = data
        return { ...day, exercises }
      })
      return { ...c, program: { ...c.program, schedule } }
    })
    setEditingExercise(null)
    setAddingToDay(null)
  }

  const deleteExercise = (dayIdx, exIdx) => {
    updateClient(selectedClient, c => {
      const schedule = c.program.schedule.map((day, di) => {
        if (di !== dayIdx) return day
        return { ...day, exercises: day.exercises.filter((_, i) => i !== exIdx) }
      })
      return { ...c, program: { ...c.program, schedule } }
    })
  }

  // ── Notes CRUD ─────────────────────────────────────────────────────────

  const addNote = () => {
    if (!noteText.trim()) return
    const note = { id: Date.now(), text: noteText.trim(), type: noteType, stars: noteStars, date: formatDate() }
    setAllNotes(prev => ({ ...prev, [selectedClient]: [note, ...(prev[selectedClient] || [])] }))
    setNoteText('')
    setNoteStars(0)
  }

  const deleteNote = (id) => {
    setAllNotes(prev => ({ ...prev, [selectedClient]: (prev[selectedClient] || []).filter(n => n.id !== id) }))
  }

  const rpeColor = (rpe) => rpe >= 9 ? '#f87171' : rpe >= 7 ? '#fbbf24' : '#4ade80'

  return (
    <div className="min-h-screen pt-16" style={{ background: 'var(--bg-primary)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">

        {/* Header */}
        <motion.div
          className="flex items-center justify-between mb-8"
          initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}
        >
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-xl font-bold" style={{ background: 'var(--accent)', color: '#000' }}>
              {user?.avatar || 'PD'}
            </div>
            <div>
              <p className="text-sm" style={{ color: 'var(--text-muted)' }}>Dashboard Coach</p>
              <h1 className="font-anton text-3xl tracking-wide">Péryk Darmalingon</h1>
              <p className="text-sm" style={{ color: 'var(--accent)' }}>Coach HBRD MTD</p>
            </div>
          </div>
          <button onClick={handleLogout} className="btn-outline py-2 px-4 text-sm flex items-center gap-2">
            <LogOut size={14} />Déconnexion
          </button>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8"
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.1 }}
        >
          {[
            { icon: Users, label: 'Clients actifs', value: clientData.length, color: 'var(--accent)' },
            { icon: Calendar, label: 'Programmes actifs', value: clientData.length, color: '#60a5fa' },
            { icon: TrendingUp, label: 'Séances faites cette sem.', value: clientData.reduce((acc, c) => acc + c.program.schedule.filter(d => d.done).length, 0), color: '#4ade80' },
            { icon: MessageSquare, label: 'Notes coach au total', value: Object.values(allNotes).reduce((a, arr) => a + arr.length, 0), color: '#c084fc' },
          ].map((stat) => (
            <div key={stat.label} className="card p-5">
              <stat.icon size={18} className="mb-3" style={{ color: stat.color }} />
              <div className="font-anton text-3xl" style={{ color: stat.color }}>{stat.value}</div>
              <div className="text-xs mt-1" style={{ color: 'var(--text-muted)' }}>{stat.label}</div>
            </div>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* ── Client list ── */}
          <div className="space-y-3">
            <h2 className="font-semibold text-xs uppercase tracking-widest mb-4" style={{ color: 'var(--text-muted)' }}>
              Mes clients ({clientData.length})
            </h2>
            {clientData.map((c, i) => (
              <motion.button
                key={c.id}
                onClick={() => { setSelectedClient(c.id); setExpandedDay(null); setActiveTab('programme') }}
                className="w-full card p-5 text-left hover:border-white/20 transition-all"
                style={{ borderColor: selectedClient === c.id ? 'var(--accent)' : undefined }}
                initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3, delay: i * 0.05 }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold flex-shrink-0" style={{ background: 'var(--accent)', color: '#000' }}>
                    {c.avatar}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-semibold text-sm">{c.name}</div>
                    <div className="text-xs" style={{ color: 'var(--text-muted)' }}>{c.goal}</div>
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    <span className="tag tag-accent" style={{ fontSize: '10px' }}>S{c.program.currentWeek}/{c.program.totalWeeks}</span>
                    {(allNotes[c.id] || []).length > 0 && (
                      <span className="text-xs flex items-center gap-0.5" style={{ color: '#c084fc' }}>
                        <MessageSquare size={10} />{(allNotes[c.id] || []).length}
                      </span>
                    )}
                  </div>
                </div>
                <div className="mt-3">
                  <div className="progress-bar">
                    <div className="progress-bar-fill" style={{ width: `${(c.program.currentWeek / c.program.totalWeeks) * 100}%` }} />
                  </div>
                </div>
              </motion.button>
            ))}
          </div>

          {/* ── Client detail ── */}
          <div className="lg:col-span-2">
            {client ? (
              <motion.div key={client.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }} className="space-y-4">

                {/* Client header card */}
                <div className="card p-6">
                  <div className="flex items-center gap-4 mb-5">
                    <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-xl font-bold" style={{ background: 'var(--accent)', color: '#000' }}>{client.avatar}</div>
                    <div className="flex-1">
                      <h2 className="font-semibold text-xl">{client.name}</h2>
                      <p className="text-sm" style={{ color: 'var(--text-muted)' }}>{client.age} ans · {client.height}cm · {client.weight}kg</p>
                      <span className="tag tag-accent mt-1">{client.goal}</span>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-5">
                    {[
                      { label: 'Poids départ', value: `${client.stats.weightStart} kg` },
                      { label: 'Poids actuel', value: `${client.stats.weightCurrent} kg`, delta: client.stats.weightCurrent - client.stats.weightStart },
                      { label: 'BF départ', value: `${client.stats.bodyFatStart}%` },
                      { label: 'BF actuel', value: `${client.stats.bodyFatCurrent}%`, delta: client.stats.bodyFatCurrent - client.stats.bodyFatStart },
                    ].map((s) => (
                      <div key={s.label} className="card-elevated p-3 rounded-xl text-center">
                        <div className="font-bold">{s.value}</div>
                        {s.delta !== undefined && (
                          <div className={`text-xs font-bold ${s.delta < 0 ? 'text-green-400' : s.delta > 0 ? 'text-red-400' : 'text-white'}`}>
                            {s.delta > 0 ? '+' : ''}{s.delta.toFixed(1)}
                          </div>
                        )}
                        <div className="text-xs mt-0.5" style={{ color: 'var(--text-muted)' }}>{s.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Progress */}
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span style={{ color: 'var(--text-secondary)' }}>{client.program.name}</span>
                      <span className="font-semibold">Semaine {client.program.currentWeek}/{client.program.totalWeeks}</span>
                    </div>
                    <div className="progress-bar"><div className="progress-bar-fill" style={{ width: `${(client.program.currentWeek / client.program.totalWeeks) * 100}%` }} /></div>
                  </div>
                </div>

                {/* ── Tabs ── */}
                <div className="flex gap-2 p-1 rounded-xl" style={{ background: 'var(--bg-card)', border: '1px solid var(--border)' }}>
                  {[
                    { id: 'programme', label: 'Programme & Exercices', icon: Dumbbell },
                    { id: 'notes', label: `Notes coach${notes.length > 0 ? ` (${notes.length})` : ''}`, icon: MessageSquare },
                  ].map(tab => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg text-sm font-medium transition-all"
                      style={{
                        background: activeTab === tab.id ? 'var(--bg-elevated)' : 'transparent',
                        color: activeTab === tab.id ? 'white' : 'var(--text-muted)',
                        border: activeTab === tab.id ? '1px solid var(--border)' : '1px solid transparent',
                      }}
                    >
                      <tab.icon size={14} />
                      {tab.label}
                    </button>
                  ))}
                </div>

                {/* ── PROGRAMME TAB ── */}
                <AnimatePresence mode="wait">
                  {activeTab === 'programme' && (
                    <motion.div key="programme" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="space-y-3">
                      {client.program.schedule.map((day, dayIdx) => (
                        <div key={day.day} className="card overflow-hidden">
                          {/* Day header */}
                          <button
                            className="w-full flex items-center gap-3 p-4 hover:bg-white/5 transition-colors text-left"
                            onClick={() => setExpandedDay(expandedDay === dayIdx ? null : dayIdx)}
                          >
                            <div className={`w-2 h-2 rounded-full flex-shrink-0 ${day.done ? 'bg-green-400' : 'bg-white/20'}`} />
                            <div className="flex-1">
                              <span className="font-semibold text-sm">{day.day}</span>
                              <span className="text-xs ml-2" style={{ color: 'var(--text-muted)' }}>{day.label}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="text-xs" style={{ color: 'var(--text-muted)' }}>{day.exercises.length} exo{day.exercises.length > 1 ? 's' : ''}</span>
                              {day.done && <span className="tag tag-green" style={{ fontSize: '10px' }}>Fait</span>}
                              {expandedDay === dayIdx ? <ChevronUp size={14} style={{ color: 'var(--text-muted)' }} /> : <ChevronDown size={14} style={{ color: 'var(--text-muted)' }} />}
                            </div>
                          </button>

                          {/* Day exercises */}
                          <AnimatePresence>
                            {expandedDay === dayIdx && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.25 }}
                                style={{ overflow: 'hidden' }}
                              >
                                <div className="px-4 pb-4 space-y-2" style={{ borderTop: '1px solid var(--border)' }}>
                                  <div className="pt-3 space-y-2">
                                    {day.exercises.map((ex, exIdx) => (
                                      <div
                                        key={exIdx}
                                        className="flex items-center gap-3 p-3 rounded-xl group"
                                        style={{ background: 'var(--bg-elevated)' }}
                                      >
                                        <div className="flex-1 min-w-0">
                                          <div className="flex items-center gap-2 flex-wrap">
                                            <span className="font-medium text-sm">{ex.name}</span>
                                            <span className="text-xs px-1.5 py-0.5 rounded-md" style={{ background: rpeColor(ex.rpe) + '20', color: rpeColor(ex.rpe) }}>
                                              RPE {ex.rpe}
                                            </span>
                                          </div>
                                          <div className="text-xs mt-0.5 flex items-center gap-3 flex-wrap" style={{ color: 'var(--text-muted)' }}>
                                            <span>{ex.muscles}</span>
                                            <span className="font-semibold text-white">{ex.sets}×{ex.reps}</span>
                                            <span>{ex.rest} repos</span>
                                          </div>
                                        </div>
                                        <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0">
                                          <button
                                            onClick={() => setEditingExercise({ dayIdx, exIdx })}
                                            className="p-1.5 rounded-lg hover:bg-white/10 transition-colors"
                                            title="Modifier"
                                          >
                                            <Pencil size={12} style={{ color: 'var(--accent)' }} />
                                          </button>
                                          <button
                                            onClick={() => deleteExercise(dayIdx, exIdx)}
                                            className="p-1.5 rounded-lg hover:bg-red-500/10 transition-colors"
                                            title="Supprimer"
                                          >
                                            <Trash2 size={12} className="text-red-400" />
                                          </button>
                                        </div>
                                      </div>
                                    ))}

                                    {day.exercises.length === 0 && (
                                      <p className="text-xs py-3 text-center" style={{ color: 'var(--text-muted)' }}>Aucun exercice — clique sur "+" pour en ajouter</p>
                                    )}
                                  </div>

                                  {/* Add exercise button */}
                                  <button
                                    onClick={() => setAddingToDay(dayIdx)}
                                    className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-medium transition-all hover:bg-white/5 border border-dashed"
                                    style={{ borderColor: 'var(--border)', color: 'var(--accent)' }}
                                  >
                                    <Plus size={14} />
                                    Ajouter un exercice
                                  </button>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ))}
                    </motion.div>
                  )}

                  {/* ── NOTES TAB ── */}
                  {activeTab === 'notes' && (
                    <motion.div key="notes" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="space-y-4">

                      {/* Add note form */}
                      <div className="card p-5">
                        <h3 className="font-semibold text-sm mb-4 flex items-center gap-2">
                          <MessageSquare size={14} style={{ color: 'var(--accent)' }} />
                          Nouvelle note pour {client.name.split(' ')[0]}
                        </h3>

                        <textarea
                          className="input w-full resize-none mb-4"
                          rows={3}
                          value={noteText}
                          onChange={e => setNoteText(e.target.value)}
                          placeholder="Observations, ajustements, points de vigilance..."
                          style={{ fontFamily: 'inherit' }}
                        />

                        <div className="flex items-center gap-4 flex-wrap">
                          {/* Type */}
                          <div className="flex gap-2 flex-wrap">
                            {[
                              { id: 'info', label: 'Info', color: '#60a5fa' },
                              { id: 'success', label: 'Bravo', color: '#4ade80' },
                              { id: 'warning', label: 'Attention', color: '#fbbf24' },
                              { id: 'urgent', label: 'Urgent', color: '#f87171' },
                            ].map(t => (
                              <button
                                key={t.id}
                                onClick={() => setNoteType(t.id)}
                                className="text-xs px-2.5 py-1 rounded-full font-semibold transition-all"
                                style={{
                                  background: noteType === t.id ? t.color + '25' : 'var(--bg-elevated)',
                                  color: noteType === t.id ? t.color : 'var(--text-muted)',
                                  border: `1px solid ${noteType === t.id ? t.color + '50' : 'var(--border)'}`,
                                }}
                              >
                                {t.label}
                              </button>
                            ))}
                          </div>

                          {/* Stars */}
                          <div className="flex items-center gap-1 ml-auto">
                            <span className="text-xs mr-1" style={{ color: 'var(--text-muted)' }}>Note :</span>
                            {[1, 2, 3, 4, 5].map(n => (
                              <button key={n} onClick={() => setNoteStars(noteStars === n ? 0 : n)}>
                                <Star
                                  size={16}
                                  fill={n <= noteStars ? 'currentColor' : 'none'}
                                  style={{ color: n <= noteStars ? 'var(--accent)' : 'var(--text-muted)' }}
                                />
                              </button>
                            ))}
                          </div>

                          <button
                            onClick={addNote}
                            disabled={!noteText.trim()}
                            className="btn-primary py-2 px-4 text-sm flex items-center gap-2"
                          >
                            <Save size={13} />Enregistrer
                          </button>
                        </div>
                      </div>

                      {/* Notes list */}
                      {notes.length > 0 ? (
                        <div className="space-y-3">
                          <p className="text-xs uppercase tracking-widest" style={{ color: 'var(--text-muted)' }}>{notes.length} note{notes.length > 1 ? 's' : ''}</p>
                          <AnimatePresence>
                            {notes.map(note => (
                              <NoteCard key={note.id} note={note} onDelete={() => deleteNote(note.id)} />
                            ))}
                          </AnimatePresence>
                        </div>
                      ) : (
                        <div className="card p-10 text-center">
                          <StickyNote size={36} className="mx-auto mb-3" style={{ color: 'var(--text-muted)' }} />
                          <p className="text-sm" style={{ color: 'var(--text-muted)' }}>Aucune note pour ce client</p>
                        </div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ) : (
              <div className="card p-12 text-center">
                <Users size={48} className="mx-auto mb-4" style={{ color: 'var(--text-muted)' }} />
                <h3 className="font-semibold mb-2">Sélectionne un client</h3>
                <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                  Clique sur un client pour voir son programme, modifier ses exercices et laisser des notes.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ── Modals ── */}
      <AnimatePresence>
        {(editingExercise !== null) && (
          <ExerciseModal
            key="edit"
            exercise={client?.program.schedule[editingExercise.dayIdx]?.exercises[editingExercise.exIdx]}
            onSave={(data) => saveExercise(editingExercise.dayIdx, editingExercise.exIdx, data)}
            onClose={() => setEditingExercise(null)}
          />
        )}
        {(addingToDay !== null) && (
          <ExerciseModal
            key="add"
            exercise={null}
            onSave={(data) => saveExercise(addingToDay, null, data)}
            onClose={() => setAddingToDay(null)}
          />
        )}
      </AnimatePresence>
    </div>
  )
}
