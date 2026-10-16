function escapePdfText(value: string) {
  return value.replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)");
}

function buildPdf(lines: string[]) {
  const content = [
    "BT",
    "/F1 20 Tf",
    "50 790 Td",
    `(${escapePdfText(lines[0] ?? "")}) Tj`,
    "0 -24 Td",
    "/F1 10 Tf",
    "14 TL",
    ...lines.slice(1).map((line) => `(${escapePdfText(line)}) Tj T*`),
    "ET",
  ].join("\n");

  const objects = [
    "<< /Type /Catalog /Pages 2 0 R >>",
    "<< /Type /Pages /Count 1 /Kids [3 0 R] >>",
    "<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595 842] /Contents 4 0 R /Resources << /Font << /F1 5 0 R >> >> >>",
    `<< /Length ${Buffer.byteLength(content, "utf8")} >>\nstream\n${content}\nendstream`,
    "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>",
  ];

  let pdf = "%PDF-1.4\n";
  const offsets: number[] = [0];

  objects.forEach((object, index) => {
    offsets.push(Buffer.byteLength(pdf, "utf8"));
    pdf += `${index + 1} 0 obj\n${object}\nendobj\n`;
  });

  const xrefStart = Buffer.byteLength(pdf, "utf8");
  pdf += `xref\n0 ${objects.length + 1}\n`;
  pdf += "0000000000 65535 f \n";

  offsets.slice(1).forEach((offset) => {
    pdf += `${offset.toString().padStart(10, "0")} 00000 n \n`;
  });

  pdf += `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xrefStart}\n%%EOF`;

  return pdf;
}

export async function GET() {
  const pdf = buildPdf([
    "AAMIR KHAN",
    "AI Engineer · Production Agentic AI · LLM Systems · Backend & Cloud",
    "Email: vasmo.aamir@gmail.com | GitHub: github.com/Aamirtechvibes | LinkedIn: linkedin.com/in/vasmo-aamir",
    "Location: Mumbai, India (Open to Mumbai, Bangalore, Remote)",
    "",
    "EDUCATION",
    "BE in Computer Engineering | Rizvi College of Engineering, Mumbai (2024 - 2028)",
    "",
    "TECHNICAL CAPABILITIES",
    "- AI & Agentic: LangGraph, Multi-Agent Systems, Dynamic Tool Calling, OpenAI/Gemini APIs, ReAct Loops, RAG",
    "- Backend & Data: Python, FastAPI, Node.js, Express, PostgreSQL (ACID / Concurrency), Supabase, MongoDB, HMAC Webhooks",
    "- Frontend & Web: Next.js App Router, React, TypeScript, Tailwind CSS, Framer Motion, WebSockets",
    "- Cloud & Tools: AWS, Docker, Git, Vercel",
    "",
    "FEATURED PRODUCTION PROJECTS",
    "1. BizMate — WhatsApp-First Multi-Agent AI Business Assistant (Founder & Lead AI Engineer)",
    "   - Built multi-agent engine (Manager, Sales, Finance, Social, Ops) for WhatsApp business automation.",
    "   - State graph management with LangGraph & real-time agent control office over WebSockets.",
    "",
    "2. Vyapar Commerce OS — Autonomous B2B Quote-to-Cash Engine (Lead AI Engineer)",
    "   - Agentic workflow evaluating volume margin thresholds & inventory stock before buyer dispatch.",
    "   - Handled RFQs, quotes, payment link dispatch, and store-owner approval gates.",
    "",
    "3. Coffee on QR — QR Dine-in Table Ordering & Wallet CRM (Founder & Full-Stack Engineer)",
    "   - Production table-ordering platform with digital wallet retention & automated WhatsApp CRM.",
    "   - Active paying customers; Fast-tracked at Eureka! IIT Bombay E-Cell.",
    "",
    "4. Agent Aamir — Autonomous Agent Control Room & Tool Execution (AI Architect)",
    "   - Real-time control room displaying prompt trajectories, tool invocation logs, and human-in-the-loop gates.",
    "",
    "HONORS & HACKATHON ACHIEVEMENTS",
    "- 1st Prize Winner — NIT Hamirpur Hackathon (Team Heuristics)",
    "- Fast-Tracked Finalist — Eureka! IIT Bombay E-Cell (Coffee on QR)",
    "- 1st Prize Winner (₹10,000) — TCET College Hackathon",
    "- Top Finalist — NASA Space Apps Challenge (Nashik)",
    "- Multi-Agent AI Builder — AWS Bharat Build Tour & AWS Hackathon at IIT Bombay",
    "- Speaker / Presenter — Mumbai Hacks Stage",
  ]);

  return new Response(Buffer.from(pdf, "utf8"), {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": 'attachment; filename="Aamir_Khan_Resume.pdf"',
      "Cache-Control": "public, max-age=0, must-revalidate",
    },
  });
}
