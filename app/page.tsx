import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { CapabilitiesGrid } from "@/components/landing/CapabilitiesGrid";
import { Architecture } from "@/components/landing/Architecture";
import { TechnicalSummary } from "@/components/landing/TechnicalSummary";
import { Waitlist } from "@/components/landing/Waitlist";
import { Footer } from "@/components/landing/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="relative flex-1">
        <Hero />
        <CapabilitiesGrid />
        <Architecture />
        <TechnicalSummary />
        <Waitlist />
      </main>
      <Footer />
    </>
  );
}
