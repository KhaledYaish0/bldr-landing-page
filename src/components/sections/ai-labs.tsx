import { FileCheck2, Landmark, FileText, GraduationCap, Workflow, Calculator, AlertTriangle, ArrowRight } from "lucide-react";

const agents = [
  { icon: FileCheck2, title: "Policy Compliance Agent", desc: "Reviews workflows against internal policy and regulatory frameworks." },
  { icon: Landmark, title: "Citizen Services Agent", desc: "Handles multilingual citizen queries with auditable, sourced answers." },
  { icon: FileText, title: "Finance Document Review Agent", desc: "Extracts, classifies, and routes invoices, contracts, and statements." },
  { icon: GraduationCap, title: "Education Support Agent", desc: "Helps faculty and students navigate policies and registration workflows." },
];

const tools = [
  { icon: Workflow, t: "AI Workflow Generator" },
  { icon: Calculator, t: "AI ROI Forecaster" },
  { icon: AlertTriangle, t: "Shadow AI Risk Analyzer" },
];

export function AiLabs() {
  return (
    <section id="ai-labs" className="bg-surface-muted/50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">AI Labs</p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Explore BLDR agents in realistic enterprise environments.
            </h2>
            <p className="mt-4 text-muted-foreground">
              Try interactive examples of grounded, governed agents. Each card runs a short workflow:
              request → knowledge check → agent response → governance step → result.
            </p>
          </div>
          <a href="#cta" className="rounded-md border border-border bg-surface px-4 py-2.5 text-sm font-medium text-foreground hover:bg-surface-muted">
            Launch AI Lab
          </a>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {agents.map(({ icon: Icon, title, desc }) => (
            <article
              key={title}
              className="group relative overflow-hidden rounded-2xl border border-border bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--cyan)]/40 hover:shadow-elegant"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--cyan)]/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <span className="grid h-10 w-10 place-items-center rounded-md border border-border bg-surface-muted text-[var(--cyan)]">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 font-display text-base font-semibold text-foreground">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
              <div className="mt-4 flex flex-wrap gap-1.5 text-[10px]">
                {["Request", "Knowledge", "Response", "Governance"].map((s) => (
                  <span key={s} className="rounded-full border border-border bg-background/60 px-2 py-0.5 text-foreground/80">{s}</span>
                ))}
              </div>
              <div className="mt-5 flex items-center gap-1 text-xs font-medium text-[var(--cyan)] opacity-0 transition-opacity group-hover:opacity-100">
                Run demo <ArrowRight className="h-3 w-3" />
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {tools.map(({ icon: Icon, t }) => (
            <div key={t} className="flex items-center gap-3 rounded-xl border border-dashed border-border bg-background/40 p-4">
              <span className="grid h-9 w-9 place-items-center rounded-md border border-border bg-surface text-[var(--cyan)]">
                <Icon className="h-4 w-4" />
              </span>
              <div className="text-sm font-medium text-foreground">{t}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
