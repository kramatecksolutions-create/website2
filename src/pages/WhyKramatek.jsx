
import React from 'react'
import {NavLink} from 'react-router-dom'
import {ArrowRight} from 'lucide-react'
import PageHero from '../components/PageHero'
import {specialImages} from '../data/siteData'
export default function WhyKramatek(){const items=[['Problem-first','Start with the operating problem and measurable outcome.'],['Senior attention','Critical architecture and delivery decisions receive direct senior involvement.'],['Prototype before scale','Validate risky assumptions with focused working solutions.'],['Enterprise engineering','Security, integration, observability and resilience are designed in.']];return <><PageHero eyebrow="WHY KRAMATEK" title="Built for complex technology problems." description="Focused consulting, modern engineering and AI-first thinking from concept to dependable operation." image={specialImages.whyImage}/><section className="section services-section"><div className="container"><div className="cap-grid">{items.map(([t,d],i)=><div className="cap-card" key={t}><span>0{i+1}</span><h3>{t}</h3><p>{d}</p></div>)}</div></div></section><section className="cta-section"><div className="container cta"><div><h2>Have a problem worth solving?</h2></div><NavLink className="btn gold" to="/contact">Start a Conversation <ArrowRight size={17}/></NavLink></div></section></>}
