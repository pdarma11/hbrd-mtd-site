import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, BookOpen, Clock } from 'lucide-react'
import { blogPosts } from '../data/mockData'

const fadeUp = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6 } }

export default function Blog() {
  return (
    <div className="pt-20">
      <section className="py-24 px-4 sm:px-6 grid-bg">
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center mb-16" {...fadeUp}>
            <span className="section-label mb-6 inline-flex"><BookOpen size={12} />Blog</span>
            <h1 className="font-anton text-6xl md:text-7xl tracking-wider">
              CONSEILS &<br /><span className="gradient-text">MÉTHODES</span>
            </h1>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {blogPosts.map((post, i) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Link to={`/blog/${post.slug}`} className="card group flex flex-col overflow-hidden hover:border-white/20 transition-all duration-300 block h-full">
                  {/* Image placeholder */}
                  <div className="h-48 flex items-center justify-center relative overflow-hidden" style={{ background: 'var(--bg-elevated)' }}>
                    <div className="absolute inset-0 grid-bg opacity-50" />
                    <span className="font-anton text-5xl gradient-text relative z-10 opacity-30">
                      {post.category.toUpperCase()}
                    </span>
                  </div>
                  <div className="p-6 flex flex-col gap-3 flex-1">
                    <div className="flex items-center gap-2">
                      <span className="tag tag-accent">{post.category}</span>
                      <div className="flex items-center gap-1 text-xs ml-auto" style={{ color: 'var(--text-muted)' }}>
                        <Clock size={12} />
                        {post.readTime}
                      </div>
                    </div>
                    <h2 className="font-semibold text-lg leading-snug group-hover:text-accent transition-colors" style={{ color: 'white' }}>
                      {post.title}
                    </h2>
                    <p className="text-sm leading-relaxed flex-1" style={{ color: 'var(--text-secondary)' }}>
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between pt-4 mt-auto" style={{ borderTop: '1px solid var(--border)' }}>
                      <span className="text-xs" style={{ color: 'var(--text-muted)' }}>{post.date}</span>
                      <span className="text-sm font-medium flex items-center gap-1" style={{ color: 'var(--accent)' }}>
                        Lire <ArrowRight size={14} />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
