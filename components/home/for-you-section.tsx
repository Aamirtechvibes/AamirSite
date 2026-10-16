import { Capsule } from "@/components/ui/capsule";
import { SectionShell } from "@/components/ui/section-shell";
import type { SkillCluster, StoryPoint } from "@/types";

type ForYouSectionProps = {
  storyPoints: StoryPoint[];
  skillClusters: SkillCluster[];
};

export function ForYouSection({ storyPoints, skillClusters }: ForYouSectionProps) {
  return (
    <SectionShell
      eyebrow="For you"
      title="Designed to answer the real hiring and product questions."
      description="This portfolio is structured to reduce guesswork. Instead of asking you to infer depth from screenshots, it shows the system thinking behind the work."
    >
      <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="grid gap-6">
          {storyPoints.map((point) => (
            <article
              key={point.title}
              className="panel-shadow panel-surface rounded-[1.75rem] border border-slate-200/70 p-7"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-600">
                {point.audience}
              </p>
              <h3 className="mt-4 text-2xl font-semibold tracking-tight text-slate-950">
                {point.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-slate-600">{point.description}</p>
            </article>
          ))}
        </div>
        <div className="grid gap-4">
          {skillClusters.map((cluster) => (
            <Capsule key={cluster.title} cluster={cluster} />
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
