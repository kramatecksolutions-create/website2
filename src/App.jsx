import React from 'react';
import { ArrowRight, BrainCircuit, Workflow, DatabaseZap, Cloud, Mail, Phone } from 'lucide-react';

const services = [
  { icon: BrainCircuit, title: 'AI Solutions', text: 'Practical AI systems for business workflows, insights, and smarter decisions.' },
  { icon: Workflow, title: 'Automation', text: 'Reduce manual work with intelligent process automation and integrations.' },
  { icon: DatabaseZap, title: 'Data Intelligence', text: 'Turn data into useful dashboards, analytics, and decision-ready insights.' },
  { icon: Cloud, title: 'Digital Platforms', text: 'Modern websites, cloud apps, and scalable digital products for growth.' },
];

export default function App() {
  return (
    <main className="site">
      <style>{`
.clientsSection{
  padding:80px 0;
  text-align:center;
  overflow:hidden;
}
.clientMarquee{
  position:relative;
  width:100%;
  overflow:hidden;
  margin-top:40px;
  padding:4px 0 10px;
}
.clientMarquee::before,
.clientMarquee::after{
  content:"";
  position:absolute;
  top:0;
  width:120px;
  height:100%;
  z-index:2;
  pointer-events:none;
}
.clientMarquee::before{
  left:0;
  background:linear-gradient(90deg, var(--sand) 0%, rgba(255,255,255,0) 100%);
}
.clientMarquee::after{
  right:0;
  background:linear-gradient(270deg, var(--sand) 0%, rgba(255,255,255,0) 100%);
}
.clientTrack{
  display:flex;
  gap:22px;
  width:max-content;
  animation:clientScroll 34s linear infinite;
}
.clientMarquee:hover .clientTrack{
  animation-play-state:paused;
}
.clientItem{
  width:260px;
  height:104px;
  border:1px solid rgba(93,61,34,.08);
  border-radius:18px;
  background:rgba(255,252,246,.9);
  display:flex;
  align-items:center;
  justify-content:center;
  box-shadow:0 8px 22px rgba(61,39,24,.05);
  flex:0 0 auto;
}
.clientItem img{
  width:82%;
  max-height:72px;
  object-fit:contain;
}
@keyframes clientScroll{
  from{transform:translateX(0);}
  to{transform:translateX(calc(-50% - 11px));}
}
@media(max-width:700px){
  .clientItem{
    width:220px;
    height:92px;
  }
  .clientItem img{
    width:84%;
    max-height:62px;
  }
  .clientMarquee::before,
  .clientMarquee::after{
    width:55px;
  }
}
`}</style>

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
{["client-sira.png","client-fruges.png","client-ventley.png","client-quanteon.png","client-alphasmart.png","client-technodrive.png"].map((logo)=>(
<div className="clientItem" key={logo}><img src={`/assets/${logo}`} alt={logo}/></div>
))}
</div></section>

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
