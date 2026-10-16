"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const images = [
  "/aamir-identity.png",
  "/aamir-identity.jpg",
  "/mobile-hero.png",
];

import { useRef, useEffect, useState } from "react";

function Row({ reverse = false, angle = -6 }: { reverse?: boolean; angle?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (ref.current) {
      setWidth(ref.current.scrollWidth / 2); // half because duplicated
    }
  }, []);

  return (
    <div className="overflow-hidden -mx-10 md:-mx-20 lg:-mx-32">
      <motion.div
        ref={ref}
        className="flex gap-2 md:gap-3 w-max flex-nowrap"
        animate={{
          x: reverse ? [ -width, 0 ] : [ 0, -width ],
        }}
        transition={{
          duration: 30,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {[...images, ...images, ...images, ...images].map((src, i) => (
          <div
            key={i}
            className="relative h-48 w-36 md:h-[300px] md:w-[220px] lg:h-[360px] lg:w-[260px] rounded-xl overflow-hidden"
          >
            <Image src={src} alt="" fill className="object-cover" />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export function InfiniteExecutionGrid() {
  return (
    <section className="pt-16 pb-8 bg-[#f8f8f6] overflow-hidden w-full">
      <div className="text-center mb-10 px-6">
      {/* TEXT */}
        <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
          In Motion
        </p>
        <h3 className="mt-3 text-xl md:text-3xl font-medium text-slate-800">
          Built in real environments, not just screens.
        </h3>
      </div>

      {/* ROWS */}
      <div className="space-y-4">
       {/* Mobile only (3rd row) */}
  <div className="md:hidden">
    <Row />
  </div>

  {/* Always visible */}
  <Row reverse angle={-6} />
  <Row angle={-12} />
    
      </div>
    </section>
  );
}