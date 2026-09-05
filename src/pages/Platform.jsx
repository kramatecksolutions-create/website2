
import React from 'react'
import {NavLink} from 'react-router-dom'
import {ArrowRight} from 'lucide-react'
import PageHero from '../components/PageHero'
import {specialImages} from '../data/siteData'
export default function Platform(){return <><PageHero eyebrow="SOLUTIONS" title="Enterprise Intelligence Platform" description="A modular foundation for connecting enterprise data, AI models, workflows, integrations and user experiences." image={specialImages.platformImage}/><section className="section split-section"><div className="container split-grid"><div><div className="eyebrow">OPERATING MODEL</div><h2>Connect. Understand. Decide. Act.</h2><p>Start with one high-value use case and expand into a reusable intelligence layer that integrates data, models and workflows.</p></div><div className="feature-image"><img src={specialImages.platformDetail} alt="Enterprise intelligence architecture"/></div></div></section><section className="cta-section"><div className="container cta"><div><h2>Explore a platform use case.</h2><p>Let’s shape a practical path from business problem to production capability.</p></div><NavLink className="btn gold" to="/contact">Talk to KramaTek <ArrowRight size={17}/></NavLink></div></section></>}
