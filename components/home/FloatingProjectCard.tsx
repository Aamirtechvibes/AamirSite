"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { useRouter } from "next/navigation";
import { startTransition, useMemo } from "react";

import { trackEvent } from "@/lib/services/analytics-service";
import { cn } from "@/lib/utils/cn";
import type { Project } from "@/types";

type FloatingProjectCardProps = {
  project: Project;
  mode: "floating" | "inline";
  align?: "left" | "right";
  motionState: {
    x: number;
    y: number;
    rotateY: number;
    rotateX: number;
    rotateZ: number;
    scale: number;
  };
};

export function FloatingProjectCard({
  project,
  mode,
  align = "left",
  motionState,
}: FloatingProjectCardProps) {
  const router = useRouter();
  const reduceMotion = useReducedMotion();
  const isInline = mode === "inline";

  const previewLabel = useMemo(() => {
    if (!project.liveUrl) return `/${project.slug}`;
    try {
      return new URL(project.liveUrl).hostname.replace(/^www\./, "");
    } catch {
      return project.liveUrl;
    }
  }, [project.liveUrl, project.slug]);

  const openProject = () => {
    trackEvent("project_open", {
      project: project.slug,
      source: isInline ? "inline_project_surface" : "floating_project_surface",
    });
    startTransition(() => {
      router.push(`/project/${project.slug}`);
    });
  };

  // ── Shared card chrome ─────────────────────────────────────────────
  const CardInner = (
    <>
      {/* Titlebar */}
      <div className="absolute inset-x-0 top-0 z-10 flex items-center justify-between gap-4 border-b border-white/8 bg-slate-950/58 px-4 py-3 backdrop-blur-md">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-white/90" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/40" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
        </div>
        <span className="truncate text-[10px] font-medium uppercase tracking-[0.24em] text-white/58">
          {previewLabel}
        </span>
      </div>

      {/* Image + overlay */}
      <div className="relative aspect-[1.22/1] w-full">
        <Image
          src={project.image}
          alt={`${project.title} project preview`}
          fill
          sizes={isInline ? "min(100vw, 22rem)" : "min(42vw, 34rem)"}
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,23,0.04)_0%,rgba(2,6,23,0.16)_52%,rgba(2,6,23,0.78)_100%)]" />

        <div className="absolute inset-x-0 bottom-0 z-10 px-5 pb-5 pt-16">
          <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-white/62">
            Live project surface
          </p>
          <h4 className="mt-2 text-xl font-medium tracking-[-0.04em] text-white md:text-2xl">
            {project.title}
          </h4>
          <p className="mt-2 max-w-md text-sm leading-6 text-white/72">
            {project.teaser}
          </p>
        </div>
      </div>
    </>
  );

  // ── INLINE mode (mobile / fallback grid) ───────────────────────────
  if (isInline) {
    return (
      <div
        className={cn(
          "pointer-events-none relative flex w-full",
          "justify-start",
        )}
      >
        <motion.button
          type="button"
          onClick={openProject}
          whileTap={reduceMotion ? undefined : { scale: 0.992 }}
          initial={
            reduceMotion
              ? false
              : {
                opacity: 0,
                y: 28,
                x: align === "right" ? 14 : -14,
                rotateZ: align === "right" ? 1.2 : -1.2,
                scale: 0.97,
              }
          }
          whileInView={
            reduceMotion
              ? undefined
              : { opacity: 1, y: 0, x: 0, rotateZ: 0, scale: 1 }
          }
          viewport={{ once: true, amount: 0.45 }}
          transition={{
            type: "tween",
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          style={{
            rotateX: reduceMotion ? 0 : -2,
            transformPerspective: 1000,
            alignSelf: align === "right" ? "flex-end" : "flex-start",
          }}
          className={cn(
            "pointer-events-auto relative overflow-hidden rounded-[1.7rem]",
            "border border-white/14 bg-slate-950/92 text-left",
            "ring-1 ring-black/8 backdrop-blur-md will-change-transform",
            "w-full max-w-[22rem] shadow-[0_24px_70px_rgba(15,23,42,0.22)]",
            align === "right" ? "ml-auto" : "mr-auto",
          )}
        >
          {CardInner}
        </motion.button>
      </div>
    );
  }

  // ── FLOATING mode (desktop scroll-driven) ──────────────────────────
  return (
    <div className="pointer-events-none relative h-full flex items-center justify-center w-full">
      <motion.button
        type="button"
        onClick={openProject}
        whileHover={reduceMotion ? undefined : { scale: 1.012 }}
        whileTap={reduceMotion ? undefined : { scale: 0.992 }}
        animate={
          reduceMotion
            ? {}
            : {
              x: motionState.x,
              y: motionState.y,
              rotateY: motionState.rotateY,
              rotateZ: motionState.rotateZ,
              scale: motionState.scale,
            }
        }
        transition={{
          type: "spring",
          stiffness: 110,  // slightly stiffer — snappier feel on scroll
          damping: 16,
          mass: 0.65,
        }}
        style={{
          rotateX: reduceMotion ? 0 : motionState.rotateX,
          transformPerspective: 1600,
        }}
        className={cn(
          "pointer-events-auto relative overflow-hidden rounded-[1.7rem]",
          "border border-white/14 bg-slate-950/92 text-left",
          "ring-1 ring-black/8 backdrop-blur-md will-change-transform",
          "w-[min(42vw,34rem)] shadow-[0_52px_160px_rgba(0,0,0,0.34)]",
          "transition-shadow duration-300",
        )}
      >
        {CardInner}
      </motion.button>
    </div>
  );
}