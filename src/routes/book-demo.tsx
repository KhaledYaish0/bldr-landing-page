import { useState, type FormEvent } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { format } from "date-fns";
import { ArrowRight, CheckCircle2, Server, ShieldCheck, Workflow } from "lucide-react";
import { ThemeProvider } from "@/components/site/theme-provider";
import { Header } from "@/components/site/header";
import { SiteFooter } from "@/components/sections/footer";
import { ChatWidget } from "@/components/site/chat-widget";
import { DemoCalendar } from "@/components/book-demo/demo-calendar";
import { getBrowserTimeZone } from "@/lib/demo-booking";
import { DemoContactSection } from "@/components/book-demo/demo-contact-section";

const industries = [
  "Government",
  "Finance",
  "Healthcare",
  "Education",
  "Telecom / Shared Services",
  "Other",
];

const deploymentOptions = [
  "Cloud",
  "Private cloud",
  "On-premise",
  "Sovereign / local deployment",
  "Not sure yet",
];

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
  const [submitted, setSubmitted] = useState(false);
  const [selectedDemoDay, setSelectedDemoDay] = useState<Date | undefined>();
  const [calendarError, setCalendarError] = useState<string | null>(null);
  const browserTz = getBrowserTimeZone();

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!selectedDemoDay) {
      setCalendarError("Please select a preferred demo day.");
      return;
    }
    setCalendarError(null);
    setSubmitted(true);
  }

  function handleSelectDay(date: Date | undefined) {
    setSelectedDemoDay(date);
    if (date) setCalendarError(null);
  }

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

            <div className="mt-14 grid gap-8 lg:grid-cols-12 lg:items-start">
              <div className="order-first flex flex-col gap-8 lg:col-span-5">
                <DemoCalendar
                  selected={selectedDemoDay}
                  onSelect={handleSelectDay}
                  error={calendarError}
                />
              </div>

              <section className="order-last rounded-3xl border border-border bg-surface p-6 shadow-elegant sm:p-8 lg:order-none lg:col-span-7">
                {submitted ? (
                  <div className="rounded-2xl border border-[var(--cyan)]/30 bg-[var(--cyan)]/8 p-6">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[var(--cyan)]" />
                      <div>
                        <h2 className="font-display text-xl font-semibold text-foreground">
                          Demo request received.
                        </h2>
                        <p className="mt-2 text-sm text-muted-foreground">
                          Thanks for reaching out. A BLDR solutions specialist will follow up with a
                          tailored walkthrough based on your enterprise workflow priorities.
                        </p>
                        {selectedDemoDay ? (
                          <p className="mt-3 rounded-lg border border-border/80 bg-background/60 px-3 py-2 text-sm text-foreground dark:bg-background/40">
                            <span className="font-medium">Preferred demo day: </span>
                            <time dateTime={selectedDemoDay.toISOString()}>
                              {format(selectedDemoDay, "EEEE, MMMM d, yyyy")}
                            </time>
                            <span className="mt-1 block text-xs text-muted-foreground">
                              Timezone reference: {browserTz}
                            </span>
                          </p>
                        ) : null}
                      </div>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="grid gap-4 sm:grid-cols-2">
                    <input
                      type="hidden"
                      name="preferredDemoDayISO"
                      value={selectedDemoDay?.toISOString() ?? ""}
                    />
                    <input type="hidden" name="preferredDemoTimezone" value={browserTz} />

                    <TextField label="Full name" name="name" required />
                    <TextField label="Work email" name="email" type="email" required />
                    <TextField label="Company" name="company" required />
                    <TextField label="Job title" name="jobTitle" required />
                    <SelectField label="Industry" name="industry" options={industries} required />
                    <SelectField
                      label="Deployment preference"
                      name="deployment"
                      options={deploymentOptions}
                      required
                    />
                    <TextField
                      label="Main workflow challenge"
                      name="workflowChallenge"
                      className="sm:col-span-2"
                      required
                    />
                    <TextField
                      label="Systems to connect"
                      name="systems"
                      placeholder="ERP, CRM, SharePoint, internal APIs..."
                      className="sm:col-span-2"
                    />
                    <TextareaField
                      label="Notes / message"
                      name="message"
                      placeholder="Tell us what you want the walkthrough to focus on."
                      className="sm:col-span-2"
                    />
                    <div className="sm:col-span-2">
                      {selectedDemoDay ? (
                        <p className="mb-3 rounded-lg border border-[var(--cyan)]/20 bg-[var(--cyan)]/6 px-3 py-2 text-sm text-foreground">
                          <span className="font-medium">Preferred demo day: </span>
                          <time dateTime={selectedDemoDay.toISOString()}>
                            {format(selectedDemoDay, "EEEE, MMMM d, yyyy")}
                          </time>
                        </p>
                      ) : (
                        <p className="mb-3 text-sm text-muted-foreground">
                          Select a preferred day in the calendar — we&apos;ll coordinate available
                          times in follow-up.
                        </p>
                      )}
                      <button
                        type="submit"
                        className="group inline-flex w-full items-center justify-center gap-2 rounded-md bg-[var(--navy)] px-5 py-3 text-sm font-medium text-background shadow-elegant transition-all hover:-translate-y-0.5 hover:shadow-glow dark:bg-primary dark:text-primary-foreground"
                      >
                        Request Demo
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                      </button>
                    </div>
                  </form>
                )}
              </section>
            </div>

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
        <ChatWidget />
      </div>
    </ThemeProvider>
  );
}

function TextField({
  label,
  name,
  type = "text",
  placeholder,
  required,
  className = "",
}: {
  label: string;
  name: string;
  type?: "email" | "text";
  placeholder?: string;
  required?: boolean;
  className?: string;
}) {
  return (
    <label className={`flex flex-col gap-1.5 text-xs font-medium text-foreground/80 ${className}`}>
      <span>{label}</span>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="h-11 w-full rounded-md border border-border bg-surface px-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-[var(--cyan)]/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--cyan)]/30"
      />
    </label>
  );
}

function SelectField({
  label,
  name,
  options,
  required,
}: {
  label: string;
  name: string;
  options: string[];
  required?: boolean;
}) {
  return (
    <label className="flex flex-col gap-1.5 text-xs font-medium text-foreground/80">
      <span>{label}</span>
      <select
        name={name}
        required={required}
        defaultValue=""
        className="h-11 w-full rounded-md border border-border bg-surface px-3 text-sm text-foreground focus:border-[var(--cyan)]/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--cyan)]/30"
      >
        <option value="" disabled>
          Select...
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}

function TextareaField({
  label,
  name,
  placeholder,
  className = "",
}: {
  label: string;
  name: string;
  placeholder?: string;
  className?: string;
}) {
  return (
    <label className={`flex flex-col gap-1.5 text-xs font-medium text-foreground/80 ${className}`}>
      <span>{label}</span>
      <textarea
        name={name}
        rows={5}
        placeholder={placeholder}
        className="w-full rounded-md border border-border bg-surface px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-[var(--cyan)]/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--cyan)]/30"
      />
    </label>
  );
}
