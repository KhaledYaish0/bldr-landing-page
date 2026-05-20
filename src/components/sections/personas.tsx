import { useState } from "react";
import {
  Compass,
  Settings2,
  ShieldCheck,
  Network,
  Sparkles,
  Handshake,
  ArrowRight,
} from "lucide-react";
import { cn } from "@/lib/utils";

const personas = [
  {
    id: "trans",
    icon: Compass,
    label: "Transformation leaders",
    pain: "Pilots that never reach production.",
    answer: "Move workflows from idea to deployment with a single governed platform.",
    cta: "See the CIO brief",
  },
  {
    id: "ops",
    icon: Settings2,
    label: "Operations owners",
    pain: "Backlogs, manual handoffs, repeated work.",
    answer: "Automate service workflows without IT bottlenecks.",
    cta: "View operations workflows",
  },
  {
    id: "sec",
    icon: ShieldCheck,
    label: "Security leaders",
    pain: "Shadow AI, data leakage, unclear controls.",
    answer: "Control where data lives, how agents act, and how AI is governed.",
    cta: "Explore Security & Trust",
  },
  {
    id: "arch",
    icon: Network,
    label: "Enterprise architects",
    pain: "Vendor lock-in and brittle integrations.",
    answer: "Connect AI to existing systems without locking into one model or stack.",
    cta: "Read architecture brief",
  },
  {
    id: "cit",
    icon: Sparkles,
    label: "Citizen developers",
    pain: "Long wait times for new workflows.",
    answer: "Turn business knowledge into working workflows without writing code.",
    cta: "Try the prompt builder",
  },
  {
    id: "par",
    icon: Handshake,
    label: "Partners",
    pain: "Need a platform to build and resell on.",
    answer: "Co-build with SIs, distributors, resellers, and implementation partners.",
    cta: "Join the partner program",
  },
];

export function Personas() {
  const [active, setActive] = useState(personas[0]);
  const Icon = active.icon;
  return (
    <section className="section-bg-base py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
            Built for every enterprise role
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Who is BLDR built for?
          </h2>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-12">
          <div className="grid grid-cols-2 gap-3 lg:col-span-7 md:grid-cols-3">
            {personas.map((p) => {
              const I = p.icon;
              const isActive = p.id === active.id;
              return (
                <button
                  key={p.id}
                  onClick={() => setActive(p)}
                  className={cn(
                    "rounded-xl border p-4 text-left transition-all",
                    isActive
                      ? "border-[var(--cyan)]/40 bg-surface shadow-elegant scale-[1.02]"
                      : "border-border bg-surface/80 hover:bg-surface",
                  )}
                >
                  <I
                    className={cn(
                      "h-5 w-5",
                      isActive ? "text-[var(--cyan)]" : "text-muted-foreground",
                    )}
                  />
                  <div className="mt-3 font-display text-sm font-semibold text-foreground">
                    {p.label}
                  </div>
                </button>
              );
            })}
          </div>

          <div className="rounded-2xl border border-border bg-surface p-7 shadow-elegant lg:col-span-5">
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-md border border-[var(--cyan)]/40 bg-[var(--cyan)]/10 text-[var(--cyan)]">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="font-display text-lg font-semibold text-foreground">{active.label}</h3>
            </div>
            <div className="mt-5 space-y-4 text-sm">
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">Pain</div>
                <p className="mt-1 text-foreground">{active.pain}</p>
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">
                  BLDR answer
                </div>
                <p className="mt-1 text-foreground">{active.answer}</p>
              </div>
            </div>
            <a
              href="#cta"
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-[var(--cyan)] hover:underline"
            >
              {active.cta} <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
