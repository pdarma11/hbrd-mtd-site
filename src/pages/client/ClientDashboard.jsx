import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ChevronDown, CheckCircle2, Circle, TrendingUp, Calendar, Dumbbell,
  Target, LogOut, Clock, Bell, Trophy, BarChart2, Activity
} from 'lucide-react'
import { useAuth } from '../../contexts/AuthContext'
import { clients } from '../../data/mockData'
import { useNavigate } from 'react-router-dom'

// Mini SVG line chart (no dependency)
function LineChart({ data, color = '#F5C518', label, unit }) {
  const values = data.map(d => d.value)
  const min = Math.min(...values) - 1
  const max = Math.max(...values) + 1
  const W = 300
  const H = 80
  const pad = 8

  const points = data.map((d, i) => {
    const x = pad + (i / (data.length - 1)) * (W - pad * 2)
    const y = H - pad - ((d.value - min) / (max - min)) * (H - pad * 2)
    return `${x},${y}`
  })

  const pathD = points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p}`).join(' ')
  const areaD = `${pathD} L ${W - pad},${H - pad} L ${pad},${H - pad} Z`

  const lastPoint = points[points.length - 1]?.split(',')
  const lastX = lastPoint ? parseFloat(lastPoint[0]) : 0
  const lastY = lastPoint ? parseFloat(lastPoint[1]) : 0

  return (
    <div>
      <div className="flex justify-between items-end mb-2">
        <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: 'var(--text-muted)' }}>{label}</span>
        <span className="font-anton text-xl" style={{ color }}>{values[values.length - 1]}{unit}</span>
      </div>
      <svg width="100%" viewBox={`0 0 ${W} ${H}`} style={{ overflow: 'visible' }}>
        <defs>
          <linearGradient id={`grad-${label}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={color} stopOpacity="0.2" />
            <stop offset="100%" stopColor={color} stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d={areaD} fill={`url(#grad-${label})`} />
        <path d={pathD} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx={lastX} cy={lastY} r={4} fill={color} />
      </svg>
      <div className="flex justify-between text-xs mt-1" style={{ color: 'var(--text-muted)' }}>
        {data.map(d => <span key={d.week}>S{d.week}</span>)}
      </div>
    </div>
  )
}

// Mini bar chart
function BarChart({ data, color = '#4ade80' }) {
  const max = Math.max(...data.map(d => d.value), 1)
  return (
    <div className="flex items-end gap-1.5 h-16">
      {data.map((d, i) => (
        <div key={i} className="flex-1 flex flex-col items-center gap-1">
          <motion.div
            className="w-full rounded-t-sm"
            style={{ background: d.done ? color : 'var(--border)', minHeight: 4 }}
            initial={{ height: 0 }}
            animate={{ height: `${(d.value / max) * 56}px` }}
            transition={{ duration: 0.6, delay: i * 0.07 }}
          />
          <span className="text-xs" style={{ color: 'var(--text-muted)', fontSize: 9 }}>{d.label}</span>
        </div>
      ))}
    </div>
  )
}

// Notification item
function NotificationItem({ icon: Icon, message, time, color, unread }) {
  return (
    <div
      className="flex items-start gap-3 p-4 rounded-xl transition-all"
      style={{
        background: unread ? color + '08' : 'transparent',
        border: `1px solid ${unread ? color + '20' : 'var(--border)'}`,
      }}
    >
      <div
        className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
        style={{ background: color + '18' }}
      >
        <Icon size={14} style={{ color }} />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-xs leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{message}</p>
        <p className="text-xs mt-1" style={{ color: 'var(--text-muted)' }}>{time}</p>
      </div>
      {unread && <div className="w-2 h-2 rounded-full flex-shrink-0 mt-1" style={{ background: color }} />}
    </div>
  )
}

// Weekly calendar view
function WeekCalendar({ schedule, checkedDays, toggleDay }) {
  const days = ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim']
  const today = new Date().getDay() // 0=Sun
  const todayIdx = today === 0 ? 6 : today - 1

  return (
    <div>
      <div className="grid grid-cols-7 gap-1.5">
        {days.map((day, i) => {
          const schedDay = schedule.find(s => s.day.substring(0, 3).toLowerCase() === day.toLowerCase() ||
            (day === 'Lun' && s.day.startsWith('Lundi')) ||
            (day === 'Mar' && s.day.startsWith('Mardi')) ||
            (day === 'Mer' && s.day.startsWith('Mercredi')) ||
            (day === 'Jeu' && s.day.startsWith('Jeudi')) ||
            (day === 'Ven' && s.day.startsWith('Vendredi')) ||
            (day === 'Sam' && s.day.startsWith('Samedi')) ||
            (day === 'Dim' && s.day.startsWith('Dimanche'))
          )
          const isToday = i === todayIdx
          const isDone = schedDay && checkedDays[schedDay.day]
          const isRest = !schedDay

          return (
            <div
              key={day}
              className="flex flex-col items-center gap-1.5"
            >
              <span className="text-xs" style={{ color: isToday ? 'var(--accent)' : 'var(--text-muted)', fontWeight: isToday ? 700 : 400, fontSize: 10 }}>
                {day}
              </span>
              <button
                onClick={() => schedDay && toggleDay(schedDay.day)}
                className="w-full aspect-square rounded-xl flex items-center justify-center transition-all"
                style={{
                  background: isDone ? 'rgba(74,222,128,0.15)' : isToday ? 'rgba(245,197,24,0.1)' : isRest ? 'transparent' : 'var(--bg-elevated)',
                  border: `1.5px solid ${isDone ? '#4ade80' : isToday ? 'var(--accent)' : isRest ? 'var(--border)' : 'var(--border)'}`,
                  cursor: isRest ? 'default' : 'pointer',
                }}
              >
                {isDone ? (
                  <CheckCircle2 size={14} style={{ color: '#4ade80' }} />
                ) : isRest ? (
                  <span style={{ color: 'var(--text-muted)', fontSize: 10 }}>—</span>
                ) : (
                  <Dumbbell size={12} style={{ color: isToday ? 'var(--accent)' : 'var(--text-muted)' }} />
                )}
              </button>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default function ClientDashboard() {
  const { user, logout } = useAuth()
  const navigate = useNavigate()
  const clientData = clients.find(c => c.id === user?.id)
  const [expandedDay, setExpandedDay] = useState(null)
  const [activeTab, setActiveTab] = useState('programme') // programme | stats | notifications
  const [checkedDays, setCheckedDays] = useState(
    () => clientData?.program.schedule.reduce((acc, day) => ({ ...acc, [day.day]: day.done }), {}) || {}
  )
  const [notifRead, setNotifRead] = useState({})

  if (!clientData) return null

  const prog = clientData.program
  const doneCount = Object.values(checkedDays).filter(Boolean).length
  const totalDays = prog.schedule.length
  const weekProgress = Math.round((doneCount / totalDays) * 100)

  const handleLogout = () => { logout(); navigate('/') }
  const toggleDay = (day) => setCheckedDays(prev => ({ ...prev, [day]: !prev[day] }))

  // Mock weight progression data
  const weightData = [
    { week: 1, value: clientData.stats.weightStart },
    { week: 2, value: clientData.stats.weightStart - 1.2 },
    { week: 3, value: clientData.stats.weightStart - 2.5 },
    { week: 4, value: clientData.stats.weightStart - 3.1 },
    { week: 5, value: clientData.stats.weightStart - 4.8 },
    { week: 6, value: clientData.stats.weightCurrent },
  ]

  const bodyFatData = [
    { week: 1, value: clientData.stats.bodyFatStart },
    { week: 2, value: clientData.stats.bodyFatStart - 0.5 },
    { week: 3, value: clientData.stats.bodyFatStart - 1.2 },
    { week: 4, value: clientData.stats.bodyFatStart - 2.0 },
    { week: 5, value: clientData.stats.bodyFatStart - 3.1 },
    { week: 6, value: clientData.stats.bodyFatCurrent },
  ]

  // Sessions per week mock
  const sessionsData = [
    { label: 'S1', value: 3, done: true },
    { label: 'S2', value: 4, done: true },
    { label: 'S3', value: 3, done: true },
    { label: 'S4', value: 5, done: true },
    { label: 'S5', value: 4, done: true },
    { label: 'S6', value: doneCount, done: false },
  ]

  const notifications = [
    { id: 1, icon: Trophy, message: '🎉 Félicitations ! Tu as complété 75% de ton programme. Continue comme ça !', time: 'Il y a 2h', color: '#F5C518', unread: true },
    { id: 2, icon: TrendingUp, message: `Mise à jour de tes stats : tu as perdu ${(clientData.stats.weightStart - clientData.stats.weightCurrent).toFixed(1)}kg depuis le début. Excellent travail.`, time: 'Hier', color: '#4ade80', unread: true },
    { id: 3, icon: Calendar, message: 'Rappel : ta prochaine séance est demain. Pense à te reposer ce soir.', time: 'Il y a 1 jour', color: '#60a5fa', unread: false },
    { id: 4, icon: Dumbbell, message: 'Nouveau programme mis à jour pour la semaine prochaine. Découvre les changements.', time: 'Il y a 3 jours', color: '#c084fc', unread: false },
    { id: 5, icon: Activity, message: 'Check-in hebdomadaire — Péryk a analysé ta semaine et validé ta progression.', time: 'Il y a 5 jours', color: '#F5C518', unread: false },
  ]
  const unreadCount = notifications.filter(n => n.unread).length

  const tabs = [
    { key: 'programme', label: 'Programme', icon: Calendar },
    { key: 'stats', label: 'Progression', icon: BarChart2 },
    { key: 'notifications', label: `Alertes${unreadCount ? ` (${unreadCount})` : ''}`, icon: Bell },
  ]

  return (
    <div className="min-h-screen pt-16" style={{ background: 'var(--bg-primary)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">

        {/* Header */}
        <motion.div
          className="flex items-center justify-between mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-xl font-bold" style={{ background: 'var(--accent)', color: '#000' }}>
              {clientData.avatar}
            </div>
            <div>
              <p className="text-sm" style={{ color: 'var(--text-muted)' }}>Bienvenue,</p>
              <h1 className="font-anton text-3xl tracking-wide">{clientData.name}</h1>
              <p className="text-sm" style={{ color: 'var(--accent)' }}>{clientData.goal}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            {unreadCount > 0 && (
              <button
                onClick={() => setActiveTab('notifications')}
                className="relative p-2.5 rounded-xl transition-all"
                style={{ background: 'var(--bg-card)', border: '1px solid var(--border)' }}
              >
                <Bell size={18} />
                <span
                  className="absolute -top-1 -right-1 w-4 h-4 rounded-full text-xs font-bold flex items-center justify-center"
                  style={{ background: '#f87171', color: 'white', fontSize: 9 }}
                >
                  {unreadCount}
                </span>
              </button>
            )}
            <button onClick={handleLogout} className="btn-outline py-2 px-4 text-sm flex items-center gap-2">
              <LogOut size={14} />
              <span className="hidden sm:inline">Déconnexion</span>
            </button>
          </div>
        </motion.div>

        {/* Stats cards */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          {[
            { icon: Dumbbell, label: 'Séances réalisées', value: `${clientData.stats.sessionsCompleted}/${clientData.stats.sessionsTotal}`, color: 'var(--accent)' },
            { icon: Target, label: 'Semaine en cours', value: `S${prog.currentWeek}/${prog.totalWeeks}`, color: '#60a5fa' },
            { icon: TrendingUp, label: 'Poids actuel', value: `${clientData.stats.weightCurrent} kg`, color: '#4ade80' },
            { icon: Activity, label: 'Body fat', value: `${clientData.stats.bodyFatCurrent}%`, color: '#c084fc' },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              className="card p-5"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 + i * 0.06 }}
            >
              <stat.icon size={18} className="mb-3" style={{ color: stat.color }} />
              <div className="font-anton text-2xl" style={{ color: stat.color }}>{stat.value}</div>
              <div className="text-xs mt-1" style={{ color: 'var(--text-muted)' }}>{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Tabs */}
        <motion.div
          className="flex gap-2 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.3 }}
        >
          {tabs.map(tab => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all"
              style={{
                background: activeTab === tab.key ? 'var(--accent)' : 'var(--bg-card)',
                color: activeTab === tab.key ? '#000' : 'var(--text-secondary)',
                border: `1px solid ${activeTab === tab.key ? 'var(--accent)' : 'var(--border)'}`,
              }}
            >
              <tab.icon size={14} />
              {tab.label}
            </button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">

          {/* TAB: PROGRAMME */}
          {activeTab === 'programme' && (
            <motion.div
              key="programme"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="grid grid-cols-1 xl:grid-cols-3 gap-6"
            >
              {/* Main */}
              <div className="xl:col-span-2 space-y-6">
                {/* Week Calendar */}
                <div className="card p-6">
                  <h2 className="font-semibold flex items-center gap-2 mb-5">
                    <Calendar size={16} style={{ color: 'var(--accent)' }} />
                    Calendrier de la semaine
                  </h2>
                  <WeekCalendar schedule={prog.schedule} checkedDays={checkedDays} toggleDay={toggleDay} />

                  {/* Week progress */}
                  <div className="mt-5">
                    <div className="flex justify-between text-xs mb-1.5" style={{ color: 'var(--text-muted)' }}>
                      <span>Séances complétées — Semaine en cours</span>
                      <span className="font-semibold" style={{ color: 'var(--accent)' }}>{doneCount}/{totalDays} ({weekProgress}%)</span>
                    </div>
                    <div className="progress-bar">
                      <motion.div
                        className="progress-bar-fill"
                        style={{ width: `${weekProgress}%` }}
                        initial={{ width: 0 }}
                        animate={{ width: `${weekProgress}%` }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                      />
                    </div>
                  </div>
                </div>

                {/* Days accordion */}
                <div className="card p-6">
                  <h2 className="font-semibold flex items-center gap-2 mb-5">
                    <Dumbbell size={16} style={{ color: 'var(--accent)' }} />
                    Séances détaillées
                  </h2>
                  <div className="space-y-2">
                    {prog.schedule.map((day) => (
                      <div key={day.day} className="rounded-xl overflow-hidden" style={{ border: '1px solid var(--border)' }}>
                        <button
                          className="w-full flex items-center gap-3 p-4 text-left hover:bg-white/3 transition-colors"
                          onClick={() => setExpandedDay(expandedDay === day.day ? null : day.day)}
                        >
                          <button
                            onClick={(e) => { e.stopPropagation(); toggleDay(day.day) }}
                            className="flex-shrink-0"
                          >
                            {checkedDays[day.day] ? (
                              <CheckCircle2 size={20} style={{ color: '#4ade80' }} />
                            ) : (
                              <Circle size={20} style={{ color: 'var(--text-muted)' }} />
                            )}
                          </button>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2">
                              <span className="font-semibold text-sm">{day.day}</span>
                              {checkedDays[day.day] && <span className="tag tag-green" style={{ fontSize: '10px' }}>Fait ✓</span>}
                            </div>
                            <p className="text-xs mt-0.5 truncate" style={{ color: 'var(--text-muted)' }}>{day.label}</p>
                          </div>
                          <div className="flex items-center gap-2 flex-shrink-0">
                            <span className="text-xs" style={{ color: 'var(--text-muted)' }}>{day.exercises.length} exos</span>
                            <ChevronDown
                              size={16}
                              style={{
                                color: 'var(--text-muted)',
                                transform: expandedDay === day.day ? 'rotate(180deg)' : 'rotate(0)',
                                transition: 'transform 0.2s',
                              }}
                            />
                          </div>
                        </button>

                        <AnimatePresence>
                          {expandedDay === day.day && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.25 }}
                              className="overflow-hidden"
                            >
                              <div className="px-4 pb-4" style={{ borderTop: '1px solid var(--border)' }}>
                                <div className="pt-4 space-y-2">
                                  <div className="grid grid-cols-12 gap-2 text-xs font-semibold uppercase tracking-widest px-3 mb-3" style={{ color: 'var(--text-muted)' }}>
                                    <span className="col-span-4">Exercice</span>
                                    <span className="col-span-3">Muscles</span>
                                    <span className="col-span-2 text-center">Séries×Reps</span>
                                    <span className="col-span-2 text-center">Repos</span>
                                    <span className="col-span-1 text-center">RPE</span>
                                  </div>
                                  {day.exercises.map((ex, j) => (
                                    <div
                                      key={j}
                                      className="grid grid-cols-12 gap-2 items-center p-3 rounded-lg text-sm"
                                      style={{ background: 'var(--bg-elevated)' }}
                                    >
                                      <span className="col-span-4 font-medium">{ex.name}</span>
                                      <span className="col-span-3 text-xs" style={{ color: 'var(--text-muted)' }}>{ex.muscles}</span>
                                      <span className="col-span-2 text-center font-semibold text-xs" style={{ color: 'var(--accent)' }}>
                                        {ex.sets}×{ex.reps}
                                      </span>
                                      <span className="col-span-2 text-center text-xs flex items-center justify-center gap-1" style={{ color: 'var(--text-secondary)' }}>
                                        <Clock size={10} />{ex.rest}
                                      </span>
                                      <span className="col-span-1 text-center text-xs font-bold" style={{ color: ex.rpe >= 9 ? '#f87171' : ex.rpe >= 7 ? '#fbbf24' : '#4ade80' }}>
                                        {ex.rpe}
                                      </span>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                <div className="card p-6">
                  <h3 className="font-semibold mb-4 flex items-center gap-2">
                    <Target size={16} style={{ color: 'var(--accent)' }} />
                    Mon programme
                  </h3>
                  <div className="space-y-3">
                    <div>
                      <div className="text-xs uppercase tracking-widest mb-1" style={{ color: 'var(--text-muted)' }}>Nom</div>
                      <div className="text-sm font-semibold">{prog.name}</div>
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-widest mb-1" style={{ color: 'var(--text-muted)' }}>Durée</div>
                      <div className="text-sm">{prog.duration}</div>
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-widest mb-1" style={{ color: 'var(--text-muted)' }}>Fréquence</div>
                      <div className="text-sm">{prog.frequency}</div>
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-widest mb-2" style={{ color: 'var(--text-muted)' }}>Avancement global</div>
                      <div className="progress-bar mb-1">
                        <motion.div
                          className="progress-bar-fill"
                          style={{ width: `${(prog.currentWeek / prog.totalWeeks) * 100}%` }}
                          initial={{ width: 0 }}
                          animate={{ width: `${(prog.currentWeek / prog.totalWeeks) * 100}%` }}
                          transition={{ duration: 1 }}
                        />
                      </div>
                      <div className="text-xs" style={{ color: 'var(--text-muted)' }}>
                        Semaine {prog.currentWeek} sur {prog.totalWeeks}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Sessions bar chart */}
                <div className="card p-6">
                  <h3 className="font-semibold mb-4 flex items-center gap-2">
                    <BarChart2 size={16} style={{ color: '#60a5fa' }} />
                    Séances / semaine
                  </h3>
                  <BarChart data={sessionsData} color="#60a5fa" />
                </div>
              </div>
            </motion.div>
          )}

          {/* TAB: STATS */}
          {activeTab === 'stats' && (
            <motion.div
              key="stats"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {/* Weight chart */}
              <div className="card p-6">
                <LineChart data={weightData} color="#F5C518" label="Poids corporel" unit=" kg" />
                <div className="mt-4 pt-4" style={{ borderTop: '1px solid var(--border)' }}>
                  <div className="flex justify-between text-xs">
                    <div>
                      <div style={{ color: 'var(--text-muted)' }}>Départ</div>
                      <div className="font-semibold">{clientData.stats.weightStart} kg</div>
                    </div>
                    <div className="text-center">
                      <div style={{ color: 'var(--text-muted)' }}>Évolution</div>
                      <div className="font-bold text-green-400">
                        {(clientData.stats.weightCurrent - clientData.stats.weightStart).toFixed(1)} kg
                      </div>
                    </div>
                    <div className="text-right">
                      <div style={{ color: 'var(--text-muted)' }}>Actuel</div>
                      <div className="font-semibold" style={{ color: 'var(--accent)' }}>{clientData.stats.weightCurrent} kg</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Body fat chart */}
              <div className="card p-6">
                <LineChart data={bodyFatData} color="#c084fc" label="Body fat" unit="%" />
                <div className="mt-4 pt-4" style={{ borderTop: '1px solid var(--border)' }}>
                  <div className="flex justify-between text-xs">
                    <div>
                      <div style={{ color: 'var(--text-muted)' }}>Départ</div>
                      <div className="font-semibold">{clientData.stats.bodyFatStart}%</div>
                    </div>
                    <div className="text-center">
                      <div style={{ color: 'var(--text-muted)' }}>Évolution</div>
                      <div className="font-bold text-green-400">
                        {(clientData.stats.bodyFatCurrent - clientData.stats.bodyFatStart).toFixed(1)}%
                      </div>
                    </div>
                    <div className="text-right">
                      <div style={{ color: 'var(--text-muted)' }}>Actuel</div>
                      <div className="font-semibold" style={{ color: '#c084fc' }}>{clientData.stats.bodyFatCurrent}%</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sessions bar */}
              <div className="card p-6 md:col-span-2">
                <h3 className="font-semibold mb-4 flex items-center gap-2">
                  <BarChart2 size={16} style={{ color: '#60a5fa' }} />
                  Séances réalisées par semaine
                </h3>
                <div className="flex items-end gap-3 h-24 px-4">
                  {sessionsData.map((d, i) => (
                    <div key={i} className="flex-1 flex flex-col items-center gap-2">
                      <span className="text-xs font-semibold" style={{ color: d.done ? '#60a5fa' : 'var(--text-muted)' }}>{d.value}</span>
                      <motion.div
                        className="w-full rounded-t-md"
                        style={{ background: d.done ? '#60a5fa' : 'rgba(96,165,250,0.2)', minHeight: 4 }}
                        initial={{ height: 0 }}
                        animate={{ height: `${(d.value / 6) * 72}px` }}
                        transition={{ duration: 0.7, delay: i * 0.08 }}
                      />
                      <span className="text-xs" style={{ color: 'var(--text-muted)' }}>{d.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Achievement card */}
              <div className="card p-6 md:col-span-2" style={{ background: 'rgba(245,197,24,0.06)', borderColor: 'rgba(245,197,24,0.2)' }}>
                <div className="flex items-center gap-4">
                  <Trophy size={32} style={{ color: 'var(--accent)' }} />
                  <div>
                    <h3 className="font-semibold text-lg">
                      {Math.round(clientData.stats.sessionsCompleted / clientData.stats.sessionsTotal * 100)}% du programme complété 🎉
                    </h3>
                    <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                      Tu as réalisé {clientData.stats.sessionsCompleted} séances sur {clientData.stats.sessionsTotal} prévues. Continue comme ça !
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* TAB: NOTIFICATIONS */}
          {activeTab === 'notifications' && (
            <motion.div
              key="notifications"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="max-w-2xl space-y-3"
            >
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-semibold flex items-center gap-2">
                  <Bell size={16} style={{ color: 'var(--accent)' }} />
                  Notifications
                  {unreadCount > 0 && (
                    <span className="text-xs px-2 py-0.5 rounded-full font-bold" style={{ background: '#f87171', color: 'white' }}>
                      {unreadCount} nouvelles
                    </span>
                  )}
                </h2>
              </div>
              {notifications.map((n, i) => (
                <motion.div
                  key={n.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.07 }}
                >
                  <NotificationItem {...n} />
                </motion.div>
              ))}
            </motion.div>
          )}

        </AnimatePresence>
      </div>
    </div>
  )
}
