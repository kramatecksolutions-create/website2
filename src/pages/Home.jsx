
import React,{useEffect,useState} from 'react'
import {motion,AnimatePresence} from 'framer-motion'
import {ArrowRight,ArrowUpRight,BrainCircuit,Database,ChartNoAxesCombined,CloudCog,UsersRound,Settings2,Workflow,ScanSearch,Landmark,RadioTower,HeartPulse,Building2,ShieldCheck,ServerCog} from 'lucide-react'
import {clients,insights} from '../data/siteData'

const stories=[
 {
   a:'Enterprise technology,',b:'engineered for impact.',
   text:'KramaTek brings AI, data, cloud and digital engineering together to modernize operations, accelerate decisions and build resilient digital capabilities.',
   image:'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1900&q=88'
 },
 {
   a:'Build intelligence',b:'into the business.',
   text:'Move beyond standalone tools. Connect data, AI and automation directly to workflows, systems and teams where decisions happen.',
   image:'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1900&q=88'
 },
 {
   a:'Turn enterprise data',b:'into decisions.',
   text:'Create trusted data foundations, analytics and AI capabilities that make information useful at the moment of action.',
   image:'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1900&q=88'
 },
 {
   a:'Modernize without',b:'losing momentum.',
   text:'Cloud, application modernization and intelligent automation help organizations evolve while protecting critical operations.',
   image:'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1900&q=88'
 }
]

const services=[
 [BrainCircuit,'AI Solutions','GenAI, RAG, agentic AI, computer vision and governed AI workflows.','/services/ai-solutions','https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1000&q=82'],
 [Database,'Data Engineering','Modern pipelines, platforms, integration, quality and observability.','/services/data-engineering','https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=82'],
 [ChartNoAxesCombined,'Analytics & Intelligence','BI, predictive analytics, anomaly detection and decision intelligence.','/services/analytics-intelligence','https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=82'],
 [CloudCog,'Digital Transformation','Cloud, application modernization, digital experience and automation.','/services/digital-transformation','https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1000&q=82'],
 [UsersRound,'Staff Augmentation','Specialized engineering, architecture, AI, cloud and data talent.','/services/staff-augmentation','https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=82'],
 [Settings2,'Managed Services','Operate, monitor and continuously improve critical digital platforms.','/services/managed-services','https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1000&q=82']
]
const industries=[
 [Landmark,'Government & Public Sector','AI-enabled operations, digital services and decision support.','/industries/government'],
 [RadioTower,'Telecom','Network, customer and operational intelligence at scale.','/industries/telecom'],
 [HeartPulse,'Healthcare','Connected workflows, secure data and intelligent automation.','/industries/healthcare'],
 [Building2,'Financial Services','Governed AI, trusted data, risk intelligence and automation.','/industries/financial-services'],
 [Building2,'Enterprise','Cloud, digital platforms, AI and data modernization.','/industries/enterprise']
]
const tech=['AWS','Microsoft Azure','Google Cloud','Snowflake','Databricks','Kubernetes','MongoDB','OpenAI']

export default function Home(){
 const [story,setStory]=useState(0)
 useEffect(()=>{const t=setInterval(()=>setStory(v=>(v+1)%stories.length),5200);return()=>clearInterval(t)},[])
 const s=stories[story]
 return <>
  <section className="hero hero-v7">
    <AnimatePresence mode="wait">
      <motion.div key={story} className="hero-image-v7" initial={{opacity:0,scale:1.025}} animate={{opacity:1,scale:1}} exit={{opacity:0}} transition={{duration:1.0}} style={{backgroundImage:`url("${s.image}")`}}/>
    </AnimatePresence>
    <div className="hero-overlay-v7"/>
    <div className="container hero-grid">
      <motion.div className="hero-copy" initial={{opacity:0,y:20}} animate={{opacity:1,y:0}}>
        <div className="hero-kicker"><span/> GLOBAL ENTERPRISE TECHNOLOGY</div>
        <AnimatePresence mode="wait">
          <motion.div key={story} initial={{opacity:0,y:18}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-10}} transition={{duration:.55}}>
            <h1>{s.a}<br/><em>{s.b}</em></h1><p>{s.text}</p>
          </motion.div>
        </AnimatePresence>
        <div className="hero-actions"><a className="btn primary" href="/platform">Explore Solutions <ArrowRight size={17}/></a><a className="btn secondary" href="/contact">Talk to an Expert</a></div>
        <div className="story-tabs">{stories.map((_,i)=><button aria-label={`Slide ${i+1}`} className={i===story?'active':''} onClick={()=>setStory(i)} key={i}/>)}</div>
      </motion.div>
    </div>
  </section>

  <section className="visual-second-layer"><div className="container">
    <div className="visual-second-grid">
      {services.slice(0,3).map(([Icon,title,desc,path,image])=><a href={path} className="visual-feature" key={title}>
        <div className="visual-feature-image visual-bg" style={{backgroundImage:`linear-gradient(135deg,rgba(40,22,12,.08),rgba(40,22,12,.28)),url("${image}")`}}><span>{title}</span></div>
        <div className="visual-feature-body"><Icon size={25}/><div><span>FEATURED CAPABILITY</span><h3>{title}</h3><p>{desc}</p></div><ArrowUpRight size={20}/></div>
      </a>)}
    </div>
  </div></section>

  <section className="client-section client-v7"><div className="container">
    <div className="client-title">ORGANIZATIONS WE SUPPORT</div>
    <div className="client-grid">{clients.map((x,i)=><motion.div className="client-item" key={x.src} initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*.05}}><img src={x.src} alt={x.alt}/></motion.div>)}</div>
  </div></section>

  <section className="section services-section"><div className="container">
   <div className="section-heading centered"><div className="eyebrow">WHAT WE OFFER</div><h2>Enterprise services that move<br/>from strategy to production.</h2><p>One technology partner across AI, data, applications, cloud and operations.</p></div>
   <div className="service-grid">
    {services.map(([Icon,title,desc,path,image],i)=><motion.article className="service-card image-service-card" key={title} initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*.04}}>
      <a className="service-image-link visual-bg" href={path} style={{backgroundImage:`linear-gradient(135deg,rgba(40,22,12,.08),rgba(40,22,12,.25)),url("${image}")`}}><span>{title}</span></a>
      <div className="image-service-body"><div className="service-icon"><Icon size={30}/></div><span className="service-no">0{i+1}</span><h3>{title}</h3><p>{desc}</p><a href={path}>Explore service <ArrowUpRight size={15}/></a></div>
    </motion.article>)}
   </div>
  </div></section>

  <section className="section intelligence-section"><div className="container intelligence-grid">
   <div><div className="eyebrow light">FROM SIGNAL TO ACTION</div><h2>Make enterprise intelligence<br/>visible and actionable.</h2><p>This operating model shows how data and events connect to context, intelligence, automation and governed decisions.</p><div className="intelligence-points"><span>Context-aware</span><span>Governed</span><span>Observable</span><span>Integrated</span></div></div>
   <div className="big-diagram diagram-v7"><div className="diagram-col"><label>DATA & EVENTS</label><div><Database/>Enterprise Data</div><div><ServerCog/>Systems & APIs</div><div><ScanSearch/>Video & Sensors</div></div><div className="diagram-arrow">→</div><div className="diagram-core"><BrainCircuit/><strong>KRAMA</strong><small>AI + DATA + RULES</small></div><div className="diagram-arrow">→</div><div className="diagram-col"><label>ACTIONS</label><div><ChartNoAxesCombined/>Insights</div><div><Workflow/>Automation</div><div><ShieldCheck/>Decisions</div></div></div>
  </div></section>

  <section className="section industries-section"><div className="container">
   <div className="section-heading"><div><div className="eyebrow">INDUSTRIES</div><h2>Deep technology.<br/>Industry context.</h2></div><p>Architecture is shaped around users, workflows, risk, scale, data and the operating environment.</p></div>
   <div className="industry-grid">{industries.map(([Icon,t,d,path],i)=><a href={path} className="industry-card" key={t}><Icon/><span>0{i+1}</span><h3>{t}</h3><p>{d}</p><b>Explore industry →</b></a>)}</div>
  </div></section>

  <section className="technology-section"><div className="container">
   <div className="section-heading centered"><div className="eyebrow">TECHNOLOGY ECOSYSTEM</div><h2>Modern platforms. Open architecture.</h2><p>We design around the stack that best fits the problem—not a single vendor.</p></div>
   <div className="tech-grid">{tech.map(t=><div className="tech-name" key={t}>{t}</div>)}</div>
   <div className="tech-note">Technology names indicate architectural capability and compatibility, not formal partnership status.</div>
  </div></section>

  <section className="section process-section"><div className="container">
   <div className="section-heading"><div><div className="eyebrow">HOW WE DELIVER</div><h2>Enterprise rigor.<br/>Startup speed.</h2></div><p>Focused delivery from problem definition through production, with architecture, security, observability and ownership built in.</p></div>
   <div className="process-grid">{[['Discover','Clarify outcomes, users, systems, constraints and success criteria.'],['Design','Shape architecture, data flows, controls and user experience.'],['Prototype','Validate the riskiest assumptions with a focused working solution.'],['Scale','Productionize with security, observability, resilience and support.']].map(([t,d],i)=><div className="process-step" key={t}><span>0{i+1}</span><h3>{t}</h3><p>{d}</p></div>)}</div>
  </div></section>

  <section className="section insights-home"><div className="container">
   <div className="section-heading"><div><div className="eyebrow">INSIGHTS</div><h2>Ideas for practical enterprise intelligence.</h2></div><a className="text-link" href="/insights">View all insights →</a></div>
   <div className="insight-grid">{insights.map(x=><a className="insight-card" key={x.slug} href={`/insights/${x.slug}`}><div className="insight-image visual-bg" style={{backgroundImage:`linear-gradient(135deg,rgba(40,22,12,.08),rgba(40,22,12,.24)),url("${x.image}")`}}><span>{x.category}</span></div><div><span>{x.category}</span><h3>{x.title}</h3><p>{x.summary}</p><b>Read insight →</b></div></a>)}</div>
  </div></section>

  <section className="cta-section"><div className="container"><div className="cta"><div><div className="eyebrow light">LET'S BUILD WHAT'S NEXT</div><h2>Transform a complex technology problem into a production capability.</h2><p>Bring us the business challenge. We’ll help shape the architecture, delivery path and engineering needed to move it forward.</p></div><a className="btn gold" href="/contact">Start a Conversation <ArrowRight size={17}/></a></div></div></section>
 </>
}
