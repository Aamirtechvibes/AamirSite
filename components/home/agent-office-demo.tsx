"use client";

import { useState } from "react";

import { SectionShell } from "@/components/ui/section-shell";
import { agentDemos } from "@/lib/data/content";

export function AgentOfficeDemo() {
  const [selectedId, setSelectedId] = useState(agentDemos[0]?.id ?? "sales-agent");
  const selectedAgent = agentDemos.find((item) => item.id === selectedId) ?? agentDemos[0]!;

  return (
    <SectionShell
      eyebrow="Agent Control Room"
      title="BizMate Multi-Agent Office"
      description="Meet the business where it already lives: WhatsApp. See how specialized AI agents collaborate across Sales, Finance, Social, and Operations."
    >
      <div className="panel-shadow panel-surface rounded-[2rem] border border-slate-200/70 p-6 sm:p-8">
        {/* Agent Selector Tabs */}
        <div className="flex flex-wrap gap-2 pb-6 border-b border-slate-200/60">
          {agentDemos.map((agent) => {
            const isActive = agent.id === selectedId;
            return (
              <button
                key={agent.id}
                type="button"
                onClick={() => setSelectedId(agent.id)}
                className={`rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] transition ${
                  isActive
                    ? "bg-slate-950 text-white shadow-md"
                    : "bg-white/80 text-slate-600 border border-slate-200 hover:border-blue-300"
                }`}
              >
                {agent.name}
              </button>
            );
          })}
        </div>

        {/* Selected Agent Display Card */}
        <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_1.1fr]">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="rounded-full bg-blue-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-blue-700">
                {selectedAgent.role}
              </span>
              <span className="text-xs text-slate-400">WhatsApp Webhook Ready</span>
            </div>

            <h3 className="text-3xl font-semibold text-slate-950">{selectedAgent.name}</h3>
            <p className="text-sm leading-7 text-slate-600">{selectedAgent.description}</p>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
                Core Capabilities
              </p>
              <ul className="mt-2 space-y-2 text-xs text-slate-600">
                {selectedAgent.capabilities.map((cap) => (
                  <li key={cap} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                    <span>{cap}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Terminal / Live Demonstration Preview */}
          <div className="rounded-[1.5rem] border border-slate-900 bg-slate-950 p-5 font-mono text-xs text-slate-200 shadow-2xl flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3 text-[11px] text-slate-400">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-rose-500" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-500" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
                  <span className="ml-2 font-sans font-medium text-slate-300">
                    {selectedAgent.name} Trace Log
                  </span>
                </div>
                <span>STATUS: 200 OK</span>
              </div>

              <div className="space-y-2 pt-2 text-[11px] leading-relaxed">
                <p className="text-slate-400">
                  <span className="text-blue-400">[INBOUND_WHATSAPP]</span> Customer message received
                </p>
                <p className="text-emerald-400">
                  <span className="text-slate-400">[ROUTER_AGENT]</span> Intent: {selectedAgent.role}
                </p>
                <p className="text-amber-300">
                  <span className="text-slate-400">[LANGGRAPH_STATE]</span> Checkpoint ID: #state_9281
                </p>
                <p className="text-slate-300">
                  <span className="text-slate-400">[TOOL_CALL]</span> {selectedAgent.capabilities[0]}
                </p>
                <p className="text-blue-300">
                  <span className="text-slate-400">[OUTBOUND_DISPATCH]</span> Response dispatched to WhatsApp
                </p>
              </div>
            </div>

            {/* SINGLE YOUTUBE LINK RULE ENFORCED HERE */}
            <div className="mt-6 border-t border-slate-800 pt-4 flex items-center justify-between">
              <span className="text-[10px] uppercase tracking-widest text-slate-400 font-sans">
                Video Demonstration
              </span>
              <a
                href={selectedAgent.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full bg-blue-600 px-4 py-2 text-xs font-semibold text-white transition hover:bg-blue-500 font-sans"
              >
                Watch on YouTube ↗
              </a>
            </div>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
