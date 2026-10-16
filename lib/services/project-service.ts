import { seedProjects } from "@/lib/data/projects";
import { getSupabaseServerClient } from "@/lib/supabase/server";
import type { Project, ProjectCategory, ProjectMetric, ProjectStatus } from "@/types";

type ProjectRow = {
  id: string | number;
  title: string;
  slug: string;
  image?: string | null;
  live_url?: string | null;
  github_url?: string | null;
  role?: string | null;
  category?: string | null;
  description: string;
  teaser?: string | null;
  problem: string;
  why_built?: string | null;
  users?: unknown;
  solution: string;
  impact: string;
  outcomes?: unknown;
  architecture?: unknown;
  tech: unknown;
  tags: unknown;
  status: string;
  featured: boolean;
  created_at: string;
  metrics?: unknown;
};

function coerceStringArray(value: unknown) {
  if (!Array.isArray(value)) {
    return [];
  }

  return value.filter((item): item is string => typeof item === "string");
}

function coerceMetrics(value: unknown): ProjectMetric[] {
  if (!Array.isArray(value)) {
    return [];
  }

  return value
    .map((metric) => {
      if (
        typeof metric === "object" &&
        metric !== null &&
        "label" in metric &&
        "value" in metric &&
        typeof metric.label === "string" &&
        typeof metric.value === "string"
      ) {
        return { label: metric.label, value: metric.value };
      }

      return null;
    })
    .filter((metric): metric is ProjectMetric => Boolean(metric));
}

function normalizeStatus(status: string): ProjectStatus {
  if (status === "Live" || status === "In Progress" || status === "Case Study") {
    return status;
  }

  return "Case Study";
}

function normalizeCategory(category?: string | null): ProjectCategory {
  if (category === "system" || category === "engineering" || category === "product") {
    return category;
  }
  return "system";
}

function fallbackProjectImage(slug: string) {
  switch (slug) {
    case "bizmate":
      return "/hero-system.svg";
    case "vyapar-commerce-os":
      return "/slides/conversion-engine.svg";
    case "agent-aamir":
      return "/slides/system-blueprint.svg";
    case "coffee-on-qr":
      return "/slides/research-grid.svg";
    default:
      return "/hero-system.svg";
  }
}

function mapRowToProject(row: ProjectRow): Project {
  return {
    id: String(row.id),
    title: row.title,
    slug: row.slug,
    image: row.image || fallbackProjectImage(row.slug),
    liveUrl: row.live_url || undefined,
    githubUrl: row.github_url || undefined,
    role: row.role || "Lead Engineer & Builder",
    category: normalizeCategory(row.category),
    description: row.description,
    teaser: row.teaser || row.description,
    problem: row.problem,
    whyBuilt: row.why_built || "Built to solve complex operational and system bottlenecks.",
    users: coerceStringArray(row.users),
    solution: row.solution,
    impact: row.impact,
    outcomes: coerceStringArray(row.outcomes),
    architecture: coerceStringArray(row.architecture),
    tech: coerceStringArray(row.tech),
    tags: coerceStringArray(row.tags),
    status: normalizeStatus(row.status),
    featured: row.featured,
    createdAt: row.created_at,
    metrics: coerceMetrics(row.metrics),
  };
}

function sortProjects(projects: Project[]) {
  return [...projects].sort((left, right) => {
    if (left.featured !== right.featured) {
      return Number(right.featured) - Number(left.featured);
    }

    return new Date(right.createdAt).getTime() - new Date(left.createdAt).getTime();
  });
}

export async function listProjects(options?: { featuredOnly?: boolean }) {
  const supabase = getSupabaseServerClient();

  if (supabase) {
    const query = supabase.from("projects").select("*").order("created_at", { ascending: false });
    const response = options?.featuredOnly
      ? await query.eq("featured", true)
      : await query;

    if (!response.error && response.data) {
      return sortProjects(response.data.map((row) => mapRowToProject(row as ProjectRow)));
    }
  }

  const local = options?.featuredOnly
    ? seedProjects.filter((project) => project.featured)
    : seedProjects;

  return sortProjects(local);
}

export async function getProjectBySlug(slug: string) {
  const supabase = getSupabaseServerClient();

  if (supabase) {
    const { data, error } = await supabase
      .from("projects")
      .select("*")
      .eq("slug", slug)
      .limit(1)
      .maybeSingle();

    if (!error && data) {
      return mapRowToProject(data as ProjectRow);
    }
  }

  return seedProjects.find((project) => project.slug === slug) ?? null;
}
