import React from 'react';
import { ArrowRight, BrainCircuit, Workflow, DatabaseZap, Cloud, Mail, Phone } from 'lucide-react';

const services = [
  { icon: BrainCircuit, title: 'AI Solutions', text: 'Practical AI systems for business workflows, insights, and smarter decisions.' },
  { icon: Workflow, title: 'Automation', text: 'Reduce manual work with intelligent process automation and integrations.' },
  { icon: DatabaseZap, title: 'Data Intelligence', text: 'Turn data into useful dashboards, analytics, and decision-ready insights.' },
  { icon: Cloud, title: 'Digital Platforms', text: 'Modern websites, cloud apps, and scalable digital products for growth.' },
];

const clients = [
  { name: 'SiRA', logo: '/assets/client-sira.png' },
  { name: 'Fruges', logo: '/assets/client-fruges.png' },
  { name: 'Ventley Tech', logo: '/assets/client-ventley.png' },
  { name: 'Quanteon', logo: '/assets/client-quanteon.png' },
  { name: 'Alphasmart Solutions', logo: '/assets/client-alphasmart.png' },
  { name: 'Technodrive Software Solutions', logo: '/assets/client-technodrive.png' },
];

const clientsStyles = `
.clientsSection {
  padding: 76px 0 82px;
  text-align: center;
  border-top: 1px solid rgba(93, 61, 34, 0.12);
  border-bottom: 1px solid rgba(93, 61, 34, 0.12);
}

.clientsSection .sectionTag {
  display: inline-block;
  margin-bottom: 14px;
}

.clientsSection h2 {
  margin: 0 0 38px;
  color: #3b2414;
  font-size: clamp(28px, 3vw, 42px);
  line-height: 1.1;
  font-weight: 900;
  letter-spacing: -0.04em;
}

.clientGrid {
  display: grid;
  grid-template-columns: repeat(6, minmax(0, 1fr));
  gap: 18px;
  align-items: center;
}

.clientItem {
  height: 96px;
  background: rgba(255, 252, 246, 0.86);
  border: 1px solid #e6d7bd;
  border-radius: 18px;
  padding: 14px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 14px 34px rgba(61, 39, 24, 0.06);
  transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
}

.clientItem:hover {
  transform: translateY(-5px);
  border-color: #d8b879;
  box-shadow: 0 18px 42px rgba(61, 39, 24, 0.10);
}

.clientItem img {
  width: 100%;
  max-width: 150px;
  max-height: 58px;
  object-fit: contain;
  display: block;
}

@media (max-width: 1100px) {
  .clientGrid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

@media (max-width: 680px) {
  .clientsSection {
    padding: 52px 0 58px;
  }

  .clientGrid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 14px;
  }

  .clientItem {
    height: 86px;
    padding: 12px;
  }
}
`;

export default function App() {
  return (
    <main className="site">
      <style>{clientsStyles}</style>

      <header className="header">
        <a className="brand" href="#home"><img src="/assets/krama-logo-header.png" alt="KramaTek" /></a>
        <nav className="nav"><a href="#home">Home</a><a href="#about">About</a><a href="#services">Services</a><a href="#contact">Contact</a></nav>
        <a className="talk" href="#contact">Let’s Talk</a>
      </header>

      <section id="home" className="hero">
        <div className="heroText">
          <div className="eyebrow">✣ ANCIENT WISDOM. FUTURE INTELLIGENCE.</div>
          <h1>Intelligent systems for a smarter digital future.</h1>
          <p>KramaTek builds AI-powered platforms, automation systems, and data-driven digital products that help businesses move faster with clarity and confidence.</p>
          <div className="actions"><a className="primary" href="#services">Explore Solutions <ArrowRight size={18}/></a><a className="secondary" href="#about">About KramaTek</a></div>
        </div>
        <div className="heroCard"><img src="/assets/krama-logo-full.png" alt="KramaTek logo" /></div>
      </section>

      <section className="clientsSection" id="clients">
        <span className="sectionTag">ORGANIZATIONS WE SUPPORT</span>
        <h2>Serving Government & Enterprise</h2>

        <div className="clientGrid">
          {clients.map((client) => (
            <div className="clientItem" key={client.name}>
              <img src={client.logo} alt={client.name} />
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="section about">
        <div><span className="sectionTag">ABOUT</span><h2>Technology with clarity, purpose, and intelligence.</h2></div>
        <p>KramaTek is focused on building simple, useful, and scalable technology solutions for real-world business problems. We combine AI, automation, data, and digital engineering to create systems that are easy to use and ready to grow.</p>
      </section>

      <section id="services" className="section services">
        <span className="sectionTag">SERVICES</span>
        <h2>What we build</h2>
        <div className="serviceGrid">{services.map((s)=>{const Icon=s.icon;return <article className="card" key={s.title}><Icon className="cardIcon" size={34}/><h3>{s.title}</h3><p>{s.text}</p></article>})}</div>
      </section>

      <section id="contact" className="section contact">
        <div className="contactBox">
          <img src="/assets/krama-favicon-black.png" alt="KramaTek icon" />
          <h2>Let’s build something intelligent.</h2>
          <p>Reach out for AI platforms, automation, data products, and digital application development.</p>
          <div className="contactLinks"><a href="mailto:info@kramatek.com"><Mail size={18}/> info@kramatek.com</a><a href="tel:+919110767628"><Phone size={18}/> +91 (911) 076-7628</a></div>
        </div>
      </section>

      <footer className="footer">© 2026 KramaTek. Ancient Wisdom. Future Intelligence.</footer>
    </main>
  );
}
