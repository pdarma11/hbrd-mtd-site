import { motion } from 'framer-motion'
import { Link, useLocation, Navigate } from 'react-router-dom'
import { ArrowRight, CheckCircle2, Zap, Users, Clock, Target, TrendingUp, Calendar, Star, AlertCircle } from 'lucide-react'
import { disciplines } from '../../data/mockData'

const disciplineDetails = {
  musculation: {
    description: `La musculation est la base de toute transformation physique. Que tu vises la prise de masse, la sèche, ou simplement te sentir plus fort au quotidien, notre approche scientifique garantit des résultats mesurables.`,
    description2: `Notre méthode repose sur la périodisation linéaire et ondulante, adaptée à chaque niveau. Débutant ou avancé, chaque programme est calibré sur tes objectifs, ton temps disponible et tes contraintes matérielles.`,
    accent: '#F5C518',
    emoji: '🏋️',
    stats: [
      { value: '8–12', label: 'Semaines par cycle', icon: Calendar },
      { value: '3–5×', label: 'Séances par semaine', icon: Clock },
      { value: '+18%', label: 'Force gagnée en 8 sem', icon: TrendingUp },
      { value: '95%', label: 'Clients satisfaits', icon: Star },
    ],
    forWho: [
      'Débutant qui veut construire une base solide',
      'Intermédiaire qui stagne et cherche à progresser',
      'Avancé qui veut optimiser sa composition corporelle',
      'Toute personne souhaitant une meilleure santé à long terme',
    ],
    notFor: [
      'Personnes cherchant des résultats sans effort',
      'Sans aucune disponibilité (minimum 3h/sem)',
    ],
    weekSample: [
      { day: 'Lundi', session: 'Push — Pecs, Épaules, Triceps', intensity: 'Haute' },
      { day: 'Mardi', session: 'Pull — Dos, Biceps, Trapèzes', intensity: 'Haute' },
      { day: 'Mercredi', session: 'Récupération active / Cardio léger', intensity: 'Faible' },
      { day: 'Jeudi', session: 'Legs — Quadriceps, Ischios, Mollets', intensity: 'Très haute' },
      { day: 'Vendredi', session: 'Full Body ou spécifique points faibles', intensity: 'Modérée' },
      { day: 'Week-end', session: 'Repos & récupération optimale', intensity: 'Repos' },
    ],
    steps: [
      { n: '01', title: 'Bilan initial', desc: 'Évaluation de ta morphologie, tes forces et faiblesses, tes objectifs.' },
      { n: '02', title: 'Programme personnalisé', desc: 'Plan de 8 à 12 semaines avec exercices, séries, charges et périodisation.' },
      { n: '03', title: 'Suivi hebdomadaire', desc: 'Ajustements en temps réel selon tes progrès et retours.' },
      { n: '04', title: 'Résultats mesurés', desc: 'Photos, mensurations, force — tout est tracé et comparé.' },
    ],
  },

  running: {
    description: `Du 5km à l'ultra-trail, notre approche du running est structurée autour de la physiologie et de la prévention des blessures. Finis les programmes génériques qui ignorent ta condition initiale.`,
    description2: `Avec HBRD MTD, chaque plan de course intègre travail de foulée, VMA, fractionné, sorties longues et récupération active. Le tout adapté à ton niveau et ton objectif de compétition.`,
    accent: '#60a5fa',
    emoji: '🏃',
    stats: [
      { value: '8–16', label: 'Semaines de prépa', icon: Calendar },
      { value: '4–6×', label: 'Sorties par semaine', icon: Clock },
      { value: '−12%', label: 'Allure améliorée (moy)', icon: TrendingUp },
      { value: '92%', label: 'Sans blessure à l\'arrivée', icon: Star },
    ],
    forWho: [
      'Débutant qui veut finir son premier 5km ou 10km',
      'Runner régulier visant un semi ou marathon',
      'Compétiteur cherchant à améliorer son chrono',
      'Personne reprenant la course après blessure',
    ],
    notFor: [
      'Blessures actives non traitées (genou, hanche, cheville)',
      'Personnes ne souhaitant pas courir régulièrement',
    ],
    weekSample: [
      { day: 'Lundi', session: 'Endurance fondamentale (45–60 min)', intensity: 'Modérée' },
      { day: 'Mardi', session: 'Fractionné court (VMA, 200–400m)', intensity: 'Très haute' },
      { day: 'Mercredi', session: 'Récupération / renforcement musculaire', intensity: 'Faible' },
      { day: 'Jeudi', session: 'Tempo run (allure seuil)', intensity: 'Haute' },
      { day: 'Vendredi', session: 'Repos ou footing récupération', intensity: 'Faible' },
      { day: 'Samedi', session: 'Sortie longue (80–90% allure marathon)', intensity: 'Modérée' },
    ],
    steps: [
      { n: '01', title: 'Test effort', desc: 'Évaluation de ta VMA et endurance fondamentale.' },
      { n: '02', title: 'Plan de course', desc: 'Programme progressif 8–16 semaines selon objectif (5k, 10k, semi, marathon).' },
      { n: '03', title: 'Analyse foulée', desc: 'Recommandations techniques pour améliorer efficacité et prévenir les blessures.' },
      { n: '04', title: 'Race day strategy', desc: 'Stratégie de course, nutrition, gestion d\'effort.' },
    ],
  },

  'hybrid-athlete': {
    description: `L'athlète hybride est le profil le plus complet : fort, endurant, fonctionnel. La méthode HBRD MTD est née de cette vision — dépasser la dichotomie force/cardio.`,
    description2: `Notre programmation hybride est conçue pour développer force et capacité aérobie simultanément, en minimisant l'interférence entre les deux systèmes d'adaptation. Le résultat : un athlète qui soulève lourd et court loin.`,
    accent: '#c084fc',
    emoji: '⚡',
    stats: [
      { value: '12', label: 'Semaines de programme', icon: Calendar },
      { value: '5–6×', label: 'Séances hebdomadaires', icon: Clock },
      { value: '2×', label: 'Compétences développées', icon: TrendingUp },
      { value: '89%', label: 'Objectifs atteints', icon: Star },
    ],
    forWho: [
      'Athlète souhaitant être complet (fort ET endurant)',
      'Runner qui veut gagner en force fonctionnelle',
      'Crossfitter ou sportif cherchant équilibre global',
      'Personne visant des défis comme HYROX ou triathlons',
    ],
    notFor: [
      'Objectif purement esthétique (préfère la musculation)',
      'Moins de 5h/semaine disponibles',
    ],
    weekSample: [
      { day: 'Lundi', session: 'Force — Squat, Deadlift, Press', intensity: 'Très haute' },
      { day: 'Mardi', session: 'Cardio — Tempo run 40 min', intensity: 'Modérée' },
      { day: 'Mercredi', session: 'Force — Hinge & Pull focus', intensity: 'Haute' },
      { day: 'Jeudi', session: 'Interval training (HIIT)', intensity: 'Très haute' },
      { day: 'Vendredi', session: 'Force — Upper body complet', intensity: 'Haute' },
      { day: 'Samedi', session: 'Sortie longue (endurance fondamentale)', intensity: 'Modérée' },
    ],
    steps: [
      { n: '01', title: 'Profil hybride', desc: 'Évaluation de l\'équilibre force/endurance actuel et objectifs hybrides.' },
      { n: '02', title: 'Programme dual', desc: 'Plan combinant musculation et cardio sur 12 semaines avec séparation optimale.' },
      { n: '03', title: 'Nutrition hybride', desc: 'Stratégie nutritionnelle adaptée aux doubles exigences métaboliques.' },
      { n: '04', title: 'Performance totale', desc: 'Mesure des progrès sur les deux dimensions : force et endurance.' },
    ],
  },

  hyrox: {
    description: `HYROX est devenu la compétition fitness de référence en Europe. 8km de course + 8 stations de travail fonctionnel — une épreuve qui met à l'épreuve force, endurance et mental.`,
    description2: `Notre préparation HYROX est spécifique et progressive : simulation des stations, travail des transitions, gestion de l'effort sur 1h à 2h de compétition. Idéal pour viser un temps objectif ou simplement finir fort.`,
    accent: '#f87171',
    emoji: '🏆',
    stats: [
      { value: '12', label: 'Semaines de préparation', icon: Calendar },
      { value: '8', label: 'Stations simulées', icon: Target },
      { value: '8 km', label: 'De course au total', icon: TrendingUp },
      { value: '−15%', label: 'Chrono amélioré (moy)', icon: Star },
    ],
    forWho: [
      'Personne voulant participer à sa première HYROX',
      'Compétiteur cherchant à battre son chrono',
      'Athlète de CrossFit ou running voulant se dépasser',
      'Tout niveau : divisions Solo, Pro, Mixed',
    ],
    notFor: [
      'Sans expérience de cardio (risque de blessure)',
      'Personnes indisponibles 4–5 fois par semaine',
    ],
    weekSample: [
      { day: 'Lundi', session: 'Stations HYROX (SkiErg, Sled Push, Wall Balls)', intensity: 'Très haute' },
      { day: 'Mardi', session: 'Course fractionné (simul compét)', intensity: 'Haute' },
      { day: 'Mercredi', session: 'Récupération & mobilité', intensity: 'Faible' },
      { day: 'Jeudi', session: 'Stations HYROX (Rowing, Burpee, Lunges)', intensity: 'Très haute' },
      { day: 'Vendredi', session: 'Renforcement spécifique + transitions', intensity: 'Modérée' },
      { day: 'Samedi', session: 'Simulation complète HYROX (8km + 8 stations)', intensity: 'Maximale' },
    ],
    steps: [
      { n: '01', title: 'Assessment HYROX', desc: 'Test des 8 stations + 1km pour établir les bases de travail.' },
      { n: '02', title: 'Programme 12 semaines', desc: 'Phases base, spécificité, peak et taper avec simulations progressives.' },
      { n: '03', title: 'Simulations complètes', desc: 'Enchaînements station + course dans des conditions proches du réel.' },
      { n: '04', title: 'Stratégie de compétition', desc: 'Gestion de l\'effort, nutrition pré/pendant, objectif temps.' },
    ],
  },
}

const heroConfig = {
  musculation: {
    punchline: 'Soulève plus. Construis plus. Deviens plus.',
    layout: 'centered',
  },
  running: {
    punchline: 'Chaque foulée te rapproche de ta meilleure version.',
    layout: 'split',
  },
  'hybrid-athlete': {
    punchline: 'La force des uns. L\'endurance des autres. Les deux.',
    layout: 'dual',
  },
  hyrox: {
    punchline: '8 km · 8 stations · 0 excuses.',
    layout: 'competition',
  },
}

// Decorative background component — unique per discipline
function HeroDecoration({ slug, acc }) {
  if (slug === 'musculation') {
    return (
      <>
        {/* Weight plates — large faded circles */}
        {[
          { size: 280, top: '-60px', left: '-80px', opacity: 0.04, delay: 0 },
          { size: 200, bottom: '-40px', right: '5%', opacity: 0.05, delay: 0.3 },
          { size: 140, top: '30%', right: '18%', opacity: 0.035, delay: 0.6 },
        ].map((p, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full border-[12px] pointer-events-none"
            style={{ width: p.size, height: p.size, top: p.top, bottom: p.bottom, left: p.left, right: p.right, borderColor: acc, opacity: p.opacity }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: p.opacity, scale: 1 }}
            transition={{ duration: 1.2, delay: p.delay }}
          >
            {/* Inner ring */}
            <div className="absolute inset-[28%] rounded-full border-[6px]" style={{ borderColor: acc }} />
          </motion.div>
        ))}
        {/* Orbs */}
        <motion.div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full blur-[140px] pointer-events-none" style={{ background: acc, opacity: 0.07 }} animate={{ scale: [1, 1.08, 1] }} transition={{ duration: 8, repeat: Infinity }} />
        <motion.div className="absolute bottom-0 right-0 w-[300px] h-[300px] rounded-full blur-[100px] pointer-events-none" style={{ background: '#c084fc', opacity: 0.05 }} animate={{ x: [0, -20, 0], y: [0, -20, 0] }} transition={{ duration: 10, repeat: Infinity }} />
      </>
    )
  }

  if (slug === 'running') {
    return (
      <>
        {/* Speed lines */}
        {[0.12, 0.28, 0.45, 0.62, 0.78].map((top, i) => (
          <motion.div
            key={i}
            className="absolute h-px pointer-events-none"
            style={{ top: `${top * 100}%`, left: 0, right: 0, background: `linear-gradient(90deg, transparent 0%, ${acc} 40%, transparent 100%)`, opacity: 0.07 + i * 0.015 }}
            initial={{ scaleX: 0, originX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.2, delay: 0.3 + i * 0.15, ease: 'easeOut' }}
          />
        ))}
        {/* Race distances — right side */}
        <div className="absolute right-4 md:right-12 top-1/2 -translate-y-1/2 flex flex-col items-end gap-1 pointer-events-none select-none hidden lg:flex">
          {['MARATHON', 'SEMI', '10 KM', '5 KM'].map((d, i) => (
            <motion.span
              key={d}
              className="font-anton tracking-widest"
              style={{ fontSize: `clamp(1rem, ${2.5 - i * 0.35}vw, 3.2rem)`, color: acc, opacity: 0.06 + i * 0.03, lineHeight: 1.1 }}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 0.06 + i * 0.03, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 + i * 0.12 }}
            >
              {d}
            </motion.span>
          ))}
        </div>
        {/* Orb — elongated horizontal streak */}
        <motion.div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[800px] h-[200px] rounded-full blur-[100px] pointer-events-none" style={{ background: acc, opacity: 0.06 }} animate={{ x: [0, 40, 0] }} transition={{ duration: 10, repeat: Infinity }} />
      </>
    )
  }

  if (slug === 'hybrid-athlete') {
    return (
      <>
        {/* Split background panels */}
        <div className="absolute inset-0 pointer-events-none flex">
          <motion.div className="flex-1" style={{ background: `linear-gradient(135deg, #F5C51808 0%, transparent 60%)` }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} />
          <motion.div className="flex-1" style={{ background: `linear-gradient(225deg, ${acc}08 0%, transparent 60%)` }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.3 }} />
        </div>
        {/* FORCE label left */}
        <motion.span className="absolute left-4 md:left-10 top-1/2 -translate-y-1/2 font-anton tracking-widest pointer-events-none select-none hidden lg:block" style={{ fontSize: 'clamp(3rem, 6vw, 7rem)', color: '#F5C518', opacity: 0.06, writingMode: 'vertical-lr', transform: 'translateY(-50%) rotate(180deg)' }} initial={{ opacity: 0 }} animate={{ opacity: 0.06 }} transition={{ duration: 1 }}>FORCE</motion.span>
        {/* ENDURANCE label right */}
        <motion.span className="absolute right-4 md:right-10 top-1/2 -translate-y-1/2 font-anton tracking-widest pointer-events-none select-none hidden lg:block" style={{ fontSize: 'clamp(2rem, 4vw, 5rem)', color: acc, opacity: 0.07, writingMode: 'vertical-lr' }} initial={{ opacity: 0 }} animate={{ opacity: 0.07 }} transition={{ duration: 1, delay: 0.3 }}>ENDURANCE</motion.span>
        {/* Dual orbs */}
        <motion.div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[400px] h-[400px] rounded-full blur-[120px] pointer-events-none" style={{ background: '#F5C518', opacity: 0.07 }} animate={{ scale: [1, 1.1, 1], x: [0, 20, 0] }} transition={{ duration: 9, repeat: Infinity }} />
        <motion.div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[400px] h-[400px] rounded-full blur-[120px] pointer-events-none" style={{ background: acc, opacity: 0.07 }} animate={{ scale: [1.1, 1, 1.1], x: [0, -20, 0] }} transition={{ duration: 9, repeat: Infinity }} />
      </>
    )
  }

  if (slug === 'hyrox') {
    const stations = ['SKIERG', 'SLED PUSH', 'SLED PULL', 'BURPEE', 'ROWING', 'FARMER CARRY', 'SANDBAG', 'WALL BALLS']
    return (
      <>
        {/* Dramatic red glow */}
        <motion.div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full blur-[120px] pointer-events-none" style={{ background: acc, opacity: 0.1 }} animate={{ opacity: [0.1, 0.15, 0.1] }} transition={{ duration: 4, repeat: Infinity }} />
        {/* "8" floating large */}
        <motion.span className="absolute font-anton pointer-events-none select-none" style={{ fontSize: 'clamp(8rem, 22vw, 22rem)', color: acc, opacity: 0.04, top: '50%', left: '5%', transform: 'translateY(-50%)', letterSpacing: '-0.05em' }} initial={{ opacity: 0 }} animate={{ opacity: 0.04 }} transition={{ duration: 1 }}>8</motion.span>
        <motion.span className="absolute font-anton pointer-events-none select-none" style={{ fontSize: 'clamp(8rem, 22vw, 22rem)', color: acc, opacity: 0.04, top: '50%', right: '5%', transform: 'translateY(-50%)', letterSpacing: '-0.05em' }} initial={{ opacity: 0 }} animate={{ opacity: 0.04 }} transition={{ duration: 1, delay: 0.3 }}>8</motion.span>
        {/* Station grid — bottom of hero, subtle */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden lg:flex gap-2 pointer-events-none">
          {stations.map((s, i) => (
            <motion.div
              key={s}
              className="text-center px-2 py-1 rounded"
              style={{ background: `${acc}10`, border: `1px solid ${acc}20` }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.6 + i * 0.07 }}
            >
              <div className="font-anton text-[10px] tracking-widest" style={{ color: acc, opacity: 0.7 }}>{i + 1}</div>
              <div className="text-[8px] tracking-wide whitespace-nowrap" style={{ color: 'var(--text-muted)' }}>{s}</div>
            </motion.div>
          ))}
        </div>
      </>
    )
  }

  return null
}

const intensityColor = {
  'Très haute': '#f87171',
  'Haute': '#fbbf24',
  'Modérée': '#4ade80',
  'Faible': '#60a5fa',
  'Repos': '#6b7280',
  'Maximale': '#c084fc',
}

export default function DisciplinePage() {
  const location = useLocation()
  const slug = location.pathname.replace('/', '')
  const discipline = disciplines.find(d => d.slug === slug)
  const details = disciplineDetails[slug]

  if (!discipline || !details) return <Navigate to="/" replace />

  const acc = details.accent

  const hConf = heroConfig[slug] || heroConfig.musculation
  const isRunning = slug === 'running'

  return (
    <div className="pt-20">

      {/* ── Hero ── */}
      <section className="min-h-[70vh] flex items-center py-24 px-4 sm:px-6 grid-bg relative overflow-hidden">
        {/* Discipline-specific decoration */}
        <HeroDecoration slug={slug} acc={acc} />

        <div className={`max-w-7xl mx-auto relative z-10 w-full ${isRunning ? 'lg:pr-64' : ''}`}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.33, 1, 0.68, 1] }}
            className={isRunning ? '' : 'max-w-4xl'}
          >
            {/* Badge */}
            <motion.span
              className="section-label mb-6 inline-flex"
              style={{ background: `${acc}15`, borderColor: `${acc}30`, color: acc }}
              animate={{ boxShadow: [`0 0 0px ${acc}00`, `0 0 16px ${acc}40`, `0 0 0px ${acc}00`] }}
              transition={{ duration: 3, repeat: Infinity, delay: 1 }}
            >
              <Zap size={12} />
              {discipline.tagline}
            </motion.span>

            {/* Emoji + name */}
            <h1 className="font-anton tracking-wider leading-none mb-4" style={{ fontSize: 'clamp(3.5rem, 9vw, 8rem)' }}>
              {slug === 'hybrid-athlete' ? (
                <>
                  <motion.span
                    className="block"
                    style={{ color: '#F5C518' }}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.15 }}
                  >
                    HYBRID
                  </motion.span>
                  <motion.span
                    className="block"
                    style={{ color: acc }}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    ATHLETE
                  </motion.span>
                </>
              ) : slug === 'hyrox' ? (
                <>
                  <motion.span className="block" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
                    <span style={{ color: acc }}>🏆 </span>HYROX
                  </motion.span>
                  <motion.span
                    className="block font-anton tracking-[0.2em]"
                    style={{ fontSize: 'clamp(1rem, 2.5vw, 2.2rem)', color: acc, opacity: 0.8 }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.8 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    8 KM · 8 STATIONS
                  </motion.span>
                </>
              ) : (
                <motion.span
                  className="block"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.15 }}
                >
                  <span style={{ color: acc }}>{details.emoji} </span>
                  {discipline.name.toUpperCase()}
                </motion.span>
              )}
            </h1>

            {/* Punchline */}
            <motion.p
              className="font-semibold text-xl md:text-2xl mb-5 max-w-xl"
              style={{ color: acc }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
            >
              {hConf.punchline}
            </motion.p>

            {/* Description */}
            <motion.p
              className="text-base md:text-lg max-w-2xl leading-relaxed"
              style={{ color: 'var(--text-secondary)' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              {details.description}
            </motion.p>

            {/* CTA inline dans le hero */}
            <motion.div
              className="flex gap-4 mt-8 flex-wrap"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.65 }}
            >
              <Link to="/subscriptions" className="btn-primary flex items-center gap-2 px-6 py-3">
                Commencer <ArrowRight size={14} />
              </Link>
              <Link to="/quiz" className="btn-outline flex items-center gap-2 px-6 py-3">
                Faire le quiz <Zap size={14} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="py-16 px-4 sm:px-6" style={{ background: 'var(--bg-card)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {details.stats.map((s, i) => {
            const Icon = s.icon
            return (
              <motion.div
                key={s.label}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-3" style={{ background: acc + '18' }}>
                  <Icon size={18} style={{ color: acc }} />
                </div>
                <div className="font-anton text-3xl md:text-4xl mb-1" style={{ color: acc }}>{s.value}</div>
                <div className="text-xs uppercase tracking-widest" style={{ color: 'var(--text-muted)' }}>{s.label}</div>
              </motion.div>
            )
          })}
        </div>
      </section>

      {/* ── Méthode + Étapes ── */}
      <section className="py-24 px-4 sm:px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-anton text-4xl tracking-wider mb-6">LA MÉTHODE</h2>
            <p className="text-base leading-relaxed mb-4" style={{ color: 'var(--text-secondary)' }}>{details.description}</p>
            <p className="text-base leading-relaxed mb-8" style={{ color: 'var(--text-secondary)' }}>{details.description2}</p>
            <div className="flex flex-wrap gap-3">
              {discipline.benefits.map((b) => (
                <div key={b} className="flex items-center gap-2 px-3 py-1.5 rounded-full text-sm" style={{ background: acc + '12', border: `1px solid ${acc}25` }}>
                  <CheckCircle2 size={13} style={{ color: acc }} />
                  <span style={{ color: 'var(--text-secondary)' }}>{b}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="space-y-4">
            {details.steps.map((step, i) => (
              <motion.div
                key={step.n}
                className="card p-6 flex gap-5 items-start"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <div className="font-anton text-3xl flex-shrink-0" style={{ color: acc, opacity: 0.6 }}>{step.n}</div>
                <div>
                  <h3 className="font-semibold mb-1">{step.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pour qui / Pas pour qui ── */}
      <section className="py-20 px-4 sm:px-6" style={{ background: 'var(--bg-card)', borderTop: '1px solid var(--border)' }}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-anton text-4xl tracking-wider mb-3">POUR QUI ?</h2>
            <p className="text-sm" style={{ color: 'var(--text-muted)' }}>Cette discipline est-elle faite pour toi ?</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Pour qui */}
            <motion.div
              className="card p-8"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: '#4ade8018' }}>
                  <Users size={16} style={{ color: '#4ade80' }} />
                </div>
                <h3 className="font-semibold text-lg" style={{ color: '#4ade80' }}>C'est fait pour toi si…</h3>
              </div>
              <div className="space-y-3">
                {details.forWho.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 size={15} className="flex-shrink-0 mt-0.5" style={{ color: '#4ade80' }} />
                    <span className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Pas pour qui */}
            <motion.div
              className="card p-8"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: '#f8717118' }}>
                  <AlertCircle size={16} style={{ color: '#f87171' }} />
                </div>
                <h3 className="font-semibold text-lg" style={{ color: '#f87171' }}>Peut-être pas si…</h3>
              </div>
              <div className="space-y-3">
                {details.notFor.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-4 h-4 rounded-full border-2 flex-shrink-0 mt-0.5" style={{ borderColor: '#f87171' }} />
                    <span className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Semaine type ── */}
      <section className="py-20 px-4 sm:px-6 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-anton text-4xl tracking-wider mb-3">SEMAINE TYPE</h2>
          <p className="text-sm" style={{ color: 'var(--text-muted)' }}>Un aperçu de ta semaine d'entraînement</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {details.weekSample.map((day, i) => {
            const ic = intensityColor[day.intensity] || '#6b7280'
            return (
              <motion.div
                key={day.day}
                className="card p-5 flex flex-col gap-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.07 }}
              >
                <div className="flex items-center justify-between">
                  <span className="font-bold text-sm">{day.day}</span>
                  <span
                    className="text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider"
                    style={{ background: ic + '18', color: ic, border: `1px solid ${ic}30` }}
                  >
                    {day.intensity}
                  </span>
                </div>
                <p className="text-sm leading-snug" style={{ color: 'var(--text-secondary)' }}>{day.session}</p>
                <div className="h-1 rounded-full mt-auto" style={{ background: ic + '30' }}>
                  <div
                    className="h-full rounded-full"
                    style={{
                      background: ic,
                      width: day.intensity === 'Maximale' ? '100%' : day.intensity === 'Très haute' ? '90%' : day.intensity === 'Haute' ? '70%' : day.intensity === 'Modérée' ? '50%' : day.intensity === 'Faible' ? '25%' : '10%',
                    }}
                  />
                </div>
              </motion.div>
            )
          })}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 px-4 sm:px-6 text-center" style={{ background: 'var(--bg-card)', borderTop: '1px solid var(--border)' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="font-anton text-5xl tracking-wider mb-4">
            PRÊT POUR<br /><span style={{ color: acc }}>{discipline.name.toUpperCase()}</span> ?
          </h2>
          <p className="mb-8 text-lg" style={{ color: 'var(--text-secondary)' }}>
            Commence dès aujourd'hui avec un programme personnalisé.
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Link to="/quiz" className="btn-outline flex items-center gap-2 py-3 px-6">
              Faire le quiz <Zap size={14} />
            </Link>
            <Link to="/subscriptions" className="btn-primary flex items-center gap-2 justify-center py-3 px-8">
              Choisir mon programme <ArrowRight size={16} />
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  )
}
