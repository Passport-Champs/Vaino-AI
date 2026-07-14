import type { Metadata } from "next";
import { Navbar } from "@/components/landing/Navbar";
import { NeuralCortexHero } from "@/components/landing/neuralcortex/NeuralCortexHero";
import { ModularBrain } from "@/components/landing/neuralcortex/ModularBrain";
import { BiologicalBlueprint } from "@/components/landing/neuralcortex/BiologicalBlueprint";
import { FrontierImpact } from "@/components/landing/neuralcortex/FrontierImpact";
import { CortexJourney } from "@/components/landing/neuralcortex/CortexJourney";
import { Footer } from "@/components/landing/Footer";

export const metadata: Metadata = {
  title: "Neural Cortex - Vaino AI",
  description:
    "The Neural Cortex of Vaino: a blueprint for superintelligence. Seven modules mapped to the human brain - a modular, adaptive, self-evolving architecture on the path from AI to AGI to ASI.",
  openGraph: {
    title: "Neural Cortex - Vaino AI",
    description:
      "A blueprint for superintelligence - seven cortical modules modeled on the human brain.",
    url: "https://www.vaino.ai/neuralcortex",
    siteName: "Vaino AI",
    type: "website",
  },
};

export default function NeuralCortexPage() {
  return (
    <>
      <Navbar />
      <main className="relative flex-1">
        <NeuralCortexHero />
        <ModularBrain />
        <BiologicalBlueprint />
        <FrontierImpact />
        <CortexJourney />
      </main>
      <Footer />
    </>
  );
}
