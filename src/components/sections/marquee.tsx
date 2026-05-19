const items = [
  "SAP", "Oracle", "Salesforce", "HubSpot", "Slack",
  "Microsoft Teams", "Google Workspace", "Meta", "WhatsApp",
  "Internal APIs", "Sovereign cloud", "On-premise",
];

export function PartnerMarquee() {
  const row = [...items, ...items];
  return (
    <section className="border-y border-border bg-surface-muted/60 py-12">
      <p className="mb-6 text-center text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
        Designed to fit the enterprise stack you already use
      </p>
      <div className="group relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <div className="flex w-max gap-3 animate-[marquee_45s_linear_infinite] group-hover:[animation-play-state:paused]">
          {row.map((item, i) => (
            <span
              key={i}
              className="rounded-full border border-border bg-background/70 px-5 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
