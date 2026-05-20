import { format, startOfDay } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import { getBrowserTimeZone } from "@/lib/demo-booking";

function isPastDay(date: Date): boolean {
  const today = startOfDay(new Date());
  return startOfDay(date).getTime() < today.getTime();
}

interface DemoCalendarProps {
  selected: Date | undefined;
  onSelect: (date: Date | undefined) => void;
  error?: string | null;
}

export function DemoCalendar({ selected, onSelect, error }: DemoCalendarProps) {
  const timeZone = getBrowserTimeZone();

  return (
    <section
      className="rounded-3xl border border-border bg-surface p-6 shadow-elegant sm:p-8"
      aria-labelledby="demo-day-heading"
    >
      <h2 id="demo-day-heading" className="font-display text-xl font-semibold text-foreground">
        Select a demo day
      </h2>
      <p className="mt-2 text-sm text-muted-foreground">
        Choose a preferred day and our team will follow up with available times.
      </p>

      <div className="mt-6 flex justify-center sm:justify-start">
        <Calendar
          mode="single"
          selected={selected}
          onSelect={onSelect}
          defaultMonth={new Date()}
          captionLayout="buttons"
          disabled={(date) => isPastDay(date)}
          className={cn(
            "rounded-xl border border-border/80 bg-background/80 p-2 [--cell-size:2.25rem] dark:bg-background/40",
            "[&_.rdp-weekday]:text-muted-foreground",
            "[&_button[data-selected-single=true]]:!bg-[var(--cyan)] [&_button[data-selected-single=true]]:!text-[var(--navy)] [&_button[data-selected-single=true]]:shadow-sm",
            "[&_button[data-selected-single=true]]:focus-visible:ring-2 [&_button[data-selected-single=true]]:focus-visible:ring-[var(--cyan)]/40",
          )}
          classNames={{
            disabled: "opacity-40 cursor-not-allowed",
            outside: "opacity-35",
          }}
        />
      </div>

      <p className="mt-4 text-xs text-muted-foreground" aria-live="polite">
        Timezone: <span className="font-medium text-foreground/90">{timeZone}</span>
      </p>

      {selected ? (
        <p className="mt-3 rounded-lg border border-[var(--cyan)]/25 bg-[var(--cyan)]/8 px-3 py-2 text-sm text-foreground">
          <span className="font-medium text-foreground">Selected day:</span>{" "}
          <time dateTime={selected.toISOString()}>{format(selected, "EEEE, MMMM d, yyyy")}</time>
        </p>
      ) : null}

      {error ? (
        <p className="mt-3 text-sm text-destructive" role="alert">
          {error}
        </p>
      ) : null}
    </section>
  );
}
