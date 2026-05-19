import { ArrowRight } from "lucide-react";

export function FinalCta() {
  return (
    <section id="cta" className="relative overflow-hidden px-6 py-24 sm:py-32">
      <div className="bg-grid absolute inset-0 opacity-30 dark:opacity-15" aria-hidden />
      <div className="absolute inset-x-0 top-1/2 -z-0 mx-auto h-64 max-w-4xl -translate-y-1/2 rounded-full bg-[var(--cyan)]/20 blur-3xl" aria-hidden />
      <div className="relative mx-auto max-w-4xl rounded-3xl border border-border bg-surface/80 p-10 text-center shadow-elegant backdrop-blur sm:p-16">
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--cyan)]">Ready when you are</p>
        <h2 className="mt-3 text-balance font-display text-3xl font-semibold tracking-tight text-foreground sm:text-5xl">
          Bring AI into production, not just into PowerPoint.
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-balance text-muted-foreground">
          See how BLDR helps your teams ship governed AI workflows in weeks — not quarters.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a href="#" className="group inline-flex items-center gap-2 rounded-md bg-[var(--navy)] px-6 py-3 text-sm font-medium text-background shadow-elegant transition-all hover:-translate-y-0.5 hover:shadow-glow dark:bg-primary dark:text-primary-foreground">
            Book a Demo
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a href="#platform" className="inline-flex items-center gap-2 rounded-md border border-border bg-background/60 px-6 py-3 text-sm font-medium text-foreground hover:bg-secondary">
            Explore the Platform
          </a>
        </div>
      </div>
    </section>
  );
}
