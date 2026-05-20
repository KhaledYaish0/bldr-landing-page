import { useState } from "react";
import { Landmark, Banknote, HeartPulse, GraduationCap, Antenna } from "lucide-react";
import { cn } from "@/lib/utils";

const industries = [
  {
    id: "gov",
    icon: Landmark,
    name: "Government",
    blurb: "Citizen services and internal operations with audited, sovereign AI.",
    points: [
      "Citizen-facing service workflows",
      "Internal policy and document assistants",
      "Controlled knowledge access",
      "Auditability and governance",
      "Regulated operations support",
    ],
  },
  {
    id: "fin",
    icon: Banknote,
    name: "Finance",
    blurb: "Document-heavy, regulated workflows handled with explainability.",
    points: [
      "KYC and onboarding support",
      "Document review automation",
      "Internal compliance copilots",
      "Audit-ready agent actions",
      "Risk-aware approvals",
    ],
  },
  {
    id: "hc",
    icon: HeartPulse,
    name: "Healthcare",
    blurb: "Staff enablement and secure operational support, never patient-facing diagnosis.",
    points: [
      "Staff enablement",
      "Secure knowledge retrieval",
      "Internal workflow support",
      "Operational oversight",
      "PHI-aware governance",
    ],
  },
  {
    id: "edu",
    icon: GraduationCap,
    name: "Education",
    blurb: "Student services and faculty operations at institutional scale.",
    points: [
      "Student services",
      "Admissions and registration support",
      "Policy and document assistants",
      "Staff and faculty workflows",
      "Multilingual support",
    ],
  },
  {
    id: "tel",
    icon: Antenna,
    name: "Telecom / Shared Services",
    blurb: "High-volume internal operations with controlled escalation.",
    points: [
      "High-volume service operations",
      "Employee support",
      "Tier-1 deflection with handover",
      "Tool-permissioned actions",
      "SLA monitoring",
    ],
  },
];

export function Industries() {
  const [active, setActive] = useState(industries[0]);
  const Icon = active.icon;
  return (
    <section id="industries" className="section-bg-muted py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
            Industries
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Built for complex industries where AI needs control.
          </h2>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-12">
          <ul className="space-y-2 lg:col-span-5">
            {industries.map((ind) => {
              const I = ind.icon;
              const isActive = ind.id === active.id;
              return (
                <li key={ind.id}>
                  <button
                    onClick={() => setActive(ind)}
                    className={cn(
                      "group flex w-full items-center gap-4 rounded-xl border p-4 text-left transition-all",
                      isActive
                        ? "border-[var(--cyan)]/40 bg-surface shadow-elegant"
                        : "border-border bg-surface/80 hover:bg-surface",
                    )}
                  >
                    <span
                      className={cn(
                        "grid h-10 w-10 place-items-center rounded-md border transition-colors",
                        isActive
                          ? "border-[var(--cyan)]/40 bg-[var(--cyan)]/10 text-[var(--cyan)]"
                          : "border-border text-muted-foreground",
                      )}
                    >
                      <I className="h-5 w-5" />
                    </span>
                    <div>
                      <div className="font-display font-semibold text-foreground">{ind.name}</div>
                      <div className="text-xs text-muted-foreground">{ind.blurb}</div>
                    </div>
                  </button>
                </li>
              );
            })}
          </ul>

          <div className="rounded-2xl border border-border bg-surface p-8 shadow-elegant lg:col-span-7">
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-md border border-[var(--cyan)]/40 bg-[var(--cyan)]/10 text-[var(--cyan)]">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="font-display text-xl font-semibold text-foreground">{active.name}</h3>
            </div>
            <p className="mt-4 text-muted-foreground">{active.blurb}</p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {active.points.map((p) => (
                <li
                  key={p}
                  className="flex items-start gap-2 rounded-lg border border-border bg-surface-muted/60 px-3 py-2 text-sm text-foreground"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--cyan)]" />
                  {p}
                </li>
              ))}
            </ul>
            <div className="mt-6 flex items-center justify-between rounded-lg border border-dashed border-border bg-surface p-4 text-sm shadow-sm">
              <span className="text-muted-foreground">Deployment options</span>
              <span className="flex gap-2">
                {["Sovereign", "On-prem", "Private cloud"].map((d) => (
                  <span
                    key={d}
                    className="rounded-full border border-border bg-surface px-2.5 py-1 text-xs text-foreground"
                  >
                    {d}
                  </span>
                ))}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
