export type NavLink = { label: string; href: string };

export type NavItem = NavLink & {
  children?: NavLink[];
};

/** Landing-page anchor navigation — labels are nav-only, not section copy. */
export const navItems: NavItem[] = [
  {
    label: "Platform",
    href: "#platform",
    children: [
      { label: "What BLDR Does", href: "#platform" },
      { label: "Book a Demo", href: "#cta" },
    ],
  },
  { label: "Solutions", href: "#solutions" },
  { label: "Industries", href: "#industries" },
  { label: "Security & Trust", href: "#security" },
  { label: "AI Labs", href: "#ai-labs" },
  { label: "Resources", href: "#resources" },
  {
    label: "Company",
    href: "#footer",
    children: [
      { label: "About & contact", href: "#footer" },
      { label: "Book a Demo", href: "#cta" },
    ],
  },
];
