"use client";

import { startTransition, useCallback, useEffect, useState } from "react";

import { fetchProjectsFromApi } from "@/lib/api/projects";
import type { Project } from "@/types";

export function useProjectCatalog(initialProjects: Project[] = []) {
  const [projects, setProjects] = useState<Project[]>(initialProjects);
  const [isLoading, setIsLoading] = useState(initialProjects.length === 0);
  const [error, setError] = useState<string | null>(null);

  const loadProjects = useCallback(async () => {
    try {
      setIsLoading(true);
      const nextProjects = await fetchProjectsFromApi();

      startTransition(() => {
        setProjects(nextProjects);
        setError(null);
      });
    } catch (loadError) {
      setError(loadError instanceof Error ? loadError.message : "Unable to load projects.");
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    void loadProjects();
  }, [loadProjects]);

  return { projects, isLoading, error, reload: loadProjects };
}
