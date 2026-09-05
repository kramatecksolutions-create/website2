
import React from 'react'
import {NavLink} from 'react-router-dom'
import PageHero from '../components/PageHero'
import {industries,specialImages} from '../data/siteData'
export default function IndustriesOverview(){return <><PageHero eyebrow="INDUSTRIES" title="Enterprise technology in context." description="Different operating environments demand different combinations of intelligence, integration, control, scale and resilience." image={specialImages.whyImage}/><section className="section industries-section"><div className="container"><div className="industry-grid overview">{Object.entries(industries).map(([slug,v])=><NavLink className="industry-card" to={`/industries/${slug}`} key={slug}><img src={v.image} alt=""/><div><h3>{v.title}</h3><p>{v.description}</p><b>Explore industry →</b></div></NavLink>)}</div></div></section></>}
