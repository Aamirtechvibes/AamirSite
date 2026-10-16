import type { Metadata } from "next";
import Link from "next/link";

import { SectionShell } from "@/components/ui/section-shell";
import { getResearchNotes } from "@/lib/services/content-service";

export const metadata: Metadata = {
  title: "Research",
  description: "AI, product, and system-thinking research that informs how the portfolio work is built.",
};

export default async function ResearchPage() {
  const notes = await getResearchNotes();

  return (
    <main className="mx-auto max-w-7xl px-6 pb-20 pt-28 lg:px-8">
      <SectionShell
        eyebrow="Research Engine"
        title="AI and product thinking translated into operating assumptions."
        description="This section captures how I think about memory, trust, product signals, and the systems required to turn research into compounding leverage."
      >
        <div className="grid gap-6 lg:grid-cols-3">
          {notes.map((note) => (
            <article
              key={note.title}
              className="panel-shadow panel-surface flex h-full flex-col rounded-[1.75rem] border border-slate-200/70 p-7"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-600">
                {note.signal}
              </p>
              <h2 className="mt-4 text-2xl font-semibold tracking-tight text-slate-950">
                {note.title}
              </h2>
              <p className="mt-4 text-sm leading-7 text-slate-600">{note.summary}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {note.focus.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
        <div className="panel-shadow panel-surface mt-10 rounded-[1.75rem] border border-slate-200/70 p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-600">
            Research principle
          </p>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">
            Good research is not a document. It is infrastructure for better choices. That means
            preserving evidence, surfacing confidence, and letting teams revisit assumptions when
            the environment changes.
          </p>
          <Link
            href="/systems"
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-slate-900 transition hover:text-blue-600"
          >
            See how that thinking shows up in shipped systems
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </SectionShell>
    </main>
  );
}
