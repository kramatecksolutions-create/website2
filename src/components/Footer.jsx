
import React from 'react'
import {NavLink} from 'react-router-dom'
import brandLogo from '../assets/kramatek-brand.png'
export default function Footer(){return <footer className="footer"><div className="container footer-grid">
<div><img className="footer-logo" src={brandLogo} alt="KramaTek"/><p>Enterprise AI, data intelligence, digital engineering and managed technology services.</p></div>
<div><h4>Services</h4><NavLink to="/services/ai-solutions">AI Solutions</NavLink><NavLink to="/services/data-engineering">Data Engineering</NavLink><NavLink to="/services/digital-transformation">Digital Transformation</NavLink></div>
<div><h4>Explore</h4><NavLink to="/platform">Solutions</NavLink><NavLink to="/why-kramatek">Why KramaTek</NavLink><NavLink to="/insights">Insights</NavLink></div>
<div><h4>Connect</h4><a href="mailto:info@kramatek.com">info@kramatek.com</a><NavLink to="/contact">Contact Us</NavLink></div>
</div><div className="container footer-bottom">© 2026 KramaTek · Ancient Wisdom. Future Intelligence.</div></footer>}
