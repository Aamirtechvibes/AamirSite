import Link from "next/link";

import { SectionShell } from "@/components/ui/section-shell";
import type { VisionPillar } from "@/types";

export function VisionPreview({ pillars }: { pillars: VisionPillar[] }) {
  return (
    <SectionShell
      eyebrow="Vision"
      title="A long-term view grounded in systems, trust, and business outcomes."
      description="The portfolio should show what I can build today and what kind of product/company problems I want to keep solving over the next several years."
    >
      <div className="grid gap-6 lg:grid-cols-3">
        {pillars.map((pillar) => (
          <article
            key={pillar.title}
            className="panel-shadow panel-surface rounded-[1.75rem] border border-slate-200/70 p-7"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-600">
              {pillar.horizon}
            </p>
            <h3 className="mt-4 text-2xl font-semibold tracking-tight text-slate-950">
              {pillar.title}
            </h3>
            <p className="mt-4 text-sm leading-7 text-slate-600">{pillar.description}</p>
          </article>
        ))}
      </div>
      <Link
        href="/vision"
        className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-slate-900 transition hover:text-blue-600"
      >
        See the long-term product direction
        <span aria-hidden="true">→</span>
      </Link>
    </SectionShell>
  );
}
