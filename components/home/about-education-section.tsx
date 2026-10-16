import { SectionShell } from "@/components/ui/section-shell";
import { educationInfo } from "@/lib/data/content";

export function AboutEducationSection() {
  return (
    <SectionShell
      eyebrow="Background"
      title="Engineering & Education"
      description="Computer engineering foundation paired with real product execution."
    >
      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="panel-shadow panel-surface rounded-[1.75rem] border border-slate-200/70 p-7">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-600">
            About Aamir
          </p>
          <h3 className="mt-3 text-2xl font-semibold text-slate-950">
            Building at the intersection of engineering, AI, and products.
          </h3>
          <p className="mt-4 text-sm leading-8 text-slate-600">
            I am a 3rd-year Computer Engineering student positioning myself as an AI Engineer
            specializing in Production Agentic AI, LLM Systems, and Backend Infrastructure. I build
            systems that solve concrete business problems—from multi-agent WhatsApp commerce
            operating systems to real-world café QR ordering platforms with active paying users.
          </p>
          <p className="mt-4 text-sm leading-8 text-slate-600">
            My philosophy is grounded in shipping real systems, validating hypotheses with real users,
            and learning under hackathon pressure.
          </p>
        </div>

        <div className="panel-shadow panel-surface rounded-[1.75rem] border border-slate-200/70 p-7 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between gap-4">
              <span className="rounded-full bg-blue-50 px-3 py-1 text-[11px] font-semibold text-blue-700">
                {educationInfo.period}
              </span>
              <span className="text-xs font-semibold text-slate-500">{educationInfo.location}</span>
            </div>
            <h3 className="mt-4 text-2xl font-semibold text-slate-950">{educationInfo.degree}</h3>
            <p className="mt-2 text-sm font-semibold text-blue-600">{educationInfo.institution}</p>
            <p className="mt-4 text-sm leading-7 text-slate-600">{educationInfo.description}</p>
          </div>

          <div className="mt-6 pt-4 border-t border-slate-200/50">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
              Focus Areas
            </p>
            <p className="mt-2 text-xs text-slate-600 leading-relaxed">
              Agentic Systems · Distributed Backends · Database Concurrency · Cloud Infra · Product
              UX
            </p>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
