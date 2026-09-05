
import heroAi from '../assets/visuals/hero-ai.jpg'
import heroData from '../assets/visuals/hero-data.jpg'
import heroAnalytics from '../assets/visuals/hero-analytics.jpg'
import heroDigital from '../assets/visuals/hero-digital.jpg'
import aiCard from '../assets/visuals/ai-card.jpg'
import aiHero from '../assets/visuals/ai-hero.jpg'
import dataCard from '../assets/visuals/data-card.jpg'
import dataHero from '../assets/visuals/data-hero.jpg'
import analyticsCard from '../assets/visuals/analytics-card.jpg'
import analyticsHero from '../assets/visuals/analytics-hero.jpg'
import digitalCard from '../assets/visuals/digital-card.jpg'
import digitalHero from '../assets/visuals/digital-hero.jpg'
import staffCard from '../assets/visuals/staff-card.jpg'
import staffHero from '../assets/visuals/staff-hero.jpg'
import managedCard from '../assets/visuals/managed-card.jpg'
import managedHero from '../assets/visuals/managed-hero.jpg'
import governmentImage from '../assets/visuals/government.jpg'
import telecomImage from '../assets/visuals/telecom.jpg'
import healthcareImage from '../assets/visuals/healthcare.jpg'
import financeImage from '../assets/visuals/finance.jpg'
import enterpriseImage from '../assets/visuals/enterprise.jpg'
import platformImage from '../assets/visuals/platform-premium.jpg'
import platformDetail from '../assets/visuals/platform-detail.jpg'
import governmentDetail from '../assets/visuals/government-detail.jpg'
import healthcareDetail from '../assets/visuals/healthcare-detail.jpg'
import telecomDetail from '../assets/visuals/telecom-detail.jpg'
import financeDetail from '../assets/visuals/finance-detail.jpg'
import enterpriseDetail from '../assets/visuals/enterprise-detail.jpg'
import whyDetail from '../assets/visuals/why-detail.jpg'
import insightsDetail from '../assets/visuals/insights-detail.jpg'
import contactDetail from '../assets/visuals/contact-detail.jpg'
import whyImage from '../assets/visuals/why.jpg'
import insightsImage from '../assets/visuals/insights.jpg'
import contactImage from '../assets/visuals/contact.jpg'
import sira from '../assets/clients/sira.svg'
import fruges from '../assets/clients/fruges.svg'
import ventley from '../assets/clients/ventley.svg'
import quanteon from '../assets/clients/quanteon.svg'
import alphasmart from '../assets/clients/alphasmart.svg'
import technodrive from '../assets/clients/technodrive.svg'

export const heroStories=[
{eyebrow:'GLOBAL ENTERPRISE TECHNOLOGY',title:'Enterprise technology,',accent:'engineered for impact.',text:'AI, data, cloud and digital engineering brought together to modernize operations and build resilient digital capabilities.',image:heroAi},
{eyebrow:'DATA-DRIVEN ENTERPRISE',title:'Turn enterprise data',accent:'into decisions.',text:'Trusted data foundations, analytics and AI that make information useful at the moment of action.',image:heroData},
{eyebrow:'DECISION INTELLIGENCE',title:'See the signal',accent:'before the noise.',text:'Analytics, forecasting and operational intelligence that help teams understand what matters and act faster.',image:heroAnalytics},
{eyebrow:'DIGITAL MODERNIZATION',title:'Modernize without',accent:'losing momentum.',text:'Cloud, application modernization and automation that protect critical operations while enabling change.',image:heroDigital}
]
export const clients=[{name:'SiRA',image:sira},{name:'FRUGES',image:fruges},{name:'Ventley Tech',image:ventley},{name:'Quanteon',image:quanteon},{name:'Alphasmart Solutions',image:alphasmart},{name:'Technodrive',image:technodrive}]
export const services={
'ai-solutions':{title:'AI Solutions',eyebrow:'AI & INTELLIGENCE',description:'Move from isolated AI experiments to secure, integrated enterprise intelligence that improves real operating workflows.',cardImage:aiCard,heroImage:aiHero,capabilities:[['Enterprise GenAI & RAG','Ground assistants in approved enterprise knowledge, structured data and operational context.'],['Agentic AI','Orchestrate tools, APIs and workflows while retaining human control for sensitive decisions.'],['Computer Vision','Turn video and imagery into operational signals, safety events and measurable intelligence.'],['AI Evaluation & Governance','Measure retrieval quality, model behavior, safety, cost and business performance before scale.']],outcomes:['Faster access to enterprise knowledge','Reduced repetitive manual work','More consistent decision support','Governed AI adoption across teams']},
'data-engineering':{title:'Data Engineering',eyebrow:'DATA FOUNDATION',description:'Build trusted, scalable data foundations that support analytics, AI, automation and modern digital operations.',cardImage:dataCard,heroImage:dataHero,capabilities:[['Modern Data Platforms','Lakehouse, warehouse and cloud-native analytical foundations for enterprise workloads.'],['Data Pipelines','Batch, streaming, CDC, ETL/ELT and event-driven ingestion patterns.'],['Data Quality & Observability','Lineage, freshness, contracts, schema monitoring and issue detection.'],['Enterprise Integration','APIs, events and reusable data services across enterprise systems.']],outcomes:['Reliable data for AI and analytics','Faster onboarding of new data sources','Improved data quality and observability','Reusable integration patterns']},
'analytics-intelligence':{title:'Analytics & Intelligence',eyebrow:'DATA & ANALYTICS',description:'Turn operational and business data into clear signals, forecasts, anomalies and better decisions.',cardImage:analyticsCard,heroImage:analyticsHero,capabilities:[['Business Intelligence','Executive and operational dashboards designed around decisions, not just reporting.'],['Predictive Analytics','Forecast demand, risk, capacity, service conditions and emerging trends.'],['Anomaly Detection','Detect unusual patterns and prioritize the situations that need attention.'],['Text & Conversation Analytics','Classify, summarize and extract themes, sentiment and resolution signals from large text datasets.']],outcomes:['Clear executive visibility','Earlier detection of operational issues','More useful forecasting and planning','Actionable insight from unstructured data']},
'digital-transformation':{title:'Digital Transformation',eyebrow:'DIGITAL ENGINEERING',description:'Modernize applications, workflows and platforms without disrupting critical business operations.',cardImage:digitalCard,heroImage:digitalHero,capabilities:[['Application Modernization','Refactor, replatform or replace legacy applications using pragmatic migration paths.'],['Cloud & Platform Engineering','Build scalable cloud foundations with automation, observability and resilience.'],['Workflow Automation','Reduce repetitive manual work through orchestration, APIs and intelligent workflows.'],['Digital Experience','Create modern web, mobile and portal experiences connected to real backend capabilities.']],outcomes:['Lower operational friction','Faster product and feature delivery','Modern cloud-ready applications','Connected customer and employee experiences']},
'staff-augmentation':{title:'Staff Augmentation',eyebrow:'CONSULTING',description:'Add specialized engineering, architecture, data, cloud and AI capacity to critical technology programs.',cardImage:staffCard,heroImage:staffHero,capabilities:[['AI & ML Specialists','GenAI, RAG, computer vision and applied machine-learning expertise.'],['Data Engineers','Pipelines, platforms, analytics engineering and enterprise integration.'],['Cloud & DevOps','Cloud, platform, infrastructure automation and delivery engineering.'],['Solution Architects','Senior architecture leadership for complex cross-system initiatives.']],outcomes:['Flexible capacity for critical initiatives','Specialized skills without long ramp-up','Stronger architecture and delivery quality','Knowledge transfer into internal teams']},
'managed-services':{title:'Managed Services',eyebrow:'OPERATIONS',description:'Operate, observe and continuously improve business-critical applications, data, automation and intelligent systems.',cardImage:managedCard,heroImage:managedHero,capabilities:[['Platform Operations','Monitoring, incident support, release support and capacity management.'],['Data Operations','Pipeline monitoring, recovery, freshness and data-quality controls.'],['AI Operations','RAG quality, model telemetry, evaluation and governance.'],['Reliability Engineering','SLOs, alerting, root-cause analysis, automation and resilient design.']],outcomes:['Higher platform reliability','Faster incident response','Continuous operational improvement','Clear ownership and observability']}
}
export const industries={government:{title:'Government & Public Sector',description:'Operational intelligence, digital services, safety, automation and decision support for complex public-sector environments.',image:governmentImage,detailImage:governmentDetail},telecom:{title:'Telecom',description:'Network intelligence, customer analytics, automation and scalable data platforms for communications organizations.',image:telecomImage,detailImage:telecomDetail},healthcare:{title:'Healthcare',description:'Connected workflows, secure data, intelligent automation and digital platforms for healthcare operations.',image:healthcareImage,detailImage:healthcareDetail},'financial-services':{title:'Financial Services',description:'Secure data, governed AI, automation, analytics and decision intelligence for high-trust financial environments.',image:financeImage,detailImage:financeDetail},enterprise:{title:'Enterprise & Digital Business',description:'AI, automation, cloud, data and application engineering for organizations modernizing how they operate and grow.',image:enterpriseImage,detailImage:enterpriseDetail}}
export const specialImages={platformImage,platformDetail,whyImage,whyDetail,insightsImage,insightsDetail,contactImage,contactDetail}
export const insights=[
{slug:'enterprise-ai-from-chatbots-to-workflows',title:'From chatbot to enterprise AI',category:'AI STRATEGY',summary:'Why AI becomes more valuable when it can securely use enterprise knowledge, tools and workflows.',image:aiHero,body:['The first wave of enterprise AI often starts with chat. The next step is connecting models to trusted knowledge, governed tools and real operating workflows.','Architecture matters: retrieval quality, permissions, observability, evaluation and human control determine whether AI remains a demo or becomes dependable enterprise capability.']},
{slug:'designing-reliable-rag',title:'Designing reliable RAG',category:'GENAI ARCHITECTURE',summary:'The architecture choices that determine retrieval quality, security, evaluation and trust.',image:dataHero,body:['Reliable RAG is not simply a vector database plus a model. Content quality, chunking, metadata, access control, retrieval strategy and evaluation all shape the user experience.','Teams should measure answer groundedness, retrieval precision, latency and failure modes before expanding to high-value workflows.']},
{slug:'ai-ready-data-foundation',title:'The AI-ready data foundation',category:'DATA',summary:'Why metadata, quality, lineage and access controls matter before scaling AI workloads.',image:analyticsHero,body:['AI magnifies the strengths and weaknesses of the underlying data foundation. Strong metadata, quality controls and ownership create the context AI systems need.','Modern data engineering should make trusted information reusable across analytics, automation and AI—not rebuild a new data path for every use case.']}
]
