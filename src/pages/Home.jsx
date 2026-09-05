
import React,{useEffect,useState} from 'react'
import {motion,AnimatePresence} from 'framer-motion'
import {NavLink} from 'react-router-dom'
import {ArrowRight,ArrowUpRight,BrainCircuit,Database,ChartNoAxesCombined,CloudCog,UsersRound,Settings2,Landmark,RadioTower,HeartPulse,Building2} from 'lucide-react'
import {services,clients} from '../data/siteData'

const serviceIcons={ 'ai-solutions':BrainCircuit,'data-engineering':Database,'analytics-intelligence':ChartNoAxesCombined,'digital-transformation':CloudCog,'staff-augmentation':UsersRound,'managed-services':Settings2 }
const stories=[
 {eyebrow:'GLOBAL ENTERPRISE TECHNOLOGY',title:'Enterprise technology,',accent:'engineered for impact.',text:'AI, data and digital engineering brought together to modernize operations and build resilient digital capabilities.',key:'ai-solutions'},
 {eyebrow:'DATA-DRIVEN ENTERPRISE',title:'Turn enterprise data',accent:'into decisions.',text:'Trusted data foundations, analytics and AI that make information useful at the moment of action.',key:'data-engineering'},
 {eyebrow:'DIGITAL MODERNIZATION',title:'Modernize without',accent:'losing momentum.',text:'Cloud, application modernization and automation that protect critical operations while enabling change.',key:'digital-transformation'},
 {eyebrow:'INTELLIGENT OPERATIONS',title:'Build intelligence',accent:'into the business.',text:'Connect knowledge, AI and workflow automation directly to the teams and systems where decisions happen.',key:'analytics-intelligence'}
]
const industries=[[Landmark,'Government & Public Sector','/industries/government'],[RadioTower,'Telecom','/industries/telecom'],[HeartPulse,'Healthcare','/industries/healthcare'],[Building2,'Financial Services','/industries/financial-services'],[Building2,'Enterprise','/industries/enterprise']]

export default function Home(){
 const [slide,setSlide]=useState(0)
 useEffect(()=>{const id=setInterval(()=>setSlide(v=>(v+1)%stories.length),5600);return()=>clearInterval(id)},[])
 const s=stories[slide]; const image=services[s.key].image
 return <>
  <section className="hero">
   <AnimatePresence mode="wait">
    <motion.img key={slide} className="hero-image" src={image} alt="" initial={{opacity:0,scale:1.03}} animate={{opacity:1,scale:1}} exit={{opacity:0}} transition={{duration:.8}}/>
   </AnimatePresence>
   <div className="hero-overlay"/>
   <div className="container hero-content"><div className="hero-copy">
     <div className="hero-kicker">{s.eyebrow}</div>
     <AnimatePresence mode="wait"><motion.div key={slide} initial={{opacity:0,y:14}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-8}}>
       <h1>{s.title}<br/><em>{s.accent}</em></h1><p>{s.text}</p>
     </motion.div></AnimatePresence>
     <div className="hero-actions"><NavLink className="btn primary" to="/platform">Explore Solutions <ArrowRight size={17}/></NavLink><NavLink className="btn secondary" to="/contact">Talk to an Expert</NavLink></div>
     <div className="hero-dots">{stories.map((_,i)=><button onClick={()=>setSlide(i)} key={i} className={slide===i?'active':''} aria-label={`Slide ${i+1}`}/>)}</div>
   </div></div>
  </section>

  <section className="client-zone"><div className="container">
    <div className="client-title">ORGANIZATIONS WE SUPPORT</div>
    <div className="client-float-row">{[...clients,...clients].map((c,i)=><div className="client-wordmark" key={i}><img src={c.image} alt={c.name}/></div>)}</div>
  </div></section>

  <section className="section services-section"><div className="container">
    <div className="section-heading centered"><div className="eyebrow">WHAT WE OFFER</div><h2>Enterprise services from strategy to production.</h2><p>One technology partner across AI, data, applications, cloud and operations.</p></div>
    <div className="service-grid">{Object.entries(services).map(([slug,v],i)=>{const Icon=serviceIcons[slug];return <motion.article className="service-card" key={slug} initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}}>
      <NavLink className="service-visual" to={`/services/${slug}`}><img src={v.image} alt={`${v.title} visual`}/></NavLink>
      <div className="service-body"><div className="service-icon"><Icon size={29}/></div><span className="service-no">0{i+1}</span><h3>{v.title}</h3><p>{v.description}</p><NavLink className="service-link" to={`/services/${slug}`}>Explore service <ArrowUpRight size={15}/></NavLink></div>
    </motion.article>})}</div>
  </div></section>

  <section className="section industry-section"><div className="container">
    <div className="section-heading"><div><div className="eyebrow">INDUSTRIES</div><h2>Technology shaped around the operating environment.</h2></div><p>Different industries demand different combinations of data, AI, integration, control and operational resilience.</p></div>
    <div className="industry-grid">{industries.map(([Icon,t,path],i)=><NavLink className="industry-card" to={path} key={t}><Icon/><span>0{i+1}</span><h3>{t}</h3><p>Explore solutions designed around real workflows, users, systems and decision cycles.</p><b>Explore industry →</b></NavLink>)}</div>
  </div></section>

  <section className="cta-section"><div className="container cta"><div><div className="eyebrow light">LET'S BUILD WHAT'S NEXT</div><h2>Turn a complex technology problem into a production capability.</h2><p>Bring us the business challenge. We’ll help shape the architecture and delivery path.</p></div><NavLink className="btn gold" to="/contact">Start a Conversation <ArrowRight size={17}/></NavLink></div></section>
 </>
}
