import React,{useState} from 'react'
import {ChevronDown, ArrowRight} from 'lucide-react'

const roles=[
  {title:'AI Engineer',summary:'Build intelligent enterprise solutions that connect AI to real business workflows.',items:['Build and integrate AI/LLM solutions, RAG, agents, APIs, and automation workflows.','Work with cloud AI platforms and enterprise applications.'],skills:'Python/Java, APIs, LLMs, RAG, vector databases, AWS/Azure/GCP.'},
  {title:'Product Manager',summary:'Shape useful products from customer problem through roadmap, release and feedback.',items:['Define product vision, roadmap, requirements, and priorities.','Work with customers, engineering, design, and business teams.','Own product documentation, feature planning, releases, and feedback.'],skills:'Product strategy, Agile, Jira, stakeholder management; AI/SaaS experience preferred.'},
  {title:'Operations Engineer',summary:'Keep modern cloud platforms reliable, observable and ready to scale.',items:['Support cloud infrastructure, deployments, monitoring, reliability, and incident management.','Automate operational tasks and improve system performance.'],skills:'AWS/Azure/GCP, Linux, Docker/Kubernetes, CI/CD, monitoring, scripting.'}
]

export default function Careers(){
  const [applyRole,setApplyRole]=useState('')
  const [openRole,setOpenRole]=useState(0)
  const [status,setStatus]=useState('')
  const [submitting,setSubmitting]=useState(false)

  async function submitApplication(e){
    e.preventDefault()
    setSubmitting(true); setStatus('')
    const form=e.currentTarget
    const data=new FormData(form)
    try{
      const response=await fetch('https://formsubmit.co/ajax/info@kramatek.com',{
        method:'POST',
        headers:{'Accept':'application/json'},
        body:data
      })
      if(!response.ok) throw new Error('submit failed')
      form.reset()
      setStatus('Thank you for submitting your application. We will get back to you soon.')
    }catch(err){
      setStatus('We could not submit the application right now. Please try again or email info@kramatek.com.')
    }finally{setSubmitting(false)}
  }

  return <>
    <section className="careers-hero"><div className="container"><span className="eyebrow">CAREERS AT KRAMATEK</span><h1>Build what’s next<br/><em>with us.</em></h1><p>Join a team working across AI, product engineering, quality engineering and operations to turn complex enterprise problems into dependable technology.</p></div></section>

    <section className="section careers-section"><div className="container">
      <div className="section-heading careers-heading"><div><span className="eyebrow">OPEN POSITIONS</span><h2>Find your next role.</h2></div><p>We’re looking for practical builders who care about strong engineering, useful products and reliable outcomes.</p></div>
      <div className="career-list">{roles.map((r,i)=>{const isOpen=openRole===i;return <article className={`career-row ${isOpen?'open':''}`} key={r.title}>
        <div className="career-row-main">
          <button type="button" className="career-expand" aria-expanded={isOpen} onClick={()=>setOpenRole(isOpen?-1:i)}>
            <span className="career-row-number">0{i+1}</span><span className="career-row-title"><strong>{r.title}</strong><small>{r.summary}</small></span><ChevronDown className="career-chevron" size={24}/>
          </button>
          <button type="button" className="career-row-apply" onClick={()=>{setApplyRole(r.title);setStatus('');setTimeout(()=>document.getElementById('career-application')?.scrollIntoView({behavior:'smooth'}),50)}}>Apply <ArrowRight size={17}/></button>
        </div>
        {isOpen&&<div className="career-row-details"><div><strong>Responsibilities</strong><ul>{r.items.map(x=><li key={x}>{x}</li>)}</ul></div><div className="career-row-skills"><strong>Skills</strong><p>{r.skills}</p></div></div>}
      </article>})}</div>

      <div id="career-application" className="career-application-panel">
        <div className="career-application-copy"><span className="eyebrow">APPLICATION</span><h2>{applyRole ? `Apply for ${applyRole}` : 'Apply to KramaTek'}</h2><p>Share your contact information and resume. Your application will be sent to our team at info@kramatek.com.</p></div>
        <form className="career-application-form" onSubmit={submitApplication} encType="multipart/form-data">
          <input type="hidden" name="_subject" value={`KramaTek Career Application${applyRole ? ` - ${applyRole}` : ''}`}/>
          <input type="hidden" name="Role" value={applyRole || 'General Application'}/>
          <input type="text" name="_honey" style={{display:'none'}} tabIndex="-1" autoComplete="off"/>
          <div className="form-two"><input name="Name" placeholder="Full name" required/><input name="Email" type="email" placeholder="Email address" required/></div>
          <div className="form-two"><input name="Phone" type="tel" placeholder="Phone number"/><input name="Location" placeholder="Current location"/></div>
          <label className="resume-field"><span>Resume</span><input name="attachment" type="file" accept=".pdf,.doc,.docx" required/><small>PDF, DOC or DOCX</small></label>
          <textarea name="Message" placeholder="Tell us briefly about your experience or interest in this role"></textarea>
          <button type="submit" disabled={submitting}>{submitting?'Submitting...':'Submit Application'} <ArrowRight size={18}/></button>
          {status && <div className="form-status" role="status">{status}</div>}
        </form>
      </div>
    </div></section>
  </>
}