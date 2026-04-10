import { useParams, Link, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, Clock, Calendar, Tag } from 'lucide-react'
import { blogPosts } from '../data/mockData'

export default function BlogPost() {
  const { slug } = useParams()
  const post = blogPosts.find(p => p.slug === slug)

  if (!post) return <Navigate to="/blog" replace />

  // Simple markdown-like renderer
  const renderContent = (text) => {
    const lines = text.split('\n')
    return lines.map((line, i) => {
      if (line.startsWith('## ')) {
        return <h2 key={i} className="font-anton text-2xl tracking-wide mt-8 mb-4">{line.slice(3)}</h2>
      }
      if (line.startsWith('**') && line.endsWith('**')) {
        return <p key={i} className="font-semibold text-white mb-2">{line.slice(2, -2)}</p>
      }
      if (line.startsWith('- ')) {
        return <li key={i} className="ml-4 text-sm mb-2" style={{ color: 'var(--text-secondary)' }}>{line.slice(2)}</li>
      }
      if (line.trim() === '') return <br key={i} />
      // Bold within text
      const parts = line.split(/\*\*(.*?)\*\*/g)
      return (
        <p key={i} className="text-base leading-relaxed mb-3" style={{ color: 'var(--text-secondary)' }}>
          {parts.map((part, j) => j % 2 === 1 ? <strong key={j} className="text-white font-semibold">{part}</strong> : part)}
        </p>
      )
    })
  }

  return (
    <div className="pt-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <Link to="/blog" className="flex items-center gap-2 text-sm mb-8 hover:text-white transition-colors" style={{ color: 'var(--text-secondary)' }}>
            <ArrowLeft size={16} /> Retour au blog
          </Link>

          <div className="flex items-center gap-3 mb-6 flex-wrap">
            <span className="tag tag-accent">{post.category}</span>
            <div className="flex items-center gap-1 text-xs" style={{ color: 'var(--text-muted)' }}>
              <Calendar size={12} /> {post.date}
            </div>
            <div className="flex items-center gap-1 text-xs" style={{ color: 'var(--text-muted)' }}>
              <Clock size={12} /> {post.readTime} de lecture
            </div>
          </div>

          <h1 className="font-anton text-4xl md:text-5xl tracking-wider leading-tight mb-8">{post.title}</h1>

          <div className="separator mb-8" />

          <article className="prose-custom">
            {renderContent(post.content)}
          </article>

          <div className="separator mt-12 mb-8" />

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center font-bold text-sm" style={{ background: 'var(--accent)', color: '#000' }}>AD</div>
            <div>
              <div className="font-semibold">Péryk Darmalingon</div>
              <div className="text-sm" style={{ color: 'var(--text-muted)' }}>Coach HBRD MTD · Expert méthode hybride</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
