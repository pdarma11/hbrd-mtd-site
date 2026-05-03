import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform, useAnimation } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { ArrowRight, Zap, Target, TrendingUp, Star, ChevronRight, Play, Calculator, HelpCircle } from 'lucide-react'
import { subscriptions, clients, disciplines } from '../data/mockData'
import ParticleField from '../components/ParticleField'
import AnimatedCounter from '../components/AnimatedCounter'
import SEOMeta from '../components/SEOMeta'

// Animated text reveal — word by word
function RevealText({ text, className, style, delay = 0 }) {
  const words = text.split(' ')
  return (
    <span className={className} style={style}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          style={{ display: 'inline-block', overflow: 'hidden', marginRight: '0.25em' }}
        >
          <motion.span
            style={{ display: 'inline-block' }}
            initial={{ y: '110%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: delay + i * 0.08, ease: [0.33, 1, 0.68, 1] }}
          >
            {word}
          </motion.span>
        </motion.span>
      ))}
    </span>
  )
}

// Sticky scroll section with pinned text
function StickySection() {
  const features = [
    {
      num: '01',
      title: 'Analyse & bilan initial',
      desc: 'Questionnaire complet, analyse de ta morphologie, de tes habitudes et de tes objectifs pour construire un programme sur-mesure.',
      tag: 'Onboarding',
      color: 'var(--accent)',
    },
    {
      num: '02',
      title: 'Programme personnalisé',
      desc: 'Un plan d\'entraînement unique adapté à ta discipline, ton niveau et tes contraintes. Évolutif chaque semaine.',
      tag: 'Programme',
      color: '#60a5fa',
    },
    {
      num: '03',
      title: 'Suivi hebdomadaire',
      desc: 'Check-in vidéo ou écrit chaque semaine. Ajustements en temps réel selon ta progression et tes retours.',
      tag: 'Suivi',
      color: '#4ade80',
    },
    {
      num: '04',
      title: 'Résultats mesurés',
      desc: 'Tracking des performances, du poids, du body fat. Chaque progrès est documenté et analysé.',
      tag: 'Résultats',
      color: '#c084fc',
    },
  ]

  return (
    <section className="py-28 px-4 sm:px-6" style={{ background: 'var(--bg-card)', borderTop: '1px solid var(--border)' }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Sticky left */}
          <div className="lg:sticky lg:top-32 lg:self-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="section-label mb-6 inline-flex">
                <Zap size={12} />
                La Méthode
              </span>
              <h2 className="font-anton text-5xl md:text-6xl tracking-wider mb-6">
                COMMENT ÇA
                <br />
                <span className="gradient-text">FONCTIONNE ?</span>
              </h2>
              <p className="text-base leading-relaxed mb-8" style={{ color: 'var(--text-secondary)' }}>
                La méthode HBRD MTD repose sur 4 piliers essentiels pour garantir des résultats réels et durables.
                Chaque étape est conçue pour maximiser ta progression.
              </p>
              <Link to="/about" className="btn-outline flex items-center gap-2 w-fit">
                Découvrir la méthode <ArrowRight size={14} />
              </Link>
            </motion.div>
          </div>

          {/* Scrolling right */}
          <div className="space-y-6">
            {features.map((f, i) => (
              <motion.div
                key={f.num}
                className="card p-8 relative overflow-hidden"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ borderColor: f.color + '40' }}
              >
                <div
                  className="absolute top-0 left-0 w-1 h-full"
                  style={{ background: f.color }}
                />
                <div className="flex items-start justify-between mb-4">
                  <span
                    className="font-anton text-5xl leading-none"
                    style={{ color: f.color, opacity: 0.2 }}
                  >
                    {f.num}
                  </span>
                  <span className="tag" style={{ background: f.color + '18', color: f.color, border: `1px solid ${f.color}30` }}>
                    {f.tag}
                  </span>
                </div>
                <h3 className="font-semibold text-lg mb-2">{f.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// Transformation gallery section
function TransformationsSection() {
  const transformations = [
    { name: 'Thomas M.', result: '-12kg en 12 semaines', goal: 'Perte de poids', before: '95kg / 22%BF', after: '83kg / 14%BF', color: '#F5C518' },
    { name: 'Sarah L.', result: '+6kg de muscle', goal: 'Prise de masse', before: '58kg / 28%BF', after: '64kg / 21%BF', color: '#4ade80' },
    { name: 'Pierre D.', result: 'HYROX Sub-1h10', goal: 'Performance', before: '78kg / Semi 2h05', after: '75kg / Semi 1h48', color: '#60a5fa' },
  ]

  return (
    <section className="py-28 px-4 sm:px-6 max-w-7xl mx-auto">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="section-label mb-6 inline-flex">
          <TrendingUp size={12} />
          Transformations
        </span>
        <h2 className="font-anton text-5xl md:text-6xl tracking-wider">
          AVANT / APRÈS
          <br />
          <span className="gradient-text">EN CHIFFRES</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {transformations.map((t, i) => (
          <motion.div
            key={t.name}
            className="card overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.12 }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
          >
            {/* Visual bar */}
            <div className="h-1" style={{ background: t.color }} />

            <div className="p-8">
              {/* Result badge */}
              <div
                className="inline-flex items-center gap-2 text-xs font-bold px-3 py-1.5 rounded-full mb-6"
                style={{ background: t.color + '18', color: t.color, border: `1px solid ${t.color}30` }}
              >
                <TrendingUp size={10} />
                {t.result}
              </div>

              {/* Before / After */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="rounded-xl p-4 text-center" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid var(--border)' }}>
                  <div className="text-xs uppercase tracking-widest mb-2" style={{ color: 'var(--text-muted)' }}>Avant</div>
                  <div className="text-sm font-semibold" style={{ color: 'var(--text-secondary)' }}>{t.before}</div>
                </div>
                <div className="rounded-xl p-4 text-center" style={{ background: t.color + '10', border: `1px solid ${t.color}25` }}>
                  <div className="text-xs uppercase tracking-widest mb-2" style={{ color: t.color }}>Après</div>
                  <div className="text-sm font-bold" style={{ color: t.color }}>{t.after}</div>
                </div>
              </div>

              <div className="pt-4" style={{ borderTop: '1px solid var(--border)' }}>
                <div className="font-semibold text-sm">{t.name}</div>
                <div className="text-xs mt-0.5" style={{ color: 'var(--text-muted)' }}>{t.goal}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-12">
        <Link to="/results" className="btn-primary flex items-center gap-2 w-fit mx-auto">
          Voir tous les résultats <ArrowRight size={14} />
        </Link>
      </div>
    </section>
  )
}

// Tools CTA section
function ToolsSection() {
  return (
    <section className="py-20 px-4 sm:px-6 max-w-7xl mx-auto">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="font-anton text-4xl md:text-5xl tracking-wider mb-4">
          OUTILS
          <br />
          <span className="gradient-text">GRATUITS</span>
        </h2>
        <p className="text-base" style={{ color: 'var(--text-secondary)' }}>
          Utilise nos calculateurs pour mieux comprendre tes besoins
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Link
            to="/calculator"
            className="group card p-8 flex flex-col gap-4 hover:border-white/20 transition-all duration-300 block"
          >
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center"
              style={{ background: 'rgba(245,197,24,0.1)' }}
            >
              <Calculator size={22} style={{ color: 'var(--accent)' }} />
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-1">Calculateur IMC & Calories</h3>
              <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                Calcule ton IMC, ton poids idéal et tes besoins caloriques quotidiens.
              </p>
            </div>
            <div className="flex items-center gap-2 text-sm font-semibold mt-auto" style={{ color: 'var(--accent)' }}>
              Essayer <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
            </div>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Link
            to="/quiz"
            className="group card p-8 flex flex-col gap-4 hover:border-white/20 transition-all duration-300 block"
          >
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center"
              style={{ background: 'rgba(96,165,250,0.1)' }}
            >
              <HelpCircle size={22} style={{ color: '#60a5fa' }} />
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-1">Quiz : Quel programme pour toi ?</h3>
              <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                Réponds à 6 questions et découvre quel programme correspond à ton profil.
              </p>
            </div>
            <div className="flex items-center gap-2 text-sm font-semibold mt-auto" style={{ color: '#60a5fa' }}>
              Faire le quiz <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
            </div>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default function Home() {
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  return (
    <div>
      <SEOMeta path="/" />

      {/* ── HERO ── */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center grid-bg overflow-hidden">
        {/* Particles */}
        <ParticleField count={55} />

        {/* ── Orb 1 — gold, drifts slowly ── */}
        <motion.div
          className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full opacity-10 blur-[120px] pointer-events-none"
          style={{ background: 'var(--accent)' }}
          animate={{ x: [0, 60, -40, 0], y: [0, -60, 40, 0], scale: [1, 1.15, 0.9, 1] }}
          transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
        />
        {/* ── Orb 2 — indigo, counter-drift ── */}
        <motion.div
          className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full opacity-6 blur-[100px] pointer-events-none"
          style={{ background: '#4f46e5' }}
          animate={{ x: [0, -50, 30, 0], y: [0, 40, -30, 0], scale: [1, 0.9, 1.1, 1] }}
          transition={{ duration: 13, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        />
        {/* ── Orb 3 — green accent, appears subtly ── */}
        <motion.div
          className="absolute top-1/2 right-0 w-[300px] h-[300px] rounded-full blur-[110px] pointer-events-none"
          style={{ background: '#4ade80', opacity: 0 }}
          animate={{ opacity: [0, 0.04, 0.02, 0.05, 0], x: [0, -30, 20, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
        />

        {/* ── Floating keyword chips ── */}
        {[
          { text: 'FORCE',        top: '18%', left: '6%',  delay: 1.2, drift: [0, -10, 6, 0] },
          { text: 'VO2MAX',       top: '28%', left: '82%', delay: 1.5, drift: [0, 8, -5, 0] },
          { text: 'HYROX',        top: '62%', left: '4%',  delay: 1.8, drift: [0, 6, -8, 0] },
          { text: 'PERFORMANCE',  top: '72%', left: '78%', delay: 2.0, drift: [0, -8, 4, 0] },
          { text: 'ENDURANCE',    top: '12%', left: '55%', delay: 2.3, drift: [0, 10, -6, 0] },
          { text: 'HYBRID',       top: '80%', left: '42%', delay: 2.6, drift: [0, -6, 10, 0] },
        ].map((chip) => (
          <motion.span
            key={chip.text}
            className="absolute font-anton tracking-widest pointer-events-none select-none hidden md:block"
            style={{ top: chip.top, left: chip.left, fontSize: 'clamp(0.55rem, 1vw, 0.75rem)', color: 'rgba(245,197,24,0.12)', letterSpacing: '0.2em' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0.7, 1], y: chip.drift }}
            transition={{ opacity: { duration: 0.8, delay: chip.delay }, y: { duration: 8, repeat: Infinity, ease: 'easeInOut', delay: chip.delay } }}
          >
            {chip.text}
          </motion.span>
        ))}

        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center pt-24"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.span
              className="section-label mb-8 inline-flex"
              animate={{ boxShadow: ['0 0 0px rgba(245,197,24,0)', '0 0 12px rgba(245,197,24,0.25)', '0 0 0px rgba(245,197,24,0)'] }}
              transition={{ duration: 3, repeat: Infinity, delay: 1 }}
            >
              <Zap size={12} />
              Hybrid Method — HBRD MTD
            </motion.span>
          </motion.div>

          {/* Title with sweep line */}
          <div className="relative inline-block w-full">
            <h1 className="font-anton text-6xl sm:text-7xl md:text-8xl lg:text-9xl tracking-wider leading-none mb-6">
              <RevealText text="PLUS FORT." className="block" delay={0.15} />
              <RevealText text="PLUS VITE." className="block gradient-text" delay={0.35} />
              <RevealText text="PLUS LOIN." className="block" delay={0.55} />
            </h1>
            {/* Golden sweep line that crosses the title once on load */}
            <motion.div
              className="absolute inset-0 pointer-events-none"
              style={{ overflow: 'hidden' }}
            >
              <motion.div
                style={{
                  position: 'absolute', top: 0, left: '-10%', width: '15%', height: '100%',
                  background: 'linear-gradient(90deg, transparent 0%, rgba(245,197,24,0.18) 50%, transparent 100%)',
                  transform: 'skewX(-12deg)',
                }}
                initial={{ x: '-20%', opacity: 0 }}
                animate={{ x: ['−20%', '130%'], opacity: [0, 1, 1, 0] }}
                transition={{ duration: 1.1, delay: 1.1, ease: 'easeInOut' }}
              />
            </motion.div>
          </div>

          <motion.p
            className="text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
            style={{ color: 'var(--text-secondary)' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.85 }}
          >
            Coaching sportif premium alliant musculation, running et performance hybride.
            Transforme ton corps avec une méthode scientifique et un suivi personnalisé.
          </motion.p>

          {/* CTAs — primary has pulse ring */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.95 }}
          >
            <div className="relative">
              {/* Pulse ring */}
              <motion.div
                className="absolute inset-0 rounded-lg pointer-events-none"
                style={{ border: '2px solid rgba(245,197,24,0.5)' }}
                animate={{ scale: [1, 1.12, 1], opacity: [0.5, 0, 0.5] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
              />
              <Link to="/subscriptions" className="btn-primary flex items-center gap-2 text-base px-8 py-4 relative">
                Commencer maintenant
                <ArrowRight size={16} />
              </Link>
            </div>
            <Link to="/results" className="btn-outline flex items-center gap-2 text-base px-8 py-4">
              <Play size={16} />
              Voir les résultats
            </Link>
          </motion.div>

          {/* Stats — staggered individual reveal */}
          <div className="grid grid-cols-3 gap-4 mt-20 max-w-lg mx-auto">
            {[
              { value: '250', prefix: '+', suffix: '', label: 'Clients coachés' },
              { value: '98', prefix: '', suffix: '%', label: 'Satisfaction' },
              { value: '5', prefix: '', suffix: ' ans', label: 'Expérience' },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.15 + i * 0.15 }}
              >
                <div className="font-anton text-3xl md:text-4xl gradient-text">
                  <AnimatedCounter value={stat.value} prefix={stat.prefix} suffix={stat.suffix} duration={2000} />
                </div>
                <div className="text-xs mt-1" style={{ color: 'var(--text-muted)' }}>{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.6 }}
        >
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }}>
            <div className="w-6 h-10 rounded-full border-2 flex items-start justify-center pt-2" style={{ borderColor: 'var(--border)' }}>
              <motion.div
                className="w-1 h-2 rounded-full"
                style={{ background: 'var(--accent)' }}
                animate={{ y: [0, 6, 0], opacity: [1, 0, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* ── DISCIPLINES ── */}
      <section className="py-28 px-4 sm:px-6 max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label mb-6 inline-flex">
            <Target size={12} />
            Disciplines
          </span>
          <h2 className="font-anton text-5xl md:text-6xl tracking-wider">
            TA DISCIPLINE,
            <br />
            <span className="gradient-text">TON PROGRAMME</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {disciplines.map((disc, i) => (
            <motion.div
              key={disc.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link
                to={`/${disc.slug}`}
                className="group card p-8 flex flex-col gap-4 hover:border-white/20 transition-all duration-300 block"
                style={{ minHeight: 220 }}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: 'var(--accent)' }}>
                      {disc.tagline}
                    </p>
                    <h3 className="font-anton text-3xl tracking-wide text-white">{disc.name}</h3>
                  </div>
                  <ChevronRight
                    size={20}
                    className="transition-transform group-hover:translate-x-1 mt-1"
                    style={{ color: 'var(--text-muted)' }}
                  />
                </div>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  {disc.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {disc.benefits.map((b) => (
                    <span key={b} className="tag tag-accent">{b}</span>
                  ))}
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── STICKY METHOD SECTION ── */}
      <StickySection />

      {/* ── ABOUT SECTION ── */}
      <section className="py-24 px-4 sm:px-6" style={{ background: 'var(--bg-card)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="section-label mb-6 inline-flex">
                <Zap size={12} />
                À propos
              </span>
              <h2 className="font-anton text-5xl tracking-wider mb-6">
                PÉRYK DARMALINGON
                <br />
                <span className="gradient-text">TON COACH</span>
              </h2>
              <p className="text-base leading-relaxed mb-6" style={{ color: 'var(--text-secondary)' }}>
                Coach sportif certifié BPJEPS, spécialiste en méthode hybride depuis 5 ans.
                J'ai accompagné plus de 250 athlètes dans leur transformation physique, du débutant
                complet aux compétiteurs HYROX.
              </p>
              <p className="text-base leading-relaxed mb-8" style={{ color: 'var(--text-secondary)' }}>
                La méthode HBRD MTD (Hybrid Method) combine la science de l'entraînement moderne
                avec une approche personnalisée et pragmatique. Pas de gadgets, pas de promesses
                impossibles — juste un travail sérieux et des résultats mesurables.
              </p>
              <Link to="/about" className="btn-outline flex items-center gap-2 w-fit">
                En savoir plus <ArrowRight size={14} />
              </Link>
            </motion.div>

            <motion.div
              className="grid grid-cols-2 gap-4"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              {[
                { value: '5', suffix: '+', label: 'Années d\'expérience', sub: 'Coach certifié BPJEPS' },
                { value: '250', suffix: '+', label: 'Clients transformés', sub: 'Tous niveaux' },
                { value: '12', suffix: '', label: 'Semaines max', sub: 'Transformation complète' },
                { value: '3', suffix: '', label: 'Disciplines maîtrisées', sub: 'Musculation, Running, HYROX' },
              ].map((item) => (
                <div key={item.label} className="card-elevated p-6 rounded-xl">
                  <div className="font-anton text-4xl gradient-text mb-1">
                    <AnimatedCounter value={item.value} suffix={item.suffix} duration={1800} />
                  </div>
                  <div className="text-sm font-semibold text-white mb-1">{item.label}</div>
                  <div className="text-xs" style={{ color: 'var(--text-muted)' }}>{item.sub}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── TRANSFORMATIONS ── */}
      <TransformationsSection />

      {/* ── TESTIMONIALS ── */}
      <section className="py-28 px-4 sm:px-6" style={{ background: 'var(--bg-card)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-label mb-6 inline-flex">
              <Star size={12} />
              Témoignages
            </span>
            <h2 className="font-anton text-5xl md:text-6xl tracking-wider">
              ILS ONT
              <br />
              <span className="gradient-text">TRANSFORMÉ LEUR CORPS</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {clients.map((client, i) => (
              <motion.div
                key={client.id}
                className="card p-8 flex flex-col gap-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
              >
                {/* Stars */}
                <div className="flex gap-1">
                  {Array.from({ length: client.testimonial.stars }).map((_, j) => (
                    <Star key={j} size={14} fill="currentColor" style={{ color: 'var(--accent)' }} />
                  ))}
                </div>

                <p className="text-sm leading-relaxed italic" style={{ color: 'var(--text-secondary)' }}>
                  "{client.testimonial.text}"
                </p>

                <div className="mt-auto pt-4" style={{ borderTop: '1px solid var(--border)' }}>
                  <div className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold"
                      style={{ background: 'var(--accent)', color: '#000' }}
                    >
                      {client.avatar}
                    </div>
                    <div>
                      <div className="text-sm font-semibold">{client.name}</div>
                      <div className="text-xs" style={{ color: 'var(--text-muted)' }}>{client.goal}</div>
                    </div>
                    <div className="ml-auto">
                      <span className="tag tag-green">{client.testimonial.result}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/results" className="btn-outline flex items-center gap-2 w-fit mx-auto">
              Voir tous les résultats <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── TOOLS ── */}
      <ToolsSection />

      {/* ── PRICING PREVIEW ── */}
      <section className="py-28 px-4 sm:px-6" style={{ background: 'var(--bg-card)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-label mb-6 inline-flex">
              <TrendingUp size={12} />
              Abonnements
            </span>
            <h2 className="font-anton text-5xl md:text-6xl tracking-wider">
              CHOISIS
              <br />
              <span className="gradient-text">TON NIVEAU</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {subscriptions.map((sub, i) => (
              <motion.div
                key={sub.id}
                className="card p-8 flex flex-col gap-6 relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                style={{
                  borderColor: sub.popular ? 'var(--accent)' : undefined,
                  borderWidth: sub.popular ? 1 : undefined,
                }}
              >
                {sub.popular && (
                  <div
                    className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-bold px-4 py-1 rounded-full"
                    style={{ background: 'var(--accent)', color: '#000' }}
                  >
                    POPULAIRE
                  </div>
                )}
                {sub.badge && !sub.popular && (
                  <div
                    className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-bold px-4 py-1 rounded-full"
                    style={{ background: '#fff', color: '#000' }}
                  >
                    {sub.badge}
                  </div>
                )}
                <div>
                  <h3 className="font-anton text-xl tracking-wider mb-2">{sub.name}</h3>
                  <div className="flex items-baseline gap-1">
                    <span className="font-anton text-4xl gradient-text">{sub.price}€</span>
                    <span className="text-sm" style={{ color: 'var(--text-muted)' }}>/ {sub.period}</span>
                  </div>
                </div>
                <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>{sub.description}</p>
                <Link
                  to={`/subscriptions/${sub.id}`}
                  className={sub.popular ? 'btn-primary text-center' : 'btn-outline text-center'}
                >
                  {sub.cta}
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/subscriptions" className="text-sm font-medium hover:text-white transition-colors flex items-center gap-2 justify-center" style={{ color: 'var(--text-secondary)' }}>
              Comparer toutes les formules <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-32 px-4 sm:px-6 text-center relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            background: 'radial-gradient(circle at center, var(--accent) 0%, transparent 70%)',
          }}
        />
        <motion.div
          className="relative z-10 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="font-anton text-6xl md:text-7xl tracking-wider mb-6">
            PRÊT À
            <br />
            <span className="gradient-text">PASSER AU NIVEAU</span>
            <br />
            SUPÉRIEUR ?
          </h2>
          <p className="text-lg mb-10" style={{ color: 'var(--text-secondary)' }}>
            Rejoins les{' '}
            <AnimatedCounter value="250" prefix="+" suffix="" duration={2000} />
            {' '}athlètes qui ont déjà transformé leur corps avec HBRD MTD.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/subscriptions" className="btn-primary flex items-center gap-2 justify-center text-base px-10 py-4">
              Démarrer maintenant <ArrowRight size={16} />
            </Link>
            <Link to="/contact" className="btn-outline flex items-center gap-2 justify-center text-base px-10 py-4">
              Prendre contact
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  )
}
