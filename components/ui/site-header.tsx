import Link from "next/link";

import { buttonClasses } from "@/components/ui/button";
import { CvLink } from "@/components/ui/cv-link";

const navigation = [
  { href: "/#work", label: "Work" },
  { href: "/systems", label: "Systems" },
  { href: "/#journey", label: "Journey" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/40 bg-white/70 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-6 py-3.5 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-3 group">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-950 text-sm font-semibold text-white shadow-md transition group-hover:bg-blue-600">
              AK
            </span>
            <div>
              <p className="text-sm font-semibold text-slate-950">Aamir Khan</p>
              <p className="text-[10px] uppercase tracking-[0.24em] text-blue-600 font-semibold">
                AI Engineer & Founder
              </p>
            </div>
          </Link>

          <nav className="hidden items-center gap-6 md:flex">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-xs font-semibold uppercase tracking-wider text-slate-700 transition hover:text-blue-600"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex flex-wrap items-center gap-3">
            <CvLink
              source="header"
              label="Resume"
              className={buttonClasses({ variant: "secondary", size: "md" })}
            />
            <Link href="/systems" className={buttonClasses({ variant: "primary", size: "md" })}>
              View Systems
            </Link>
          </div>
        </div>

        <nav className="mt-3 flex items-center gap-5 overflow-x-auto pb-1 md:hidden">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="whitespace-nowrap text-xs font-semibold uppercase tracking-wider text-slate-700 transition hover:text-blue-600"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
