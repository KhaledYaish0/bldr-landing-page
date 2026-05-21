import { createFileRoute, Link } from "@tanstack/react-router";
import {
  LegalMetaCard,
  LegalPageShell,
  LegalSectionTitle,
  legalList,
  legalParagraph,
} from "@/components/legal/legal-page-shell";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | BLDR — Inova AI Solutions" },
      {
        name: "description",
        content:
          "How Inova AI Solutions collects, uses, and protects personal information in connection with the BLDR platform and this website.",
      },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <LegalPageShell
      eyebrow="Legal"
      title="Privacy Policy"
      updatedLabel="Last updated: 20 May 2026"
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
          BLDR is an enterprise-grade AI operating system for building, integrating, deploying, and
          governing AI agents across workflows and systems. This policy describes how we handle
          personal information collected through our marketing website, demo bookings, and related
          interactions—not your organisation&apos;s production deployment of BLDR, which is typically
          covered by separate contractual terms.
        </p>
      </LegalMetaCard>

      <section aria-labelledby="privacy-intro">
        <LegalSectionTitle id="privacy-intro">1. Introduction</LegalSectionTitle>
        <p className={legalParagraph}>
          Inova AI Solutions respects your privacy and is committed to safeguarding personal
          information in accordance with the{" "}
          <em className="text-foreground/90">Privacy Act 1988</em> (Cth) and the Australian Privacy
          Principles (APPs), where they apply to our Australian operations and activities.
        </p>
      </section>

      <section aria-labelledby="privacy-collect">
        <LegalSectionTitle id="privacy-collect">
          2. What personal information we collect
        </LegalSectionTitle>
        <p className={legalParagraph}>Depending on how you interact with us, we may collect:</p>
        <ul className={legalList}>
          <li>Identity and contact details such as your name, email address, phone number, and job title</li>
          <li>
            Organisation details such as company name, industry, region, team size, and systems or
            workflow context you choose to share when requesting information or a demo
          </li>
          <li>
            Messages and attachments you send via forms, email, chat, or calls (including scheduling
            notes you provide through third-party booking tools)
          </li>
          <li>
            Technical information associated with visits to our website, such as IP address,
            browser type, device identifiers, approximate location derived from IP, and diagnostic
            logs used for security and reliability
          </li>
          <li>
            Cookie and similar technologies data where enabled (see section 8). We do not ask you to
            provide sensitive information through general marketing forms; please avoid uploading
            regulated or confidential content unless we expressly instruct you to do so through a
            secure channel as part of an agreed evaluation process.
          </li>
        </ul>
      </section>

      <section aria-labelledby="privacy-how">
        <LegalSectionTitle id="privacy-how">3. How we collect your information</LegalSectionTitle>
        <ul className={legalList}>
          <li>Directly from you when you submit forms, email us, call us, or attend meetings</li>
          <li>
            When you book a demo or consultation using scheduling tools operated by service providers
            (for example Calendly or similar platforms), subject to their policies and settings
          </li>
          <li>
            From referrals, partners, event registrations, or publicly available professional profiles,
            where permitted
          </li>
          <li>
            Automatically through cookies, analytics, and security tooling when you use our website or
            related digital properties
          </li>
        </ul>
      </section>

      <section aria-labelledby="privacy-why">
        <LegalSectionTitle id="privacy-why">4. Why we collect it</LegalSectionTitle>
        <ul className={legalList}>
          <li>To respond to enquiries, qualify opportunities, and deliver demos tailored to your context</li>
          <li>To operate, maintain, secure, and improve our website and communications</li>
          <li>To provide customer success and technical support related to evaluations or pilots where agreed</li>
          <li>To send transactional notices (for example confirmations related to bookings or requests)</li>
          <li>
            To send marketing communications where permitted by law and, where required, only with your consent
            (you may opt out using the unsubscribe mechanism in emails or by contacting us)
          </li>
          <li>To comply with legal obligations and protect our legitimate interests in a balanced way</li>
        </ul>
      </section>

      <section aria-labelledby="privacy-disclosure">
        <LegalSectionTitle id="privacy-disclosure">5. Disclosure of information</LegalSectionTitle>
        <p className={legalParagraph}>We may disclose personal information:</p>
        <ul className={legalList}>
          <li>To cloud hosting, productivity, CRM, analytics, scheduling, email delivery, and security vendors who assist us in operating our business</li>
          <li>To professional advisers where reasonably required (for example auditors or lawyers)</li>
          <li>To regulators, courts, or law enforcement when required or authorised by law</li>
          <li>
            To enterprise customers where relevant to an evaluation or pilot they sponsor and where you have been informed as part of that process
          </li>
        </ul>
        <p className={legalParagraph}>We do not sell or rent personal information.</p>
      </section>

      <section aria-labelledby="privacy-security">
        <LegalSectionTitle id="privacy-security">6. Data storage and security</LegalSectionTitle>
        <p className={legalParagraph}>
          We take reasonable steps to protect personal information from misuse, interference, loss,
          unauthorised access, modification, or disclosure. Measures may include access controls,
          encryption in transit where appropriate for our systems, monitoring, vendor diligence,
          and staff training. No method of transmission or storage is completely secure; if we become
          aware of an incident that materially affects you and requires notification under applicable
          law, we will follow our obligations.
        </p>
      </section>

      <section aria-labelledby="privacy-access">
        <LegalSectionTitle id="privacy-access">7. Access and correction</LegalSectionTitle>
        <p className={legalParagraph}>
          You may request access to personal information we hold about you and ask us to correct
          information that is inaccurate, incomplete, or out of date. To make a request, contact us
          using the details below.
        </p>
      </section>

      <section aria-labelledby="privacy-cookies">
        <LegalSectionTitle id="privacy-cookies">8. Cookies and website analytics</LegalSectionTitle>
        <p className={legalParagraph}>
          Our website may use cookies and similar technologies to remember preferences, measure site
          performance, and understand how visitors navigate pages. Where we use analytics providers,
          they may process aggregated or pseudonymous usage data subject to their terms. You can
          manage cookies through your browser settings and, where offered, consent controls on our site.
        </p>
      </section>

      <section aria-labelledby="privacy-overseas">
        <LegalSectionTitle id="privacy-overseas">9. Overseas disclosure</LegalSectionTitle>
        <p className={legalParagraph}>
          Some service providers may process or store information outside Australia (including in the
          United States, Europe, and the Middle East), depending on how their infrastructure is hosted.
          Where we disclose personal information overseas, we take steps that are reasonable in the
          circumstances to ensure recipients handle information consistently with applicable privacy law,
          including through contractual safeguards where appropriate.
        </p>
      </section>

      <section aria-labelledby="privacy-contact">
        <LegalSectionTitle id="privacy-contact">10. Contact us or lodge a complaint</LegalSectionTitle>
        <p className={legalParagraph}>
          For privacy questions or complaints, please contact:
        </p>
        <ul className={legalList}>
          <li>
            Email:{" "}
            <a href="mailto:support@inovasolution.ai">support@inovasolution.ai</a> (general privacy and security enquiries)
          </li>
          <li>
            Australia:{" "}
            <a href="mailto:sydney@inovasolution.ai">sydney@inovasolution.ai</a> ·{" "}
            <a href="tel:+61493310331">+61 49 331 0 331</a>
          </li>
          <li>
            UAE:{" "}
            <a href="mailto:dubai@inovasolution.ai">dubai@inovasolution.ai</a> ·{" "}
            <a href="tel:+971542202977">+971 54 220 29 77</a>
          </li>
        </ul>
        <p className={legalParagraph}>
          If you are located in Australia and are not satisfied with our response, you may contact the
          Office of the Australian Information Commissioner (OAIC) at{" "}
          <a href="https://www.oaic.gov.au" rel="noopener noreferrer" target="_blank">
            www.oaic.gov.au
          </a>
          .
        </p>
        <p className={legalParagraph}>
          Our handling of website visitors may also interact with laws in other regions depending on
          circumstances; contact us if you need region-specific information related to an enterprise
          engagement.
        </p>
      </section>

      <section aria-labelledby="privacy-related">
        <LegalSectionTitle id="privacy-related">11. Related notices</LegalSectionTitle>
        <p className={legalParagraph}>
          Please also review our{" "}
          <Link to="/terms">Terms of Service</Link>, which explain permitted use of this website and
          related disclaimers.
        </p>
      </section>
    </LegalPageShell>
  );
}
