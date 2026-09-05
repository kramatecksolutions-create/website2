import React from 'react'
import { NavLink } from 'react-router-dom'
import { Linkedin, Twitter, Mail, MapPin, Phone } from 'lucide-react'
import { logoLight } from '../assets/logos'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand */}
          <div>
            <img src={logoLight} alt="Krama Tech" className="footer-logo-img" />
            <p className="footer-tagline">
              Ancient Wisdom. Future Intelligence.<br />
              Enterprise AI, data engineering and digital transformation — built for India's complex, high-stakes environments.
            </p>
            <div className="footer-socials">
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="social-btn" aria-label="LinkedIn">
                <Linkedin size={16} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="social-btn" aria-label="Twitter">
                <Twitter size={16} />
              </a>
              <a href="mailto:hello@kramatech.ai" className="social-btn" aria-label="Email">
                <Mail size={16} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4>SERVICES</h4>
            <NavLink to="/services/ai-solutions">AI Solutions</NavLink>
            <NavLink to="/services/data-engineering">Data Engineering</NavLink>
            <NavLink to="/services/analytics-intelligence">Analytics & Intelligence</NavLink>
            <NavLink to="/services/digital-transformation">Digital Transformation</NavLink>
            <NavLink to="/services/staff-augmentation">Staff Augmentation</NavLink>
            <NavLink to="/services/managed-services">Managed Services</NavLink>
          </div>

          {/* Industries */}
          <div>
            <h4>INDUSTRIES</h4>
            <NavLink to="/industries/government">Government & Public Sector</NavLink>
            <NavLink to="/industries/telecom">Telecom & Communications</NavLink>
            <NavLink to="/industries/healthcare">Healthcare</NavLink>
            <NavLink to="/industries/financial-services">Financial Services (BFSI)</NavLink>
            <NavLink to="/industries/enterprise">Enterprise & Digital Business</NavLink>
          </div>

          {/* Company */}
          <div>
            <h4>COMPANY</h4>
            <NavLink to="/platform">Platform</NavLink>
            <NavLink to="/why-kramatek">Why Krama Tech</NavLink>
            <NavLink to="/insights">Insights</NavLink>
            <NavLink to="/contact">Contact Us</NavLink>

            <div style={{ marginTop: 24 }}>
              <h4>CONTACT</h4>
              <div className="contact-detail" style={{ marginTop: 8 }}>
                <MapPin size={13} style={{ color: '#e8820c', flexShrink: 0, marginTop: 2 }} />
                <span style={{ fontSize: 13, color: '#9a8070', lineHeight: 1.5 }}>
                  Prestige Tech Park, Bengaluru 560103<br />
                  DLF Cybercity, Gurgaon · Bandra Kurla, Mumbai
                </span>
              </div>
              <div className="contact-detail" style={{ marginTop: 10 }}>
                <Phone size={13} style={{ color: '#e8820c', flexShrink: 0 }} />
                <a href="tel:+918000000000" style={{ fontSize: 13, color: '#9a8070' }}>+91 80 0000 0000</a>
              </div>
              <div className="contact-detail" style={{ marginTop: 8 }}>
                <Mail size={13} style={{ color: '#e8820c', flexShrink: 0 }} />
                <a href="mailto:hello@kramatech.ai" style={{ fontSize: 13, color: '#9a8070' }}>hello@kramatech.ai</a>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 Krama Tech Private Limited. All rights reserved. | Made in India 🇮🇳</span>
          <div className="footer-badges">
            <span className="badge">ISO 27001</span>
            <span className="badge">SOC 2</span>
            <span className="badge">CERT-In</span>
            <span className="badge">DPDP Act</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
