import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Award, Zap, Target, ArrowRight, CheckCircle2 } from 'lucide-react'

const fadeUp = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6 } }

export default function About() {
  const certifications = [
    'BPJEPS Activités Physiques et Sportives',
    'Spécialisation Musculation & Fitness',
    'Certification HYROX Athlete',
    'Formation Nutrition Sportive (INSEP)',
    'Coach en ligne certifié — Méthode hybride',
  ]

  const values = [
    { icon: Target, title: 'Méthode scientifique', desc: 'Chaque programme est basé sur la littérature scientifique en physiologie de l\'exercice.' },
    { icon: Zap, title: 'Résultats mesurables', desc: 'Des objectifs chiffrés, des KPIs clairs, un suivi hebdomadaire de tes progrès.' },
    { icon: Award, title: 'Approche personnalisée', desc: 'Ton programme est unique. Zéro copier-coller, 100% adapté à ta morphologie et tes contraintes.' },
  ]

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-24 px-4 sm:px-6 grid-bg relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-5 blur-[100px]" style={{ background: 'var(--accent)' }} />
        <div className="max-w-5xl mx-auto">
          <motion.div {...fadeUp}>
            <span className="section-label mb-6 inline-flex"><Zap size={12} />À propos</span>
            <h1 className="font-anton text-6xl md:text-8xl tracking-wider mb-6">
              ALEX<br />
              <span className="gradient-text">DUPONT</span>
            </h1>
            <p className="text-xl max-w-2xl leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              Coach sportif certifié, spécialiste de la méthode hybride et fondateur de HBRD MTD.
              5 ans à transformer des corps et des mentalités.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 px-4 sm:px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          <motion.div {...fadeUp}>
            <h2 className="font-anton text-4xl tracking-wider mb-6">MON HISTOIRE</h2>
            <div className="space-y-4" style={{ color: 'var(--text-secondary)' }}>
              <p className="leading-relaxed">
                Tout a commencé en 2019. Après des années à m'entraîner sans direction, à alterner entre phases de prise de masse chaotiques et sèches inefficaces, j'ai décidé de tout remettre à plat.
              </p>
              <p className="leading-relaxed">
                J'ai obtenu mon BPJEPS et commencé à appliquer des méthodes basées sur la science. La révélation est venue quand j'ai découvert que force et endurance ne sont pas incompatibles — c'est même le combo le plus puissant pour la composition corporelle.
              </p>
              <p className="leading-relaxed">
                J'ai développé la <strong className="text-white">méthode HBRD MTD</strong> (Hybrid Method) en croisant mes expériences avec 250+ clients, les recherches en physiologie de l'exercice, et ma propre préparation aux compétitions HYROX.
              </p>
              <p className="leading-relaxed">
                Aujourd'hui, chaque client qui me fait confiance bénéficie d'une approche rigoureuse, d'un suivi hebdomadaire, et d'une promesse : des résultats mesurables ou ton argent remboursé.
              </p>
            </div>
          </motion.div>

          <div className="space-y-6">
            {/* Stats */}
            <motion.div
              className="grid grid-cols-2 gap-4"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {[
                { value: '5+', label: 'Années d\'expérience' },
                { value: '250+', label: 'Clients coachés' },
                { value: '12', label: 'Semaines programme' },
                { value: '98%', label: 'Taux de satisfaction' },
              ].map((s) => (
                <div key={s.label} className="card p-6 text-center">
                  <div className="font-anton text-4xl gradient-text">{s.value}</div>
                  <div className="text-sm mt-1" style={{ color: 'var(--text-muted)' }}>{s.label}</div>
                </div>
              ))}
            </motion.div>

            {/* Certifications */}
            <motion.div
              className="card p-6"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <Award size={16} style={{ color: 'var(--accent)' }} />
                Certifications
              </h3>
              <ul className="space-y-3">
                {certifications.map((c) => (
                  <li key={c} className="flex items-center gap-3 text-sm" style={{ color: 'var(--text-secondary)' }}>
                    <CheckCircle2 size={14} style={{ color: 'var(--accent)', flexShrink: 0 }} />
                    {c}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 px-4 sm:px-6" style={{ background: 'var(--bg-card)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center mb-16" {...fadeUp}>
            <h2 className="font-anton text-5xl tracking-wider mb-4">MES VALEURS</h2>
            <p style={{ color: 'var(--text-secondary)' }}>Ce qui guide chaque programme que je conçois</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                className="card p-8 text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-6" style={{ background: 'rgba(245,197,24,0.1)' }}>
                  <v.icon size={24} style={{ color: 'var(--accent)' }} />
                </div>
                <h3 className="font-semibold text-lg mb-3">{v.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 sm:px-6 text-center">
        <motion.div className="max-w-2xl mx-auto" {...fadeUp}>
          <h2 className="font-anton text-5xl tracking-wider mb-6">TRAVAILLONS<br /><span className="gradient-text">ENSEMBLE</span></h2>
          <p className="mb-8 text-lg" style={{ color: 'var(--text-secondary)' }}>
            Prêt à commencer ta transformation ? Choisis ton programme et démarre dès aujourd'hui.
          </p>
          <Link to="/subscriptions" className="btn-primary flex items-center gap-2 justify-center mx-auto w-fit text-base px-8 py-4">
            Voir les abonnements <ArrowRight size={16} />
          </Link>
        </motion.div>
      </section>
    </div>
  )
}
