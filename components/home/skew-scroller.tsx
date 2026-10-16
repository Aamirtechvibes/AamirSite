"use client";

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils/cn";

type SkewScrollerProps = {
  images: string[];
  itemCount?: number;
  backgroundColor?: string;
  containerHeight?: string;
  noiseUrl?: string;
  noiseOpacity?: number;
  rotation?: number;
  scale?: number;
  scrollRange?: [number, number];
  xRange?: [number, number];
  yRange?: [number, number];
  gridCols?: number;
  aspectRatio?: string;
  className?: string;
};

export function SkewScroller({
  images,
  itemCount = 12,
  backgroundColor = "bg-[#f8f8f6]",
  containerHeight = "h-[140vh]",
  noiseUrl = "https://grainy-gradients.vercel.app/noise.svg",
  noiseOpacity = 0.08,
  rotation = -6,
  scale = 1.2,
  scrollRange = [0, 1200],
  xRange = [0, -120],
  yRange = [0, -260],
  gridCols = 3,
  aspectRatio = "aspect-[3/4]",
  className = "",
}: SkewScrollerProps) {
  const [autoY, setAutoY] = useState(0);
  const { scrollY } = useScroll();
  const reduceMotion = useReducedMotion();
  const colWidth = 100 / gridCols;

  const x = useTransform(scrollY, scrollRange, reduceMotion ? [0, 0] : xRange);
  const y = useTransform(scrollY, scrollRange, reduceMotion ? [0, 0] : yRange);
    useEffect(() => {
  let raf: number;

  const animate = () => {
    setAutoY((prev) => prev - 0.15); // speed (0.1 slow, 0.3 fast)
    raf = requestAnimationFrame(animate);
  };

  animate();
  return () => cancelAnimationFrame(raf);
}, []);
  return (
    <section className={cn("relative overflow-hidden", containerHeight, backgroundColor, className)}>
      <div className="sticky top-0 h-screen overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage: `url('${noiseUrl}')`, opacity: noiseOpacity }}
        />

        <div className="absolute left-1/2 top-20 z-20 w-full max-w-2xl -translate-x-1/2 px-6 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-slate-500">In Motion</p>
          <h3 className="mt-3 text-2xl font-medium text-slate-800 md:text-3xl">
            Built in real environments, not just screens.
          </h3>
        </div>

        <motion.div
          className="absolute left-0 top-0 flex w-full flex-wrap content-start pt-28 pb-20 transform-gpu"
          style={{
            rotate: reduceMotion ? 0 : rotation,
            scale: reduceMotion ? 1 : scale,
            x,
            y: reduceMotion ? 0 : y.get() + autoY,
          }}
        >
          {Array.from({ length: itemCount }).map((_, index) => (
            <div
              key={index}
              className={cn("p-2 md:p-3", aspectRatio)}
              style={{ width: `${colWidth}%` }}
            >
              <motion.div className="relative h-full w-full overflow-hidden rounded-lg bg-black/5">
                <Image
                  src={images[index % images.length]}
                  alt=""
                  fill
                  sizes="(max-width: 767px) 33vw, 20vw"
                  className="object-cover transition-all duration-500 md:grayscale md:opacity-90 md:hover:grayscale-0 md:hover:opacity-100"
                />
              </motion.div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
