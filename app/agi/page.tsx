import type { Metadata } from "next";
import { Navbar } from "@/components/landing/Navbar";
import { AgiHero } from "@/components/landing/agi/AgiHero";
import { PhasedAscent } from "@/components/landing/agi/PhasedAscent";
import { UniqueApproach } from "@/components/landing/agi/UniqueApproach";
import { RealWorldImpact } from "@/components/landing/agi/RealWorldImpact";
import { AsiHorizon } from "@/components/landing/agi/AsiHorizon";
import { WhyVaino } from "@/components/landing/agi/WhyVaino";
import { Footer } from "@/components/landing/Footer";

export const metadata: Metadata = {
  title: "AGI Horizon - Vaino AI",
  description:
    "Vaino's phased ascent to Artificial General Intelligence - a continuous learning flywheel, a brain-inspired cognitive architecture, and human-AI symbiosis on the path from AI to AGI to ASI.",
  openGraph: {
    title: "AGI Horizon - Vaino AI",
    description:
      "Intelligence, unbound. Vaino's methodical, exponential path to AGI and beyond.",
    url: "https://www.vaino.ai/agi",
    siteName: "Vaino AI",
    type: "website",
  },
};

export default function AgiPage() {
  return (
    <>
      <Navbar />
      <main className="relative flex-1">
        <AgiHero />
        <PhasedAscent />
        <UniqueApproach />
        <RealWorldImpact />
        <AsiHorizon />
        <WhyVaino />
      </main>
      <Footer />
    </>
  );
}
