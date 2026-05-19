import {
  Users, Bot, BookOpen, Plug, ShieldCheck, Server, ScrollText,
  MessageSquare, FileText, Workflow, ArrowRight,
} from "lucide-react";

interface LayerCard {
  icon: typeof Users;
  label: string;
  hint: string;
}

function Card({ icon: Icon, label, hint, className = "" }: LayerCard & { className?: string }) {
  return (
    <div
      className={`flex items-center gap-2.5 rounded-xl border border-border bg-surface px-3 py-2.5 shadow-elegant backdrop-blur ${className}`}
    >
      <span className="grid h-7 w-7 place-items-center rounded-md border border-border bg-surface-muted text-[var(--cyan)]">
        <Icon className="h-3.5 w-3.5" />
      </span>
      <div className="leading-tight">
        <div className="text-[11px] font-semibold text-foreground">{label}</div>
        <div className="text-[9px] uppercase tracking-widest text-muted-foreground">{hint}</div>
      </div>
    </div>
  );
}

export function PlatformLayerOverview() {
  return (
    <section id="security" className="relative overflow-hidden px-6 py-24 sm:py-32">
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-30 dark:opacity-15" aria-hidden />
      <div className="absolute inset-x-0 top-1/3 -z-0 mx-auto h-80 max-w-4xl rounded-full bg-[var(--cyan)]/15 blur-3xl" aria-hidden />

      <div className="relative mx-auto max-w-3xl text-center">
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">Platform overview</p>
        <h2 className="mt-3 text-balance font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Powered by an enterprise AI operating layer built for real teams.
        </h2>
        <p className="mt-4 text-balance text-muted-foreground">
          BLDR sits between your people, your knowledge, your tools, and your models — with governance,
          deployment, and observability built into every layer.
        </p>
        <a
          href="#platform"
          className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-[var(--cyan)] hover:underline"
        >
          Explore the Platform <ArrowRight className="h-3.5 w-3.5" />
        </a>
      </div>

      {/* Desktop / tablet — isometric stack */}
      <div className="relative mx-auto mt-14 hidden max-w-5xl md:block">
        <div
          className="group relative rounded-3xl border border-border bg-surface/60 p-10 shadow-elegant backdrop-blur-xl"
          style={{ perspective: "1600px" }}
        >
          <div
            className="relative mx-auto aspect-[16/10] w-full transition-transform duration-700 group-hover:[transform:rotateX(14deg)_rotateY(-14deg)_rotateZ(2deg)]"
            style={{ transform: "rotateX(20deg) rotateY(-18deg) rotateZ(2deg)", transformStyle: "preserve-3d" }}
          >
            {/* Layer planes */}
            {[
              { y: 0, label: "Enterprise Users & Partners", tint: "from-[var(--cyan)]/10 to-transparent" },
              { y: 22, label: "BLDR AI Gateway", tint: "from-[var(--cyan)]/20 to-transparent" },
              { y: 44, label: "Agents · Tools · Models", tint: "from-[var(--cyan)]/15 to-transparent" },
              { y: 66, label: "Knowledge & Integrations", tint: "from-[var(--cyan)]/10 to-transparent" },
              { y: 88, label: "Governance · Deployment · Audit", tint: "from-[var(--navy)]/20 to-transparent" },
            ].map((l, i) => (
              <div
                key={l.label}
                className={`absolute left-0 right-0 h-24 rounded-2xl border border-border bg-gradient-to-r ${l.tint} bg-surface/85 shadow-elegant transition-transform duration-700 group-hover:translate-y-[var(--spread)]`}
                style={{
                  top: `${l.y}%`,
                  transform: `translateZ(${(4 - i) * 28}px)`,
                  ['--spread' as any]: `${(2 - i) * 6}px`,
                }}
              >
                <div className="flex h-full items-center justify-between px-5">
                  <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    {l.label}
                  </span>
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--cyan)] shadow-[0_0_10px_currentColor]" />
                </div>
              </div>
            ))}

            {/* Floating element cards */}
            <Card icon={Users} label="Ops Team" hint="People" className="absolute left-[3%] top-[2%]" />
            <Card icon={MessageSquare} label="Citizen Dev" hint="Prompt" className="absolute right-[6%] top-[4%]" />
            <Card icon={Bot} label="Policy Agent" hint="Agent" className="absolute left-[10%] top-[34%]" />
            <Card icon={Workflow} label="Approval flow" hint="Workflow" className="absolute right-[8%] top-[34%]" />
            <Card icon={BookOpen} label="Policy.pdf" hint="Knowledge" className="absolute left-[6%] top-[58%]" />
            <Card icon={FileText} label="SharePoint" hint="Source" className="absolute right-[10%] top-[58%]" />
            <Card icon={Plug} label="SAP · CRM" hint="Integrations" className="absolute left-[18%] top-[78%]" />
            <Card icon={ShieldCheck} label="RBAC" hint="Governance" className="absolute left-[44%] top-[92%]" />
            <Card icon={Server} label="Sovereign" hint="Deploy" className="absolute right-[20%] top-[82%]" />
            <Card icon={ScrollText} label="Audit log" hint="Observability" className="absolute right-[4%] top-[92%]" />
          </div>
        </div>

        <p className="mt-6 text-center text-xs uppercase tracking-widest text-muted-foreground">
          Hover the stack to see the layers spread
        </p>
      </div>

      {/* Mobile — simplified */}
      <div className="relative mx-auto mt-12 max-w-md space-y-2.5 md:hidden">
        {[
          { label: "Your teams, tools, and knowledge", tint: "bg-surface" },
          { label: "BLDR AI Gateway", tint: "bg-[var(--cyan)]/10 border-[var(--cyan)]/30" },
          { label: "Monitors · automates · connects", tint: "bg-surface" },
          { label: "Governance · Deployment · Audit", tint: "bg-[var(--navy)]/5" },
        ].map((row, i) => (
          <div
            key={row.label}
            className={`rounded-xl border border-border ${row.tint} px-4 py-4 text-center shadow-elegant`}
            style={{ animation: `fade-up 0.5s ${i * 0.08}s ease-out both` }}
          >
            <div className="text-sm font-semibold text-foreground">{row.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
