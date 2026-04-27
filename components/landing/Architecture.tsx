"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  BrainCircuit,
  Database,
  Ear,
  Infinity as InfinityIcon,
  MemoryStick,
  Search,
  Shield,
  Swords,
  type LucideIcon,
} from "lucide-react";

export function Architecture() {
  return (
    <section
      id="architecture"
      className="relative isolate py-24 md:py-32 scroll-mt-24 overflow-hidden"
    >
      {/* Vertical spine glow */}
      <div
        aria-hidden
        className="absolute left-1/2 top-0 bottom-0 w-px pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, transparent, rgba(34,211,238,0.3) 20%, rgba(99,102,241,0.2) 70%, transparent)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="§ 03 · System Architecture"
          title="Built to learn."
          highlight="Continuously, in real time."
          description="Vaino uses a three-stage memory pipeline backed by automated preference optimization. Outputs improve with every session - no manual retraining, no scheduled cycles."
        />

        {/* Stage 1: Three-stage memory */}
        <div className="mt-16 md:mt-20">
          <SubHeader
            index="3.1"
            title="Three-Stage Memory Pipeline"
            caption="Input Layer → Active Context → Knowledge Store"
          />
          <MemoryPipeline />
        </div>

        {/* Stage 2: Self-Evolving DPO */}
        <div className="mt-20 md:mt-28">
          <SubHeader
            index="3.2"
            title="Automated Preference Optimization"
            caption="DPO · continuous routing refinement"
          />
          <DpoFlow />
        </div>

        {/* Stage 3: Adversarial Synthesis + RAG */}
        <div className="mt-20 md:mt-28 grid grid-cols-1 lg:grid-cols-2 gap-5">
          <AdversarialCard />
          <RagCard />
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Memory Pipeline                                                     */
/* ------------------------------------------------------------------ */

const STAGES: {
  id: string;
  icon: LucideIcon;
  name: string;
  tag: string;
  body: string;
  meta: string[];
}[] = [
  {
    id: "sensory",
    icon: Ear,
    name: "Input Layer",
    tag: "Stage 01 · Ingestion",
    body: "Ingests live data - news feeds, market signals, travel alerts, social streams - and converts it into structured context in real time.",
    meta: ["412k tok/s", "<8ms latency", "ephemeral"],
  },
  {
    id: "working",
    icon: MemoryStick,
    name: "Active Context",
    tag: "Stage 02 · Session Memory",
    body: "Holds the full active session state across a large context window - enabling multi-step reasoning, long-horizon planning, and complex task coordination.",
    meta: ["10M+ tokens", "multi-turn", "session-scope"],
  },
  {
    id: "longterm",
    icon: Database,
    name: "Knowledge Store",
    tag: "Stage 03 · Consolidation",
    body: "High-value outputs and user context are stored in an encrypted vector database - retrieval-ready and persistently growing with every interaction.",
    meta: ["encrypted", "vector KB", "persistent"],
  },
];

function MemoryPipeline() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref} className="relative">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-0">
        {STAGES.map((s, i) => (
          <motion.div
            key={s.id}
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 * i }}
            className="relative"
          >
            <StageCard stage={s} index={i} />
            {/* Connector between cards (desktop only) */}
            {i < STAGES.length - 1 && (
              <div className="hidden md:block absolute top-1/2 -right-4 w-8 -translate-y-1/2 z-10">
                <svg viewBox="0 0 32 10" className="w-full">
                  <path
                    d="M0 5 H 28"
                    stroke="url(#mp-edge)"
                    strokeWidth="1.2"
                    className="animate-dash"
                  />
                  <path
                    d="M24 1 L 30 5 L 24 9"
                    fill="none"
                    stroke="#22d3ee"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <defs>
                    <linearGradient id="mp-edge" x1="0" x2="32" y1="0" y2="0">
                      <stop offset="0%" stopColor="#22d3ee" />
                      <stop offset="100%" stopColor="#6366f1" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Consolidation arrow back */}
      <div className="mt-8 flex items-center justify-center">
        <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-obsidian-900/70 px-4 py-1.5 backdrop-blur">
          <InfinityIcon className="size-3.5 text-cyan-300" />
          <span className="font-mono-tech text-[11px] uppercase tracking-[0.18em] text-white/55">
            Retrieval loop · context-aware recall on every request
          </span>
        </div>
      </div>
    </div>
  );
}

function StageCard({
  stage,
  index,
}: {
  stage: (typeof STAGES)[number];
  index: number;
}) {
  const Icon = stage.icon;
  return (
    <div className="relative h-full rounded-2xl border border-white/10 bg-gradient-to-b from-obsidian-800/60 to-obsidian-900/80 p-5 overflow-hidden hover-glow md:mr-10">
      {/* Index watermark */}
      <span
        aria-hidden
        className="absolute -right-3 -top-4 font-mono-tech text-[88px] font-bold text-white/[0.03] select-none"
      >
        {String(index + 1).padStart(2, "0")}
      </span>

      {/* Pulse line */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />

      <div className="relative flex items-start justify-between">
        <div className="inline-flex size-11 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-500/[0.08]">
          <Icon className="size-5 text-cyan-300" />
        </div>
        <span className="font-mono-tech text-[10px] uppercase tracking-[0.18em] text-white/45">
          {stage.tag}
        </span>
      </div>

      <h4 className="relative mt-6 text-xl font-semibold tracking-tight text-white">
        {stage.name}
      </h4>
      <p className="relative mt-2 text-sm text-white/55 text-balance">
        {stage.body}
      </p>

      <div className="relative mt-5 flex flex-wrap gap-1.5">
        {stage.meta.map((m) => (
          <span
            key={m}
            className="rounded-md border border-white/10 bg-white/[0.02] px-2 py-1 font-mono-tech text-[10px] uppercase tracking-[0.14em] text-white/55"
          >
            {m}
          </span>
        ))}
      </div>

      {/* Activity bar */}
      <div className="relative mt-5 h-0.5 overflow-hidden rounded-full bg-white/5">
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          transition={{
            duration: 2.8 + index * 0.4,
            repeat: Infinity,
            ease: "linear",
            delay: index * 0.5,
          }}
          className="h-full w-1/3 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
        />
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* DPO Flow                                                            */
/* ------------------------------------------------------------------ */

function DpoFlow() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
      className="relative rounded-2xl border border-white/10 bg-gradient-to-b from-obsidian-800/40 to-obsidian-900/70 p-5 md:p-8 overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid-fine opacity-30 pointer-events-none" />

      <div className="relative grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-8">
        {/* Narrative */}
        <div className="flex flex-col justify-center">
          <span className="font-mono-tech text-[10px] uppercase tracking-[0.18em] text-cyan-300">
            DPO · Discriminator Loop
          </span>
          <h4 className="mt-3 text-2xl md:text-3xl font-semibold tracking-tight text-white text-balance">
            When models disagree, the system self-corrects.
          </h4>
          <p className="mt-4 text-sm md:text-base text-white/60 text-balance">
            When two models produce conflicting outputs, a Discriminator
            evaluates which path produced the better result and updates the
            routing weights accordingly - automatically, on every cycle,
            with no human intervention required.
          </p>

          <ul className="mt-5 space-y-2">
            {[
              ["Discriminator", "Evaluates output quality in real time"],
              ["Preference Δ", "Recorded as a routing weight update"],
              ["Gating Network", "Rebalanced toward higher-quality paths"],
            ].map(([k, v]) => (
              <li
                key={k}
                className="flex items-center gap-3 rounded-lg border border-white/5 bg-obsidian-900/60 px-3 py-2"
              >
                <span className="size-1.5 rounded-full bg-cyan-400" />
                <span className="font-mono-tech text-[11px] uppercase tracking-[0.14em] text-white/70 w-32 shrink-0">
                  {k}
                </span>
                <span className="text-sm text-white/55">{v}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Diagram */}
        <div className="relative min-h-[340px]">
          <svg viewBox="0 0 520 340" className="w-full h-full">
            <defs>
              <linearGradient id="dpo-edge" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#22d3ee" />
                <stop offset="100%" stopColor="#6366f1" />
              </linearGradient>
              <filter id="softGlow2" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="2" result="b" />
                <feMerge>
                  <feMergeNode in="b" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Query node */}
            <FlowNode x={30} y={150} label="QUERY" sub="user intent" accent />

            {/* Expert nodes */}
            <FlowNode x={200} y={70} label="GEMINI" sub="reasoning" />
            <FlowNode x={200} y={230} label="MISTRAL" sub="logic" />

            {/* Discriminator */}
            <FlowNode x={370} y={150} label="DISCRIM." sub="preference Δ" accent />

            {/* Gating network */}
            <FlowNode x={490} y={150} label="GATING" sub="weights" small />

            {/* Edges */}
            <AnimatedEdge d="M92 155 Q 150 110 162 85" />
            <AnimatedEdge d="M92 165 Q 150 215 162 235" />
            <AnimatedEdge d="M238 80 Q 300 110 332 145" />
            <AnimatedEdge d="M238 230 Q 300 195 332 165" />
            <AnimatedEdge d="M408 150 L 462 150" />

            {/* Feedback loop back to query */}
            <path
              d="M490 120 Q 400 20 60 30 Q 20 30 30 140"
              fill="none"
              stroke="url(#dpo-edge)"
              strokeWidth="1"
              strokeDasharray="3 5"
              opacity="0.6"
            />
            <text
              x="260"
              y="22"
              className="font-mono-tech"
              fontSize="9"
              fill="#7ceff8"
              opacity="0.75"
              letterSpacing="2"
            >
              FEEDBACK · ROUTING UPDATE
            </text>
          </svg>

          {/* Legend */}
          <div className="absolute bottom-0 right-0 flex items-center gap-3 font-mono-tech text-[10px] uppercase tracking-[0.14em] text-white/40">
            <span className="flex items-center gap-1.5">
              <span className="size-1.5 rounded-full bg-cyan-400" /> forward
            </span>
            <span className="flex items-center gap-1.5">
              <span className="size-1.5 rounded-full bg-ultra-400" /> backward
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function FlowNode({
  x,
  y,
  label,
  sub,
  accent,
  small,
}: {
  x: number;
  y: number;
  label: string;
  sub?: string;
  accent?: boolean;
  small?: boolean;
}) {
  const w = small ? 50 : 64;
  const h = small ? 40 : 54;
  const stroke = accent ? "#22d3ee" : "rgba(255,255,255,0.2)";
  const fill = accent ? "rgba(34,211,238,0.08)" : "rgba(11,14,22,0.9)";

  return (
    <g>
      <rect
        x={x}
        y={y - h / 2}
        width={w}
        height={h}
        rx={10}
        fill={fill}
        stroke={stroke}
        strokeWidth="1"
        filter={accent ? "url(#softGlow2)" : undefined}
      />
      <text
        x={x + w / 2}
        y={y - 2}
        textAnchor="middle"
        className="font-mono-tech"
        fontSize="10"
        fill="#ffffff"
        fontWeight="600"
        letterSpacing="1"
      >
        {label}
      </text>
      {sub && (
        <text
          x={x + w / 2}
          y={y + 12}
          textAnchor="middle"
          className="font-mono-tech"
          fontSize="8"
          fill="rgba(255,255,255,0.5)"
          letterSpacing="0.8"
        >
          {sub}
        </text>
      )}
    </g>
  );
}

function AnimatedEdge({ d }: { d: string }) {
  return (
    <>
      <path
        d={d}
        fill="none"
        stroke="rgba(255,255,255,0.1)"
        strokeWidth="1.2"
      />
      <path
        d={d}
        fill="none"
        stroke="url(#dpo-edge)"
        strokeWidth="1.2"
        className="animate-dash"
      />
    </>
  );
}

/* ------------------------------------------------------------------ */
/* Adversarial + RAG cards                                             */
/* ------------------------------------------------------------------ */

function AdversarialCard() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
      className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-obsidian-800/60 to-obsidian-900/80 p-6"
    >
      <div className="flex items-center justify-between">
        <div className="inline-flex items-center gap-2">
          <div className="inline-flex size-9 items-center justify-center rounded-xl border border-ultra-400/30 bg-ultra-500/10">
            <Swords className="size-[18px] text-ultra-400" />
          </div>
          <span className="font-mono-tech text-[10px] uppercase tracking-[0.18em] text-white/55">
            § 3.3 · Internal Critique Loop
          </span>
        </div>
      </div>
      <h4 className="mt-5 text-xl font-semibold tracking-tight text-white">
        The system critiques its own outputs before they reach you.
      </h4>
      <p className="mt-2 text-sm text-white/55 text-balance">
        Before returning a result, Vaino runs an internal critique pass - a
        generator/discriminator loop that stress-tests outputs for
        consistency, accuracy, and logical coherence.
      </p>

      {/* GAN visual */}
      <div className="mt-6 relative h-40 rounded-xl border border-white/5 bg-obsidian-900/60 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-around px-6">
          <AdvNode label="GENERATOR" color="cyan" />
          <div className="relative flex-1 mx-4 h-px">
            <motion.div
              className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
              animate={{ x: ["0%", "200%"] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-transparent via-ultra-400 to-transparent"
              animate={{ x: ["0%", "-200%"] }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                ease: "linear",
                delay: 0.5,
              }}
            />
            <div className="absolute inset-0 border-t border-dashed border-white/10" />
          </div>
          <AdvNode label="DISCRIM." color="ultra" />
        </div>

        <div className="absolute bottom-2 left-3 font-mono-tech text-[10px] uppercase tracking-[0.16em] text-white/35">
          Critique → Refine → Critique
        </div>
        <div className="absolute top-2 right-3 flex items-center gap-1.5 font-mono-tech text-[10px] text-cyan-300/80">
          <span className="size-1.5 rounded-full bg-cyan-400 animate-node" />
          loop 14.2k/s
        </div>
      </div>
    </motion.div>
  );
}

function AdvNode({
  label,
  color,
}: {
  label: string;
  color: "cyan" | "ultra";
}) {
  const bg =
    color === "cyan"
      ? "border-cyan-400/30 bg-cyan-500/10 text-cyan-300"
      : "border-ultra-400/30 bg-ultra-500/10 text-ultra-400";
  return (
    <div
      className={`inline-flex flex-col items-center justify-center rounded-xl border px-4 py-3 ${bg}`}
    >
      <div className="relative size-10">
        <div className="absolute inset-0 rounded-full border border-current opacity-40" />
        <div className="absolute inset-2 rounded-full border border-current opacity-70" />
        <div className="absolute inset-[14px] rounded-full bg-current" />
      </div>
      <span className="mt-2 font-mono-tech text-[10px] uppercase tracking-[0.18em]">
        {label}
      </span>
    </div>
  );
}

function RagCard() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: 0.1 }}
      className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-obsidian-800/60 to-obsidian-900/80 p-6"
    >
      <div className="flex items-center justify-between">
        <div className="inline-flex items-center gap-2">
          <div className="inline-flex size-9 items-center justify-center rounded-xl border border-cyan-400/30 bg-cyan-500/10">
            <Search className="size-[18px] text-cyan-300" />
          </div>
          <span className="font-mono-tech text-[10px] uppercase tracking-[0.18em] text-white/55">
            § 3.4 · Adaptive Knowledge Retrieval
          </span>
        </div>
      </div>
      <h4 className="mt-5 text-xl font-semibold tracking-tight text-white">
        When Vaino doesn{"'"}t know something, it goes and finds it.
      </h4>
      <p className="mt-2 text-sm text-white/55 text-balance">
        Standard RAG retrieves from what{"'"}s already indexed. Vaino detects
        gaps in its own knowledge base and triggers a targeted crawl -
        indexing new information directly into the knowledge store before
        responding.
      </p>

      <ol className="mt-6 space-y-2.5">
        {[
          {
            icon: BrainCircuit,
            step: "01",
            label: "Identifies a knowledge gap in the response path",
          },
          {
            icon: Search,
            step: "02",
            label: "Triggers targeted retrieval and vectorization",
          },
          {
            icon: Database,
            step: "03",
            label: "Indexes new knowledge into the knowledge store",
          },
          {
            icon: Shield,
            step: "04",
            label: "Provenance signed · audit trail preserved",
          },
        ].map(({ icon: Icon, step, label }) => (
          <li
            key={step}
            className="flex items-center gap-3 rounded-lg border border-white/5 bg-obsidian-900/60 px-3 py-2"
          >
            <span className="font-mono-tech text-[10px] text-white/40 w-6">
              {step}
            </span>
            <Icon className="size-3.5 text-cyan-300 shrink-0" />
            <span className="text-sm text-white/70">{label}</span>
          </li>
        ))}
      </ol>
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/* Section headers                                                     */
/* ------------------------------------------------------------------ */

function SectionHeader({
  eyebrow,
  title,
  highlight,
  description,
}: {
  eyebrow: string;
  title: string;
  highlight: string;
  description: string;
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1">
        <span className="size-1.5 rounded-full bg-cyan-400 animate-node" />
        <span className="font-mono-tech text-[10px] uppercase tracking-[0.22em] text-white/60">
          {eyebrow}
        </span>
      </div>
      <h2 className="mt-5 text-3xl md:text-5xl font-semibold tracking-tight text-white text-balance">
        {title}
        <span className="block mt-1 text-synapse">{highlight}</span>
      </h2>
      <p className="mt-4 text-base md:text-lg text-white/55 text-balance">
        {description}
      </p>
      <div className="divider-synapse mt-8" />
    </div>
  );
}

function SubHeader({
  index,
  title,
  caption,
}: {
  index: string;
  title: string;
  caption: string;
}) {
  return (
    <div className="mb-8 flex flex-col md:flex-row md:items-end md:justify-between gap-3">
      <div>
        <span className="font-mono-tech text-[10px] uppercase tracking-[0.2em] text-cyan-300/80">
          § {index}
        </span>
        <h3 className="mt-1 text-2xl md:text-3xl font-semibold tracking-tight text-white">
          {title}
        </h3>
      </div>
      <p className="font-mono-tech text-[11px] uppercase tracking-[0.15em] text-white/40">
        {caption}
      </p>
    </div>
  );
}

export default Architecture;
