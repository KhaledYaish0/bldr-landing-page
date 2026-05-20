import {
  ShieldCheck,
  Server,
  Cloud,
  Lock,
  ScrollText,
  UserCheck,
  Wrench,
  Cpu,
  FileCheck2,
} from "lucide-react";

const controls = [
  { icon: Server, t: "Sovereign deployment" },
  { icon: Server, t: "On-premise support" },
  { icon: Cloud, t: "Private cloud" },
  { icon: Lock, t: "Role-based access (RBAC)" },
  { icon: ScrollText, t: "Audit logs" },
  { icon: UserCheck, t: "Human-in-the-loop approvals" },
  { icon: Wrench, t: "Tool permissions" },
  { icon: Cpu, t: "Model access management" },
  { icon: FileCheck2, t: "Policy-driven deployment" },
];

export function Security() {
  return (
    <section id="security" className="mx-auto max-w-7xl px-6 py-24 sm:py-32">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
            Security and governance
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            How does BLDR govern secure enterprise AI?
          </h2>
          <p className="mt-4 text-muted-foreground">
            Built for organizations that cannot afford shortcuts. Sovereign deployment, granular
            controls, audit-ready logs, and approval workflows are first-class — not bolted on.
          </p>
          <a
            href="#cta"
            className="mt-7 inline-flex items-center gap-2 rounded-md border border-border bg-surface px-4 py-2.5 text-sm font-medium text-foreground hover:bg-surface-muted"
          >
            View Security and Trust
          </a>
        </div>

        <div className="relative">
          <div className="absolute -inset-6 rounded-3xl bg-[var(--cyan)]/8 blur-3xl" aria-hidden />
          <div className="relative rounded-2xl border border-border bg-surface p-7 shadow-elegant">
            <div className="mb-5 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="grid h-9 w-9 place-items-center rounded-md border border-[var(--cyan)]/40 bg-[var(--cyan)]/10 text-[var(--cyan)]">
                  <ShieldCheck className="h-4 w-4" />
                </span>
                <span className="font-display font-semibold text-foreground">Control Center</span>
              </div>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--cyan)]/30 bg-[var(--cyan)]/10 px-2 py-0.5 text-[10px] font-medium uppercase tracking-widest text-[var(--cyan)]">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[var(--cyan)]" />
                Healthy
              </span>
            </div>
            <ul className="grid gap-2 sm:grid-cols-2">
              {controls.map(({ icon: Icon, t }) => (
                <li
                  key={t}
                  className="flex items-center gap-2.5 rounded-lg border border-border bg-surface-muted/60 px-3 py-2.5 text-sm text-foreground"
                >
                  <Icon className="h-4 w-4 text-[var(--cyan)]" />
                  {t}
                </li>
              ))}
            </ul>
            <div className="mt-5 rounded-lg border border-border bg-background/60 p-3 font-mono text-[11px] leading-relaxed text-muted-foreground">
              <div>
                14:02:11 · rbac.check(user=ops-lead, action=workflow.deploy) →{" "}
                <span className="text-[var(--cyan)]">allow</span>
              </div>
              <div>
                14:02:14 · policy.scan(workflow=finance.ap) →{" "}
                <span className="text-[var(--cyan)]">pass</span>
              </div>
              <div>
                14:02:18 · approval.request(approver=ciso) →{" "}
                <span className="text-foreground">pending</span>
              </div>
              <div>
                14:03:02 · approval.granted → <span className="text-[var(--cyan)]">deployed</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
