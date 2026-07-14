"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  ArrowUpRight,
  Gauge,
  RefreshCw,
  Sparkles,
  Target,
  Zap,
  type LucideIcon,
} from "lucide-react";
import Link from "next/link";
import { SectionHeader } from "@/components/landing/about/SectionHeader";

const REASONS: { icon: LucideIcon; title: string; body: string }[] = [
  {
    icon: Zap,
    title: "Real-Time Learning",
    body: "Vaino learns continuously, with no manual retraining or scheduled cycles - always up-to-date, always improving.",
  },
  {
    icon: Gauge,
    title: "Efficiency by Design",
    body: "From Fibonacci sequencing to sequential threading, every aspect is optimized for speed, accuracy, and scalability.",
  },
  {
    icon: Target,
    title: "Context-Aware Intelligence",
    body: "Vaino recalls information, understands it, and uses it in context - enabling deep reasoning, planning, and execution.",
  },
  {
    icon: RefreshCw,
    title: "Self-Optimizing",
    body: "The model refines itself with every interaction, getting smarter, faster, and more efficient over time.",
  },
];

const ease = [0.2, 0.8, 0.2, 1] as const;

export function MemorySuperiority() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="superior"
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
          eyebrow="The Verdict"
          title="Why the memory model is"
          accent="technologically superior."
          description="A memory that is fast, adaptive, and relentlessly efficient - one that learns, reasons, and evolves."
        />

        <div ref={ref} className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {REASONS.map((r, i) => {
            const Icon = r.icon;
            return (
              <motion.div
                key={r.title}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.08 * i, ease }}
                className="flex gap-4 rounded-2xl border border-white/10 bg-gradient-to-b from-obsidian-800/50 to-obsidian-900/70 p-6 hover-glow"
              >
                <div className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-500/[0.08]">
                  <Icon className="size-5 text-cyan-300" />
                </div>
                <div>
                  <h3 className="text-lg font-medium tracking-tight text-white">
                    {r.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-white/55">
                    {r.body}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Closing */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.5, ease }}
          className="mx-auto mt-20 max-w-3xl text-center"
        >
          <div className="divider-synapse mb-10" />
          <p className="font-serif text-2xl italic leading-snug text-white/85 text-balance md:text-3xl">
            The foundation of a new kind of intelligence - one that learns,
            reasons, and evolves, paving the way for the future of AI, AGI, and
            beyond.
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
              href="/neuralcortex"
              className="group inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-6 py-3 text-sm text-white/80 backdrop-blur transition hover:border-white/20 hover:bg-white/[0.06]"
            >
              <Sparkles className="size-4 text-cyan-300" />
              Explore the Neural Cortex
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default MemorySuperiority;
