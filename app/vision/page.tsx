import type { Metadata } from "next";

import { SectionShell } from "@/components/ui/section-shell";
import { getVisionPillars } from "@/lib/services/content-service";

export const metadata: Metadata = {
  title: "Vision",
  description: "Long-term product, business, and system-thinking direction.",
};

export default async function VisionPage() {
  const pillars = await getVisionPillars();

  return (
    <main className="mx-auto max-w-7xl px-6 pb-20 pt-28 lg:px-8">
      <SectionShell
        eyebrow="Long-term Thinking"
        title="What I am actually building toward."
        description="The throughline is simple: build products that make complex systems clearer, more trustworthy, and more economically effective."
      >
        <div className="grid gap-6 lg:grid-cols-3">
          {pillars.map((pillar) => (
            <article
              key={pillar.title}
              className="panel-shadow panel-surface flex h-full flex-col rounded-[1.75rem] border border-slate-200/70 p-7"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-600">
                {pillar.horizon}
              </p>
              <h2 className="mt-4 text-2xl font-semibold tracking-tight text-slate-950">
                {pillar.title}
              </h2>
              <p className="mt-4 text-sm leading-7 text-slate-600">{pillar.description}</p>
              <ul className="mt-6 space-y-3 text-sm leading-7 text-slate-600">
                {pillar.outcomes.map((outcome) => (
                  <li key={outcome} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-blue-500" />
                    <span>{outcome}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <div className="section-divider mt-12 pt-12">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="panel-shadow panel-surface rounded-[1.75rem] border border-slate-200/70 p-7">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-600">
                Business lens
              </p>
              <p className="mt-4 text-base leading-8 text-slate-600">
                Great systems help teams move with more certainty. That creates economic value
                through faster decisions, fewer handoff failures, clearer prioritization, and more
                durable trust.
              </p>
            </div>
            <div className="panel-shadow panel-surface rounded-[1.75rem] border border-slate-200/70 p-7">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-600">
                Product lens
              </p>
              <p className="mt-4 text-base leading-8 text-slate-600">
                The strongest products feel calm because the architecture is honest. That is the
                kind of system I want to keep building: fast, clear, adaptive, and easy to trust.
              </p>
            </div>
          </div>
        </div>
      </SectionShell>
    </main>
  );
}
