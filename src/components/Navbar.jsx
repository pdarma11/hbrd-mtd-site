import { useState, useEffect, useRef, useCallback } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring } from 'framer-motion'
import { Menu, X, LogIn, LogOut, ChevronDown, Dumbbell, Wind, Zap, Trophy, BarChart2, BookOpen, Info, Calculator, HelpCircle, Mail } from 'lucide-react'
import { useAuth } from '../contexts/AuthContext'

const disciplineLinks = [
  { label: 'Musculation', href: '/musculation', icon: Dumbbell, color: '#F5C518' },
  { label: 'Running', href: '/running', icon: Wind, color: '#60a5fa' },
  { label: 'Hybrid Athlete', href: '/hybrid-athlete', icon: Zap, color: '#c084fc' },
  { label: 'HYROX', href: '/hyrox', icon: Trophy, color: '#f87171' },
]

const explorerLinks = [
  { label: 'À propos', href: '/about', icon: Info },
  { label: 'Résultats', href: '/results', icon: BarChart2 },
  { label: 'Blog', href: '/blog', icon: BookOpen },
  { label: 'Calculateur', href: '/calculator', icon: Calculator },
  { label: 'Quiz discipline', href: '/quiz', icon: HelpCircle },
  { label: 'Contact', href: '/contact', icon: Mail },
]

const mainLinks = [
  { label: 'Exercices', href: '/exercises' },
  { label: 'Abonnements', href: '/subscriptions' },
]

/* ── Magnifier wrapper ── */
function MagItem({ mouseX, children }) {
  const ref = useRef(null)

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 }
    return val - bounds.x - bounds.width / 2
  })

  const scaleSync = useTransform(distance, [-140, 0, 140], [1, 1.28, 1], { clamp: true })
  const scale = useSpring(scaleSync, { mass: 0.1, stiffness: 220, damping: 14 })

  return (
    <motion.div ref={ref} style={{ scale, display: 'inline-flex', alignItems: 'center' }}>
      {children}
    </motion.div>
  )
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null)
  const { user, logout } = useAuth()
  const location = useLocation()
  const navigate = useNavigate()

  const mouseX = useMotionValue(Infinity)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setOpenDropdown(null)
  }, [location.pathname])

  const handleLogout = () => {
    logout()
    navigate('/')
  }

  const closeTimer = useRef(null)

  const handleEnter = useCallback((id) => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    setOpenDropdown(id)
  }, [])

  const handleLeave = useCallback(() => {
    closeTimer.current = setTimeout(() => setOpenDropdown(null), 200)
  }, [])

  const DropdownMenu = ({ id, label, links }) => (
    <MagItem mouseX={mouseX}>
      <div
        className="relative"
        onMouseEnter={() => handleEnter(id)}
        onMouseLeave={handleLeave}
      >
        <button
          className="flex items-center gap-1 text-sm font-medium transition-colors"
          style={{ color: openDropdown === id ? 'white' : 'var(--text-secondary)' }}
        >
          {label}
          <motion.span animate={{ rotate: openDropdown === id ? 180 : 0 }} transition={{ duration: 0.2 }}>
            <ChevronDown size={13} />
          </motion.span>
        </button>

        <AnimatePresence>
          {openDropdown === id && (
            <motion.div
              initial={{ opacity: 0, y: 8, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 8, scale: 0.97 }}
              transition={{ duration: 0.18 }}
              className="absolute top-full left-0 pt-2 rounded-xl"
              style={{ zIndex: 100 }}
            >
            {/* invisible bridge filling the gap */}
            <div className="absolute -top-2 left-0 right-0 h-2" />
            <div className="rounded-xl overflow-hidden"
              style={{
                minWidth: 200,
                background: 'var(--bg-elevated)',
                border: '1px solid var(--border)',
                boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
              }}
            >
              {links.map((child) => {
                const Icon = child.icon
                const isActive = location.pathname === child.href
                return (
                  <Link
                    key={child.href}
                    to={child.href}
                    className="flex items-center gap-3 px-4 py-3 text-sm font-medium transition-all hover:bg-white/5"
                    style={{ color: isActive ? (child.color || 'var(--accent)') : 'var(--text-secondary)' }}
                  >
                    {Icon && (
                      <div
                        className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{ background: (child.color || 'var(--accent)') + '18' }}
                      >
                        <Icon size={13} style={{ color: child.color || 'var(--accent)' }} />
                      </div>
                    )}
                    {child.label}
                  </Link>
                )
              })}
            </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </MagItem>
  )

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? 'rgba(8,8,8,0.95)' : 'rgba(8,8,8,0.7)',
        backdropFilter: 'blur(20px)',
        borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <span className="font-anton text-xl tracking-wider" style={{ color: 'var(--accent)' }}>HBRD</span>
            <span className="font-anton text-xl tracking-wider text-white">MTD</span>
          </Link>

          {/* Desktop nav — magnifier zone */}
          <div
            className="hidden lg:flex items-center gap-6"
            onMouseMove={(e) => mouseX.set(e.clientX)}
            onMouseLeave={() => mouseX.set(Infinity)}
          >
            <DropdownMenu id="disciplines" label="Disciplines" links={disciplineLinks} />

            {mainLinks.map((link) => (
              <MagItem key={link.href} mouseX={mouseX}>
                <Link
                  to={link.href}
                  className="text-sm font-medium transition-colors hover:text-white"
                  style={{ color: location.pathname === link.href ? '#fff' : 'var(--text-secondary)' }}
                >
                  {link.label}
                </Link>
              </MagItem>
            ))}

            <DropdownMenu id="explorer" label="Plus" links={explorerLinks} />
          </div>

          {/* Right side */}
          <div
            className="hidden lg:flex items-center gap-3"
            onMouseMove={(e) => mouseX.set(e.clientX)}
            onMouseLeave={() => mouseX.set(Infinity)}
          >
            {user ? (
              <>
                <MagItem mouseX={mouseX}>
                  <Link
                    to={user.role === 'coach' ? '/admin' : '/client'}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors hover:bg-white/5"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    <div className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold" style={{ background: 'var(--accent)', color: '#000' }}>
                      {user.avatar}
                    </div>
                    {user.name.split(' ')[0]}
                  </Link>
                </MagItem>
                <MagItem mouseX={mouseX}>
                  <button onClick={handleLogout} className="btn-outline py-2 px-4 text-sm flex items-center gap-2">
                    <LogOut size={14} />
                    Déconnexion
                  </button>
                </MagItem>
              </>
            ) : (
              <>
                <MagItem mouseX={mouseX}>
                  <Link to="/login" className="btn-outline py-2 px-4 text-sm flex items-center gap-2">
                    <LogIn size={14} />
                    Connexion
                  </Link>
                </MagItem>
                <MagItem mouseX={mouseX}>
                  <Link to="/subscriptions" className="btn-primary py-2 px-4 text-sm">
                    Commencer
                  </Link>
                </MagItem>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 rounded-lg"
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{ color: 'var(--text-secondary)' }}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden overflow-hidden"
            style={{ background: 'var(--bg-card)', borderTop: '1px solid var(--border)' }}
          >
            <div className="px-4 py-4 flex flex-col gap-1">
              <p className="px-3 py-2 text-xs font-semibold uppercase tracking-wider" style={{ color: 'var(--text-muted)' }}>
                Disciplines
              </p>
              {disciplineLinks.map(child => (
                <Link key={child.href} to={child.href} className="flex items-center gap-3 px-3 py-2.5 text-sm rounded-lg font-medium" style={{ color: 'var(--text-secondary)' }}>
                  <child.icon size={14} style={{ color: child.color }} />
                  {child.label}
                </Link>
              ))}

              <div className="separator my-1" />

              <p className="px-3 py-2 text-xs font-semibold uppercase tracking-wider" style={{ color: 'var(--text-muted)' }}>
                Explorer
              </p>
              {explorerLinks.map(child => (
                <Link key={child.href} to={child.href} className="flex items-center gap-3 px-3 py-2.5 text-sm rounded-lg font-medium" style={{ color: 'var(--text-secondary)' }}>
                  <child.icon size={14} style={{ color: 'var(--accent)' }} />
                  {child.label}
                </Link>
              ))}

              <div className="separator my-1" />

              {mainLinks.map(link => (
                <Link key={link.href} to={link.href} className="px-3 py-2 text-sm rounded-lg font-medium" style={{ color: 'var(--text-secondary)' }}>
                  {link.label}
                </Link>
              ))}

              <div className="separator my-2" />
              {user ? (
                <button onClick={handleLogout} className="btn-outline py-2 text-sm flex items-center justify-center gap-2">
                  <LogOut size={14} />
                  Déconnexion
                </button>
              ) : (
                <Link to="/login" className="btn-primary py-2 text-sm text-center">
                  Connexion
                </Link>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
