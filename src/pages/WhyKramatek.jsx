import React from 'react'
import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle2, Shield, Globe, Zap, Users, BarChart3, Lock } from 'lucide-react'
import { platformImageAsset } from '../data/siteData'

const reasons = [
  {
    n: '01',
    icon: Globe,
    title: 'India-First by Design',
    desc: 'We build AI and data systems that work in India\'s linguistic, regulatory and operational reality. 22+ Indian languages, DPDP Act compliance, sovereign data architecture — built in from day one, not bolted on.',
  },
  {
    n: '02',
    icon: Shield,
    title: 'Enterprise-Grade Security',
    desc: 'ISO 27001 certified, SOC 2 Type II compliant, CERT-In empanelled. Our delivery processes, infrastructure choices and data handling are built around the security requirements of regulated Indian enterprises.',
  },
  {
    n: '03',
    icon: Users,
    title: 'Owned Teams, Not Benches',
    desc: 'You work with the same people throughout your engagement. No rotation, no handoffs to junior staff after sign-on. Our senior engineers and architects stay with you from scoping through production.',
  },
  {
    n: '04',
    icon: Zap,
    title: 'End-to-End Accountability',
    desc: 'We own the outcome, not just the deliverable. From strategy through architecture, engineering, deployment and ongoing operations — a single accountable partner with SLA-backed commitments.',
  },
  {
    n: '05',
    icon: BarChart3,
    title: 'Measurable Outcomes, Not Activity',
    desc: 'Every engagement starts with a business outcome definition. We define success metrics before we write a line of code, and we track them throughout delivery and in production operations.',
  },
  {
    n: '06',
    icon: Lock,
    title: 'Compliant by Default',
    desc: 'DPDP Act, RBI IT Framework, SEBI guidelines, NHA standards — we embed the relevant regulatory requirements into architecture and delivery, not as an afterthought audit at the end.',
  },
]

const differentiators = [
  ['Consulting firms', 'Strategy, limited engineering', 'Strategy + full engineering + operations'],
  ['System integrators', 'Implementation, generic talent', 'Owned teams with deep specialisation'],
  ['Product vendors', 'Platform, no customisation', 'Platform-agnostic, outcome-focused'],
  ['Offshore factories', 'Volume, limited accountability', 'Senior talent, SLA-backed delivery'],
]

export default function WhyKramatek() {
  return (
    <>
      {/* Hero */}
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-grid">
            <div>
              <div className="eyebrow">WHY KRAMA TECH</div>
              <h1>Different by design.</h1>
              <p style={{ marginTop: 16, fontSize: 17 }}>
                We're not a consulting firm, a system integrator, or an offshore factory. We're a specialist technology partner — built specifically for the complexity of enterprise AI, data and digital transformation in India.
              </p>
              <div className="page-hero-actions">
                <NavLink to="/contact" className="btn dark-btn">Start a Conversation <ArrowRight size={16} /></NavLink>
                <NavLink to="/platform" className="btn outline">View Services</NavLink>
              </div>
            </div>
            <div className="page-hero-visual">
              <img src={platformImageAsset} alt="Krama Tech" />
            </div>
          </div>
        </div>
      </section>

      {/* Reasons */}
      <section className="section caps-bg">
        <div className="container">
          <div className="section-head center">
            <div className="eyebrow">THE DIFFERENCE</div>
            <h2>Six things that change the outcome</h2>
          </div>
          <div className="reason-grid">
            {reasons.map((r, i) => (
              <motion.div
                className="reason-card"
                key={r.n}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * .08 }}
              >
                <div className="number">{r.n}</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
                  <r.icon size={20} style={{ color: 'var(--orange)' }} />
                  <h3 style={{ margin: 0 }}>{r.title}</h3>
                </div>
                <p>{r.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="section" style={{ background: '#fff' }}>
        <div className="container">
          <div className="section-head center">
            <div className="eyebrow">COMPARISON</div>
            <h2>How we're different from the alternatives</h2>
          </div>
          <div style={{ maxWidth: 900, margin: '0 auto', overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ background: 'var(--cream)' }}>
                  <th style={{ padding: '14px 20px', textAlign: 'left', fontSize: 11, letterSpacing: '.14em', color: 'var(--muted)', fontWeight: 800, borderRadius: '10px 0 0 10px' }}>ALTERNATIVE</th>
                  <th style={{ padding: '14px 20px', textAlign: 'left', fontSize: 11, letterSpacing: '.14em', color: 'var(--muted)', fontWeight: 800 }}>WHAT THEY OFFER</th>
                  <th style={{ padding: '14px 20px', textAlign: 'left', fontSize: 11, letterSpacing: '.14em', color: 'var(--orange)', fontWeight: 800, borderRadius: '0 10px 10px 0', background: 'rgba(232,130,12,.08)' }}>KRAMA TECH</th>
                </tr>
              </thead>
              <tbody>
                {differentiators.map(([alt, offer, us]) => (
                  <tr key={alt} style={{ borderBottom: '1px solid var(--line)' }}>
                    <td style={{ padding: '16px 20px', fontSize: 14, fontWeight: 700, color: 'var(--ink)' }}>{alt}</td>
                    <td style={{ padding: '16px 20px', fontSize: 13.5, color: 'var(--muted)' }}>{offer}</td>
                    <td style={{ padding: '16px 20px', fontSize: 13.5, color: 'var(--ink)', background: 'rgba(232,130,12,.04)', fontWeight: 600 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                        <CheckCircle2 size={14} style={{ color: 'var(--green)', flexShrink: 0 }} />
                        {us}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="section" style={{ background: 'var(--dark)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 40 }}>
            <div className="eyebrow light">COMPLIANCE & CERTIFICATIONS</div>
            <h2 style={{ color: '#fff', marginTop: 10 }}>Built to the highest enterprise standards</h2>
          </div>
          <div style={{ display: 'flex', gap: 20, justifyContent: 'center', flexWrap: 'wrap' }}>
            {['ISO 27001', 'SOC 2 Type II', 'CERT-In', 'DPDP Act', 'SEBI IT Framework', 'NHA Standards'].map(cert => (
              <div key={cert} style={{
                padding: '16px 24px', border: '1px solid rgba(255,255,255,.12)', borderRadius: 12,
                color: '#c9b4a4', fontSize: 13, fontWeight: 800, letterSpacing: '.06em',
              }}>
                {cert}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-inner">
            <div>
              <div className="eyebrow light">LET'S TALK</div>
              <h2>See the difference in how we work.</h2>
              <p>Start with a 45-minute discovery call. No pitch decks, no generic demos — just a direct conversation about your technology challenges.</p>
            </div>
            <NavLink to="/contact" className="btn primary" style={{ whiteSpace: 'nowrap', alignSelf: 'center' }}>
              Book a Discovery Call <ArrowRight size={17} />
            </NavLink>
          </div>
        </div>
      </section>
    </>
  )
}
