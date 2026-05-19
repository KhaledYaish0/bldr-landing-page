import { PenLine, BookOpen, Plug, ShieldCheck, Rocket, ArrowRight } from "lucide-react";

const steps = [
  { icon: PenLine, t: "Describe", d: "Write the workflow in plain language." },
  { icon: BookOpen, t: "Ground", d: "Attach policies, PDFs, and systems." },
  { icon: Plug, t: "Connect", d: "Wire up tools, APIs, and legacy systems." },
  { icon: ShieldCheck, t: "Govern", d: "Add RBAC, approvals, and audit." },
  { icon: Rocket, t: "Deploy", d: "Ship, monitor, and improve in production." },
];

export function HowItWorks() {
  return (
    <section className="section-bg-soft py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div className="max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">How BLDR works</p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            From workflow idea to production in five steps.
          </h2>
        </div>
        <a href="#cta" className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--cyan)] hover:underline">
          Book a guided walkthrough <ArrowRight className="h-3.5 w-3.5" />
        </a>
      </div>

      <ol className="relative mt-12 grid gap-4 md:grid-cols-5">
        <div
          aria-hidden
          className="absolute left-0 right-0 top-6 hidden h-px bg-gradient-to-r from-transparent via-[var(--cyan)]/40 to-transparent md:block"
        />
        {steps.map((s, i) => {
          const Icon = s.icon;
          return (
            <li
              key={s.t}
              className="group relative rounded-2xl border border-border bg-surface p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--cyan)]/40 hover:shadow-elegant"
            >
              <div className="flex items-center gap-3">
                <span className="relative grid h-12 w-12 place-items-center rounded-xl border border-border bg-surface-muted text-[var(--cyan)] transition-colors group-hover:border-[var(--cyan)]/40 group-hover:bg-[var(--cyan)]/10">
                  <Icon className="h-5 w-5" />
                  <span className="absolute -right-1.5 -top-1.5 grid h-5 w-5 place-items-center rounded-full bg-[var(--navy)] text-[10px] font-semibold text-background dark:bg-primary dark:text-primary-foreground">
                    {i + 1}
                  </span>
                </span>
                <h3 className="font-display text-base font-semibold text-foreground">{s.t}</h3>
              </div>
              <p className="mt-3 text-sm text-muted-foreground">{s.d}</p>
            </li>
          );
        })}
      </ol>
      </div>
    </section>
  );
}
