"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const PILLARS = [
  {
    numeral: "i",
    title: "Cognitive Mimicry",
    body: "Mimics human thought - from pattern recognition and logical reasoning to creativity and emotional intelligence. It doesn't just compute; it comprehends.",
  },
  {
    numeral: "ii",
    title: "Adaptive Learning",
    body: "Like a human brain, it learns and adapts over time - refining its knowledge and sharpening its reasoning with every interaction.",
  },
  {
    numeral: "iii",
    title: "Contextual Awareness",
    body: "Integrates real-time data, historical context, and user-specific insight to produce responses that are accurate, relevant, and actionable.",
  },
  {
    numeral: "iv",
    title: "Autonomous Execution",
    body: "Beyond understanding, it acts - executing tasks, automating workflows, and making decisions with the autonomy and precision of a human expert.",
  },
  {
    numeral: "v",
    title: "Ethical Alignment",
    body: "A true engine must align with human values. We build systems that are not just intelligent, but ethical, transparent, and beneficial to humanity.",
  },
];

const ease = [0.2, 0.8, 0.2, 1] as const;

export function HumanIntelligenceEngine() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="engine"
      className="relative isolate py-24 md:py-36 scroll-mt-24 overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid bg-grid-fade opacity-40 pointer-events-none" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        {/* Dictionary-specimen header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease }}
          className="max-w-4xl"
        >
          <div className="flex items-center gap-4">
            <span className="font-mono-tech text-[11px] uppercase tracking-[0.28em] text-cyan-300/80">
              § 03
            </span>
            <span className="h-px w-16 bg-gradient-to-r from-cyan-400/40 to-transparent" />
            <span className="font-mono-tech text-[11px] uppercase tracking-[0.24em] text-white/40">
              Definition
            </span>
          </div>

          <h2 className="mt-6 font-serif text-4xl italic leading-[1.05] text-white sm:text-5xl md:text-6xl">
            Human Intelligence Engine
          </h2>

          <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 font-mono-tech text-xs tracking-[0.12em] text-white/40">
            <span>/ˈhjuːmən ɪnˈtɛlɪdʒəns ˈɛndʒɪn/</span>
            <span className="text-cyan-300/60">- noun · system</span>
          </div>

          <p className="mt-8 text-xl leading-relaxed text-white/65 text-balance md:text-2xl">
            A system built to replicate and exceed the cognitive abilities of
            the human mind - processing data, understanding context, reasoning
            through complexity, and deciding with the nuance and depth of a
            human expert.
          </p>
        </motion.div>

        {/* Pillars - two-column editorial list, no boxes */}
        <div className="mt-16 grid grid-cols-1 gap-x-16 gap-y-0 md:grid-cols-2">
          {PILLARS.map((p, i) => (
            <Pillar key={p.title} pillar={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Pillar({
  pillar,
  index,
}: {
  pillar: (typeof PILLARS)[number];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: 0.06 * index, ease }}
      className="group flex gap-5 border-t border-white/10 py-7"
    >
      <span className="mt-1 w-6 shrink-0 font-serif text-lg italic text-cyan-300/70">
        {pillar.numeral}
      </span>
      <div>
        <h3 className="text-xl font-medium tracking-tight text-white">
          {pillar.title}
        </h3>
        <p className="mt-2 text-base leading-relaxed text-white/55">
          {pillar.body}
        </p>
      </div>
    </motion.div>
  );
}

export default HumanIntelligenceEngine;
