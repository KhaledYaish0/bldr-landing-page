import { ChevronDown } from "lucide-react";
import type { NavItem } from "./nav-config";
import { navItems } from "./nav-config";

const linkClass =
  "relative text-sm text-muted-foreground transition-colors hover:text-foreground after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-primary after:transition-all hover:after:w-full";

const panelClass =
  "invisible absolute left-1/2 top-full z-50 w-52 -translate-x-1/2 pt-2 opacity-0 translate-y-1 transition-all duration-200 ease-out group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 group-focus-within:visible group-focus-within:opacity-100 group-focus-within:translate-y-0";

function NavDropdown({ item }: { item: NavItem }) {
  return (
    <div className="group relative">
      <div className="flex items-center gap-0.5">
        <a href={item.href} className={linkClass}>
          {item.label}
        </a>
        <ChevronDown
          className="h-3 w-3 text-muted-foreground transition-transform duration-200 group-hover:rotate-180 group-focus-within:rotate-180"
          aria-hidden
        />
      </div>
      <div className={panelClass} role="menu" aria-label={`${item.label} menu`}>
        <div className="overflow-hidden rounded-lg border border-border/70 bg-background/95 shadow-elegant backdrop-blur-xl">
          <ul className="p-1.5">
            {item.children!.map((child) => (
              <li key={child.label} role="none">
                <a
                  href={child.href}
                  role="menuitem"
                  className="block rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary/80 hover:text-foreground focus-visible:bg-secondary/80 focus-visible:text-foreground focus-visible:outline-none"
                >
                  {child.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export function HeaderNavDesktop() {
  return (
    <nav className="hidden items-center gap-6 lg:flex" aria-label="Main">
      {navItems.map((item) =>
        item.children && item.children.length > 1 ? (
          <NavDropdown key={item.label} item={item} />
        ) : (
          <a key={item.label} href={item.href} className={linkClass}>
            {item.label}
          </a>
        ),
      )}
    </nav>
  );
}
