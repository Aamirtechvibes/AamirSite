import {
  heroSlides,
  researchNotes,
  skillClusters,
  toolbelt,
  visionPillars,
} from "@/lib/data/content";
import { getSupabaseServerClient } from "@/lib/supabase/server";
import type { ContentBlock, HeroSlide, ResearchNote, SkillCluster, VisionPillar } from "@/types";

type ContentRow = {
  id: string | number;
  type: string;
  data: Record<string, unknown>;
};

function findItems<T>(content: ContentBlock[], type: string, key: string, fallback: T) {
  const block = content.find((item) => item.type === type);

  if (!block) {
    return fallback;
  }

  const value = block.data[key];
  return (value as T) || fallback;
}

async function loadContent() {
  const supabase = getSupabaseServerClient();

  if (supabase) {
    const { data, error } = await supabase.from("content").select("id, type, data");

    if (!error && data) {
      return data.map((row) => ({
        id: String((row as ContentRow).id),
        type: (row as ContentRow).type,
        data: (row as ContentRow).data,
      }));
    }
  }

  return [];
}

export async function getHomeContent() {
  const content = await loadContent();

  return {
    heroSlides: findItems<HeroSlide[]>(content, "hero", "slides", heroSlides),
    researchNotes: findItems<ResearchNote[]>(content, "research", "items", researchNotes),
    visionPillars: findItems<VisionPillar[]>(content, "vision", "items", visionPillars),
    skillClusters,
    toolbelt,
  };
}

export async function getResearchNotes() {
  const content = await loadContent();
  return findItems<ResearchNote[]>(content, "research", "items", researchNotes);
}

export async function getVisionPillars() {
  const content = await loadContent();
  return findItems<VisionPillar[]>(content, "vision", "items", visionPillars);
}
