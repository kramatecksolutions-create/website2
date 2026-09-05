import React from 'react'
import { NavLink } from 'react-router-dom'
import { ArrowRight, Home } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="not-found">
      <div>
        <h1>404</h1>
        <h2>Page not found</h2>
        <p>The page you're looking for doesn't exist or may have moved.</p>
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
          <NavLink to="/" className="btn primary">
            <Home size={16} /> Back to Home
          </NavLink>
          <NavLink to="/contact" className="btn outline">
            Contact Us <ArrowRight size={16} />
          </NavLink>
        </div>
      </div>
    </div>
  )
}
