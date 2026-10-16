"use client";

import { useState } from "react";

import type { SkillCluster } from "@/types";

export function Capsule({ cluster }: { cluster: SkillCluster }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <button
      type="button"
      onClick={() => setIsOpen((current) => !current)}
      className="panel-shadow panel-surface flex w-full flex-col rounded-[1.5rem] border border-slate-200/70 p-5 text-left transition hover:border-blue-300"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-semibold text-slate-950">{cluster.title}</p>
          <p className="mt-2 text-sm leading-7 text-slate-600">{cluster.intro}</p>
        </div>
        <span className="mt-1 text-lg font-semibold text-blue-600">{isOpen ? "−" : "+"}</span>
      </div>
      <div
        className={`grid transition-[grid-template-rows,opacity] duration-300 ${
          isOpen ? "mt-4 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="flex flex-wrap gap-2 pt-1">
            {cluster.items.map((item) => (
              <span
                key={item}
                className="rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </button>
  );
}
