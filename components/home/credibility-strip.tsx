import Image from "next/image";

const proofItems = [
  {
    category: "HACKATHONS",
    title: "Multiple Wins & Finalist",
    detail: "NIT-H Winner · NASA Space Apps Finalist · TCET 1st Prize",
  },
  {
    category: "AI SYSTEMS",
    title: "Production Agentic Workflows",
    detail: "LangGraph · Multi-Agent Routers · Dynamic Tool Execution",
  },
  {
    category: "PRODUCTS",
    title: "Real Products & Active Users",
    detail: "Coffee on QR · Paying Customers · Eureka! IIT Bombay",
  },
  {
    category: "COMMUNITY",
    title: "Recognized Ecosystem Builder",
    detail: "AWS Bharat Build · IIT Bombay · NASA Space Apps · WeMakeDevs",
  },
];

export function CredibilityStrip() {
  return (
    <section className="relative py-12 border-y border-slate-200/60 bg-white/40 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {proofItems.map((item) => (
            <div
              key={item.category}
              className="rounded-2xl border border-slate-200/70 bg-white/70 p-5 shadow-sm transition hover:border-blue-300"
            >
              <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-blue-600">
                {item.category}
              </p>
              <h3 className="mt-2 text-base font-semibold text-slate-950">{item.title}</h3>
              <p className="mt-1 text-xs text-slate-600 leading-relaxed">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
