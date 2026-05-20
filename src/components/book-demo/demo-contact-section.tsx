import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import { Building2, Clock, Globe2, Mail, MapPin, Phone } from "lucide-react";

const accentLink =
  "font-medium text-[var(--cyan)] underline-offset-4 transition-colors hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--cyan)]/40 focus-visible:rounded-sm";

function ContactRow({
  icon: Icon,
  label,
  children,
}: {
  icon: LucideIcon;
  label: string;
  children: ReactNode;
}) {
  return (
    <div className="flex gap-3">
      <Icon className="mt-0.5 h-4 w-4 shrink-0 text-[var(--cyan)]/90" aria-hidden />
      <div className="min-w-0">
        <p className="text-[11px] font-medium uppercase tracking-wide text-muted-foreground">
          {label}
        </p>
        <div className="mt-0.5 text-sm text-foreground">{children}</div>
      </div>
    </div>
  );
}

export function DemoContactSection() {
  return (
    <section className="border-t border-border/70 pt-16" aria-labelledby="direct-contact-heading">
      <div className="mx-auto max-w-3xl text-center">
        <h2
          id="direct-contact-heading"
          className="font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
        >
          Or contact us directly
        </h2>
        <p className="mt-3 text-sm text-muted-foreground sm:text-base">
          Reach out to our regional offices for immediate assistance.
        </p>
      </div>

      <div className="mx-auto mt-10 grid max-w-5xl gap-6 md:grid-cols-2">
        <article className="rounded-2xl border border-border bg-surface p-6 shadow-sm dark:bg-surface/95">
          <div className="flex items-start gap-3 border-b border-border/70 pb-4">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg border border-[var(--cyan)]/25 bg-[var(--cyan)]/10 text-[var(--cyan)]">
              <Globe2 className="h-5 w-5" aria-hidden />
            </span>
            <div>
              <h3 className="font-display text-lg font-semibold text-foreground">
                Sydney, Australia
              </h3>
              <p className="mt-1 text-xs text-muted-foreground">Regional office</p>
            </div>
          </div>
          <div className="mt-5 space-y-4">
            <ContactRow icon={Globe2} label="Timezone">
              AEDT (UTC+11)
            </ContactRow>
            <ContactRow icon={MapPin} label="Address">
              <address className="not-italic leading-relaxed">
                123 Tech Street
                <br />
                Sydney, NSW 2000
              </address>
            </ContactRow>
            <ContactRow icon={Mail} label="Email">
              <a href="mailto:sydney@inovasolution.ai" className={accentLink}>
                sydney@inovasolution.ai
              </a>
            </ContactRow>
            <ContactRow icon={Phone} label="Phone">
              <a href="tel:+61493310331" className={accentLink}>
                +61 49 331 0 331
              </a>
            </ContactRow>
            <ContactRow icon={Clock} label="Business hours">
              <span className="leading-relaxed">
                Monday – Friday: 9:00 AM – 6:00 PM
                <br />
                Weekend: Emergency support available
              </span>
            </ContactRow>
          </div>
        </article>

        <article className="rounded-2xl border border-border bg-surface p-6 shadow-sm dark:bg-surface/95">
          <div className="flex items-start gap-3 border-b border-border/70 pb-4">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg border border-[var(--cyan)]/25 bg-[var(--cyan)]/10 text-[var(--cyan)]">
              <Building2 className="h-5 w-5" aria-hidden />
            </span>
            <div>
              <h3 className="font-display text-lg font-semibold text-foreground">Dubai, UAE</h3>
              <p className="mt-1 text-xs text-muted-foreground">Regional office</p>
            </div>
          </div>
          <div className="mt-5 space-y-4">
            <ContactRow icon={Globe2} label="Timezone">
              GST (UTC+4)
            </ContactRow>
            <ContactRow icon={MapPin} label="Address">
              <address className="not-italic leading-relaxed">
                456 Innovation Ave
                <br />
                Dubai Internet City
              </address>
            </ContactRow>
            <ContactRow icon={Mail} label="Email">
              <a href="mailto:dubai@inovasolution.ai" className={accentLink}>
                dubai@inovasolution.ai
              </a>
            </ContactRow>
            <ContactRow icon={Phone} label="Phone">
              <a href="tel:+971542202977" className={accentLink}>
                +971 54 220 29 77
              </a>
            </ContactRow>
            <ContactRow icon={Clock} label="Business hours">
              <span className="leading-relaxed">
                Monday – Friday: 9:00 AM – 6:00 PM
                <br />
                Weekend: Emergency support available
              </span>
            </ContactRow>
          </div>
        </article>
      </div>

      <article className="mx-auto mt-8 max-w-2xl rounded-2xl border border-border bg-surface-muted/60 p-6 shadow-sm dark:bg-surface-muted/25">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:gap-4">
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-[var(--cyan)]/30 bg-[var(--cyan)]/10 text-[var(--cyan)]">
            <Clock className="h-5 w-5" aria-hidden />
          </span>
          <div className="min-w-0">
            <h3 className="font-display text-base font-semibold text-foreground">
              24/7 Support Available
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              For urgent technical support or critical issues, our global support team is available
              around the clock.
            </p>
            <p className="mt-3 text-sm">
              <span className="text-muted-foreground">Email: </span>
              <a href="mailto:support@inovasolution.ai" className={accentLink}>
                support@inovasolution.ai
              </a>
            </p>
          </div>
        </div>
      </article>
    </section>
  );
}
