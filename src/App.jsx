import React from 'react'
import { ArrowRight, Bot, BrainCircuit, Cloud, DatabaseZap, Lightbulb, ShieldCheck, Workflow } from 'lucide-react'

const services = [
  { icon: BrainCircuit, title: 'AI Solutions', text: 'Custom AI models and intelligent systems that drive smarter decisions and better outcomes.' },
  { icon: Workflow, title: 'Automation', text: 'Streamline operations, reduce manual work, and boost productivity with intelligent automation.' },
  { icon: Cloud, title: 'Cloud & Platforms', text: 'Scalable cloud platforms and modern architecture built for performance and reliability.' },
  { icon: DatabaseZap, title: 'Data & Analytics', text: 'Turn data into insights with analytics, visualization, and predictive intelligence.' },
  { icon: Bot, title: 'Smart Applications', text: 'Next-gen applications designed for seamless experiences and business growth.' },
  { icon: Lightbulb, title: 'Innovation Lab', text: 'Exploring emerging technologies to build the solutions of tomorrow.' },
]

export default function App() {
  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="brand" href="#home" aria-label="KRAMA Tech Home">
          <img src="/assets/krama-logo-white.png" alt="KRAMA Tech" />
        </a>

        <nav className="nav">
          <a className="active" href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </nav>

        <a className="talk-btn" href="mailto:hello@kramatech.com">Let’s Talk</a>
      </header>

      <main id="home">
        <section className="hero">
          <div className="hero-copy">
            <div className="eyebrow">✣ Ancient Wisdom. Future Intelligence.</div>
            <h1>Intelligent systems for a smarter digital future.</h1>
            <p>
              KRAMA Tech builds AI-powered platforms, automation systems, and data-driven digital products that help businesses move faster with clarity and confidence.
            </p>
            <div className="hero-actions">
              <a className="primary-btn" href="#services">Explore Solutions <ArrowRight size={18} /></a>
              <a className="secondary-btn" href="#about">About KRAMA</a>
            </div>
          </div>

          <div className="hero-card">
            <img src="/assets/krama-logo-full.png" alt="KRAMA Tech full logo" />
          </div>
        </section>

        <section id="services" className="services-section">
          <div className="section-heading">
            <span>What we do</span>
            <h2>AI. Automation. Innovation.</h2>
          </div>

          <div className="service-grid">
            {services.map((item) => {
              const Icon = item.icon
              return (
                <article className="service-card" key={item.title}>
                  <Icon size={38} />
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  <ArrowRight className="card-arrow" size={18} />
                </article>
              )
            })}
          </div>
        </section>

        <section className="stats-row">
          <div><strong>AI-first</strong><span>Product thinking</span></div>
          <div><strong>Cloud-ready</strong><span>Scalable systems</span></div>
          <div><strong>Data-led</strong><span>Better decisions</span></div>
          <div><strong>Secure</strong><span>Enterprise mindset</span></div>
        </section>

        <section id="about" className="about-section">
          <div className="about-copy">
            <span>About KRAMA Tech</span>
            <h2>Built where wisdom meets engineering.</h2>
            <p>
              KRAMA Tech combines practical engineering, AI innovation, automation, and data intelligence to create systems that are useful, scalable, and future-ready.
            </p>
            <a className="primary-btn dark" href="#contact">Start a Project <ArrowRight size={18} /></a>
          </div>

          <div className="why-card">
            <span>Why choose KRAMA?</span>
            <div className="why-list">
              <div><ShieldCheck /><b>Secure & scalable</b><p>Production-ready systems designed for growth.</p></div>
              <div><BrainCircuit /><b>AI-first approach</b><p>Intelligence built into the heart of the solution.</p></div>
              <div><Workflow /><b>Business focused</b><p>Every build connects to real operational value.</p></div>
            </div>
          </div>
        </section>

        <section id="contact" className="contact-section">
          <img src="/assets/krama-favicon-black.png" alt="KRAMA icon" />
          <h2>Let’s build intelligent systems.</h2>
          <p>AI platforms, automation, data products, and digital experiences for businesses ready for the next stage.</p>
          <a className="primary-btn" href="mailto:hello@kramatech.com">hello@kramatech.com <ArrowRight size={18} /></a>
        </section>
      </main>

      <footer>© 2026 KRAMA Tech. Ancient Wisdom. Future Intelligence.</footer>
    </div>
  )
}
