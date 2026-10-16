import Link from "next/link";

import type { Project } from "@/types";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/project/${project.slug}`}
      className="panel-shadow panel-surface group flex h-full flex-col rounded-[1.75rem] border border-slate-200/70 p-7 transition hover:-translate-y-1 hover:border-blue-300"
    >
      <div className="flex items-center justify-between gap-4">
        <span className="rounded-full bg-blue-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-blue-700">
          {project.status}
        </span>
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400 transition group-hover:text-blue-600">
          Open →
        </span>
      </div>
      <h3 className="mt-5 text-2xl font-semibold tracking-tight text-slate-950">{project.title}</h3>
      <p className="mt-4 text-sm leading-7 text-slate-600">{project.description}</p>
      <div className="mt-6 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-slate-200 bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-600"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="mt-6 grid gap-3 sm:grid-cols-3">
        {project.metrics.map((metric) => (
          <div key={metric.label} className="rounded-[1.1rem] border border-slate-200 bg-white/80 p-4">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500">
              {metric.label}
            </p>
            <p className="mt-2 text-sm font-semibold text-slate-950">{metric.value}</p>
          </div>
        ))}
      </div>
    </Link>
  );
}
