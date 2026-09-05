import React from 'react'
import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle2, ChevronRight } from 'lucide-react'
import PageHero from '../components/PageHero'

export default function ServicePage({ data }) {
  const { title, eyebrow, description, image, capabilities, outcomes } = data
  return (
    <>
      <PageHero
        eyebrow={eyebrow}
        title={title}
        description={description}
        image={image}
        ctaText="Start a Conversation"
        ctaTo="/contact"
        secondaryText="View All Services"
        secondaryTo="/platform"
      />

      {/* Capabilities */}
      <section className="section caps-bg">
        <div className="container">
          <div className="section-head center">
            <div className="eyebrow">CAPABILITIES</div>
            <h2>What we deliver within {title}</h2>
          </div>
          <div className="caps-grid">
            {capabilities.map(([capTitle, capDesc], i) => (
              <motion.div
                className="cap-card"
                key={capTitle}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * .08 }}
              >
                <div className="eyebrow" style={{ marginBottom: 10 }}>0{i + 1}</div>
                <h3>{capTitle}</h3>
                <p>{capDesc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes */}
      {outcomes && (
        <section className="section outcomes-bg">
          <div className="container">
            <div className="section-head">
              <div>
                <div className="eyebrow">OUTCOMES</div>
                <h2>What clients achieve</h2>
              </div>
              <p>Real, measurable results from organisations that have deployed Krama Tech services in production environments.</p>
            </div>
            <div className="outcomes-list">
              {outcomes.map(outcome => (
                <div className="outcome-row" key={outcome}>
                  <CheckCircle2 size={18} />
                  <span>{outcome}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-inner">
            <div>
              <div className="eyebrow light">READY TO START?</div>
              <h2>Let's scope your {title} engagement.</h2>
              <p>We'll map the right capabilities to your business context and build a delivery plan that fits your constraints.</p>
            </div>
            <NavLink to="/contact" className="btn primary" style={{ whiteSpace: 'nowrap', alignSelf: 'center' }}>
              Talk to an Expert <ArrowRight size={17} />
            </NavLink>
          </div>
        </div>
      </section>
    </>
  )
}
