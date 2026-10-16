import Link from "next/link";

import { buttonClasses } from "@/components/ui/button";
import { CvLink } from "@/components/ui/cv-link";
import { contactInfo } from "@/lib/data/content";

export function SiteFooter() {
  return (
    <footer className="section-divider mt-10">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="panel-shadow panel-surface flex flex-col gap-6 rounded-[2rem] border border-slate-200/70 p-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-blue-600">
              AAMIR KHAN · AI ENGINEER & FOUNDER
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950">
              &ldquo;Building AI agents that don&apos;t just answer — they execute.&rdquo;
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-600">
              Available for AI Engineer internships, agentic AI systems development, and software engineering opportunities in Mumbai, Bangalore, or Remote.
            </p>
            <div className="mt-6 flex flex-wrap gap-4 text-xs font-semibold text-slate-700">
              <a href={contactInfo.github} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition">
                GitHub ↗
              </a>
              <a href={contactInfo.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition">
                LinkedIn ↗
              </a>
              <a href={contactInfo.x} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition">
                X (Twitter) ↗
              </a>
              <a href={`mailto:${contactInfo.email}`} className="hover:text-blue-600 transition">
                {contactInfo.email}
              </a>
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            <CvLink
              source="footer"
              label="Download Resume"
              className={buttonClasses({ variant: "secondary", size: "lg" })}
            />
            <Link href="/systems" className={buttonClasses({ variant: "primary", size: "lg" })}>
              Explore Systems
            </Link>
          </div>
        </div>
        <div className="mt-6 flex flex-col gap-2 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>Production Agentic AI · LLM Systems · Backend & Cloud</p>
          <p>© 2026 Aamir Khan. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
