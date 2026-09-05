import React from 'react'
import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import PageHero from '../components/PageHero'
import { services } from '../data/siteData'

export default function IndustryPage({ data }) {
  const { title, eyebrow, description, image, useCases } = data

  // Show 3 relevant services
  const featuredServices = Object.entries(services).slice(0, 3)

  return (
    <>
      <PageHero
        eyebrow={eyebrow}
        title={title}
        description={description}
        image={image}
        ctaText="Discuss Your Challenges"
        ctaTo="/contact"
        secondaryText="View All Services"
        secondaryTo="/platform"
      />

      {/* Use Cases */}
      <section className="section caps-bg">
        <div className="container">
          <div className="section-head">
            <div>
              <div className="eyebrow">USE CASES</div>
              <h2>Where we deliver impact in {title}</h2>
            </div>
            <p>We focus on the specific operational, regulatory and data challenges that define this sector — not generic technology deployments.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 14, maxWidth: 900 }}>
            {useCases.map((uc, i) => (
              <motion.div
                key={uc}
                className="outcome-row"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * .07 }}
                style={{ borderRadius: 14 }}
              >
                <CheckCircle2 size={17} />
                <span style={{ fontWeight: 600 }}>{uc}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Relevant Services */}
      <section className="section" style={{ background: '#fff' }}>
        <div className="container">
          <div className="section-head center">
            <div className="eyebrow">RELEVANT SERVICES</div>
            <h2>Technology capabilities we bring to this sector</h2>
          </div>
          <div className="service-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
            {featuredServices.map(([slug, v]) => (
              <motion.article
                className="service-card"
                key={slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <NavLink className="service-visual" to={`/services/${slug}`}>
                  <img src={v.image} alt={v.title} />
                </NavLink>
                <div className="service-body" style={{ paddingBottom: 68 }}>
                  <div style={{ position: 'absolute', right: 28, top: 28, fontSize: 10, fontWeight: 800, color: '#b08060' }}>SERVICE</div>
                  <h3 style={{ marginTop: 18 }}>{v.title}</h3>
                  <p>{v.description}</p>
                  <NavLink className="service-more" to={`/services/${slug}`}>
                    Learn more <ArrowRight size={14} />
                  </NavLink>
                </div>
              </motion.article>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 32 }}>
            <NavLink to="/platform" className="btn outline">View All Services <ArrowRight size={15} /></NavLink>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-inner">
            <div>
              <div className="eyebrow light">SECTOR SPECIALISTS</div>
              <h2>Let's talk about your specific {title} challenges.</h2>
              <p>We work best when we understand the real operating constraints, regulatory context and stakeholder landscape before proposing anything.</p>
            </div>
            <NavLink to="/contact" className="btn primary" style={{ whiteSpace: 'nowrap', alignSelf: 'center' }}>
              Start a Conversation <ArrowRight size={17} />
            </NavLink>
          </div>
        </div>
      </section>
    </>
  )
}
