"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { ArrowRight, Cpu, Sparkles, Zap } from "lucide-react";
import { LiveTicker } from "@/components/landing/LiveTicker";

// SVG-heavy framer-motion (pathLength, rotate on <motion.line>) serializes
// differently between SSR and the first client render under React 19's
// stricter hydration. Render client-only to avoid the mismatch.
const NeuralCortex = dynamic(
  () =>
    import("@/components/landing/NeuralCortex").then((m) => ({
      default: m.NeuralCortex,
    })),
  {
    ssr: false,
    loading: () => <NeuralCortexSkeleton />,
  }
);

function NeuralCortexSkeleton() {
  return (
    <div className="glass-strong relative aspect-square w-full overflow-hidden rounded-2xl">
      <div className="absolute inset-0 bg-grid-fine opacity-40" />
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(34,211,238,0.08), rgba(4,5,9,0.9) 70%)",
        }}
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative size-24">
          <div className="absolute inset-0 rounded-full border border-cyan-400/20" />
          <div className="absolute inset-3 rounded-full border border-cyan-400/30" />
          <div className="absolute inset-6 rounded-full bg-cyan-400/20 blur-md animate-node" />
        </div>
      </div>
    </div>
  );
}

const STATS = [
  { label: "Model Routing", value: "Dynamic" },
  { label: "Context Handling", value: "Adaptive" },
  { label: "Expert Routes", value: "< 1ms" },
  { label: "Memory Stages", value: "3-tier" },
];

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate min-h-[100svh] overflow-hidden pt-36 pb-20 md:pt-40 md:pb-28"
    >
      {/* Grid backdrop */}
      <div className="absolute inset-0 bg-grid bg-grid-fade pointer-events-none" />
      {/* Ambient glow */}
      <div
        aria-hidden
        className="absolute left-1/2 top-0 -translate-x-1/2 h-[120%] w-[80%] rounded-[50%] blur-3xl pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(34,211,238,0.12), transparent 60%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex items-center justify-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 backdrop-blur">
            <span className="relative flex size-1.5">
              <span className="absolute inset-0 animate-ping rounded-full bg-cyan-400/60" />
              <span className="relative size-1.5 rounded-full bg-cyan-400" />
            </span>
            <span className="font-mono-tech text-[11px] uppercase tracking-[0.2em] text-white/60">
              Mixture of Experts · Agentic Orchestration Matrix
            </span>
          </div>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.18, ease: [0.2, 0.8, 0.2, 1] }}
          className="mt-7 text-center text-balance text-4xl sm:text-5xl md:text-7xl font-semibold leading-[1.02] tracking-tight"
        >
          <span className="text-neural">Vaino AI</span>
          <span className="block mt-2 text-white/85">
            The Human Intelligence{" "}
            <span className="relative inline-block">
              <span className="text-synapse">Engine</span>
              <svg
                className="absolute -bottom-2 left-0 w-full"
                height="10"
                viewBox="0 0 200 10"
                fill="none"
              >
                <path
                  d="M2 7 Q 50 1 100 6 T 198 4"
                  stroke="url(#ug)"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient id="ug" x1="0" y1="0" x2="200" y2="0">
                    <stop offset="0%" stopColor="#22d3ee" stopOpacity="0" />
                    <stop offset="50%" stopColor="#22d3ee" />
                    <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </span>
        </motion.h1>

        {/* Subtitle */}
       <motion.p
  initial={{ opacity: 0, y: 14 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7, delay: 0.3 }}
  className="mx-auto mt-7 max-w-2xl text-center text-base md:text-lg text-white/60 text-balance"
>
  Vaino AI is a Human Intelligence Engine powered by a{" "}
  <span className="text-white/85 font-medium">
    first-of-its-kind Agentic Orchestration Matrix (AoM)
  </span>
  . Routing through a{" "}
  <span className="text-white/85 font-medium">
    Mixture of Experts (MoE)
  </span>
  , it fuses live telemetry and user intent for real-time{" "}
  <span className="text-white/85 font-medium">
    Autonomous Agentic Execution
  </span>
  -accelerating the leap from{" "}
  <span className="text-white/85 font-medium">
    AI <span className="text-white/60">to</span> AGI (Artificial General Intelligence)
  </span>
  .
</motion.p>
        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.42 }}
          className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <a
            href="#horizon"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-xl border border-cyan-400/40 bg-gradient-to-b from-cyan-400/30 to-cyan-500/10 px-5 py-2.5 text-sm font-medium text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_10px_30px_-10px_rgba(34,211,238,0.4)] transition hover:from-cyan-400/40"
          >
            <span className="relative z-10">Access the Architecture</span>
            <ArrowRight className="relative z-10 size-4 transition-transform group-hover:translate-x-0.5" />
            <span className="absolute inset-0 bg-[linear-gradient(110deg,transparent,rgba(255,255,255,0.14),transparent)] bg-[length:200%_100%] -translate-x-full group-hover:animate-[shimmer_1.6s_linear_infinite]" />
          </a>
          <a
            href="#architecture"
            className="group inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-5 py-2.5 text-sm text-white/80 backdrop-blur transition hover:border-white/20 hover:bg-white/[0.06]"
          >
            <Cpu className="size-4 text-cyan-300" />
            Read the Whitepaper
          </a>
        </motion.div>

        {/* Visualization + side panels */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.55 }}
          className="mt-14 md:mt-20 grid grid-cols-1 lg:grid-cols-[1fr_1.4fr_1fr] gap-4"
        >
          {/* Left: Live telemetry */}
          <div className="glass rounded-2xl p-4 hairline flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <span className="font-mono-tech text-[10px] uppercase tracking-[0.2em] text-white/40">
                Runtime · Telemetry
              </span>
              <span className="flex items-center gap-1.5 font-mono-tech text-[10px] text-emerald-300/90">
                <span className="size-1.5 rounded-full bg-emerald-400 animate-node" />
                ONLINE
              </span>
            </div>

            <TelemetryRow label="Sparse Gating" value="OPTIMAL" good />
            <TelemetryRow label="Debate Protocol" value="3 / 3 cross-verified" good />
            <TelemetryRow label="Sentiment Delta" value="+0.42σ" good />
            <TelemetryRow label="Expert Route" value="mistral-tier-2" />

            <div className="mt-1 space-y-2">
              <Bar label="Reasoning" value={88} />
              <Bar label="Agentic Exec" value={71} />
              <Bar label="Recall" value={95} />
            </div>
          </div>

          {/* Center: Neural Cortex */}
          <div className="relative order-first lg:order-none">
            <NeuralCortex />
          </div>

          {/* Right: Expert routing */}
          <div className="glass rounded-2xl p-4 hairline flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <span className="font-mono-tech text-[10px] uppercase tracking-[0.2em] text-white/40">
                MoE · Gating Network
              </span>
              <Sparkles className="size-3.5 text-cyan-300/80" />
            </div>
            <ExpertNode name="Reasoning Engine" role="Deep Reasoning" weight={0.46} active />
            <ExpertNode name="Real Time Signal Model" role="Sentiment Stream" weight={0.21} />
            <ExpertNode name="Logic Processor" role="Structured Logic" weight={0.33} />

            <div className="mt-1 rounded-xl border border-white/5 bg-obsidian-900/60 p-3">
              <div className="flex items-center gap-2">
                <Zap className="size-3.5 text-ultra-400" />
                <span className="font-mono-tech text-[10px] uppercase tracking-[0.18em] text-white/50">
                  Adaptive Parametric Scale
                </span>
              </div>
              <div className="mt-2 flex items-center justify-between text-[11px] text-white/60">
                <span className="font-mono-tech">7B</span>
                <div className="relative flex-1 mx-3 h-1 rounded-full bg-white/5 overflow-hidden">
                  <motion.div
                    initial={{ width: "20%" }}
                    animate={{ width: ["20%", "88%", "44%", "92%", "62%"] }}
                    transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute inset-y-0 left-0 bg-gradient-to-r from-cyan-400 to-ultra-500"
                  />
                </div>
                <span className="font-mono-tech">1.5T</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02]"
        >
          {STATS.map((s) => (
            <div
              key={s.label}
              className="flex flex-col gap-1 bg-obsidian-900/60 px-4 py-4 sm:py-5"
            >
              <span className="font-mono-tech text-[10px] uppercase tracking-[0.18em] text-white/40">
                {s.label}
              </span>
              <span className="text-xl sm:text-2xl font-semibold tracking-tight text-white">
                {s.value}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Live ticker */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-6"
        >
          <LiveTicker />
        </motion.div>
      </div>
    </section>
  );
}

function TelemetryRow({
  label,
  value,
  good,
}: {
  label: string;
  value: string;
  good?: boolean;
}) {
  return (
    <div className="flex items-center justify-between rounded-lg border border-white/5 bg-obsidian-900/50 px-3 py-2">
      <span className="font-mono-tech text-[11px] uppercase tracking-[0.12em] text-white/50">
        {label}
      </span>
      <span
        className={`font-mono-tech text-[11px] ${
          good ? "text-emerald-300" : "text-cyan-300"
        }`}
      >
        {value}
      </span>
    </div>
  );
}

function Bar({ label, value }: { label: string; value: number }) {
  return (
    <div>
      <div className="flex items-center justify-between text-[11px]">
        <span className="font-mono-tech uppercase tracking-[0.14em] text-white/45">
          {label}
        </span>
        <span className="font-mono-tech text-white/60">{value}%</span>
      </div>
      <div className="mt-1 h-1 overflow-hidden rounded-full bg-white/5">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${value}%` }}
          transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
          className="h-full bg-gradient-to-r from-cyan-400 to-ultra-500"
        />
      </div>
    </div>
  );
}

function ExpertNode({
  name,
  role,
  weight,
  active,
}: {
  name: string;
  role: string;
  weight: number;
  active?: boolean;
}) {
  return (
    <div
      className={`relative rounded-xl border p-3 transition ${
        active
          ? "border-cyan-400/30 bg-cyan-500/5"
          : "border-white/5 bg-obsidian-900/50"
      }`}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span
            className={`size-1.5 rounded-full ${
              active ? "bg-cyan-400 animate-node" : "bg-white/30"
            }`}
          />
          <span className="text-sm font-medium text-white/90">{name}</span>
        </div>
        <span className="font-mono-tech text-[11px] text-white/50">
          {weight.toFixed(2)}
        </span>
      </div>
      <div className="mt-1 font-mono-tech text-[10px] uppercase tracking-[0.14em] text-white/40">
        {role}
      </div>
      <div className="mt-2 h-0.5 overflow-hidden rounded-full bg-white/5">
        <div
          className={`h-full ${
            active
              ? "bg-gradient-to-r from-cyan-400 to-ultra-500"
              : "bg-white/20"
          }`}
          style={{ width: `${weight * 100}%` }}
        />
      </div>
    </div>
  );
}

export default Hero;