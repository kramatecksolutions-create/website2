
import React from 'react'
import {ArrowUpRight} from 'lucide-react'
import PageHero from '../components/PageHero'
import {services,specialImages} from '../data/siteData'
export default function ServicesOverview(){return <><PageHero eyebrow="SERVICES" title="Enterprise technology services." description="AI, data, digital engineering, specialized delivery capacity and managed operations—connected around business outcomes." image={specialImages.platformImage}/>
<section className="section lifecycle-section">
  <div className="container">
    <div className="section-heading lifecycle-heading">
      <div>
        <div className="eyebrow">HOW WE DELIVER</div>
        <h2>Engineering across the complete lifecycle.</h2>
      </div>
      <p>KramaTek brings Development, Quality Engineering and Operations together to build, validate and run dependable enterprise technology.</p>
    </div>

    <div className="lifecycle-grid">
      <article className="lifecycle-card development-card">
        <div className="lifecycle-number">01</div>
        <div className="lifecycle-symbol">&lt;/&gt;</div>
        <h3>Development</h3>
        <p>Build with purpose.</p>
        <ul>
          <li>Application engineering</li>
          <li>AI &amp; data engineering</li>
          <li>Cloud &amp; platform development</li>
          <li>Integration &amp; modernization</li>
        </ul>
        <div className="lifecycle-flow">DESIGN → BUILD → INTEGRATE</div>
      </article>

      <article className="lifecycle-card qe-card">
        <div className="lifecycle-number">02</div>
        <div className="lifecycle-symbol">✓</div>
        <h3>Quality Engineering</h3>
        <p>Engineer for quality.</p>
        <ul>
          <li>Test automation</li>
          <li>API &amp; integration testing</li>
          <li>Performance &amp; reliability validation</li>
          <li>AI-assisted QE</li>
        </ul>
        <div className="lifecycle-flow">VALIDATE → AUTOMATE → ASSURE</div>
      </article>

      <article className="lifecycle-card operations-card">
        <div className="lifecycle-number">03</div>
        <div className="lifecycle-symbol">↻</div>
        <h3>Operations</h3>
        <p>Run with confidence.</p>
        <ul>
          <li>Application support</li>
          <li>Platform operations</li>
          <li>Monitoring &amp; observability</li>
          <li>Incident &amp; release support</li>
        </ul>
        <div className="lifecycle-flow">DEPLOY → MONITOR → SUPPORT</div>
      </article>
    </div>

    <div className="lifecycle-continuous">
      <strong>One team. From idea to production and beyond.</strong>
      <span>DEVELOP → VALIDATE → OPERATE → IMPROVE ↻</span>
    </div>
  </div>
</section>

<section className="section services-section"><div className="container"><div className="service-grid">{Object.entries(services).map(([slug,v])=><article className="service-card" key={slug}><a className="service-visual" href={`/services/${slug}`}><img src={v.cardImage} alt=""/></a><div className="service-body"><h3>{v.title}</h3><p>{v.description}</p><a className="service-link" href={`/services/${slug}`}>Explore service <ArrowUpRight size={15}/></a></div></article>)}</div></div></section></>}
