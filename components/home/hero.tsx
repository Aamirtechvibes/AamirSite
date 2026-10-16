"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

import { KineticNav } from "@/components/home/kinetic-nav";
import { CvLink } from "@/components/ui/cv-link";
import { heroIdentity } from "@/lib/data/content";

export function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative w-full overflow-hidden min-h-[calc(100svh-3.5rem)] sm:min-h-[calc(100svh-4rem)] lg:min-h-[calc(100svh-4.5rem)] flex items-center">
      
      {/* ── 01. Full-Screen Cinematic Background Scene (z-0) ────────── */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none overflow-hidden">
        {/* Desktop full-width photographic scene: Aamir on left, studio wall center, desk on right */}
        <div className="hidden lg:block absolute inset-0">
          <Image
            src="/aamir-identity.png"
            alt="Aamir Khan seated beside a desk in a bright, modern studio workspace"
            fill
            priority
            sizes="100vw"
            className="object-cover"
            style={{ objectPosition: "18% center" }}
          />
        </div>

        {/* Mobile / Tablet vertical photographic scene */}
        <div className="lg:hidden absolute inset-0 overflow-hidden">
          <div className="relative w-full h-full scale-[1.22] origin-top translate-y-[16%] sm:translate-y-[12%]">
            <Image
              src="/mobile-hero.png"
              alt="Aamir Khan seated in a bright studio workspace"
              fill
              priority
              sizes="100vw"
              className="object-cover object-top"
            />
          </div>
          {/* Subtle atmospheric vignette ensuring crisp contrast for the top text area */}
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/80 via-38% to-transparent pointer-events-none"
          />
        </div>

        {/* Ambient prism refraction & subtle atmospheric lighting */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(96,165,250,0.12),transparent_40%),radial-gradient(circle_at_80%_35%,rgba(59,130,246,0.08),transparent_50%)]"
        />
      </div>

      {/* ── 02. Hero Content Grid & Spatial Layout (z-10) ────────────── */}
      <div className="relative z-10 mx-auto w-full max-w-[1680px] px-4 sm:px-8 lg:px-12 xl:px-16 py-5 sm:py-8 lg:py-12 flex flex-col justify-between min-h-[calc(100svh-3.5rem)] sm:min-h-[calc(100svh-4rem)] lg:min-h-[calc(100svh-4.5rem)]">
        <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-12 lg:gap-8 xl:gap-12 w-full my-auto">
          
          {/* 
            Desktop Zone 1: Phantom Column (Col 1 to 4 on lg, Col 1 to 5 on xl)
            Deliberate negative space reserved for Aamir's portrait in the background photo.
            Ensures text NEVER covers Aamir's face, shoulder, or body.
          */}
          <div aria-hidden className="hidden lg:block lg:col-span-4 xl:col-span-5 pointer-events-none min-h-[1px]" />

          {/* 
            Zone 2: Text Content Area (Col 5 to 9 on lg, Col 6 to 9 on xl, Full width on Mobile)
            Positioned directly over the neutral studio wall negative space between Aamir and the desk.
          */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="w-full max-w-xl text-left lg:col-span-5 xl:col-span-4 lg:pl-2"
          >
            {/* Category / Role Badge */}
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-200/90 bg-white/95 px-3.5 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-blue-700 shadow-sm backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-600 animate-pulse" />
              {heroIdentity.title}
            </span>

            {/* Main Headline */}
            <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl xl:text-6xl drop-shadow-sm">
              {heroIdentity.name}
            </h1>

            {/* Primary Positioning */}
            <p className="mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-blue-600 sm:text-sm">
              {heroIdentity.primaryPositioning}
            </p>

            {/* Hero Core Statement */}
            <p className="mt-3.5 text-base font-medium text-slate-900 sm:text-lg lg:text-xl xl:text-2xl leading-snug">
              &ldquo;{heroIdentity.heroStatement}&rdquo;
            </p>

            {/* Supporting Copy */}
            <p className="mt-2.5 max-w-lg text-xs sm:text-sm lg:text-base text-slate-600 leading-relaxed">
              {heroIdentity.supportingCopy}
            </p>

            {/* Hero CTA Action Group with Guaranteed Contrast */}
            <div className="mt-5 sm:mt-6 flex flex-wrap items-center gap-2.5 sm:gap-3.5">
              {/* Primary CTA: Dark slate background with high-contrast pure white text */}
              <a
                href="#work"
                style={{ backgroundColor: "#020617", color: "#ffffff" }}
                className="inline-flex min-h-[42px] sm:min-h-[44px] items-center justify-center rounded-full px-5 sm:px-6 py-2 sm:py-2.5 text-xs font-bold uppercase tracking-wider !text-white shadow-md transition-all duration-200 hover:!bg-blue-600 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 text-center"
              >
                {heroIdentity.primaryCtaText}
              </a>

              {/* Secondary CTA: Crisp white background with dark slate text */}
              <CvLink
                label={heroIdentity.secondaryCtaText}
                source="hero"
                style={{ backgroundColor: "#ffffff", color: "#0f172a" }}
                className="inline-flex min-h-[42px] sm:min-h-[44px] items-center justify-center rounded-full border border-slate-300 bg-white px-5 sm:px-6 py-2 sm:py-2.5 text-xs font-bold uppercase tracking-wider !text-slate-900 shadow-sm transition-all duration-200 hover:border-blue-500 hover:!text-blue-600 backdrop-blur-md text-center"
              />

              {/* Tertiary CTA: Clean text link with clear contrast and hover state */}
              <a
                href="#contact"
                style={{ color: "#0f172a" }}
                className="inline-flex min-h-[42px] sm:min-h-[44px] items-center justify-center rounded-full border border-transparent px-3 py-2 sm:py-2.5 text-xs font-bold uppercase tracking-wider !text-slate-900 transition-all duration-200 hover:!text-blue-600 hover:bg-white/60 text-center"
              >
                {heroIdentity.tertiaryCtaText}
              </a>
            </div>
          </motion.div>

          {/* 
            Zone 3: Desktop Large Kinetic Navigation (Col 10 to 12 on lg, Col 10 to 12 on xl)
            Positioned over the desk area on the right, perfectly aligned with the photograph.
          */}
          <div className="hidden lg:flex lg:col-span-3 xl:col-span-3 justify-end items-center">
            <KineticNav />
          </div>

        </div>
      </div>
    </section>
  );
}
