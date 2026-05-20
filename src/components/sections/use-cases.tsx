import { Users, FileText, LifeBuoy, ShieldCheck, Headphones, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import onboardingImg from "@/assets/Employee onboarding automation.png";
import policyImg from "@/assets/Policy and document assistants.png";
import itSupportImg from "@/assets/IT and internal support copilots.png";
import regulatedImg from "@/assets/Regulated workflow automation.png";
import serviceOpsImg from "@/assets/AI-powered service operations.png";

const cases = [
  {
    icon: Users,
    title: "Employee onboarding automation",
    line: "Self-serve answers for new hires, with HR escalation when needed.",
    metric: "−42% onboarding tickets",
    image: onboardingImg,
    imgAlt: "HR and people operations team guiding a new employee through enterprise onboarding",
    imageClass: "object-[center_30%]",
    steps: [
      "New hire question",
      "HR policy lookup",
      "Grounded answer",
      "Escalate if needed",
      "Lower HR load",
    ],
  },
  {
    icon: FileText,
    title: "Policy and document assistants",
    line: "RAG-powered answers with citations across the policy library.",
    metric: "3× faster policy lookups",
    image: policyImg,
    imgAlt: "Compliance professionals reviewing policy documents with grounded AI assistance",
    imageClass: "object-center",
    steps: [
      "Question routed",
      "RAG over policies",
      "Cited answer",
      "Approval if cross-policy",
      "Faster compliance",
    ],
  },
  {
    icon: LifeBuoy,
    title: "IT and internal support copilots",
    line: "Deflect tier-1 tickets and run safe remediation with approvals.",
    metric: "−35% MTTR",
    image: itSupportImg,
    imgAlt: "IT support specialists resolving internal tickets with a governed copilot",
    imageClass: "object-[center_25%]",
    steps: ["Ticket created", "Knowledge lookup", "Suggested fix", "Human-in-loop", "Lower MTTR"],
  },
  {
    icon: ShieldCheck,
    title: "Regulated workflow automation",
    line: "Policy-guarded execution with full audit trail per action.",
    metric: "100% audit coverage",
    image: regulatedImg,
    imgAlt: "Operations leaders overseeing a regulated workflow with audit-ready controls",
    imageClass: "object-center",
    steps: [
      "System trigger",
      "Policy guardrails",
      "Tool action",
      "Audit log",
      "Compliant repeatability",
    ],
  },
  {
    icon: Headphones,
    title: "AI-powered service operations",
    line: "High-volume deflection with graceful handoff to human agents.",
    metric: "+58% deflection rate",
    image: serviceOpsImg,
    imgAlt: "Service operations team managing high-volume requests with AI-assisted handoff",
    imageClass: "object-[center_35%]",
    steps: [
      "Request in",
      "Knowledge retrieval",
      "System action",
      "Handoff if needed",
      "Lower cost-to-serve",
    ],
  },
];

export function UseCases() {
  return (
    <section id="solutions" className="section-bg-base py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
            Solutions
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Enterprise AI solutions for real operational workflows.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Built around real teams — HR, finance, IT, operations, and service. Each workflow shows
            the path from trigger to governed outcome, so leaders see what production AI looks like
            in practice.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cases.map(({ icon: Icon, title, line, metric, image, imgAlt, imageClass, steps }) => (
            <article
              key={title}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-surface shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[var(--cyan)]/40 hover:shadow-elegant dark:bg-surface/90"
            >
              <div className="relative aspect-[16/10] overflow-hidden rounded-t-xl">
                <img
                  src={image}
                  alt={imgAlt}
                  loading="lazy"
                  className={cn(
                    "h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]",
                    imageClass,
                  )}
                />
              </div>

              <div className="flex flex-1 flex-col p-6 sm:p-7">
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-md border border-border bg-surface-muted text-[var(--cyan)]">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="font-display text-lg font-semibold text-foreground">{title}</h3>
                </div>
                <p className="mt-3 text-sm text-muted-foreground">{line}</p>

                <div className="mt-5 flex flex-wrap items-center gap-2 text-[11px]">
                  {steps.map((s, idx) => (
                    <span key={s} className="inline-flex items-center gap-1.5">
                      <span className="rounded-md border border-border bg-surface-muted/60 px-2 py-1 text-foreground/85 dark:bg-surface-muted/40">
                        {s}
                      </span>
                      {idx < steps.length - 1 && (
                        <ArrowRight className="h-3 w-3 text-muted-foreground" />
                      )}
                    </span>
                  ))}
                </div>

                <div className="mt-5 inline-flex w-fit items-center gap-2 rounded-full border border-[var(--cyan)]/30 bg-[var(--cyan)]/8 px-3 py-1 text-xs font-medium text-[var(--cyan)]">
                  {metric}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
