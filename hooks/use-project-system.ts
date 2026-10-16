"use client";

import { useEffect, useState, type RefObject } from "react";

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

function lerp(start: number, end: number, amount: number) {
  return start + (end - start) * amount;
}

function cinematicEase(value: number) {
  return value < 0.5
    ? 4 * value * value * value
    : 1 - Math.pow(-2 * value + 2, 3) / 2;
}

function phaseProgress(value: number, start: number, end: number) {
  if (value <= start) return 0;
  if (value >= end) return 1;
  return (value - start) / (end - start);
}

export function useProjectSystem(
  sectionRef: RefObject<HTMLElement | null>,
  projectCount: number,
) {
  const [progress, setProgress] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [viewportHeight, setViewportHeight] = useState(0);

  useEffect(() => {
    if (typeof window === "undefined") return undefined;

    const query = window.matchMedia("(max-width: 767px)");
    const syncViewport = () => {
      setIsMobile(query.matches);
      setViewportHeight(window.innerHeight);
    };

    syncViewport();
    query.addEventListener("change", syncViewport);
    window.addEventListener("resize", syncViewport);

    return () => {
      query.removeEventListener("change", syncViewport);
      window.removeEventListener("resize", syncViewport);
    };
  }, []);

  useEffect(() => {
    const element = sectionRef.current;
    if (!element) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.04 }, // Lower threshold so we start tracking earlier
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [sectionRef]);

  useEffect(() => {
    if (!isInView) return undefined;
    if (typeof window === "undefined") return undefined;

    let frame = 0;

    const update = () => {
      cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(() => {
        const element = sectionRef.current;
        if (!element) return;

        const elementTop =
          window.scrollY + element.getBoundingClientRect().top;
        const totalScrollable = Math.max(
          element.offsetHeight - window.innerHeight,
          1,
        );
        const current = clamp(window.scrollY - elementTop, 0, totalScrollable);
        setProgress(current / totalScrollable);
      });
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [isInView, sectionRef]);

  if (!projectCount || projectCount <= 0) {
    return {
      progress: 0,
      x: 0,
      y: 0,
      rotateY: 0,
      rotateX: -4,
      rotateZ: 0,
      scale: 1,
      currentIndex: 0,
      isMobile,
      isInView,
    };
  }

  const safeProgress = clamp(progress, 0, 0.9999);
  const segmentFloat = safeProgress * projectCount;
  const segment = Math.floor(segmentFloat);
  const segmentProgress = segmentFloat - segment;
  const currentIndex = Math.min(segment, projectCount - 1);
  const nextIndex = Math.min(currentIndex + 1, projectCount - 1);

  const stageIndex =
    segmentProgress > 0.82 ? nextIndex : currentIndex;

  const isTransitionSegment = nextIndex !== currentIndex;

  // ── Phase timings ──────────────────────────────────────────────────
  const prepareT = phaseProgress(segmentProgress, 0.06, 0.16);
  const travelT = phaseProgress(segmentProgress, 0.16, 0.52);
  const settleT = phaseProgress(segmentProgress, 0.52, 0.74);

  const resolvedVH = Math.max(viewportHeight, 1);

  const travelEase = cinematicEase(Math.min(travelT * 1.18, 1));
  const settleEase = cinematicEase(travelT);
  const easedTravel = travelT < 0.6 ? travelEase : settleEase;

  // ── MOBILE: card stays fixed in its slot — NO y translation ────────
  // On mobile the card renders inline below the text, so the floating
  // card is hidden. We only need currentIndex for content switching.
  if (isMobile) {
    return {
      progress: safeProgress,
      isInView,
      isMobile,
      x: 0,
      y: 0,
      rotateY: 0,
      rotateX: -1.5,
      rotateZ: 0,
      scale: 1,
      currentIndex: stageIndex,
    };
  }

  // ── DESKTOP: full cinematic card flight ────────────────────────────
  const currentSide = currentIndex % 2 === 0 ? 264 : -264;
  const nextSide = nextIndex % 2 === 0 ? 264 : -264;
  const direction = nextSide >= currentSide ? 1 : -1;

  const stageSpan = Math.max(projectCount - 1, 1);
  const startLane = -resolvedVH * 0.035;
  const endLane = resolvedVH * 0.1;

  const currentLaneY = lerp(startLane, endLane, currentIndex / stageSpan);
  const nextLaneY = lerp(startLane, endLane, nextIndex / stageSpan);

  // Arc lift during flight — keeps card from clipping text mid-travel
  const arcLift = -Math.sin(easedTravel * Math.PI) * resolvedVH * 0.022;

  // Subtle anticipation nudge before departure
  const anticipationX =
    isTransitionSegment
      ? direction * -22 * Math.sin(prepareT * Math.PI * 0.5)
      : 0;

  const horizontalTravel = cinematicEase(
    phaseProgress(segmentProgress, 0.34, 0.54),
  );

  const x = isTransitionSegment
    ? lerp(currentSide, nextSide, horizontalTravel) +
    anticipationX * (1 - travelT)
    : currentSide;

  // KEY FIX: use resolvedVH * 0.82 per stage so card tracks the sticky
  // viewport slot, not an ever-growing absolute offset.
  const baseSectionY = isTransitionSegment
    ? lerp(
      currentIndex * resolvedVH * 0.82,
      nextIndex * resolvedVH * 0.82,
      horizontalTravel,
    )
    : currentIndex * resolvedVH * 0.82;

  const cinematicLaneY = isTransitionSegment
    ? lerp(currentLaneY, nextLaneY, easedTravel) + arcLift
    : currentLaneY;

  const y = baseSectionY + cinematicLaneY;

  const rotateY = !isTransitionSegment
    ? 0
    : direction * (prepareT * 6 + Math.sin(easedTravel * Math.PI) * 32);

  const rotateX =
    -4 + prepareT * 0.8 + Math.sin(easedTravel * Math.PI) * 1.6;

  const rotateZ = !isTransitionSegment
    ? 0
    : direction * (prepareT * 0.8 + Math.sin(easedTravel * Math.PI) * 2.4);

  let scale = 1;
  if (!isTransitionSegment) {
    scale = 1;
  } else if (segmentProgress < 0.3) {
    scale = 1 + prepareT * 0.018;
  } else if (segmentProgress <= 0.74) {
    scale = 1.012 + Math.sin(easedTravel * Math.PI) * 0.026;
  } else {
    scale = 1.012 - settleT * 0.012;
  }

  return {
    progress: safeProgress,
    isInView,
    isMobile,
    x,
    y,
    rotateY,
    rotateX,
    rotateZ,
    scale,
    currentIndex: stageIndex,
  };
}