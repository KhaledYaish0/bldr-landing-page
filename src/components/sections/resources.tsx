import { BookOpen, Shield, Layers, Calculator, ClipboardCheck } from "lucide-react";

const resources = [
  {
    icon: BookOpen,
    title: "Build vs Buy Enterprise AI Guide",
    audience: "For CIOs",
    kind: "Guide",
  },
  {
    icon: Shield,
    title: "Enterprise AI Governance Framework",
    audience: "For CISOs",
    kind: "Framework",
  },
  {
    icon: Layers,
    title: "Enterprise RAG Architecture Brief",
    audience: "For Enterprise Architects",
    kind: "Brief",
  },
  { icon: Calculator, title: "ROI Calculator", audience: "For Operations Leaders", kind: "Tool" },
  {
    icon: ClipboardCheck,
    title: "Procurement Checklist",
    audience: "For Procurement",
    kind: "Checklist",
  },
];

export function Resources() {
  return (
    <section id="resources" className="section-bg-muted py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
              Resources
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              What resources help teams evaluate BLDR?
            </h2>
          </div>
          <a href="#" className="text-sm font-medium text-[var(--cyan)] hover:underline">
            Browse all resources →
          </a>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {resources.map(({ icon: Icon, title, audience, kind }) => (
            <a
              key={title}
              href="#"
              className="group relative flex flex-col rounded-2xl border border-border bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--cyan)]/40 hover:shadow-elegant"
            >
              <div className="flex items-center justify-between">
                <span className="grid h-10 w-10 place-items-center rounded-md border border-border bg-surface-muted text-[var(--cyan)]">
                  <Icon className="h-5 w-5" />
                </span>
                <span className="rounded-full border border-border bg-surface-muted px-2 py-0.5 text-[10px] uppercase tracking-widest text-muted-foreground">
                  {kind}
                </span>
              </div>
              <h3 className="mt-5 font-display text-base font-semibold text-foreground">{title}</h3>
              <p className="mt-2 text-xs text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100">
                {audience}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
