import { Users, FileText, LifeBuoy, ShieldCheck, Headphones, ArrowRight } from "lucide-react";
import teamImg from "@/assets/usecase-team.jpg";
import leaderImg from "@/assets/usecase-leader.jpg";
import supportImg from "@/assets/usecase-support.jpg";

const cases = [
  {
    icon: Users, title: "Employee onboarding automation",
    line: "Self-serve answers for new hires, with HR escalation when needed.",
    metric: "−42% onboarding tickets",
    image: teamImg, imgAlt: "Enterprise team reviewing onboarding workflows in a meeting room",
    feature: true,
    steps: ["New hire question", "HR policy lookup", "Grounded answer", "Escalate if needed", "Lower HR load"],
  },
  {
    icon: FileText, title: "Policy and document assistants",
    line: "RAG-powered answers with citations across the policy library.",
    metric: "3× faster policy lookups",
    steps: ["Question routed", "RAG over policies", "Cited answer", "Approval if cross-policy", "Faster compliance"],
  },
  {
    icon: LifeBuoy, title: "IT and internal support copilots",
    line: "Deflect tier-1 tickets and run safe remediation with approvals.",
    metric: "−35% MTTR",
    image: supportImg, imgAlt: "IT support analysts at their workstations reviewing copilot suggestions",
    steps: ["Ticket created", "Knowledge lookup", "Suggested fix", "Human-in-loop", "Lower MTTR"],
  },
  {
    icon: ShieldCheck, title: "Regulated workflow automation",
    line: "Policy-guarded execution with full audit trail per action.",
    metric: "100% audit coverage",
    steps: ["System trigger", "Policy guardrails", "Tool action", "Audit log", "Compliant repeatability"],
  },
  {
    icon: Headphones, title: "AI-powered service operations",
    line: "High-volume deflection with graceful handoff to human agents.",
    metric: "+58% deflection rate",
    image: leaderImg, imgAlt: "Enterprise operations leader reviewing service workflows on a tablet",
    steps: ["Request in", "Knowledge retrieval", "System action", "Handoff if needed", "Lower cost-to-serve"],
  },
];

export function UseCases() {
  return (
    <section id="solutions" className="mx-auto max-w-7xl px-6 py-24 sm:py-32">
      <div className="max-w-2xl">
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">Use-case preview</p>
        <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          The workflows enterprise teams actually run on BLDR.
        </h2>
        <p className="mt-4 text-muted-foreground">
          Built around real teams — HR, finance, IT, operations, and service. Each workflow shows the path
          from trigger to governed outcome, so leaders see what production AI looks like in practice.
        </p>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-12">
        {cases.map(({ icon: Icon, title, line, metric, image, imgAlt, steps, feature }, i) => {
          const wide = feature || i === 2 || i === 4;
          return (
            <article
              key={title}
              className={`group relative overflow-hidden rounded-2xl border border-border bg-surface transition-all duration-300 hover:-translate-y-1 hover:border-[var(--cyan)]/40 hover:shadow-elegant ${wide ? "lg:col-span-7" : "lg:col-span-5"} ${feature ? "lg:col-span-12" : ""}`}
            >
              {image && (
                <div className={`relative ${feature ? "lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2" : "h-44"} overflow-hidden`}>
                  <img
                    src={image}
                    alt={imgAlt}
                    loading="lazy"
                    width={1024}
                    height={1024}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface/95 via-surface/30 to-transparent lg:bg-gradient-to-r" />
                </div>
              )}
              <div className={`relative p-7 ${feature ? "lg:max-w-xl" : ""}`}>
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-md border border-border bg-surface-muted text-[var(--cyan)]">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="font-display text-lg font-semibold text-foreground">{title}</h3>
                </div>
                <p className="mt-3 text-sm text-muted-foreground">{line}</p>

                <div className="mt-5 flex flex-wrap items-center gap-2 text-[11px]">
                  {steps.map((s, idx) => (
                    <span key={s} className="inline-flex items-center gap-1.5">
                      <span className="rounded-md border border-border bg-surface-muted/60 px-2 py-1 text-foreground/85">{s}</span>
                      {idx < steps.length - 1 && <ArrowRight className="h-3 w-3 text-muted-foreground" />}
                    </span>
                  ))}
                </div>

                <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-[var(--cyan)]/30 bg-[var(--cyan)]/8 px-3 py-1 text-xs font-medium text-[var(--cyan)]">
                  {metric}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
