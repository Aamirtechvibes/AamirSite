import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { ProjectCard } from "@/components/projects/project-card";
import { getProjectBySlug, listProjects } from "@/lib/services/project-service";
import { formatProjectDate } from "@/lib/utils/format";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project not found",
    };
  }

  return {
    title: project.title,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const relatedProjects = (await listProjects()).filter((item) => item.slug !== project.slug).slice(0, 3);

  return (
    <main className="mx-auto max-w-7xl px-6 pb-24 pt-28 lg:px-8">
      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <section className="panel-shadow panel-surface rounded-[2rem] border border-slate-200/70 p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
            Project Detail
          </p>
          <div className="mt-5 flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-blue-700">
              {project.status}
            </span>
            <span className="text-sm text-slate-500">{formatProjectDate(project.createdAt)}</span>
          </div>
          <h1 className="mt-5 text-balance text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
            {project.title}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">{project.description}</p>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {project.metrics.map((metric) => (
              <div
                key={metric.label}
                className="rounded-[1.35rem] border border-slate-200 bg-white/80 p-5"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
                  {metric.label}
                </p>
                <p className="mt-3 text-2xl font-semibold text-slate-950">{metric.value}</p>
              </div>
            ))}
          </div>
        </section>

        <aside className="panel-shadow panel-surface rounded-[2rem] border border-slate-200/70 p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-600">
            Context
          </p>
          <div className="mt-5 space-y-6">
            <div>
              <h2 className="text-base font-semibold text-slate-950">Why it exists</h2>
              <p className="mt-2 text-sm leading-7 text-slate-600">{project.whyBuilt}</p>
            </div>
            <div>
              <h2 className="text-base font-semibold text-slate-950">Built for</h2>
              <ul className="mt-2 space-y-2 text-sm leading-7 text-slate-600">
                {project.users.map((user) => (
                  <li key={user} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-blue-500" />
                    <span>{user}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-base font-semibold text-slate-950">Tech</h2>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.tech.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </aside>
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        <article className="panel-shadow panel-surface rounded-[1.75rem] border border-slate-200/70 p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-600">Problem</p>
          <p className="mt-4 text-base leading-8 text-slate-600">{project.problem}</p>
        </article>
        <article className="panel-shadow panel-surface rounded-[1.75rem] border border-slate-200/70 p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-600">Solution</p>
          <p className="mt-4 text-base leading-8 text-slate-600">{project.solution}</p>
        </article>
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <article className="panel-shadow panel-surface rounded-[1.75rem] border border-slate-200/70 p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-600">Impact</p>
          <p className="mt-4 text-base leading-8 text-slate-600">{project.impact}</p>
          <ul className="mt-6 space-y-3 text-sm leading-7 text-slate-600">
            {project.outcomes.map((outcome) => (
              <li key={outcome} className="flex gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-blue-500" />
                <span>{outcome}</span>
              </li>
            ))}
          </ul>
        </article>
        <article className="panel-shadow panel-surface rounded-[1.75rem] border border-slate-200/70 p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-600">
            Architecture
          </p>
          <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-600">
            {project.architecture.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-blue-500" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </article>
      </div>

      <div className="section-divider mt-16 pt-12">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-blue-600">
              More systems
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
              Explore adjacent case studies
            </h2>
          </div>
          <Link
            href="/systems"
            className="text-sm font-semibold text-slate-900 transition hover:text-blue-600"
          >
            Back to systems →
          </Link>
        </div>
        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {relatedProjects.map((item) => (
            <ProjectCard key={item.slug} project={item} />
          ))}
        </div>
      </div>
    </main>
  );
}
