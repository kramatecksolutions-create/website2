export const clients = [
  {src:'client-sira.png', alt:'SiRA'},
  {src:'client-fruges.png', alt:'Fruges'},
  {src:'client-ventley.png', alt:'Ventley Tech'},
  {src:'client-quanteon.png', alt:'Quanteon'},
  {src:'client-alphasmart.png', alt:'Alphasmart Solutions'},
  {src:'client-technodrive.png', alt:'Technodrive Software Solutions'}
]

export const services = {
  'ai-solutions': {
    title:'AI Solutions', eyebrow:'AI & INTELLIGENCE',
    description:'Move from isolated AI experiments to secure, integrated enterprise intelligence that improves real operating workflows.',
    image:'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1600&q=85',
    capabilities:[
      ['Enterprise GenAI & RAG','Ground assistants in approved enterprise knowledge, structured data and operational context.'],
      ['Agentic AI','Orchestrate tools, APIs and workflows while retaining human control for sensitive decisions.'],
      ['Computer Vision','Turn video and imagery into operational signals, safety events and measurable intelligence.'],
      ['AI Evaluation & Governance','Measure retrieval quality, model behavior, safety, cost and business performance before scale.']
    ],
    outcomes:['Faster access to enterprise knowledge','Reduced repetitive manual work','More consistent decision support','Governed AI adoption across teams']
  },
  'data-engineering': {
    title:'Data Engineering', eyebrow:'DATA & ANALYTICS',
    description:'Build trusted, scalable data foundations that support analytics, AI, automation and modern digital operations.',
    image:'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=85',
    capabilities:[
      ['Modern Data Platforms','Lakehouse, warehouse and cloud-native analytical foundations for enterprise workloads.'],
      ['Data Pipelines','Batch, streaming, CDC, ETL/ELT and event-driven ingestion patterns.'],
      ['Data Quality & Observability','Lineage, freshness, contracts, schema monitoring and issue detection.'],
      ['Data Integration','APIs, events and reusable data services across enterprise systems.']
    ],
    outcomes:['Reliable data for AI and analytics','Faster onboarding of new data sources','Improved data quality and observability','Reusable enterprise integration patterns']
  },
  'analytics-intelligence': {
    title:'Analytics & Intelligence', eyebrow:'DATA & ANALYTICS',
    description:'Turn operational and business data into clear signals, forecasts, anomalies and better decisions.',
    image:'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=85',
    capabilities:[
      ['Business Intelligence','Executive and operational dashboards designed around decisions, not just reporting.'],
      ['Predictive Analytics','Forecast demand, risk, capacity, service conditions and emerging trends.'],
      ['Anomaly Detection','Detect unusual patterns and prioritize the situations that need attention.'],
      ['Text & Conversation Analytics','Classify, summarize and extract themes, sentiment and resolution signals from large text datasets.']
    ],
    outcomes:['Clear executive visibility','Earlier detection of operational issues','More useful forecasting and planning','Actionable insights from unstructured data']
  },
  'digital-transformation': {
    title:'Digital Transformation', eyebrow:'DIGITAL ENGINEERING',
    description:'Modernize applications, workflows and platforms without disrupting critical business operations.',
    image:'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1600&q=85',
    capabilities:[
      ['Application Modernization','Refactor, replatform or replace legacy applications using pragmatic migration paths.'],
      ['Cloud & Platform Engineering','Build scalable cloud foundations with CI/CD, IaC, observability and resilience.'],
      ['Workflow Automation','Reduce repetitive manual work through orchestration, APIs and intelligent workflows.'],
      ['Digital Experience','Create modern web, mobile and portal experiences connected to real backend capabilities.']
    ],
    outcomes:['Lower operational friction','Faster product and feature delivery','Modern cloud-ready applications','Connected customer and employee experiences']
  },
  'staff-augmentation': {
    title:'Staff Augmentation', eyebrow:'CONSULTING',
    description:'Add specialized engineering, architecture, data, cloud and AI capacity to critical technology programs.',
    image:'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=85',
    capabilities:[
      ['AI & ML Specialists','GenAI, RAG, computer vision and applied machine-learning expertise.'],
      ['Data Engineers','Pipelines, platforms, analytics engineering and enterprise integration.'],
      ['Cloud & DevOps','Cloud, platform, infrastructure automation and delivery engineering.'],
      ['Solution Architects','Senior architecture leadership for complex cross-system initiatives.']
    ],
    outcomes:['Flexible capacity for critical initiatives','Specialized skills without long ramp-up','Stronger architecture and delivery quality','Knowledge transfer into internal teams']
  },
  'managed-services': {
    title:'Managed Services', eyebrow:'OPERATIONS',
    description:'Operate, observe and continuously improve business-critical applications, data, automation and intelligent systems.',
    image:'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1600&q=85',
    capabilities:[
      ['Platform Operations','Monitoring, incident support, release support and capacity management.'],
      ['Data Operations','Pipeline monitoring, recovery, freshness and data-quality controls.'],
      ['AI Operations','RAG quality, model telemetry, evaluation and governance.'],
      ['Reliability Engineering','SLOs, alerting, root-cause analysis, automation and resilient design.']
    ],
    outcomes:['Higher platform reliability','Faster incident response','Continuous operational improvement','Clear ownership and observability']
  }
}

export const industries = {
  government:{title:'Government & Public Sector',description:'Operational intelligence, digital services, safety, automation and decision support for complex public-sector environments.',image:'https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&w=1600&q=85'},
  telecom:{title:'Telecom',description:'Network intelligence, customer analytics, automation and scalable data platforms for communications organizations.',image:'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=85'},
  healthcare:{title:'Healthcare',description:'Connected workflows, secure data, intelligent automation and digital platforms for healthcare operations.',image:'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1600&q=85'},
  'financial-services':{title:'Financial Services',description:'Secure data, governed AI, automation, analytics and decision intelligence for high-trust financial environments.',image:'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=85'},
  enterprise:{title:'Enterprise & Digital Business',description:'AI, automation, cloud, data and application engineering for organizations modernizing how they operate and grow.',image:'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1600&q=85'}
}

export const insights = [
  {slug:'enterprise-ai-from-chatbots-to-workflows',title:'From chatbot to enterprise AI',category:'AI STRATEGY',summary:'Why AI becomes more valuable when it can securely use enterprise knowledge, tools and workflows.',image:'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=85',body:['The first wave of enterprise AI often starts with chat. The next step is connecting models to trusted knowledge, governed tools and real operating workflows.','Architecture matters: retrieval quality, permissions, observability, evaluation and human control determine whether AI remains a demo or becomes dependable enterprise capability.']},
  {slug:'designing-reliable-rag',title:'Designing reliable RAG',category:'GENAI ARCHITECTURE',summary:'The architecture choices that determine retrieval quality, security, evaluation and trust.',image:'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=85',body:['Reliable RAG is not simply a vector database plus a model. Content quality, chunking, metadata, access control, retrieval strategy and evaluation all shape the user experience.','Teams should measure answer groundedness, retrieval precision, latency and failure modes before expanding to high-value workflows.']},
  {slug:'ai-ready-data-foundation',title:'The AI-ready data foundation',category:'DATA',summary:'Why metadata, quality, lineage and access controls matter before scaling AI workloads.',image:'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=85',body:['AI magnifies the strengths and weaknesses of the underlying data foundation. Strong metadata, quality controls and ownership create the context AI systems need.','Modern data engineering should make trusted information reusable across analytics, automation and AI—not rebuild a new data path for every use case.']}
]
