"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { SectionHeader } from "@/components/landing/about/SectionHeader";

const PRINCIPLES = [
  {
    title: "The Power of Modularity",
    lead: "The brain is not a monolith - it is a network of specialized regions working in harmony. Vaino's architecture mirrors this, dividing intelligence into purpose-built components that synergize as a whole.",
    points: [
      "Independent yet interconnected - each module contributes to a collective intelligence greater than the sum of its parts.",
      "Scalable - new modules integrate seamlessly, expanding capability without disrupting existing systems.",
      "Efficient through specialization - specific tasks assigned to specialized modules minimize redundancy.",
    ],
  },
  {
    title: "The Flywheel of Synthetic Data",
    lead: "AGI requires more than data - it requires intelligence. Vaino's synthetic data flywheel ensures the system doesn't just consume information, it generates it.",
    points: [
      "Self-improving data - reinforcement learning and adversarial training create data that challenges and refines its own models.",
      "Human-guided refinement - autonomous learning stays aligned with real-world needs and values.",
      "Exponential growth - the more Vaino interacts and refines, the faster it evolves. Not linear progress; exponential ascent.",
    ],
  },
  {
    title: "The Global Perspective",
    lead: "Vaino is a global project, with input from around the world - built with humanity, not in isolation.",
    points: [
      "Diverse intelligence - integrating cultures, disciplines, and backgrounds makes the system more robust and nuanced.",
      "Localized expertise - a global workforce ensures Vaino adapts to regional language, culture, and regulation.",
      "Collaborative innovation - co-created with the world, so the outcome is inclusive, ethical, and universally beneficial.",
    ],
  },
];

const ease = [0.2, 0.8, 0.2, 1] as const;

export function UniqueApproach() {
  return (
    <section
      id="approach"
      className="relative isolate py-24 md:py-32 scroll-mt-24 overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid bg-grid-fade opacity-40 pointer-events-none" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader
          index="§ 02"
          eyebrow="The Ingenuity of Inevitability"
          title="Why our approach"
          accent="is unique."
          description="We are not following the crowd; we are forging our own path. Our approach to AGI rests on three core principles."
        />

        <div className="mt-16 space-y-0">
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
  const inView = useInView(ref, { once: true, margin: "-90px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.08 * index, ease }}
      className="grid grid-cols-1 gap-6 border-t border-white/10 py-10 md:grid-cols-[auto_1fr] md:gap-12 md:py-12"
    >
      <div className="flex items-start gap-4 md:w-64">
        <span className="font-serif text-5xl italic leading-none text-cyan-300/50 md:text-6xl">
          {String(index + 1).padStart(2, "0")}
        </span>
        <h3 className="font-serif text-2xl italic leading-tight text-white md:mt-1 md:text-3xl">
          {p.title}
        </h3>
      </div>
      <div>
        <p className="max-w-2xl text-base leading-relaxed text-white/60 md:text-lg">
          {p.lead}
        </p>
        <ul className="mt-5 space-y-2.5">
          {p.points.map((pt, i) => (
            <li key={i} className="flex gap-3">
              <span className="mt-2 size-1.5 shrink-0 rounded-full bg-cyan-400" />
              <span className="text-sm leading-relaxed text-white/55">{pt}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

export default UniqueApproach;
