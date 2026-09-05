import React,{useState} from 'react'
import {ChevronDown,Menu,X,ArrowUpRight} from 'lucide-react'
import {services,industries} from '../data/siteData'
import brandIcon from '../assets/brand/favicon.png'

const A=({href,className,children,onClick})=><a href={href} className={className} onClick={onClick}>{children}</a>

export default function Header(){
 const [open,setOpen]=useState(false)
 return <>
  <div className="utility"><div className="utility-inner"><span>ENTERPRISE AI</span><i/><span>DATA & ANALYTICS</span><i/><span>CLOUD & DIGITAL ENGINEERING</span><a href="mailto:info@kramatek.com">info@kramatek.com <ArrowUpRight size={12}/></a></div></div>
  <header className="header"><div className="nav">
   <A className="brand-v8" href="/"><span className="brand-icon-v8"><img src={brandIcon} alt=""/></span><span className="brand-copy-v8"><strong>KramaTek</strong><small>ANCIENT WISDOM. FUTURE INTELLIGENCE.</small></span></A>
   <nav className="desktop-nav">
    <div className="nav-group"><a className="nav-main-v8" href="/services/ai-solutions">Services <ChevronDown size={14}/></a><div className="mega service-mega"><div className="mega-intro"><span>OUR SERVICES</span><h3>Technology services for complex enterprise environments.</h3><p>AI, data, cloud, digital engineering and managed operations connected around business outcomes.</p><a className="mega-cta" href="/services/ai-solutions">Explore services →</a></div><div className="mega-links">{Object.entries(services).map(([slug,v])=><A key={slug} href={`/services/${slug}`}><strong>{v.title}</strong><small>{v.description}</small></A>)}</div></div></div>
    <div className="nav-group"><a className="nav-main-v8" href="/industries/government">Industries <ChevronDown size={14}/></a><div className="mega industry-mega">{Object.entries(industries).map(([slug,v])=><A key={slug} href={`/industries/${slug}`}><strong>{v.title}</strong><small>{v.description}</small></A>)}</div></div>
    <A href="/platform">Solutions</A><A href="/why-kramatek">Why KramaTek</A><A href="/insights">Insights</A>
   </nav>
   <A className="contact-btn" href="/contact">Contact Us <ArrowUpRight size={15}/></A>
   <button className="menu-btn" onClick={()=>setOpen(!open)} aria-label="Menu">{open?<X/>:<Menu/>}</button>
  </div>{open&&<div className="mobile-menu">{Object.entries(services).map(([s,v])=><A onClick={()=>setOpen(false)} key={s} href={`/services/${s}`}>{v.title}</A>)}<A onClick={()=>setOpen(false)} href="/industries/government">Industries</A><A onClick={()=>setOpen(false)} href="/platform">Solutions</A><A onClick={()=>setOpen(false)} href="/why-kramatek">Why KramaTek</A><A onClick={()=>setOpen(false)} href="/insights">Insights</A><A onClick={()=>setOpen(false)} href="/contact">Contact</A></div>}</header>
 </>
}
