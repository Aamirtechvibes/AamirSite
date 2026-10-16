import { SectionShell } from "@/components/ui/section-shell";
import { howIBuildSteps } from "@/lib/data/content";

export function HowIBuildSection() {
  return (
    <SectionShell
      eyebrow="Engineering Philosophy"
      title="How I build"
      description="A disciplined 8-step engineering loop for turning complex business requirements into resilient production systems."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {howIBuildSteps.map((stepItem) => (
          <div
            key={stepItem.step}
            className="panel-shadow panel-surface flex flex-col justify-between rounded-[1.5rem] border border-slate-200/70 p-6 transition hover:border-blue-300"
          >
            <div>
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-950 text-xs font-semibold text-white">
                {stepItem.step}
              </span>
              <h3 className="mt-4 text-lg font-semibold text-slate-950">{stepItem.title}</h3>
              <p className="mt-2 text-xs leading-6 text-slate-600">{stepItem.description}</p>
            </div>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}
