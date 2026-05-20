export type NavLink = { label: string; href: string };

export type NavItem = NavLink & {
  children?: NavLink[];
};

/** Landing-page anchor navigation — labels are nav-only, not section copy. */
export const navItems: NavItem[] = [
  {
    label: "Platform",
    href: "/#platform",
    children: [
      { label: "Platform overview", href: "/#platform" },
      { label: "Platform capabilities", href: "/#capabilities" },
    ],
  },
  { label: "Solutions", href: "/#solutions" },
  { label: "Industries", href: "/#industries" },
  { label: "Security & Trust", href: "/#security" },
  { label: "Resources", href: "/#resources" },
  {
    label: "Company",
    href: "/#footer",
    children: [
      { label: "About Inova AI", href: "/#footer" },
      { label: "Contact", href: "/#footer" },
    ],
  },
];
