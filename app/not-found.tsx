import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-[70vh] max-w-3xl flex-col items-center justify-center px-6 py-24 text-center">
      <div className="panel-shadow panel-surface rounded-[2rem] border border-slate-200/70 px-8 py-12">
        <p className="text-sm font-semibold uppercase tracking-[0.32em] text-blue-600">
          Missing route
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950">
          The system you were looking for is not here.
        </h1>
        <p className="mt-4 text-base leading-8 text-slate-600">
          Try the home page or jump straight into the project explorer.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            href="/"
            className="rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-600"
          >
            Go home
          </Link>
          <Link
            href="/systems"
            className="rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:border-blue-300 hover:text-blue-600"
          >
            Explore systems
          </Link>
        </div>
      </div>
    </main>
  );
}
