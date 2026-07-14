"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  GraduationCap,
  HeartPulse,
  Globe,
  ShieldCheck,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";
import { SectionHeader } from "@/components/landing/about/SectionHeader";

type Industry = {
  id: string;
  icon: LucideIcon;
  name: string;
  tagline: string;
  points: { label: string; text: string }[];
};

const INDUSTRIES: Industry[] = [
  {
    id: "healthcare",
    icon: HeartPulse,
    name: "Healthcare",
    tagline: "The end of diagnostic limitations.",
    points: [
      {
        label: "Precision medicine",
        text: "Analyzing genetic, environmental, and lifestyle data to personalize treatment, predict disease before symptoms, and accelerate drug discovery.",
      },
      {
        label: "Global health monitoring",
        text: "Integrating real-time data from wearables, hospitals, and labs to detect and respond to threats - from pandemics to antibiotic resistance.",
      },
      {
        label: "Accessible intelligence",
        text: "Democratizing medical expertise, bringing high-quality insight to underserved regions where specialists are scarce.",
      },
    ],
  },
  {
    id: "climate",
    icon: Globe,
    name: "Climate Science",
    tagline: "The battle against time.",
    points: [
      {
        label: "Predictive modeling",
        text: "Simulating climate systems with unprecedented accuracy - extreme weather, sea-level rise, and ecosystem collapse with years of lead time.",
      },
      {
        label: "Optimized solutions",
        text: "Analyzing energy, agriculture, and infrastructure data to find the most effective strategies for reducing emissions and restoring ecosystems.",
      },
      {
        label: "Global coordination",
        text: "Facilitating international collaboration so governments, NGOs, and corporations align as a unified front.",
      },
    ],
  },
  {
    id: "education",
    icon: GraduationCap,
    name: "Education",
    tagline: "The democratization of knowledge.",
    points: [
      {
        label: "Personalized learning",
        text: "Adapting to each student's style, pace, and interests, delivering education that maximizes engagement and retention.",
      },
      {
        label: "Global classroom",
        text: "Translating and localizing content to break down language and cultural barriers - world-class education for everyone.",
      },
      {
        label: "Lifelong learning",
        text: "Evolving with users, providing continuous upskilling and reskilling for the jobs of the future.",
      },
    ],
  },
  {
    id: "economics",
    icon: TrendingUp,
    name: "Economics",
    tagline: "The optimization of prosperity.",
    points: [
      {
        label: "Predictive markets",
        text: "Forecasting market movements, supply-chain disruptions, and policy impacts by reading economic, geopolitical, and social signals.",
      },
      {
        label: "Automated innovation",
        text: "Accelerating R&D, optimizing logistics, and automating routine tasks to boost productivity and growth.",
      },
      {
        label: "Inclusive growth",
        text: "Identifying and addressing inequality, helping decision-makers promote fairness and opportunity.",
      },
    ],
  },
  {
    id: "defense",
    icon: ShieldCheck,
    name: "Defense & Security",
    tagline: "The shield of the future.",
    points: [
      {
        label: "Threat detection",
        text: "Monitoring global data streams to identify and neutralize cyber threats, terrorism, and disinformation in real-time.",
      },
      {
        label: "Strategic foresight",
        text: "Simulating geopolitical scenarios so organizations anticipate and mitigate risks before they materialize.",
      },
      {
        label: "Ethical safeguards",
        text: "Designed with ethical constraints - a force for stability and peace, not destruction.",
      },
    ],
  },
];

const ease = [0.2, 0.8, 0.2, 1] as const;

export function RealWorldImpact() {
  const [activeId, setActiveId] = useState(INDUSTRIES[0].id);
  const active = INDUSTRIES.find((i) => i.id === activeId)!;

  return (
    <section
      id="impact"
      className="relative isolate py-24 md:py-32 scroll-mt-24 overflow-hidden"
    >
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader
          index="§ 03"
          eyebrow="Real-World Impact"
          title="How AGI will"
          accent="change the world."
          description="AGI is the next frontier - and it will solve many of the world's most pressing problems. A look at how Vaino's AGI transforms industries, economies, and societies."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-[300px_1fr] lg:gap-12">
          {/* Master list (desktop) */}
          <div className="hidden lg:block">
            <ul className="space-y-1">
              {INDUSTRIES.map((ind, i) => {
                const on = ind.id === activeId;
                const Icon = ind.icon;
                return (
                  <li key={ind.id}>
                    <button
                      onClick={() => setActiveId(ind.id)}
                      className={`group flex w-full items-center gap-3 rounded-xl border px-4 py-3.5 text-left transition ${
                        on
                          ? "border-cyan-400/40 bg-cyan-500/10"
                          : "border-white/10 bg-white/[0.02] hover:border-white/20"
                      }`}
                    >
                      <span
                        className={`inline-flex size-9 items-center justify-center rounded-lg border transition ${
                          on
                            ? "border-cyan-400/40 bg-cyan-500/10"
                            : "border-white/10 bg-white/[0.02]"
                        }`}
                      >
                        <Icon
                          className={`size-4 ${on ? "text-cyan-300" : "text-white/50"}`}
                        />
                      </span>
                      <span className="flex-1">
                        <span className="font-mono-tech text-[10px] text-white/40">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span
                          className={`block text-sm ${on ? "text-white" : "text-white/60"}`}
                        >
                          {ind.name}
                        </span>
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Master chips (mobile) */}
          <div className="flex gap-2 overflow-x-auto pb-2 lg:hidden">
            {INDUSTRIES.map((ind) => {
              const on = ind.id === activeId;
              return (
                <button
                  key={ind.id}
                  onClick={() => setActiveId(ind.id)}
                  className={`shrink-0 rounded-lg border px-3 py-2 text-xs transition ${
                    on
                      ? "border-cyan-400/50 bg-cyan-500/10 text-white"
                      : "border-white/10 bg-white/[0.02] text-white/55"
                  }`}
                >
                  {ind.name}
                </button>
              );
            })}
          </div>

          {/* Detail */}
          <div className="relative min-h-[340px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.4, ease }}
                className="glass rounded-2xl p-6 md:p-8"
              >
                <div className="flex items-center gap-3">
                  <div className="inline-flex size-12 items-center justify-center rounded-xl border border-cyan-400/30 bg-cyan-500/10">
                    <active.icon className="size-6 text-cyan-300" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-medium tracking-tight text-white">
                      {active.name}
                    </h3>
                    <p className="font-serif text-lg italic text-cyan-100/80">
                      {active.tagline}
                    </p>
                  </div>
                </div>

                <ul className="mt-6 space-y-4">
                  {active.points.map((p) => (
                    <li key={p.label} className="flex gap-3">
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-cyan-400" />
                      <span>
                        <span className="font-mono-tech text-[11px] uppercase tracking-[0.12em] text-white/80">
                          {p.label}
                        </span>
                        <span className="mt-0.5 block text-sm leading-relaxed text-white/55">
                          {p.text}
                        </span>
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RealWorldImpact;
