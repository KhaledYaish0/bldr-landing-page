import { useEffect, useState } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useTheme } from "./theme-provider";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Platform", href: "#platform" },
  { label: "Solutions", href: "#solutions" },
  { label: "Industries", href: "#industries" },
  { label: "Security & Trust", href: "#security" },
  { label: "AI Labs", href: "#ai-labs" },
  { label: "Resources", href: "#resources" },
  { label: "Company", href: "#footer" },
];

export function Header() {
  const { theme, toggle } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border/70 bg-background/80 backdrop-blur-xl"
          : "border-b border-transparent bg-background/0",
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <a href="#" className="flex items-center gap-2">
          <span className="grid h-8 w-8 place-items-center rounded-md bg-[var(--navy)] text-background dark:bg-primary dark:text-primary-foreground">
            <span className="font-display text-sm font-bold tracking-tight">B</span>
          </span>
          <span className="font-display text-base font-semibold tracking-tight text-foreground">
            BLDR <span className="text-muted-foreground font-normal">by Inova AI</span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {navLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="relative text-sm text-muted-foreground transition-colors hover:text-foreground after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-primary after:transition-all hover:after:w-full"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={toggle}
            aria-label="Toggle theme"
            className="grid h-9 w-9 place-items-center rounded-md border border-border bg-background/60 text-muted-foreground transition-colors hover:text-foreground"
          >
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <a
            href="#cta"
            className="hidden rounded-md bg-[var(--navy)] px-4 py-2 text-sm font-medium text-background shadow-elegant transition-all hover:opacity-90 dark:bg-primary dark:text-primary-foreground sm:inline-flex"
          >
            Book a Demo
          </a>
          <button
            className="grid h-9 w-9 place-items-center rounded-md border border-border lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-background/95 px-6 py-4 lg:hidden">
          <nav className="flex flex-col gap-3">
            {navLinks.map((l) => (
              <a key={l.label} href={l.href} className="text-sm text-foreground/80" onClick={() => setOpen(false)}>
                {l.label}
              </a>
            ))}
            <a href="#cta" className="mt-2 rounded-md bg-[var(--navy)] px-4 py-2 text-center text-sm font-medium text-background dark:bg-primary dark:text-primary-foreground">
              Book a Demo
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
