
import React,{useState} from 'react'
import {NavLink} from 'react-router-dom'
import {ChevronDown,Menu,X,ArrowUpRight} from 'lucide-react'
import brandLogo from '../assets/kramatek-brand.png'
import {services,industries} from '../data/siteData'

export default function Header(){
 const [mobileOpen,setMobileOpen]=useState(false)
 return <>
  <div className="utility"><div className="utility-inner">
   <span>ENTERPRISE AI</span><i/><span>DATA & ANALYTICS</span><i/><span>CLOUD & DIGITAL ENGINEERING</span>
   <a href="mailto:info@kramatek.com">info@kramatek.com <ArrowUpRight size={12}/></a>
  </div></div>
  <header className="header">
   <div className="nav">
    <NavLink to="/" className="brand"><img src={brandLogo} alt="KramaTek"/></NavLink>

    <nav className="desktop-nav">
      <div className="nav-group">
        <NavLink className="nav-main" to="/services/ai-solutions">Services <ChevronDown size={15}/></NavLink>
        <div className="mega services-mega">
          <div className="mega-intro"><span>OUR SERVICES</span><h3>Technology services for complex enterprise environments.</h3><p>AI, data, digital engineering and managed operations connected around business outcomes.</p></div>
          <div className="mega-grid">{Object.entries(services).map(([slug,v])=><NavLink key={slug} to={`/services/${slug}`}><strong>{v.title}</strong><small>{v.description}</small></NavLink>)}</div>
        </div>
      </div>

      <div className="nav-group">
        <NavLink className="nav-main" to="/industries/government">Industries <ChevronDown size={15}/></NavLink>
        <div className="mega industry-mega">{Object.entries(industries).map(([slug,v])=><NavLink key={slug} to={`/industries/${slug}`}><strong>{v.title}</strong><small>{v.description}</small></NavLink>)}</div>
      </div>

      <NavLink to="/platform">Solutions</NavLink>
      <NavLink to="/why-kramatek">Why KramaTek</NavLink>
      <NavLink to="/insights">Insights</NavLink>
    </nav>

    <NavLink className="contact-btn" to="/contact">Contact Us <ArrowUpRight size={15}/></NavLink>
    <button className="menu-btn" aria-label="Menu" onClick={()=>setMobileOpen(v=>!v)}>{mobileOpen?<X/>:<Menu/>}</button>
   </div>

   {mobileOpen&&<nav className="mobile-menu">
      <div className="mobile-label">SERVICES</div>
      {Object.entries(services).map(([slug,v])=><NavLink onClick={()=>setMobileOpen(false)} key={slug} to={`/services/${slug}`}>{v.title}</NavLink>)}
      <div className="mobile-label">EXPLORE</div>
      <NavLink onClick={()=>setMobileOpen(false)} to="/platform">Solutions</NavLink>
      <NavLink onClick={()=>setMobileOpen(false)} to="/why-kramatek">Why KramaTek</NavLink>
      <NavLink onClick={()=>setMobileOpen(false)} to="/insights">Insights</NavLink>
      <NavLink onClick={()=>setMobileOpen(false)} to="/contact">Contact</NavLink>
   </nav>}
  </header>
 </>
}
