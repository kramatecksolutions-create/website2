
import React from 'react'
import {NavLink} from 'react-router-dom'
import PageHero from '../components/PageHero'
import {platformImageAsset} from '../data/siteData'
export default function Insights(){const items=[['Enterprise AI','From chatbot to enterprise AI','Why useful AI must connect knowledge, tools, systems and workflows.'],['RAG','Designing reliable RAG','Architecture choices that determine retrieval quality, evaluation and trust.'],['Data','The AI-ready data foundation','Why metadata, quality, lineage and access control matter before scaling AI.']];return <><PageHero eyebrow="INSIGHTS" title="Ideas for practical enterprise intelligence." description="Perspectives on AI, data, automation, cloud and digital engineering." image={platformImageAsset}/><section className="section services-section"><div className="container"><div className="insight-grid">{items.map(([c,t,d],i)=><article className="insight-card" key={t}><img src={platformImageAsset} alt=""/><div><span>{c}</span><h3>{t}</h3><p>{d}</p></div></article>)}</div></div></section></>}
