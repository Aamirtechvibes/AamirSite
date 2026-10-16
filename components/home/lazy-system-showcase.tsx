"use client";

import SystemShowcase from "@/components/home/system-showcase";
import type { Project } from "@/types";

type LazySystemShowcaseProps = {
  id?: string;
  eyebrow: string;
  title: string;
  description: string;
  projects: Project[];
};

export function LazySystemShowcase(props: LazySystemShowcaseProps) {
  return <SystemShowcase {...props} />;
}
