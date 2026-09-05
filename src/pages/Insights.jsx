import React from 'react'
import {Link} from 'react-router-dom'
import PageHero from '../components/PageHero'
import {insights} from '../data/siteData'
export default function Insights(){return <><PageHero eyebrow="INSIGHTS" title="Ideas for practical enterprise intelligence." description="Perspectives on AI, data, automation, cloud and digital engineering." image="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1600&q=85"/><section className="section services-section"><div className="container"><div className="insight-grid">{insights.map(x=><Link className="insight-card" to={`/insights/${x.slug}`} key={x.slug}><img src={x.image} alt=""/><div><span>{x.category}</span><h3>{x.title}</h3><p>{x.summary}</p><b>Read insight →</b></div></Link>)}</div></div></section></>}
