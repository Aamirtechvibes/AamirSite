import { cn } from "@/lib/utils/cn";

type SectionShellProps = {
  eyebrow: string;
  title: string;
  description: string;
  children: React.ReactNode;
  className?: string;
};

export function SectionShell({
  eyebrow,
  title,
  description,
  children,
  className,
}: SectionShellProps) {
  return (
    <section className={cn("mx-auto max-w-7xl px-6 py-16 lg:px-8", className)}>
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.32em] text-blue-600">{eyebrow}</p>
        <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
          {title}
        </h2>
        <p className="mt-5 text-lg leading-8 text-slate-600">{description}</p>
      </div>
      <div className="mt-10">{children}</div>
    </section>
  );
}
