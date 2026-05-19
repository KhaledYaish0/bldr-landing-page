import { useState, type FormEvent } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

type Field =
  | { name: string; label: string; type: "email" | "text"; placeholder: string; required?: boolean; maxLength?: number }
  | { name: string; label: string; type: "select"; options: string[]; required?: boolean };

interface LeadFormProps {
  id?: string;
  eyebrow: string;
  title: string;
  description?: string;
  fields: Field[];
  submitLabel: string;
  tone?: "light" | "dark";
}

export function LeadForm({ id, eyebrow, title, description, fields, submitLabel, tone = "light" }: LeadFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    const data = new FormData(e.currentTarget);
    const email = String(data.get("email") || "").trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 255) {
      setError("Please enter a valid work email.");
      return;
    }
    setSubmitted(true);
  }

  return (
    <section
      id={id}
      className={cn(
        "px-6 py-20",
        tone === "dark"
          ? "bg-[var(--navy)] text-background dark:bg-surface dark:text-foreground"
          : "bg-surface-muted/60",
      )}
    >
      <div
        className={cn(
          "mx-auto grid max-w-6xl gap-8 rounded-2xl border p-8 sm:p-10 lg:grid-cols-12 lg:items-center",
          tone === "dark"
            ? "border-white/10 bg-white/5 backdrop-blur dark:border-border dark:bg-surface-muted/60"
            : "border-border bg-surface shadow-elegant",
        )}
      >
        <div className="lg:col-span-5">
          <p
            className={cn(
              "text-xs font-medium uppercase tracking-[0.18em]",
              tone === "dark" ? "text-[var(--cyan)]" : "text-muted-foreground",
            )}
          >
            {eyebrow}
          </p>
          <h2
            className={cn(
              "mt-3 font-display text-2xl font-semibold tracking-tight sm:text-3xl",
              tone === "dark" ? "text-background dark:text-foreground" : "text-foreground",
            )}
          >
            {title}
          </h2>
          {description && (
            <p
              className={cn(
                "mt-3 text-sm sm:text-base",
                tone === "dark" ? "text-background/70 dark:text-muted-foreground" : "text-muted-foreground",
              )}
            >
              {description}
            </p>
          )}
        </div>

        <div className="lg:col-span-7">
          {submitted ? (
            <div
              className={cn(
                "flex items-start gap-3 rounded-xl border p-5",
                tone === "dark"
                  ? "border-[var(--cyan)]/30 bg-[var(--cyan)]/10 text-background dark:text-foreground"
                  : "border-[var(--cyan)]/30 bg-[var(--cyan)]/8 text-foreground",
              )}
            >
              <CheckCircle2 className="mt-0.5 h-5 w-5 text-[var(--cyan)]" />
              <div>
                <div className="font-semibold">Thanks — we'll be in touch.</div>
                <p className="mt-1 text-sm opacity-80">A BLDR solutions architect will reach out within one business day.</p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid gap-3 sm:grid-cols-2">
              {fields.map((f) => (
                <label key={f.name} className={cn("flex flex-col gap-1.5 text-xs font-medium", f.type === "select" || (f as any).long ? "sm:col-span-2" : "")}>
                  <span className={tone === "dark" ? "text-background/80 dark:text-foreground/80" : "text-foreground/80"}>
                    {f.label}
                  </span>
                  {f.type === "select" ? (
                    <select
                      name={f.name}
                      required={f.required}
                      defaultValue=""
                      className="h-10 rounded-md border border-border bg-background px-3 text-sm text-foreground focus:border-[var(--cyan)]/50 focus:outline-none"
                    >
                      <option value="" disabled>Select…</option>
                      {f.options.map((o) => <option key={o} value={o}>{o}</option>)}
                    </select>
                  ) : (
                    <input
                      name={f.name}
                      type={f.type}
                      required={f.required}
                      placeholder={f.placeholder}
                      maxLength={f.maxLength ?? 255}
                      className="h-10 rounded-md border border-border bg-background px-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-[var(--cyan)]/50 focus:outline-none"
                    />
                  )}
                </label>
              ))}
              {error && <p className="text-xs text-destructive sm:col-span-2">{error}</p>}
              <button
                type="submit"
                className="group mt-1 inline-flex items-center justify-center gap-2 rounded-md bg-[var(--navy)] px-5 py-3 text-sm font-medium text-background shadow-elegant transition-all hover:-translate-y-0.5 hover:shadow-glow dark:bg-primary dark:text-primary-foreground sm:col-span-2"
              >
                {submitLabel}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </button>
              <p className={cn("text-[11px] sm:col-span-2", tone === "dark" ? "text-background/60 dark:text-muted-foreground" : "text-muted-foreground")}>
                We respect your inbox. No spam — your details support a single follow-up from a BLDR solutions architect.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
