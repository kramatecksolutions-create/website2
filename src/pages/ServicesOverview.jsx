
import React from 'react'
import {NavLink} from 'react-router-dom'
import {ArrowUpRight} from 'lucide-react'
import PageHero from '../components/PageHero'
import {services,specialImages} from '../data/siteData'
export default function ServicesOverview(){return <><PageHero eyebrow="SERVICES" title="Enterprise technology services." description="AI, data, digital engineering, specialized delivery capacity and managed operations—connected around business outcomes." image={specialImages.platformImage}/><section className="section services-section"><div className="container"><div className="service-grid">{Object.entries(services).map(([slug,v])=><article className="service-card" key={slug}><NavLink className="service-visual" to={`/services/${slug}`}><img src={v.cardImage} alt=""/></NavLink><div className="service-body"><h3>{v.title}</h3><p>{v.description}</p><NavLink className="service-link" to={`/services/${slug}`}>Explore service <ArrowUpRight size={15}/></NavLink></div></article>)}</div></div></section></>}
