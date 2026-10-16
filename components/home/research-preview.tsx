import Link from "next/link";

import { SectionShell } from "@/components/ui/section-shell";
import type { ResearchNote } from "@/types";

export function ResearchPreview({ notes }: { notes: ResearchNote[] }) {
  return (
    <SectionShell
      eyebrow="Research"
      title="Serious thinking about AI, product systems, and decision quality."
      description="Research matters here because it changes how products are structured. These notes are not content marketing. They are operating assumptions behind the builds."
    >
      <div className="grid gap-6 lg:grid-cols-3">
        {notes.map((note) => (
          <article
            key={note.title}
            className="panel-shadow panel-surface rounded-[1.75rem] border border-slate-200/70 p-7"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-600">
              {note.signal}
            </p>
            <h3 className="mt-4 text-2xl font-semibold tracking-tight text-slate-950">
              {note.title}
            </h3>
            <p className="mt-4 text-sm leading-7 text-slate-600">{note.summary}</p>
          </article>
        ))}
      </div>
      <Link
        href="/research"
        className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-slate-900 transition hover:text-blue-600"
      >
        Go deeper into research
        <span aria-hidden="true">→</span>
      </Link>
    </SectionShell>
  );
}
