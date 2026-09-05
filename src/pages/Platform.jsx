import React from 'react'
import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, BrainCircuit, Database, ChartNoAxesCombined, CloudCog, UsersRound, Settings2 } from 'lucide-react'
import { services } from '../data/siteData'
import { platformImageAsset } from '../data/siteData'

const icons = {
  'ai-solutions': BrainCircuit,
  'data-engineering': Database,
  'analytics-intelligence': ChartNoAxesCombined,
  'digital-transformation': CloudCog,
  'staff-augmentation': UsersRound,
  'managed-services': Settings2,
}

export default function Platform() {
  return (
    <>
      {/* Platform Hero */}
      <section className="platform-section">
        <div className="container">
          <div className="platform-grid">
            <div className="platform-text">
              <div className="eyebrow light">THE KRAMA TECH PLATFORM</div>
              <h2 style={{ color: '#fff', fontSize: 'clamp(48px, 5vw, 76px)', letterSpacing: '-.06em', margin: '16px 0' }}>
                One platform.<br />Every capability.
              </h2>
              <p>AI, data, cloud, applications and managed operations — delivered as a single, integrated technology capability rather than a collection of disconnected engagements.</p>
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 28 }}>
                <NavLink to="/contact" className="btn primary">Start a Conversation <ArrowRight size={16} /></NavLink>
                <NavLink to="/why-kramatek" className="btn secondary">Our Approach</NavLink>
              </div>
              <div className="platform-modules">
                {[
                  ['Strategy & Architecture', 'We design before we build.'],
                  ['Engineering & Delivery', 'Owned teams, not contractors.'],
                  ['Production & Operations', 'SLA-backed managed services.'],
                  ['Continuous Improvement', 'Evaluation and iteration loops.'],
                ].map(([title, desc]) => (
                  <div className="platform-module" key={title}>
                    <h4>{title}</h4>
                    <p>{desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="platform-visual">
              <img src={platformImageAsset} alt="Krama Tech Platform" />
            </div>
          </div>
        </div>
      </section>

      {/* All Services */}
      <section className="section services-bg">
        <div className="container">
          <div className="section-head center">
            <div className="eyebrow">ALL SERVICES</div>
            <h2>Every capability we bring to the table</h2>
            <p>Click any service to explore the specific capabilities, outcomes and engagement model.</p>
          </div>
          <div className="service-grid">
            {Object.entries(services).map(([slug, v], i) => {
              const Icon = icons[slug]
              return (
                <motion.article
                  className="service-card"
                  key={slug}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * .07 }}
                >
                  <NavLink className="service-visual" to={`/services/${slug}`}>
                    <img src={v.image} alt={v.title} />
                  </NavLink>
                  <div className="service-body">
                    <div className="service-icon"><Icon size={26} /></div>
                    <span className="service-num">0{i + 1}</span>
                    <h3>{v.title}</h3>
                    <p>{v.description}</p>
                    <NavLink className="service-more" to={`/services/${slug}`}>
                      Explore service <ArrowRight size={14} />
                    </NavLink>
                  </div>
                </motion.article>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-inner">
            <div>
              <div className="eyebrow light">READY TO START?</div>
              <h2>Let's scope the right combination of capabilities for your organisation.</h2>
              <p>We'll assess your context, priorities and constraints before recommending any engagement structure.</p>
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
