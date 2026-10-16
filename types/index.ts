export type ProjectStatus = "Live" | "In Progress" | "Case Study";
export type ProjectCategory = "system" | "engineering" | "product";

export interface ProjectMetric {
  label: string;
  value: string;
}

export interface Project {
  id: string;
  title: string;
  slug: string;
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  demoVideoUrl?: string;
  youtubeUrl?: string;
  role: string;
  category: ProjectCategory;
  description: string;
  teaser: string;
  problem: string;
  whyBuilt: string;
  users: string[];
  solution: string;
  impact: string;
  outcomes: string[];
  architecture: string[];
  tech: string[];
  tags: string[];
  status: ProjectStatus;
  featured: boolean;
  createdAt: string;
  metrics: ProjectMetric[];
}

export interface HeroSlide {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  stat: string;
}

export interface WhatIBuildCard {
  number: string;
  title: string;
  description: string;
  tech: string[];
}

export interface HowIBuildStep {
  step: string;
  title: string;
  description: string;
}

export interface AchievementItem {
  id: string;
  title: string;
  organization: string;
  award: string;
  description: string;
  image: string;
  verifiedWording: string;
  date: string;
  tags: string[];
}

export interface ExperienceItem {
  company: string;
  url: string;
  role: string;
  period: string;
  description: string;
  highlights: string[];
}

export interface AgentDemo {
  id: string;
  name: string;
  role: string;
  description: string;
  capabilities: string[];
  youtubeUrl: string;
}

export interface StoryPoint {
  title: string;
  description: string;
  audience: string;
}

export interface ResearchNote {
  title: string;
  summary: string;
  signal: string;
  focus: string[];
}

export interface VisionPillar {
  title: string;
  description: string;
  horizon: string;
  outcomes: string[];
}

export interface SkillCluster {
  title: string;
  intro: string;
  items: string[];
}

export interface ContentBlock<T = Record<string, unknown>> {
  id: string;
  type: string;
  data: T;
}

export interface LeadInput {
  name: string;
  email: string;
  message: string;
  website?: string;
}
