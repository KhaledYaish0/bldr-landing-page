import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import type { NavItem } from "./nav-config";
import { navItems } from "./nav-config";

function MobileNavItem({ item, onNavigate }: { item: NavItem; onNavigate: () => void }) {
  const hasChildren = Boolean(item.children && item.children.length > 1);
  const [expanded, setExpanded] = useState(false);

  if (!hasChildren) {
    return (
      <a
        href={item.href}
        className="rounded-md px-1 py-2 text-sm text-foreground/80 transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        onClick={onNavigate}
      >
        {item.label}
      </a>
    );
  }

  return (
    <div>
      <button
        type="button"
        className="flex w-full items-center justify-between rounded-md px-1 py-2 text-left text-sm text-foreground/80 transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        aria-expanded={expanded}
        aria-controls={`mobile-nav-${item.label.replace(/\s+/g, "-").toLowerCase()}`}
        onClick={() => setExpanded((v) => !v)}
      >
        <span>{item.label}</span>
        <ChevronDown
          className={cn(
            "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200",
            expanded && "rotate-180",
          )}
          aria-hidden
        />
      </button>
      <div
        id={`mobile-nav-${item.label.replace(/\s+/g, "-").toLowerCase()}`}
        className={cn(
          "grid overflow-hidden transition-all duration-200 ease-out",
          expanded ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
        )}
        aria-hidden={!expanded}
      >
        <ul className="min-h-0 space-y-1 border-l border-border pl-3 pt-1">
          {item.children!.map((child) => (
            <li key={child.label}>
              <a
                href={child.href}
                className="block rounded-md py-2 text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                onClick={onNavigate}
              >
                {child.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

interface HeaderNavMobileProps {
  open: boolean;
  onClose: () => void;
}

export function HeaderNavMobile({ open, onClose }: HeaderNavMobileProps) {
  if (!open) return null;

  return (
    <div
      id="mobile-nav"
      className="border-t border-border bg-background/95 px-6 py-4 backdrop-blur-xl lg:hidden"
    >
      <nav className="flex flex-col gap-1" aria-label="Main">
        {navItems.map((item) => (
          <MobileNavItem key={item.label} item={item} onNavigate={onClose} />
        ))}
        <a
          href="/book-demo"
          className="mt-3 rounded-md bg-[var(--navy)] px-4 py-2.5 text-center text-sm font-medium text-background shadow-elegant dark:bg-primary dark:text-primary-foreground"
          onClick={onClose}
        >
          Book a Demo
        </a>
      </nav>
    </div>
  );
}
