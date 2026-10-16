import type { Project } from "@/types";

async function parseResponse<T>(response: Response): Promise<T> {
  if (!response.ok) {
    const fallback = { message: "Request failed." };
    const body = (await response.json().catch(() => fallback)) as { message?: string };
    throw new Error(body.message || fallback.message);
  }

  return response.json() as Promise<T>;
}

export async function fetchProjectsFromApi() {
  const response = await fetch("/api/projects", {
    cache: "no-store",
  });

  const payload = await parseResponse<{ projects: Project[] }>(response);
  return payload.projects;
}

export async function fetchProjectFromApi(slug: string) {
  const response = await fetch(`/api/projects/${slug}`, {
    cache: "no-store",
  });

  const payload = await parseResponse<{ project: Project }>(response);
  return payload.project;
}
