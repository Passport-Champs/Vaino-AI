"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { SectionHeader } from "@/components/landing/about/SectionHeader";

const REASONS = [
  {
    title: "A Global Hub",
    body: "The gateway to the Americas - a crossroads of Latin America, Europe, and the United States. A strategic vantage point for attracting top-tier global talent and serving a worldwide user base.",
  },
  {
    title: "Innovation Without Borders",
    body: "Entrepreneurial energy and an embrace of technological progress make Miami the place to scale rapidly and efficiently. A city that rewards ambition.",
  },
  {
    title: "A Cultural Melting Pot",
    body: "Miami's multicultural fabric mirrors our vision for Vaino - a global intelligence that understands and adapts to diverse perspectives, languages, and needs.",
  },
  {
    title: "The Future is Here",
    body: "An emerging tech hub with a fast-growing ecosystem of startups, investors, and innovators. We plant our flag at the heart of the next wave of technological evolution.",
  },
];

const ease = [0.2, 0.8, 0.2, 1] as const;

export function WhyMiami() {
  return (
    <section
      id="miami"
      className="relative isolate py-24 md:py-36 scroll-mt-24 overflow-hidden"
    >
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader
          index="§ 01"
          eyebrow="Home Base"
          title="Why Miami,"
          accent="Florida?"
          description="Miami is home - and it's a statement. A city where cultures, ideas, and ambitions collide, embodying the global, diverse, and dynamic spirit of Vaino."
        />

        <div className="mt-16 border-t border-white/10">
          {REASONS.map((r, i) => (
            <Reason key={r.title} index={i} title={r.title} body={r.body} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Reason({
  index,
  title,
  body,
}: {
  index: number;
  title: string;
  body: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.08 * index, ease }}
      className="group grid grid-cols-1 gap-4 border-b border-white/10 py-8 md:grid-cols-[5rem_1fr_1.5fr] md:gap-8 md:py-10 transition-colors hover:bg-white/[0.015]"
    >
      <span className="font-serif text-3xl italic text-cyan-300/70 md:text-4xl">
        {String(index + 1).padStart(2, "0")}
      </span>
      <h3 className="text-2xl font-medium tracking-tight text-white md:text-3xl">
        {title}
      </h3>
      <p className="max-w-xl text-base leading-relaxed text-white/55 md:text-lg">
        {body}
      </p>
    </motion.div>
  );
}

export default WhyMiami;
