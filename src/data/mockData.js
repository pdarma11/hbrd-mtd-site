// ─── CLIENTS ────────────────────────────────────────────────────────────────

export const clients = [
  {
    id: 'thomas',
    name: 'Thomas Martin',
    email: 'thomas@gmail.com',
    password: 'thomas123',
    role: 'client',
    avatar: 'TM',
    age: 28,
    weight: 82,
    height: 180,
    goal: 'Prise de masse',
    program: {
      name: 'Hypertrophie 12 semaines',
      duration: '12 semaines',
      frequency: '4j/semaine',
      currentWeek: 5,
      totalWeeks: 12,
      schedule: [
        {
          day: 'Lundi',
          label: 'PUSH — Poitrine / Épaules / Triceps',
          done: true,
          exercises: [
            { name: 'Développé couché barre', muscles: 'Pectoraux', sets: 4, reps: '8-10', rest: '90s', rpe: 8 },
            { name: 'Développé incliné haltères', muscles: 'Pectoraux haut', sets: 3, reps: '10-12', rest: '75s', rpe: 7 },
            { name: 'Élévations latérales', muscles: 'Deltoïdes', sets: 4, reps: '12-15', rest: '60s', rpe: 7 },
            { name: 'Développé militaire', muscles: 'Épaules', sets: 3, reps: '8-10', rest: '90s', rpe: 8 },
            { name: 'Extensions triceps poulie', muscles: 'Triceps', sets: 3, reps: '12-15', rest: '60s', rpe: 7 },
            { name: 'Dips lestés', muscles: 'Triceps / Pectoraux', sets: 3, reps: '8-10', rest: '90s', rpe: 9 },
          ]
        },
        {
          day: 'Mardi',
          label: 'PULL — Dos / Biceps',
          done: true,
          exercises: [
            { name: 'Tractions lestées', muscles: 'Grand dorsal', sets: 4, reps: '6-8', rest: '120s', rpe: 9 },
            { name: 'Rowing barre', muscles: 'Dos moyen', sets: 4, reps: '8-10', rest: '90s', rpe: 8 },
            { name: 'Tirage horizontal poulie', muscles: 'Rhomboïdes', sets: 3, reps: '10-12', rest: '75s', rpe: 7 },
            { name: 'Curl haltères', muscles: 'Biceps', sets: 3, reps: '10-12', rest: '60s', rpe: 7 },
            { name: 'Curl concentré', muscles: 'Biceps', sets: 2, reps: '12-15', rest: '60s', rpe: 7 },
          ]
        },
        {
          day: 'Jeudi',
          label: 'LEGS — Quadriceps / Ischio / Mollets',
          done: false,
          exercises: [
            { name: 'Squat barre', muscles: 'Quadriceps / Fessiers', sets: 4, reps: '6-8', rest: '120s', rpe: 9 },
            { name: 'Leg press', muscles: 'Quadriceps', sets: 3, reps: '10-12', rest: '90s', rpe: 8 },
            { name: 'Romanian deadlift', muscles: 'Ischio-jambiers', sets: 4, reps: '8-10', rest: '90s', rpe: 8 },
            { name: 'Leg curl couché', muscles: 'Ischio-jambiers', sets: 3, reps: '10-12', rest: '75s', rpe: 7 },
            { name: 'Mollets debout machine', muscles: 'Mollets', sets: 4, reps: '15-20', rest: '60s', rpe: 7 },
          ]
        },
        {
          day: 'Vendredi',
          label: 'FULL BODY — Force / Composés',
          done: false,
          exercises: [
            { name: 'Soulevé de terre', muscles: 'Dos / Fessiers / Ischio', sets: 4, reps: '4-6', rest: '150s', rpe: 9 },
            { name: 'Développé couché', muscles: 'Pectoraux', sets: 3, reps: '5-7', rest: '120s', rpe: 9 },
            { name: 'Squat gobelet', muscles: 'Quadriceps', sets: 3, reps: '10-12', rest: '90s', rpe: 7 },
            { name: 'Rowing haltère', muscles: 'Dos', sets: 3, reps: '8-10', rest: '90s', rpe: 8 },
          ]
        },
      ]
    },
    stats: {
      sessionsCompleted: 18,
      sessionsTotal: 48,
      weightStart: 79,
      weightCurrent: 82,
      bodyFatStart: 17,
      bodyFatCurrent: 15.5,
    },
    testimonial: {
      text: '+3kg de muscle en 5 semaines. Mon coach m\'a redonné confiance avec un plan clair et des entraînements qui font vraiment progresser.',
      stars: 5,
      result: '+3 kg masse musculaire',
    }
  },
  {
    id: 'sarah',
    name: 'Sarah Leclerc',
    email: 'sarah@gmail.com',
    password: 'sarah123',
    role: 'client',
    avatar: 'SL',
    age: 25,
    weight: 61,
    height: 165,
    goal: 'Sèche',
    program: {
      name: 'Sèche 8 semaines',
      duration: '8 semaines',
      frequency: '3j/semaine',
      currentWeek: 3,
      totalWeeks: 8,
      schedule: [
        {
          day: 'Lundi',
          label: 'FULL BODY — Tonification',
          done: true,
          exercises: [
            { name: 'Squat bulgare', muscles: 'Fessiers / Quadriceps', sets: 3, reps: '12-15', rest: '60s', rpe: 7 },
            { name: 'Pompes inclinées', muscles: 'Pectoraux / Triceps', sets: 3, reps: '10-12', rest: '60s', rpe: 7 },
            { name: 'Hip thrust', muscles: 'Fessiers', sets: 4, reps: '15-20', rest: '60s', rpe: 8 },
            { name: 'Rowing haltère', muscles: 'Dos', sets: 3, reps: '12-15', rest: '60s', rpe: 7 },
            { name: 'Planche', muscles: 'Core', sets: 3, reps: '45s', rest: '45s', rpe: 7 },
          ]
        },
        {
          day: 'Mercredi',
          label: 'CARDIO — HIIT 30 min',
          done: true,
          exercises: [
            { name: 'Échauffement vélo', muscles: 'Global', sets: 1, reps: '5 min', rest: '—', rpe: 4 },
            { name: 'Sprint 30s / Récup 1min', muscles: 'Global', sets: 8, reps: '30s sprint', rest: '60s', rpe: 9 },
            { name: 'Burpees', muscles: 'Global', sets: 3, reps: '10', rest: '60s', rpe: 8 },
            { name: 'Mountain climbers', muscles: 'Core / Cardio', sets: 3, reps: '20', rest: '45s', rpe: 8 },
          ]
        },
        {
          day: 'Vendredi',
          label: 'LOWER — Bas du corps intensif',
          done: false,
          exercises: [
            { name: 'Soulevé de terre jambes tendues', muscles: 'Ischio / Fessiers', sets: 4, reps: '10-12', rest: '75s', rpe: 8 },
            { name: 'Leg press pied haut', muscles: 'Fessiers', sets: 3, reps: '12-15', rest: '75s', rpe: 7 },
            { name: 'Fentes marchées', muscles: 'Quadriceps / Fessiers', sets: 3, reps: '12 / jambe', rest: '60s', rpe: 7 },
            { name: 'Abducteurs machine', muscles: 'Fessiers externes', sets: 3, reps: '15-20', rest: '60s', rpe: 7 },
            { name: 'Crunchs', muscles: 'Abdominaux', sets: 3, reps: '20', rest: '45s', rpe: 6 },
          ]
        },
      ]
    },
    stats: {
      sessionsCompleted: 9,
      sessionsTotal: 24,
      weightStart: 65,
      weightCurrent: 61,
      bodyFatStart: 24,
      bodyFatCurrent: 21,
    },
    testimonial: {
      text: 'J\'ai perdu 4kg en 3 semaines sans me sentir affamée. Le programme est intelligent et bien rythmé. Je recommande à 100%.',
      stars: 5,
      result: '-4 kg en 3 semaines',
    }
  },
  {
    id: 'lucas',
    name: 'Lucas Bernard',
    email: 'lucas@gmail.com',
    password: 'lucas123',
    role: 'client',
    avatar: 'LB',
    age: 31,
    weight: 90,
    height: 183,
    goal: 'Force / Powerlifting',
    program: {
      name: 'Force Powerlifting 16 semaines',
      duration: '16 semaines',
      frequency: '3j/semaine',
      currentWeek: 8,
      totalWeeks: 16,
      schedule: [
        {
          day: 'Lundi',
          label: 'SQUAT — Jour de jambes',
          done: true,
          exercises: [
            { name: 'Squat barre — travail lourd', muscles: 'Quadriceps / Fessiers', sets: 5, reps: '3-5', rest: '180s', rpe: 9 },
            { name: 'Pause squat', muscles: 'Quadriceps', sets: 3, reps: '3', rest: '150s', rpe: 8 },
            { name: 'Leg press', muscles: 'Quadriceps', sets: 3, reps: '8-10', rest: '90s', rpe: 7 },
            { name: 'Romanian deadlift', muscles: 'Ischio', sets: 3, reps: '8', rest: '90s', rpe: 7 },
          ]
        },
        {
          day: 'Mercredi',
          label: 'BENCH — Poitrine et triceps',
          done: true,
          exercises: [
            { name: 'Développé couché — travail lourd', muscles: 'Pectoraux', sets: 5, reps: '3-5', rest: '180s', rpe: 9 },
            { name: 'Pause bench press', muscles: 'Pectoraux', sets: 3, reps: '3', rest: '150s', rpe: 8 },
            { name: 'Développé incliné haltères', muscles: 'Pectoraux haut', sets: 3, reps: '8-10', rest: '90s', rpe: 7 },
            { name: 'Dips lestés', muscles: 'Triceps', sets: 3, reps: '6-8', rest: '90s', rpe: 8 },
          ]
        },
        {
          day: 'Vendredi',
          label: 'DEADLIFT — Dos et postérieur',
          done: false,
          exercises: [
            { name: 'Soulevé de terre — travail lourd', muscles: 'Dos / Ischio / Fessiers', sets: 4, reps: '2-4', rest: '240s', rpe: 9 },
            { name: 'Deficit deadlift', muscles: 'Bas du dos / Ischio', sets: 3, reps: '4-6', rest: '180s', rpe: 8 },
            { name: 'Tractions lestées', muscles: 'Grand dorsal', sets: 4, reps: '5-6', rest: '120s', rpe: 8 },
            { name: 'Rowing Yates', muscles: 'Dos moyen', sets: 3, reps: '8-10', rest: '90s', rpe: 7 },
          ]
        },
      ]
    },
    stats: {
      sessionsCompleted: 24,
      sessionsTotal: 48,
      weightStart: 88,
      weightCurrent: 90,
      bodyFatStart: 18,
      bodyFatCurrent: 17,
    },
    testimonial: {
      text: 'Passé de 140kg à 172.5kg au squat en 8 semaines. La programmation est sérieuse, les progrès sont là et mesurables.',
      stars: 5,
      result: '+32.5 kg au squat',
    }
  },
]

// ─── COACH ──────────────────────────────────────────────────────────────────

export const coach = {
  id: 'coach',
  name: 'Péryk Darmalingon',
  email: 'coach@hbrdmtd.fr',
  password: 'coach2024',
  role: 'coach',
  avatar: 'AD',
}

// ─── SUBSCRIPTIONS ──────────────────────────────────────────────────────────

export const subscriptions = [
  {
    id: 'starter',
    name: 'CLIENT COACHING',
    price: '9,99',
    period: 'mois',
    description: 'Accès à la base d\'exercices et au suivi de vos entraînements.',
    features: [
      'Accès à la base de 25+ exercices',
      'Dashboard client personnel',
      'Suivi des séances hebdomadaires',
      'Historique de progression',
      'Support par email',
    ],
    notIncluded: [
      'Programme personnalisé',
      'Coaching individuel',
      'Analyses nutritionnelles',
    ],
    popular: false,
    cta: 'Commencer',
    color: 'border-white/10',
  },
  {
    id: 'monthly',
    name: 'PROGRAMME MENSUEL',
    price: '49,99',
    period: 'mois',
    description: 'Coaching complet avec programme personnalisé sur mesure.',
    features: [
      'Tout du plan Starter',
      'Programme 100% personnalisé',
      'Révision mensuelle du programme',
      'Suivi nutrition de base',
      'Accès au modèle anatomique 3D',
      'Messagerie coach illimitée',
      'Appel bilan mensuel (30 min)',
    ],
    notIncluded: [
      'Appels illimités',
    ],
    popular: true,
    cta: 'Choisir ce plan',
    color: 'border-accent',
  },
  {
    id: 'quarterly',
    name: 'PROGRAMME 3 MOIS',
    price: '119,99',
    period: '3 mois',
    description: 'Transformation complète avec suivi intensif sur 12 semaines.',
    features: [
      'Tout du plan Mensuel',
      'Programme 12 semaines complet',
      'Nutrition & macros détaillés',
      'Appels hebdomadaires (1h)',
      'Analyse vidéo des techniques',
      'Accès communauté privée',
      'Garantie résultats',
      'Priorité de réponse < 2h',
    ],
    notIncluded: [],
    popular: false,
    cta: 'Meilleur choix',
    color: 'border-white/10',
    badge: 'MEILLEUR CHOIX',
  },
]

// ─── EXERCISES ───────────────────────────────────────────────────────────────

export const exercises = [
  {
    id: 1, name: 'Squat barre', muscle: 'Quadriceps', level: 'Intermédiaire', type: 'Force', equipment: 'Barre + rack',
    description: 'Le roi des exercices. Travaille les quadriceps, fessiers et ischio-jambiers simultanément en mouvement fonctionnel.',
    keyPoints: [
      'Pieds écartés à la largeur des épaules, orteils légèrement tournés vers l\'extérieur (15-30°)',
      'Descendre jusqu\'à ce que les cuisses soient parallèles au sol ou plus bas, en gardant le dos droit',
      'Pousser à travers les talons en remontant, genoux alignés avec les orteils tout au long du mouvement',
    ],
    avoidPoints: [
      'Ne jamais laisser les genoux s\'affaisser vers l\'intérieur (valgus) : signe de faiblesse des fessiers',
      'Ne pas arrondir le bas du dos (flexion lombaire) sous la charge : risque majeur de blessure',
      'Éviter de soulever les talons du sol : signe de mobilité de cheville insuffisante',
    ],
  },
  {
    id: 2, name: 'Soulevé de terre', muscle: 'Dos', level: 'Avancé', type: 'Force', equipment: 'Barre',
    description: 'Exercice polyarticulaire complet. Sollicite la chaîne postérieure entière : dos, fessiers, ischio-jambiers.',
    keyPoints: [
      'Barre au-dessus des milieux des pieds, prise légèrement plus large que les hanches, dos plat et poitrine haute',
      'Initier le mouvement en poussant le sol (pas en tirant la barre) pour activer les jambes en premier',
      'Garder la barre en contact avec les jambes tout au long de la montée, hanches et épaules qui montent en même temps',
    ],
    avoidPoints: [
      'Ne jamais arrondir le dos, surtout dans le bas : hernies discales garanties à terme',
      'Éviter de laisser la barre s\'éloigner du corps : démultiplie le stress sur les lombaires',
      'Ne pas hyperextendre le cou en regardant au plafond : maintenir le regard légèrement vers le bas',
    ],
  },
  {
    id: 3, name: 'Développé couché barre', muscle: 'Pectoraux', level: 'Intermédiaire', type: 'Force', equipment: 'Barre + banc',
    description: 'Exercice fondamental de poussée horizontale pour la masse et la force des pectoraux.',
    keyPoints: [
      'Prise légèrement plus large que les épaules, omoplates rétractées et pressées contre le banc',
      'Descendre la barre jusqu\'à effleurer le bas de la poitrine, coudes à 45-75° du corps (pas à 90°)',
      'Pousser en arc de cercle vers le haut et légèrement vers l\'arrière pour maximiser le travail pectoral',
    ],
    avoidPoints: [
      'Ne pas rebondir la barre sur la poitrine : détruit la tension musculaire et risque de blessure costale',
      'Éviter les coudes à 90° (perpendiculaires au corps) : surcharge l\'articulation de l\'épaule',
      'Ne pas décoller les fesses du banc : cela réduit la stabilité et fausse la technique',
    ],
  },
  {
    id: 4, name: 'Tractions', muscle: 'Dos', level: 'Intermédiaire', type: 'Hypertrophie', equipment: 'Barre de traction',
    description: 'Exercice de tirage vertical au poids du corps. Excellent pour le grand dorsal et les biceps.',
    keyPoints: [
      'Dépression des omoplates en premier avant de fléchir les coudes pour initier avec le dos, pas les bras',
      'Tirer le coude vers le bas et vers les hanches, poitrine qui monte vers la barre',
      'Descendre complètement jusqu\'à extension totale des bras à chaque répétition pour un travail complet',
    ],
    avoidPoints: [
      'Ne pas se balancer ou utiliser l\'élan du corps (kipping) : annule le travail musculaire ciblé',
      'Éviter les demi-répétitions : arrêter à mi-chemin supprime la phase d\'étirement du dorsal',
      'Ne pas hausser les épaules vers les oreilles en bas du mouvement : active les trapèzes au lieu du dorsal',
    ],
  },
  {
    id: 5, name: 'Développé militaire', muscle: 'Épaules', level: 'Intermédiaire', type: 'Force', equipment: 'Barre',
    description: 'Poussée verticale au-dessus de la tête. Développe l\'épaisseur des épaules et des triceps.',
    keyPoints: [
      'Prise légèrement plus large que les épaules, barre reposant sur les deltoïdes avant le mouvement',
      'Pousser la barre verticalement, tête légèrement en retrait pendant la poussée puis avancer pour la stabilité',
      'Contracter les fessiers et brider le core tout au long du mouvement pour protéger les lombaires',
    ],
    avoidPoints: [
      'Ne pas cambrer excessivement les lombaires : compense un manque de mobilité thoracique et risque de blessure',
      'Éviter de pousser la barre vers l\'avant : la trajectoire doit être verticale au-dessus de la tête',
      'Ne pas laisser les coudes tomber devant la barre en début de mouvement : perd la tension initiale',
    ],
  },
  {
    id: 6, name: 'Hip thrust', muscle: 'Fessiers', level: 'Débutant', type: 'Hypertrophie', equipment: 'Banc + barre',
    description: 'Isolation des fessiers en extension de hanche. Idéal pour la prise de volume fessier.',
    keyPoints: [
      'Omoplate contre le bord du banc, pieds à plat à la largeur du bassin, menton rentré sur la poitrine',
      'Pousser à travers les talons en contractant les fessiers, hanches montent jusqu\'à alignement corps-cuisses',
      'Maintenir la contraction maximale 1-2 secondes en haut avant de redescendre lentement',
    ],
    avoidPoints: [
      'Ne pas hyperextendre le bas du dos en haut du mouvement : c\'est le signe que les lombaires compensent les fessiers',
      'Éviter les pieds trop près ou trop loin des fesses : trouver la position où les fessiers travaillent le plus',
      'Ne pas laisser les genoux s\'écarter ou se rapprocher : maintenir l\'alignement genou-hanche',
    ],
  },
  {
    id: 7, name: 'Curl haltères', muscle: 'Biceps', level: 'Débutant', type: 'Hypertrophie', equipment: 'Haltères',
    description: 'Flexion de coude classique pour l\'isolation et le développement des biceps.',
    keyPoints: [
      'Coudes collés aux flancs et fixes tout au long du mouvement, supination progressive du poignet en montant',
      'Monter jusqu\'à contraction maximale (poignet à hauteur d\'épaule), courte pause en haut',
      'Descendre lentement (2-3 secondes) pour maximiser le travail excentrique des biceps',
    ],
    avoidPoints: [
      'Ne pas balancer le corps ou les coudes vers l\'avant pour monter : c\'est de la triche qui réduit le stimulus musculaire',
      'Éviter de descendre trop vite : la phase excentrique est aussi importante que la montée',
      'Ne pas baisser les poignets en haut du mouvement : maintenir la supination pour maximiser le pic du biceps',
    ],
  },
  {
    id: 8, name: 'Extensions triceps poulie', muscle: 'Triceps', level: 'Débutant', type: 'Hypertrophie', equipment: 'Câble',
    description: 'Extension de coude à la poulie haute pour isoler le chef long et latéral des triceps.',
    keyPoints: [
      'Coudes fixés à hauteur des hanches, légèrement en avant du corps, ne pas les bouger pendant l\'exercice',
      'Étendre complètement les coudes en bas du mouvement pour maximiser la contraction des triceps',
      'Légère inclinaison du tronc vers l\'avant pour stabiliser et mieux isoler le muscle',
    ],
    avoidPoints: [
      'Ne pas laisser les coudes remonter ou s\'écarter vers les côtés en montant : perd l\'isolation',
      'Éviter de pencher excessivement le buste : utilise le poids du corps et réduit le travail des triceps',
      'Ne pas monter les mains au-dessus des coudes : perd la tension constante du câble',
    ],
  },
  {
    id: 9, name: 'Leg press', muscle: 'Quadriceps', level: 'Débutant', type: 'Hypertrophie', equipment: 'Machine leg press',
    description: 'Poussée de jambes sur machine. Idéal pour isoler les quadriceps sans stress lombaire.',
    keyPoints: [
      'Pieds à la largeur des épaules, bas de la plateforme pour plus de quadriceps, haut pour plus de fessiers',
      'Descendre jusqu\'à ce que les genoux forment un angle de 90° ou plus, cuisses proches de la poitrine',
      'Pousser à travers les talons, jambes presque tendues en haut sans verrouiller les genoux',
    ],
    avoidPoints: [
      'Ne jamais décoller le bas du dos du dossier : risque grave de hernie discale sous la charge',
      'Éviter de verrouiller complètement les genoux en extension : surcharge les articulations',
      'Ne pas laisser les genoux s\'affaisser vers l\'intérieur lors de la poussée',
    ],
  },
  {
    id: 10, name: 'Romanian deadlift', muscle: 'Ischio-jambiers', level: 'Intermédiaire', type: 'Force', equipment: 'Barre',
    description: 'Soulevé de terre jambes semi-tendues. Cible spécifiquement les ischio-jambiers et les fessiers.',
    keyPoints: [
      'Dos plat, légère flexion des genoux (15-20°) maintenue constante tout au long du mouvement',
      'Pousser les hanches vers l\'arrière (pas fléchir les genoux) en descendant, barre glisse le long des jambes',
      'S\'arrêter quand on sent l\'étirement des ischio-jambiers (environ mi-tibia), puis remonter en poussant les hanches vers l\'avant',
    ],
    avoidPoints: [
      'Ne pas arrondir le bas du dos : toujours maintenir la cambrure naturelle (antéversion du bassin)',
      'Éviter de plier trop les genoux : le mouvement devient alors un squat et perd l\'isolation des ischio',
      'Ne pas descendre la barre trop bas en arrondissant le dos pour atteindre le sol',
    ],
  },
  {
    id: 11, name: 'Rowing barre', muscle: 'Dos', level: 'Intermédiaire', type: 'Force', equipment: 'Barre',
    description: 'Tirage horizontal en flexion. Développe l\'épaisseur du dos : trapèzes, rhomboïdes, dorsal.',
    keyPoints: [
      'Torse incliné à 45° ou parallèle au sol, dos plat, tête dans le prolongement de la colonne',
      'Tirer la barre vers le bas-ventre ou le nombril en rétractant les omoplates, coudes proches du corps',
      'Contrôler la descente lentement, allonger complètement les bras pour étirer le dos entre chaque rep',
    ],
    avoidPoints: [
      'Ne pas se redresser à chaque répétition pour aider à monter la barre : utilise les jambes au lieu du dos',
      'Éviter de tirer avec les bras en premier : initier avec la rétraction des omoplates',
      'Ne pas laisser la barre monter trop haut vers la poitrine : cible alors les épaules au lieu du dos',
    ],
  },
  {
    id: 12, name: 'Élévations latérales', muscle: 'Épaules', level: 'Débutant', type: 'Hypertrophie', equipment: 'Haltères',
    description: 'Isolation du deltoïde moyen pour l\'élargissement des épaules et la largeur du buste.',
    keyPoints: [
      'Légère flexion des coudes (15-20°) maintenue tout au long, poignet légèrement incliné vers le bas (comme pour vider un verre)',
      'Monter jusqu\'à hauteur d\'épaule, pas plus haut : au-delà c\'est le trapèze qui prend le relais',
      'Contrôler la descente sur 2-3 secondes pour maximiser le travail excentrique',
    ],
    avoidPoints: [
      'Ne pas balancer le corps ou hausser les épaules pour aider à monter : triche qui réduit le travail des deltoïdes',
      'Éviter de monter trop haut (au-dessus des épaules) : active les trapèzes et peut blesser l\'épaule',
      'Ne pas utiliser des charges trop lourdes qui forcent à compenser avec le tronc',
    ],
  },
  {
    id: 13, name: 'Dips', muscle: 'Triceps', level: 'Intermédiaire', type: 'Force', equipment: 'Barres parallèles',
    description: 'Exercice de poussée au poids du corps. Développe les triceps et le bas des pectoraux.',
    keyPoints: [
      'Corps vertical et gainage actif pour cibler les triceps, légèrement incliné vers l\'avant pour les pectoraux',
      'Descendre jusqu\'à ce que les bras forment un angle de 90°, voire un peu plus pour l\'amplitude complète',
      'Pousser jusqu\'à extension quasi-complète des coudes, jambes croisées ou tendues vers l\'avant',
    ],
    avoidPoints: [
      'Ne pas descendre trop bas si les épaules manquent de mobilité : risque de lésion de la coiffe des rotateurs',
      'Éviter de balancer les jambes pour aider à remonter : enlève le travail des triceps',
      'Ne pas laisser les coudes partir vers l\'extérieur : maintenir les coudes proches du corps',
    ],
  },
  {
    id: 14, name: 'Planche frontale', muscle: 'Core', level: 'Débutant', type: 'Gainage', equipment: 'Sol',
    description: 'Gainage statique frontal. Renforce les abdominaux profonds et améliore la stabilité du tronc.',
    keyPoints: [
      'Corps parfaitement aligné de la tête aux talons, hanches ni trop hautes ni trop basses',
      'Contracter les abdominaux (rentrer légèrement le ventre), les fessiers et les quadriceps simultanément',
      'Respiration continue et contrôlée tout au long de l\'exercice, ne pas retenir son souffle',
    ],
    avoidPoints: [
      'Ne pas laisser les hanches s\'affaisser vers le sol : signe que le core ne tient plus la tension',
      'Éviter de lever les fesses trop haut : facilite l\'exercice mais supprime le travail abdominal',
      'Ne pas regarder vers le haut : maintenir le cou dans le prolongement de la colonne, regard vers le sol',
    ],
  },
  {
    id: 15, name: 'Squat gobelet', muscle: 'Quadriceps', level: 'Débutant', type: 'Force', equipment: 'Haltère ou kettlebell',
    description: 'Variante du squat avec charge en avant. Facilite l\'apprentissage de la technique en toute sécurité.',
    keyPoints: [
      'Tenir la charge contre la poitrine, coudes pointés vers le bas, position qui force naturellement le buste droit',
      'Descendre profondément en poussant les genoux vers l\'extérieur avec les coudes à l\'intérieur des genoux',
      'Talons bien ancrés au sol, poitrine haute tout au long du mouvement',
    ],
    avoidPoints: [
      'Ne pas laisser la charge s\'éloigner de la poitrine : déséquilibre vers l\'avant et surcharge les lombaires',
      'Éviter de pencher le buste en avant : le contre-poids de la charge doit maintenir le dos vertical',
      'Ne pas se relever trop vite : contrôler la montée pour renforcer les stabilisateurs',
    ],
  },
  {
    id: 16, name: 'Pompes', muscle: 'Pectoraux', level: 'Débutant', type: 'Hypertrophie', equipment: 'Sol',
    description: 'Fondation de la musculation au poids du corps. Travaille pectoraux, triceps et deltoïdes antérieurs.',
    keyPoints: [
      'Corps aligné de la tête aux talons, mains légèrement plus larges que les épaules, doigts pointés vers l\'avant',
      'Descendre jusqu\'à ce que la poitrine frôle le sol, coudes à 45° du corps (pas perpendiculaires)',
      'Gainage du core actif tout au long, hanches ni hautes ni affaissées',
    ],
    avoidPoints: [
      'Ne pas laisser les hanches s\'affaisser ou monter : maintenir la ligne droite du corps',
      'Éviter les demi-pompes : descendre au maximum pour activer pleinement les pectoraux',
      'Ne pas sortir la tête vers l\'avant : le cou reste dans l\'axe de la colonne',
    ],
  },
  {
    id: 17, name: 'Sprint 30s', muscle: 'Global', level: 'Intermédiaire', type: 'Cardio', equipment: 'Tapis ou extérieur',
    description: 'Sprint à intensité maximale pour 30 secondes. Excellent pour brûler des graisses et améliorer le VO2max.',
    keyPoints: [
      'Départ explosif, inclinaison du corps vers l\'avant les premières foulées puis progressivement vertical',
      'Bras actifs (90° au coude), oscillation avant-arrière et non en croix, rythme synchronisé avec les jambes',
      'Attaque du sol sous le centre de gravité avec l\'avant du pied, pas le talon',
    ],
    avoidPoints: [
      'Ne pas sprinter sans échauffement préalable : risque élevé de claquage musculaire (ischio-jambiers)',
      'Éviter de tendre les bras le long du corps : perturbe l\'équilibre et ralentit la foulée',
      'Ne pas regarder vers le bas pendant le sprint : diminue la performance et nuit à la posture',
    ],
  },
  {
    id: 18, name: 'Burpees', muscle: 'Global', level: 'Intermédiaire', type: 'Cardio', equipment: 'Sol',
    description: 'Exercice cardio polyarticulaire complet. Combine squat, pompe et saut vertical pour un effort total.',
    keyPoints: [
      'Maintenir un gainage actif lors du passage en position de pompe pour éviter les compressions lombaires',
      'Atterrissage après le saut sur la plante des pieds avec absorption des chocs par les genoux fléchis',
      'Cadence régulière et contrôlée plutôt que chaotique : qualité prime sur vitesse',
    ],
    avoidPoints: [
      'Ne pas laisser les hanches s\'affaisser en position basse : protège les lombaires',
      'Éviter de sauter sans lever les bras au-dessus de la tête : le mouvement complet est essentiel',
      'Ne pas atterrir sur les talons ou les jambes tendues : risque de blessure aux genoux et aux chevilles',
    ],
  },
  {
    id: 19, name: 'Fentes marchées', muscle: 'Fessiers', level: 'Débutant', type: 'Hypertrophie', equipment: 'Haltères optionnel',
    description: 'Fentes en mouvement alterné. Développe les quadriceps, fessiers et améliore l\'équilibre.',
    keyPoints: [
      'Grand pas vers l\'avant, genou arrière descend à quelques centimètres du sol sans le toucher',
      'Genou avant aligné avec le 2e orteil, ne pas dépasser la pointe du pied',
      'Buste droit et vertical, core gainé, regarder droit devant soi',
    ],
    avoidPoints: [
      'Ne pas laisser le genou avant dépasser largement la pointe du pied : surcharge les tendons rotuliens',
      'Éviter de pencher le buste vers l\'avant : réduit le travail fessier et charge les lombaires',
      'Ne pas faire des petits pas : un pas trop court empêche le genou arrière de descendre correctement',
    ],
  },
  {
    id: 20, name: 'Tirage horizontal câble', muscle: 'Dos', level: 'Débutant', type: 'Hypertrophie', equipment: 'Câble',
    description: 'Tirage horizontal à la poulie basse. Cible les rhomboïdes, le milieu du dos et les biceps.',
    keyPoints: [
      'Dos droit et légèrement incliné vers l\'arrière (10-15°), initier le mouvement par la rétraction des omoplates',
      'Tirer vers le bas-ventre, coudes collés au corps, finir le mouvement avec une forte contraction du dos',
      'Contrôler la descente lentement (2-3s) pour maximiser le travail des muscles stabilisateurs du dos',
    ],
    avoidPoints: [
      'Ne pas se balancer vers l\'avant et l\'arrière : annule le travail du dos et risque de blessure',
      'Éviter de tirer avec les bras seuls sans engager les omoplates en premier',
      'Ne pas arrondir le dos en fin de répétition pour aller chercher plus d\'amplitude',
    ],
  },
  {
    id: 21, name: 'Crunchs', muscle: 'Abdominaux', level: 'Débutant', type: 'Gainage', equipment: 'Sol',
    description: 'Flexion abdominale basique. Renforce le droit abdominal et améliore la définition du ventre.',
    keyPoints: [
      'Imprimer le bas du dos contre le sol, mouvement de flexion de la cage thoracique vers le bassin',
      'Mains derrière la nuque sans tirer sur la tête : bras ne servent qu\'à soutenir le poids de la tête',
      'Expirer à la montée en contractant fort les abdominaux, inspirer à la descente',
    ],
    avoidPoints: [
      'Ne pas tirer sur la nuque avec les mains : risque de blessure cervicale et supprime le travail abdominal',
      'Éviter les grands mouvements qui font redresser complètement le buste : raccourcit le trajet et réduit l\'efficacité',
      'Ne pas retenir sa respiration tout au long de la série',
    ],
  },
  {
    id: 22, name: 'Développé incliné haltères', muscle: 'Pectoraux', level: 'Intermédiaire', type: 'Hypertrophie', equipment: 'Haltères + banc incliné',
    description: 'Presse haltères sur banc incliné. Cible le chef claviculaire du pectoral pour l\'épaisseur du haut.',
    keyPoints: [
      'Banc incliné à 30-45° (pas plus), omoplates rétractées et pressées contre le banc',
      'Haltères descendent de part et d\'autre de la poitrine, coudes à 60-75° du tronc',
      'Pousser en arc de cercle en rapprochant légèrement les haltères en haut du mouvement',
    ],
    avoidPoints: [
      'Ne pas incliner le banc à 60-90° : cible alors les deltoïdes antérieurs plutôt que les pectoraux',
      'Éviter les coudes trop écartés (90°) : surcharge les articulations des épaules',
      'Ne pas descendre les haltères trop bas : s\'arrêter quand les coudes arrivent au niveau du banc',
    ],
  },
  {
    id: 23, name: 'Soulevé de terre roumain', muscle: 'Ischio-jambiers', level: 'Intermédiaire', type: 'Force', equipment: 'Haltères ou barre',
    description: 'RDL avec haltères ou barre. Excellent pour l\'étirement excentrique des ischio-jambiers.',
    keyPoints: [
      'Prise en pronation, dos plat, légère flexion des genoux maintenue tout au long',
      'Pousser les hanches vers l\'arrière en descendant, charges glissent le long des jambes',
      'S\'arrêter à mi-tibia ou au ressenti d\'étirement des ischio, ne pas chercher à toucher le sol',
    ],
    avoidPoints: [
      'Ne pas arrondir le bas du dos : antéversion du bassin maintenue du début à la fin',
      'Éviter de plier excessivement les genoux : le mouvement devient un squat',
      'Ne pas laisser les charges s\'éloigner trop du corps : augmente le bras de levier lombaire',
    ],
  },
  {
    id: 24, name: 'Box jump', muscle: 'Global', level: 'Intermédiaire', type: 'Cardio', equipment: 'Box pliométrique',
    description: 'Saut sur boîte pliométrique. Développe la puissance explosive des membres inférieurs.',
    keyPoints: [
      'Position de départ en demi-squat, balancement des bras vers l\'arrière puis élan vers l\'avant lors du saut',
      'Atterrissage en douceur sur la box avec les deux pieds, absorption du choc par une légère flexion des genoux',
      'Descendre de la box en marchant (pas en sautant en arrière) pour protéger les tendons d\'Achille',
    ],
    avoidPoints: [
      'Ne pas sauter sur une box trop haute dès le début : progression graduelle obligatoire',
      'Éviter d\'atterrir les jambes tendues : risque de blessure importante aux genoux et chevilles',
      'Ne pas sauter en arrière de la box : les atterrissages répétés en excentrique lèsent les tendons',
    ],
  },
  {
    id: 25, name: 'Farmer carry', muscle: 'Global', level: 'Intermédiaire', type: 'Force', equipment: 'Haltères ou kettlebells',
    description: 'Marche lestée avec charges lourdes. Renforce la prise en main, le core et les trapèzes.',
    keyPoints: [
      'Dos droit, épaules en arrière et en bas, core gainé, marche avec pas réguliers de longueur normale',
      'Charges tenues sur les côtés du corps, bras légèrement fléchis pour ne pas verrouiller les coudes',
      'Regard droit devant, respiration régulière, éviter de pencher d\'un côté si les charges sont asymétriques',
    ],
    avoidPoints: [
      'Ne pas incliner le tronc d\'un côté : indique que la charge est trop lourde ou les quadratus lomborum faibles',
      'Éviter les petits pas rapides : les foulées doivent être naturelles et stables',
      'Ne pas lâcher brusquement les charges à la fin : poser les haltères au sol de façon contrôlée',
    ],
  },

  // ── PECTORAUX ────────────────────────────────────────────────────────────
  {
    id: 26, name: 'Développé incliné haltères', muscle: 'Pectoraux', level: 'Intermédiaire', type: 'Hypertrophie', equipment: 'Haltères + banc incliné',
    description: 'Cible le chef claviculaire (haut du pectoral). Idéal pour développer l\'épaisseur et le volume supérieur de la poitrine.',
    keyPoints: [
      'Banc à 30-45°, haltères au niveau des épaules, coudes à 75° du corps — pas perpendiculaires',
      'Pousser les haltères vers le haut et légèrement vers l\'intérieur (en arc) pour maximiser la contraction',
      'Contrôler la descente sur 2-3 secondes, étirer légèrement les pecs en bas du mouvement',
    ],
    avoidPoints: [
      'Ne pas ouvrir les coudes à 90° : surcharge les épaules et réduit le travail pectoral',
      'Éviter d\'incliner le banc trop haut (>45°) : le mouvement devient un exercice d\'épaules',
      'Ne pas laisser les haltères se toucher en haut : maintenir une légère tension constante',
    ],
  },
  {
    id: 27, name: 'Écarté couché haltères', muscle: 'Pectoraux', level: 'Débutant', type: 'Hypertrophie', equipment: 'Haltères + banc',
    description: 'Isolation des pectoraux en étirement. Parfait pour améliorer la largeur et l\'étirement de la cage thoracique.',
    keyPoints: [
      'Bras légèrement fléchis tout au long du mouvement (20°), jamais les coudes verrouillés',
      'Descendre les haltères en arc jusqu\'au niveau des épaules, sentir l\'étirement profond dans les pecs',
      'Remonter en arc de cercle comme si on embrassait un grand arbre, sans changer l\'angle du coude',
    ],
    avoidPoints: [
      'Ne pas tendre les bras complètement : stress excessif sur les articulations des coudes',
      'Éviter de descendre trop bas si la souplesse des épaules est limitée : risque de lésion de la coiffe',
      'Ne pas transformer l\'exercice en développé couché en fléchissant davantage les coudes pendant le mouvement',
    ],
  },
  {
    id: 28, name: 'Dips pectoraux', muscle: 'Pectoraux', level: 'Intermédiaire', type: 'Force', equipment: 'Barres parallèles',
    description: 'Poussée en appui pour le bas des pectoraux et les triceps. Excellent exercice au poids du corps.',
    keyPoints: [
      'Se pencher légèrement en avant (environ 30°) pour cibler les pectoraux plutôt que les triceps',
      'Descendre jusqu\'à ce que les épaules soient en dessous des coudes pour un étirement complet',
      'Remonter en poussant fort avec la poitrine, éviter de balancer le corps',
    ],
    avoidPoints: [
      'Ne pas descendre trop bas si douleur à l\'épaule : s\'arrêter à l\'angle de confort',
      'Éviter de rester droit (vertical) : le travail passe aux triceps et épaules uniquement',
      'Ne pas effectuer des demi-répétitions : le travail ne profite qu\'à la portion haute du mouvement',
    ],
  },

  // ── DOS ─────────────────────────────────────────────────────────────────
  {
    id: 29, name: 'Rowing barre', muscle: 'Dos', level: 'Intermédiaire', type: 'Force', equipment: 'Barre',
    description: 'Tirage horizontal qui cible le grand dorsal, les rhomboïdes et les trapèzes moyens. Construit l\'épaisseur du dos.',
    keyPoints: [
      'Dos plat à 45° environ, genoux légèrement fléchis, hanches en arrière — position de deadlift partiel',
      'Tirer la barre vers le bas du nombril, coudes passent près du corps et en arrière',
      'Rétracter les omoplates en fin de mouvement pour contracter au maximum les muscles du milieu du dos',
    ],
    avoidPoints: [
      'Ne pas arrondir le dos : risque de hernie discale avec des charges lourdes',
      'Éviter d\'utiliser l\'élan (balancement du buste) : réduit l\'efficacité et surcharge les lombaires',
      'Ne pas tirer vers le haut de l\'abdomen (umbilicus) : cible plutôt les épaules que le dos',
    ],
  },
  {
    id: 30, name: 'Tirage poulie haute', muscle: 'Dos', level: 'Débutant', type: 'Hypertrophie', equipment: 'Poulie haute',
    description: 'Alternative aux tractions pour développer le grand dorsal. Adapté à tous niveaux, charge facilement ajustable.',
    keyPoints: [
      'Prise plus large que les épaules, se pencher légèrement en arrière (10-15°), poitrine vers le haut',
      'Tirer la barre vers le haut du sternum en abaissant les coudes vers les hanches — pas derrière la nuque',
      'Garder les omoplates rétractées et abaissées tout au long du mouvement pour protéger les épaules',
    ],
    avoidPoints: [
      'Ne jamais tirer derrière la nuque : risque sérieux de blessure cervicale et de la coiffe des rotateurs',
      'Éviter de laisser les épaules monter vers les oreilles en début de mouvement',
      'Ne pas se redresser trop en arrière : l\'exercice devient alors un rowing, pas un tirage vertical',
    ],
  },
  {
    id: 31, name: 'Good morning', muscle: 'Dos', level: 'Intermédiaire', type: 'Force', equipment: 'Barre',
    description: 'Exercice d\'extension de hanche avec barre sur le dos. Renforce les érecteurs spinaux et les ischio-jambiers.',
    keyPoints: [
      'Barre sur les trapèzes (pas sur le cou), pieds à la largeur des épaules, légère flexion des genoux',
      'Plier les hanches en envoyant les fesses vers l\'arrière, dos strictement plat tout au long',
      'Remonter en contractant les fessiers et en tendant les hanches — ne pas pousser avec le dos',
    ],
    avoidPoints: [
      'Ne jamais arrondir le bas du dos : risque extrêmement élevé avec cet exercice',
      'Éviter de plier trop les genoux : transforme l\'exercice en squat et réduit le travail des ischios',
      'Ne pas utiliser de charge trop lourde avant de maîtriser parfaitement la technique',
    ],
  },

  // ── ÉPAULES ─────────────────────────────────────────────────────────────
  {
    id: 32, name: 'Oiseau haltères', muscle: 'Épaules', level: 'Débutant', type: 'Hypertrophie', equipment: 'Haltères',
    description: 'Isolation du faisceau postérieur du deltoïde (épaule arrière). Corrige les déséquilibres de posture.',
    keyPoints: [
      'Penché en avant à 45°, bras légèrement fléchis, monter les haltères sur les côtés jusqu\'à hauteur des épaules',
      'Le mouvement doit venir de l\'épaule, pas du bas du dos — éviter tout balancement',
      'Pause de 1 seconde en haut pour maximiser la contraction du deltoïde postérieur',
    ],
    avoidPoints: [
      'Ne pas utiliser l\'élan : réduire le poids et privilégier une exécution stricte',
      'Éviter de monter les haltères plus haut que les épaules : sollicite excessivement la coiffe',
      'Ne pas verrouiller les coudes en extension : garder une légère flexion fixe tout au long',
    ],
  },
  {
    id: 33, name: 'Arnold press', muscle: 'Épaules', level: 'Intermédiaire', type: 'Hypertrophie', equipment: 'Haltères',
    description: 'Variation du développé épaules avec rotation, travaille les 3 faisceaux du deltoïde.',
    keyPoints: [
      'Partir paume face à soi (position de curl), rotation progressive des poignets pendant la poussée',
      'Arriver paume vers l\'avant en haut, bras en extension — comme un développé militaire classique',
      'Descendre en effectuant la rotation inverse : paume face à soi en bas pour un étirement complet',
    ],
    avoidPoints: [
      'Ne pas accélérer la rotation : elle doit être progressive et contrôlée tout au long',
      'Éviter de pencher les épaules en avant au début : garder le dos bien appuyé contre le dossier',
      'Ne pas utiliser des charges trop lourdes : la technique complexe requiert une charge modérée',
    ],
  },
  {
    id: 34, name: 'Face pull', muscle: 'Épaules', level: 'Débutant', type: 'Hypertrophie', equipment: 'Poulie + corde',
    description: 'Isolation du deltoïde postérieur et des rotateurs externes. Exercice de correction posturale indispensable.',
    keyPoints: [
      'Poulie à hauteur des yeux, prise de corde avec pouces vers le haut, tirer vers le visage en écartant les mains',
      'Les coudes remontent à hauteur des épaules en fin de mouvement, rotation externe maximale',
      'Contraction forte en fin de course, maintien 1-2 secondes pour activer au maximum les rotateurs',
    ],
    avoidPoints: [
      'Ne pas tirer trop bas (vers le menton) : cible les mauvais muscles',
      'Éviter de laisser les coudes descendre sous les épaules pendant le tirage',
      'Ne pas utiliser un poids trop lourd qui compromet la rotation externe complète',
    ],
  },

  // ── JAMBES ──────────────────────────────────────────────────────────────
  {
    id: 35, name: 'Fentes marchées', muscle: 'Quadriceps', level: 'Débutant', type: 'Hypertrophie', equipment: 'Poids du corps / Haltères',
    description: 'Exercice unilatéral pour les quadriceps, fessiers et l\'équilibre. Parfait pour corriger les asymétries.',
    keyPoints: [
      'Pas grand vers l\'avant, genou avant à 90° sans dépasser le bout des orteils, genou arrière effleure le sol',
      'Garder le buste droit, regard droit devant, épaules au-dessus des hanches à chaque fente',
      'Pousser fort avec le talon du pied avant pour remonter et activer les fessiers',
    ],
    avoidPoints: [
      'Ne pas laisser le genou avant s\'affaisser vers l\'intérieur (valgus dynamique)',
      'Éviter de pencher le buste en avant : compense une faiblesse du psoas ou des quadriceps',
      'Ne pas faire de petits pas : un grand pas est nécessaire pour descendre correctement',
    ],
  },
  {
    id: 36, name: 'Leg press', muscle: 'Quadriceps', level: 'Débutant', type: 'Hypertrophie', equipment: 'Machine leg press',
    description: 'Poussée des jambes sur machine. Permet des charges lourdes avec moins de sollicitation du dos.',
    keyPoints: [
      'Pieds à la largeur des épaules, légèrement vers l\'extérieur, descendre jusqu\'à 90° de flexion du genou',
      'Pousser à travers l\'ensemble du pied (talon + avant-pied) de façon équilibrée',
      'Garder les lombaires en contact avec le dossier tout au long du mouvement',
    ],
    avoidPoints: [
      'Ne jamais déverrouiller complètement les genoux en extension : risque de blessure à l\'articulation',
      'Éviter de laisser les fesses décoller du siège en bas du mouvement : signe de profondeur excessive',
      'Ne pas placer les pieds trop bas sur la plateforme : excessive pression sur les genoux',
    ],
  },
  {
    id: 37, name: 'Romanian deadlift', muscle: 'Ischio-jambiers', level: 'Intermédiaire', type: 'Force', equipment: 'Barre / Haltères',
    description: 'Soulevé de terre roumain. Cible les ischio-jambiers et les fessiers en mode excentrique.',
    keyPoints: [
      'Dos plat, charges tenues devant les cuisses, descendre en glissant les charges le long des jambes',
      'Genoux légèrement fléchis fixes, le mouvement vient exclusivement des hanches (hinge)',
      'Descendre jusqu\'à sentir l\'étirement dans les ischio-jambiers, puis contracter les fessiers pour remonter',
    ],
    avoidPoints: [
      'Ne pas fléchir davantage les genoux en descendant : transforme l\'exercice en squat',
      'Éviter d\'arrondir le dos en cherchant à descendre trop bas',
      'Ne pas laisser les charges s\'éloigner du corps : les garder collées aux jambes tout au long',
    ],
  },
  {
    id: 38, name: 'Extensions mollets debout', muscle: 'Mollets', level: 'Débutant', type: 'Hypertrophie', equipment: 'Machine / Marche d\'escalier',
    description: 'Isolation des mollets (gastrocnémiens). Exercice simple mais très efficace pour le volume du mollet.',
    keyPoints: [
      'Avant du pied sur une surface surélevée, talon en dessous du niveau de la surface, montée complète sur les orteils',
      'Pause de 1-2 secondes en haut avec contraction maximale du mollet',
      'Descente lente et contrôlée pour maximiser l\'étirement en position basse',
    ],
    avoidPoints: [
      'Ne pas rebondir en bas du mouvement : prend de l\'élan et réduit le travail musculaire',
      'Éviter les demi-mouvements : descendre le talon en dessous de la surface surélevée à chaque répétition',
      'Ne pas fléchir les genoux pendant l\'exercice : les gastrocnémiens sont bi-articulaires et perdent en efficacité',
    ],
  },

  // ── BRAS ────────────────────────────────────────────────────────────────
  {
    id: 39, name: 'Curl barre droite', muscle: 'Biceps', level: 'Débutant', type: 'Hypertrophie', equipment: 'Barre droite',
    description: 'Flexion de coude classique pour les biceps. Simple et efficace pour la masse.',
    keyPoints: [
      'Coudes fixes contre le corps tout au long du mouvement — ne pas les avancer pour tricher',
      'Supination complète du poignet en haut (paume vers le ciel) pour une contraction maximale du biceps',
      'Descente lente et contrôlée (2-3 sec) pour travailler la phase excentrique',
    ],
    avoidPoints: [
      'Ne pas utiliser l\'élan du buste pour monter la barre : réduire le poids et travailler proprement',
      'Éviter de laisser les coudes pointer vers l\'avant en haut du mouvement',
      'Ne pas descendre en extension complète si vous ressentez une douleur à l\'épaule',
    ],
  },
  {
    id: 40, name: 'Curl incliné haltères', muscle: 'Biceps', level: 'Intermédiaire', type: 'Hypertrophie', equipment: 'Haltères + banc incliné',
    description: 'Travaille le long chef du biceps en position étirée. Excellent pour le pic du biceps.',
    keyPoints: [
      'Banc à 45-60°, bras pendants le long du corps, supination dès le début de la montée',
      'Monter l\'haltère lentement en gardant l\'épaule en arrière et le coude immobile',
      'Étirement complet à chaque répétition grâce à la position inclinée du banc',
    ],
    avoidPoints: [
      'Ne pas avancer l\'épaule en montant : annule l\'avantage de la position inclinée',
      'Éviter de remonter le bras pour raccourcir l\'amplitude : c\'est toute la valeur de l\'exercice',
      'Ne pas effectuer l\'exercice trop rapidement : l\'étirement en phase excentrique est clé',
    ],
  },
  {
    id: 41, name: 'Extension triceps poulie', muscle: 'Triceps', level: 'Débutant', type: 'Hypertrophie', equipment: 'Poulie haute + corde',
    description: 'Isolation des triceps en poussée vers le bas. Exercice de finition parfait pour le volume.',
    keyPoints: [
      'Coudes collés contre les flancs et immobiles, seul l\'avant-bras bouge',
      'Extension complète à chaque répétition avec rotation des poignets vers l\'extérieur en bas (avec corde)',
      'Maintenir une légère inclinaison du buste en avant pour garder les coudes stables',
    ],
    avoidPoints: [
      'Ne pas laisser les coudes s\'écarter du corps : le mouvement perd en isolation',
      'Éviter de plier les poignets en bas du mouvement : neutralité des poignets tout au long',
      'Ne pas remonter trop haut : garder une légère tension sur les triceps même en haut',
    ],
  },
  {
    id: 42, name: 'Skull crusher', muscle: 'Triceps', level: 'Intermédiaire', type: 'Hypertrophie', equipment: 'Barre EZ + banc',
    description: 'Extension de coude couché pour isoler les triceps. Efficace pour le long chef du triceps.',
    keyPoints: [
      'Allongé sur banc plat, barre au-dessus du visage, coudes perpendiculaires au corps',
      'Fléchir seulement les coudes pour descendre la barre vers le front/derrière la tête',
      'Garder les bras verticaux et immobiles : seul l\'angle du coude change pendant le mouvement',
    ],
    avoidPoints: [
      'Ne pas laisser les coudes s\'écarter latéralement : risque de blessure au coude',
      'Éviter de trop descendre si vous ressentez une tension inconfortable à l\'épaule',
      'Ne pas aller trop vite : contrôle excentrique obligatoire avec une barre près du visage',
    ],
  },

  // ── ABDOMINAUX ──────────────────────────────────────────────────────────
  {
    id: 43, name: 'Crunch', muscle: 'Abdominaux', level: 'Débutant', type: 'Hypertrophie', equipment: 'Poids du corps',
    description: 'Exercice de base pour les abdominaux. Isolation de la flexion lombaire pour les droits de l\'abdomen.',
    keyPoints: [
      'Mains derrière la nuque sans tirer dessus, regard vers le plafond, menton légèrement rentré',
      'Enrouler le thorax vers le bassin — ne pas soulever tout le dos du sol',
      'Contraction maximale en haut, expirer pendant la montée, inspirer à la descente',
    ],
    avoidPoints: [
      'Ne pas tirer la nuque avec les mains : risque de blessure cervicale et de tricher',
      'Éviter de lever les hanches du sol : le mouvement doit être une flexion, pas un relevé de buste complet',
      'Ne pas verrouiller les pieds sous un appui : cela active les fléchisseurs de hanche plutôt que les abdos',
    ],
  },
  {
    id: 44, name: 'Planche', muscle: 'Abdominaux', level: 'Débutant', type: 'Gainage', equipment: 'Poids du corps',
    description: 'Gainage statique en appui. Renforce l\'ensemble de la sangle abdominale et protège le rachis.',
    keyPoints: [
      'Corps aligné de la tête aux talons, regard vers le sol, coudes sous les épaules',
      'Serrer les abdominaux, les fessiers et les quadriceps simultanément pour maintenir l\'alignement',
      'Respiration régulière tout au long — ne pas retenir son souffle',
    ],
    avoidPoints: [
      'Ne pas laisser les hanches monter ou descendre : c\'est l\'erreur la plus courante',
      'Éviter de rentrer la tête dans les épaules : dégager le cou et regarder vers le sol',
      'Ne pas retenir sa respiration : nuisible à la régulation de la pression abdominale',
    ],
  },
  {
    id: 45, name: 'L-sit sur barres', muscle: 'Abdominaux', level: 'Avancé', type: 'Gainage', equipment: 'Barres parallèles',
    description: 'Position statique avancée en appui. Travaille les abdominaux, les fléchisseurs de hanche et les triceps.',
    keyPoints: [
      'Bras tendus, épaules abaissées, jambes horizontales et serrées — corps en forme de L',
      'Contracter fort les abdos et les cuisses pour maintenir les jambes à l\'horizontale',
      'Progression par étapes : jambes fléchies → jambe tendue → deux jambes tendues',
    ],
    avoidPoints: [
      'Ne pas laisser les épaules monter vers les oreilles : déprimer les omoplates activement',
      'Éviter de laisser les jambes descendre sous l\'horizontale en début d\'apprentissage',
      'Ne pas forcer avec le bas du dos : la position doit être maintenue par les abdos',
    ],
  },

  // ── RUNNING / CARDIO ────────────────────────────────────────────────────
  {
    id: 46, name: 'Interval running 30/30', muscle: 'Global', level: 'Intermédiaire', type: 'Cardio', equipment: 'Piste / Tapis',
    description: 'Fractionné court 30 secondes effort / 30 secondes récupération. Améliore la VMA et la capacité anaérobie.',
    keyPoints: [
      'Effort à 90-100% de la VMA pendant les 30 sec actives — vraiment s\'impliquer',
      'Récupération à allure de marche rapide ou jogging très lent, suffisamment pour récupérer',
      'Débuter par 6-8 répétitions et progresser jusqu\'à 12-15 sur plusieurs semaines',
    ],
    avoidPoints: [
      'Ne pas commencer trop vite : calibrer son allure sur les 3-4 premières répétitions',
      'Éviter de couper la récupération trop court si la FC n\'est pas redescendue suffisamment',
      'Ne pas effectuer ce type de séance plus de 2x/semaine sans risque de surentraînement',
    ],
  },
  {
    id: 47, name: 'Tempo run', muscle: 'Global', level: 'Intermédiaire', type: 'Cardio', equipment: 'Piste / Route',
    description: 'Course à allure seuil lactique pendant 20-40 minutes. Améliore directement la vitesse de course sur longue distance.',
    keyPoints: [
      'Allure au seuil = rythme où on peut encore parler mais avec difficulté (conversation de 5-6 mots)',
      'Maintenir une foulée régulière et détendue, ne pas forcer excessivement sur la respiration',
      'Commencer progressivement : 15 min à l\'allure seuil, augmenter par paliers de 5 min',
    ],
    avoidPoints: [
      'Ne pas partir trop vite et accumuler du lactate trop tôt : rester vraiment au seuil',
      'Éviter cette séance en état de fatigue avancé : attendre d\'être suffisamment récupéré',
      'Ne pas négliger la phase d\'échauffement : au moins 10-15 min de jogging lent avant',
    ],
  },

  // ── HYROX / FONCTIONNEL ─────────────────────────────────────────────────
  {
    id: 48, name: 'SkiErg', muscle: 'Global', level: 'Intermédiaire', type: 'Cardio', equipment: 'SkiErg machine',
    description: 'Simulation de ski de fond sur machine. Outil principal HYROX (station 1). Travaille bras, dos et cardio.',
    keyPoints: [
      'Tirer les poignées en fléchissant les hanches et les genoux simultanément — mouvement coordonné',
      'Les bras initiaient le mouvement de haut, le corps suit — pensez "effondrement contrôlé"',
      'Maintenir un rythme régulier : 1000m à allure HYROX vaut mieux que des sprints non gérables',
    ],
    avoidPoints: [
      'Ne pas utiliser uniquement les bras : le corps entier doit s\'engager pour l\'efficacité',
      'Éviter de se pencher trop en avant au début : risque de perte d\'équilibre',
      'Ne pas tirer les poignées trop bas : s\'arrêter à la hauteur des hanches',
    ],
  },
  {
    id: 49, name: 'Wall ball', muscle: 'Global', level: 'Intermédiaire', type: 'Cardio', equipment: 'Medball + mur',
    description: 'Squat + lancer vers le haut. Station 6 HYROX. Combine force des jambes et endurance musculaire.',
    keyPoints: [
      'Squat profond avec le medball contre la poitrine, puis explosion explosive vers le haut en lançant la balle',
      'Attraper la balle au rebond et enchaîner directement : pas de pause entre chaque répétition',
      'Regard vers la cible (hauteur fixée à 3m), bras tendus au lancer pour maximiser la hauteur',
    ],
    avoidPoints: [
      'Ne pas laisser les genoux s\'effondrer pendant le squat sous la fatigue',
      'Éviter de sur-lancer la balle trop haut : gaspillage d\'énergie, calibrer la force',
      'Ne pas se tenir trop loin du mur : 30-60 cm de distance pour récupérer efficacement la balle',
    ],
  },
  {
    id: 50, name: 'Burpee broad jump', muscle: 'Global', level: 'Avancé', type: 'Cardio', equipment: 'Poids du corps',
    description: 'Burpee suivi d\'un saut en longueur. Station 5 HYROX. Exercice de cardio/force explosif.',
    keyPoints: [
      'Burpee complet avec poitrine qui touche le sol, puis saut explosif vers l\'avant le plus loin possible',
      'Réception souple sur les deux pieds avec absorption du choc par les genoux légèrement fléchis',
      'Maintenir un rythme régulier et soutenable : ne pas partir à fond sur les 10 premières reps',
    ],
    avoidPoints: [
      'Ne pas faire de half-burpees (sans toucher le sol) : en compétition HYROX, les juges sanctionnent',
      'Éviter d\'atterrir sur les talons : réception milieu de pied pour protéger les genoux',
      'Ne pas sauter trop loin si la fatigue compromet la réception : sécurité avant tout',
    ],
  },
  {
    id: 51, name: 'Rowing ergomètre', muscle: 'Global', level: 'Débutant', type: 'Cardio', equipment: 'Rameur Concept2',
    description: 'Aviron sur machine. Station 2 HYROX. Exercice cardio complet qui sollicite 86% des muscles du corps.',
    keyPoints: [
      'Séquence : jambes → hanches → bras (tirage). Retour : bras → hanches → jambes',
      'Pousser avec les jambes puissamment (70% de l\'effort) puis basculer le buste en arrière',
      'Maintenir un ratio effort/retour de 1/2 : tirer sur 1 temps, revenir sur 2 temps',
    ],
    avoidPoints: [
      'Ne pas tirer uniquement avec les bras : les jambes sont le moteur principal',
      'Éviter de s\'arrondir le dos en fin de tirage : garder le buste légèrement incliné en arrière',
      'Ne pas battre de la tête pour l\'élan : le mouvement doit être fluide et coordonné',
    ],
  },
  {
    id: 52, name: 'Sandbag lunges', muscle: 'Quadriceps', level: 'Intermédiaire', type: 'Force', equipment: 'Sandbag',
    description: 'Fentes marchées avec sac de sable. Station 8 HYROX. Travaille les jambes et le core sous charge fonctionnelle.',
    keyPoints: [
      'Sac posé sur les épaules ou porté dans les bras, fentes lentes et contrôlées sur 24m',
      'Genou arrière effleure le sol à chaque répétition pour la compliance HYROX',
      'Garder le regard devant, dos droit, core engagé malgré la fatigue',
    ],
    avoidPoints: [
      'Ne pas faire des fentes trop courtes pour aller plus vite : les juges vérifient l\'amplitude',
      'Éviter de laisser le sandbag glisser d\'un côté : repositionner régulièrement',
      'Ne pas verrouiller les genoux entre les répétitions : rester en légère flexion',
    ],
  },
  {
    id: 53, name: 'Kettlebell swing', muscle: 'Fessiers', level: 'Intermédiaire', type: 'Force', equipment: 'Kettlebell',
    description: 'Swing balistique avec kettlebell. Excellent pour la puissance de la chaîne postérieure et le cardio.',
    keyPoints: [
      'Hanches en arrière (hinge) et non squat : la force vient de l\'extension explosive des hanches',
      'La kettlebell monte à la hauteur des épaules grâce à l\'extension des hanches, pas avec les bras',
      'Contracter fort les fessiers à l\'extension complète, serrer le core à chaque swing',
    ],
    avoidPoints: [
      'Ne pas faire un squat avec une KB devant soi : c\'est la principale erreur des débutants',
      'Éviter de laisser la KB tirer les bras vers le bas en fin de swing sans contrôle',
      'Ne pas laisser le dos s\'arrondir en bas du mouvement sous la force centrifuge de la KB',
    ],
  },
  {
    id: 54, name: 'Box jump', muscle: 'Quadriceps', level: 'Intermédiaire', type: 'Cardio', equipment: 'Plyo box',
    description: 'Saut sur boîte pliométrique. Développe la puissance explosive des membres inférieurs.',
    keyPoints: [
      'Position de départ : semi-squat, bras en arrière, genoux fléchis à 90°',
      'Explosion totale vers le haut avec bras qui aident au lancer, atterrissage souple sur la boîte',
      'Descendre en step-down (pas en saut) pour préserver les tendons d\'Achille',
    ],
    avoidPoints: [
      'Ne pas sauter si la hauteur est trop importante pour votre niveau actuel',
      'Éviter de sauter en rebond directement sans reset : risque de fatigue cumulée et blessure',
      'Ne pas atterrir avec les genoux en valgus : corriger immédiatement cette erreur',
    ],
  },
  {
    id: 55, name: 'Hollow body', muscle: 'Abdominaux', level: 'Intermédiaire', type: 'Gainage', equipment: 'Poids du corps',
    description: 'Position de gainage avancée issu de la gym. Base des exercices au sol de calisthenics.',
    keyPoints: [
      'Lombaires plaquées au sol, jambes tendues à quelques centimètres du sol, bras tendus derrière la tête',
      'Contracter abdominaux, fessiers et jambes simultanément pour maintenir la tension totale',
      'Tenir 30 à 60 secondes en progressant progressivement',
    ],
    avoidPoints: [
      'Ne pas laisser les lombaires se décoller du sol : baisser les jambes plus haut si nécessaire',
      'Éviter de retenir sa respiration : inspirer par le nez, expirer par la bouche',
      'Ne pas plier les genoux pour faciliter : c\'est la difficulté de cet exercice',
    ],
  },

  // ── PECTORAUX AVANCÉS ────────────────────────────────────────────────────
  {
    id: 56, name: 'Développé couché prise serrée', muscle: 'Pectoraux', level: 'Intermédiaire', type: 'Hypertrophie', equipment: 'Barre + banc',
    description: 'Variante du développé couché avec prise rapprochée. Cible le chef sternal et les triceps.',
    keyPoints: [
      'Prise à environ 30-40 cm de large (index sur les repères lisses de la barre)',
      'Descendre la barre vers le bas de la poitrine, coudes restent proches du corps',
      'Pousser en gardant les coudes à 45° du torse pour combiner travail pec/tricep',
    ],
    avoidPoints: [
      'Ne pas prendre trop étroit au point de douleur aux poignets',
      'Éviter de laisser les coudes s\'écarter au même niveau qu\'une prise large',
      'Ne pas rebondir la barre sur le sternum',
    ],
  },
  {
    id: 57, name: 'Écarté à la poulie basse', muscle: 'Pectoraux', level: 'Débutant', type: 'Hypertrophie', equipment: 'Câble poulie basse',
    description: 'Isolation des pectoraux avec tension constante grâce à la poulie. Excellent pour la définition musculaire.',
    keyPoints: [
      'Poulies basses de chaque côté, légère inclinaison vers l\'avant, mouvement en arc de bas vers le haut',
      'Bras légèrement fléchis tout au long, finir en croisant légèrement les mains en haut pour maximiser la contraction',
      'Contrôle lent à la descente pour un travail excentrique complet',
    ],
    avoidPoints: [
      'Ne pas fermer complètement les coudes : garder la légère flexion constante',
      'Éviter de tirer avec les bras : le mouvement doit venir de la poitrine',
      'Ne pas se pencher trop en avant, ce qui réduit la tension sur les pectoraux',
    ],
  },
  {
    id: 58, name: 'Pompes déclinées', muscle: 'Pectoraux', level: 'Débutant', type: 'Hypertrophie', equipment: 'Sol + banc',
    description: 'Pompes avec les pieds surélevés. Cible le chef supérieur des pectoraux et les deltoïdes antérieurs.',
    keyPoints: [
      'Pieds sur un banc ou une boîte, corps en ligne droite, mains légèrement plus larges que les épaules',
      'Descendre jusqu\'à effleurer le sol avec la poitrine, coudes à 45° du corps',
      'Pousser fort en expirant, garder le gainage actif tout au long',
    ],
    avoidPoints: [
      'Ne pas laisser les hanches s\'affaisser : le corps doit rester en planche parfaite',
      'Éviter de regarder vers le sol (tête dans le cou) : regard légèrement en avant',
      'Ne pas faire de demi-répétitions : descendre au maximum de l\'amplitude',
    ],
  },
  {
    id: 59, name: 'Développé décliné barre', muscle: 'Pectoraux', level: 'Avancé', type: 'Force', equipment: 'Barre + banc décliné',
    description: 'Presse sur banc décliné pour cibler le faisceau sternal et le bas des pectoraux.',
    keyPoints: [
      'Pieds bloqués sous les rouleaux du banc décliné, prise légèrement plus large que les épaules',
      'Descendre la barre vers le bas de la poitrine, coudes légèrement rentrés',
      'Remonter en contractant fort le bas des pectoraux',
    ],
    avoidPoints: [
      'Ne jamais faire cet exercice sans spotterur avec des charges lourdes',
      'Éviter d\'incliner trop fortement le banc (>30°) : réduit la sécurité et cible moins les pecs',
      'Ne pas rebondir la barre sur la poitrine',
    ],
  },

  // ── DOS AVANCÉ ───────────────────────────────────────────────────────────
  {
    id: 60, name: 'Tirage vertical prise neutre', muscle: 'Dos', level: 'Débutant', type: 'Hypertrophie', equipment: 'Poulie haute + poignée neutre',
    description: 'Tirage à la poulie avec prise en supination ou neutre. Maximise le recrutement du grand dorsal.',
    keyPoints: [
      'Prise supination ou neutre (paumes vers soi), coudes ramenés vers les hanches en fin de mouvement',
      'S\'asseoir légèrement en arrière, poitrine haute, ne pas se redresser pour aider',
      'Contraction maximale en bas avec les omoplates bien rétractées',
    ],
    avoidPoints: [
      'Ne pas se balancer vers l\'arrière pour utiliser l\'élan du corps',
      'Éviter de tirer avec les avant-bras en premier : initier par les omoplates',
      'Ne pas relâcher brusquement le câble en haut : retour contrôlé sur 2-3 secondes',
    ],
  },
  {
    id: 61, name: 'Rowing haltère unilatéral', muscle: 'Dos', level: 'Débutant', type: 'Hypertrophie', equipment: 'Haltère + banc',
    description: 'Tirage horizontal d\'un seul côté. Permet une amplitude plus grande et corrige les asymétries.',
    keyPoints: [
      'Main et genou ipsilatéraux sur le banc, dos plat et parallèle au sol',
      'Tirer l\'haltère vers la hanche en rétractant l\'omoplate — pas vers la poitrine',
      'Laisser descendre l\'haltère complètement pour étirer le dorsal, puis remonter avec contrôle',
    ],
    avoidPoints: [
      'Ne pas tourner le bassin pour aider le bras à monter',
      'Éviter de tirer trop haut (au niveau de l\'épaule) : cible les deltoïdes au lieu du dos',
      'Ne pas arrondir le dos pendant le mouvement',
    ],
  },
  {
    id: 62, name: 'Tractions pronation', muscle: 'Dos', level: 'Avancé', type: 'Force', equipment: 'Barre de traction',
    description: 'Pull-up classique en pronation (paumes vers l\'avant). Développe le grand dorsal en largeur.',
    keyPoints: [
      'Prise légèrement plus large que les épaules, dépresser les omoplates avant de fléchir les coudes',
      'Tirer jusqu\'à ce que le menton passe la barre, poitrine vers la barre',
      'Descente complète à chaque répétition pour un travail maximum du grand dorsal',
    ],
    avoidPoints: [
      'Ne pas se balancer ou kipping : tractions strictes uniquement pour le travail musculaire',
      'Éviter les demi-répétitions qui s\'arrêtent à mi-course',
      'Ne pas hausser les épaules vers les oreilles : les abaisser activement dès le départ',
    ],
  },
  {
    id: 63, name: 'Shrug barre', muscle: 'Dos', level: 'Débutant', type: 'Hypertrophie', equipment: 'Barre',
    description: 'Élévation des épaules avec barre. Isolation des trapèzes supérieurs.',
    keyPoints: [
      'Barre tenue devant les cuisses, bras tendus, élévation verticale des épaules vers les oreilles',
      'Tenir 1-2 secondes en haut avec contraction maximale des trapèzes',
      'Descendre lentement pour un travail excentrique complet',
    ],
    avoidPoints: [
      'Ne pas rouler les épaules (mouvement circulaire) : augmente le risque de blessure à l\'acromion',
      'Éviter de fléchir les coudes pour aider : les bras restent droits',
      'Ne pas utiliser une charge trop lourde qui empêche la contraction complète en haut',
    ],
  },
  {
    id: 64, name: 'Pull-over haltère', muscle: 'Dos', level: 'Intermédiaire', type: 'Hypertrophie', equipment: 'Haltère + banc',
    description: 'Extension des épaules en décubitus. Travaille le grand dorsal et le grand rond en étirement.',
    keyPoints: [
      'Allongé sur le banc (transversalement ou en long), haltère tenu à deux mains au-dessus de la poitrine',
      'Descendre l\'haltère en arc vers l\'arrière de la tête en sentant l\'étirement du dorsal',
      'Remonter en arc en contractant le grand dorsal, coudes légèrement fléchis tout au long',
    ],
    avoidPoints: [
      'Ne pas descendre trop bas si mobilité d\'épaule insuffisante : risque de lésion',
      'Éviter de plier excessivement les coudes : transformation en extension de triceps',
      'Ne pas relâcher la tension musculaire en haut du mouvement',
    ],
  },

  // ── ÉPAULES AVANCÉ ───────────────────────────────────────────────────────
  {
    id: 65, name: 'Élévations frontales', muscle: 'Épaules', level: 'Débutant', type: 'Hypertrophie', equipment: 'Haltères ou disque',
    description: 'Isolation du faisceau antérieur du deltoïde. Complète les élévations latérales pour des épaules complètes.',
    keyPoints: [
      'Lever l\'haltère devant soi jusqu\'à hauteur des yeux, pouce vers le haut ou en pronation',
      'Mouvement contrôlé, sans élan, bras tendus (légère flexion du coude acceptable)',
      'Alterner les bras ou travailler simultanément selon le niveau',
    ],
    avoidPoints: [
      'Ne pas balancer le corps pour créer de l\'élan : réduire le poids si nécessaire',
      'Éviter de monter au-dessus des yeux : surcharge la coiffe des rotateurs',
      'Ne pas descendre trop vite : phase excentrique lente pour un stimulus maximal',
    ],
  },
  {
    id: 66, name: 'Développé épaules machine', muscle: 'Épaules', level: 'Débutant', type: 'Hypertrophie', equipment: 'Machine à épaules',
    description: 'Presse épaules guidée sur machine. Idéal pour les débutants et les fins de séance à hautes répétitions.',
    keyPoints: [
      'Régler la hauteur pour que les poignées soient à hauteur des épaules',
      'Pousser verticalement, bras en extension presque complète, ne pas verrouiller les coudes',
      'Descendre lentement jusqu\'au niveau de départ, coudes à 90° en bas',
    ],
    avoidPoints: [
      'Ne pas cambrer le dos pour aider à pousser : garder le dos bien appuyé au dossier',
      'Éviter de verrouiller les coudes en haut pour ne pas stresser les articulations',
      'Ne pas descendre trop bas si douleur à l\'épaule : réduire l\'amplitude',
    ],
  },
  {
    id: 67, name: 'Rotation externe haltère', muscle: 'Épaules', level: 'Débutant', type: 'Gainage', equipment: 'Haltère léger',
    description: 'Renforcement de la coiffe des rotateurs externes. Exercice préventif essentiel pour la santé de l\'épaule.',
    keyPoints: [
      'Coude à 90°, fixé contre le flanc ou posé sur le genou, rotation externe de l\'avant-bras',
      'Amplitude complète : l\'avant-bras part de vertical (vers le sol) jusqu\'à horizontal (vers l\'extérieur)',
      'Charges légères, mouvement lent et contrôlé : l\'efficacité ne vient pas du poids',
    ],
    avoidPoints: [
      'Ne jamais utiliser de charges lourdes sur cet exercice de prévention',
      'Éviter de laisser le coude se déplacer pendant le mouvement',
      'Ne pas faire l\'exercice à vitesse rapide : le contrôle est la priorité absolue',
    ],
  },

  // ── JAMBES AVANCÉ ────────────────────────────────────────────────────────
  {
    id: 68, name: 'Hack squat machine', muscle: 'Quadriceps', level: 'Intermédiaire', type: 'Hypertrophie', equipment: 'Machine hack squat',
    description: 'Squat sur machine inclinée. Isole les quadriceps avec moins de stress lombaire qu\'un squat libre.',
    keyPoints: [
      'Pieds à la largeur des hanches ou légèrement plus larges, descendre jusqu\'à 90° minimum',
      'Garder les talons bien ancrés sur la plateforme tout au long du mouvement',
      'Pousser en contractant les quadriceps, éviter de verrouiller les genoux en haut',
    ],
    avoidPoints: [
      'Ne jamais verrouiller les genoux en haut du mouvement : risque de blessure articulaire',
      'Éviter de laisser les genoux se refermer vers l\'intérieur sous la charge',
      'Ne pas décoller les fessiers du pad en bas du mouvement',
    ],
  },
  {
    id: 69, name: 'Leg extension', muscle: 'Quadriceps', level: 'Débutant', type: 'Hypertrophie', equipment: 'Machine leg extension',
    description: 'Isolation des quadriceps en extension de genou. Parfait pour finir une séance jambes et définir le vaste.',
    keyPoints: [
      'Régler la machine pour que l\'axe de rotation soit aligné avec l\'articulation du genou',
      'Extension complète en haut avec contraction maximale des quadriceps, pause 1 seconde',
      'Descendre lentement sur 2-3 secondes pour le travail excentrique',
    ],
    avoidPoints: [
      'Ne pas utiliser des charges trop lourdes qui créent un stress de cisaillement sur le genou',
      'Éviter de verrouiller le genou de façon explosive : augmente les forces de contact rotulien',
      'Ne pas laisser les jambes redescendre brusquement',
    ],
  },
  {
    id: 70, name: 'Squat sumo', muscle: 'Quadriceps', level: 'Intermédiaire', type: 'Force', equipment: 'Barre ou haltère',
    description: 'Squat avec écartement large des pieds. Cible davantage les adducteurs et les fessiers.',
    keyPoints: [
      'Pieds beaucoup plus larges que les épaules, orteils tournés à 45°',
      'Descendre en poussant les genoux vers l\'extérieur (dans l\'axe des orteils)',
      'Garder le buste droit, descendre profondément pour maximiser le travail des adducteurs',
    ],
    avoidPoints: [
      'Ne pas laisser les genoux se refermer vers l\'intérieur lors de la remontée',
      'Éviter de pencher trop le buste en avant : le dos doit rester vertical',
      'Ne pas prendre un écartement au-delà de votre mobilité de hanche naturelle',
    ],
  },
  {
    id: 71, name: 'Leg curl assis', muscle: 'Ischio-jambiers', level: 'Débutant', type: 'Hypertrophie', equipment: 'Machine leg curl',
    description: 'Flexion de genou en position assise. Cible les ischio-jambiers en position raccourcie des hanches.',
    keyPoints: [
      'Régler le pad pour qu\'il touche l\'arrière des chevilles, genoux légèrement au-delà du bord de la machine',
      'Fléchir les genoux jusqu\'à 90° minimum, contraction forte en fin de course',
      'Revenir lentement jusqu\'à extension quasi-complète',
    ],
    avoidPoints: [
      'Ne pas lever les fessiers du siège pour créer de l\'élan',
      'Éviter de revenir trop vite : résister à la charge dans la phase de retour',
      'Ne pas verrouiller les genoux en extension complète avec une charge lourde',
    ],
  },
  {
    id: 72, name: 'Hip thrust unilatéral', muscle: 'Fessiers', level: 'Intermédiaire', type: 'Hypertrophie', equipment: 'Banc + haltère',
    description: 'Thrust fessier sur une jambe. Corrige les asymétries et augmente la difficulté.',
    keyPoints: [
      'Même position que le hip thrust classique mais une seule jambe au sol, l\'autre tendue ou croisée',
      'L\'extension vient uniquement du côté actif, contraction maximale en haut',
      'Contrôler la descente pour éviter les compensations du dos',
    ],
    avoidPoints: [
      'Ne pas laisser les hanches s\'incliner d\'un côté en haut du mouvement',
      'Éviter de trop cambrer le bas du dos pour compenser la faiblesse du fessier',
      'Ne pas utiliser de charge externe au départ : maîtriser d\'abord le poids du corps',
    ],
  },
  {
    id: 73, name: 'Kickback fessier câble', muscle: 'Fessiers', level: 'Débutant', type: 'Hypertrophie', equipment: 'Câble cheville',
    description: 'Extension de hanche debout à la poulie. Isolation du grand fessier et de la chaîne postérieure.',
    keyPoints: [
      'Légèrement penché en avant, mains sur le support, jambe active en extension derrière',
      'Contraction maximale du fessier en fin de course, ne pas cambrer le bas du dos',
      'Revenir lentement à la position initiale sans toucher le sol avec le pied',
    ],
    avoidPoints: [
      'Ne pas se servir du bas du dos pour pousser la jambe plus haut',
      'Éviter de prendre une charge trop lourde qui force la compensation lombaire',
      'Ne pas se pencher excessivement en avant : garder une position stable',
    ],
  },

  // ── BICEPS AVANCÉ ────────────────────────────────────────────────────────
  {
    id: 74, name: 'Curl marteau', muscle: 'Biceps', level: 'Débutant', type: 'Hypertrophie', equipment: 'Haltères',
    description: 'Flexion neutre du coude. Cible le brachial antérieur et le brachioradial pour l\'épaisseur du bras.',
    keyPoints: [
      'Prise neutre (pouces vers le haut) tout au long du mouvement, pas de rotation du poignet',
      'Coudes fixes contre le corps, monter jusqu\'à contraction complète',
      'Alterner les bras ou travailler simultanément, mouvement strictement vertical',
    ],
    avoidPoints: [
      'Ne pas faire pivoter le poignet : la prise reste neutre du début à la fin',
      'Éviter l\'élan du corps : le mouvement vient exclusivement de la flexion de coude',
      'Ne pas descendre trop vite : la phase excentrique compte autant que la montée',
    ],
  },
  {
    id: 75, name: 'Curl Larry Scott (préacher)', muscle: 'Biceps', level: 'Intermédiaire', type: 'Hypertrophie', equipment: 'Banc Scott + barre EZ',
    description: 'Flexion des biceps sur le banc Scott. Isole parfaitement les biceps en supprimant tout élan.',
    keyPoints: [
      'Bras posés sur le coussin incliné, coudes à quelques centimètres du bord pour ne pas perdre la tension',
      'Monter lentement jusqu\'à angle 60-70° (pas jusqu\'au visage), pause 1s en haut',
      'Descendre très lentement jusqu\'à extension quasi-complète — phase excentrique clé',
    ],
    avoidPoints: [
      'Ne pas descendre jusqu\'à extension complète avec des charges lourdes : risque de déchirure du biceps distal',
      'Éviter de soulever le buste du banc pour aider lors des dernières reps',
      'Ne pas faire des mouvements trop rapides : la lenteur est ce qui rend cet exercice efficace',
    ],
  },
  {
    id: 76, name: 'Curl câble basse poulie', muscle: 'Biceps', level: 'Débutant', type: 'Hypertrophie', equipment: 'Câble + barre droite',
    description: 'Flexion biceps à la poulie basse. Tension constante sur tout l\'arc de mouvement, contrairement aux haltères.',
    keyPoints: [
      'Prise supination sur la barre droite ou EZ, coudes collés aux flancs tout au long',
      'Profiter de la tension continue du câble pour contrôler la descente excentrique',
      'Monter jusqu\'à contraction maximale et tenir 1 seconde avant de descendre',
    ],
    avoidPoints: [
      'Ne pas laisser les coudes dériver vers l\'avant en montant',
      'Éviter de baisser les mains en dessous du niveau des hanches : tension perdue',
      'Ne pas utiliser l\'élan du bassin pour aider le mouvement',
    ],
  },

  // ── TRICEPS AVANCÉ ───────────────────────────────────────────────────────
  {
    id: 77, name: 'Dips triceps au banc', muscle: 'Triceps', level: 'Débutant', type: 'Hypertrophie', equipment: 'Banc',
    description: 'Dips en appui sur banc avec les pieds au sol ou surélevés. Exercice de base pour les triceps.',
    keyPoints: [
      'Mains sur le bord du banc derrière soi, doigts vers l\'avant, bras tendus en position initiale',
      'Descendre en fléchissant les coudes jusqu\'à 90°, les coudes restent proches du corps',
      'Remonter en poussant fort avec les triceps jusqu\'à extension complète',
    ],
    avoidPoints: [
      'Ne pas laisser les coudes s\'écarter latéralement : ils doivent pointer vers l\'arrière',
      'Éviter de descendre trop bas si douleur aux épaules : limiter l\'amplitude',
      'Ne pas balancer les fesses loin du banc : garder le dos proche du banc',
    ],
  },
  {
    id: 78, name: 'Extension triceps haltère une main', muscle: 'Triceps', level: 'Intermédiaire', type: 'Hypertrophie', equipment: 'Haltère',
    description: 'Extension de coude unilatérale au-dessus de la tête. Cible en priorité le long chef du triceps.',
    keyPoints: [
      'Bras vertical au-dessus de la tête, l\'autre main stabilise le coude, fléchir et étendre uniquement le coude',
      'Descendre l\'haltère derrière la tête jusqu\'à l\'amplitude maximale sans forcer sur l\'épaule',
      'Remonter en extension complète, contraction maximale du long chef en haut',
    ],
    avoidPoints: [
      'Ne pas laisser le coude partir sur le côté : il reste pointé vers le haut',
      'Éviter d\'aller trop vite : risque de taper la nuque avec l\'haltère',
      'Ne pas utiliser de charge trop lourde qui compromet la stabilité de l\'épaule',
    ],
  },
  {
    id: 79, name: 'Pushdown câble barre', muscle: 'Triceps', level: 'Débutant', type: 'Hypertrophie', equipment: 'Câble + barre droite',
    description: 'Extension de coude vers le bas avec barre droite. Alternative à la corde pour plus de charge.',
    keyPoints: [
      'Prise pronation sur la barre, coudes collés aux flancs, extension complète vers le bas',
      'Légère inclinaison du buste en avant pour stabiliser les coudes',
      'Revenir lentement jusqu\'à ce que les avant-bras soient horizontaux',
    ],
    avoidPoints: [
      'Ne pas laisser les coudes se déplacer vers le haut ou vers l\'avant lors du retour',
      'Éviter de verrouiller les coudes de façon explosive : contrôle à tout moment',
      'Ne pas fléchir les poignets : neutralité absolue des poignets pendant l\'exercice',
    ],
  },

  // ── ABDOMINAUX AVANCÉ ────────────────────────────────────────────────────
  {
    id: 80, name: 'Relevé de jambes suspendu', muscle: 'Abdominaux', level: 'Intermédiaire', type: 'Gainage', equipment: 'Barre de traction',
    description: 'Flexion des hanches en suspension. Travaille les abdominaux bas, les fléchisseurs de hanche et la stabilité.',
    keyPoints: [
      'Suspendu à la barre, lever les jambes jusqu\'à l\'horizontale ou plus si possible',
      'Éviter de se balancer : stabiliser le corps avec les abdominaux avant de lever les jambes',
      'Variante facile : genoux fléchis. Variante avancée : jambes tendues à l\'horizontale ou en L',
    ],
    avoidPoints: [
      'Ne pas utiliser l\'élan du balancement pour lever les jambes',
      'Éviter de laisser le bas du dos s\'arquer en abaissant les jambes',
      'Ne pas descendre trop vite : résister à la gravité sur la phase de retour',
    ],
  },
  {
    id: 81, name: 'Ab wheel rollout', muscle: 'Abdominaux', level: 'Avancé', type: 'Gainage', equipment: 'Roue abdominale',
    description: 'Extension complète du corps avec la roue abdominale. Exercice redoutable pour les abdominaux profonds.',
    keyPoints: [
      'Genoux au sol (variante débutant) ou pieds au sol (avancé), bras tendus sur la roue',
      'Rouler vers l\'avant en contrôlant avec les abdominaux, s\'arrêter avant que les lombaires ne se creux',
      'Revenir en contractant fort les abdominaux, sans plier excessivement les bras',
    ],
    avoidPoints: [
      'Ne pas laisser les lombaires s\'affaisser vers le sol lors de l\'extension',
      'Éviter d\'aller trop loin dès le début : progresser vers l\'extension complète sur plusieurs semaines',
      'Ne pas faire cet exercice si vous avez des problèmes lombaires sans avis médical',
    ],
  },
  {
    id: 82, name: 'Russian twist', muscle: 'Abdominaux', level: 'Débutant', type: 'Gainage', equipment: 'Poids du corps / Disque',
    description: 'Rotation du torse en position semi-assise. Travaille les obliques et la stabilité rotatoire du tronc.',
    keyPoints: [
      'Assis à 45° environ, jambes légèrement fléchies ou surélevées, mains jointes ou tenant un poids',
      'Rotation lente du torse de gauche à droite, les épaules tournent mais le bassin reste stable',
      'Expirer sur la rotation, maintenir la tension abdominale tout au long',
    ],
    avoidPoints: [
      'Ne pas balancer le poids avec les bras sans tourner le torse : ce sont les obliques qui doivent travailler',
      'Éviter de se pencher en arrière au point de perdre la tension abdominale',
      'Ne pas effectuer les rotations trop rapidement avec une charge lourde : risque lombaire',
    ],
  },
  {
    id: 83, name: 'Dragon flag', muscle: 'Abdominaux', level: 'Avancé', type: 'Gainage', equipment: 'Banc',
    description: 'Gainage extrême popularisé par Bruce Lee. Sollicite l\'ensemble de la sangle abdominale et dorsale.',
    keyPoints: [
      'Allongé sur le banc, mains tenant le banc derrière la tête, corps en planche au-dessus du banc',
      'Descendre le corps en gardant la ligne parfaite (corps en planche rigide), puis remonter',
      'Ne jamais laisser les hanches fléchir : le corps doit descendre et monter comme un bloc rigide',
    ],
    avoidPoints: [
      'Ne jamais pratiquer cet exercice sans avoir maîtrisé la planche et le hollow body d\'abord',
      'Éviter de laisser les lombaires s\'affaisser : toujours maintenir la rigidité du corps',
      'Ne pas descendre trop vite : contrôle excentrique absolu requis',
    ],
  },

  // ── FESSIERS / CHAÎNE POST ───────────────────────────────────────────────
  {
    id: 84, name: 'Soulevé de terre sumo', muscle: 'Fessiers', level: 'Intermédiaire', type: 'Force', equipment: 'Barre',
    description: 'Variante sumo du deadlift. Sollicite plus les fessiers et les adducteurs que le sumo classique.',
    keyPoints: [
      'Prise en dehors des jambes très écartées, orteils vers l\'extérieur (45-60°)',
      'Descendre les hanches comme pour un squat, dos plat, tibia vertical',
      'Pousser le sol vers le bas en écartant les genoux — pas tirer la barre',
    ],
    avoidPoints: [
      'Ne pas arrondir le bas du dos sous la charge',
      'Éviter de laisser les genoux se refermer vers l\'intérieur lors de la poussée',
      'Ne pas laisser la barre s\'éloigner du corps : elle doit glisser le long des tibias',
    ],
  },
  {
    id: 85, name: 'Pont fessier sol', muscle: 'Fessiers', level: 'Débutant', type: 'Hypertrophie', equipment: 'Poids du corps / Barre',
    description: 'Version allongée au sol du hip thrust. Idéale pour les débutants et l\'activation fessière.',
    keyPoints: [
      'Allongé sur le dos, pieds à plat, fléchis à 90°, monter les hanches en contractant les fessiers',
      'Corps aligné épaules-hanches-genoux en haut, tenir 2 secondes',
      'Redescendre lentement, ne pas toucher le sol entre les répétitions (tension continue)',
    ],
    avoidPoints: [
      'Ne pas monter les hanches avec le bas du dos : c\'est le fessier qui doit pousser',
      'Éviter de placer les pieds trop loin ou trop près : tester la position où le fessier travaille le plus',
      'Ne pas relâcher entre les répétitions : garder la tension musculaire continue',
    ],
  },

  // ── FONCTIONNEL / CROSSFIT ───────────────────────────────────────────────
  {
    id: 86, name: 'Thruster barre', muscle: 'Global', level: 'Avancé', type: 'Cardio', equipment: 'Barre',
    description: 'Squat frontal + développé militaire enchaîné. Exercice total body redoutable pour le conditionnement.',
    keyPoints: [
      'Barre en rack avant sur les clavicules, squat profond puis élan de la montée pour pousser la barre',
      'Bras se tendent complètement au-dessus de la tête dans le prolongement des jambes',
      'Mouvement fluide et continu : le bas du squat alimente le développé sans pause',
    ],
    avoidPoints: [
      'Ne pas perdre la position de rack avant en descendant',
      'Éviter de pousser la barre avant que les jambes ne soient bien engagées',
      'Ne pas faire le développé séparément du squat : toute l\'efficacité vient de l\'enchaînement',
    ],
  },
  {
    id: 87, name: 'Clean & jerk simplifié', muscle: 'Global', level: 'Avancé', type: 'Cardio', equipment: 'Barre légère',
    description: 'Version simplifiée de l\'arraché-épaulé. Développe la coordination, l\'explosivité et la puissance totale.',
    keyPoints: [
      'Épaulé depuis le sol jusqu\'aux clavicules en un mouvement explosif',
      'Réceptionner en position de squat frontal stable avant de pousser la barre',
      'Travailler d\'abord la technique avec une barre vide ou très légère',
    ],
    avoidPoints: [
      'Ne jamais sacrifier la technique pour la charge : exercice exigeant un apprentissage progressif',
      'Éviter cet exercice sans avoir maîtrisé séparément le rack frontal et le deadlift',
      'Ne pas cambrer le bas du dos lors de la réception de la barre',
    ],
  },
  {
    id: 88, name: 'Sled push', muscle: 'Global', level: 'Intermédiaire', type: 'Cardio', equipment: 'Traineau + poids',
    description: 'Poussée du traineau de force. Développe la puissance des jambes et le conditionnement cardiovasculaire.',
    keyPoints: [
      'Mains sur les barres du traineau, corps incliné à 45°, pousser avec les deux jambes alternativement',
      'Pas courts et puissants, avant-pied qui attaque le sol, bras qui poussent le traineau en permanence',
      'Maintenir une vitesse et un angle constants sur toute la longueur',
    ],
    avoidPoints: [
      'Ne pas se redresser pendant la poussée : perdre l\'angle c\'est perdre la puissance',
      'Éviter les pas trop longs qui ralentissent le rythme et créent un déséquilibre',
      'Ne pas relâcher la pression sur le traineau à aucun moment',
    ],
  },
  {
    id: 89, name: 'Sled pull', muscle: 'Global', level: 'Intermédiaire', type: 'Cardio', equipment: 'Traineau + corde',
    description: 'Traction du traineau avec corde. Sollicite le dos, les bras et les jambes en reculant.',
    keyPoints: [
      'Corde à deux mains, marche en reculant en tirant le traineau avec alternance bras gauche/droit',
      'Dos droit, core engagé, initier le tirage par les épaules puis les bras',
      'Cadence régulière sur l\'ensemble de la distance',
    ],
    avoidPoints: [
      'Ne pas arrondir le dos lors du tirage sous la fatigue',
      'Éviter de tirer uniquement avec les bras : engager le dos et le core',
      'Ne pas regarder vers le bas : maintenir la vision périphérique pour la direction',
    ],
  },
  {
    id: 90, name: 'Battle ropes', muscle: 'Global', level: 'Débutant', type: 'Cardio', equipment: 'Cordes ondes',
    description: 'Ondes avec cordes lourdes. Excellent exercice cardio qui sollicite les épaules, le core et le cœur.',
    keyPoints: [
      'Légère flexion des genoux, dos droit, créer des ondes puissantes en montant et descendant les bras',
      'Alterner les bras (alternating) ou les synchroniser (double) selon l\'objectif',
      'Maintenir le rythme sur la durée définie (20-40 secondes) avec puissance constante',
    ],
    avoidPoints: [
      'Ne pas rester debout les jambes tendues : fléchir les genoux pour plus de stabilité',
      'Éviter de ralentir progressivement : maintenir l\'intensité tout au long de l\'intervalle',
      'Ne pas arrondir le dos pour créer de l\'élan : les ondes viennent des bras et des épaules',
    ],
  },

  // ── MOBILITÉ / ÉTIREMENTS ACTIFS ─────────────────────────────────────────
  {
    id: 91, name: 'Squat assis profond', muscle: 'Global', level: 'Débutant', type: 'Gainage', equipment: 'Poids du corps',
    description: 'Squat statique maintenu. Améliore la mobilité des chevilles, des hanches et la position du squat.',
    keyPoints: [
      'Descendre le plus bas possible, talons au sol, en utilisant les coudes pour pousser les genoux vers l\'extérieur',
      'Maintenir la position 30-60 secondes en respirant profondément',
      'Progresser en rapprochant les pieds semaine après semaine',
    ],
    avoidPoints: [
      'Ne pas forcer sur la position si les talons se soulèvent : travailler d\'abord la mobilité de cheville',
      'Éviter de vous asseoir contre un mur au départ si l\'objectif est l\'amélioration de la mobilité',
      'Ne pas précipiter la progression : la mobilité s\'acquiert sur des semaines/mois',
    ],
  },
  {
    id: 92, name: 'Dead bug', muscle: 'Abdominaux', level: 'Débutant', type: 'Gainage', equipment: 'Poids du corps',
    description: 'Exercice de coordination core/membre. Renforce les abdominaux profonds en maintenant la stabilité lombaire.',
    keyPoints: [
      'Allongé sur le dos, lombaires plaquées au sol, bras verticaux et jambes à 90°',
      'Baisser simultanément le bras opposé et la jambe opposée jusqu\'à quelques cm du sol',
      'Revenir à la position initiale avant de passer à l\'autre côté',
    ],
    avoidPoints: [
      'Ne pas laisser les lombaires se soulever lors de l\'abaissement des membres',
      'Éviter de faire l\'exercice trop rapidement : la lenteur est la difficulté principale',
      'Ne pas retenir sa respiration : expirer lors de l\'extension des membres',
    ],
  },

  // ── CARDIO AVANCÉ ────────────────────────────────────────────────────────
  {
    id: 93, name: 'Corde à sauter', muscle: 'Global', level: 'Débutant', type: 'Cardio', equipment: 'Corde à sauter',
    description: 'Cardio polyvalent de haute intensité. Améliore la coordination, l\'agilité et le VO2max.',
    keyPoints: [
      'Poignées à hauteur des hanches, saut minimal (juste assez pour laisser passer la corde)',
      'Atterrissage sur l\'avant des pieds, légère flexion des genoux pour absorber les chocs',
      'Coudes proches du corps, les poignets créent le mouvement circulaire de la corde',
    ],
    avoidPoints: [
      'Ne pas sauter trop haut : gaspillage d\'énergie inutile',
      'Éviter d\'atterrir sur les talons : risque de blessure aux genoux et au dos',
      'Ne pas regarder ses pieds : regard droit devant pour une meilleure coordination',
    ],
  },
  {
    id: 94, name: 'Vélo assault bike', muscle: 'Global', level: 'Intermédiaire', type: 'Cardio', equipment: 'Assault bike',
    description: 'Vélo à air résistance avec bras actifs. L\'un des exercices cardio les plus exigeants qui soit.',
    keyPoints: [
      'Utiliser les bras ET les jambes simultanément pour maximiser la puissance et le travail cardiorespiratoire',
      'Régler la selle pour que les jambes soient légèrement fléchies en bas de la pédalée',
      'Pour les sprints : effort maximal 10-20 secondes, récupération active 40-50 secondes',
    ],
    avoidPoints: [
      'Ne pas utiliser uniquement les jambes : les bras contribuent à 30-40% de la puissance totale',
      'Éviter de se lever de la selle lors des sprints : rester assis pour plus d\'efficacité',
      'Ne pas négliger la reprise de souffle entre les intervalles',
    ],
  },
  {
    id: 95, name: 'Sprint en côte', muscle: 'Global', level: 'Avancé', type: 'Cardio', equipment: 'Terrain en pente',
    description: 'Sprint sur terrain incliné. Développe la puissance explosive, renforce les mollets et réduit l\'impact au sol.',
    keyPoints: [
      'Forte inclinaison du corps vers l\'avant, attaque du sol avec l\'avant du pied',
      'Bras très actifs, cadence de foulée élevée, expiration puissante à chaque foulée',
      'Récupération en marchant ou en trottinant en descente',
    ],
    avoidPoints: [
      'Ne pas sprinter en côte sans échauffement préalable : risque élevé de déchirure musculaire',
      'Éviter les foulées trop longues en montée : privilégier une foulée courte et rapide',
      'Ne pas courber excessivement le dos : garder le torse droit et le regard vers le haut de la côte',
    ],
  },
]

// ─── BLOG POSTS ──────────────────────────────────────────────────────────────

export const blogPosts = [
  {
    slug: 'methode-hybride-musculation-running',
    title: 'La méthode hybride : concilier musculation et running',
    date: '20 mars 2025',
    category: 'Méthode',
    readTime: '6 min',
    image: null,
    excerpt: 'Comment développer force et endurance sans sacrifier l\'un pour l\'autre ? La méthode HBRD MTD répond à cette question avec une approche scientifique.',
    content: `La grande question que se posent tous les athlètes hybrides : est-il possible de courir ET de soulever lourd sans compromettre ses progrès dans les deux domaines ?

La réponse courte : oui, mais ça demande de la méthode.

## Le problème de l'interférence

Lorsqu'on combine entraînement de force et cardio intensif, le corps reçoit deux signaux contradictoires : construire du muscle (anabolisme) et devenir plus efficace sur le plan énergétique. Ce phénomène est connu sous le nom d'"effet d'interférence".

Cependant, des études récentes montrent que cet effet est largement surestimé si l'entraînement est correctement structuré.

## La méthode HBRD MTD

Notre approche repose sur 3 piliers :

**1. Séparation temporelle** — Au minimum 6h entre la séance de force et la séance cardio. Idéalement, force le matin, cardio le soir ou vice-versa.

**2. Priorité claire** — Définir un objectif principal (force ou endurance) et y allouer les meilleures ressources de récupération.

**3. Progression ondulante** — Alterner les semaines de charge entre force et cardio pour éviter la stagnation.

## Les résultats concrets

Nos clients suivant le protocole hybride sur 12 semaines observent en moyenne :
- +8% à leur squat 1RM
- -45 secondes sur leur 5km
- Amélioration de la composition corporelle

La clé ? La cohérence et la patience.`,
  },
  {
    slug: 'nutrition-prise-masse',
    title: 'Nutrition pour la prise de masse : les vraies règles',
    date: '12 mars 2025',
    category: 'Nutrition',
    readTime: '8 min',
    image: null,
    excerpt: 'Surplus calorique, timing des protéines, qualité des glucides... Voici ce qui compte vraiment pour construire du muscle efficacement.',
    content: `La prise de masse est souvent mal comprise. Beaucoup pensent qu'il suffit de "manger plus" pour grossir en muscle. La réalité est plus nuancée.

## Le surplus calorique

Pour construire du muscle, vous avez besoin d'être en surplus calorique : consommer plus de calories que vous n'en dépensez. Mais attention, un surplus trop important entraîne un stockage de graisse excessif.

**Recommandation HBRD MTD :** Un surplus de 200-300 kcal/jour est idéal pour la plupart des pratiquants intermédiaires.

## Les protéines

La synthèse protéique musculaire nécessite un apport suffisant en acides aminés essentiels.

**Objectif :** 1.6 à 2.2g de protéines par kg de poids corporel par jour.

Les meilleures sources : poulet, dinde, œufs, poisson, fromage blanc, légumineuses.

## Le timing des repas

Contrairement aux idées reçues, la "fenêtre anabolique" post-entraînement n'est pas aussi étroite qu'on le croyait. Ce qui compte davantage :

- La répartition globale sur la journée
- Consommer des protéines toutes les 3-5h
- Un repas pré-entraînement avec glucides complexes

## Les glucides : amis ou ennemis ?

Les glucides sont le carburant préférentiel du muscle. Réduire drastiquement les glucides en phase de prise de masse est contre-productif.

**Priorité aux :** Riz, patate douce, avoine, quinoa.`,
  },
  {
    slug: 'hyrox-preparation',
    title: 'Se préparer au HYROX : le guide complet',
    date: '5 mars 2025',
    category: 'Compétition',
    readTime: '10 min',
    image: null,
    excerpt: 'HYROX est devenu LA compétition fitness de référence en Europe. Voici comment structurer votre préparation sur 12 semaines.',
    content: `HYROX combine 8km de course et 8 stations de travail fonctionnel. C'est l'épreuve parfaite pour l'athlète hybride.

## Le format HYROX

La compétition se déroule ainsi :
- 1km de course
- 1 station de travail (SkiErg, sled push/pull, burpee broad jumps, rowing, sandbag lunges, wall balls)
- Répété 8 fois

Le temps moyen varie de 50 minutes (élites) à 2h30 (débutants).

## Les 12 semaines de préparation

**Phase 1 (semaines 1-4) : Base aérobie et technique**
- 3 séances course/semaine (1 longue, 2 modérées)
- Apprentissage des mouvements spécifiques
- Travail de force générale

**Phase 2 (semaines 5-8) : Spécificité**
- Introduction des simulations de stations
- Augmentation de l'intensité cardio
- EMOM et AMRAP spécifiques HYROX

**Phase 3 (semaines 9-11) : Peak**
- Simulations complètes (4-6 stations enchaînées)
- Travail des transitions course → station
- Gestion de la fatigue spécifique

**Semaine 12 : Taper**
- Réduction du volume de 40%
- Maintien de l'intensité
- Repos et récupération

## Les pièges à éviter

1. Négliger la force — Le SkiErg et le sled push requièrent une force de base solide
2. Ignorer les transitions — S'entraîner à passer de la course au travail fonctionnel rapidement
3. Sous-estimer l'hydratation — Planifier sa stratégie de nutrition en course`,
  },
]

// ─── DISCIPLINES ─────────────────────────────────────────────────────────────

export const disciplines = [
  {
    slug: 'musculation',
    name: 'Musculation',
    tagline: 'Construis ta fondation',
    description: 'Programme de musculation scientifiquement structuré pour la prise de masse, la force ou la définition musculaire.',
    benefits: ['Programmes périodisés', 'Suivi des charges', 'Technique optimisée', 'Nutrition adaptée'],
  },
  {
    slug: 'running',
    name: 'Running',
    tagline: 'Repousse tes limites',
    description: 'Préparation au running pour tous niveaux : 5km, 10km, semi-marathon ou marathon avec plans d\'entraînement progressifs.',
    benefits: ['Plan d\'entraînement progressif', 'Travail de foulée', 'VMA et fractionné', 'Récupération active'],
  },
  {
    slug: 'hybrid-athlete',
    name: 'Hybrid Athlete',
    tagline: 'Force + Endurance',
    description: 'La méthode hybride HBRD combine force et endurance pour des athlètes complets et fonctionnels.',
    benefits: ['Programmation hybride', 'Équilibre force/cardio', 'Composition corporelle', 'Performance globale'],
  },
  {
    slug: 'hyrox',
    name: 'HYROX',
    tagline: 'La compétition ultime',
    description: 'Préparation complète à la compétition HYROX sur 12 semaines : simulations, travail des stations, stratégie de course.',
    benefits: ['Simulations HYROX', 'Stations spécifiques', 'Gestion d\'effort', 'Stratégie de compétition'],
  },
]
