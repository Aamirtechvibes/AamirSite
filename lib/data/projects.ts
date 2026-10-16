import type { Project } from "@/types";

export const seedProjects: Project[] = [
  {
    id: "bizmate",
    title: "BizMate",
    slug: "bizmate",
    image: "/hero-system.svg",
    liveUrl: "https://bizmate-demo.vercel.app",
    githubUrl: "https://github.com/Aamirtechvibes/bizmate",
    youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    role: "Founder & AI Systems Engineer",
    category: "system",
    description:
      "A WhatsApp-first multi-agent AI business assistant for small and growing businesses, retailers, and distributors.",
    teaser: "Meet the business where it already lives: WhatsApp.",
    problem:
      "Small store owners and B2B distributors conduct daily business through manual WhatsApp chats, causing dropped leads, unverified inventory pricing, delayed quotes, and missing follow-ups.",
    whyBuilt:
      "To build an autonomous multi-agent operating engine that handles sales, finance, operations, and social marketing inside WhatsApp while providing store owners an Agent Control Office.",
    users: ["Wholesalers", "Retail store owners", "Distributors", "SME Operations Leads"],
    solution:
      "Engineered an agentic architecture featuring specialized agents (Manager, Sales, Finance, Social, Ops) that process customer text/voice messages, calculate pricing, generate quotes, and manage business workflows.",
    impact:
      "Automates 80%+ of routine WhatsApp business inquiries, shortens RFQ quote turnaround from hours to minutes, and preserves full reasoning trails in an Agent Control Room.",
    outcomes: [
      "Multi-agent router routes inbound WhatsApp messages to domain-specific agent personas.",
      "LangGraph state graphs maintain context across multi-turn multilingual customer conversations.",
      "PostgreSQL concurrency locks prevent race conditions during simultaneous inventory quoting.",
      "Agent Office dashboard provides live human-in-the-loop observation and manual override gates.",
    ],
    architecture: [
      "WhatsApp Webhook Ingestion -> HMAC signature verification middleware.",
      "Manager Agent Router -> Classifies intent & dispatches to Sales/Finance/Social/Ops agents.",
      "LangGraph Execution Engine -> Stateful graph node transitions with persistent Postgres checkpoints.",
      "Agent Control Room -> Real-time WebSocket streaming of agent reasoning trails and tool execution.",
    ],
    tech: [
      "Python",
      "FastAPI",
      "LangGraph",
      "OpenAI API",
      "Next.js",
      "PostgreSQL",
      "Supabase",
      "Tailwind CSS",
      "WhatsApp Cloud API",
    ],
    tags: ["Agentic AI", "WhatsApp API", "LangGraph", "Multi-Agent System", "FastAPI"],
    status: "Live",
    featured: true,
    createdAt: "2026-03-01T00:00:00.000Z",
    metrics: [
      { label: "Routine Triage", value: "80% Automated" },
      { label: "Quote Speed", value: "< 2 mins" },
      { label: "Agents Deployed", value: "5 Active Agents" },
    ],
  },
  {
    id: "vyapar-commerce-os",
    title: "Vyapar Commerce OS",
    slug: "vyapar-commerce-os",
    image: "/slides/conversion-engine.svg",
    liveUrl: "https://vyapar-os.vercel.app",
    githubUrl: "https://github.com/Aamirtechvibes/vyapar-commerce-os",
    role: "Lead AI Engineer",
    category: "system",
    description:
      "A WhatsApp-first quote-to-cash commerce operating system for high-volume B2B distributors and wholesalers.",
    teaser: "A sales pipeline that operates as an autonomous agentic system.",
    problem:
      "Revenue and fulfillment teams lose margin and customer trust when pricing, stock capacity, and payment handoffs are fragmented across chats and spreadsheets.",
    whyBuilt:
      "Built to enable commercial teams to simulate margin guardrails and capacity constraints automatically before committing quotes to buyers.",
    users: ["B2B Wholesalers", "Fulfillment Leads", "Sales Operators"],
    solution:
      "Designed a unified agent pipeline where proposal logic, capacity signals, volume margin buffers, and launch readiness execute in one operating loop.",
    impact:
      "Dramatically reduced pricing errors and manual quote preparation overhead while protecting minimum gross margin thresholds.",
    outcomes: [
      "Rule-based & LLM pricing engine evaluates volume margin safety before buyer dispatch.",
      "Fulfillment readiness agent scores stock exposure and onboarding complexity.",
      "Automated payment link generation & invoice dispatch upon owner sign-off.",
    ],
    architecture: [
      "Rule & Agent pricing layer checks minimum margin thresholds before approval.",
      "Fulfillment capacity estimator models inventory commitment.",
      "PostgreSQL transaction locks ensure atomic stock updates during multi-user ordering.",
    ],
    tech: ["Next.js", "TypeScript", "Python", "FastAPI", "PostgreSQL", "Supabase", "Tailwind CSS"],
    tags: ["Multi-Agent AI", "Commerce Systems", "PostgreSQL", "FastAPI"],
    status: "Live",
    featured: true,
    createdAt: "2026-02-15T00:00:00.000Z",
    metrics: [
      { label: "RFQ Turnaround", value: "-75%" },
      { label: "Margin Leakage", value: "Zero Unchecked" },
      { label: "Order Accuracy", value: "100% Guarded" },
    ],
  },
  {
    id: "agent-aamir",
    title: "Agent Aamir",
    slug: "agent-aamir",
    image: "/slides/system-blueprint.svg",
    liveUrl: "https://agent-aamir.vercel.app",
    githubUrl: "https://github.com/Aamirtechvibes/agent-aamir",
    role: "AI Systems Architect",
    category: "system",
    description:
      "An autonomous AI agent control room featuring tool calling, graph state persistence, and human-in-the-loop overrides.",
    teaser: "Real-time agent execution with complete trajectory observability.",
    problem:
      "Black-box AI agents fail in production because engineers cannot observe tool calling decisions, trajectory steps, or intervene during unexpected edge cases.",
    whyBuilt:
      "To build a production-grade Agent Control Room where every prompt, tool execution, and state transition is observable and overrideable.",
    users: ["AI Engineers", "System Operators", "Product Developers"],
    solution:
      "Engineered an agent orchestration interface streaming graph execution nodes, tool parameter payloads, and human-in-the-loop approval gates over WebSockets.",
    impact:
      "Provides full deterministic auditability over non-deterministic LLM agent reasoning cycles.",
    outcomes: [
      "ReAct loop visualization exposes tool selection and reasoning steps in real-time.",
      "Human-in-the-loop interrupt handles sensitive API calls before execution.",
      "LangGraph checkpoint storage enables trajectory rollbacks and replay testing.",
    ],
    architecture: [
      "LangGraph execution engine with dynamic tool registry.",
      "WebSocket event bus pushing state updates to client timeline UI.",
      "PostgreSQL persistence layer capturing token usage and tool outcome logs.",
    ],
    tech: ["Python", "LangGraph", "FastAPI", "Next.js", "WebSockets", "Tailwind CSS"],
    tags: ["Production AI", "LangGraph", "Tool Calling", "Control Room"],
    status: "Live",
    featured: true,
    createdAt: "2026-01-20T00:00:00.000Z",
    metrics: [
      { label: "Execution Trace", value: "100% Observable" },
      { label: "Tool Accuracy", value: "Schema Enforced" },
      { label: "Human Override", value: "< 100ms Gate" },
    ],
  },
  {
    id: "coffee-on-qr",
    title: "Coffee on QR",
    slug: "coffee-on-qr",
    image: "/slides/research-grid.svg",
    liveUrl: "https://coffee-on-qr.vercel.app",
    githubUrl: "https://github.com/Aamirtechvibes/coffee_on_Qr_cafe_slow_brew",
    role: "Founder & Full-Stack Engineer",
    category: "product",
    description:
      "A real-world QR ordering, customer retention, and CRM platform built for local cafés and coffee shops.",
    teaser: "Frictionless QR ordering paired with automated customer wallet retention.",
    problem:
      "Local cafés suffer from counter congestion during peak hours, high third-party aggregator commissions, and zero direct customer retention channels.",
    whyBuilt:
      "Created as a commercial product to give local cafés direct digital ordering, instant wallet rewards, and automated WhatsApp re-engagement.",
    users: ["Café Owners", "Baristas", "Dine-in Customers"],
    solution:
      "Shipped a QR table-ordering web application with instant digital wallet balance tracking, real-time kitchen display screen (KDS), and automated WhatsApp CRM retention.",
    impact:
      "Deployed at active paying customer café locations. Recognized and fast-tracked at Eureka! IIT Bombay E-Cell.",
    outcomes: [
      "Frictionless zero-install web application for instant dine-in table ordering.",
      "PostgreSQL transaction isolation preventing wallet balance double-spending.",
      "Automated WhatsApp CRM triggering personalized re-engagement offers to repeat customers.",
    ],
    architecture: [
      "Next.js & Node.js REST API with optimistic order queueing.",
      "PostgreSQL database with strict ACID transaction guarantees for customer wallet credits.",
      "WhatsApp API integration dispatching digital receipts and retention coupons.",
    ],
    tech: ["Next.js", "React", "Node.js", "Express", "PostgreSQL", "Tailwind CSS", "WhatsApp API"],
    tags: ["Product Founder", "Paying Customers", "Eureka! IIT Bombay", "Full-Stack"],
    status: "Live",
    featured: true,
    createdAt: "2025-11-10T00:00:00.000Z",
    metrics: [
      { label: "Validation", value: "Paying Customers" },
      { label: "Recognition", value: "Eureka! IIT Bombay" },
      { label: "App Install", value: "Zero Required" },
    ],
  },
  {
    id: "videotube",
    title: "VideoTube",
    slug: "videotube",
    image: "/hero-system.svg",
    githubUrl: "https://github.com/Aamirtechvibes/videotube",
    role: "Backend & Systems Engineer",
    category: "engineering",
    description:
      "A high-performance full-stack video streaming and backend processing platform with chunked uploads and custom playback.",
    teaser: "Scalable video backend architecture with JWT auth and media processing.",
    problem:
      "Building video applications requires managing asynchronous file chunking, cloud transcode pipelines, and low-latency state synchronization.",
    whyBuilt:
      "Built to master production backend engineering patterns, authentication security, database indexing, and media delivery.",
    users: ["Content Creators", "Video Viewers"],
    solution:
      "Engineered an Express/MongoDB backend service handling JWT access/refresh token rotation, video chunk uploads, Cloudinary integration, and user interactions.",
    impact:
      "Delivered a robust video streaming infrastructure with optimized API endpoint response times.",
    outcomes: [
      "Secure JWT authentication with httpOnly cookie storage and refresh token rotation.",
      "MongoDB aggregation pipelines for user channel analytics and video feed generation.",
    ],
    architecture: [
      "Node.js/Express API with modular controller & middleware architecture.",
      "MongoDB database with compound indexing for video search and interaction metrics.",
    ],
    tech: ["Node.js", "Express", "MongoDB", "React", "Tailwind CSS", "Cloudinary"],
    tags: ["Backend Engineering", "Node.js", "MongoDB", "Video Processing"],
    status: "Case Study",
    featured: false,
    createdAt: "2025-08-15T00:00:00.000Z",
    metrics: [
      { label: "Security", value: "JWT + HttpOnly" },
      { label: "Architecture", value: "Modular Express" },
      { label: "Database", value: "MongoDB Aggregations" },
    ],
  },
  {
    id: "fiinora-ai",
    title: "Fiinora AI",
    slug: "fiinora-ai",
    image: "/slides/conversion-engine.svg",
    githubUrl: "https://github.com/Aamirtechvibes/fiinora-ai",
    role: "AI Engineer",
    category: "engineering",
    description:
      "An intelligent financial analytics assistant that turns raw transaction records into natural language insights.",
    teaser: "Automated financial intelligence with LLM structured parsing.",
    problem:
      "Personal finance platforms display static graphs without contextual reasoning or personalized financial recommendations.",
    whyBuilt:
      "Built to demonstrate how LLMs can transform financial data streams into conversational, actionable guidance.",
    users: ["Individual Investors", "Finance Enthusiasts"],
    solution:
      "Developed a Python/FastAPI backend that ingests transaction ledgers, computes spending anomalies, and interfaces with OpenAI to deliver structured insights.",
    impact:
      "Provides natural language financial advice grounded in verifiable ledger calculations.",
    outcomes: [
      "Structured output schemas enforcing strict JSON formats for financial summaries.",
      "FastAPI backend with vector retrieval for personal finance knowledge.",
    ],
    architecture: [
      "Python FastAPI microservice with Pydantic payload validation.",
      "OpenAI API integration with JSON mode enforcement.",
    ],
    tech: ["Python", "FastAPI", "OpenAI API", "Next.js", "Tailwind CSS", "PostgreSQL"],
    tags: ["AI Engineering", "Financial Tech", "Python", "FastAPI"],
    status: "Case Study",
    featured: false,
    createdAt: "2025-06-20T00:00:00.000Z",
    metrics: [
      { label: "Backend", value: "FastAPI + Pydantic" },
      { label: "LLM Output", value: "Strict JSON" },
      { label: "Domain", value: "FinTech AI" },
    ],
  },
  {
    id: "outbreaklens",
    title: "OutbreakLens",
    slug: "outbreaklens",
    image: "/slides/system-blueprint.svg",
    githubUrl: "https://github.com/Aamirtechvibes/outbreaklens",
    role: "ML & Backend Engineer",
    category: "engineering",
    description:
      "A Machine Learning & Computer Vision analytical platform for early disease signal monitoring and spatial visualization.",
    teaser: "Spatial machine learning for epidemic signal tracking.",
    problem:
      "Early epidemiological tracking requires real-time synthesis of visual indicators and spatial health datasets.",
    whyBuilt:
      "Built to explore computer vision inference pipelines and interactive geospatial dashboards.",
    users: ["Health Researchers", "Epidemiologists"],
    solution:
      "Constructed a PyTorch & OpenCV inference API linked to an interactive web dashboard for monitoring visual indicators and spatial risk metrics.",
    impact:
      "Demonstrated fast visual signal processing combined with interactive spatial telemetry.",
    outcomes: [
      "Computer vision pipeline detecting visual anomaly patterns in sample datasets.",
      "FastAPI REST endpoints serving model predictions with minimal latency.",
    ],
    architecture: [
      "PyTorch / OpenCV inference microservice.",
      "React + Tailwind visual telemetry interface.",
    ],
    tech: ["Python", "PyTorch", "OpenCV", "FastAPI", "React", "Tailwind CSS"],
    tags: ["Machine Learning", "Computer Vision", "Python", "FastAPI"],
    status: "Case Study",
    featured: false,
    createdAt: "2025-04-10T00:00:00.000Z",
    metrics: [
      { label: "ML Stack", value: "PyTorch + OpenCV" },
      { label: "API Layer", value: "FastAPI Services" },
      { label: "Domain", value: "Spatial ML" },
    ],
  },
];
