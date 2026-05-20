import { useState } from "react";
import { MessageSquare, X, Send, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

const quickPrompts = [
  "What is BLDR?",
  "Show me a governance demo",
  "How does sovereign deployment work?",
  "Book a demo",
];

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");

  return (
    <div className="fixed bottom-5 right-5 z-50 sm:bottom-6 sm:right-6">
      {open && (
        <div
          role="dialog"
          aria-label="BLDR assistant"
          className="mb-3 flex h-[28rem] w-[22rem] max-w-[calc(100vw-2.5rem)] flex-col overflow-hidden rounded-2xl border border-border bg-surface shadow-elegant animate-[fade-up_0.25s_ease-out_both]"
        >
          <div className="flex items-center justify-between border-b border-border bg-surface-muted/60 px-4 py-3">
            <div className="flex items-center gap-2">
              <span className="grid h-8 w-8 place-items-center rounded-md border border-[var(--cyan)]/40 bg-[var(--cyan)]/10 text-[var(--cyan)]">
                <Sparkles className="h-4 w-4" />
              </span>
              <div>
                <div className="text-sm font-semibold text-foreground">BLDR Assistant</div>
                <div className="text-[10px] uppercase tracking-widest text-muted-foreground">
                  Preview · Phase 1
                </div>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close chat"
              className="grid h-7 w-7 place-items-center rounded-md text-muted-foreground hover:bg-secondary"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <div className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
            <div className="max-w-[85%] rounded-2xl rounded-bl-sm border border-border bg-surface-muted/60 px-3.5 py-2.5 text-sm text-foreground">
              Hi — I can answer questions about the BLDR enterprise AI operating system. What would
              you like to explore first?
            </div>
            <div className="flex flex-wrap gap-2">
              {quickPrompts.map((p) => (
                <button
                  key={p}
                  onClick={() => setInput(p)}
                  className="rounded-full border border-border bg-background/70 px-3 py-1.5 text-xs text-foreground transition-colors hover:border-[var(--cyan)]/40 hover:bg-[var(--cyan)]/8"
                >
                  {p}
                </button>
              ))}
            </div>
          </div>

          <form
            className="flex items-center gap-2 border-t border-border bg-surface-muted/40 px-3 py-3"
            onSubmit={(e) => {
              e.preventDefault();
              setInput("");
            }}
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask BLDR…"
              className="h-9 flex-1 rounded-md border border-border bg-background px-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-[var(--cyan)]/50 focus:outline-none"
            />
            <button
              type="submit"
              aria-label="Send"
              className="grid h-9 w-9 place-items-center rounded-md bg-[var(--navy)] text-background transition-opacity hover:opacity-90 dark:bg-primary dark:text-primary-foreground"
            >
              <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      )}

      <button
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close BLDR chat" : "Open BLDR chat"}
        className={cn(
          "group relative grid h-14 w-14 place-items-center rounded-full border border-border bg-[var(--navy)] text-background shadow-elegant transition-all hover:-translate-y-0.5 hover:shadow-glow dark:bg-primary dark:text-primary-foreground",
        )}
      >
        {open ? <X className="h-5 w-5" /> : <MessageSquare className="h-5 w-5" />}
        {!open && (
          <span className="absolute -right-0.5 -top-0.5 h-3 w-3 rounded-full border-2 border-background bg-[var(--cyan)]" />
        )}
      </button>
    </div>
  );
}
