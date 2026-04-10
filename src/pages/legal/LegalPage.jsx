import { motion } from 'framer-motion'
import { FileText } from 'lucide-react'

const legalContent = {
  cgv: {
    title: 'CONDITIONS GÉNÉRALES DE VENTE',
    sections: [
      {
        heading: 'Article 1 — Objet',
        body: 'Les présentes CGV régissent les relations contractuelles entre HBRD MTD (Péryk Darmalingon, coach indépendant) et tout client ayant souscrit à l\'un des abonnements de coaching sportif en ligne proposés sur le site hbrdmtd.fr.'
      },
      {
        heading: 'Article 2 — Prix et paiement',
        body: 'Les prix sont indiqués en euros TTC. Le paiement est exigible immédiatement à la commande. Les abonnements sont renouvelés automatiquement à la fin de chaque période, sauf résiliation avant la date de renouvellement.'
      },
      {
        heading: 'Article 3 — Droit de rétractation',
        body: 'Conformément à l\'article L221-18 du Code de la consommation, le client dispose d\'un délai de 14 jours pour exercer son droit de rétractation. La demande doit être effectuée par email à coach@hbrdmtd.fr.'
      },
      {
        heading: 'Article 4 — Résiliation',
        body: 'L\'abonnement peut être résilié à tout moment depuis l\'espace client ou par email. La résiliation prend effet à la fin de la période en cours. Aucun remboursement partiel n\'est accordé après 14 jours.'
      },
      {
        heading: 'Article 5 — Responsabilité',
        body: 'Le client certifie être en bonne santé et ne pas avoir de contre-indication médicale à la pratique sportive. HBRD MTD ne saurait être tenu responsable des blessures résultant d\'une mauvaise exécution des exercices.'
      },
    ]
  },
  'mentions-legales': {
    title: 'MENTIONS LÉGALES',
    sections: [
      {
        heading: 'Éditeur',
        body: 'HBRD MTD — Péryk Darmalingon\nCoach sportif indépendant\nSIRET : 123 456 789 00012\nEmail : coach@hbrdmtd.fr\nSite : hbrdmtd.fr'
      },
      {
        heading: 'Hébergement',
        body: 'Ce site est hébergé par Vercel Inc.\n340 Pine Street, Suite 600\nSan Francisco, CA 94104\nUnited States'
      },
      {
        heading: 'Propriété intellectuelle',
        body: 'L\'ensemble du contenu de ce site (textes, images, logos, programmes) est protégé par le droit d\'auteur. Toute reproduction, même partielle, sans autorisation écrite est strictement interdite.'
      },
      {
        heading: 'Données personnelles',
        body: 'Les informations collectées sont utilisées uniquement dans le cadre de la relation de coaching. Conformément au RGPD, vous disposez d\'un droit d\'accès, de rectification et de suppression de vos données.'
      },
    ]
  },
  confidentialite: {
    title: 'POLITIQUE DE CONFIDENTIALITÉ',
    sections: [
      {
        heading: 'Données collectées',
        body: 'Nous collectons : nom, prénom, adresse email, données de progression physique (poids, mensurations) fournies volontairement dans le cadre du coaching, et données de connexion (IP, cookies de session).'
      },
      {
        heading: 'Utilisation des données',
        body: 'Vos données sont utilisées exclusivement pour : (1) la gestion de votre compte et programme de coaching, (2) la communication relative à votre suivi, (3) l\'amélioration de nos services.'
      },
      {
        heading: 'Conservation des données',
        body: 'Vos données sont conservées pendant la durée de votre abonnement et 3 ans après sa résiliation, conformément aux obligations légales.'
      },
      {
        heading: 'Vos droits',
        body: 'Conformément au RGPD, vous pouvez à tout moment accéder, modifier, ou supprimer vos données personnelles en contactant : coach@hbrdmtd.fr. Réponse sous 30 jours.'
      },
      {
        heading: 'Cookies',
        body: 'Ce site utilise des cookies de session nécessaires au fonctionnement de l\'espace client. Aucun cookie de tracking ou publicitaire n\'est utilisé.'
      },
    ]
  }
}

export default function LegalPage({ type }) {
  const content = legalContent[type]
  if (!content) return null

  return (
    <div className="pt-20 min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="flex items-center gap-3 mb-8">
            <FileText size={20} style={{ color: 'var(--accent)' }} />
            <h1 className="font-anton text-3xl md:text-4xl tracking-wider">{content.title}</h1>
          </div>

          <p className="text-sm mb-10" style={{ color: 'var(--text-muted)' }}>
            Dernière mise à jour : janvier 2025
          </p>

          <div className="space-y-8">
            {content.sections.map((s, i) => (
              <div key={i}>
                <h2 className="font-semibold text-base mb-3" style={{ color: 'var(--accent)' }}>{s.heading}</h2>
                <p className="text-sm leading-relaxed whitespace-pre-line" style={{ color: 'var(--text-secondary)' }}>{s.body}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
