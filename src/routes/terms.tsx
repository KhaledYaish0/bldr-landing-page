import { createFileRoute, Link } from "@tanstack/react-router";
import {
  LegalMetaCard,
  LegalPageShell,
  LegalSectionTitle,
  legalList,
  legalParagraph,
} from "@/components/legal/legal-page-shell";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Service | BLDR — Inova AI Solutions" },
      {
        name: "description",
        content:
          "Terms governing use of the Inova AI Solutions website and introductory interactions related to the BLDR enterprise AI operating system.",
      },
    ],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <LegalPageShell
      eyebrow="Legal"
      title="Terms of Service"
      updatedLabel="Effective date: 20 May 2026"
    >
      <LegalMetaCard>
        <p>
          <strong>Business name:</strong> Inova AI Solutions (operator of BLDR)
        </p>
        <p className="mt-2">
          <strong>Australian office:</strong> 123 Tech Street, Sydney, NSW 2000, Australia
        </p>
        <p className="mt-2">
          <strong>Middle East office:</strong> 456 Innovation Ave, Dubai Internet City, UAE
        </p>
        <p className="mt-2">
          BLDR helps enterprises orchestrate AI agents with governance suited to regulated and complex
          environments. These Terms apply to use of our public website and related pre-contractual
          interactions unless another agreement expressly states otherwise.
        </p>
      </LegalMetaCard>

      <section aria-labelledby="terms-accept">
        <LegalSectionTitle id="terms-accept">1. Acceptance of terms</LegalSectionTitle>
        <p className={legalParagraph}>
          By accessing this website or engaging with our introductory materials (including demo requests),
          you agree to these Terms of Service (&quot;Terms&quot;). If you do not agree, do not use the website
          or submit information through it.
        </p>
      </section>

      <section aria-labelledby="terms-use">
        <LegalSectionTitle id="terms-use">2. Use of website</LegalSectionTitle>
        <p className={legalParagraph}>
          This website is operated by Inova AI Solutions. You must use it lawfully and in accordance with
          applicable laws in New South Wales (NSW), Australia, and other jurisdictions that apply to your
          conduct. You must not:
        </p>
        <ul className={legalList}>
          <li>Attempt to gain unauthorised access to our systems, accounts, or networks</li>
          <li>
            Introduce malware, conduct denial-of-service activity, scrape the site in a way that harms performance or violates robots policies where applicable,
            or circumvent technical protections
          </li>
          <li>Misrepresent your affiliation with any person or organisation</li>
          <li>Use the website to harass others or transmit unlawful content</li>
        </ul>
      </section>

      <section aria-labelledby="terms-advice">
        <LegalSectionTitle id="terms-advice">
          3. Disclaimer — not regulated or bespoke advice
        </LegalSectionTitle>
        <p className={legalParagraph}>
          Website content is provided for general informational purposes only. It does not constitute
          legal, regulatory, financial, medical, or other professional advice. BLDR&apos;s suitability for
          any compliance regime depends on how it is configured, deployed, and governed within your
          environment; you remain responsible for your legal and regulatory obligations.
        </p>
      </section>

      <section aria-labelledby="terms-platform">
        <LegalSectionTitle id="terms-platform">4. BLDR platform engagements</LegalSectionTitle>
        <p className={legalParagraph}>
          Purchase, pilot, proof-of-concept, or production use of the BLDR platform is governed by separate
          contractual documents (such as an order form, subscription agreement, pilot agreement, statement of work,
          data processing terms, security exhibits, or enterprise procurement schedules). Where those documents conflict with these Terms regarding the platform itself,
          the signed enterprise agreement prevails for that engagement.
        </p>
      </section>

      <section aria-labelledby="terms-liability">
        <LegalSectionTitle id="terms-liability">5. Limitation of liability</LegalSectionTitle>
        <p className={legalParagraph}>
          To the maximum extent permitted by law (including the <em className="text-foreground/90">Australian Consumer Law</em>{" "}
          schedule to the <em className="text-foreground/90">Competition and Consumer Act 2010</em> (Cth)),
          Inova AI Solutions excludes liability for loss or damage arising from reliance on website content,
          interruption or inaccuracy of the site, third-party links, or interactions that are not covered by a separate agreement—except where liability cannot be excluded and the law implies warranties or remedies that cannot be limited,
          in which case our liability is limited to resupplying the relevant services or paying the cost of resupply,
          at our option, where that remedy is fair and reasonable.
        </p>
      </section>

      <section aria-labelledby="terms-ip">
        <LegalSectionTitle id="terms-ip">6. Intellectual property</LegalSectionTitle>
        <p className={legalParagraph}>
          Unless otherwise indicated, website materials—including branding, layout, text, graphics, icons,
          and curated diagrams—are owned by Inova AI Solutions or its licensors. BLDR-related names and logos may constitute trademarks.
          You may not copy, modify, distribute, or create derivative works without prior written consent,
          except for temporary copying incidental to normal browsing or as permitted by law.
        </p>
      </section>

      <section aria-labelledby="terms-links">
        <LegalSectionTitle id="terms-links">7. External links</LegalSectionTitle>
        <p className={legalParagraph}>
          Our website may reference or link to third-party sites (including scheduling providers and technical documentation).
          Links are provided for convenience; we do not control third-party content and are not responsible for its accuracy or availability.
        </p>
      </section>

      <section aria-labelledby="terms-privacy">
        <LegalSectionTitle id="terms-privacy">8. Privacy</LegalSectionTitle>
        <p className={legalParagraph}>
          Our{" "}
          <Link to="/privacy">Privacy Policy</Link> explains how we collect, use, disclose, and secure personal information,
          consistent with the <em className="text-foreground/90">Privacy Act 1988</em> (Cth) and the APPs where they apply.
        </p>
      </section>

      <section aria-labelledby="terms-changes">
        <LegalSectionTitle id="terms-changes">9. Changes to terms</LegalSectionTitle>
        <p className={legalParagraph}>
          We may update these Terms periodically. Changes take effect when posted with an updated effective date.
          Continued use of the website after changes constitutes acceptance of the revised Terms.
        </p>
      </section>

      <section aria-labelledby="terms-law">
        <LegalSectionTitle id="terms-law">10. Governing law</LegalSectionTitle>
        <p className={legalParagraph}>
          These Terms are governed by the laws of New South Wales, Australia. You submit to the non-exclusive jurisdiction of the courts of NSW for disputes arising out of these Terms,
          subject to any mandatory venue rules that cannot be waived.
        </p>
      </section>

      <section aria-labelledby="terms-contact">
        <LegalSectionTitle id="terms-contact">11. Contact information</LegalSectionTitle>
        <p className={legalParagraph}>Questions about these Terms:</p>
        <ul className={legalList}>
          <li>
            Email: <a href="mailto:support@inovasolution.ai">support@inovasolution.ai</a>
          </li>
          <li>
            Australia: <a href="mailto:sydney@inovasolution.ai">sydney@inovasolution.ai</a> ·{" "}
            <a href="tel:+61493310331">+61 49 331 0 331</a>
          </li>
          <li>
            UAE: <a href="mailto:dubai@inovasolution.ai">dubai@inovasolution.ai</a> ·{" "}
            <a href="tel:+971542202977">+971 54 220 29 77</a>
          </li>
        </ul>
      </section>
    </LegalPageShell>
  );
}
