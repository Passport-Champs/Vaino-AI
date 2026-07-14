import type { Metadata } from "next";
import { Navbar } from "@/components/landing/Navbar";
import { AboutHero } from "@/components/landing/about/AboutHero";
import { WhyMiami } from "@/components/landing/about/WhyMiami";
import { NameOrigin } from "@/components/landing/about/NameOrigin";
import { HumanIntelligenceEngine } from "@/components/landing/about/HumanIntelligenceEngine";
import { EvolutionPath } from "@/components/landing/about/EvolutionPath";
import { ComputationalExcellence } from "@/components/landing/about/ComputationalExcellence";
import { VainoDifference } from "@/components/landing/about/VainoDifference";
import { JoinUs } from "@/components/landing/about/JoinUs";
import { Footer } from "@/components/landing/Footer";

export const metadata: Metadata = {
  title: "About - Vaino AI",
  description:
    "Vaino AI is building the Human Intelligence Engine: from AI to AGI to ASI. The mission, the name, and the architecture behind it.",
  openGraph: {
    title: "About - Vaino AI",
    description:
      "The mission, the name, and the path from AI to AGI to ASI.",
    url: "https://www.vaino.ai/about",
    siteName: "Vaino AI",
    type: "website",
  },
};

export default function About() {
  return (
    <>
      <Navbar />
      <main className="relative flex-1">
        <AboutHero />
        <WhyMiami />
        <NameOrigin />
        <HumanIntelligenceEngine />
        <EvolutionPath />
        <ComputationalExcellence />
        <VainoDifference />
        <JoinUs />
      </main>
      <Footer />
    </>
  );
}
