
import React from 'react'
import {ArrowUpRight} from 'lucide-react'
import PageHero from '../components/PageHero'
import {services,specialImages} from '../data/siteData'
export default function ServicesOverview(){return <><PageHero eyebrow="SERVICES" title="Enterprise technology services." description="AI, data, digital engineering, specialized delivery capacity and managed operations—connected around business outcomes." image={specialImages.platformImage}/><section className="section services-section"><div className="container"><div className="service-grid">{Object.entries(services).map(([slug,v])=><article className="service-card" key={slug}><a className="service-visual" href={`/services/${slug}`}><img src={v.cardImage} alt=""/></a><div className="service-body"><h3>{v.title}</h3><p>{v.description}</p><a className="service-link" href={`/services/${slug}`}>Explore service <ArrowUpRight size={15}/></a></div></article>)}</div></div></section></>}
