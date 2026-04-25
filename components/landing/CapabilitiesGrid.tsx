"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Activity,
  Binary,
  BrainCog,
  Compass,
  Eye,
  Gauge,
  GitBranch,
  Layers,
  Network,
  Radar,
  Route,
  Scissors,
  SlidersHorizontal,
  Waves,
  type LucideIcon,
} from "lucide-react";

type Capability = {
  id: string;
  title: string;
  tag: string;
  level: 1 | 2 | 3;
  icon: LucideIcon;
  summary: string;
  /** bento span — col × row */
  span?: string;
};

const CAPABILITIES: Capability[] = [
  {
    id: "routing",
    title: "Dynamic Expert Routing",
    tag: "MoE / Gating",
    level: 3,
    icon: Route,
    summary:
      "Each query is routed in sub-millisecond time to the most capable model for the task — by domain, complexity, and required depth.",
    span: "md:col-span-2",
  },
  {
    id: "sentiment",
    title: "Sentiment-Weighted Logic",
    tag: "Live Feed",
    level: 2,
    icon: Waves,
    summary:
      "Factors in live data — news, markets, regional signals — to weight decisions against what is actually happening right now.",
  },
  {
    id: "debate",
    title: "Recursive Self-Correction",
    tag: "Debate Protocol",
    level: 3,
    icon: GitBranch,
    summary:
      "Multiple models cross-check each other's outputs before a response is returned. Disagreements are resolved, not suppressed.",
  },
  {
    id: "multimodal",
    title: "Multi-Modal Synthesis",
    tag: "Vision · NLP · Struct",
    level: 2,
    icon: Layers,
    summary:
      "Processes text, images, and structured data together — translating mixed inputs into a single coherent action or recommendation.",
  },
  {
    id: "agentic",
    title: "Autonomous Agentic Loops",
    tag: "Executor",
    level: 3,
    icon: Network,
    summary:
      "Goes beyond generating a plan — actually executes it. Runs code, calls APIs, navigates workflows, handles bookings. No hand-holding required.",
    span: "md:col-span-2",
  },
  {
    id: "jurisdictional",
    title: "Predictive Jurisdictional Modeling",
    tag: "Geopolitical",
    level: 3,
    icon: Compass,
    summary:
      "Tracks regulatory, political, and economic shifts to surface downstream impact on travel, assets, and operations before they materialize.",
  },
  {
    id: "parametric",
    title: "Parametric Fluidity",
    tag: "7B → 1.5T",
    level: 2,
    icon: Gauge,
    summary:
      "Dynamically scales active model capacity — lighter for speed-sensitive tasks, heavier when depth and precision are required.",
  },
  {
    id: "bias",
    title: 'The "Human Bias" Filter',
    tag: "Persona Layer",
    level: 2,
    icon: SlidersHorizontal,
    summary:
      "Adjust how Vaino communicates — from precise and formal to contextual and conversational — depending on who is asking and why.",
    span: "md:col-span-2",
  },
  {
    id: "agi",
    title: "Adaptive World Model",
    tag: "Context Engine",
    level: 3,
    icon: BrainCog,
    summary:
      "Every session refines Vaino's understanding of your context, objectives, and preferences — building a working model that improves with use.",
  },
  {
    id: "lora",
    title: "Dynamic LoRA Switching",
    tag: "Adapters",
    level: 2,
    icon: Binary,
    summary:
      "Swaps domain-specific fine-tunes in real time — from legal reasoning to itinerary optimization — without reloading the underlying model.",
  },
  {
    id: "anomaly",
    title: "Geopolitical Anomaly Detection",
    tag: "Sentiment Δ",
    level: 3,
    icon: Radar,
    summary:
      "Compares live signals against historical baselines to flag emerging anomalies — relevant for travel risk, market exposure, and supply chain decisions.",
  },
  {
    id: "pruning",
    title: "Context-Aware Token Pruning",
    tag: "Context Hygiene",
    level: 1,
    icon: Scissors,
    summary:
      "Keeps the active context window lean by automatically removing irrelevant information mid-session, preserving speed without losing signal.",
  },
  {
    id: "intent",
    title: 'The "Human Intent" Interface',
    tag: "Intent → Query",
    level: 3,
    icon: Eye,
    summary:
      "Parses imprecise, natural language requests into structured queries the underlying models can act on — bridging human intent and machine execution.",
  },
];

export function CapabilitiesGrid() {
  return (
    <section
      id="capabilities"
      className="relative isolate py-24 md:py-32 scroll-mt-24"
    >
      <div className="absolute inset-0 bg-grid bg-grid-fade opacity-60 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="§ 02 · Core Capabilities"
          title="Thirteen capabilities. One unified engine."
          description="Each module is independently routable and purpose-built — but coordinated through a single orchestration layer. Together they define what intelligent execution actually looks like."
        />

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 auto-rows-[minmax(180px,auto)]">
          {CAPABILITIES.map((c, i) =>
            c.id === "bias" ? (
              <BiasFilterCard key={c.id} cap={c} index={i} />
            ) : (
              <CapabilityCard key={c.id} cap={c} index={i} />
            )
          )}
        </div>
      </div>
    </section>
  );
}

function CapabilityCard({ cap, index }: { cap: Capability; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const Icon = cap.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: Math.min(index * 0.04, 0.4), ease: [0.2, 0.8, 0.2, 1] }}
      className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-obsidian-800/60 to-obsidian-900/80 p-5 hover-glow ${cap.span ?? ""}`}
    >
      {/* Hover sheen */}
      <div className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background:
            "radial-gradient(600px circle at var(--x,50%) var(--y,50%), rgba(34,211,238,0.08), transparent 45%)",
        }}
      />

      {/* Corner marks */}
      <CornerMarks />

      {/* Header row */}
      <div className="flex items-start justify-between">
        <div className="inline-flex size-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03]">
          <Icon className="size-[18px] text-cyan-300" />
        </div>
        <LevelBadge level={cap.level} />
      </div>

      {/* Body */}
      <h3 className="mt-6 text-lg font-semibold tracking-tight text-white text-balance">
        {cap.title}
      </h3>
      <p className="mt-2 text-sm text-white/55 text-balance">{cap.summary}</p>

      {/* Footer / meta */}
      <div className="mt-5 flex items-center justify-between pt-4 border-t border-white/5">
        <span className="font-mono-tech text-[10px] uppercase tracking-[0.18em] text-white/40">
          {cap.tag}
        </span>
        <span className="font-mono-tech text-[10px] text-white/30 group-hover:text-cyan-300 transition">
          ↗ {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      {/* Hover: synaptic weights */}
      <div className="pointer-events-none absolute bottom-3 right-3 flex gap-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        {[0.32, 0.71, 0.44, 0.88, 0.19, 0.62].map((w, i) => (
          <div
            key={i}
            className="w-0.5 rounded-full bg-gradient-to-t from-cyan-400/80 to-ultra-500/80"
            style={{ height: `${w * 24}px` }}
          />
        ))}
      </div>
    </motion.div>
  );
}

function BiasFilterCard({ cap, index }: { cap: Capability; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [value, setValue] = useState(62);
  const Icon = cap.icon;

  const persona =
    value < 20
      ? "Cold Logic"
      : value < 40
        ? "Analytical"
        : value < 60
          ? "Balanced"
          : value < 80
            ? "Conversational"
            : "Empathetic";

  const temperature = (0.1 + value / 120).toFixed(2);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: Math.min(index * 0.04, 0.4), ease: [0.2, 0.8, 0.2, 1] }}
      className={`group relative overflow-hidden rounded-2xl border border-cyan-400/20 bg-gradient-to-br from-obsidian-800/80 via-obsidian-900/80 to-obsidian-900 p-5 hover-glow ${cap.span ?? ""}`}
    >
      <CornerMarks highlight />

      {/* Accent gradient */}
      <div
        className="pointer-events-none absolute -top-24 -right-24 size-64 rounded-full blur-3xl opacity-40"
        style={{
          background:
            "radial-gradient(circle, rgba(99,102,241,0.4), transparent 60%)",
        }}
      />

      <div className="relative flex items-start justify-between">
        <div className="inline-flex size-10 items-center justify-center rounded-xl border border-cyan-400/30 bg-cyan-500/10">
          <Icon className="size-[18px] text-cyan-300" />
        </div>
        <LevelBadge level={cap.level} />
      </div>

      <h3 className="relative mt-6 text-lg font-semibold tracking-tight text-white text-balance">
        {cap.title}
      </h3>
      <p className="relative mt-2 text-sm text-white/55 text-balance">
        {cap.summary}
      </p>

      {/* Interactive slider */}
      <div className="relative mt-5 rounded-xl border border-white/10 bg-obsidian-900/70 p-4">
        <div className="flex items-center justify-between">
          <span className="font-mono-tech text-[10px] uppercase tracking-[0.18em] text-white/40">
            Persona · T={temperature}
          </span>
          <span className="font-mono-tech text-[11px] text-cyan-300">
            {persona}
          </span>
        </div>

        <div className="mt-3">
          <div className="relative h-1.5 rounded-full bg-white/5">
            <div
              className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-ultra-500 via-cyan-400 to-cyan-300 transition-[width] duration-200"
              style={{ width: `${value}%` }}
            />
            <div
              className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 transition-[left] duration-200"
              style={{ left: `${value}%` }}
            >
              <div className="size-4 rounded-full border-2 border-white bg-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.7)]" />
            </div>
          </div>
          <input
            type="range"
            min={0}
            max={100}
            value={value}
            onChange={(e) => setValue(Number(e.target.value))}
            className="absolute inset-0 h-full w-full cursor-pointer opacity-0"
            aria-label="Human Bias Filter"
          />
        </div>

        <div className="mt-2.5 flex items-center justify-between font-mono-tech text-[10px] uppercase tracking-[0.14em] text-white/40">
          <span>Logic</span>
          <span className="hidden sm:inline">Balanced</span>
          <span>Empathy</span>
        </div>
      </div>

      <div className="relative mt-4 flex items-center justify-between pt-4 border-t border-white/5">
        <span className="font-mono-tech text-[10px] uppercase tracking-[0.18em] text-white/40">
          {cap.tag}
        </span>
        <span className="flex items-center gap-1.5 font-mono-tech text-[10px] text-emerald-300">
          <Activity className="size-3" />
          LIVE TUNING
        </span>
      </div>
    </motion.div>
  );
}

function LevelBadge({ level }: { level: 1 | 2 | 3 }) {
  const labels = { 1: "L1", 2: "L2", 3: "L3" };
  return (
    <div className="flex items-center gap-1.5 rounded-md border border-white/10 bg-white/[0.03] px-1.5 py-1">
      <div className="flex gap-0.5">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className={`size-1 rounded-full ${
              i <= level ? "bg-cyan-400" : "bg-white/20"
            }`}
          />
        ))}
      </div>
      <span className="font-mono-tech text-[10px] uppercase tracking-[0.16em] text-white/60">
        {labels[level]}
      </span>
    </div>
  );
}

function CornerMarks({ highlight = false }: { highlight?: boolean }) {
  const color = highlight ? "border-cyan-300/60" : "border-white/20";
  return (
    <>
      <div className={`absolute top-2 left-2 size-2 border-t border-l ${color}`} />
      <div className={`absolute top-2 right-2 size-2 border-t border-r ${color}`} />
      <div className={`absolute bottom-2 left-2 size-2 border-b border-l ${color}`} />
      <div className={`absolute bottom-2 right-2 size-2 border-b border-r ${color}`} />
    </>
  );
}

function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
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
      </h2>
      <p className="mt-4 text-base md:text-lg text-white/55 text-balance">
        {description}
      </p>
      <div className="divider-synapse mt-8" />
    </div>
  );
}

export default CapabilitiesGrid;
