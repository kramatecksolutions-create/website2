
import React from 'react'
import PageHero from '../components/PageHero'
import {insights,specialImages} from '../data/siteData'
export default function Insights(){return <><PageHero eyebrow="INSIGHTS" title="Ideas for practical enterprise intelligence." description="Perspectives on AI, data, automation, cloud and digital engineering." image={specialImages.insightsImage}/><section className="section services-section"><div className="container"><div className="insight-grid">{insights.map(x=><a className="insight-card" key={x.slug} href={`/insights/${x.slug}`}><img src={x.image} alt=""/><div><span>{x.category}</span><h3>{x.title}</h3><p>{x.summary}</p><b>Read insight →</b></div></a>)}</div></div></section></>}
