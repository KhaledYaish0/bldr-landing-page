import { createFileRoute } from "@tanstack/react-router";
import { ThemeProvider } from "@/components/site/theme-provider";
import { Header } from "@/components/site/header";
import { ChatWidget } from "@/components/site/chat-widget";
import { Hero } from "@/components/sections/hero";
import { PartnerMarquee } from "@/components/sections/marquee";
import { Problem } from "@/components/sections/problem";
import { WhatBldrDoes } from "@/components/sections/what-bldr-does";
import { Pillars } from "@/components/sections/pillars";
import { Industries } from "@/components/sections/industries";
import { UseCases } from "@/components/sections/use-cases";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Capabilities } from "@/components/sections/capabilities";
import { Personas } from "@/components/sections/personas";
import { BldrSecurityLayers } from "@/components/sections/bldr-security-layers";
import { Resources } from "@/components/sections/resources";
import { FinalCta } from "@/components/sections/final-cta";
import { ComplianceTrustBar } from "@/components/sections/compliance-trust-bar";
import { SiteFooter } from "@/components/sections/footer";
import { LeadForm } from "@/components/sections/lead-form";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "BLDR | No-Code Enterprise AI Operating System" },
      {
        name: "description",
        content:
          "BLDR helps enterprises build, integrate, deploy, and govern AI agents across workflows, systems, and departments with no-code execution and enterprise-grade control.",
      },
      { property: "og:title", content: "BLDR | No-Code Enterprise AI Operating System" },
      {
        property: "og:description",
        content:
          "Build AI agents with prompts, ground them in enterprise knowledge, and deploy with governance built in. BLDR by Inova AI Solutions.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-foreground">
        <Header />
        <main>
          <Hero />
          <PartnerMarquee />
          <Problem />
          <WhatBldrDoes />
          <Pillars />
          <Industries />
          <UseCases />

          <LeadForm
            id="industry-cta"
            eyebrow="Tailored to your industry"
            title="See BLDR for your industry."
            description="Get a short, role-relevant walkthrough showing how BLDR fits regulated workflows in your sector."
            fields={[
              {
                name: "email",
                label: "Work email",
                type: "email",
                placeholder: "you@company.com",
                required: true,
              },
              {
                name: "industry",
                label: "Industry",
                type: "select",
                required: true,
                options: [
                  "Government",
                  "Finance",
                  "Healthcare",
                  "Education",
                  "Telecom / Shared Services",
                  "Other",
                ],
              },
            ]}
            submitLabel="See BLDR for my industry"
          />

          <HowItWorks />
          <Capabilities />
          <Personas />
          <BldrSecurityLayers />
          <Resources />
          <FinalCta />
        </main>
        <SiteFooter />
        <ComplianceTrustBar />
        <ChatWidget />
      </div>
    </ThemeProvider>
  );
}
