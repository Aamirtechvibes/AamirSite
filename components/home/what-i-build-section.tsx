import { SectionShell } from "@/components/ui/section-shell";
import { whatIBuildCards } from "@/lib/data/content";

export function WhatIBuildSection() {
  return (
    <SectionShell
      eyebrow="Capabilities"
      title="What I build"
      description="Production-grade AI systems, agentic workflows, backend infrastructure, and commercial products engineered end-to-end."
    >
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {whatIBuildCards.map((card) => (
          <article
            key={card.number}
            className="panel-shadow panel-surface flex flex-col justify-between rounded-[1.75rem] border border-slate-200/70 p-7 transition hover:-translate-y-1 hover:border-blue-300"
          >
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-600">
                {card.number}
              </span>
              <h3 className="mt-4 text-2xl font-semibold tracking-tight text-slate-950">
                {card.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{card.description}</p>
            </div>
            <div className="mt-6 flex flex-wrap gap-2 pt-4 border-t border-slate-200/50">
              {card.tech.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-blue-200 bg-blue-50/70 px-3 py-1 text-[11px] font-medium text-blue-700"
                >
                  {item}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
