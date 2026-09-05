
import React from 'react'
import {motion} from 'framer-motion'
import {ArrowRight,CheckCircle2} from 'lucide-react'
import PageHero from '../components/PageHero'
export default function ServicePage({data}){
 return <>
  <PageHero eyebrow={data.eyebrow} title={data.title} description={data.description} image={data.image}/>
  <section className="section need-section"><div className="container need-grid">
    <div><div className="eyebrow">WHY THIS MATTERS</div><h2>The enterprise need.</h2><p>Modern technology programs fail when architecture, data, integration, security and operations are treated as separate projects. KramaTek connects those decisions so the solution can move from concept to dependable production.</p></div>
    <div className="need-image"><img src={data.image} alt={`${data.title} enterprise visual`}/></div>
  </div></section>
  <section className="section services-section"><div className="container"><div className="section-heading"><div><div className="eyebrow">CAPABILITIES</div><h2>What we deliver.</h2></div><p>{data.description}</p></div><div className="service-grid four">{data.capabilities.map(([t,d],i)=><motion.article className="service-card detail-capability" key={t} initial={{opacity:0,y:18}} whileInView={{opacity:1,y:0}} viewport={{once:true}}><span className="service-no">0{i+1}</span><h3>{t}</h3><p>{d}</p></motion.article>)}</div></div></section>
  <section className="section outcome-section"><div className="container outcome-grid"><div><div className="eyebrow">BUSINESS OUTCOMES</div><h2>Technology measured by what changes.</h2><p>We shape architecture and delivery around observable operational outcomes, not technology for its own sake.</p></div><div className="outcome-list">{data.outcomes.map(x=><div key={x}><CheckCircle2/> {x}</div>)}</div></div></section>
  <section className="cta-section"><div className="container"><div className="cta"><div><h2>Explore {data.title.toLowerCase()} with KramaTek.</h2><p>Let’s define the problem, architecture, integration model and success criteria.</p></div><a className="btn gold" href="/contact">Talk to an Expert <ArrowRight size={17}/></a></div></div></section>
 </>
}
