import type {
  AgentDemo,
  HeroSlide,
  HowIBuildStep,
  ResearchNote,
  SkillCluster,
  VisionPillar,
  WhatIBuildCard,
} from "@/types";

export const heroIdentity = {
  name: "Aamir Khan",
  title: "AI Engineer & Founder",
  primaryPositioning: "AI Engineer · Production Agentic AI · LLM Systems · Backend & Cloud",
  heroStatement: "Building AI agents that don't just answer — they execute.",
  supportingCopy:
    "I build production-oriented AI systems, agentic workflows and real products that turn ideas into working software.",
  primaryCtaText: "View my work",
  secondaryCtaText: "Download resume",
  tertiaryCtaText: "Let's talk ↗",
};

export const educationInfo = {
  degree: "BE in Computer Engineering",
  period: "2024 – 2028",
  institution: "Rizvi College of Engineering",
  location: "Mumbai, India",
  description:
    "Foundational computer engineering education paired with hands-on production systems, AI agent research, and real product execution.",
};

export const contactInfo = {
  name: "Aamir Khan",
  email: "vasmo.aamir@gmail.com",
  github: "https://github.com/Aamirtechvibes",
  linkedin: "https://www.linkedin.com/in/vasmo-aamir/",
  x: "https://x.com/vasmoaamir",
  headline: "Have a problem worth building?",
  description:
    "Available for AI Engineer internships, agentic AI systems development, and software engineering opportunities in Mumbai, Bangalore, or Remote.",
};

export const heroSlides: HeroSlide[] = [
  {
    id: "slide-agentic",
    eyebrow: "Production Agentic Systems",
    title: "AI agents built with tool execution, memory, and guardrails.",
    description:
      "LangGraph state graphs, dynamic tool calling, multi-agent routers, and WebSockets-driven Control Room dashboards.",
    image: "/slides/system-blueprint.svg",
    stat: "4 Shipped AI Systems",
  },
  {
    id: "slide-commerce",
    eyebrow: "WhatsApp-First Commerce",
    title: "Multi-agent business operating systems meeting users in WhatsApp.",
    description:
      "From RFQ lead triage to margin safety validation, quote generation, and owner approval gates.",
    image: "/slides/conversion-engine.svg",
    stat: "BizMate & Vyapar OS",
  },
  {
    id: "slide-real-world",
    eyebrow: "Real Products & Users",
    title: "Coffee on QR dine-in table ordering with paying customers.",
    description:
      "Zero-install digital wallet rewards and automated WhatsApp CRM retention fast-tracked at Eureka! IIT Bombay.",
    image: "/slides/research-grid.svg",
    stat: "Eureka! IIT Bombay",
  },
];

export const whatIBuildCards: WhatIBuildCard[] = [
  {
    number: "01",
    title: "Agentic AI Systems",
    description:
      "AI agents that reason, use tools, execute workflows, and interact with real databases and external APIs.",
    tech: ["LangGraph", "Python", "FastAPI", "Tool Calling", "ReAct Loops"],
  },
  {
    number: "02",
    title: "LLM Applications",
    description:
      "Production LLM applications with structured JSON outputs, retrieval-augmented generation (RAG), and stateful memory.",
    tech: ["OpenAI API", "Pydantic", "PostgreSQL", "Embeddings", "LangChain"],
  },
  {
    number: "03",
    title: "AI + Backend Infrastructure",
    description:
      "Backend microservices, webhook signatures, rate limiting, authentication, ACID concurrency, and cloud deployment.",
    tech: ["FastAPI", "Node.js", "Express", "PostgreSQL", "Supabase", "AWS"],
  },
  {
    number: "04",
    title: "AI Products",
    description:
      "Turning product ideas into usable commercial applications with WhatsApp APIs, payment links, and friction-free interfaces.",
    tech: ["Next.js", "WhatsApp Cloud API", "Tailwind CSS", "React", "WebSockets"],
  },
  {
    number: "05",
    title: "Developer Experiences",
    description:
      "Agent Control Rooms, live execution tracing, human-in-the-loop gates, and observability dashboards.",
    tech: ["WebSockets", "Framer Motion", "React", "Realtime Telemetry"],
  },
];

export const howIBuildSteps: HowIBuildStep[] = [
  {
    step: "01",
    title: "Understand the problem",
    description: "Identify where human operators hesitate, lose context, or leak operational momentum.",
  },
  {
    step: "02",
    title: "Model the workflow",
    description: "Deconstruct the business problem into deterministic logic vs non-deterministic LLM agent steps.",
  },
  {
    step: "03",
    title: "Design the system",
    description: "Map out database schemas, multi-agent router nodes, API boundaries, and security guardrails.",
  },
  {
    step: "04",
    title: "Build the smallest working version",
    description: "Ship an end-to-end prototype validating core agent tool calls and data flows.",
  },
  {
    step: "05",
    title: "Connect real tools/data",
    description: "Integrate WhatsApp APIs, live SQL databases, payment gateways, and authentication locks.",
  },
  {
    step: "06",
    title: "Test real workflows",
    description: "Stress-test tool outputs, handle edge-case prompts, and enforce strict Pydantic schemas.",
  },
  {
    step: "07",
    title: "Deploy",
    description: "Ship to production environment on AWS / Vercel with rate limiting and error monitoring.",
  },
  {
    step: "08",
    title: "Iterate from actual usage",
    description: "Analyze agent execution traces, refine system prompts, and optimize query latency.",
  },
];

export const agentDemos: AgentDemo[] = [
  {
    id: "sales-agent",
    name: "Sales Agent",
    role: "RFQ & Price Quoting",
    description:
      "Interprets WhatsApp customer inquiries, checks stock inventory in PostgreSQL, applies volume margin rules, and drafts formatted quote proposals.",
    capabilities: ["Natural Language Intent Parsing", "Inventory Stock Check", "Volume Margin Calculation"],
    youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
  {
    id: "manager-agent",
    name: "Manager Agent",
    role: "Orchestration & Router",
    description:
      "Acts as the primary entry router for WhatsApp messages, evaluating intent, maintaining conversation history in LangGraph, and delegating tasks.",
    capabilities: ["Multi-Agent Intent Routing", "LangGraph State Checkpointing", "Human-in-the-Loop Escalation"],
    youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
  {
    id: "finance-agent",
    name: "Finance Agent",
    role: "Invoices & Payments",
    description:
      "Drafts itemized PDF receipts, triggers payment links upon owner sign-off, and records transaction ledgers.",
    capabilities: ["Payment Link Generation", "Invoice PDF Drafting", "Transaction Ledger Audit"],
    youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
  {
    id: "social-agent",
    name: "Social Agent",
    role: "Marketing & Campaigns",
    description:
      "Generates localized Marathi/English promotional announcements, manages customer segments, and automates re-engagement broadcasts.",
    capabilities: ["Multilingual Voice/Text Prompting", "Segmented Broadcast Automation", "Campaign Telemetry"],
    youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
];

export const researchNotes: ResearchNote[] = [
  {
    title: "AI agents need graph state memory before more prompts.",
    summary:
      "Most agent implementations fail in production because they rely on stateless prompt buffers rather than stateful graph checkpoints (LangGraph) that preserve execution reasoning trails.",
    signal: "Stateful agent memory is a production requirement.",
    focus: ["LangGraph", "State Checkpoints", "Agent Trajectories"],
  },
  {
    title: "Operational AI wins when it lives inside existing communication rails.",
    summary:
      "SMEs do not want another dashboard app. They adoption curve collapses to zero when AI agents live inside WhatsApp, meeting users in their daily workflow.",
    signal: "WhatsApp-first deployment removes user friction.",
    focus: ["WhatsApp API", "UX Friction", "Business Agents"],
  },
  {
    title: "Deterministic guardrails must wrap non-deterministic LLM tool calls.",
    summary:
      "LLMs should select actions, but strict Pydantic schemas, database ACID locks, and margin checkers must validate execution before output dispatch.",
    signal: "Guardrails create trust in autonomous systems.",
    focus: ["Schema Validation", "PostgreSQL Locks", "Guardrails"],
  },
];

export const visionPillars: VisionPillar[] = [
  {
    title: "Build autonomous agentic systems that execute real work.",
    description:
      "Moving beyond passive chat interfaces into autonomous systems that call APIs, modify database states, and operate complex business workflows.",
    horizon: "Current Engineering Focus",
    outcomes: [
      "Multi-agent architectures with domain specialization",
      "Real-time Agent Control Rooms for observability",
      "Deterministic safety guardrails around LLM outputs",
    ],
  },
  {
    title: "Bridge cutting-edge AI with practical SME commerce.",
    description:
      "Bringing enterprise-grade multi-agent automation to traditional wholesalers, retailers, and local businesses through everyday interfaces like WhatsApp.",
    horizon: "Product Direction",
    outcomes: [
      "Frictionless WhatsApp-first commerce operating systems",
      "Automated quote-to-cash workflows for SMEs",
      "Multilingual voice & text assistance",
    ],
  },
];

export const skillClusters: SkillCluster[] = [
  {
    title: "AI & Agentic Systems",
    intro: "Orchestrating stateful, multi-agent workflows that execute tool calling.",
    items: [
      "LangGraph",
      "Multi-Agent Routers",
      "Tool Calling",
      "OpenAI / Gemini APIs",
      "ReAct Execution Loops",
      "Pydantic Guardrails",
      "RAG & Embeddings",
    ],
  },
  {
    title: "Backend & Infrastructure",
    intro: "Building scalable APIs, ACID databases, security middleware, and webhooks.",
    items: [
      "Python / FastAPI",
      "Node.js / Express",
      "PostgreSQL / Supabase",
      "MongoDB",
      "HMAC Webhook Auth",
      "Postgres Concurrency Locks",
      "AWS & Cloud Infra",
    ],
  },
  {
    title: "Frontend Craft",
    intro: "Designing fast, responsive interfaces with real-time telemetry.",
    items: [
      "Next.js App Router",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "WebSockets",
    ],
  },
  {
    title: "Product & Founder Thinking",
    intro: "Building end-to-end commercial applications with real user validation.",
    items: [
      "WhatsApp Cloud API",
      "Dine-in QR Systems",
      "Workflow Architecture",
      "Customer Retention CRM",
      "Rapid Prototyping",
    ],
  },
];

export const toolbelt = [
  "LangGraph",
  "Python",
  "FastAPI",
  "OpenAI API",
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "PostgreSQL",
  "Supabase",
  "Node.js",
  "Express",
  "AWS",
  "WhatsApp Cloud API",
  "MongoDB",
  "Framer Motion",
];
