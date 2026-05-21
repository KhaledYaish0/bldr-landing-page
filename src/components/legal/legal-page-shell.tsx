import type { ReactNode } from "react";
import { ThemeProvider } from "@/components/site/theme-provider";
import { Header } from "@/components/site/header";
import { SiteFooter } from "@/components/sections/footer";

export const legalParagraph =
  "mt-3 text-sm leading-relaxed text-muted-foreground [&_a]:font-medium [&_a]:text-[var(--cyan)] [&_a]:underline-offset-4 [&_a]:transition-colors [&_a]:hover:underline [&_a]:focus-visible:outline-none [&_a]:focus-visible:ring-2 [&_a]:focus-visible:ring-[var(--cyan)]/40 [&_a]:focus-visible:rounded-sm";

export const legalList =
  "mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-muted-foreground";

export function LegalMetaCard({ children }: { children: ReactNode }) {
  return (
    <div className="rounded-xl border border-border bg-surface-muted/40 p-5 text-sm leading-relaxed text-muted-foreground dark:bg-surface-muted/25 [&_strong]:font-medium [&_strong]:text-foreground">
      {children}
    </div>
  );
}

export function LegalSectionTitle({
  id,
  children,
}: {
  id?: string;
  children: ReactNode;
}) {
  return (
    <h2
      id={id}
      className="scroll-mt-28 font-display text-lg font-semibold text-foreground"
    >
      {children}
    </h2>
  );
}

export function LegalPageShell({
  eyebrow,
  title,
  updatedLabel,
  children,
}: {
  eyebrow: string;
  title: string;
  updatedLabel: string;
  children: ReactNode;
}) {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-foreground">
        <Header />
        <main className="section-bg-base bg-soft-gradient relative pt-28 pb-20 sm:pt-36">
          <div className="relative mx-auto max-w-3xl px-6">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
              {eyebrow}
            </p>
            <h1 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              {title}
            </h1>
            <p className="mt-2 text-sm text-muted-foreground">{updatedLabel}</p>
            <div className="mt-10 space-y-12">{children}</div>
          </div>
        </main>
        <SiteFooter />
      </div>
    </ThemeProvider>
  );
}
