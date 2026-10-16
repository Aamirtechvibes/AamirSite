import { SectionShell } from "@/components/ui/section-shell";
import { experienceData } from "@/lib/data/experience";

export function ExperienceSection() {
  return (
    <SectionShell
      eyebrow="Real-World Work"
      title="Client & Industry Experience"
      description="Factual software engineering consultancy work for live technology businesses."
    >
      <div className="grid gap-6 md:grid-cols-2">
        {experienceData.map((exp) => (
          <article
            key={exp.company}
            className="panel-shadow panel-surface rounded-[1.75rem] border border-slate-200/70 p-7 transition hover:border-blue-300 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between gap-4">
                <a
                  href={exp.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl font-semibold text-slate-950 hover:text-blue-600 transition flex items-center gap-1.5"
                >
                  {exp.company}
                  <span className="text-sm font-normal text-blue-600">↗</span>
                </a>
                <span className="rounded-full bg-blue-50 px-3 py-1 text-[11px] font-semibold text-blue-700">
                  {exp.period}
                </span>
              </div>
              <p className="mt-2 text-xs font-semibold uppercase tracking-[0.24em] text-blue-600">
                {exp.role}
              </p>
              <p className="mt-4 text-sm leading-7 text-slate-600">{exp.description}</p>
            </div>

            <ul className="mt-6 space-y-2 pt-4 border-t border-slate-200/50 text-xs text-slate-600">
              {exp.highlights.map((highlight) => (
                <li key={highlight} className="flex gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
