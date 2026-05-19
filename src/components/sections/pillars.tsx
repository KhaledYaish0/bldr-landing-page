import { MessageSquareCode, BookOpenCheck, ShieldCheck, FileText, Database, Server, ScrollText } from "lucide-react";

function PromptVisual() {
  return (
    <div className="relative h-40 overflow-hidden rounded-xl border border-border bg-surface-muted/60 p-4">
      <div className="rounded-md border border-border bg-surface px-3 py-2 font-mono text-[11px] text-foreground">
        <span className="text-muted-foreground">&gt;</span> When invoice arrives, route to Finance…
        <span className="ml-0.5 inline-block h-3 w-1.5 animate-pulse bg-[var(--cyan)] align-middle" />
      </div>
      <div className="mt-3 grid grid-cols-4 gap-2">
        {["Trigger", "Extract", "Route", "Approve"].map((s, i) => (
          <div
            key={s}
            className="rounded-md border border-border bg-surface px-2 py-1.5 text-center text-[10px] font-medium text-foreground"
            style={{ animation: `fade-up 0.5s ${0.2 + i * 0.15}s ease-out both` }}
          >
            {s}
          </div>
        ))}
      </div>
      <div className="absolute inset-x-4 bottom-3 h-px bg-gradient-to-r from-transparent via-[var(--cyan)]/50 to-transparent" />
    </div>
  );
}

function KnowledgeVisual() {
  const items = [
    { icon: FileText, label: "Policy.pdf" },
    { icon: Database, label: "ERP" },
    { icon: FileText, label: "Wiki" },
    { icon: Database, label: "CRM" },
  ];
  return (
    <div className="relative h-40 overflow-hidden rounded-xl border border-border bg-surface-muted/60 p-4">
      <div className="grid grid-cols-2 gap-2">
        {items.map(({ icon: Icon, label }, i) => (
          <div
            key={label}
            className="flex items-center gap-2 rounded-md border border-border bg-surface px-2.5 py-2 text-[11px] text-foreground"
            style={{ animation: `slide-into 1.2s ${i * 0.15}s ease-in-out infinite alternate` }}
          >
            <Icon className="h-3.5 w-3.5 text-[var(--cyan)]" />
            {label}
          </div>
        ))}
      </div>
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 rounded-full border border-[var(--cyan)]/40 bg-[var(--cyan)]/10 px-3 py-1 text-[10px] font-medium text-[var(--cyan)]">
        Knowledge Layer
      </div>
      <style>{`@keyframes slide-into { from { transform: translateY(-2px); opacity: 0.85; } to { transform: translateY(2px); opacity: 1; } }`}</style>
    </div>
  );
}

function DeployVisual() {
  return (
    <div className="relative h-40 overflow-hidden rounded-xl border border-border bg-surface-muted/60 p-4">
      <div className="flex items-center gap-3">
        <span className="grid h-9 w-9 place-items-center rounded-md border border-[var(--cyan)]/40 bg-[var(--cyan)]/10 text-[var(--cyan)]">
          <ShieldCheck className="h-4 w-4" />
        </span>
        <div className="flex-1">
          <div className="text-xs font-semibold text-foreground">Sovereign deploy</div>
          <div className="text-[10px] text-muted-foreground">on-prem · private cloud</div>
        </div>
        <Server className="h-4 w-4 text-muted-foreground" />
      </div>
      <div className="mt-3 space-y-1 font-mono text-[10px] text-muted-foreground">
        {["audit.write", "policy.scan", "deploy.ok"].map((l, i) => (
          <div
            key={l}
            className="flex items-center gap-2"
            style={{ animation: `fade-up 0.5s ${0.2 + i * 0.2}s ease-out both` }}
          >
            <ScrollText className="h-3 w-3 text-[var(--cyan)]" />
            <span className="text-foreground">{l}</span>
            <span className="ml-auto text-[var(--cyan)]">●</span>
          </div>
        ))}
      </div>
    </div>
  );
}

const pillars = [
  {
    icon: MessageSquareCode,
    title: "Prompt-Based Builder",
    desc: "Create agents and workflows in natural language. BLDR translates intent into structured steps.",
    Visual: PromptVisual,
  },
  {
    icon: BookOpenCheck,
    title: "Enterprise Knowledge Layer",
    desc: "Ground outputs in policies, PDFs, internal systems, and proprietary data — with citations.",
    Visual: KnowledgeVisual,
  },
  {
    icon: ShieldCheck,
    title: "Integration & Deployment Layer",
    desc: "Easily integrates with legacy systems and deploys locally for enhanced security.",
    Visual: DeployVisual,
  },
];

export function Pillars() {
  return (
    <section className="section-bg-base py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
      <div className="max-w-2xl">
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">Three platform pillars</p>
        <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          The foundation under every BLDR deployment.
        </h2>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {pillars.map(({ icon: Icon, title, desc, Visual }, i) => (
          <article
            key={title}
            className="group relative overflow-hidden rounded-2xl border border-border bg-surface p-7 shadow-elegant transition-all duration-300 hover:-translate-y-1 hover:border-[var(--cyan)]/40"
            style={{ animation: `fade-up 0.6s ${i * 0.1}s ease-out both` }}
          >
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--cyan)]/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            <span className="grid h-10 w-10 place-items-center rounded-lg border border-border bg-surface-muted text-[var(--cyan)]">
              <Icon className="h-5 w-5" />
            </span>
            <h3 className="mt-5 font-display text-xl font-semibold text-foreground">{title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
            <div className="mt-6">
              <Visual />
              <p className="mt-2 text-[10px] uppercase tracking-widest text-muted-foreground">
                Visual placeholder · final product GIF coming soon
              </p>
            </div>
          </article>
        ))}
      </div>
      </div>
    </section>
  );
}
