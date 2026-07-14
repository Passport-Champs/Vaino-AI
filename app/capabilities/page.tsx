import type { Metadata } from "next";
import { Navbar } from "@/components/landing/Navbar";
import { CapabilitiesHero } from "@/components/landing/capabilities/CapabilitiesHero";
import { CapabilityDossier } from "@/components/landing/capabilities/CapabilityDossier";
import { CapabilitiesOutro } from "@/components/landing/capabilities/CapabilitiesOutro";
import { Footer } from "@/components/landing/Footer";

export const metadata: Metadata = {
  title: "Capabilities - Vaino AI",
  description:
    "Thirteen capabilities. One unified engine. Explore the thirteen purpose-built modules that power Vaino - dynamic expert routing, agentic execution, recursive self-correction, and more.",
  openGraph: {
    title: "Capabilities - Vaino AI",
    description:
      "Thirteen capabilities, one unified engine. A system that doesn't just compute, but thinks.",
    url: "https://www.vaino.ai/capabilities",
    siteName: "Vaino AI",
    type: "website",
  },
};

export default function Capabilities() {
  return (
    <>
      <Navbar />
      <main className="relative flex-1">
        <CapabilitiesHero />
        <CapabilityDossier />
        <CapabilitiesOutro />
      </main>
      <Footer />
    </>
  );
}
