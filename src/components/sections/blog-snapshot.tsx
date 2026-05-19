import { ArrowUpRight } from "lucide-react";

const legalLinks = [
  { label: "Privacy", href: "#privacy" },
  { label: "Terms", href: "#terms" },
  { label: "Security", href: "#security" },
  { label: "DPA", href: "#dpa" },
  { label: "Cookie settings", href: "#cookies" },
];

const articles = [
  {
    cat: "Foundations",
    title: "What Is an Enterprise AI Operating System?",
    blurb: "A plain-language definition of the operating layer modern enterprises now need.",
  },
  {
    cat: "Strategy",
    title: "Why Most AI Pilots Never Reach Production",
    blurb: "The five organizational gaps that quietly kill enterprise AI before launch.",
  },
  {
    cat: "Procurement",
    title: "Build vs Buy: Choosing the Right Enterprise AI Platform",
    blurb: "A practical framework for CIOs and architects weighing build, buy, and hybrid paths.",
  },
  {
    cat: "Security",
    title: "How to Prevent Sensitive Data Leakage in LLM Workflows",
    blurb: "Concrete controls for shadow AI, prompt injection, and data exfiltration risks.",
  },
  {
    cat: "Operations",
    title: "No-Code AI Agents for Shared Services Teams",
    blurb: "How shared services groups deploy agents without long custom development cycles.",
  },
];

export function BlogSnapshot() {
  return (
    <section aria-labelledby="latest-articles" className="section-bg-muted section-border-y border-t px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">From the BLDR blog</p>
            <h2 id="latest-articles" className="mt-2 font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
              Latest thinking on enterprise AI.
            </h2>
          </div>
          <a href="#" className="text-sm font-medium text-[var(--cyan)] hover:underline">
            Browse all BLDR articles →
          </a>
        </div>

        <ul className="mt-10 grid gap-x-10 gap-y-2 md:grid-cols-2">
          {articles.map((a) => (
            <li key={a.title}>
              <a
                href="#"
                className="group flex items-start gap-4 border-b border-border py-5 transition-colors hover:bg-surface"
              >
                <span className="mt-1.5 shrink-0 rounded-full border border-border bg-surface px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-widest text-muted-foreground shadow-sm">
                  {a.cat}
                </span>
                <div className="flex-1">
                  <h3 className="font-display text-base font-semibold text-foreground transition-colors group-hover:text-[var(--cyan)]">
                    {a.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">{a.blurb}</p>
                </div>
                <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[var(--cyan)]" />
              </a>
            </li>
          ))}
        </ul>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <div>© {new Date().getFullYear()} Inova AI Solutions. All rights reserved.</div>
          <nav aria-label="Legal" className="flex flex-wrap gap-x-5 gap-y-2">
            {legalLinks.map((l) => (
              <a key={l.label} href={l.href} className="transition-colors hover:text-foreground">
                {l.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </section>
  );
}
