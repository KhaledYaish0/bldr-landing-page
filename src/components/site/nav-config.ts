export type NavLink = { label: string; href: string };

export type NavItem = NavLink & {
  children?: NavLink[];
};

/** Landing-page anchor navigation — order matches homepage section flow in `src/routes/index.tsx`. */
export const navItems: NavItem[] = [
  {
    label: "Platform",
    href: "/#platform",
    children: [
      { label: "Platform overview", href: "/#platform" },
      { label: "Platform capabilities", href: "/#capabilities" },
    ],
  },
  { label: "Industries", href: "/#industries" },
  { label: "Solutions", href: "/#solutions" },
  { label: "Security & Trust", href: "/#security" },
  { label: "Resources", href: "/#resources" },
  {
    label: "Company",
    href: "/#platform",
    children: [
      { label: "About BLDR", href: "/#platform" },
      { label: "Book a Demo", href: "/book-demo" },
    ],
  },
];
