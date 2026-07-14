"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, Globe2, Lightbulb, Sparkles } from "lucide-react";
import Link from "next/link";
import { SectionHeader } from "@/components/landing/about/SectionHeader";

const PILLARS = [
  {
    icon: Lightbulb,
    title: "The Right Approach",
    tag: "Ingenuity over imitation",
    body: "Most labs follow the same playbook - bigger models, more data, brute-force scaling. We are rewriting the rules with a modular, brain-inspired architecture, a continuous learning flywheel, and efficiency by design. We are not building a bigger AI - we are building a smarter one.",
  },
  {
    icon: Globe2,
    title: "The Right Team",
    tag: "Global brilliance",
    body: "AGI is a collaborative masterpiece of human ingenuity. Our team spans continents and disciplines - engineers, neuroscientists, psychologists, economists, philosophers, linguists, ethicists, physicists, mathematicians - united by a shared obsession with intelligence.",
  },
  {
    icon: Sparkles,
    title: "The Right Vision",
    tag: "Intelligence as a force for good",
    body: "Technology is a force for good, and AGI will be a resource for the people, not a tool for the few. We are dedicated to solving global problems, democratizing intelligence, and shaping the future of cognition itself.",
  },
];

const INEVITABILITY = [
  ["The flywheel is spinning", "Our continuous learning loop is already in motion - refining, expanding, evolving with every interaction."],
  ["The architecture is scalable", "A modular, brain-inspired design ensures every advancement compounds the last."],
  ["The team is unstoppable", "A global network of visionaries dedicated to achieving AGI - and achieving it right."],
];

const ease = [0.2, 0.8, 0.2, 1] as const;

export function WhyVaino() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="why"
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
          eyebrow="The Frontier Lab"
          title="Why Vaino is the lab"
          accent="that will solve AGI."
          description="Not just another AI company - a frontier lab, a center of innovation, and a global movement pushing the boundaries of what is possible."
        />

        {/* Pillars */}
        <div ref={ref} className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-3">
          {PILLARS.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 * i, ease }}
                className="rounded-2xl border border-white/10 bg-gradient-to-b from-obsidian-800/60 to-obsidian-900/80 p-6 hover-glow"
              >
                <div className="inline-flex size-11 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-500/[0.08]">
                  <Icon className="size-5 text-cyan-300" />
                </div>
                <span className="mt-5 block font-mono-tech text-[10px] uppercase tracking-[0.16em] text-cyan-300/70">
                  {p.tag}
                </span>
                <h3 className="mt-1 text-xl font-medium tracking-tight text-white">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/55">
                  {p.body}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Inevitability + CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4, ease }}
          className="mt-16 rounded-3xl border border-white/10 glass-strong p-8 md:p-12 text-center"
        >
          <span className="font-mono-tech text-[10px] uppercase tracking-[0.24em] text-white/40">
            The inevitability of Vaino's AGI
          </span>
          <h3 className="mx-auto mt-4 max-w-3xl font-serif text-2xl italic leading-snug text-white text-balance md:text-4xl">
            The path to AGI is not a question of if, but when.
          </h3>

          <div className="mt-10 grid grid-cols-1 gap-6 text-left sm:grid-cols-3">
            {INEVITABILITY.map(([k, v]) => (
              <div key={k} className="border-t border-cyan-400/30 pt-4">
                <h4 className="text-sm font-medium tracking-tight text-white">
                  {k}
                </h4>
                <p className="mt-1.5 text-sm leading-relaxed text-white/55">{v}</p>
              </div>
            ))}
          </div>

          <p className="mx-auto mt-10 max-w-2xl font-serif text-xl italic text-white/80 text-balance md:text-2xl">
            The world is on the cusp of a cognitive revolution - and Vaino is
            leading the charge.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
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

export default WhyVaino;
