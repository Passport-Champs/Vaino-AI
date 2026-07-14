"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { BrainCircuit, Cpu, Infinity as InfinityIcon, type LucideIcon } from "lucide-react";
import { SectionHeader } from "@/components/landing/about/SectionHeader";

type Stage = {
  id: "ai" | "agi" | "asi";
  icon: LucideIcon;
  short: string;
  name: string;
  tag: string;
  body: string;
  meta: string[];
};

const STAGES: Stage[] = [
  {
    id: "ai",
    icon: Cpu,
    short: "AI",
    name: "The Foundation",
    tag: "Stage 01 · Today",
    body: "Highly capable systems that outperform humans on specific tasks. Fast, accurate, and adaptable - but still narrow in scope.",
    meta: ["Narrow tasks", "Pattern completion", "Today"],
  },
  {
    id: "agi",
    icon: BrainCircuit,
    short: "AGI",
    name: "The Goal",
    tag: "Stage 02 · The Goal",
    body: "Human-level intelligence across all domains - understanding, learning, and reasoning like a human, at the speed and scale of a machine.",
    meta: ["General reasoning", "Cross-domain", "The Goal"],
  },
  {
    id: "asi",
    icon: InfinityIcon,
    short: "ASI",
    name: "The Future",
    tag: "Stage 03 · The Future",
    body: "A system that surpasses human intelligence in every way - opening new frontiers of knowledge, innovation, and progress.",
    meta: ["Superintelligent", "Self-improving", "The Future"],
  },
];

const ease = [0.2, 0.8, 0.2, 1] as const;

export function EvolutionPath() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="path"
      className="relative isolate py-28 md:py-40 scroll-mt-24 overflow-hidden"
    >
      {/* Layered glow to signal the page's centerpiece */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 40%, rgba(34,211,238,0.10), transparent 60%), radial-gradient(ellipse 50% 40% at 50% 110%, rgba(99,102,241,0.10), transparent 60%)",
        }}
      />
      <div
        aria-hidden
        className="absolute left-1/2 top-0 bottom-0 w-px pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, transparent, rgba(34,211,238,0.3) 20%, rgba(0,229,255,0.22) 70%, transparent)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader
          index="§ 04"
          eyebrow="The Roadmap"
          title="The path from"
          accent="AI, to AGI, to ASI."
          description="Our journey is about more than building better AI - it's about evolving computational intelligence along a clear path. We are committed to leading the charge."
          align="center"
        />

        <div ref={ref} className="relative mt-16 md:mt-24">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-0">
            {STAGES.map((s, i) => (
              <motion.div
                key={s.id}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.15 * i, ease }}
                className={`relative ${i === 1 ? "md:z-10 md:scale-[1.03]" : ""}`}
              >
                <StageCard stage={s} index={i} />
                {i < STAGES.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 -translate-y-1/2 z-20">
                    <svg viewBox="0 0 32 10" className="w-full">
                      <path
                        d="M0 5 H 28"
                        stroke={`url(#ep-edge-${i})`}
                        strokeWidth="1.2"
                        className="animate-dash"
                      />
                      <path
                        d="M24 1 L 30 5 L 24 9"
                        fill="none"
                        stroke={i === 0 ? "#22d3ee" : "#00e5ff"}
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <defs>
                        <linearGradient id={`ep-edge-${i}`} x1="0" x2="32" y1="0" y2="0">
                          <stop offset="0%" stopColor="#22d3ee" />
                          <stop offset="100%" stopColor={i === 0 ? "#6366f1" : "#00e5ff"} />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6, ease }}
          className="mx-auto mt-20 max-w-3xl text-center text-lg leading-relaxed text-white/55 text-balance"
        >
          The transition from AI to AGI to ASI is a technological and{" "}
          <span className="font-serif italic text-white/80">
            civilizational
          </span>{" "}
          evolution - building the tools to shape the future of intelligence,
          and empowering humanity to solve its greatest challenges, from
          disease and poverty to climate change and beyond.
        </motion.p>
      </div>
    </section>
  );
}

function StageCard({ stage, index }: { stage: Stage; index: number }) {
  const Icon = stage.icon;
  const isFinal = index === 2;
  const isMid = index === 1;

  return (
    <div
      className={`relative h-full rounded-2xl border p-6 overflow-hidden hover-glow md:mr-10 bg-gradient-to-b from-obsidian-800/60 to-obsidian-900/80 ${
        isFinal
          ? "border-cyan-400/30"
          : isMid
            ? "border-cyan-400/20"
            : "border-white/10"
      }`}
    >
      {/* Serif ghost short-name watermark */}
      <span
        aria-hidden
        className="absolute -right-2 -top-6 select-none font-serif text-[92px] italic leading-none text-white/[0.04]"
      >
        {stage.short}
      </span>

      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />

      <div className="relative flex items-start justify-between">
        <div
          className={`inline-flex size-11 items-center justify-center rounded-xl border ${
            isFinal
              ? "border-cyan-400/40 bg-cyan-500/[0.12]"
              : "border-cyan-400/20 bg-cyan-500/[0.08]"
          }`}
        >
          <Icon className="size-5 text-cyan-300" />
        </div>
        <span className="font-mono-tech text-[10px] uppercase tracking-[0.18em] text-white/45">
          {stage.tag}
        </span>
      </div>

      <div className="relative mt-6 flex items-baseline gap-3">
        <span
          className={`text-2xl font-semibold tracking-tight ${
            isFinal ? "text-synapse" : "text-white"
          }`}
        >
          {stage.short}
        </span>
        <span className="font-serif text-xl italic text-white/60">
          {stage.name}
        </span>
      </div>

      <p className="relative mt-3 text-sm leading-relaxed text-white/55 text-balance">
        {stage.body}
      </p>

      <div className="relative mt-5 flex flex-wrap gap-1.5">
        {stage.meta.map((m) => (
          <span
            key={m}
            className="rounded-md border border-white/10 bg-white/[0.02] px-2 py-1 font-mono-tech text-[10px] uppercase tracking-[0.14em] text-white/55"
          >
            {m}
          </span>
        ))}
      </div>

      <div className="relative mt-5 h-0.5 overflow-hidden rounded-full bg-white/5">
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          transition={{
            duration: 2.8 + index * 0.4,
            repeat: Infinity,
            ease: "linear",
            delay: index * 0.5,
          }}
          className="h-full w-1/3 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
        />
      </div>
    </div>
  );
}

export default EvolutionPath;
