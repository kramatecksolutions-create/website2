
import React,{useEffect,useState} from 'react'
import {motion} from 'framer-motion'
import {ArrowRight,ArrowUpRight,BrainCircuit,Database,ChartNoAxesCombined,CloudCog,UsersRound,Settings2,Workflow,ScanSearch,MapPinned,Landmark,RadioTower,HeartPulse,Building2,ShieldCheck,ServerCog} from 'lucide-react'
import {clients,insights} from '../data/siteData'

const stories=[
 ['Enterprise technology,','engineered for impact.','KramaTek brings AI, data, cloud and digital engineering together to modernize operations, accelerate decisions and build resilient digital capabilities.'],
 ['Build intelligence','into the business.','Move beyond standalone tools. Connect data, AI and automation directly to workflows, systems and teams where decisions happen.'],
 ['Modern platforms.','Smarter operations.','From cloud-native applications to operational AI, we design enterprise systems that are easier to scale, observe and evolve.']
]
const services=[
 [BrainCircuit,'AI Solutions','GenAI, RAG, agentic AI, computer vision and governed AI workflows.','/services/ai-solutions'],
 [Database,'Data Engineering','Modern pipelines, platforms, integration, quality and observability.','/services/data-engineering'],
 [ChartNoAxesCombined,'Analytics & Intelligence','BI, predictive analytics, anomaly detection and decision intelligence.','/services/analytics-intelligence'],
 [CloudCog,'Digital Transformation','Cloud, application modernization, digital experience and automation.','/services/digital-transformation'],
 [UsersRound,'Staff Augmentation','Specialized engineering, architecture, AI, cloud and data talent.','/services/staff-augmentation'],
 [Settings2,'Managed Services','Operate, monitor and continuously improve critical digital platforms.','/services/managed-services']
]
const industries=[[Landmark,'Government & Public Sector','AI-enabled operations, digital services and decision support.','/industries/government'],[RadioTower,'Telecom','Network, customer and operational intelligence at scale.','/industries/telecom'],[HeartPulse,'Healthcare','Connected workflows, secure data and intelligent automation.','/industries/healthcare'],[Building2,'Financial Services','Governed AI, trusted data, risk intelligence and automation.','/industries/financial-services'],[Building2,'Enterprise','Cloud, digital platforms, AI and data modernization.','/industries/enterprise']]
const tech=['AWS','Microsoft Azure','Google Cloud','Snowflake','Databricks','Kubernetes','MongoDB','OpenAI']

export default function Home(){
 const [story,setStory]=useState(0)
 useEffect(()=>{const t=setInterval(()=>setStory(v=>(v+1)%stories.length),6500);return()=>clearInterval(t)},[])
 const [a,b,c]=stories[story]
 return <>
  <section className="hero hero-v6">
   <div className="hero-photo"><img src="/assets/visuals/hero-global-enterprise.svg" alt="Connected enterprise intelligence visual"/></div>
   <div className="hero-wash"/>
   <div className="container hero-grid">
    <motion.div className="hero-copy" initial={{opacity:0,y:20}} animate={{opacity:1,y:0}}>
      <div className="hero-kicker"><span/> GLOBAL ENTERPRISE TECHNOLOGY</div>
      <motion.div key={story} initial={{opacity:0,y:14}} animate={{opacity:1,y:0}}>
        <h1>{a}<br/><em>{b}</em></h1><p>{c}</p>
      </motion.div>
      <div className="hero-actions"><a className="btn primary" href="/platform">Explore Solutions <ArrowRight size={17}/></a><a className="btn secondary" href="/contact">Talk to an Expert</a></div>
      <div className="story-tabs">{stories.map((_,i)=><button aria-label={`Hero story ${i+1}`} className={i===story?'active':''} onClick={()=>setStory(i)} key={i}/>)}</div>
    </motion.div>
   </div>
  </section>

  <section className="top-showcase">
    <div className="container">
      <div className="top-showcase-grid">
        <a href="/services/ai-solutions" className="showcase-card"><img src="/assets/visuals/tile-ai.svg" alt="AI-enabled operations"/><div><span>AI & INTELLIGENCE</span><h3>AI-enabled operations</h3><p>Connect knowledge, models and workflows to real enterprise decisions.</p></div></a>
        <a href="/services/data-engineering" className="showcase-card"><img src="/assets/visuals/tile-data.svg" alt="Modern data platforms"/><div><span>DATA FOUNDATION</span><h3>Modern data platforms</h3><p>Build reliable pipelines and analytical foundations for AI and insight.</p></div></a>
        <a href="/services/digital-transformation" className="showcase-card"><img src="/assets/visuals/tile-cloud.svg" alt="Cloud and digital engineering"/><div><span>DIGITAL ENGINEERING</span><h3>Modernize with control</h3><p>Transform applications and workflows without disrupting critical operations.</p></div></a>
      </div>
    </div>
  </section>

  <section className="client-section client-section-v6"><div className="container"><div className="client-title">ORGANIZATIONS WE SUPPORT</div><div className="client-grid">{clients.map((x,i)=><motion.div className="client-item" key={x.src} initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*.05}}><img src={`/assets/${x.src}`} alt={x.alt}/></motion.div>)}</div></div></section>

  <section className="section services-section"><div className="container"><div className="section-heading centered"><div className="eyebrow">WHAT WE OFFER</div><h2>Enterprise services that move<br/>from strategy to production.</h2><p>One technology partner across AI, data, applications, cloud and operations.</p></div><div className="service-grid">{services.map(([Icon,title,desc,path],i)=><motion.article className="service-card service-card-v6" key={title} initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*.04}}><div className="service-image"><img src={`/assets/visuals/${['ai-solutions.svg','data-engineering.svg','analytics-intelligence.svg','digital-transformation.svg','staff-augmentation.svg','managed-services.svg'][i]}`} alt=""/></div><div className="service-card-body"><div className="service-icon"><Icon size={29}/></div><span className="service-no">0{i+1}</span><h3>{title}</h3><p>{desc}</p><a href={path}>Explore service <ArrowUpRight size={15}/></a></div></motion.article>)}</div></div></section>

  <section className="section intelligence-section"><div className="container intelligence-grid"><div><div className="eyebrow light">FROM SIGNAL TO ACTION</div><h2>Make enterprise intelligence<br/>visible and actionable.</h2><p>This operating model shows exactly how KramaTek connects data and events to context, intelligence, automation and governed decisions.</p><div className="intelligence-points"><span>Context-aware</span><span>Governed</span><span>Observable</span><span>Integrated</span></div></div><div className="big-diagram big-diagram-v6"><div className="diagram-col"><label>DATA & EVENTS</label><div><Database/>Enterprise Data</div><div><ServerCog/>Systems & APIs</div><div><ScanSearch/>Video & Sensors</div></div><div className="diagram-arrow">→</div><div className="diagram-core"><BrainCircuit/><strong>KRAMA</strong><small>AI + DATA + RULES</small></div><div className="diagram-arrow">→</div><div className="diagram-col"><label>ACTIONS</label><div><ChartNoAxesCombined/>Insights</div><div><Workflow/>Automation</div><div><ShieldCheck/>Decisions</div></div></div></div></section>

  <section className="section industries-section"><div className="container"><div className="section-heading"><div><div className="eyebrow">INDUSTRIES</div><h2>Deep technology.<br/>Industry context.</h2></div><p>Architecture is shaped around users, workflows, risk, scale, data and the operating environment.</p></div><div className="industry-grid">{industries.map(([Icon,t,d,path],i)=><a href={path} className="industry-card" key={t}><Icon/><span>0{i+1}</span><h3>{t}</h3><p>{d}</p><b>Explore industry →</b></a>)}</div></div></section>

  <section className="technology-section"><div className="container"><div className="section-heading centered"><div className="eyebrow">TECHNOLOGY ECOSYSTEM</div><h2>Modern platforms. Open architecture.</h2><p>We design around the stack that best fits the problem—not a single vendor.</p></div><div className="tech-grid">{tech.map(t=><div className="tech-name" key={t}>{t}</div>)}</div><div className="tech-note">Technology names indicate architectural capability and compatibility, not formal partnership status.</div></div></section>

  <section className="section process-section"><div className="container"><div className="section-heading"><div><div className="eyebrow">HOW WE DELIVER</div><h2>Enterprise rigor.<br/>Startup speed.</h2></div><p>Focused delivery from problem definition through production, with architecture, security, observability and ownership built in.</p></div><div className="process-grid">{[['Discover','Clarify outcomes, users, systems, constraints and success criteria.'],['Design','Shape architecture, data flows, controls and user experience.'],['Prototype','Validate the riskiest assumptions with a focused working solution.'],['Scale','Productionize with security, observability, resilience and support.']].map(([t,d],i)=><div className="process-step" key={t}><span>0{i+1}</span><h3>{t}</h3><p>{d}</p></div>)}</div></div></section>

  <section className="section insights-home"><div className="container"><div className="section-heading"><div><div className="eyebrow">INSIGHTS</div><h2>Ideas for practical enterprise intelligence.</h2></div><a className="text-link" href="/insights">View all insights →</a></div><div className="insight-grid">{insights.map(x=><a className="insight-card" key={x.slug} href={`/insights/${x.slug}`}><img src={x.image} alt=""/><div><span>{x.category}</span><h3>{x.title}</h3><p>{x.summary}</p><b>Read insight →</b></div></a>)}</div></div></section>

  <section className="cta-section"><div className="container"><div className="cta"><div><div className="eyebrow light">LET'S BUILD WHAT'S NEXT</div><h2>Transform a complex technology problem into a production capability.</h2><p>Bring us the business challenge. We’ll help shape the architecture, delivery path and engineering needed to move it forward.</p></div><a className="btn gold" href="/contact">Start a Conversation <ArrowRight size={17}/></a></div></div></section>
 </>
}
