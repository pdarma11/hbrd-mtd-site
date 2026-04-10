import { Link } from 'react-router-dom'
import { Instagram, Youtube, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer style={{ background: 'var(--bg-card)', borderTop: '1px solid var(--border)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <span className="font-anton text-xl" style={{ color: 'var(--accent)' }}>HBRD</span>
              <span className="font-anton text-xl text-white">MTD</span>
            </div>
            <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--text-muted)' }}>
              Hybrid Method — Coaching sportif premium pour athlètes ambitieux.
            </p>
            <div className="flex gap-3">
              {[Instagram, Youtube, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-lg flex items-center justify-center transition-colors hover:bg-white/10"
                  style={{ background: 'var(--bg-elevated)', color: 'var(--text-muted)' }}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Programme */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: 'var(--text-muted)' }}>
              Programme
            </p>
            <ul className="space-y-3">
              {[
                { label: 'Musculation', href: '/musculation' },
                { label: 'Running', href: '/running' },
                { label: 'Hybrid Athlete', href: '/hybrid-athlete' },
                { label: 'HYROX', href: '/hyrox' },
                { label: 'Base d\'exercices', href: '/exercises' },
              ].map((l) => (
                <li key={l.href}>
                  <Link to={l.href} className="text-sm transition-colors hover:text-white" style={{ color: 'var(--text-secondary)' }}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Coaching */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: 'var(--text-muted)' }}>
              Coaching
            </p>
            <ul className="space-y-3">
              {[
                { label: 'À propos', href: '/about' },
                { label: 'Résultats', href: '/results' },
                { label: 'Blog', href: '/blog' },
                { label: 'Abonnements', href: '/subscriptions' },
                { label: 'Modèle 3D', href: '/body-model' },
              ].map((l) => (
                <li key={l.href}>
                  <Link to={l.href} className="text-sm transition-colors hover:text-white" style={{ color: 'var(--text-secondary)' }}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Légal */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: 'var(--text-muted)' }}>
              Informations
            </p>
            <ul className="space-y-3">
              {[
                { label: 'FAQ', href: '/faq' },
                { label: 'Contact', href: '/contact' },
                { label: 'CGV', href: '/cgv' },
                { label: 'Mentions légales', href: '/mentions-legales' },
                { label: 'Confidentialité', href: '/confidentialite' },
              ].map((l) => (
                <li key={l.href}>
                  <Link to={l.href} className="text-sm transition-colors hover:text-white" style={{ color: 'var(--text-secondary)' }}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="separator mt-12 mb-6" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
            © 2025 HBRD MTD — Hybrid Method. Tous droits réservés.
          </p>
          <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
            Coach Péryk Darmalingon — BPJEPS Activités Physiques et Sportives
          </p>
        </div>
      </div>
    </footer>
  )
}
