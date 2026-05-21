import { useEffect } from "react";

const CALENDLY_URL =
  "https://calendly.com/youssefjalloul/inova-ai-solutions?hide_event_type_details=1&hide_gdpr_banner=1";

const CALENDLY_SCRIPT_SRC = "https://assets.calendly.com/assets/external/widget.js";

function initCalendlyInlineWidgets(): void {
  if (typeof window === "undefined") return;
  const calendly = (
    window as unknown as {
      Calendly?: { initInlineWidgets?: () => void };
    }
  ).Calendly;
  calendly?.initInlineWidgets?.();
}

/** Inline Calendly widget; loads the official script once and initializes embedded UI. */
export function CalendlyEmbed() {
  useEffect(() => {
    if (typeof document === "undefined") return;

    const existingScript = document.querySelector(`script[src="${CALENDLY_SCRIPT_SRC}"]`);

    if (existingScript) {
      initCalendlyInlineWidgets();
      return;
    }

    const script = document.createElement("script");
    script.src = CALENDLY_SCRIPT_SRC;
    script.async = true;
    script.onload = () => {
      initCalendlyInlineWidgets();
    };
    document.body.appendChild(script);
  }, []);

  return (
    <div
      className="calendly-inline-widget"
      data-url={CALENDLY_URL}
      style={{ minWidth: "320px", height: "700px" }}
    />
  );
}
