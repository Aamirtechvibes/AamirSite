import type { Metadata } from "next";

import { SystemsPage } from "@/components/projects/systems-page";
import { listProjects } from "@/lib/services/project-service";

export const metadata: Metadata = {
  title: "Systems",
  description: "Interactive project exploration focused on architecture, product logic, and system design.",
};

export default async function SystemsRoute() {
  const projects = await listProjects();

  return (
    <main className="mx-auto max-w-7xl px-6 pb-20 pt-28 lg:px-8">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.32em] text-blue-600">
          System Explorer
        </p>
        <h1 className="mt-4 text-balance text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
          Explore the projects through their logic, not just their visuals.
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
          This view is built for founders, hiring teams, and collaborators who want to understand
          the reasoning, boundaries, and business outcomes behind each system.
        </p>
      </div>
      <SystemsPage initialProjects={projects} />
    </main>
  );
}
