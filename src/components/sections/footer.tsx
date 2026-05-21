import { BldrLogo } from "@/components/site/bldr-logo";

type FooterLink = { label: string; href: string };

type FooterColumn = { heading: string; links: FooterLink[] };

/** Matches visible homepage sections and real routes only (Phase 8). */
const footerColumns: FooterColumn[] = [
  {
    heading: "Platform",
    links: [
      { label: "What BLDR does", href: "/#platform" },
      { label: "Platform capabilities", href: "/#capabilities" },
      { label: "Security & Trust", href: "/#security" },
      { label: "Book a demo", href: "/book-demo" },
    ],
  },
  {
    heading: "Solutions",
    links: [
      { label: "Enterprise AI solutions", href: "/#solutions" },
      { label: "Employee onboarding automation", href: "/#solutions" },
      { label: "Policy and document assistants", href: "/#solutions" },
      { label: "AI-powered service operations", href: "/#solutions" },
    ],
  },
  {
    heading: "Industries",
    links: [
      { label: "Government", href: "/#industries" },
      { label: "Finance", href: "/#industries" },
      { label: "Healthcare", href: "/#industries" },
      { label: "Education", href: "/#industries" },
      { label: "Telecom / Shared Services", href: "/#industries" },
    ],
  },
  {
    heading: "Trust & company",
    links: [
      { label: "Resources", href: "/#resources" },
      { label: "How BLDR works", href: "/#how-it-works" },
      { label: "Enterprise integrations", href: "/#partners" },
      { label: "Bring BLDR into production", href: "/#cta" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer id="footer" className="section-bg-soft section-border-y border-t">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2">
              <BldrLogo />
              <span className="font-display text-base font-semibold tracking-tight text-foreground">
                BLDR
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">
              The no-code enterprise AI operating system by Inova AI Solutions — built for
              organizations that need governed AI in production, not pilots.
            </p>
          </div>

          <nav
            className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-2 lg:col-span-8 lg:grid-cols-4"
            aria-label="Footer"
          >
            {footerColumns.map((col) => (
              <div key={col.heading}>
                <div className="text-xs font-semibold uppercase tracking-widest text-foreground">
                  {col.heading}
                </div>
                <ul className="mt-3 space-y-2">
                  {col.links.map((link) => (
                    <li key={`${col.heading}-${link.label}`}>
                      <a
                        href={link.href}
                        className="text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className="mt-14 border-t border-border/70 pt-8 md:mt-16 md:pt-10">
          <div className="flex flex-col items-center justify-center gap-5 text-center md:flex-row md:justify-between md:gap-6 md:text-left">
            <p className="text-xs text-muted-foreground sm:text-sm">
              © 2026 BLDR by Inova AI Solutions. All rights reserved.
            </p>
            <div className="flex flex-row flex-wrap items-center justify-center gap-x-6 gap-y-2 md:justify-end">
              <a
                href="/terms"
                className="text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                Terms and Conditions
              </a>
              <a
                href="/privacy"
                className="text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
