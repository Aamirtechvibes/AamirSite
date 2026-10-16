insert into public.projects (
  title,
  slug,
  description,
  teaser,
  problem,
  why_built,
  users,
  solution,
  impact,
  outcomes,
  architecture,
  metrics,
  tech,
  tags,
  status,
  featured,
  created_at
)
values
  (
    'Signal Desk',
    'signal-desk',
    'A calm incident intelligence workspace that turns operational noise into clear response decisions.',
    'From alert chaos to one accountable command surface.',
    'Support, engineering, and operations were jumping between Slack, dashboards, and spreadsheets while active incidents were still unfolding.',
    'I wanted to prove that better operational systems come from reducing ambiguity, not adding more dashboards.',
    '["Operations leads", "On-call engineers", "Customer support managers"]'::jsonb,
    'Built a single incident rail that merges alerts, assigns severity, exposes ownership, and keeps customer impact visible as conditions change.',
    'When replayed against historical incidents, the workflow reduced triage overhead from 18 minutes to under 6 and removed blind handoffs.',
    '["Severity scoring aligned response time to real customer exposure.", "Teams could see owner changes and mitigation decisions in one place.", "Executives received a cleaner live status narrative without interrupting responders."]'::jsonb,
    '["Alert ingestion normalizes mixed signals into a single incident model.", "A scoring layer combines service health, customer impact, and recency.", "A timeline UI keeps every decision, assignee, and resolution checkpoint observable."]'::jsonb,
    '[{"label":"Triage time","value":"-67%"},{"label":"Context switches","value":"-4 tools"},{"label":"Response clarity","value":"+1 shared source"}]'::jsonb,
    '["Next.js", "TypeScript", "Supabase", "Realtime", "Framer Motion"]'::jsonb,
    '["Systems Design", "Operations", "Realtime UX"]'::jsonb,
    'Live',
    true,
    '2026-02-12T00:00:00.000Z'
  ),
  (
    'Commerce Control Tower',
    'commerce-control-tower',
    'A quote-to-shipment orchestration system for high-consideration commerce teams.',
    'A sales pipeline that behaves like an operating system.',
    'Revenue teams were treating pricing, fulfillment, and client onboarding as separate workflows, which caused slow handoffs and margin leakage.',
    'The opportunity was not another CRM view. It was a system that lets commercial teams see downstream consequences before committing upstream decisions.',
    '["Founders", "Sales operators", "Fulfillment managers"]'::jsonb,
    'Designed a unified workflow where proposal logic, capacity signals, margin buffers, and launch readiness live in one operating surface.',
    'Pilot modeling showed teams could shorten quote cycles by 31 percent while catching fulfillment risks before contracts were signed.',
    '["Sales could price with real capacity and margin context.", "Operations received structured handoffs instead of free-form notes.", "Leadership gained a clearer forecast of operational risk, not just pipeline value."]'::jsonb,
    '["Rule-based pricing engine checks margin thresholds before quote approval.", "Fulfillment readiness model scores onboarding complexity and inventory exposure.", "A shared project workspace aligns revenue and delivery teams around the same record."]'::jsonb,
    '[{"label":"Quote cycle","value":"-31%"},{"label":"Margin leakage","value":"-12%"},{"label":"Handoff quality","value":"+1 shared record"}]'::jsonb,
    '["Next.js", "Route Handlers", "Supabase", "PostgreSQL", "Tailwind CSS"]'::jsonb,
    '["Business Systems", "Conversion", "Platform Thinking"]'::jsonb,
    'Case Study',
    true,
    '2025-11-20T00:00:00.000Z'
  ),
  (
    'Research Loop',
    'research-loop',
    'An AI-assisted synthesis system that converts fragmented user research into reusable product intelligence.',
    'Research that compounds instead of disappearing into slides.',
    'Teams were interviewing users and shipping experiments, but the learning was trapped inside decks and disconnected notes.',
    'The core idea was simple: research should become infrastructure for better decisions, not an archive of completed projects.',
    '["Product managers", "Design leads", "AI researchers"]'::jsonb,
    'Created a structured evidence layer that groups interviews, experiments, and product signals into themes, tensions, and next decisions.',
    'The system made recurring signals visible faster and gave product teams a shared memory they could use during roadmap planning.',
    '["Interview evidence became searchable by theme and business risk.", "Research could inform product priorities without another synthesis sprint.", "Teams gained a living record of assumptions, not just final conclusions."]'::jsonb,
    '["Evidence ingestion standardizes qualitative notes and experiment outputs.", "A synthesis layer groups related observations into durable themes.", "Decision summaries surface open questions, confidence, and next tests."]'::jsonb,
    '[{"label":"Synthesis speed","value":"+2.3x"},{"label":"Reusable insights","value":"+1 living memory"},{"label":"Planning confidence","value":"+clear evidence trails"}]'::jsonb,
    '["Next.js", "Supabase", "Embeddings-ready schema", "Framer Motion"]'::jsonb,
    '["AI Systems", "Research Ops", "Knowledge Design"]'::jsonb,
    'In Progress',
    true,
    '2026-01-07T00:00:00.000Z'
  ),
  (
    'Field Ops Loop',
    'field-ops-loop',
    'An offline-first reporting loop for distributed teams capturing on-the-ground operational signals.',
    'Frontline data that reaches the system before problems escalate.',
    'Distributed field teams were capturing critical updates in chat, voice notes, and photos, but headquarters only saw partial context after the fact.',
    'I wanted to connect frontline reality with back-office planning without forcing field teams into bloated workflows.',
    '["Regional managers", "Field operators", "Operations analysts"]'::jsonb,
    'Designed a lightweight reporting surface with offline capture, structured issue taxonomy, and escalation flows tied to business priority.',
    'Teams could identify repeat failures earlier and route follow-up work based on severity rather than who happened to notice first.',
    '["Field teams submitted cleaner updates with less typing.", "Escalations mapped directly to response owners and deadlines.", "Operations could spot repeating failure clusters across locations."]'::jsonb,
    '["Offline-first capture queues updates locally until the network recovers.", "Issue taxonomy normalizes photos, tags, and severity into structured records.", "A routing layer pushes escalations to the right owner based on location and issue type."]'::jsonb,
    '[{"label":"Escalation lag","value":"-42%"},{"label":"Reporting friction","value":"-1.7 min/report"},{"label":"Pattern visibility","value":"+network-wide clustering"}]'::jsonb,
    '["Next.js", "Supabase", "PostgreSQL", "PWA-ready patterns"]'::jsonb,
    '["Operational UX", "Offline-first", "System Reliability"]'::jsonb,
    'Case Study',
    false,
    '2025-08-30T00:00:00.000Z'
  )
on conflict (slug) do update
set
  title = excluded.title,
  description = excluded.description,
  teaser = excluded.teaser,
  problem = excluded.problem,
  why_built = excluded.why_built,
  users = excluded.users,
  solution = excluded.solution,
  impact = excluded.impact,
  outcomes = excluded.outcomes,
  architecture = excluded.architecture,
  metrics = excluded.metrics,
  tech = excluded.tech,
  tags = excluded.tags,
  status = excluded.status,
  featured = excluded.featured,
  created_at = excluded.created_at;

insert into public.content (type, data)
values
  (
    'hero',
    '{
      "slides": [
        {
          "id": "slide-systems",
          "eyebrow": "Systems over screenshots",
          "title": "Interfaces built to reveal intent, trade-offs, and operating logic.",
          "description": "Every project here is framed around why it exists, what constraint shaped it, and how the system behaves under pressure.",
          "image": "/slides/system-blueprint.svg",
          "stat": "4 system case studies"
        },
        {
          "id": "slide-research",
          "eyebrow": "Research that compounds",
          "title": "AI and product thinking translated into reusable decision systems.",
          "description": "I use research to reduce ambiguity, surface leverage, and make future product moves easier to justify.",
          "image": "/slides/research-grid.svg",
          "stat": "6 live research signals"
        },
        {
          "id": "slide-impact",
          "eyebrow": "Business-aware execution",
          "title": "Product experiences that connect interaction quality to business outcomes.",
          "description": "The goal is not elegant code alone. The goal is a system that earns trust, reduces friction, and drives movement.",
          "image": "/slides/conversion-engine.svg",
          "stat": "Visitor -> trust -> action"
        }
      ]
    }'::jsonb
  ),
  (
    'forYou',
    '{
      "items": [
        {
          "audience": "If you are hiring a builder",
          "title": "You need someone who can see the whole machine.",
          "description": "I connect product intent, technical constraints, data models, and conversion logic so the final experience feels coherent, not stitched together."
        },
        {
          "audience": "If you are validating a product",
          "title": "The right system removes ambiguity before it removes effort.",
          "description": "I focus on where users hesitate, where teams lose context, and where the business leaks momentum, then design the operating system around those gaps."
        },
        {
          "audience": "If you need a long-term partner",
          "title": "Short-term shipping is strongest when the architecture is honest.",
          "description": "I optimize for systems that can evolve: clear service boundaries, content models, analytics hooks, and interfaces that still make sense six months later."
        }
      ]
    }'::jsonb
  ),
  (
    'research',
    '{
      "items": [
        {
          "title": "AI products need memory before they need more prompts.",
          "summary": "Most agent experiences fail because they generate outputs without preserving the reasoning trail, evidence, or confidence behind them.",
          "signal": "Persistent memory design is becoming a product differentiator.",
          "focus": ["AI systems", "Knowledge persistence", "Trust design"]
        },
        {
          "title": "Operational tools win when they reduce narrative friction.",
          "summary": "Teams do not just need data. They need a shared story about what changed, who owns it, and what happens next.",
          "signal": "Decision clarity beats dashboard density.",
          "focus": ["Operations", "Interfaces", "Decision systems"]
        },
        {
          "title": "Portfolios convert when they explain judgment, not just output.",
          "summary": "The strongest signal is not a polished screen. It is evidence that the builder understands leverage, constraints, and second-order effects.",
          "signal": "Narrative depth increases trust faster than feature lists.",
          "focus": ["Positioning", "Trust", "Product storytelling"]
        }
      ]
    }'::jsonb
  ),
  (
    'vision',
    '{
      "items": [
        {
          "title": "Build products that make complexity usable.",
          "description": "The future belongs to systems that absorb backend complexity and return confidence, direction, and momentum to the person using them.",
          "horizon": "Now -> 2 years",
          "outcomes": [
            "Sharper operating interfaces for teams under pressure",
            "AI copilots that preserve context instead of hiding it",
            "Products that reveal trade-offs instead of masking them"
          ]
        },
        {
          "title": "Turn research into durable infrastructure.",
          "description": "Research should not end when a project ships. It should become a living layer that improves roadmaps, positioning, and product quality over time.",
          "horizon": "Next 12 months",
          "outcomes": [
            "Evidence systems that survive team changes",
            "Decision logs tied to outcomes and learning loops",
            "Smarter strategy grounded in observable user truth"
          ]
        },
        {
          "title": "Design conversion as a systems problem.",
          "description": "Trust is built through sequence: the right proof at the right moment, with the right level of depth and the right escape hatch into action.",
          "horizon": "Always-on principle",
          "outcomes": [
            "Clearer attention funnels for product-led businesses",
            "Interfaces that convert curiosity into conviction",
            "Analytics that explain behavior, not just traffic"
          ]
        }
      ]
    }'::jsonb
  )
on conflict (type) do update
set data = excluded.data;
