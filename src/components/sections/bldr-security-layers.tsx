import type { CSSProperties, ReactNode } from "react";
import {
  ArrowRight,
  Bot,
  Database,
  FileSpreadsheet,
  FileText,
  Folder,
  Mail,
  MessageSquare,
  ScrollText,
  Shield,
  Sparkles,
  Workflow,
  Cloud,
  CheckCircle2,
} from "lucide-react";
import { cn } from "@/lib/utils";

/* --------------------------------- data --------------------------------- */

const gatewayChips = ["monitors", "audits", "protects"] as const;

const aiClients = [
  { letter: "C", gradient: "from-purple-500 to-blue-500" },
  { letter: "B", gradient: "from-[var(--cyan)] to-emerald-500" },
  { letter: "A", gradient: "from-rose-400 to-orange-400" },
  { letter: "M", gradient: "from-violet-500 to-fuchsia-500" },
  { letter: "G", gradient: "from-sky-500 to-indigo-500" },
];

const metrics = [
  { label: "Requests", value: "10,485" },
  { label: "Approved", value: "9,812" },
  { label: "Policies", value: "128" },
];

const gatewayEvents = [
  { icon: Shield, label: "Policy check", meta: "Enforced", tone: "ok" as const },
  { icon: CheckCircle2, label: "Tool call: SQL query", meta: "Allowed", tone: "info" as const },
  { icon: ScrollText, label: "Audit log written", meta: "Recorded", tone: "ok" as const },
  { icon: Bot, label: "Approval requested", meta: "Routed", tone: "warn" as const },
];

const approverInitials = ["KO", "NB", "LM"] as const;

const dataIntegrations = [
  Database,
  FileSpreadsheet,
  FileText,
  Folder,
  Workflow,
  Cloud,
  Mail,
  Database,
];

/* ------------------------------- helpers ------------------------------- */

function SectionHeader() {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">Security &amp; Trust</p>
      <h2
        id="security-layers-heading"
        className="mt-3 text-balance font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
      >
        A governed security layer between AI and enterprise data.
      </h2>
      <p className="mt-4 text-balance text-muted-foreground">
        BLDR places a monitored security gateway between AI agents, user interactions, tools, and internal
        company knowledge. Every request can be checked, audited, and controlled before it reaches sensitive
        systems.
      </p>
      <a
        href="#security"
        className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-[var(--cyan)] transition-colors hover:text-[var(--cyan)]/80"
      >
        Explore Security &amp; Trust
        <ArrowRight className="h-3.5 w-3.5" />
      </a>
    </div>
  );
}

function LogoChip({ letter, gradient }: { letter: string; gradient: string }) {
  return (
    <span
      className={cn(
        "grid h-7 w-7 place-items-center rounded-md bg-gradient-to-br text-[10px] font-semibold text-white shadow-sm ring-1 ring-black/5",
        gradient,
      )}
      aria-hidden
    >
      {letter}
    </span>
  );
}

function MetricTile({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-md border border-border/60 bg-surface/95 px-2.5 py-1.5 shadow-sm">
      <div className="text-[8px] font-medium uppercase tracking-widest text-muted-foreground">{label}</div>
      <div className="mt-0.5 font-display text-[13px] font-semibold leading-none text-foreground">{value}</div>
    </div>
  );
}

function EventRow({
  icon: Icon,
  label,
  meta,
  tone,
}: {
  icon: typeof Shield;
  label: string;
  meta: string;
  tone: "ok" | "info" | "warn";
}) {
  const dot = {
    ok: "bg-emerald-500",
    info: "bg-[var(--cyan)]",
    warn: "bg-amber-500",
  }[tone];
  return (
    <div className="flex items-center gap-2 rounded-md border border-border/60 bg-surface/95 px-2.5 py-1.5 shadow-sm">
      <span className={cn("h-1.5 w-1.5 shrink-0 rounded-full", dot)} aria-hidden />
      <Icon className="h-3 w-3 shrink-0 text-foreground/70" aria-hidden />
      <span className="truncate text-[10px] font-medium text-foreground">{label}</span>
      <span className="ml-auto whitespace-nowrap text-[9px] uppercase tracking-wide text-muted-foreground">
        {meta}
      </span>
    </div>
  );
}

function MiniBars() {
  const heights = [20, 35, 28, 50, 38, 60, 45, 70, 55, 40];
  return (
    <div className="flex h-10 items-end gap-0.5" aria-hidden>
      {heights.map((h, i) => (
        <span
          key={i}
          className="w-1 rounded-sm bg-gradient-to-t from-[var(--cyan)] to-[var(--cyan)]/40"
          style={{ height: `${h}%` }}
        />
      ))}
    </div>
  );
}

function ApproverList() {
  return (
    <div className="flex flex-col gap-1.5">
      {approverInitials.map((initials, i) => (
        <div
          key={initials}
          className="flex items-center gap-1.5 rounded-md border border-border/60 bg-surface/95 px-1.5 py-1 shadow-sm"
        >
          <span
            className={cn(
              "grid h-4 w-4 place-items-center rounded-full text-[7px] font-semibold text-white",
              i === 0 && "bg-gradient-to-br from-amber-400 to-rose-500",
              i === 1 && "bg-gradient-to-br from-sky-400 to-indigo-500",
              i === 2 && "bg-gradient-to-br from-emerald-400 to-teal-500",
            )}
            aria-hidden
          >
            {initials}
          </span>
          <span className="text-[8px] font-medium text-foreground/80">Approver</span>
        </div>
      ))}
    </div>
  );
}

/* ------------------------------- layers -------------------------------- */

function LayerShell({
  children,
  className,
  style,
}: {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <div
      className={cn(
        "absolute left-1/2 rounded-2xl border border-border/70 bg-white shadow-[0_20px_60px_-24px_rgba(15,30,60,0.35)] transition-transform duration-500 ease-out [transform-style:preserve-3d] dark:bg-surface",
        className,
      )}
      style={style}
    >
      {children}
    </div>
  );
}

function AiSurfaceLayer() {
  return (
    <LayerShell
      className={cn(
        "top-[2%] z-[3] w-[78%] p-4",
        "[transform:translate3d(-50%,0,72px)]",
        "group-hover/stack:[transform:translate3d(-50%,-6px,140px)]",
      )}
    >
      <div className="flex items-center justify-end gap-1.5">
        {aiClients.map((c, i) => (
          <LogoChip key={i} letter={c.letter} gradient={c.gradient} />
        ))}
      </div>
      <div className="mt-3 space-y-1.5">
        <div className="h-1.5 w-[35%] rounded-full bg-foreground/10" aria-hidden />
        <div className="h-1.5 w-[78%] rounded-full bg-foreground/10" aria-hidden />
        <div className="h-1.5 w-[60%] rounded-full bg-foreground/10" aria-hidden />
        <div className="h-1.5 w-[42%] rounded-full bg-foreground/10" aria-hidden />
      </div>
      <div className="mt-3 flex items-center gap-1.5 rounded-md border border-border/60 bg-surface-muted/40 px-2 py-1.5">
        <MessageSquare className="h-3 w-3 text-muted-foreground" aria-hidden />
        <span className="text-[10px] text-muted-foreground">Ask BLDR…</span>
        <Sparkles className="ml-auto h-3 w-3 text-[var(--cyan)]" aria-hidden />
      </div>
    </LayerShell>
  );
}

function GatewayLayer() {
  return (
    <LayerShell
      className={cn(
        "top-[28%] z-[2] w-[88%] border-[var(--cyan)]/30 p-3.5",
        "[transform:translate3d(-50%,0,36px)]",
        "group-hover/stack:[transform:translate3d(-50%,4px,92px)_scale(1.01)]",
        "dark:border-[var(--cyan)]/25",
      )}
    >
      <div className="flex items-start gap-3">
        <div className="grid grid-cols-1 gap-1.5">
          {metrics.map((m) => (
            <MetricTile key={m.label} {...m} />
          ))}
        </div>
        <div className="hidden flex-1 items-end justify-center pt-3 sm:flex">
          <MiniBars />
        </div>
        <ApproverList />
      </div>
      <div className="mt-3 space-y-1.5">
        {gatewayEvents.map((e) => (
          <EventRow key={e.label} {...e} />
        ))}
      </div>
    </LayerShell>
  );
}

function DataLayer() {
  return (
    <LayerShell
      className={cn(
        "top-[60%] z-[1] w-[84%] overflow-hidden p-4",
        "[transform:translate3d(-50%,0,0px)]",
        "group-hover/stack:[transform:translate3d(-50%,12px,-30px)_scale(0.99)]",
      )}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-50 [background-image:radial-gradient(circle_at_center,rgba(15,30,60,0.08)_1px,transparent_1px)] [background-size:10px_10px] dark:opacity-25"
        aria-hidden
      />
      <div className="relative grid grid-cols-4 gap-2.5 sm:grid-cols-8">
        {dataIntegrations.map((Icon, i) => (
          <span
            key={i}
            className="grid aspect-square place-items-center rounded-md border border-border/50 bg-surface/80 text-foreground/35"
            aria-hidden
          >
            <Icon className="h-4 w-4" />
          </span>
        ))}
      </div>
    </LayerShell>
  );
}

/* ----------------------- side labels w/ connectors ---------------------- */

function LabelLeft() {
  return (
    <div className="pointer-events-none absolute left-4 top-[44%] z-30 hidden max-w-[10rem] -translate-y-1/2 transition-transform duration-500 ease-out group-hover/stack:-translate-x-1 lg:left-7 lg:block">
      <p className="font-display text-sm font-semibold text-foreground">BLDR Security Gateway</p>
      <ul className="mt-1.5 space-y-0.5 text-xs text-muted-foreground">
        {gatewayChips.map((chip) => (
          <li key={chip}>{chip}</li>
        ))}
      </ul>
      <svg
        className="absolute -right-12 top-3 h-8 w-12 text-muted-foreground/50"
        viewBox="0 0 48 32"
        fill="none"
        aria-hidden
      >
        <circle cx="2" cy="6" r="1.6" fill="currentColor" />
        <path d="M2 6 Q 30 6 46 26" stroke="currentColor" strokeWidth="1" strokeDasharray="2 3" />
      </svg>
    </div>
  );
}

function LabelRightTop() {
  return (
    <div className="pointer-events-none absolute right-4 top-[10%] z-30 hidden max-w-[10rem] transition-transform duration-500 ease-out group-hover/stack:translate-x-1 lg:right-7 lg:block">
      <p className="text-right font-display text-sm font-semibold text-foreground">your AI chats &amp; clients</p>
      <p className="mt-1 text-right text-[10px] text-muted-foreground/80">agents · copilots · tools</p>
      <svg
        className="absolute -left-12 top-4 h-8 w-12 text-muted-foreground/50"
        viewBox="0 0 48 32"
        fill="none"
        aria-hidden
      >
        <circle cx="46" cy="6" r="1.6" fill="currentColor" />
        <path d="M46 6 Q 18 6 2 24" stroke="currentColor" strokeWidth="1" strokeDasharray="2 3" />
      </svg>
    </div>
  );
}

function LabelRightBottom() {
  return (
    <div className="pointer-events-none absolute bottom-[12%] right-4 z-30 hidden max-w-[10rem] transition-transform duration-500 ease-out group-hover/stack:translate-x-1 lg:right-7 lg:block">
      <p className="text-right font-display text-sm font-semibold text-foreground">your internal data</p>
      <p className="mt-1 text-right text-[10px] text-muted-foreground/80">documents · CRM · ERP</p>
      <svg
        className="absolute -left-12 bottom-4 h-8 w-12 text-muted-foreground/50"
        viewBox="0 0 48 32"
        fill="none"
        aria-hidden
      >
        <circle cx="46" cy="26" r="1.6" fill="currentColor" />
        <path d="M46 26 Q 18 26 2 6" stroke="currentColor" strokeWidth="1" strokeDasharray="2 3" />
      </svg>
    </div>
  );
}

/* ----------------------------- mobile stack ---------------------------- */

function MobileFallback() {
  return (
    <div className="relative mx-auto mt-10 max-w-md space-y-3 md:hidden">
      <div className="rounded-2xl border border-border bg-surface p-4 shadow-sm">
        <h3 className="font-display text-sm font-semibold text-foreground">AI agents, chats &amp; clients</h3>
        <p className="mt-1 text-xs text-muted-foreground">Requests arrive from chats, copilots, and agents.</p>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {aiClients.map((c, i) => (
            <LogoChip key={i} letter={c.letter} gradient={c.gradient} />
          ))}
        </div>
      </div>

      <div className="rounded-2xl border border-[var(--cyan)]/35 bg-[var(--cyan)]/8 p-4 shadow-elegant dark:bg-[var(--cyan)]/10">
        <div className="flex items-center gap-2">
          <span className="grid h-7 w-7 place-items-center rounded-md border border-[var(--cyan)]/40 bg-[var(--cyan)]/15 text-[var(--cyan)]">
            <Shield className="h-3.5 w-3.5" />
          </span>
          <div>
            <h3 className="font-display text-sm font-semibold text-foreground">BLDR Security Gateway</h3>
            <p className="text-[11px] text-muted-foreground">monitors · audits · protects</p>
          </div>
        </div>
        <div className="mt-3 space-y-1.5">
          {gatewayEvents.slice(0, 3).map((e) => (
            <EventRow key={e.label} {...e} />
          ))}
        </div>
      </div>

      <div className="rounded-2xl border border-border bg-surface p-4 shadow-sm">
        <h3 className="font-display text-sm font-semibold text-foreground">Enterprise internal data</h3>
        <p className="mt-1 text-xs text-muted-foreground">Sensitive systems stay behind controlled access.</p>
        <div className="mt-3 grid grid-cols-4 gap-2">
          {dataIntegrations.slice(0, 8).map((Icon, i) => (
            <span
              key={i}
              className="grid aspect-square place-items-center rounded-md border border-border/60 bg-surface-muted/40 text-foreground/40"
              aria-hidden
            >
              <Icon className="h-4 w-4" />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ------------------------------- section ------------------------------- */

export function BldrSecurityLayers() {
  return (
    <section
      id="security"
      className="section-bg-elevated relative isolate overflow-hidden px-6 py-24 sm:py-32"
      aria-labelledby="security-layers-heading"
    >
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-20 dark:opacity-10" aria-hidden />

      <div className="relative mx-auto max-w-6xl">
        <SectionHeader />

        {/* Desktop / tablet — 3D stack */}
        <div className="group/stack relative mx-auto mt-14 hidden md:block">
          <div
            className={cn(
              "relative overflow-hidden rounded-[2rem] border border-border/70 p-6 shadow-elegant sm:p-10 lg:p-14",
              "bg-white dark:bg-surface",
              "[background-image:radial-gradient(at_18%_22%,rgba(165,225,240,0.55),transparent_55%),radial-gradient(at_82%_18%,rgba(232,205,240,0.55),transparent_55%),radial-gradient(at_85%_82%,rgba(192,215,245,0.55),transparent_55%),radial-gradient(at_15%_85%,rgba(248,222,196,0.5),transparent_55%)]",
              "dark:[background-image:radial-gradient(at_20%_20%,rgba(70,170,210,0.18),transparent_55%),radial-gradient(at_85%_80%,rgba(110,80,180,0.16),transparent_55%)]",
            )}
          >
            <LabelLeft />
            <LabelRightTop />
            <LabelRightBottom />

            {/* 3D stage */}
            <div className="relative mx-auto aspect-[16/10] w-full max-w-3xl [perspective:1400px]">
              <div
                className="relative h-full w-full transition-transform duration-500 ease-out [transform-style:preserve-3d] group-hover/stack:[transform:rotateX(48deg)_rotateY(-14deg)_rotateZ(1deg)]"
                style={{ transform: "rotateX(52deg) rotateY(-12deg) rotateZ(0deg)" }}
              >
                <DataLayer />
                <GatewayLayer />
                <AiSurfaceLayer />
              </div>
            </div>

            <p className="relative mt-4 text-center text-[11px] uppercase tracking-widest text-muted-foreground">
              Hover to explore the layers
            </p>
          </div>
        </div>

        <MobileFallback />
      </div>
    </section>
  );
}
