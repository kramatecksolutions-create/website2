import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, CheckCircle2 } from 'lucide-react'

const offices = [
  { city: 'Bengaluru', tag: 'HQ', address: 'Prestige Tech Park, Outer Ring Road, Bengaluru 560103' },
  { city: 'Delhi NCR', address: 'DLF Cybercity, Phase III, Gurgaon 122002' },
  { city: 'Mumbai', address: 'Bandra Kurla Complex, Mumbai 400051' },
  { city: 'Singapore', address: 'One Raffles Quay, Singapore 048583' },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', company: '', service: '', message: '' })
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSending(true)
    // Simulate async submission
    setTimeout(() => { setSending(false); setSent(true) }, 1200)
  }

  const handleChange = e => setForm(p => ({ ...p, [e.target.name]: e.target.value }))

  return (
    <>
      {/* Hero */}
      <section className="page-hero">
        <div className="container">
          <div className="eyebrow" style={{ marginBottom: 14 }}>CONTACT</div>
          <h1 style={{ maxWidth: 720, fontSize: 'clamp(52px, 6vw, 84px)' }}>
            Let's talk about<br />your challenges.
          </h1>
          <p style={{ maxWidth: 580, marginTop: 16, fontSize: 17 }}>
            No boilerplate discovery forms or generic RFP responses. A direct conversation with people who understand enterprise technology in India.
          </p>
          <div style={{ display: 'flex', gap: 20, marginTop: 28, flexWrap: 'wrap' }}>
            {[
              { icon: Clock, text: 'Response within 4 business hours' },
              { icon: CheckCircle2, text: 'No obligation, no sales pitch' },
            ].map(({ icon: Icon, text }) => (
              <div key={text} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13.5, color: 'var(--text)', fontWeight: 600 }}>
                <Icon size={16} style={{ color: 'var(--orange)' }} />
                {text}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="section contact-bg">
        <div className="container">
          <div className="contact-grid">
            {/* Left — info */}
            <div className="contact-text">
              <div className="eyebrow">GET IN TOUCH</div>
              <h2>Start the conversation</h2>
              <p>Whether you have a specific project in mind or are just exploring what's possible, we're ready to listen first.</p>

              <div className="contact-detail">
                <Phone size={16} />
                <div>
                  <div style={{ fontSize: 11, fontWeight: 800, color: 'var(--muted)', letterSpacing: '.12em', marginBottom: 3 }}>PHONE</div>
                  <a href="tel:+918000000000" style={{ fontSize: 16, fontWeight: 700 }}>+91 80 0000 0000</a>
                </div>
              </div>
              <div className="contact-detail">
                <Mail size={16} />
                <div>
                  <div style={{ fontSize: 11, fontWeight: 800, color: 'var(--muted)', letterSpacing: '.12em', marginBottom: 3 }}>EMAIL</div>
                  <a href="mailto:hello@kramatech.ai" style={{ fontSize: 16, fontWeight: 700 }}>hello@kramatech.ai</a>
                </div>
              </div>

              {/* Offices */}
              <div style={{ marginTop: 36 }}>
                <div className="eyebrow" style={{ marginBottom: 18 }}>OUR OFFICES</div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                  {offices.map(({ city, tag, address }) => (
                    <div key={city} style={{ padding: '16px 18px', borderRadius: 14, background: 'var(--cream)', border: '1px solid var(--line)' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
                        <span style={{ fontSize: 14, fontWeight: 800, color: 'var(--ink)' }}>{city}</span>
                        {tag && <span style={{ fontSize: 9, fontWeight: 800, background: 'var(--orange)', color: '#fff', padding: '2px 7px', borderRadius: 4 }}>{tag}</span>}
                      </div>
                      <p style={{ fontSize: 12, color: 'var(--muted)', lineHeight: 1.5 }}>{address}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right — form */}
            <div className="contact-form-panel">
              <h3>Send us a message</h3>
              {sent ? (
                <motion.div
                  className="form-success"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <CheckCircle2 size={20} />
                  Thank you — we'll be in touch within 4 business hours.
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                  <div className="form-row">
                    <div className="form-group">
                      <label>Your Name *</label>
                      <input
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="Priya Sharma"
                      />
                    </div>
                    <div className="form-group">
                      <label>Work Email *</label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        placeholder="priya@company.com"
                      />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label>Company *</label>
                      <input
                        name="company"
                        value={form.company}
                        onChange={handleChange}
                        required
                        placeholder="Organisation name"
                      />
                    </div>
                    <div className="form-group">
                      <label>Area of Interest</label>
                      <select name="service" value={form.service} onChange={handleChange}>
                        <option value="">Select a service</option>
                        <option>AI Solutions</option>
                        <option>Data Engineering</option>
                        <option>Analytics & Intelligence</option>
                        <option>Digital Transformation</option>
                        <option>Staff Augmentation</option>
                        <option>Managed Services</option>
                        <option>Not sure yet</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Tell us about your challenge *</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      placeholder="Briefly describe what you're trying to achieve or the problem you're facing…"
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn primary"
                    style={{ alignSelf: 'flex-start', marginTop: 4 }}
                    disabled={sending}
                  >
                    {sending ? 'Sending…' : 'Send Message'}
                  </button>
                  <p style={{ fontSize: 11.5, color: 'var(--muted)', lineHeight: 1.5 }}>
                    Your information is handled securely and never shared with third parties. By submitting, you agree to our Privacy Policy.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
