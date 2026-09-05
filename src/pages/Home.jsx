import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { NavLink } from 'react-router-dom'
import {
  ArrowRight, ArrowUpRight, BrainCircuit, Database,
  ChartNoAxesCombined, CloudCog, UsersRound, Settings2,
  Landmark, RadioTower, HeartPulse, Building2, CheckCircle2,
  Shield, Globe, Zap
} from 'lucide-react'
import { services, clients, industries } from '../data/siteData'
import { platformImageAsset } from '../data/siteData'

const serviceIcons = {
  'ai-solutions': BrainCircuit,
  'data-engineering': Database,
  'analytics-intelligence': ChartNoAxesCombined,
  'digital-transformation': CloudCog,
  'staff-augmentation': UsersRound,
  'managed-services': Settings2,
}

const heroSlides = [
  {
    eyebrow: 'AI & INTELLIGENCE',
    title: 'Enterprise AI,',
    accent: 'engineered for impact.',
    desc: 'Move from isolated experiments to secure, integrated AI that changes how your organisation thinks and operates.',
    key: 'ai-solutions',
  },
  {
    eyebrow: 'DATA FOUNDATION',
    title: 'Trusted data,',
    accent: 'at enterprise scale.',
    desc: 'Build the data foundations that power analytics, AI, automation and modern digital operations.',
    key: 'data-engineering',
  },
  {
    eyebrow: 'DIGITAL ENGINEERING',
    title: 'Modernize without',
    accent: 'losing momentum.',
    desc: 'Cloud, application and workflow modernization that protects what works while building what\'s next.',
    key: 'digital-transformation',
  },
  {
    eyebrow: 'INTELLIGENT OPERATIONS',
    title: 'Build intelligence',
    accent: 'into the business.',
    desc: 'Connect knowledge, AI and workflow automation to the teams and systems where decisions happen.',
    key: 'analytics-intelligence',
  },
]

const industryList = [
  [Landmark, 'Government & Public Sector', '/industries/government', 'Digital services and decision intelligence for complex public-sector environments.'],
  [RadioTower, 'Telecom & Communications', '/industries/telecom', 'Network intelligence, churn prediction and automation for communications organisations.'],
  [HeartPulse, 'Healthcare', '/industries/healthcare', 'Connected workflows and secure AI built around clinical and operational needs.'],
  [Building2, 'Financial Services (BFSI)', '/industries/financial-services', 'Governed AI and decision intelligence for high-trust financial environments.'],
  [Building2, 'Enterprise', '/industries/enterprise', 'AI, data and application engineering for organisations modernising how they operate.'],
]

const heroBadges = [
  { icon: Shield, text: 'ISO 27001 Certified' },
  { icon: Globe, text: '22+ Indian Languages' },
  { icon: Zap, text: '99.9% Uptime SLA' },
  { icon: CheckCircle2, text: 'DPDP Act Compliant' },
]

export default function Home() {
  const [slide, setSlide] = useState(0)
  useEffect(() => {
    const id = setInterval(() => setSlide(v => (v + 1) % heroSlides.length), 5800)
    return () => clearInterval(id)
  }, [])
  const s = heroSlides[slide]

  return (
    <>
      {/* ─── Hero ─── */}
      <section className="hero">
        <div className="hero-bg">
          <div className="hero-grid" />
          <AnimatePresence mode="wait">
            <motion.img
              key={slide}
              className="hero-svg-bg"
              src={services[s.key].image}
              alt=""
              initial={{ opacity: 0, scale: 1.04 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: .9 }}
            />
          </AnimatePresence>
        </div>
        <div className="container hero-content">
          <div className="hero-layout">
            <div className="hero-copy">
              <AnimatePresence mode="wait">
                <motion.div
                  key={slide}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: .55 }}
                >
                  <div className="hero-eyebrow">{s.eyebrow}</div>
                  <h1>{s.title}<br /><em>{s.accent}</em></h1>
                  <p className="hero-desc">{s.desc}</p>
                </motion.div>
              </AnimatePresence>
              <div className="hero-actions">
                <NavLink to="/platform" className="btn primary">
                  Explore Solutions <ArrowRight size={17} />
                </NavLink>
                <NavLink to="/contact" className="btn secondary">
                  Talk to an Expert
                </NavLink>
              </div>

              {/* Slide dots */}
              <div className="hero-dots" style={{ display: 'flex', gap: 8, marginTop: 26 }}>
                {heroSlides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setSlide(i)}
                    style={{
                      width: i === slide ? 36 : 26,
                      height: 5,
                      borderRadius: 3,
                      background: i === slide ? '#efb86f' : 'rgba(255,255,255,.3)',
                      border: 'none',
                      cursor: 'pointer',
                      transition: 'all .3s',
                    }}
                    aria-label={`Slide ${i + 1}`}
                  />
                ))}
              </div>

              {/* Stats */}
              <div className="hero-stats" style={{ marginTop: 34 }}>
                <div>
                  <div className="hero-stat-num">12<span>+</span></div>
                  <div className="hero-stat-label">Enterprise Clients</div>
                </div>
                <div>
                  <div className="hero-stat-num">22<span>+</span></div>
                  <div className="hero-stat-label">Indian Languages</div>
                </div>
                <div>
                  <div className="hero-stat-num">99.9<span>%</span></div>
                  <div className="hero-stat-label">Uptime SLA</div>
                </div>
                <div>
                  <div className="hero-stat-num">72<span>hr</span></div>
                  <div className="hero-stat-label">Expert Deployment</div>
                </div>
              </div>
            </div>

            {/* Right side cards — hero visual */}
            <div className="hero-visual">
              {heroSlides.map((hs, i) => {
                const Icon = serviceIcons[hs.key]
                const svc = services[hs.key]
                return (
                  <NavLink
                    key={i}
                    to={`/services/${hs.key}`}
                    className={`hero-card ${i === slide ? 'active' : ''}`}
                    onClick={() => setSlide(i)}
                  >
                    <div className="hero-card-top">
                      <div className="hero-card-icon"><Icon size={19} /></div>
                      <div className="hero-card-title">{svc.title}</div>
                    </div>
                    <div className="hero-card-desc">{svc.description.slice(0, 80)}…</div>
                  </NavLink>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Trust Badges ─── */}
      <div style={{ background: '#1e0f07', borderBottom: '1px solid rgba(255,255,255,.06)', padding: '14px 0' }}>
        <div className="container">
          <div style={{ display: 'flex', gap: 32, alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap' }}>
            {heroBadges.map(({ icon: Icon, text }) => (
              <div key={text} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 12, color: '#9a8070', fontWeight: 700 }}>
                <Icon size={14} style={{ color: '#e8820c' }} />
                {text}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ─── Clients Ticker ─── */}
      <section className="clients-zone">
        <div className="clients-label">ORGANISATIONS WE SUPPORT</div>
        <div className="clients-track">
          {[...clients, ...clients].map((c, i) => (
            <div className="client-chip" key={i}>
              <img src={c.image} alt={c.name} />
            </div>
          ))}
        </div>
      </section>

      {/* ─── Services ─── */}
      <section className="section services-bg">
        <div className="container">
          <div className="section-head">
            <div>
              <div className="eyebrow">WHAT WE OFFER</div>
              <h2>Enterprise services from strategy to production.</h2>
            </div>
            <p>One technology partner across AI, data, applications, cloud and managed operations. We don't hand off — we stay in until it's working.</p>
          </div>
          <div className="service-grid">
            {Object.entries(services).map(([slug, v], i) => {
              const Icon = serviceIcons[slug]
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
                      Explore service <ArrowUpRight size={14} />
                    </NavLink>
                  </div>
                </motion.article>
              )
            })}
          </div>
        </div>
      </section>

      {/* ─── Industries ─── */}
      <section className="section industries-bg">
        <div className="container">
          <div className="section-head">
            <div>
              <div className="eyebrow">INDUSTRIES</div>
              <h2>Technology shaped around your operating environment.</h2>
            </div>
            <p>Different industries demand different combinations of data, AI, integration and operational resilience. We build for the specifics, not the generic.</p>
          </div>
          <div className="industries-grid">
            {industryList.map(([Icon, title, path, desc], i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * .06 }}
              >
                <NavLink className="industry-card" to={path}>
                  <Icon size={26} />
                  <span className="industry-num">0{i + 1}</span>
                  <h3>{title}</h3>
                  <p>{desc}</p>
                  <b className="industry-more">Explore industry →</b>
                </NavLink>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Why Krama Tech split ─── */}
      <section className="section split-bg">
        <div className="container">
          <div className="split-grid">
            <div className="split-visual">
              <img src={platformImageAsset} alt="Krama Tech Platform" />
            </div>
            <div className="split-text">
              <div className="eyebrow">WHY KRAMA TECH</div>
              <h2>Enterprise technology is only valuable if it actually works.</h2>
              <p>We combine deep engineering rigour with practical delivery discipline. Our teams have shipped AI, data and digital systems for some of India's largest and most complex organisations.</p>
              <div className="split-checks">
                {[
                  'India-first — multilingual AI, sovereign data, local compliance',
                  'End-to-end ownership from strategy through production operations',
                  'Fixed-team continuity, not rotating staff benches',
                  'ISO 27001, SOC 2, CERT-In, DPDP Act aligned delivery',
                ].map(text => (
                  <div className="split-check" key={text}>
                    <CheckCircle2 size={17} />
                    <span>{text}</span>
                  </div>
                ))}
              </div>
              <NavLink to="/why-kramatek" className="btn primary">
                Our Approach <ArrowRight size={16} />
              </NavLink>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Stats Band ─── */}
      <section className="stats-band">
        <div className="container">
          <div className="stats-grid">
            {[
              { num: '12', suf: '+', label: 'Enterprise Clients\nacross 5 industries' },
              { num: '99.9', suf: '%', label: 'Uptime SLA\non managed platforms' },
              { num: '22', suf: '+', label: 'Indian Languages\nsupported in AI systems' },
              { num: '72', suf: 'hr', label: 'Expert Deployment\nfor augmentation roles' },
            ].map(({ num, suf, label }) => (
              <motion.div
                className="stat-box"
                key={label}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                <div className="stat-num">{num}<span>{suf}</span></div>
                <div className="stat-label" style={{ whiteSpace: 'pre-line' }}>{label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-inner">
            <div>
              <div className="eyebrow light">LET'S BUILD WHAT'S NEXT</div>
              <h2>Turn a complex technology problem into a production capability.</h2>
              <p>Bring us the business challenge. We'll help shape the architecture, delivery path and operating model.</p>
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
