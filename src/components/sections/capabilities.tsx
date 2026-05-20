import { useState } from "react";
import { Bot, BookOpen, Wrench, Network, UserCheck, BarChart3 } from "lucide-react";
import { cn } from "@/lib/utils";

const tabs = [
  {
    id: "builder", label: "Agent Builder", icon: Bot,
    title: "Compose agents like product flows.",
    desc: "Drag, prompt, and chain steps. Every agent is a versioned, auditable artifact.",
    visual: () => (
      <div className="grid grid-cols-4 gap-2 text-[10px]">
        {["Intake", "Plan", "Knowledge", "Tool", "Policy", "Respond", "Log", "Notify"].map((s) => (
          <div key={s} className="rounded-md border border-border bg-surface-muted p-2 text-center text-foreground">{s}</div>
        ))}
      </div>
    ),
  },
  {
    id: "rag", label: "Enterprise Knowledge / RAG", icon: BookOpen,
    title: "Grounded answers, every time.",
    desc: "Connect PDFs, policies, SharePoint, ERP, CRM. Citations on every response.",
    visual: () => (
      <div className="space-y-1.5 text-xs">
        <div className="rounded-md border border-border bg-surface p-2 text-foreground">Answer: Policy 4.2 allows 12 days PTO carryover.</div>
        <div className="text-[10px] text-muted-foreground">Sources · HR-Policy-v4.pdf · Confluence/HR/PTO</div>
      </div>
    ),
  },
  {
    id: "tools", label: "MCP Tools & Integrations", icon: Wrench,
    title: "Permissioned tool execution.",
    desc: "MCP-native. Connect Slack, Teams, SAP, Salesforce — with scoped permissions.",
    visual: () => (
      <div className="grid grid-cols-3 gap-2 text-[10px]">
        {["Slack.post", "SAP.read", "CRM.update", "Email.send", "Drive.read", "Ticket.create"].map((t) => (
          <div key={t} className="flex items-center justify-between rounded-md border border-border bg-surface p-2">
            <span className="font-mono text-foreground">{t}</span>
            <span className="text-[var(--cyan)]">●</span>
          </div>
        ))}
      </div>
    ),
  },
  {
    id: "llm", label: "Multi-LLM Routing", icon: Network,
    title: "Right model for the task.",
    desc: "Route by cost, latency, and task-fit. Stay model-agnostic and sovereign-ready.",
    visual: () => (
      <div className="space-y-2 text-xs">
        {[
          { m: "GPT class", c: "$$$", l: "Fast", f: "Reasoning" },
          { m: "Open-weight", c: "$", l: "Fast", f: "Bulk RAG" },
          { m: "On-prem", c: "$$", l: "Local", f: "Sensitive" },
        ].map((r) => (
          <div key={r.m} className="grid grid-cols-4 items-center rounded-md border border-border bg-surface p-2 text-foreground">
            <span>{r.m}</span><span className="text-muted-foreground">{r.c}</span><span className="text-muted-foreground">{r.l}</span><span className="text-[var(--cyan)]">{r.f}</span>
          </div>
        ))}
      </div>
    ),
  },
  {
    id: "hitl", label: "Human-in-the-Loop", icon: UserCheck,
    title: "Approvals where they matter.",
    desc: "Insert approval gates on high-risk actions. Toggle between agent and human ownership.",
    visual: () => (
      <div className="flex items-center justify-between rounded-md border border-border bg-surface p-3 text-xs">
        <span className="text-foreground">Agent Active</span>
        <span className="h-5 w-9 rounded-full bg-[var(--cyan)]/40 p-0.5"><span className="block h-4 w-4 translate-x-4 rounded-full bg-[var(--cyan)] transition-transform" /></span>
        <span className="text-muted-foreground">Human Active</span>
      </div>
    ),
  },
  {
    id: "obs", label: "Analytics & Monitoring", icon: BarChart3,
    title: "Production-grade observability.",
    desc: "Usage, tool calls, handover rate, token spend, latency — all in one place.",
    visual: () => (
      <div className="grid grid-cols-3 gap-2 text-[10px]">
        {[
          { k: "Runs / day", v: "12,408" },
          { k: "Handover", v: "6.2%" },
          { k: "Tokens", v: "1.8M" },
        ].map((s) => (
          <div key={s.k} className="rounded-md border border-border bg-surface p-2">
            <div className="text-muted-foreground">{s.k}</div>
            <div className="font-display text-base font-semibold text-foreground">{s.v}</div>
          </div>
        ))}
      </div>
    ),
  },
];

export function Capabilities() {
  const [active, setActive] = useState(tabs[0].id);
  const current = tabs.find((t) => t.id === active)!;
  const Visual = current.visual;
  return (
    <section id="capabilities" className="section-bg-muted py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
      <div className="max-w-2xl">
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">Platform capabilities</p>
        <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          One operating layer for agents, tools, models, and governance.
        </h2>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <ul className="space-y-1.5">
            {tabs.map((t) => {
              const I = t.icon;
              const isActive = t.id === active;
              return (
                <li key={t.id}>
                  <button
                    onClick={() => setActive(t.id)}
                    className={cn(
                      "flex w-full items-center gap-3 rounded-lg border px-4 py-3 text-left text-sm transition-all",
                      isActive
                        ? "border-[var(--cyan)]/40 bg-[var(--cyan)]/8 text-foreground shadow-elegant"
                        : "border-border bg-surface text-foreground/75 hover:text-foreground",
                    )}
                  >
                    <I className={cn("h-4 w-4", isActive ? "text-[var(--cyan)]" : "text-muted-foreground")} />
                    {t.label}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="lg:col-span-8">
          <div key={active} className="animate-[fade-up_0.4s_ease-out_both] rounded-2xl border border-border bg-surface p-8 shadow-elegant">
            <h3 className="font-display text-2xl font-semibold text-foreground">{current.title}</h3>
            <p className="mt-2 text-muted-foreground">{current.desc}</p>
            <div className="mt-6 rounded-xl border border-border bg-surface-muted/60 p-5"><Visual /></div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}
