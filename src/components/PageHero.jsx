import React from 'react'
import { NavLink } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function PageHero({ eyebrow, title, description, image, ctaText = 'Talk to an Expert', ctaTo = '/contact', secondaryText, secondaryTo }) {
  return (
    <section className="page-hero">
      <div className="container">
        <div className="page-hero-grid">
          <div>
            {eyebrow && <div className="eyebrow" style={{ marginBottom: 14 }}>{eyebrow}</div>}
            <h1>{title}</h1>
            {description && <p style={{ marginTop: 16, fontSize: 17 }}>{description}</p>}
            <div className="page-hero-actions">
              <NavLink to={ctaTo} className="btn dark-btn">
                {ctaText} <ArrowRight size={16} />
              </NavLink>
              {secondaryText && secondaryTo && (
                <NavLink to={secondaryTo} className="btn outline">{secondaryText}</NavLink>
              )}
            </div>
          </div>
          {image && (
            <div className="page-hero-visual">
              <img src={image} alt={title} />
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
