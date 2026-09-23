
import React from 'react'
import {ArrowUpRight,Code2,ShieldCheck,Activity,RefreshCw} from 'lucide-react'
import PageHero from '../components/PageHero'
import {services,specialImages} from '../data/siteData'
export default function ServicesOverview(){return <><PageHero eyebrow="SERVICES" title="Enterprise technology services." description="AI, data, digital engineering, specialized delivery capacity and managed operations—connected around business outcomes." image={specialImages.platformImage}/><section className="section delivery-section delivery-services">
  <div className="container">
    <div className="delivery-heading">
      <div><div className="eyebrow">OUR ENGINEERING OPERATING MODEL</div><h2>Development. Quality Engineering. Operations.</h2></div>
      <p>Our technology capabilities are delivered through one connected lifecycle — build the right solution, validate it continuously and operate it reliably.</p>
    </div>
    <div className="delivery-grid">
      <article className="delivery-card"><div className="delivery-card-top"><span className="delivery-number">01</span><div className="delivery-icon"><Code2 size={27}/></div></div><div className="delivery-label">DEVELOPMENT</div><h3>Build with purpose.</h3><p>Applications, platforms, AI, data, cloud and integration engineering designed around business outcomes.</p><div className="delivery-flow"><span>DESIGN</span><b>→</b><span>BUILD</span><b>→</b><span>INTEGRATE</span></div></article>
      <article className="delivery-card featured"><div className="delivery-card-top"><span className="delivery-number">02</span><div className="delivery-icon"><ShieldCheck size={27}/></div></div><div className="delivery-label">QUALITY ENGINEERING</div><h3>Engineer for quality.</h3><p>Automation, API validation, performance, reliability and quality practices embedded throughout delivery.</p><div className="delivery-flow"><span>VALIDATE</span><b>→</b><span>AUTOMATE</span><b>→</b><span>ASSURE</span></div></article>
      <article className="delivery-card"><div className="delivery-card-top"><span className="delivery-number">03</span><div className="delivery-icon"><Activity size={27}/></div></div><div className="delivery-label">OPERATIONS</div><h3>Run with confidence.</h3><p>Monitoring, observability, application support, release support and dependable production operations.</p><div className="delivery-flow"><span>DEPLOY</span><b>→</b><span>MONITOR</span><b>→</b><span>SUPPORT</span></div></article>
    </div>
    <div className="delivery-loop compact"><div className="delivery-loop-icon"><RefreshCw size={22}/></div><div><strong>Continuous Improvement</strong><span>Build → Validate → Operate → Improve</span></div><p>One team across the delivery lifecycle.</p></div>
  </div>
</section><section className="section services-section"><div className="container"><div className="service-grid">{Object.entries(services).map(([slug,v])=><article className="service-card" key={slug}><a className="service-visual" href={`/services/${slug}`}><img src={v.cardImage} alt=""/></a><div className="service-body"><h3>{v.title}</h3><p>{v.description}</p><a className="service-link" href={`/services/${slug}`}>Explore service <ArrowUpRight size={15}/></a></div></article>)}</div></div></section></>}
