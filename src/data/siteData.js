
import aiImage from '../assets/visuals/ai.svg'
import dataImage from '../assets/visuals/data.svg'
import analyticsImage from '../assets/visuals/analytics.svg'
import digitalImage from '../assets/visuals/digital.svg'
import staffImage from '../assets/visuals/staff.svg'
import managedImage from '../assets/visuals/managed.svg'
import platformImage from '../assets/visuals/platform.svg'
import governmentImage from '../assets/visuals/government.svg'
import telecomImage from '../assets/visuals/telecom.svg'
import healthcareImage from '../assets/visuals/healthcare.svg'
import financeImage from '../assets/visuals/finance.svg'
import enterpriseImage from '../assets/visuals/enterprise.svg'

import sira from '../assets/clients/sira.svg'
import fruges from '../assets/clients/fruges.svg'
import ventley from '../assets/clients/ventley.svg'
import quanteon from '../assets/clients/quanteon.svg'
import alphasmart from '../assets/clients/alphasmart.svg'
import technodrive from '../assets/clients/technodrive.svg'

export const clients=[
 {name:'SiRA',image:sira},{name:'FRUGES',image:fruges},{name:'Ventley Tech',image:ventley},
 {name:'Quanteon',image:quanteon},{name:'Alphasmart Solutions',image:alphasmart},{name:'Technodrive',image:technodrive}
]

export const services={
 'ai-solutions':{title:'AI Solutions',eyebrow:'AI & INTELLIGENCE',description:'Move from isolated AI experiments to secure, integrated enterprise intelligence that improves real operating workflows.',image:aiImage,capabilities:[['Enterprise GenAI & RAG','Ground assistants in approved knowledge, enterprise data and operational context.'],['Agentic AI','Orchestrate tools, APIs and workflows while retaining appropriate human control.'],['Computer Vision','Convert video and imagery into useful operational events and intelligence.'],['AI Governance & Evaluation','Measure retrieval quality, model behavior, safety, cost and business outcomes.']]},
 'data-engineering':{title:'Data Engineering',eyebrow:'DATA FOUNDATION',description:'Build trusted, scalable data foundations that support analytics, AI, automation and modern digital operations.',image:dataImage,capabilities:[['Modern Data Platforms','Cloud-native analytical foundations for reporting, AI and data products.'],['Data Pipelines','Batch, streaming, CDC and event-driven ingestion.'],['Data Quality & Observability','Lineage, freshness, contracts and proactive issue detection.'],['Enterprise Integration','APIs, events and reusable data services across systems.']]},
 'analytics-intelligence':{title:'Analytics & Intelligence',eyebrow:'DATA & ANALYTICS',description:'Turn operational and business data into signals, forecasts, anomalies and better decisions.',image:analyticsImage,capabilities:[['Business Intelligence','Executive and operational dashboards organized around decisions.'],['Predictive Analytics','Forecast demand, capacity, risk and emerging conditions.'],['Anomaly Detection','Identify unusual patterns and prioritize what needs attention.'],['Text & Conversation Analytics','Classify, summarize and extract themes and resolution signals.']]},
 'digital-transformation':{title:'Digital Transformation',eyebrow:'DIGITAL ENGINEERING',description:'Modernize applications, workflows and platforms without disrupting critical business operations.',image:digitalImage,capabilities:[['Application Modernization','Refactor, replatform or replace legacy applications pragmatically.'],['Cloud & Platform Engineering','Scalable cloud foundations with automation and observability.'],['Workflow Automation','Reduce manual work with orchestrated, API-connected processes.'],['Digital Experience','Modern web, mobile and portal experiences around real workflows.']]},
 'staff-augmentation':{title:'Staff Augmentation',eyebrow:'CONSULTING',description:'Add specialized engineering and architecture capacity to critical technology programs.',image:staffImage,capabilities:[['AI & ML Specialists','GenAI, RAG, computer vision and applied ML expertise.'],['Data Engineers','Pipelines, platforms, analytics engineering and integration.'],['Cloud & DevOps','Cloud, platform, infrastructure automation and delivery engineering.'],['Solution Architects','Senior architecture leadership for complex cross-system initiatives.']]},
 'managed-services':{title:'Managed Services',eyebrow:'OPERATIONS',description:'Operate, observe and continuously improve business-critical digital systems.',image:managedImage,capabilities:[['Platform Operations','Monitoring, incident support, releases and capacity management.'],['Data Operations','Pipeline monitoring, recovery, freshness and data quality.'],['AI Operations','RAG quality, model telemetry, evaluation and governance.'],['Reliability Engineering','SLOs, alerting, root cause analysis and resilient design.']]}
}

export const industries={
 government:{title:'Government & Public Sector',description:'Operational intelligence, digital services, automation and decision support for complex public-sector environments.',image:governmentImage},
 telecom:{title:'Telecom',description:'Network intelligence, customer analytics, automation and scalable data platforms for communications organizations.',image:telecomImage},
 healthcare:{title:'Healthcare',description:'Connected workflows, data intelligence, secure AI and digital platforms for healthcare operations.',image:healthcareImage},
 'financial-services':{title:'Financial Services',description:'Secure data, governed AI, automation and decision intelligence for high-trust financial environments.',image:financeImage},
 enterprise:{title:'Enterprise & Digital Business',description:'AI, automation, cloud, data and application engineering for organizations modernizing how they operate and grow.',image:enterpriseImage}
}

export const platformImageAsset=platformImage
