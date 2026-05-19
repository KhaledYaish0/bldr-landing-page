import { useState } from "react";
import { AlertTriangle, Check, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import gulfAtmosphere from "@/assets/gulf-region-atmosphere.png";

const without = [
  { t: "AI pilots stay stuck", d: "Teams can test AI ideas, but struggle to move them into governed production workflows." },
  { t: "Shadow AI spreads", d: "Employees use public tools because there is no secure internal AI environment." },
  { t: "Legacy systems stay disconnected", d: "Data remains trapped across ERP, CRM, PDFs, policies, and internal systems." },
  { t: "IT becomes the bottleneck", d: "Every new workflow feels like a custom development project." },
  { t: "Governance arrives too late", d: "Security and compliance reviews show up only after the damage is done." },
];
const withB = [
  { t: "Workflows move toward production", d: "Prototype to deployment in a governed environment built for enterprise scale." },
  { t: "AI usage becomes controlled", d: "Centralized AI surface replaces shadow tools with policy-aware agents." },
  { t: "Knowledge becomes usable", d: "Documents, systems, and policies grounded into every agent answer." },
  { t: "Business teams move faster", d: "Citizen developers ship workflows without waiting on engineering queues." },
  { t: "Governance is built in", d: "RBAC, audit logs, approvals, and tool permissions live inside the platform." },
];

function Column({
  title, items, tone,
}: { title: string; items: typeof without; tone: "muted" | "brand" }) {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  return (
    <div
      className={cn(
        "relative z-10 rounded-2xl border p-6 sm:p-8",
        tone === "muted"
          ? "border-border bg-surface shadow-sm dark:bg-surface-muted/60 dark:shadow-none"
          : "border-[var(--cyan)]/30 bg-surface shadow-elegant",
      )}
    >
      <div className="mb-6 flex items-center gap-2">
        {tone === "muted" ? (
          <AlertTriangle className="h-4 w-4 text-[#C2413A] dark:text-red-400" aria-hidden />
        ) : (
          <Check className="h-4 w-4 text-[var(--cyan)]" aria-hidden />
        )}
        <h3 className="font-display text-sm font-semibold uppercase tracking-widest text-foreground">
          {title}
        </h3>
      </div>
      <ul className="space-y-2">
        {items.map((it, i) => {
          const open = openIdx === i;
          return (
            <li
              key={it.t}
              onMouseEnter={() => setOpenIdx(i)}
              onMouseLeave={() => setOpenIdx(null)}
            >
              <button
                type="button"
                onClick={() => setOpenIdx(open ? null : i)}
                className={cn(
                  "group flex w-full items-center justify-between rounded-lg border border-transparent px-4 py-3 text-left transition-all",
                  open
                    ? tone === "brand"
                      ? "border-[var(--cyan)]/40 bg-[var(--cyan)]/5"
                      : "border-border bg-surface-muted shadow-sm"
                    : "hover:bg-surface-muted/80",
                )}
              >
                <span className="font-medium text-foreground">{it.t}</span>
                <ChevronDown
                  className={cn(
                    "h-4 w-4 text-muted-foreground transition-transform",
                    open && "rotate-180 text-foreground",
                  )}
                />
              </button>
              <div
                className={cn(
                  "grid overflow-hidden px-4 transition-all duration-300",
                  open ? "grid-rows-[1fr] opacity-100 pt-2 pb-3" : "grid-rows-[0fr] opacity-0",
                )}
              >
                <p className="min-h-0 text-sm leading-relaxed text-muted-foreground">{it.d}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export function Problem() {
  return (
    <section className="section-bg-muted relative isolate overflow-hidden py-24 sm:py-32">
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-10">
        <div className="relative w-full overflow-hidden py-16 text-center sm:py-20">
          <div
            className="pointer-events-none absolute inset-0 overflow-hidden rounded-[2.5rem] dark:hidden"
            aria-hidden
          >
            <div className="absolute inset-0 flex items-center justify-end">
              <img
                src={gulfAtmosphere}
                alt=""
                className="h-full w-[95%] max-w-[1400px] translate-x-[10%] object-contain object-right opacity-[0.5] saturate-[0.9] sm:opacity-[0.52] [mask-image:linear-gradient(to_left,black_55%,transparent_100%)]"
              />
            </div>
          </div>
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[var(--section-muted)] from-[0%] via-[color-mix(in_oklab,var(--section-muted)_82%,transparent)] via-[48%] to-transparent opacity-95 dark:hidden"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_80%_at_72%_50%,transparent_0%,var(--section-muted)_72%)] opacity-70 dark:hidden"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-x-0 top-0 h-14 bg-gradient-to-b from-[var(--section-muted)] to-transparent dark:hidden"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-[var(--section-muted)] to-transparent dark:hidden"
            aria-hidden
          />
          <div className="relative z-10 mx-auto max-w-3xl">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">The enterprise AI gap</p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Why do enterprise AI projects stall before production?
            </h2>
            <p className="mt-4 text-balance text-muted-foreground">
              Most enterprise AI initiatives slow down because they get trapped between ambition and execution.
              Teams face IT bottlenecks, fragmented systems, security objections, unclear ownership, and a lack
              of governed tools practical enough for everyday deployment.
            </p>
          </div>
        </div>

        <div className="relative mt-14 grid gap-6 lg:grid-cols-2">
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-12 hidden h-[calc(100%-3rem)] w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-[var(--cyan)]/40 to-transparent lg:block"
          />
          <Column title="With BLDR" items={withB} tone="brand" />
          <Column title="Without BLDR" items={without} tone="muted" />
        </div>
      </div>
    </section>
  );
}



