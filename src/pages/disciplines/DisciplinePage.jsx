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

const disciplineBgWords = {
  musculation:      ['FORCE', 'MASSE', 'HYPERTROPHIE', 'SQUAT', 'DEADLIFT', 'BENCH', 'PUSH', 'PULL', 'LEGS'],
  running:          ['ENDURANCE', 'VMA', 'TEMPO', 'FOULÉE', 'SPRINT', 'CARDIO', 'TRAIL', 'MARATHON', 'VO2MAX'],
  'hybrid-athlete': ['HYBRID', 'FORCE', 'CARDIO', 'VO2MAX', 'PUISSANCE', 'VITESSE', 'ATHLÉTE', 'PERFORMANCE'],
  hyrox:            ['HYROX', 'SKIERG', 'SLED', 'ROWING', 'BURPEE', '8KM', 'STATION', 'WALL BALL', 'LUNGES'],
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

  return (
    <div className="pt-20">

      {/* ── Hero ── */}
      <section className="py-24 px-4 sm:px-6 grid-bg relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] rounded-full opacity-8 blur-[150px]" style={{ background: acc }} />

        {/* Watermark background words */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none select-none" aria-hidden="true">
          {(disciplineBgWords[slug] || []).map((word, i) => (
            <motion.span
              key={word}
              className="absolute font-anton text-white whitespace-nowrap"
              style={{
                fontSize: `clamp(3rem, ${6 + (i % 3)}vw, 8rem)`,
                opacity: 0.04,
                top: `${8 + (i * 11) % 80}%`,
                left: `${(i * 23 + 5) % 90}%`,
                transform: `rotate(${i % 2 === 0 ? -8 : 6}deg) translateX(-20%)`,
                letterSpacing: '0.05em',
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.045 }}
              transition={{ duration: 1.2, delay: i * 0.08 }}
            >
              {word}
            </motion.span>
          ))}
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="section-label mb-6 inline-flex" style={{ background: `${acc}15`, borderColor: `${acc}30`, color: acc }}>
              <Zap size={12} />
              {discipline.tagline}
            </span>
            <h1 className="font-anton text-6xl md:text-8xl tracking-wider mb-6">
              <span style={{ color: acc }}>{details.emoji} </span>
              {discipline.name.toUpperCase()}
            </h1>
            <p className="text-xl max-w-2xl" style={{ color: 'var(--text-secondary)' }}>{details.description}</p>
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
