import { useEffect, useState } from "react";
import { Sparkles, Database, Wrench, Cpu, ShieldCheck, Rocket, Activity } from "lucide-react";
import { cn } from "@/lib/utils";

const nodes = [
  { label: "Prompt", icon: Sparkles },
  { label: "BLDR OS", icon: Cpu },
  { label: "Knowledge / Tools / Models", icon: Database, sub: [Database, Wrench, Cpu] },
  { label: "Governance", icon: ShieldCheck },
  { label: "Deployment", icon: Rocket },
  { label: "Monitoring", icon: Activity },
];

export function WhatBldrDoes() {
  const [active, setActive] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setActive((a) => (a + 1) % nodes.length), 1400);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="platform" className="section-bg-soft py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">What BLDR does</p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            One operating system for every enterprise AI workflow.
          </h2>
          <p className="mt-4 text-muted-foreground">
            BLDR turns a prompt into a production workflow. It grounds agents in your knowledge, connects
            them to your tools, routes them across models, applies governance before deployment, and
            monitors performance after rollout.
          </p>
          <ul className="mt-8 space-y-3 text-sm text-foreground/85">
            {[
              "Translate prompts into structured workflows",
              "Ground agents in policies, PDFs, and systems",
              "Route to the right model for the task",
              "Apply governance before deployment",
              "Monitor performance after rollout",
            ].map((t) => (
              <li key={t} className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--cyan)]" />
                {t}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative">
          <div className="absolute -inset-8 rounded-3xl bg-[var(--cyan)]/10 blur-3xl" aria-hidden />
          <div className="relative rounded-2xl border border-border bg-surface p-6 shadow-elegant">
            <div className="mb-4 flex items-center justify-between">
              <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                BLDR Operating Layer
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--cyan)]/30 bg-[var(--cyan)]/10 px-2 py-0.5 text-[10px] font-medium uppercase tracking-widest text-[var(--cyan)]">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[var(--cyan)]" />
                Deployed
              </span>
            </div>
            <ol className="space-y-2.5">
              {nodes.map((n, i) => {
                const isActive = active === i;
                const Icon = n.icon;
                return (
                  <li
                    key={n.label}
                    className={cn(
                      "flex items-center gap-3 rounded-lg border px-4 py-3 transition-all duration-500",
                      isActive
                        ? "border-[var(--cyan)]/50 bg-[var(--cyan)]/8 shadow-[0_0_24px_-8px_var(--cyan)]"
                        : "border-border bg-surface shadow-sm",
                    )}
                  >
                    <span
                      className={cn(
                        "grid h-9 w-9 place-items-center rounded-md border transition-colors",
                        isActive
                          ? "border-[var(--cyan)]/50 bg-[var(--cyan)]/15 text-[var(--cyan)]"
                          : "border-border bg-surface text-muted-foreground",
                      )}
                    >
                      <Icon className="h-4 w-4" />
                    </span>
                    <span className="font-medium text-foreground">{n.label}</span>
                    {i < nodes.length - 1 && (
                      <span className="ml-auto h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent" />
                    )}
                  </li>
                );
              })}
            </ol>
            <div className="mt-4 grid grid-cols-3 gap-3 rounded-lg border border-border bg-surface-muted/60 p-3 text-center text-xs">
              <div><div className="font-display text-lg font-semibold text-foreground">98.4%</div><div className="text-muted-foreground">Uptime</div></div>
              <div><div className="font-display text-lg font-semibold text-foreground">312</div><div className="text-muted-foreground">Agents</div></div>
              <div><div className="font-display text-lg font-semibold text-foreground">24</div><div className="text-muted-foreground">Workflows / day</div></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
