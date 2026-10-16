"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

import { useDailyThought } from "@/hooks/use-daily-thought";

export function HeroIdentityPanel() {
  const reduceMotion = useReducedMotion();
  const thought = useDailyThought();

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.65, ease: "easeOut" }}
      className="panel-shadow panel-surface relative min-h-[32rem] overflow-hidden rounded-[2rem] border border-slate-200/70"
    >
      <div className="absolute inset-0">
        <Image
          src="/aamir-identity.jpg"
          alt="Aamir Khan seated in a calm workspace"
          fill
          className="scale-105 object-cover object-center opacity-35 blur-sm"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.85),transparent_40%),radial-gradient(circle_at_bottom_right,rgba(96,165,250,0.18),transparent_36%)]" />
        <div className="absolute inset-0 bg-gradient-to-br from-white/78 via-white/35 to-slate-50/65" />
      </div>

      <div className="relative flex h-full min-h-[32rem] flex-col justify-between p-6 sm:p-8">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-600">
              Identity system
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Aamir Khan
            </h2>
            <p className="mt-2 max-w-sm text-sm leading-7 text-slate-600">
              System-thinking full-stack engineer building premium digital products with clear
              logic, calm interfaces, and strong product intent.
            </p>
          </div>
          <div className="rounded-full border border-white/80 bg-white/70 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-600">
            Thought of the day
          </div>
        </div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.08, ease: "easeOut" }}
          className="pointer-events-none mx-auto flex w-full max-w-[22rem] flex-1 items-center justify-center py-8 sm:max-w-[24rem]"
        >
          <div className="panel-shadow relative aspect-[4/5] w-full overflow-hidden rounded-[1.8rem] border border-white/90 bg-white/50">
            <Image
              src="/aamir-identity.jpg"
              alt="Portrait of Aamir Khan"
              fill
              priority
              className="object-cover object-[22%_center]"
            />
            <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-slate-950/16 to-transparent" />
          </div>
        </motion.div>

        <div className="max-w-md rounded-[1.6rem] border border-white/80 bg-white/72 p-5 backdrop-blur-md">
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-500">
            Today&apos;s signal
          </p>
          <p className="mt-3 text-2xl font-medium leading-tight text-slate-950">{thought}</p>
          <p className="mt-3 text-sm text-slate-500">— Aamir</p>
        </div>
      </div>
    </motion.div>
  );
}
