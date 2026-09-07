import React from 'react'
import { MapPin, Phone, Mail, ArrowRight } from 'lucide-react'
import PageHero from '../components/PageHero'
import { specialImages } from '../data/siteData'

export default function Contact() {
  return (
    <>
      <PageHero
        eyebrow="CONTACT"
        title="Let's discuss what you're building."
        description="Whether you are shaping an AI initiative, modernizing a platform or transforming an operational workflow, we can help define the next step."
        image={specialImages.contactImage}
      />

      <section className="section">
        <div className="container contact-grid">
          <div>
            <div className="eyebrow">START A CONVERSATION</div>
            <h2>Bring us the problem.</h2>
            <p className="contact-intro">
              A useful first discussion covers the business objective, current systems and data,
              users, constraints and measurable outcome.
            </p>

            <div className="contact-visual">
              <img src={specialImages.contactDetail} alt="KramaTek technology consulting team collaboration" />
            </div>

            <div className="contact-methods">
              <div className="contact-method">
                <span className="contact-method-icon"><MapPin size={22} /></span>
                <div>
                  <strong>Office</strong>
                  <address>
                    <b>Awfis Premium Nordwest,</b><br />
                    4th Floor, Nordwest,<br />
                    P Janardhan Reddy Nagar, Gachibowli,<br />
                    Hyderabad, Telangana 500081,<br />
                    India
                  </address>
                </div>
              </div>

              <a className="contact-method" href="tel:+917780597811">
                <span className="contact-method-icon"><Phone size={22} /></span>
                <div><strong>Phone</strong><span>+91 77805 97811</span></div>
              </a>

              <a className="contact-method" href="mailto:info@kramatek.com">
                <span className="contact-method-icon"><Mail size={22} /></span>
                <div><strong>Email</strong><span>info@kramatek.com</span></div>
              </a>
            </div>

            <div className="hero-actions">
              <a
                className="btn primary"
                href="https://outlook.office.com/mail/deeplink/compose?to=info%40kramatek.com&subject=KramaTek%20Project%20Inquiry"
                target="_blank"
                rel="noopener noreferrer"
              >
                Email KramaTek <ArrowRight size={17} />
              </a>
              <a className="btn secondary" href="/">Back to Home</a>
            </div>
          </div>

          <div className="contact-guide">
            <h3>Good starting points</h3>
            <ul>
              <li>Enterprise AI, RAG or agentic AI</li>
              <li>Data engineering and analytics modernization</li>
              <li>Computer vision or operational intelligence</li>
              <li>Workflow automation and integration</li>
              <li>Cloud or application modernization</li>
              <li>Managed services or specialized delivery capacity</li>
            </ul>

            <div className="contact-guide-section">
              <h3>What to bring</h3>
              <p>You don't need a finished requirement. Start with what you know.</p>
              <ul>
                <li>A business problem or opportunity</li>
                <li>An existing process that needs improvement</li>
                <li>A system or architecture challenge</li>
                <li>An AI idea you want to validate</li>
              </ul>
            </div>

            <div className="contact-guide-section">
              <h3>What happens next</h3>
              <div className="contact-step">
                <strong>01 — Discover</strong>
                <p>Understand the problem, users and current environment.</p>
              </div>
              <div className="contact-step">
                <strong>02 — Shape</strong>
                <p>Define the right solution, architecture and delivery approach.</p>
              </div>
              <div className="contact-step">
                <strong>03 — Build</strong>
                <p>Move from PoC to production with measurable outcomes.</p>
              </div>
            </div>

            <div className="contact-guide-callout">
              <strong>Not sure where to start?</strong>
              <p>That's fine. Start with the problem — we'll help shape the path forward.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
