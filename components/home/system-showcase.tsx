"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useRef } from "react";

import { FloatingProjectCard } from "@/components/home/FloatingProjectCard";
import { buttonClasses } from "@/components/ui/button";
import { useProjectSystem } from "@/hooks/use-project-system";
import { cn } from "@/lib/utils/cn";
import type { Project } from "@/types";

type SystemShowcaseProps = {
  id?: string;
  eyebrow: string;
  title: string;
  description: string;
  projects: Project[];
  compact?: boolean;
};

export default function SystemShowcase({
  id,
  eyebrow,
  title,
  description,
  projects,
  compact = false,
}: SystemShowcaseProps) {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const {
    currentIndex,
    progress,
    x,
    y,
    rotateY,
    rotateX,
    rotateZ,
    scale,
    isMobile,
  } = useProjectSystem(sectionRef, projects.length);
  const currentProject = projects[currentIndex] ?? projects[0];

  if (!currentProject) {
    return null;
  }

  const floatingMotion = {
    x,
    y,
    rotateY,
    rotateX,
    rotateZ,
    scale,
  };

  return (
    <section id={id} className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.32em] text-blue-600">{eyebrow}</p>
        <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
          {title}
        </h2>
        <p className="mt-5 text-lg leading-8 text-slate-600">{description}</p>
      </div>

      <div
        ref={sectionRef}
        className={cn("relative mt-12", compact ? "pb-8" : "pb-14")}
        style={{ height: isMobile ? "auto" : `${projects.length * 92}vh` }}
      >
        <div aria-hidden className="absolute inset-0 grid-surface opacity-15" />
        <div className="absolute inset-x-0 top-0 h-32 bg-[radial-gradient(circle_at_top,rgba(96,165,250,0.12),transparent_72%)]" />

        {!isMobile ? (
          <div className="absolute inset-0 z-30 pointer-events-none">
            <div className="sticky top-24 h-[calc(100vh-6rem)]">
              <FloatingProjectCard
                project={currentProject}
                mode="floating"
                motionState={floatingMotion}
              />
            </div>
          </div>
        ) : null}

        <div className="relative">
          {projects.map((project, index) => {
            const stageOnRight = index % 2 === 0;
            const isActive = currentProject.slug === project.slug;

            return (
              <div
                key={project.id}
                className={cn(
                  "grid border-t border-slate-200/50 first:border-t-0",
                  isMobile
                    ? "min-h-0 gap-8 py-12"
                    : "min-h-[88vh] items-center gap-14 py-8 lg:grid-cols-2 lg:gap-16",
                )}
              >
                <div className={cn(!isMobile && (stageOnRight ? "lg:order-1" : "lg:order-2"))}>
                  <div
                    className={cn(
                      "transition-opacity duration-500",
                      isActive || isMobile ? "opacity-100" : "opacity-58",
                    )}
                  >
                    <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-blue-600">
                      {String(index + 1).padStart(2, "0")} · {project.status}
                    </p>
                    <h3 className="mt-4 max-w-[14ch] text-3xl font-semibold tracking-tight text-slate-950 sm:text-[2.2rem]">
                      {project.title}
                    </h3>
                    <p className="mt-4 max-w-[34rem] text-base leading-8 text-slate-600">
                      {project.teaser}
                    </p>

                    {isMobile ? (
                      <div
                        className={cn(
                          "mt-7",
                          stageOnRight ? "pr-8" : "pl-8",
                        )}
                      >
                        <FloatingProjectCard
                          project={project}
                          mode="inline"
                          align={stageOnRight ? "right" : "left"}
                          motionState={{
                            x: 0,
                            y: 0,
                            rotateY: 0,
                            rotateX: 0,
                            rotateZ: 0,
                            scale: 1,
                          }}
                        />
                      </div>
                    ) : null}

                    <p className="mt-6 max-w-[36rem] text-sm leading-7 text-slate-600">
                      {project.solution}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-slate-200/70 bg-white/70 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-600"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="mt-8 grid gap-3 sm:grid-cols-3">
                      {project.metrics.map((metric) => (
                        <div
                          key={metric.label}
                          className="rounded-[1.25rem] border border-slate-200/60 bg-white/55 p-4 backdrop-blur-sm"
                        >
                          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500">
                            {metric.label}
                          </p>
                          <p className="mt-2 text-base font-semibold text-slate-950">
                            {metric.value}
                          </p>
                        </div>
                      ))}
                    </div>

                    <div className="mt-8 flex items-center gap-4">
                      <Link
                        href={`/project/${project.slug}`}
                        className={buttonClasses({ variant: "secondary", size: "md" })}
                      >
                        Open detail
                      </Link>
                      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
                        {project.users.slice(0, 2).join(" · ")}
                      </p>
                    </div>
                  </div>
                </div>

                {!isMobile ? (
                  <div
                    className={cn(
                      "hidden lg:block lg:min-h-[26rem]",
                      stageOnRight ? "lg:order-2" : "lg:order-1",
                    )}
                    aria-hidden
                  />
                ) : null}
              </div>
            );
          })}

          <div className="border-t border-slate-200/50 pt-8">
            <div className="flex justify-between text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
              <span>Scroll to traverse the system</span>
              <span>{isMobile ? "Inline project surfaces" : "Cinematic project stages"}</span>
            </div>
            <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-100">
              <motion.div
                className="h-full origin-left rounded-full bg-gradient-to-r from-blue-400 to-blue-600"
                animate={{ scaleX: progress || 0.02 }}
                transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
