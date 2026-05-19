const rowOneItems = [
  "SAP",
  "Oracle",
  "Salesforce",
  "HubSpot",
  "Slack",
  "Microsoft Teams",
  "Google Workspace",
  "Meta",
  "WhatsApp",
  "Internal APIs",
  "Sovereign cloud",
  "On-premise",
];

const rowTwoItems = [
  "ServiceNow",
  "Zendesk",
  "Notion",
  "Jira",
  "Confluence",
  "Microsoft 365",
  "Google Drive",
  "SharePoint",
  "AWS",
  "Azure",
  "Private cloud",
  "Custom CRMs",
];

function MarqueeRow({
  items,
  animation,
  ariaLabel,
}: {
  items: string[];
  animation: string;
  ariaLabel: string;
}) {
  const track = [...items, ...items];
  return (
    <div
      role="list"
      aria-label={ariaLabel}
      className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]"
    >
      <div className={`flex w-max gap-3 ${animation} group-hover:[animation-play-state:paused]`}>
        {track.map((item, i) => (
          <span
            key={i}
            role={i < items.length ? "listitem" : undefined}
            aria-hidden={i >= items.length || undefined}
            className="whitespace-nowrap rounded-full border border-border bg-surface px-5 py-2 text-sm font-medium text-muted-foreground shadow-sm transition-colors hover:text-foreground"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export function PartnerMarquee() {
  return (
    <section
      aria-labelledby="enterprise-stack-label"
      className="section-bg-soft section-border-y border-y py-12"
    >
      <p
        id="enterprise-stack-label"
        className="mb-8 text-center text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground"
      >
        Designed to fit the enterprise stack you already use
      </p>
      <div className="group space-y-4">
        <MarqueeRow
          items={rowOneItems}
          animation="animate-[marquee-reverse_45s_linear_infinite]"
          ariaLabel="Enterprise systems and collaboration tools"
        />
        <MarqueeRow
          items={rowTwoItems}
          animation="animate-[marquee_50s_linear_infinite]"
          ariaLabel="Knowledge, ITSM, and cloud platforms"
        />
      </div>
    </section>
  );
}
