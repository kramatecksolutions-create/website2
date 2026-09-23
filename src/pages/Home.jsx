
import React,{useEffect,useState} from 'react'
import {motion,AnimatePresence} from 'framer-motion'
import {ArrowRight,ArrowUpRight,BrainCircuit,Database,ChartNoAxesCombined,CloudCog,UsersRound,Settings2,Landmark,RadioTower,HeartPulse,Building2,Code2,ShieldCheck,Activity,RefreshCw} from 'lucide-react'
import {heroStories,services,clients,industries,insights} from '../data/siteData'
const icons={'ai-solutions':BrainCircuit,'data-engineering':Database,'analytics-intelligence':ChartNoAxesCombined,'digital-transformation':CloudCog,'staff-augmentation':UsersRound,'managed-services':Settings2}
const industryIcons={government:Landmark,telecom:RadioTower,healthcare:HeartPulse,'financial-services':Building2,enterprise:Building2}
export default function Home(){const [slide,setSlide]=useState(0);useEffect(()=>{const id=setInterval(()=>setSlide(v=>(v+1)%heroStories.length),5600);return()=>clearInterval(id)},[]);const s=heroStories[slide];return <>
<section className="hero"><AnimatePresence mode="wait"><motion.img key={slide} className="hero-image" src={s.image} alt="" initial={{opacity:0,scale:1.02}} animate={{opacity:1,scale:1}} exit={{opacity:0}} transition={{duration:.8}}/></AnimatePresence><div className="hero-overlay"/><div className="container hero-content"><div className="hero-copy"><div className="hero-kicker">{s.eyebrow}</div><AnimatePresence mode="wait"><motion.div key={slide} initial={{opacity:0,y:14}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-8}}><h1>{s.title}<br/><em>{s.accent}</em></h1><p>{s.text}</p></motion.div></AnimatePresence><div className="hero-actions"><a className="btn primary" href="/platform">Explore Solutions <ArrowRight size={17}/></a><a className="btn secondary" href="/contact">Talk to an Expert</a></div><div className="hero-dots">{heroStories.map((_,i)=><button key={i} className={slide===i?'active':''} onClick={()=>setSlide(i)} aria-label={`Slide ${i+1}`}/>)}</div></div></div></section>
<section className="client-zone"><div className="client-title">ORGANIZATIONS WE SUPPORT</div><div className="marquee"><div className="marquee-track">{[...clients,...clients].map((c,i)=><div className="client-card" key={i}><img src={c.image} alt={c.name}/></div>)}</div></div></section>
<section className="section services-section"><div className="container"><div className="section-heading centered"><div className="eyebrow">WHAT WE OFFER</div><h2>Enterprise services from strategy to production.</h2><p>One technology partner across AI, data, applications, cloud and operations.</p></div><div className="service-grid">{Object.entries(services).map(([slug,v],i)=>{const Icon=icons[slug];return <motion.article className="service-card" key={slug} initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}}><a className="service-visual" href={`/services/${slug}`}><img src={v.cardImage} alt={`${v.title} visual`}/></a><div className="service-body"><div className="service-icon"><Icon size={29}/></div><span className="service-no">0{i+1}</span><h3>{v.title}</h3><p>{v.description}</p><a className="service-link" href={`/services/${slug}`}>Explore service <ArrowUpRight size={15}/></a></div></motion.article>})}</div></div></section>
<section className="section delivery-section">
  <div className="container">
    <div className="delivery-heading">
      <div>
        <div className="eyebrow">HOW WE DELIVER &amp; OPERATE</div>
        <h2>From build to run — engineering across the lifecycle.</h2>
      </div>
      <p>KramaTek brings Development, Quality Engineering and Operations together so solutions are built well, validated continuously and operated with confidence.</p>
    </div>

    <div className="delivery-grid">
      <article className="delivery-card">
        <div className="delivery-card-top"><span className="delivery-number">01</span><div className="delivery-icon"><Code2 size={27}/></div></div>
        <div className="delivery-label">DEVELOPMENT</div>
        <h3>Build with purpose.</h3>
        <p>Design and engineer modern applications, platforms, AI and data solutions around real business outcomes.</p>
        <ul><li>Application &amp; Platform Engineering</li><li>AI &amp; Data Engineering</li><li>Cloud &amp; Integration Development</li></ul>
        <div className="delivery-flow"><span>DESIGN</span><b>→</b><span>BUILD</span><b>→</b><span>INTEGRATE</span></div>
      </article>

      <article className="delivery-card featured">
        <div className="delivery-card-top"><span className="delivery-number">02</span><div className="delivery-icon"><ShieldCheck size={27}/></div></div>
        <div className="delivery-label">QUALITY ENGINEERING</div>
        <h3>Engineer for quality.</h3>
        <p>Embed quality throughout delivery with automation, performance validation and engineering-led assurance.</p>
        <ul><li>Test Automation &amp; API Validation</li><li>Performance &amp; Reliability Engineering</li><li>AI-assisted Quality Engineering</li></ul>
        <div className="delivery-flow"><span>VALIDATE</span><b>→</b><span>AUTOMATE</span><b>→</b><span>ASSURE</span></div>
      </article>

      <article className="delivery-card">
        <div className="delivery-card-top"><span className="delivery-number">03</span><div className="delivery-icon"><Activity size={27}/></div></div>
        <div className="delivery-label">OPERATIONS</div>
        <h3>Run with confidence.</h3>
        <p>Keep production services dependable through monitoring, support, release discipline and operational intelligence.</p>
        <ul><li>Application &amp; Platform Support</li><li>Monitoring &amp; Observability</li><li>Incident, Release &amp; Service Operations</li></ul>
        <div className="delivery-flow"><span>DEPLOY</span><b>→</b><span>MONITOR</span><b>→</b><span>SUPPORT</span></div>
      </article>
    </div>

    <div className="delivery-loop">
      <div className="delivery-loop-icon"><RefreshCw size={22}/></div>
      <div><strong>Continuous Improvement</strong><span>Development → Quality Engineering → Operations → Improve</span></div>
      <p>One connected engineering lifecycle — from idea to production and beyond.</p>
    </div>
  </div>
</section>
<section className="section industries-section"><div className="container"><div className="section-heading"><div><div className="eyebrow">INDUSTRIES</div><h2>Deep technology. Industry context.</h2></div><p>Architecture is shaped around users, workflows, risk, scale, data and the operating environment.</p></div><div className="industry-grid">{Object.entries(industries).map(([slug,v],i)=>{const Icon=industryIcons[slug];return <a className="industry-card" href={`/industries/${slug}`} key={slug}><img src={v.image} alt=""/><div><Icon/><span>0{i+1}</span><h3>{v.title}</h3><p>{v.description}</p><b>Explore industry →</b></div></a>})}</div></div></section>
<section className="section insights-home"><div className="container"><div className="section-heading"><div><div className="eyebrow">INSIGHTS</div><h2>Ideas for practical enterprise intelligence.</h2></div><a className="text-link" href="/insights">View all insights →</a></div><div className="insight-grid">{insights.map(x=><a className="insight-card" key={x.slug} href={`/insights/${x.slug}`}><img src={x.image} alt=""/><div><span>{x.category}</span><h3>{x.title}</h3><p>{x.summary}</p><b>Read insight →</b></div></a>)}</div></div></section>
<section className="cta-section"><div className="container cta"><div><div className="eyebrow light">LET'S BUILD WHAT'S NEXT</div><h2>Turn a complex technology problem into a production capability.</h2><p>Bring us the business challenge. We’ll help shape the architecture and delivery path.</p></div><a className="btn gold" href="/contact">Start a Conversation <ArrowRight size={17}/></a></div></section>
</>}
