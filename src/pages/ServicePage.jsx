
import React from 'react'
import {motion} from 'framer-motion'
import {NavLink} from 'react-router-dom'
import {ArrowRight,CheckCircle2} from 'lucide-react'
import PageHero from '../components/PageHero'
export default function ServicePage({data}){
 const outcomes=['Reduce friction across complex workflows','Create reusable enterprise capabilities','Improve visibility and decision quality','Build for security, observability and scale']
 return <>
  <PageHero eyebrow={data.eyebrow} title={data.title} description={data.description} image={data.image}/>
  <section className="section split-section"><div className="container split-grid">
    <div><div className="eyebrow">WHY THIS MATTERS</div><h2>Connect technology to the operating problem.</h2><p>Enterprise initiatives work best when architecture, data, integrations, security and operations are designed together. We focus on the path from business need to dependable production.</p></div>
    <div className="feature-image"><img src={data.image} alt={`${data.title} architecture`}/></div>
  </div></section>
  <section className="section services-section"><div className="container"><div className="section-heading"><div><div className="eyebrow">CAPABILITIES</div><h2>What we deliver.</h2></div><p>{data.description}</p></div><div className="cap-grid">{data.capabilities.map(([t,d],i)=><motion.div className="cap-card" key={t} initial={{opacity:0,y:16}} whileInView={{opacity:1,y:0}} viewport={{once:true}}><span>0{i+1}</span><h3>{t}</h3><p>{d}</p></motion.div>)}</div></div></section>
  <section className="section outcome-section"><div className="container split-grid"><div><div className="eyebrow">OUTCOMES</div><h2>Technology measured by what changes.</h2></div><div className="outcome-list">{outcomes.map(x=><div key={x}><CheckCircle2/> {x}</div>)}</div></div></section>
  <section className="cta-section"><div className="container cta"><div><h2>Explore {data.title.toLowerCase()} with KramaTek.</h2><p>Let’s define the business problem, architecture, integrations and success criteria.</p></div><NavLink className="btn gold" to="/contact">Talk to an Expert <ArrowRight size={17}/></NavLink></div></section>
 </>
}
