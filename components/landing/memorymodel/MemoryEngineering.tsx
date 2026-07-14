"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Minus, Plus, Recycle, Sigma, Waypoints, type LucideIcon } from "lucide-react";
import { SectionHeader } from "@/components/landing/about/SectionHeader";

type Technique = {
  id: string;
  icon: LucideIcon;
  title: string;
  summary: string;
  points: { label: string; text: string }[];
};

const TECHNIQUES: Technique[] = [
  {
    id: "recursive",
    icon: Recycle,
    title: "Recursive Self-Optimization",
    summary: "The system continuously evaluates and refines its own memory usage - every byte used efficiently.",
    points: [
      {
        label: "Memory pruning",
        text: "Irrelevant or redundant data is automatically pruned from active context, keeping memory lean and fast.",
      },
      {
        label: "Dynamic token allocation",
        text: "Tokens are allocated by priority and relevance, so high-value data gets the resources it needs.",
      },
      {
        label: "Feedback-driven refinement",
        text: "Every interaction feeds back into the system for automated, continuous improvement in real-time.",
      },
    ],
  },
  {
    id: "fibonacci",
    icon: Sigma,
    title: "Fibonacci Sequencing",
    summary: "A mathematically optimal way to prioritize and process data for maximum memory efficiency.",
    points: [
      {
        label: "Prioritization by value",
        text: "Data is ranked by its Fibonacci Score, ensuring the most valuable information is processed first.",
      },
      {
        label: "Efficient token parsing",
        text: "High-priority tokens are parsed with minimal latency; low-priority tokens are deprioritized or discarded.",
      },
      {
        label: "Scalable allocation",
        text: "Memory usage scales dynamically, staying efficient even as data grows.",
      },
    ],
  },
  {
    id: "threading",
    icon: Waypoints,
    title: "Sequential Threading",
    summary: "Related data points are linked into a chain, enabling deep, coherent reasoning across long interactions.",
    points: [
      {
        label: "Logical flow maintenance",
        text: "Every step of a reasoning process connects to the last, preventing fragmented or inconsistent outputs.",
      },
      {
        label: "Multi-step coordination",
        text: "Complex workflows are tracked and executed without losing context between steps.",
      },
      {
        label: "Contextual continuity",
        text: "Every response is grounded in the full context of the conversation, making interactions feel natural.",
      },
    ],
  },
];

const ease = [0.2, 0.8, 0.2, 1] as const;

export function MemoryEngineering() {
  const [openId, setOpenId] = useState<string>(TECHNIQUES[0].id);

  return (
    <section
      id="engineering"
      className="relative isolate py-24 md:py-32 scroll-mt-24 overflow-hidden"
    >
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 50% 40% at 20% 30%, rgba(99,102,241,0.10), transparent 60%)",
        }}
      />

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6">
        <SectionHeader
          index="§ 03"
          eyebrow="Under the Hood"
          title="How Vaino refines memory"
          accent="behind the scenes."
          description="Our memory model is revolutionary. Behind the scenes, we continuously refine and optimize the system to push the boundaries of computational memory."
        />

        <div className="mt-14 space-y-3">
          {TECHNIQUES.map((t, i) => {
            const open = t.id === openId;
            const Icon = t.icon;
            return (
              <div
                key={t.id}
                className={`overflow-hidden rounded-2xl border transition-colors ${
                  open
                    ? "border-cyan-400/30 bg-obsidian-800/50"
                    : "border-white/10 bg-white/[0.02]"
                }`}
              >
                <button
                  onClick={() => setOpenId(open ? "" : t.id)}
                  aria-expanded={open}
                  className="flex w-full items-center gap-4 p-5 text-left md:p-6"
                >
                  <span className="font-serif text-2xl italic text-cyan-300/60">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="inline-flex size-10 shrink-0 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-500/[0.08]">
                    <Icon className="size-[18px] text-cyan-300" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-lg font-medium tracking-tight text-white md:text-xl">
                      {t.title}
                    </h3>
                    <p className="mt-0.5 truncate text-sm text-white/50">
                      {t.summary}
                    </p>
                  </div>
                  <span className="inline-flex size-8 shrink-0 items-center justify-center rounded-lg border border-white/10 text-white/60">
                    {open ? (
                      <Minus className="size-4" />
                    ) : (
                      <Plus className="size-4" />
                    )}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {open && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease }}
                      className="overflow-hidden"
                    >
                      <ul className="grid gap-4 px-5 pb-6 md:grid-cols-3 md:px-6">
                        {t.points.map((p) => (
                          <li
                            key={p.label}
                            className="border-l border-cyan-400/30 pl-4"
                          >
                            <span className="font-mono-tech text-[11px] uppercase tracking-[0.12em] text-white/80">
                              {p.label}
                            </span>
                            <p className="mt-1 text-sm leading-relaxed text-white/55">
                              {p.text}
                            </p>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default MemoryEngineering;
