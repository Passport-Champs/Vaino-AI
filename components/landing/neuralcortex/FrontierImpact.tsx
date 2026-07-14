"use client";

import { useState } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Building2,
  FlaskConical,
  UserRound,
  type LucideIcon,
} from "lucide-react";
import { SectionHeader } from "@/components/landing/about/SectionHeader";

const FRONTIER = [
  {
    k: "Research at the bleeding edge",
    v: "Advancing the science of computational intelligence and neuroscience - laying the groundwork for AI → AGI → ASI.",
  },
  {
    k: "Innovation that disrupts",
    v: "A paradigm shift: faster through parallel processing, smarter through model fusion, more efficient through neuroscience.",
  },
  {
    k: "Built for the future",
    v: "Modular expansion, continuous learning, and energy efficiency keep Vaino at the cutting edge as new tech emerges.",
  },
];

type Tab = {
  id: string;
  label: string;
  icon: LucideIcon;
  headline: string;
  points: string[];
  punch: string;
};

const TABS: Tab[] = [
  {
    id: "users",
    label: "For Users",
    icon: UserRound,
    headline: "Intelligence without limits.",
    points: [
      "Seamless interaction - the Human Bias Filter makes every exchange natural and effortless.",
      "Real-time insight - the Sentiment Stream and Knowledge Synapse keep responses contextually relevant.",
      "Autonomous execution - the Agentic Orchestration Matrix acts, automating complex workflows.",
    ],
    punch: "Vaino doesn't just assist - it enables. Achieve more, faster, with less effort.",
  },
  {
    id: "researchers",
    label: "For Researchers",
    icon: FlaskConical,
    headline: "A platform for breakthroughs.",
    points: [
      "Open architecture - integrate new models, data streams, and algorithms for rapid iteration.",
      "Real-time learning - the Discriminator Loop and Knowledge Synapse form a living laboratory.",
      "Collaborative ecosystem - breakthroughs are shared and built upon across a global community.",
    ],
    punch: "A platform that accelerates discovery across AI, AGI, and ASI.",
  },
  {
    id: "industry",
    label: "For Industry",
    icon: Building2,
    headline: "A new standard for intelligence.",
    points: [
      "Setting the bar - a modular, adaptive, efficient architecture as the new gold standard.",
      "Disrupting the status quo - systems faster, smarter, and more capable than anything before.",
      "Inspiring the next generation - a frontier lab drawing the brightest minds in the world.",
    ],
    punch: "The industry is entering a new era of intelligence.",
  },
];

const ease = [0.2, 0.8, 0.2, 1] as const;

export function FrontierImpact() {
  const [activeId, setActiveId] = useState(TABS[0].id);
  const active = TABS.find((t) => t.id === activeId)!;
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="frontier"
      className="relative isolate py-24 md:py-32 scroll-mt-24 overflow-hidden"
    >
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 50% 40% at 80% 0%, rgba(99,102,241,0.10), transparent 60%)",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader
          index="§ 03"
          eyebrow="The Frontier Lab"
          title="Pioneering the future of"
          accent="AI, AGI, and ASI."
          description="We are a frontier lab, pushing the boundaries of what is possible. The Neural Cortex is our first step toward true superintelligence."
        />

        {/* Frontier pillars */}
        <div
          ref={ref}
          className="mt-14 grid grid-cols-1 gap-x-10 gap-y-8 md:grid-cols-3"
        >
          {FRONTIER.map((f, i) => (
            <motion.div
              key={f.k}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * i, ease }}
              className="border-t border-white/10 pt-5"
            >
              <span className="font-serif text-2xl italic text-cyan-300/60">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-2 text-lg font-medium tracking-tight text-white">
                {f.k}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/55">
                {f.v}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Tabbed "Who it's for" */}
        <div className="mt-20">
          <p className="font-mono-tech text-[10px] uppercase tracking-[0.24em] text-white/40">
            Why our approach is revolutionary
          </p>

          <div
            role="tablist"
            aria-label="Who Vaino is for"
            className="mt-5 flex flex-wrap gap-2"
          >
            {TABS.map((t) => {
              const on = t.id === activeId;
              const Icon = t.icon;
              return (
                <button
                  key={t.id}
                  role="tab"
                  aria-selected={on}
                  onClick={() => setActiveId(t.id)}
                  className={`inline-flex items-center gap-2 rounded-xl border px-4 py-2.5 text-sm transition ${
                    on
                      ? "border-cyan-400/40 bg-cyan-500/10 text-white"
                      : "border-white/10 bg-white/[0.02] text-white/60 hover:border-white/20 hover:text-white/90"
                  }`}
                >
                  <Icon
                    className={`size-4 ${on ? "text-cyan-300" : "text-white/40"}`}
                  />
                  {t.label}
                </button>
              );
            })}
          </div>

          <div className="relative mt-6 min-h-[280px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4, ease }}
                className="glass rounded-2xl p-6 md:p-8"
              >
                <h3 className="font-serif text-2xl italic text-white md:text-3xl">
                  {active.headline}
                </h3>
                <ul className="mt-6 grid gap-4 md:grid-cols-3">
                  {active.points.map((p, i) => (
                    <li
                      key={i}
                      className="border-l border-cyan-400/30 pl-4 text-sm leading-relaxed text-white/60"
                    >
                      {p}
                    </li>
                  ))}
                </ul>
                <p className="mt-6 font-serif text-lg italic text-cyan-100/80">
                  {active.punch}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FrontierImpact;
