import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, HelpCircle } from 'lucide-react'

const faqs = [
  { q: 'Comment fonctionne le coaching en ligne ?', a: 'Après ta souscription, tu reçois un questionnaire de bilan. En 24-48h, Péryk t\'envoie ton programme personnalisé dans ton espace client. Tu peux échanger avec lui via messagerie.' },
  { q: 'Faut-il une salle de sport ?', a: 'Ça dépend de ton programme. La plupart des programmes musculation nécessitent une salle. Les programmes running et certains programmes full body sont réalisables à domicile.' },
  { q: 'Puis-je annuler mon abonnement ?', a: 'Oui, tu peux annuler à tout moment depuis ton espace client. L\'annulation prend effet à la fin de la période en cours. Aucune question, aucun frais.' },
  { q: 'Y a-t-il une garantie satisfaction ?', a: 'Oui. Si tu n\'es pas satisfait dans les 14 premiers jours, tu es remboursé intégralement sans condition.' },
  { q: 'À quelle fréquence le programme est-il mis à jour ?', a: 'Selon la formule, ton programme est révisé toutes les 4 à 8 semaines en fonction de tes progrès. Les ajustements intermédiaires peuvent être faits à tout moment.' },
  { q: 'Est-ce que la nutrition est incluse ?', a: 'Les plans mensuel et 3 mois incluent des recommandations nutritionnelles de base. Le plan 3 mois comprend un suivi macro détaillé personnalisé.' },
  { q: 'Je suis débutant, est-ce fait pour moi ?', a: 'Absolument. La méthode HBRD MTD est adaptée à tous les niveaux, du complet débutant au compétiteur. Le bilan initial permet de calibrer exactement le programme.' },
  { q: 'Combien de temps par semaine dois-je m\'entraîner ?', a: 'De 3 à 5 séances par semaine selon ta formule et disponibilité. Chaque séance dure entre 45 min et 1h30. Des programmes de 3j/semaine existent pour les emplois du temps chargés.' },
]

export default function FAQ() {
  const [open, setOpen] = useState(null)

  return (
    <div className="pt-20 min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="text-center mb-12">
            <span className="section-label mb-6 inline-flex"><HelpCircle size={12} />FAQ</span>
            <h1 className="font-anton text-5xl tracking-wider mb-4">QUESTIONS<br /><span className="gradient-text">FRÉQUENTES</span></h1>
          </div>

          <div className="space-y-2">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="card overflow-hidden"
              >
                <button
                  className="w-full flex items-center justify-between p-5 text-left"
                  onClick={() => setOpen(open === i ? null : i)}
                >
                  <span className="font-medium text-sm pr-4">{faq.q}</span>
                  <ChevronDown
                    size={16}
                    style={{
                      color: 'var(--text-muted)',
                      transform: open === i ? 'rotate(180deg)' : 'rotate(0)',
                      transition: 'transform 0.2s',
                      flexShrink: 0,
                    }}
                  />
                </button>
                <AnimatePresence>
                  {open === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-5 text-sm leading-relaxed" style={{ color: 'var(--text-secondary)', borderTop: '1px solid var(--border)', paddingTop: '1rem' }}>
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
