"use client";

import { Button } from "@/components/ui/button";
import { SectionShell } from "@/components/ui/section-shell";
import { useContactForm } from "@/hooks/use-contact-form";
import { contactInfo } from "@/lib/data/content";

export function ContactPanel() {
  const { values, status, message, updateField, submit } = useContactForm();

  return (
    <div id="contact">
      <SectionShell
        eyebrow="Contact"
        title={contactInfo.headline}
        description={contactInfo.description}
      >
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="panel-shadow panel-surface rounded-[1.75rem] border border-slate-200/70 p-7 flex flex-col justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-blue-600">
                Direct Channels
              </p>

              <div className="mt-4 space-y-3">
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="block rounded-2xl border border-slate-200 bg-white/80 p-4 transition hover:border-blue-300"
                >
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500">
                    Direct Email
                  </p>
                  <p className="mt-1 text-base font-semibold text-slate-950">{contactInfo.email}</p>
                </a>

                <div className="grid grid-cols-3 gap-2 pt-2">
                  <a
                    href={contactInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center rounded-xl border border-slate-200 bg-white/80 py-3 text-xs font-semibold text-slate-900 transition hover:border-blue-300 hover:text-blue-600"
                  >
                    GitHub ↗
                  </a>
                  <a
                    href={contactInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center rounded-xl border border-slate-200 bg-white/80 py-3 text-xs font-semibold text-slate-900 transition hover:border-blue-300 hover:text-blue-600"
                  >
                    LinkedIn ↗
                  </a>
                  <a
                    href={contactInfo.x}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center rounded-xl border border-slate-200 bg-white/80 py-3 text-xs font-semibold text-slate-900 transition hover:border-blue-300 hover:text-blue-600"
                  >
                    X (Twitter) ↗
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-200/50 grid gap-3 sm:grid-cols-2">
              <div className="rounded-[1.2rem] border border-slate-200 bg-white/70 p-3.5">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500">
                  Response SLA
                </p>
                <p className="mt-1 text-sm font-semibold text-slate-950">Within 24-48 Hours</p>
              </div>
              <div className="rounded-[1.2rem] border border-slate-200 bg-white/70 p-3.5">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500">
                  Target Roles
                </p>
                <p className="mt-1 text-sm font-semibold text-slate-950">AI Intern / Engineer</p>
              </div>
            </div>
          </div>

          <form
            className="panel-shadow panel-surface rounded-[1.75rem] border border-slate-200/70 p-7"
            onSubmit={(event) => {
              event.preventDefault();
              void submit();
            }}
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="grid gap-2 text-sm font-medium text-slate-700">
                Name
                <input
                  value={values.name}
                  onChange={(event) => updateField("name", event.target.value)}
                  className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-300"
                  placeholder="Your name"
                  name="name"
                  autoComplete="name"
                />
              </label>
              <label className="grid gap-2 text-sm font-medium text-slate-700">
                Email
                <input
                  value={values.email}
                  onChange={(event) => updateField("email", event.target.value)}
                  className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-300"
                  placeholder="you@company.com"
                  name="email"
                  autoComplete="email"
                  type="email"
                />
              </label>
            </div>

            <label className="mt-4 grid gap-2 text-sm font-medium text-slate-700">
              Message
              <textarea
                value={values.message}
                onChange={(event) => updateField("message", event.target.value)}
                className="min-h-36 rounded-[1.5rem] border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-300"
                placeholder="Tell me what AI system, agentic workflow, or product engineering challenge you're solving."
                name="message"
              />
            </label>

            <label className="hidden">
              Website
              <input
                value={values.website}
                onChange={(event) => updateField("website", event.target.value)}
                name="website"
                tabIndex={-1}
                autoComplete="off"
              />
            </label>

            <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="min-h-6 text-xs text-slate-600">
                {status === "success" ? (
                  <span className="text-blue-700">{message}</span>
                ) : status === "error" ? (
                  <span className="text-rose-600">{message}</span>
                ) : (
                  <span>Direct responses delivered to vasmo.aamir@gmail.com</span>
                )}
              </div>
              <Button type="submit" size="lg" disabled={status === "submitting"}>
                {status === "submitting" ? "Sending..." : "Send Message"}
              </Button>
            </div>
          </form>
        </div>
      </SectionShell>
    </div>
  );
}
