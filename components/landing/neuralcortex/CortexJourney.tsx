"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, Sparkles } from "lucide-react";
import Link from "next/link";
import { SectionHeader } from "@/components/landing/about/SectionHeader";

const PHASES = [
  {
    tag: "AI",
    label: "The Foundation",
    state: "Today",
    fill: 1,
    body: "Today, the Neural Cortex is a highly capable AI, outperforming humans on specific tasks - fast, accurate, adaptable, but still narrow in scope.",
  },
  {
    tag: "AGI",
    label: "The Goal",
    state: "In progress",
    fill: 0.5,
    body: "Human-level intelligence across all domains - understanding, learning, and reasoning like a human, at the speed and scale of a machine.",
  },
  {
    tag: "ASI",
    label: "The Future",
    state: "The horizon",
    fill: 0,
    body: "A system that surpasses human intelligence in every way, opening new frontiers of knowledge, innovation, and progress.",
  },
];

const ease = [0.2, 0.8, 0.2, 1] as const;

export function CortexJourney() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="journey"
      className="relative isolate py-24 md:py-32 scroll-mt-24 overflow-hidden"
    >
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 120%, rgba(34,211,238,0.10), transparent 60%)",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader
          index="§ 04"
          eyebrow="The Journey"
          title="From AI, to AGI,"
          accent="to superintelligence."
          description="The Neural Cortex is laying the groundwork for systems that mimic and ultimately surpass human intelligence in every way."
        />

        {/* Progression meter */}
        <div ref={ref} className="mt-16">
          {/* Track */}
          <div className="relative h-1 rounded-full bg-white/10">
            <motion.div
              initial={{ width: 0 }}
              animate={inView ? { width: "50%" } : {}}
              transition={{ duration: 1.2, ease }}
              className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-cyan-400 to-ultra-500"
            />
            {PHASES.map((p, i) => (
              <div
                key={p.tag}
                className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2"
                style={{ left: `${(i / (PHASES.length - 1)) * 100}%` }}
              >
                <span
                  className={`block size-4 rounded-full border-2 ${
                    p.fill === 1
                      ? "border-cyan-300 bg-cyan-400"
                      : p.fill === 0.5
                        ? "border-cyan-300 bg-obsidian-950"
                        : "border-white/30 bg-obsidian-950"
                  }`}
                />
              </div>
            ))}
          </div>

          {/* Phases */}
          <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-3">
            {PHASES.map((p, i) => (
              <motion.div
                key={p.tag}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.15, ease }}
                className={i === 2 ? "sm:text-right" : ""}
              >
                <div
                  className={`flex items-baseline gap-3 ${
                    i === 2 ? "sm:justify-end" : ""
                  }`}
                >
                  <span
                    className={`text-3xl font-semibold tracking-tight md:text-4xl ${
                      i === 0 ? "text-synapse" : "text-white"
                    }`}
                  >
                    {p.tag}
                  </span>
                  <span className="font-serif text-lg italic text-white/60">
                    {p.label}
                  </span>
                </div>
                <span className="mt-1 inline-block font-mono-tech text-[10px] uppercase tracking-[0.18em] text-cyan-300/60">
                  {p.state}
                </span>
                <p className="mt-3 text-sm leading-relaxed text-white/55">
                  {p.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Closing */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.7, ease }}
          className="mx-auto mt-20 max-w-3xl text-center"
        >
          <div className="divider-synapse mb-10" />
          <p className="font-serif text-2xl italic leading-snug text-white/85 md:text-3xl text-balance">
            A technological and civilizational evolution - empowering humanity
            to solve its greatest challenges, from disease and poverty to
            climate change and beyond.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/#waitlist"
              className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-xl border border-cyan-400/40 bg-gradient-to-b from-cyan-400/30 to-cyan-500/10 px-6 py-3 text-sm font-medium text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_10px_30px_-10px_rgba(34,211,238,0.4)] transition hover:from-cyan-400/40"
            >
              <span className="relative z-10">Join the Waitlist</span>
              <ArrowUpRight className="relative z-10 size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              <span className="absolute inset-0 bg-[linear-gradient(110deg,transparent,rgba(255,255,255,0.14),transparent)] bg-[length:200%_100%] -translate-x-full group-hover:animate-[shimmer_1.6s_linear_infinite]" />
            </Link>
            <Link
              href="/capabilities"
              className="group inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-6 py-3 text-sm text-white/80 backdrop-blur transition hover:border-white/20 hover:bg-white/[0.06]"
            >
              <Sparkles className="size-4 text-cyan-300" />
              Explore Capabilities
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default CortexJourney;
