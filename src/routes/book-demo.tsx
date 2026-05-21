import { createFileRoute } from "@tanstack/react-router";
import { Server, ShieldCheck, Workflow } from "lucide-react";
import { ThemeProvider } from "@/components/site/theme-provider";
import { Header } from "@/components/site/header";
import { SiteFooter } from "@/components/sections/footer";
import { CalendlyEmbed } from "@/components/book-demo/calendly-embed";
import { DemoContactSection } from "@/components/book-demo/demo-contact-section";

const supportCards = [
  {
    icon: Workflow,
    title: "Workflow fit",
    copy: "Map BLDR to onboarding, policy, IT support, regulated workflow, or service operations needs.",
  },
  {
    icon: ShieldCheck,
    title: "Security and governance",
    copy: "Review approvals, access rules, audit logs, and how BLDR protects sensitive enterprise data.",
  },
  {
    icon: Server,
    title: "Deployment model",
    copy: "Discuss cloud, private cloud, on-premise, and sovereign deployment requirements.",
  },
];

export const Route = createFileRoute("/book-demo")({
  head: () => ({
    meta: [
      { title: "Book a BLDR Demo | Inova AI Solutions" },
      {
        name: "description",
        content:
          "Book a tailored BLDR demo to see how enterprises can build, integrate, deploy, and govern AI agents across workflows, systems, and departments.",
      },
    ],
  }),
  component: BookDemoPage,
});

function BookDemoPage() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-foreground">
        <Header />
        <main className="section-bg-base bg-soft-gradient relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
          <div className="bg-grid absolute inset-0 opacity-[0.3] dark:opacity-20" aria-hidden />
          <div
            className="absolute inset-x-0 top-40 -z-0 mx-auto h-80 max-w-5xl rounded-full bg-[var(--cyan)]/12 blur-3xl"
            aria-hidden
          />

          <div className="relative mx-auto max-w-7xl px-6">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                Book a BLDR Demo
              </p>
              <h1 className="mt-4 text-balance font-display text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl">
                See how BLDR fits your enterprise workflows.
              </h1>
              <p className="mt-5 text-balance text-base text-muted-foreground sm:text-lg">
                Book a tailored BLDR demo to explore how your organization can build, integrate,
                deploy, and govern AI agents across workflows, systems, and departments.
              </p>
              <p className="mt-4 text-balance text-sm text-muted-foreground/90">
                Share your role, industry, systems, and AI priorities. A BLDR solutions specialist
                can tailor the walkthrough around your operational goals, governance needs, and
                deployment requirements.
              </p>
            </div>

            <section
              aria-labelledby="book-consultation-heading"
              className="relative z-10 mt-14 lg:mt-16"
            >
              <div className="mx-auto max-w-3xl">
                <div className="rounded-[2rem] border border-white/10 bg-slate-950 p-4 shadow-2xl dark:border-white/10 md:p-6">
                  <div className="mb-6 text-center px-2">
                    <h2
                      id="book-consultation-heading"
                      className="font-display text-2xl font-semibold tracking-tight text-white md:text-3xl"
                    >
                      Book Your Consultation
                    </h2>
                    <p className="mt-2 text-sm text-white/70 md:text-base">
                      Instantly schedule a 1:1 session with our AI specialists.
                    </p>
                  </div>

                  <div className="overflow-hidden rounded-2xl bg-white min-h-[min(700px,70vh)] w-full md:min-h-[700px]">
                    <CalendlyEmbed />
                  </div>
                </div>
              </div>
            </section>

            <div className="mx-auto mt-12 grid max-w-5xl gap-4 md:grid-cols-3">
              {supportCards.map(({ icon: Icon, title, copy }) => (
                <article
                  key={title}
                  className="rounded-2xl border border-border bg-surface/90 p-5 shadow-sm backdrop-blur dark:bg-surface/80"
                >
                  <div className="flex items-start gap-3">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-md border border-[var(--cyan)]/30 bg-[var(--cyan)]/10 text-[var(--cyan)]">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <h2 className="font-display text-base font-semibold text-foreground">
                        {title}
                      </h2>
                      <p className="mt-1 text-sm text-muted-foreground">{copy}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <DemoContactSection />
          </div>
        </main>
        <SiteFooter />
      </div>
    </ThemeProvider>
  );
}
