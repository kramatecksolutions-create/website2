import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import {ChevronDown,Menu,X,ArrowUpRight} from 'lucide-react'
import {services,industries} from '../data/siteData'

export default function Header(){
 const [open,setOpen]=useState(false)
 return <>
  <div className="utility"><div className="utility-inner"><span>ENTERPRISE AI</span><i/> <span>DATA & ANALYTICS</span><i/> <span>CLOUD & DIGITAL ENGINEERING</span><a href="mailto:info@kramatek.com">info@kramatek.com <ArrowUpRight size={12}/></a></div></div>
  <header className="header"><div className="nav">
   <Link className="brand" to="/"><span className="brand-shell"><img src="/assets/krama-logo-header.png" alt="KramaTek"/></span></Link>
   <nav className="desktop-nav">
    <div className="nav-group"><button>Services <ChevronDown size={14}/></button><div className="mega service-mega"><div className="mega-intro"><span>OUR SERVICES</span><h3>Technology services for complex enterprise environments.</h3><p>AI, data, cloud, digital engineering and managed operations connected around business outcomes.</p></div><div className="mega-links">{Object.entries(services).map(([slug,v])=><Link key={slug} to={`/services/${slug}`}><strong>{v.title}</strong><small>{v.description}</small></Link>)}</div></div></div>
    <div className="nav-group"><button>Industries <ChevronDown size={14}/></button><div className="mega industry-mega">{Object.entries(industries).map(([slug,v])=><Link key={slug} to={`/industries/${slug}`}><strong>{v.title}</strong><small>{v.description}</small></Link>)}</div></div>
    <Link to="/platform">Solutions</Link><Link to="/why-kramatek">Why KramaTek</Link><Link to="/insights">Insights</Link>
   </nav>
   <Link className="contact-btn" to="/contact">Contact Us <ArrowUpRight size={15}/></Link><button className="menu-btn" onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button>
  </div>{open&&<div className="mobile-menu">{Object.entries(services).map(([s,v])=><Link onClick={()=>setOpen(false)} key={s} to={`/services/${s}`}>{v.title}</Link>)}<Link onClick={()=>setOpen(false)} to="/platform">Solutions</Link><Link onClick={()=>setOpen(false)} to="/why-kramatek">Why KramaTek</Link><Link onClick={()=>setOpen(false)} to="/insights">Insights</Link><Link onClick={()=>setOpen(false)} to="/contact">Contact</Link></div>}</header>
 </>
}
