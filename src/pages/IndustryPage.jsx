
import React from 'react'
import {ArrowRight,BrainCircuit,Database,Workflow,ChartNoAxesCombined} from 'lucide-react'
import PageHero from '../components/PageHero'
export default function IndustryPage({data}){
 const items=[[BrainCircuit,'Enterprise AI','Ground AI in approved knowledge, enterprise data and controlled workflows.'],[Database,'Data Foundations','Reliable pipelines, integration, quality and analytical platforms.'],[ChartNoAxesCombined,'Operational Intelligence','Turn data into visibility, forecasts and prioritized signals.'],[Workflow,'Intelligent Automation','Connect systems and automate repeatable operational workflows.']]
 return <>
  <PageHero eyebrow="INDUSTRIES" title={data.title} description={data.description} image={data.image}/>
  <section className="section need-section"><div className="container need-grid"><div><div className="eyebrow">INDUSTRY CONTEXT</div><h2>Technology must fit the operating environment.</h2><p>{data.description} We design around real users, operational constraints, decision cycles, integration boundaries and the level of control the environment requires.</p></div><div className="need-image"><img src={data.image} alt={`${data.title} visual`}/></div></div></section>
  <section className="section services-section"><div className="container"><div className="section-heading"><div><div className="eyebrow">WHERE TECHNOLOGY CREATES LEVERAGE</div><h2>From data foundation to operational action.</h2></div><p>Capabilities are composed around the business and operating model—not forced into a generic package.</p></div><div className="service-grid four">{items.map(([Icon,t,d],i)=><article className="service-card detail-capability" key={t}><div className="service-icon"><Icon size={30}/></div><span className="service-no">0{i+1}</span><h3>{t}</h3><p>{d}</p></article>)}</div></div></section>
  <section className="cta-section"><div className="container"><div className="cta"><div><h2>Discuss {data.title.toLowerCase()} priorities.</h2><p>We can help turn a complex operating challenge into a focused architecture and delivery plan.</p></div><a className="btn gold" href="/contact">Start a Conversation <ArrowRight size={17}/></a></div></div></section>
 </>
}
