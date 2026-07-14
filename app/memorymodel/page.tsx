import type { Metadata } from "next";
import { Navbar } from "@/components/landing/Navbar";
import { MemoryHero } from "@/components/landing/memorymodel/MemoryHero";
import { MemoryPipeline } from "@/components/landing/memorymodel/MemoryPipeline";
import { RetrievalLoop } from "@/components/landing/memorymodel/RetrievalLoop";
import { MemoryEngineering } from "@/components/landing/memorymodel/MemoryEngineering";
import { MemorySuperiority } from "@/components/landing/memorymodel/MemorySuperiority";
import { Footer } from "@/components/landing/Footer";

export const metadata: Metadata = {
  title: "Memory Model - Vaino AI",
  description:
    "The Memory Model of Vaino: a computational masterpiece. A three-stage pipeline - ingestion, active context, consolidation - with a self-optimizing retrieval loop at 412K tokens/sec.",
  openGraph: {
    title: "Memory Model - Vaino AI",
    description:
      "A dynamic, self-optimizing memory system - the architectural backbone of an intelligence that evolves with every interaction.",
    url: "https://www.vaino.ai/memorymodel",
    siteName: "Vaino AI",
    type: "website",
  },
};

export default function MemoryModelPage() {
  return (
    <>
      <Navbar />
      <main className="relative flex-1">
        <MemoryHero />
        <MemoryPipeline />
        <RetrievalLoop />
        <MemoryEngineering />
        <MemorySuperiority />
      </main>
      <Footer />
    </>
  );
}
