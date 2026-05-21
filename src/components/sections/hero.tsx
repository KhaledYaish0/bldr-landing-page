import { ArrowRight, ShieldCheck, Sparkles, Workflow, Database } from "lucide-react";

const pills = [
  "No-code agent creation",
  "Sovereign / on-prem options",
  "Model-agnostic orchestration",
  "Governed workflow automation",
];

const floats = [
  { label: "Enterprise AI", icon: Sparkles, pos: "left-[-10%] top-6" },
  { label: "Secure Deployment", icon: ShieldCheck, pos: "right-[-6%] top-20" },
  { label: "Workflow Automation", icon: Workflow, pos: "left-[-4%] bottom-12" },
  { label: "BLDR OS", icon: Database, pos: "right-[-8%] bottom-6" },
];

export function Hero() {
  return (
    <section className="section-bg-base bg-soft-gradient relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="bg-grid absolute inset-0 opacity-[0.35] dark:opacity-20" aria-hidden />
      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <div
            className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-muted-foreground shadow-sm"
            style={{ animation: "fade-up 0.6s ease-out both" }}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--cyan)]" />
            The No-Code Enterprise AI Operating System
          </div>
          <h1
            className="mt-6 text-balance font-display text-4xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl"
            style={{ animation: "fade-up 0.7s 0.05s ease-out both" }}
          >
            Enterprise rigor meets{" "}
            <span className="bg-gradient-to-r from-[var(--navy)] to-[var(--cyan)] bg-clip-text text-transparent dark:from-primary dark:to-[var(--cyan)]">
              no-code AI execution.
            </span>
          </h1>
          <p
            className="mt-6 max-w-xl text-balance text-base text-muted-foreground sm:text-lg"
            style={{ animation: "fade-up 0.7s 0.15s ease-out both" }}
          >
            BLDR is a no-code enterprise AI operating system that helps organizations build AI
            agents, automate workflows, connect legacy systems, and deploy secure AI across
            departments with governance built in.
          </p>
          <p
            className="mt-4 max-w-xl text-sm text-muted-foreground/90"
            style={{ animation: "fade-up 0.7s 0.25s ease-out both" }}
          >
            Build AI agents with prompts. Ground them in enterprise knowledge. Deploy across
            operations, systems, and teams — without creating shadow AI or waiting on long custom
            development cycles.
          </p>

          <div
            className="mt-8 flex flex-wrap items-center gap-3"
            style={{ animation: "fade-up 0.7s 0.3s ease-out both" }}
          >
            <a
              href="/book-demo"
              className="group inline-flex items-center gap-2 rounded-md bg-[var(--navy)] px-5 py-3 text-sm font-medium text-background shadow-elegant transition-all hover:translate-y-[-1px] hover:shadow-glow dark:bg-primary dark:text-primary-foreground"
            >
              Book a Demo
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="/book-demo"
              className="inline-flex items-center gap-2 rounded-md border border-border bg-surface px-5 py-3 text-sm font-medium text-foreground shadow-sm transition-colors hover:bg-secondary"
            >
              Explore the Platform
            </a>
            <a
              href="/book-demo"
              className="inline-flex items-center gap-2 rounded-md border border-[var(--cyan)]/40 bg-[var(--cyan)]/10 px-5 py-3 text-sm font-medium text-foreground transition-colors hover:bg-[var(--cyan)]/15"
            >
              Test it yourself
            </a>
          </div>

          <ul className="mt-10 flex flex-wrap gap-2">
            {pills.map((p, i) => (
              <li
                key={p}
                className="rounded-full border border-border bg-surface px-3 py-1.5 text-xs text-foreground/80 shadow-sm"
                style={{ animation: `fade-up 0.5s ${0.4 + i * 0.08}s ease-out both` }}
              >
                {p}
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-6">
          <div
            className="relative mx-auto max-w-xl"
            style={{ animation: "fade-up 0.9s 0.2s ease-out both" }}
          >
            <div
              className="absolute -inset-6 rounded-3xl bg-[var(--cyan)]/15 blur-3xl"
              aria-hidden
            />
            <div className="relative rounded-2xl border border-border bg-surface p-3 shadow-elegant backdrop-blur">
              <div className="flex items-center justify-between px-2 pb-3 pt-1">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[var(--cyan)] shadow-[0_0_10px_currentColor]" />
                  <span className="text-xs font-medium text-muted-foreground">
                    Inova AI Solutions Overview
                  </span>
                </div>
                <span className="text-[10px] uppercase tracking-widest text-red-600 dark:text-red-400">
                  Live
                </span>
              </div>
              <div className="relative aspect-video overflow-hidden rounded-xl border border-border bg-black">
                <iframe
                  src="https://www.youtube.com/embed/kpoFATxofjA"
                  title="Inova AI Solutions Overview"
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="h-full w-full"
                />
              </div>
            </div>

            {floats.map(({ label, icon: Icon, pos }, i) => (
              <div
                key={label}
                className={`absolute ${pos} hidden items-center gap-2 rounded-full border border-border bg-surface/95 px-3 py-1.5 text-xs font-medium text-foreground shadow-elegant backdrop-blur md:inline-flex`}
                style={{
                  animation: `fade-up 0.7s ${0.5 + i * 0.15}s ease-out both, float-y 6s ${i * 0.6}s ease-in-out infinite alternate`,
                }}
              >
                <Icon className="h-3.5 w-3.5 text-[var(--cyan)]" />
                {label}
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float-y {
          from { transform: translateY(-4px); }
          to { transform: translateY(6px); }
        }
      `}</style>
    </section>
  );
}
