import { cn } from "@/lib/utils";

/** Matches reference: globe + lat/long + horizontal band with ISO lettering */
function IsoGlobeMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 72 72"
      className={cn("h-[3.25rem] w-[3.25rem] shrink-0 sm:h-14 sm:w-14", className)}
      aria-hidden
    >
      <circle
        cx="36"
        cy="36"
        r="29"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.35"
        opacity={0.65}
      />
      <ellipse
        cx="36"
        cy="36"
        rx="14"
        ry="29"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        opacity={0.45}
      />
      <line x1="36" y1="7" x2="36" y2="65" stroke="currentColor" strokeWidth="1" opacity={0.45} />
      <ellipse
        cx="36"
        cy="36"
        rx="29"
        ry="9.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.9"
        opacity={0.4}
      />
      <ellipse
        cx="36"
        cy="36"
        rx="29"
        ry="19"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.9"
        opacity={0.38}
      />
      <line x1="7" y1="36" x2="65" y2="36" stroke="currentColor" strokeWidth="0.9" opacity={0.4} />
      <rect x="11" y="29" width="50" height="15" className="fill-[var(--section-muted)]" />
      <text
        x="36"
        y="40.5"
        textAnchor="middle"
        fill="currentColor"
        fontSize="13"
        fontWeight={700}
        fontFamily="ui-sans-serif, system-ui, sans-serif"
        style={{ letterSpacing: "0.06em" }}
      >
        ISO
      </text>
    </svg>
  );
}

function smallStarPath(scale: number) {
  // 5-point star unit, scaled
  const s = scale;
  return `M 0 ${-1.1 * s} L ${0.26 * s} ${-0.35 * s} L ${1 * s} ${-0.35 * s} L ${0.4 * s} ${0.2 * s} L ${0.62 * s} ${0.95 * s} L 0 ${0.55 * s} L ${-0.62 * s} ${0.95 * s} L ${-0.4 * s} ${0.2 * s} L ${-1 * s} ${-0.35 * s} L ${-0.26 * s} ${-0.35 * s} Z`;
}

/** Matches reference: EU-style ring of 12 stars + GDPR centered */
function GdprStarsMark({ className }: { className?: string }) {
  const cx = 36;
  const cy = 36;
  const ringR = 23;
  const stars = Array.from({ length: 12 }, (_, i) => {
    const deg = -90 + i * 30;
    const rad = (deg * Math.PI) / 180;
    return {
      tx: cx + Math.cos(rad) * ringR,
      ty: cy + Math.sin(rad) * ringR,
      rot: deg + 90,
    };
  });
  return (
    <svg
      viewBox="0 0 72 72"
      className={cn("h-[3.25rem] w-[3.25rem] shrink-0 sm:h-14 sm:w-14", className)}
      aria-hidden
    >
      <circle
        cx={cx}
        cy={cy}
        r="31"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
        opacity={0.45}
      />
      {stars.map((s, i) => (
        <path
          key={i}
          d={smallStarPath(4.2)}
          fill="currentColor"
          opacity={0.55}
          transform={`translate(${s.tx},${s.ty}) rotate(${s.rot})`}
        />
      ))}
      <text
        x={cx}
        y={cy + 4}
        textAnchor="middle"
        fill="currentColor"
        fontSize="11"
        fontWeight={700}
        fontFamily="ui-sans-serif, system-ui, sans-serif"
        style={{ letterSpacing: "0.02em" }}
      >
        GDPR
      </text>
    </svg>
  );
}

/** Matches reference: stacked bold sans lines like AICPA / SOC 2 — wording stays SOC 2 Ready (non-certified) */
function Soc2TypographicMark({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "flex min-h-[3.25rem] flex-col items-center justify-center gap-0.5 text-center sm:min-h-14",
        className,
      )}
      aria-hidden
    >
      <span className="font-sans text-[11px] font-bold uppercase leading-none tracking-[0.08em] text-current opacity-85 sm:text-xs">
        SOC 2
      </span>
      <span className="font-sans text-[11px] font-bold uppercase leading-none tracking-[0.12em] text-current opacity-85 sm:text-xs">
        READY
      </span>
    </div>
  );
}

/** Matches reference CCPA-style padlock silhouette; used here for Sovereign-ready posture */
function SovereignPadlockMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 72 72"
      className={cn("h-[3.25rem] w-[3.25rem] shrink-0 sm:h-14 sm:w-14", className)}
      aria-hidden
    >
      {/* Shackle */}
      <path
        d="M 28 30 V 24 C 28 17 33 12 36 12 C 39 12 44 17 44 24 V 30"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        opacity={0.65}
      />
      {/* Body */}
      <rect
        x="24"
        y="30"
        width="24"
        height="26"
        rx="11"
        ry="11"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        opacity={0.65}
      />
      {/* Keyhole dot */}
      <circle cx="36" cy="42" r="2.25" fill="currentColor" opacity={0.55} />
    </svg>
  );
}

const items = [
  {
    label: "ISO 27001",
    helper: "Security management alignment",
    Mark: IsoGlobeMark,
  },
  {
    label: "SOC 2 Ready",
    helper: "Controls-ready posture",
    Mark: Soc2TypographicMark,
  },
  {
    label: "GDPR",
    helper: "Privacy-aware workflows",
    Mark: GdprStarsMark,
  },
  {
    label: "Sovereign-ready",
    helper: "Local and controlled deployment",
    Mark: SovereignPadlockMark,
  },
] as const;

/**
 * Horizontal trust posture strip — custom marks styled like team reference (globe ISO, GDPR stars,
 * stacked SOC text, padlock silhouette); theme-aware section surface (Phase 10 + visual parity).
 */
export function ComplianceTrustBar() {
  return (
    <section
      id="trust-compliance"
      className="section-bg-muted section-border-y border-y border-border"
      aria-labelledby="compliance-trust-heading"
    >
      <div className="mx-auto max-w-6xl px-6 py-10 text-center sm:py-12">
        <h2
          id="compliance-trust-heading"
          className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground"
        >
          Built for governed enterprise AI
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          Security, privacy, and deployment readiness presented clearly for enterprise review.
        </p>

        <ul className="mt-10 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-4 sm:gap-x-10">
          {items.map(({ label, helper, Mark }) => (
            <li key={label}>
              <div className="group flex flex-col items-center gap-3 text-center text-muted-foreground transition-colors sm:gap-3.5">
                <div className="text-muted-foreground/65 transition-colors group-hover:text-muted-foreground [&_svg]:transition-colors [&_svg]:group-hover:text-muted-foreground">
                  <Mark />
                </div>
                <div className="space-y-1">
                  <div className="text-[11px] font-semibold uppercase tracking-[0.12em] text-foreground/90 transition-colors group-hover:text-foreground sm:text-xs sm:tracking-[0.14em]">
                    {label}
                  </div>
                  <p className="text-[11px] leading-snug text-muted-foreground transition-colors group-hover:text-muted-foreground sm:text-xs">
                    {helper}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
