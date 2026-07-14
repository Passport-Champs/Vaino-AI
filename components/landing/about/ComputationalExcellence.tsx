"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { SectionHeader } from "@/components/landing/about/SectionHeader";

const PILLARS = [
  {
    title: "Mathematics",
    sub: "The Language of Intelligence",
    body: "Mathematics is the foundation of all intelligence, human or machine. Advanced mathematical models unlock new levels of reasoning and problem-solving.",
  },
  {
    title: "Technology",
    sub: "The Enabler",
    body: "The bridge between theory and reality. From our Agentic Orchestration Matrix to our Autonomous Agentic Loops, we push the limits of what is possible.",
  },
  {
    title: "Artificial Intelligence",
    sub: "The Catalyst",
    body: "The key to unlocking the next era of human progress - augmenting human capability, automating complex tasks, and reasoning like never before.",
  },
];

const ease = [0.2, 0.8, 0.2, 1] as const;

export function ComputationalExcellence() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="obsession"
      className="relative isolate py-24 md:py-36 scroll-mt-24 overflow-hidden"
    >
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader
          index="§ 05"
          eyebrow="Our Obsession"
          title="The pursuit of"
          accent="Computational Excellence"
          description="We are obsessed with the idea that technology can be more than functional - it can be transformative. We turn mathematics, algorithms, and data into systems that think, create, and innovate."
        />

        <div
          ref={ref}
          className="mt-16 grid grid-cols-1 gap-y-12 md:grid-cols-3 md:gap-x-0"
        >
          {PILLARS.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.12 * i, ease }}
              className={`md:px-10 ${
                i > 0 ? "md:border-l md:border-white/10" : "md:pl-0"
              } ${i === PILLARS.length - 1 ? "md:pr-0" : ""}`}
            >
              <span className="font-serif text-5xl italic text-cyan-300/50">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-5 text-2xl font-medium tracking-tight text-white">
                {p.title}
              </h3>
              <p className="mt-1 font-serif text-lg italic text-white/50">
                {p.sub}
              </p>
              <p className="mt-4 text-base leading-relaxed text-white/55">
                {p.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ComputationalExcellence;
