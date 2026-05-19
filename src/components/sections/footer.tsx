const cols = [
  { h: "Product", links: ["Agent Builder", "Knowledge Layer", "Integrations", "Multi-LLM Routing", "Analytics"] },
  { h: "Platform", links: ["BLDR OS", "MCP Tools", "Human-in-the-loop", "Sovereign Deployment", "Audit Logs"] },
  { h: "Solutions", links: ["Employee Onboarding", "Policy Assistants", "IT Copilots", "Regulated Workflows", "Service Operations"] },
  { h: "Industries", links: ["Government", "Finance", "Healthcare", "Education", "Telecom"] },
  { h: "Company", links: ["About Inova AI", "Partners", "Careers", "Press", "Contact"] },
  { h: "Trust", links: ["Security & Trust", "Governance", "Privacy", "DPA", "Status"] },
];

export function SiteFooter() {
  return (
    <footer id="footer" className="border-t border-border bg-surface-muted/60">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2">
              <span className="grid h-8 w-8 place-items-center rounded-md bg-[var(--navy)] text-background dark:bg-primary dark:text-primary-foreground">
                <span className="font-display text-sm font-bold">B</span>
              </span>
              <span className="font-display text-base font-semibold tracking-tight text-foreground">BLDR</span>
            </div>
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">
              The no-code enterprise AI operating system by Inova AI Solutions — built for organizations
              that need governed AI in production, not pilots.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {["ISO 27001", "SOC 2 Ready", "GDPR", "Sovereign-ready"].map((c) => (
                <span key={c} className="rounded-full border border-border bg-background/60 px-2.5 py-1 text-[11px] font-medium text-muted-foreground">{c}</span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-8">
            {cols.map((c) => (
              <div key={c.h}>
                <div className="text-xs font-semibold uppercase tracking-widest text-foreground">{c.h}</div>
                <ul className="mt-3 space-y-2">
                  {c.links.map((l) => (
                    <li key={l}>
                      <a href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">{l}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-6 text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} Inova AI Solutions. All rights reserved.</div>
          <div className="flex flex-wrap gap-5">
            <a href="#" className="hover:text-foreground">Privacy</a>
            <a href="#" className="hover:text-foreground">Terms</a>
            <a href="#" className="hover:text-foreground">Security</a>
            <a href="#" className="hover:text-foreground">DPA</a>
            <a href="#" className="hover:text-foreground">Cookie settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
