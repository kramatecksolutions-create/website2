import React,{useState} from 'react'
import {Menu,X,ChevronDown} from 'lucide-react'
import logo from '../assets/brand/kramatek-logo-selected.png'
import {services,industries} from '../data/siteData'

export default function Header(){
  const [mobile,setMobile]=useState(false)
  return <header className="header clean-header">
    <div className="nav clean-nav">
      <a href="/" className="clean-brand" aria-label="KramaTek Home"><img src={logo} alt="KramaTek — Ancient Wisdom. Future Intelligence."/></a>
      <nav className="desktop-nav clean-links">
        <a href="/">Home</a>
        <a href="/why-kramatek">About Us</a>
        <div className="nav-group"><a className="nav-main" href="/services">Services <ChevronDown size={15}/></a><div className="mega-wrap"><div className="mega services-mega"><div className="mega-intro"><span>OUR SERVICES</span><h3>Technology services for complex enterprise environments.</h3><p>AI, data, cloud, digital engineering and managed operations connected around business outcomes.</p><a href="/services" className="mega-overview">View all services →</a></div><div className="mega-grid">{Object.entries(services).map(([slug,v])=><a key={slug} href={`/services/${slug}`}><strong>{v.title}</strong><small>{v.description}</small></a>)}</div></div></div></div>
        <a href="/platform">Solutions</a>
        <div className="nav-group"><a className="nav-main" href="/industries">Industries <ChevronDown size={15}/></a><div className="mega-wrap"><div className="mega industry-mega">{Object.entries(industries).filter(([slug])=>slug!=='government').map(([slug,v])=><a key={slug} href={`/industries/${slug}`}><strong>{v.title}</strong><small>{v.description}</small></a>)}</div></div></div>
        <a href="/insights">Insights</a>
        <a href="/careers">Careers</a>
        <a href="/contact" className="nav-contact">Contact <span>→</span></a>
      </nav>
      <button className="menu-btn" onClick={()=>setMobile(v=>!v)} aria-label="Toggle menu">{mobile?<X/>:<Menu/>}</button>
    </div>
    {mobile&&<nav className="mobile-menu"><a href="/">Home</a><a href="/why-kramatek">About Us</a><a href="/services">Services</a><a href="/platform">Solutions</a><a href="/industries">Industries</a><a href="/insights">Insights</a><a href="/careers">Careers</a><a href="/contact" className="nav-contact">Contact <span>→</span></a></nav>}
  </header>
}
