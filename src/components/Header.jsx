
import React,{useState} from 'react'
import {Menu,X,ChevronDown,ArrowUpRight,Sparkles,Layers3,Landmark,Lightbulb,BookOpen} from 'lucide-react'
import icon from '../assets/brand/kramatek-icon-primary.png'
import {services,industries} from '../data/siteData'

export default function Header(){
  const [mobile,setMobile]=useState(false)
  return <header className="header">
    <div className="nav">
      <a href="/" className="brand-new" aria-label="KramaTek Home">
        <img className="brand-icon" src={icon} alt="KramaTek icon"/>
        <div className="brand-copy">
          <strong>KramaTek</strong>
          <span>ANCIENT WISDOM. FUTURE INTELLIGENCE.</span>
        </div>
      </a>

      <nav className="desktop-nav nav-capsule">
        <div className="nav-group">
          <a className="nav-main nav-item-rich" href="/services">
            <span className="nav-symbol"><Sparkles size={16}/></span>
            <span>Services</span><ChevronDown size={14}/>
          </a>
          <div className="mega-wrap"><div className="mega services-mega">
            <div className="mega-intro">
              <span>OUR SERVICES</span>
              <h3>Technology services for complex enterprise environments.</h3>
              <p>AI, data, cloud, digital engineering and managed operations connected around business outcomes.</p>
              <a href="/services" className="mega-overview">View all services →</a>
            </div>
            <div className="mega-grid">
              {Object.entries(services).map(([slug,v])=><a key={slug} href={`/services/${slug}`}><strong>{v.title}</strong><small>{v.description}</small></a>)}
            </div>
          </div></div>
        </div>

        <div className="nav-group">
          <a className="nav-main nav-item-rich" href="/industries">
            <span className="nav-symbol"><Landmark size={16}/></span>
            <span>Industries</span><ChevronDown size={14}/>
          </a>
          <div className="mega-wrap"><div className="mega industry-mega">
            {Object.entries(industries).map(([slug,v])=><a key={slug} href={`/industries/${slug}`}><strong>{v.title}</strong><small>{v.description}</small></a>)}
          </div></div>
        </div>

        <a className="nav-item-rich" href="/platform"><span className="nav-symbol"><Layers3 size={16}/></span><span>Solutions</span></a>
        <a className="nav-item-rich" href="/why-kramatek"><span className="nav-symbol"><Lightbulb size={16}/></span><span>Why KramaTek</span></a>
        <a className="nav-item-rich" href="/insights"><span className="nav-symbol"><BookOpen size={16}/></span><span>Insights</span></a>
      </nav>

      <a className="contact-btn" href="/contact">Contact Us <ArrowUpRight size={15}/></a>
      <button className="menu-btn" onClick={()=>setMobile(v=>!v)} aria-label="Toggle menu">{mobile?<X/>:<Menu/>}</button>
    </div>

    {mobile&&<nav className="mobile-menu">
      <a href="/services">All Services</a>
      {Object.entries(services).map(([slug,v])=><a key={slug} href={`/services/${slug}`}>{v.title}</a>)}
      <div className="mobile-sep"/>
      <a href="/industries">Industries</a>
      <a href="/platform">Solutions</a>
      <a href="/why-kramatek">Why KramaTek</a>
      <a href="/insights">Insights</a>
      <a href="/contact">Contact</a>
    </nav>}
  </header>
}
