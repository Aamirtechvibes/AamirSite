import type { MetadataRoute } from "next";

import { listProjects } from "@/lib/services/project-service";
import { absoluteUrl } from "@/lib/utils/env";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const projects = await listProjects();

  const staticRoutes = ["", "/systems", "/research", "/vision"].map((route) => ({
    url: absoluteUrl(route || "/"),
    lastModified: new Date(),
  }));

  const projectRoutes = projects.map((project) => ({
    url: absoluteUrl(`/project/${project.slug}`),
    lastModified: new Date(project.createdAt),
  }));

  return [...staticRoutes, ...projectRoutes];
}
