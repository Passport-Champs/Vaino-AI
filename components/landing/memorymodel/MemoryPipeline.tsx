"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Database, MemoryStick, ScanLine, type LucideIcon } from "lucide-react";
import { SectionHeader } from "@/components/landing/about/SectionHeader";

type Stage = {
  n: string;
  id: string;
  name: string;
  sub: string;
  tag: string;
  stat: string;
  icon: LucideIcon;
  body: string;
  points: { label: string; text: string }[];
};

const STAGES: Stage[] = [
  {
    n: "01",
    id: "ingestion",
    name: "Ingestion",
    sub: "The Real-Time Token Parser",
    tag: "Stage 01 · Ingest",
    stat: "412K tok/s · <8ms",
    icon: ScanLine,
    body: "Raw, unstructured data - news feeds, market signals, social streams, travel alerts - is converted into structured context at lightning speed. Not passive collection; active, intelligent parsing.",
    points: [
      {
        label: "Token parsing at scale",
        text: "412,000 tokens per second at sub-8ms latency - every signal broken down, analyzed, and structured in real-time.",
      },
      {
        label: "Ephemeral but efficient",
        text: "Data is processed and discarded if irrelevant, or passed forward if valuable - keeping the system lean and fast.",
      },
      {
        label: "Fibonacci sequencing",
        text: "Fibonacci-based prioritization ensures the most critical information is processed first, low-priority data pruned.",
      },
    ],
  },
  {
    n: "02",
    id: "context",
    name: "Active Context",
    sub: "The Working Memory",
    tag: "Stage 02 · Reason",
    stat: "10M+ tokens",
    icon: MemoryStick,
    body: "Structured data is held in a massive, multi-turn context window - the cognitive workspace where Vaino thinks, reasons, and acts across long-horizon plans and complex tasks.",
    points: [
      {
        label: "10M+ token window",
        text: "Tracks and reasons across extended conversations and multi-step workflows without losing coherence.",
      },
      {
        label: "Sequential threading",
        text: "Links related data points in a chain so every step of a reasoning process connects to the last.",
      },
      {
        label: "Recursive optimization",
        text: "Continuously re-evaluates and re-prioritizes information based on new inputs and user feedback.",
      },
    ],
  },
  {
    n: "03",
    id: "consolidation",
    name: "Consolidation",
    sub: "The Knowledge Store",
    tag: "Stage 03 · Consolidate",
    stat: "encrypted · persistent",
    icon: Database,
    body: "High-value outputs and user context are stored in an encrypted vector database - retrieval-ready and persistently growing. Not an archive; a living knowledge base that evolves with every interaction.",
    points: [
      {
        label: "Vectorized knowledge base",
        text: "Every piece of information is encoded as a vector, enabling fast, accurate, context-aware semantic recall.",
      },
      {
        label: "Encrypted & persistent",
        text: "Encrypted at rest and in transit; every interaction adds to Vaino's growing intelligence.",
      },
      {
        label: "Automated preference optimization",
        text: "The store refines itself in real-time, tailoring every output to the user's needs.",
      },
    ],
  },
];

const ease = [0.2, 0.8, 0.2, 1] as const;

export function MemoryPipeline() {
  return (
    <section
      id="pipeline"
      className="relative isolate py-24 md:py-32 scroll-mt-24 overflow-hidden"
    >
      <div className="relative mx-auto max-w-5xl px-4 sm:px-6">
        <SectionHeader
          index="§ 01"
          eyebrow="The Pipeline"
          title="A three-stage pipeline -"
          accent="a symphony of efficiency."
          description="Each layer maximizes efficiency and minimizes latency in a recursive, self-optimizing loop, where every stage feeds into and refines the next."
        />

        <div className="relative mt-16">
          {/* Descending spine (runs through the node column) */}
          <div
            aria-hidden
            className="absolute left-7 top-2 bottom-2 w-px -translate-x-1/2 md:left-[28px]"
            style={{
              background:
                "linear-gradient(180deg, transparent, rgba(34,211,238,0.4) 12%, rgba(99,102,241,0.3) 88%, transparent)",
            }}
          />

          <div className="space-y-8 md:space-y-14">
            {STAGES.map((s, i) => (
              <StageRow key={s.id} stage={s} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function StageRow({ stage, index }: { stage: Stage; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-90px" });
  const Icon = stage.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: 0.08 * index, ease }}
      className="relative grid grid-cols-[56px_1fr] gap-4 md:gap-6"
    >
      {/* Spine node with serif number */}
      <div className="relative z-10 flex justify-center">
        <div className="flex size-14 items-center justify-center rounded-full border border-cyan-400/30 bg-obsidian-900 shadow-glow-cyan">
          <span className="font-serif text-2xl italic text-cyan-300">
            {stage.n}
          </span>
        </div>
      </div>

      {/* Panel */}
      <div className="relative rounded-2xl border border-white/10 bg-gradient-to-b from-obsidian-800/60 to-obsidian-900/80 p-5 md:p-7 hover-glow">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />

        <div className="flex flex-wrap items-center gap-3">
          <div className="inline-flex size-11 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-500/[0.08]">
            <Icon className="size-5 text-cyan-300" />
          </div>
          <span className="rounded-md border border-white/10 bg-white/[0.02] px-2 py-1 font-mono-tech text-[10px] uppercase tracking-[0.14em] text-white/55">
            {stage.tag}
          </span>
          <span className="rounded-md border border-cyan-400/20 bg-cyan-500/[0.06] px-2 py-1 font-mono-tech text-[10px] uppercase tracking-[0.14em] text-cyan-300/80">
            {stage.stat}
          </span>
        </div>

        <h3 className="mt-5 text-2xl font-medium tracking-tight text-white md:text-3xl">
          {stage.name}
        </h3>
        <p className="mt-1 font-serif text-lg italic text-cyan-100/80">
          {stage.sub}
        </p>
        <p className="mt-4 text-sm leading-relaxed text-white/55 md:text-base">
          {stage.body}
        </p>

        <ul className="mt-6 space-y-3 border-t border-white/5 pt-5">
          {stage.points.map((p) => (
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
      </div>
    </motion.div>
  );
}

export default MemoryPipeline;
