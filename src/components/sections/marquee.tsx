import type { ComponentType } from "react";
import { Cloud, Database, Server, ShieldCheck, Workflow } from "lucide-react";
import { BsMicrosoft, BsMicrosoftTeams } from "react-icons/bs";
import { FaAws } from "react-icons/fa";
import {
  SiConfluence,
  SiGoogle,
  SiGoogledrive,
  SiHubspot,
  SiJira,
  SiMeta,
  SiNotion,
  SiSalesforce,
  SiSap,
  SiSlack,
  SiWhatsapp,
  SiZendesk,
} from "react-icons/si";
import { TbBrandAzure } from "react-icons/tb";

type MarqueeItem = {
  name: string;
  icon: ComponentType<{ className?: string; "aria-hidden"?: boolean }>;
  color?: string;
  kind: "brand" | "generic";
};

function OracleMark({ className }: { className?: string }) {
  return <span className={className}>O</span>;
}

function ServiceNowMark({ className }: { className?: string }) {
  return <span className={className}>SN</span>;
}

const rowOneItems: MarqueeItem[] = [
  { name: "SAP", icon: SiSap, color: "#0FAAFF", kind: "brand" },
  { name: "Oracle", icon: OracleMark, color: "#C74634", kind: "brand" },
  { name: "Salesforce", icon: SiSalesforce, color: "#00A1E0", kind: "brand" },
  { name: "HubSpot", icon: SiHubspot, color: "#FF5C35", kind: "brand" },
  { name: "Slack", icon: SiSlack, color: "#611F69", kind: "brand" },
  { name: "Microsoft Teams", icon: BsMicrosoftTeams, color: "#6264A7", kind: "brand" },
  { name: "Google Workspace", icon: SiGoogle, color: "#4285F4", kind: "brand" },
  { name: "Meta", icon: SiMeta, color: "#0467DF", kind: "brand" },
  { name: "WhatsApp", icon: SiWhatsapp, color: "#25D366", kind: "brand" },
  { name: "Internal APIs", icon: Workflow, kind: "generic" },
  { name: "Sovereign cloud", icon: ShieldCheck, kind: "generic" },
  { name: "On-premise", icon: Server, kind: "generic" },
];

const rowTwoItems: MarqueeItem[] = [
  { name: "ServiceNow", icon: ServiceNowMark, color: "#62D84E", kind: "brand" },
  { name: "Zendesk", icon: SiZendesk, color: "#03363D", kind: "brand" },
  { name: "Notion", icon: SiNotion, color: "#000000", kind: "brand" },
  { name: "Jira", icon: SiJira, color: "#0052CC", kind: "brand" },
  { name: "Confluence", icon: SiConfluence, color: "#172B4D", kind: "brand" },
  { name: "Microsoft 365", icon: BsMicrosoft, color: "#D83B01", kind: "brand" },
  { name: "Google Drive", icon: SiGoogledrive, color: "#4285F4", kind: "brand" },
  { name: "SharePoint", icon: BsMicrosoft, color: "#038387", kind: "brand" },
  { name: "AWS", icon: FaAws, color: "#FF9900", kind: "brand" },
  { name: "Azure", icon: TbBrandAzure, color: "#0078D4", kind: "brand" },
  { name: "Private cloud", icon: Cloud, kind: "generic" },
  { name: "Custom CRMs", icon: Database, kind: "generic" },
];

function MarqueeRow({
  items,
  animation,
  ariaLabel,
}: {
  items: MarqueeItem[];
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
          <MarqueePill key={i} item={item} decorative={i >= items.length} />
        ))}
      </div>
    </div>
  );
}

function MarqueePill({ item, decorative }: { item: MarqueeItem; decorative: boolean }) {
  const Icon = item.icon;
  return (
    <span
      role={decorative ? undefined : "listitem"}
      aria-hidden={decorative || undefined}
      aria-label={decorative ? undefined : item.name}
      className="group/item inline-flex whitespace-nowrap rounded-full border border-border/80 bg-surface px-4 py-2 text-sm font-medium text-muted-foreground shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--cyan)]/30 hover:text-foreground hover:shadow-elegant"
    >
      <span className="flex items-center gap-2.5">
        <span
          className="grid h-6 w-6 place-items-center rounded-full border border-border/70 bg-surface-muted/60 text-[var(--cyan)] transition-opacity group-hover/item:opacity-100"
          style={item.kind === "brand" ? { color: item.color } : undefined}
          aria-hidden
        >
          <Icon
            className="h-3.5 w-3.5 opacity-80 transition-opacity group-hover/item:opacity-100"
            aria-hidden
          />
        </span>
        <span>{item.name}</span>
      </span>
    </span>
  );
}

export function PartnerMarquee() {
  return (
    <section
      id="partners"
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
