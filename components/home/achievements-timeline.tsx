import Image from "next/image";

import { SectionShell } from "@/components/ui/section-shell";
import { achievementsData } from "@/lib/data/achievements";

export function AchievementsTimeline() {
  return (
    <SectionShell
      eyebrow="Proof Through Building"
      title="Built in public. Learned by shipping."
      description="Hackathon wins, university competitions, public speaking, and community milestones."
    >
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {achievementsData.map((item) => (
          <article
            key={item.id}
            className="panel-shadow panel-surface group flex flex-col justify-between overflow-hidden rounded-[1.75rem] border border-slate-200/70 transition hover:-translate-y-1 hover:border-blue-300"
          >
            <div className="relative aspect-[1.35/1] w-full overflow-hidden bg-slate-100">
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
              <span className="absolute bottom-3 left-4 rounded-full bg-blue-600/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-white backdrop-blur-sm">
                {item.award}
              </span>
            </div>

            <div className="flex flex-1 flex-col justify-between p-6">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-blue-600">
                  {item.organization} · {item.date}
                </p>
                <h3 className="mt-2 text-lg font-semibold text-slate-950">{item.title}</h3>
                <p className="mt-3 text-xs leading-relaxed text-slate-600">{item.description}</p>
              </div>

              <div className="mt-6 flex flex-wrap gap-1.5 pt-3 border-t border-slate-200/50">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-slate-200 bg-white px-2.5 py-0.5 text-[10px] font-medium text-slate-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
