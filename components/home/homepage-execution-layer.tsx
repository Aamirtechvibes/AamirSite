"use client";

import { usePathname } from "next/navigation";

import { SkewScroller } from "@/components/home/skew-scroller";

const executionImages = ["/aamir-identity.png", "/aamir-identity.jpg", "/mobile-hero.png"];

export function HomepageExecutionLayer() {
  const pathname = usePathname();

  if (pathname !== "/") {
    return null;
  }

  return <SkewScroller images={executionImages} />;
}
