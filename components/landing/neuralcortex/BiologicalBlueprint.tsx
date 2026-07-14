"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { SectionHeader } from "@/components/landing/about/SectionHeader";

const PRINCIPLES = [
  {
    stat: "∥",
    statLabel: "Parallel",
    title: "Modularity",
    body: "Specialized modules - Gating Network, Reasoning Engine, Sentiment Stream - each optimized for one function, yet integrated into a unified system. Like the brain, Vaino processes many tasks in parallel and scales horizontally: new cortical regions can be added without disrupting the whole.",
  },
  {
    stat: "∞",
    statLabel: "Plastic",
    title: "Cognitive Neuroscience",
    body: "Not just inspired by the brain - built on its principles. Vaino's architecture mimics neural information flow, and like a brain rewiring itself with experience, it continuously updates its routing weights and knowledge base, evolving with every interaction.",
  },
  {
    stat: "20W",
    statLabel: "Efficiency",
    title: "Energy Efficiency",
    body: "The human brain runs on roughly 20 watts, yet outperforms supercomputers at countless tasks. Vaino's Neural Cortex is designed with the same discipline - maximum performance with minimal computational overhead.",
  },
];

const ease = [0.2, 0.8, 0.2, 1] as const;

export function BiologicalBlueprint() {
  return (
    <section
      id="blueprint"
      className="relative isolate py-24 md:py-32 scroll-mt-24 overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid bg-grid-fade opacity-40 pointer-events-none" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader
          index="§ 02"
          eyebrow="Biological Blueprint"
          title="Modeled on the"
          accent="greatest machine in existence."
          description="The human brain is the most complex and efficient computational system known to exist. By mimicking its structure and principles, Vaino aims to achieve the same feats - at machine scale."
        />

        <div className="mt-16 border-t border-white/10">
          {PRINCIPLES.map((p, i) => (
            <Principle key={p.title} p={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Principle({
  p,
  index,
}: {
  p: (typeof PRINCIPLES)[number];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.1 * index, ease }}
      className="grid grid-cols-1 items-center gap-6 border-b border-white/10 py-10 md:grid-cols-[minmax(0,220px)_1fr] md:gap-12"
    >
      <div className="flex items-baseline gap-4 md:flex-col md:items-start md:gap-1">
        <span className="font-serif text-6xl italic leading-none text-neural md:text-7xl">
          {p.stat}
        </span>
        <span className="font-mono-tech text-[10px] uppercase tracking-[0.24em] text-cyan-300/70">
          {p.statLabel}
        </span>
      </div>
      <div>
        <h3 className="text-2xl font-medium tracking-tight text-white md:text-3xl">
          {p.title}
        </h3>
        <p className="mt-3 max-w-2xl text-base leading-relaxed text-white/55 md:text-lg">
          {p.body}
        </p>
      </div>
    </motion.div>
  );
}

export default BiologicalBlueprint;
