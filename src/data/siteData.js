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

import infronex from '../assets/clients/infronex.svg'
import axisgroup from '../assets/clients/axisgroup.svg'
import quanteon from '../assets/clients/quanteon.svg'
import ventley from '../assets/clients/ventley.svg'
import alphasmart from '../assets/clients/alphasmart.svg'
import technodrive from '../assets/clients/technodrive.svg'

export const clients = [
  { name: 'Infronex', image: infronex },
  { name: 'Axis Group', image: axisgroup },
  { name: 'Quanteon', image: quanteon },
  { name: 'Ventley Technology', image: ventley },
  { name: 'Alphasmart', image: alphasmart },
  { name: 'Technodrive', image: technodrive },
]

export const services = {
  'ai-solutions': {
    title: 'AI Solutions',
    eyebrow: 'AI & INTELLIGENCE',
    description: 'Move from isolated AI experiments to secure, integrated enterprise intelligence that improves real operating workflows.',
    image: aiImage,
    capabilities: [
      ['Enterprise GenAI & RAG', 'Ground AI assistants in approved knowledge, enterprise data and operational context.'],
      ['Agentic AI', 'Orchestrate tools, APIs and workflows while retaining appropriate human control.'],
      ['Computer Vision', 'Convert video and imagery into actionable operational intelligence.'],
      ['AI Governance & Evaluation', 'Measure retrieval quality, model behavior, safety, cost and business outcomes.'],
    ],
    outcomes: [
      'Reduce manual query handling by 60–80%',
      'Deploy enterprise-grade GenAI in 8–12 weeks',
      'Maintain full data sovereignty and compliance',
      'Continuous model evaluation and improvement loops',
    ],
  },
  'data-engineering': {
    title: 'Data Engineering',
    eyebrow: 'DATA FOUNDATION',
    description: 'Build trusted, scalable data foundations that support analytics, AI, automation and modern digital operations.',
    image: dataImage,
    capabilities: [
      ['Modern Data Platforms', 'Cloud-native analytical foundations for reporting, AI and data products.'],
      ['Data Pipelines', 'Batch, streaming, CDC and event-driven ingestion across systems.'],
      ['Data Quality & Observability', 'Lineage, freshness, contracts and proactive issue detection.'],
      ['Enterprise Integration', 'APIs, events and reusable data services across enterprise systems.'],
    ],
    outcomes: [
      '10x faster data access for analytics teams',
      'Eliminate data silos across business units',
      'Real-time pipeline monitoring and alerting',
      'DPDP Act and ISO 27001 compliant architecture',
    ],
  },
  'analytics-intelligence': {
    title: 'Analytics & Intelligence',
    eyebrow: 'DATA & ANALYTICS',
    description: 'Turn operational and business data into signals, forecasts, anomalies and better decisions across every function.',
    image: analyticsImage,
    capabilities: [
      ['Business Intelligence', 'Executive and operational dashboards organized around decisions.'],
      ['Predictive Analytics', 'Forecast demand, capacity, risk and emerging conditions.'],
      ['Anomaly Detection', 'Identify unusual patterns and prioritize what needs immediate attention.'],
      ['Text & Conversation Analytics', 'Classify, summarize and extract themes from unstructured data.'],
    ],
    outcomes: [
      'Cut reporting time from days to minutes',
      'Predict demand 30+ days in advance',
      'Detect operational anomalies before they escalate',
      'Support 22+ Indian regional languages',
    ],
  },
  'digital-transformation': {
    title: 'Digital Transformation',
    eyebrow: 'DIGITAL ENGINEERING',
    description: 'Modernize applications, workflows and platforms without disrupting critical business operations.',
    image: digitalImage,
    capabilities: [
      ['Application Modernization', 'Refactor, replatform or replace legacy applications pragmatically.'],
      ['Cloud & Platform Engineering', 'Scalable cloud foundations with automation and observability baked in.'],
      ['Workflow Automation', 'Reduce manual work with orchestrated, API-connected processes.'],
      ['Digital Experience', 'Modern web, mobile and portal experiences built around real workflows.'],
    ],
    outcomes: [
      'Reduce technical debt by 40–60%',
      'Ship features 3x faster with modern CI/CD',
      'Cut infrastructure costs through right-sizing',
      'Zero-downtime migration strategies',
    ],
  },
  'staff-augmentation': {
    title: 'Staff Augmentation',
    eyebrow: 'CONSULTING',
    description: 'Add specialized engineering and architecture capacity to your critical technology programs with vetted experts.',
    image: staffImage,
    capabilities: [
      ['AI & ML Specialists', 'GenAI, RAG, computer vision and applied ML expertise on demand.'],
      ['Data Engineers', 'Pipelines, platforms, analytics engineering and integration specialists.'],
      ['Cloud & DevOps', 'Cloud architecture, platform engineering, infrastructure automation.'],
      ['Solution Architects', 'Senior architecture leadership for complex cross-system initiatives.'],
    ],
    outcomes: [
      '72-hour deployment for most roles',
      'All consultants vetted through 3-stage technical review',
      'Seamless knowledge transfer built into engagement model',
      'Flexible contracts from sprint to multi-year',
    ],
  },
  'managed-services': {
    title: 'Managed Services',
    eyebrow: 'OPERATIONS',
    description: 'Operate, observe and continuously improve business-critical digital systems with SLA-backed reliability.',
    image: managedImage,
    capabilities: [
      ['Platform Operations', 'Monitoring, incident support, releases and capacity management.'],
      ['Data Operations', 'Pipeline monitoring, recovery, freshness and data quality assurance.'],
      ['AI Operations', 'RAG quality, model telemetry, evaluation and governance in production.'],
      ['Reliability Engineering', 'SLOs, alerting, root cause analysis and resilient system design.'],
    ],
    outcomes: [
      '99.9% uptime SLA across managed platforms',
      '15-minute response for P1 critical incidents',
      'Monthly reliability and cost optimization reviews',
      'Full observability dashboards for your team',
    ],
  },
}

export const industries = {
  government: {
    title: 'Government & Public Sector',
    eyebrow: 'PUBLIC SECTOR',
    description: 'Operational intelligence, digital services, automation and decision support built for complex public-sector environments. We understand sovereign data requirements, multi-agency integration challenges and the need for inclusive, multilingual citizen experiences.',
    image: governmentImage,
    useCases: ['Citizen service portals in 22+ languages', 'Cross-department data integration', 'AI-driven policy impact analysis', 'Secure document intelligence', 'e-Governance platform modernization'],
  },
  telecom: {
    title: 'Telecom & Communications',
    eyebrow: 'TELECOM',
    description: 'Network intelligence, customer analytics, automation and scalable data platforms engineered for high-throughput communications organizations navigating 5G, fiber expansion and customer experience competition.',
    image: telecomImage,
    useCases: ['Network anomaly detection', 'Customer churn prediction', 'Automated fault resolution', 'Revenue assurance analytics', 'Real-time subscriber intelligence'],
  },
  healthcare: {
    title: 'Healthcare',
    eyebrow: 'HEALTHCARE',
    description: 'Connected workflows, clinical data intelligence, secure AI and digital platforms that support healthcare organizations in improving outcomes while meeting DPDP, HIPAA-equivalent and NABH data governance standards.',
    image: healthcareImage,
    useCases: ['Clinical data warehouses', 'Patient journey analytics', 'AI-assisted diagnostics support', 'Claims and billing automation', 'Supply chain intelligence'],
  },
  'financial-services': {
    title: 'Financial Services',
    eyebrow: 'BFSI',
    description: 'Secure data infrastructure, governed AI, automation and decision intelligence purpose-built for high-trust BFSI environments operating under RBI, SEBI and global regulatory frameworks.',
    image: financeImage,
    useCases: ['Risk scoring and fraud detection', 'Regulatory reporting automation', 'Customer 360 analytics', 'Loan origination intelligence', 'AML transaction monitoring'],
  },
  enterprise: {
    title: 'Enterprise & Digital Business',
    eyebrow: 'ENTERPRISE',
    description: 'AI, automation, cloud, data and application engineering for organizations at any stage of digital maturity — from modernizing legacy systems to building next-generation product platforms.',
    image: enterpriseImage,
    useCases: ['ERP and CRM modernization', 'Supply chain intelligence', 'Digital workforce automation', 'Customer experience platforms', 'Unified data and analytics layer'],
  },
}

export const platformImageAsset = platformImage

export const insightsData = [
  {
    category: 'AI & DATA',
    title: 'Why Enterprise GenAI Deployments Fail at Scale',
    excerpt: 'Most enterprise AI pilots succeed. Most production deployments struggle. The gap almost always comes down to data quality, governance, and organizational readiness — not the model.',
    date: 'August 2026',
    readTime: '7 min read',
  },
  {
    category: 'DATA ENGINEERING',
    title: 'Building Data Contracts That Actually Work',
    excerpt: 'Data contracts are emerging as the most effective way to prevent silent pipeline failures. Here is how to implement them without slowing your engineering teams down.',
    date: 'July 2026',
    readTime: '5 min read',
  },
  {
    category: 'DIGITAL TRANSFORMATION',
    title: 'The Hidden Cost of Application Modernization',
    excerpt: 'Organizations underestimate the cost of NOT modernizing. We break down the compounding costs of technical debt and how to build a business case your leadership will approve.',
    date: 'July 2026',
    readTime: '6 min read',
  },
  {
    category: 'GOVERNMENT & PUBLIC SECTOR',
    title: 'Multilingual AI for Citizen Services: A Practical Guide',
    excerpt: 'Deploying AI across 22 Indian languages is not just a translation problem. It requires specialized embedding strategies, domain fine-tuning and careful evaluation frameworks.',
    date: 'June 2026',
    readTime: '8 min read',
  },
  {
    category: 'MANAGED SERVICES',
    title: 'What Good AI Operations Looks Like in Production',
    excerpt: 'Beyond deployment, AI systems need continuous monitoring, evaluation loops and operational playbooks. Here is what mature AI operations looks like across regulated Indian enterprises.',
    date: 'June 2026',
    readTime: '6 min read',
  },
  {
    category: 'BFSI',
    title: 'AI-Driven Fraud Detection: Lessons from BFSI Deployments',
    excerpt: 'Real-time transaction monitoring with AI reduces false positives by 40–60% compared to rule-based systems. But the architecture and governance choices matter enormously.',
    date: 'May 2026',
    readTime: '7 min read',
  },
]
