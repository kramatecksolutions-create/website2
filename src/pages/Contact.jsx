import React from 'react'
import { MapPin, Phone, Mail, Send } from 'lucide-react'

export default function Contact() {
  return <>
    <section className="contact-form-hero">
      <div className="container">
        <div className="contact-form-heading"><span>CONTACT KRAMATEK</span><h1>Get in touch with us</h1><p>Tell us what you are building, modernizing or trying to solve.</p></div>
        <form className="infronex-form" action="https://formsubmit.co/info@kramatek.com" method="POST">
          <input type="hidden" name="_subject" value="New KramaTek Website Inquiry"/>
          <input type="hidden" name="_template" value="table"/>
          <input type="text" name="_honey" style={{display:'none'}} tabIndex="-1" autoComplete="off"/>
          <div className="form-two"><input name="First name" placeholder="First name" required/><input name="Last name" placeholder="Last name" required/></div>
          <div className="form-two"><input name="Phone" type="tel" placeholder="Enter Your Phone No."/><input name="Email" type="email" placeholder="Enter Your E-mail" required/></div>
          <textarea name="Message" placeholder="Write Message" required></textarea>
          <button type="submit">Submit Message <Send size={17}/></button>
        </form>
      </div>
    </section>
    <section className="section contact-details-clean"><div className="container"><div className="section-heading centered"><div className="eyebrow">START A CONVERSATION</div><h2>Bring us the problem.</h2><p>AI, data, applications, cloud, quality engineering or operations — we can help shape the right path forward.</p></div><div className="contact-methods contact-three">
      <div className="contact-method"><span className="contact-method-icon"><MapPin size={22}/></span><div><strong>Office</strong><address><b>Awfis Premium Nordwest</b><br/>4th Floor, Nordwest, P Janardhan Reddy Nagar,<br/>Gachibowli, Hyderabad, Telangana 500081, India</address></div></div>
      <a className="contact-method" href="tel:+917780597811"><span className="contact-method-icon"><Phone size={22}/></span><div><strong>Phone</strong><span>+91 77805 97811</span></div></a>
      <a className="contact-method" href="mailto:info@kramatek.com"><span className="contact-method-icon"><Mail size={22}/></span><div><strong>Email</strong><span>info@kramatek.com</span></div></a>
    </div></div></section>
  </>
}
