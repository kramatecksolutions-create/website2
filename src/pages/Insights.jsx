import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { insightsData } from '../data/siteData'

// Deterministic SVG backgrounds for insight cards
const insightBgs = [
  { from: '#f0dfc8', to: '#eed4af' },
  { from: '#e8f5e9', to: '#c8e6c9' },
  { from: '#fff8f0', to: '#ffe0b2' },
  { from: '#f0f4ff', to: '#d0d9ff' },
  { from: '#fdf4e8', to: '#f5d0a8' },
  { from: '#e8faf0', to: '#b2dfdb' },
]

function InsightBg({ index }) {
  const { from, to } = insightBgs[index % insightBgs.length]
  return (
    <div className="insight-img" style={{ background: `linear-gradient(135deg, ${from}, ${to})` }}>
      <svg width="100%" height="100%" viewBox="0 0 400 180" fill="none" style={{ position: 'absolute', inset: 0 }}>
        <circle cx="80" cy="90" r="60" fill="rgba(232,130,12,.1)" />
        <circle cx="320" cy="90" r="80" fill="rgba(45,122,31,.08)" />
        <rect x="150" y="40" width="100" height="100" rx="20" fill="rgba(76,43,25,.06)" transform="rotate(15 200 90)" />
      </svg>
    </div>
  )
}

const categories = ['All', 'AI & DATA', 'DATA ENGINEERING', 'DIGITAL TRANSFORMATION', 'GOVERNMENT & PUBLIC SECTOR', 'MANAGED SERVICES', 'BFSI']

export default function Insights() {
  const [activeCategory, setActiveCategory] = useState('All')
  const filtered = activeCategory === 'All'
    ? insightsData
    : insightsData.filter(a => a.category === activeCategory)

  return (
    <>
      {/* Hero */}
      <section className="page-hero" style={{ paddingBottom: 64 }}>
        <div className="container">
          <div className="eyebrow" style={{ marginBottom: 14 }}>INSIGHTS</div>
          <h1 style={{ maxWidth: 720 }}>Perspectives on enterprise technology in India.</h1>
          <p style={{ maxWidth: 620, marginTop: 16, fontSize: 17 }}>
            Practical thinking on AI, data engineering, digital transformation and managed operations from the Krama Tech team.
          </p>
        </div>
      </section>

      {/* Filter tabs */}
      <div style={{ background: '#fff', borderBottom: '1px solid var(--line)', position: 'sticky', top: 88, zIndex: 50 }}>
        <div className="container">
          <div style={{ display: 'flex', gap: 4, overflowX: 'auto', padding: '14px 0', scrollbarWidth: 'none' }}>
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  padding: '8px 16px',
                  borderRadius: 8,
                  border: 'none',
                  background: activeCategory === cat ? 'var(--orange)' : 'transparent',
                  color: activeCategory === cat ? '#fff' : 'var(--muted)',
                  fontSize: 12,
                  fontWeight: 800,
                  letterSpacing: '.08em',
                  whiteSpace: 'nowrap',
                  cursor: 'pointer',
                  transition: 'all .15s',
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Articles */}
      <section className="section" style={{ background: 'var(--cream)' }}>
        <div className="container">
          <div className="insights-grid">
            {filtered.map((article, i) => (
              <motion.article
                className="insight-card"
                key={article.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * .07 }}
              >
                <div style={{ position: 'relative' }}>
                  <InsightBg index={i} />
                  <div className="insight-cat">{article.category}</div>
                </div>
                <div className="insight-body">
                  <h3>{article.title}</h3>
                  <p>{article.excerpt}</p>
                  <div className="insight-meta">
                    <span>{article.date}</span>
                    <span>·</span>
                    <span>{article.readTime}</span>
                  </div>
                  <div style={{ marginTop: 16 }}>
                    <span style={{ fontSize: 12, fontWeight: 800, color: 'var(--orange)', display: 'flex', alignItems: 'center', gap: 5 }}>
                      Read article <ArrowRight size={13} />
                    </span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-inner">
            <div>
              <div className="eyebrow light">STAY CURRENT</div>
              <h2>Get practical enterprise technology insights in your inbox.</h2>
              <p>No vendor marketing, no AI hype — just actionable perspectives on AI, data and digital operations in India.</p>
            </div>
            <NavLink to="/contact" className="btn primary" style={{ whiteSpace: 'nowrap', alignSelf: 'center' }}>
              Subscribe to Insights <ArrowRight size={17} />
            </NavLink>
          </div>
        </div>
      </section>
    </>
  )
}
