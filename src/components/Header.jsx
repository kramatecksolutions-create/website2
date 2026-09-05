import React, { useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { ChevronDown, Menu, X, ArrowRight, Phone } from 'lucide-react'
import { logoDark } from '../assets/logos'
import { services, industries } from '../data/siteData'

const serviceEntries = Object.entries(services)
const industryEntries = Object.entries(industries)

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [mobileSection, setMobileSection] = useState(null)
  const { pathname } = useLocation()

  useEffect(() => { setMenuOpen(false); setMobileSection(null) }, [pathname])

  return (
    <>
      {/* Utility Bar */}
      <div className="utility-bar">
        <div className="utility-inner">
          <span>Ancient Wisdom. Future Intelligence.</span>
          <i />
          <span>Enterprise AI · Data Engineering · Digital Transformation</span>
          <div className="utility-right">
            <a href="tel:+918000000000"><Phone size={12}/> +91 80 0000 0000</a>
            <NavLink to="/contact">Get in Touch <ArrowRight size={12}/></NavLink>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="header">
        <nav className="nav">
          {/* Brand */}
          <NavLink to="/" className="brand">
            <img src={logoDark} alt="Krama Tech" />
          </NavLink>

          {/* Desktop Nav */}
          <div className="desktop-nav">
            {/* Services Mega */}
            <div className="nav-group">
              <button className="nav-toggle">
                Services <ChevronDown size={14} />
              </button>
              <div className="mega-menu services-mega">
                <div className="mega-intro">
                  <div className="eyebrow">WHAT WE DO</div>
                  <h3>Enterprise Technology Services</h3>
                  <p>AI, data engineering, digital transformation and managed services — delivered end-to-end from strategy to production.</p>
                  <NavLink to="/platform" className="btn outline" style={{ marginTop: 16, fontSize: 12, padding: '10px 14px' }}>
                    View Full Platform <ArrowRight size={14} />
                  </NavLink>
                </div>
                <div className="mega-links">
                  {serviceEntries.map(([slug, s]) => (
                    <NavLink key={slug} to={`/services/${slug}`} className="mega-link">
                      <strong>{s.title}</strong>
                      <small>{s.description.slice(0, 70)}…</small>
                    </NavLink>
                  ))}
                </div>
              </div>
            </div>

            {/* Industries Mega */}
            <div className="nav-group">
              <button className="nav-toggle">
                Industries <ChevronDown size={14} />
              </button>
              <div className="mega-menu industry-mega">
                {industryEntries.map(([slug, ind]) => (
                  <NavLink key={slug} to={`/industries/${slug}`} className="mega-link">
                    <strong>{ind.title}</strong>
                    <small>{ind.description.slice(0, 60)}…</small>
                  </NavLink>
                ))}
              </div>
            </div>

            <NavLink to="/platform" className="nav-link">Platform</NavLink>
            <NavLink to="/why-kramatek" className="nav-link">Why Krama Tech</NavLink>
            <NavLink to="/insights" className="nav-link">Insights</NavLink>

            <NavLink to="/contact" className="nav-contact">
              Contact Us <ArrowRight size={15} />
            </NavLink>
          </div>

          {/* Mobile Toggle */}
          <button className="menu-btn" onClick={() => setMenuOpen(v => !v)} aria-label="Menu">
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
          <NavLink to="/">Home</NavLink>
          <div className="mobile-label">SERVICES</div>
          {serviceEntries.map(([slug, s]) => (
            <NavLink key={slug} to={`/services/${slug}`}>{s.title}</NavLink>
          ))}
          <div className="mobile-divider" />
          <div className="mobile-label">INDUSTRIES</div>
          {industryEntries.map(([slug, ind]) => (
            <NavLink key={slug} to={`/industries/${slug}`}>{ind.title}</NavLink>
          ))}
          <div className="mobile-divider" />
          <NavLink to="/platform">Platform</NavLink>
          <NavLink to="/why-kramatek">Why Krama Tech</NavLink>
          <NavLink to="/insights">Insights</NavLink>
          <NavLink to="/contact" className="mobile-cta">Contact Us →</NavLink>
        </div>
      </header>
    </>
  )
}
