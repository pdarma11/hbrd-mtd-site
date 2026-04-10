import { useEffect } from 'react'

const META = {
  '/': {
    title: 'HBRD MTD — Coaching Sportif Premium | Hybride, Running & Musculation',
    description: 'Coaching sportif premium alliant musculation, running et performance hybride. Transforme ton corps avec la méthode HBRD MTD. +250 clients coachés, 98% de satisfaction.',
    keywords: 'coaching sportif, musculation, running, HYROX, hybrid athlete, coach certifié, BPJEPS',
  },
  '/about': {
    title: 'Péryk Darmalingon — Ton Coach | HBRD MTD',
    description: 'Coach certifié BPJEPS, spécialiste en méthode hybride depuis 5 ans. Découvre la méthode HBRD MTD et son approche scientifique de l\'entraînement.',
    keywords: 'coach Péryk Darmalingon, BPJEPS, méthode hybride, coaching personnalisé',
  },
  '/results': {
    title: 'Résultats clients — Transformations réelles | HBRD MTD',
    description: 'Découvres les vraies transformations de nos clients. Chiffres concrets, résultats documentés et témoignages vérifiés.',
    keywords: 'résultats coaching, transformations, témoignages, avant après',
  },
  '/subscriptions': {
    title: 'Abonnements & Tarifs — Coaching HBRD MTD',
    description: 'Choisis ton programme de coaching : Basic, Pro ou Premium. Des formules adaptées à tous les niveaux et tous les objectifs.',
    keywords: 'abonnement coaching, prix coaching sportif, programme personnalisé',
  },
  '/exercises': {
    title: 'Base d\'exercices — Musculation & Running | HBRD MTD',
    description: 'Bibliothèque complète d\'exercices avec descriptions, muscles ciblés et niveaux. Musculation, cardio, gainage et plus.',
    keywords: 'exercices musculation, base exercices, programme fitness',
  },
  '/blog': {
    title: 'Blog — Conseils sport & nutrition | HBRD MTD',
    description: 'Articles, conseils et guides sur l\'entraînement, la nutrition et la performance sportive par Péryk Darmalingon.',
    keywords: 'blog sport, conseils musculation, nutrition sportive, performance',
  },
  '/contact': {
    title: 'Contact — Prendre rendez-vous | HBRD MTD',
    description: 'Une question sur nos programmes ? Contacte Péryk directement. Réponse garantie sous 24h.',
    keywords: 'contact coach sportif, rendez-vous coaching',
  },
  '/musculation': {
    title: 'Programme Musculation | HBRD MTD',
    description: 'Programme de musculation scientifique et personnalisé. Hypertrophie, force et définition musculaire avec la méthode HBRD.',
    keywords: 'programme musculation, hypertrophie, force, bodybuilding',
  },
  '/running': {
    title: 'Programme Running | HBRD MTD',
    description: 'Améliore tes performances en course à pied avec un programme structuré. Endurance, vitesse et technique de course.',
    keywords: 'programme running, course à pied, endurance, semi-marathon',
  },
  '/hyrox': {
    title: 'Programme HYROX | HBRD MTD',
    description: 'Prépare-toi à la compétition HYROX avec un entraînement spécifique. Force fonctionnelle et cardio-résistance.',
    keywords: 'programme HYROX, compétition fitness, force fonctionnelle',
  },
  '/hybrid-athlete': {
    title: 'Hybrid Athlete | HBRD MTD',
    description: 'Développe force ET endurance avec la méthode hybride. La performance complète de l\'athlète moderne.',
    keywords: 'hybrid athlete, force endurance, athlète complet, hybrid training',
  },
}

export default function SEOMeta({ path }) {
  useEffect(() => {
    const meta = META[path] || META['/']

    document.title = meta.title

    let descEl = document.querySelector('meta[name="description"]')
    if (!descEl) {
      descEl = document.createElement('meta')
      descEl.setAttribute('name', 'description')
      document.head.appendChild(descEl)
    }
    descEl.setAttribute('content', meta.description)

    let kwEl = document.querySelector('meta[name="keywords"]')
    if (!kwEl) {
      kwEl = document.createElement('meta')
      kwEl.setAttribute('name', 'keywords')
      document.head.appendChild(kwEl)
    }
    kwEl.setAttribute('content', meta.keywords)

    // OG tags
    const ogTags = {
      'og:title': meta.title,
      'og:description': meta.description,
      'og:type': 'website',
      'og:url': `https://hbrdmtd.fr${path}`,
    }

    Object.entries(ogTags).forEach(([property, content]) => {
      let el = document.querySelector(`meta[property="${property}"]`)
      if (!el) {
        el = document.createElement('meta')
        el.setAttribute('property', property)
        document.head.appendChild(el)
      }
      el.setAttribute('content', content)
    })

  }, [path])

  return null
}
