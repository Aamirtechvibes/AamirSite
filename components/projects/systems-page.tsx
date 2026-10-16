"use client";

import SystemShowcase from "@/components/home/system-showcase";
import { ProjectCard } from "@/components/projects/project-card";
import { Button } from "@/components/ui/button";
import { useProjectCatalog } from "@/hooks/use-project-catalog";
import type { Project } from "@/types";

type SystemsPageProps = {
  initialProjects: Project[];
};

export function SystemsPage({ initialProjects }: SystemsPageProps) {
  const { projects, isLoading, error, reload } = useProjectCatalog(initialProjects);

  return (
    <div className="mt-10">
      <SystemShowcase
        compact
        eyebrow="Interactive layer"
        title="Scroll through the work like a living operating surface."
        description="The motion is controlled, the state changes are intentional, and each transition is there to reinforce how the underlying systems evolve."
        projects={projects.length > 0 ? projects : initialProjects}
      />

      <div className="section-divider mt-16 pt-12">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-blue-600">
              Full catalog
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
              Every system in one place
            </h2>
          </div>
          <div className="flex items-center gap-3">
            {error ? <p className="text-sm text-rose-600">{error}</p> : null}
            <Button variant="secondary" onClick={() => void reload()} disabled={isLoading}>
              {isLoading ? "Refreshing..." : "Refresh from API"}
            </Button>
          </div>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          {(projects.length > 0 ? projects : initialProjects).map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}
