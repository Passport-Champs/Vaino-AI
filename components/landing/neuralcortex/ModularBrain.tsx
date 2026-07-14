"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Activity,
  BrainCircuit,
  Database,
  Network,
  RefreshCw,
  Split,
  Users,
  type LucideIcon,
} from "lucide-react";
import { SectionHeader } from "@/components/landing/about/SectionHeader";

type Region = {
  n: string;
  id: string;
  region: string;
  short: string;
  module: string;
  icon: LucideIcon;
  x: number;
  y: number;
  points: { label: string; text: string }[];
  punch: string;
};

const CORE = { x: 200, y: 176 };

const REGIONS: Region[] = [
  {
    n: "01",
    id: "thalamus",
    region: "The Thalamus",
    short: "Thalamus",
    module: "Gating Network",
    icon: Split,
    x: 206,
    y: 148,
    points: [
      {
        label: "Sub-millisecond routing",
        text: "Queries are classified and dispatched in microseconds, ensuring zero wasted compute.",
      },
      {
        label: "Dynamic model selection",
        text: "Mistral for linguistic agility, Gemini for analytical depth, Grok for real-time sentiment - each a specialized cortical region.",
      },
      {
        label: "Adaptive parametric scale",
        text: "Model capacity scales from 7B for speed-sensitive tasks to 1.5T for deep reasoning.",
      },
    ],
    punch:
      "Just as the thalamus filters and routes sensory input, the Gating Network optimizes cognitive load - every query handled by the perfect neural module.",
  },
  {
    n: "02",
    id: "prefrontal",
    region: "The Prefrontal Cortex",
    short: "Prefrontal",
    module: "Reasoning Engine",
    icon: BrainCircuit,
    x: 104,
    y: 118,
    points: [
      {
        label: "Deep reasoning",
        text: "High-stakes queries like financial modeling engage heavyweight models to simulate human-like reasoning chains.",
      },
      {
        label: "Structured logic",
        text: "Symbolic reasoning breaks problems into solvable components, mimicking an expert's step-by-step analysis.",
      },
      {
        label: "Recursive self-correction",
        text: "Multiple models debate and refine outputs in real-time before a single word is delivered.",
      },
    ],
    punch:
      "Vaino computes and thinks. The Reasoning Engine is where it transcends traditional AI, toward AGI.",
  },
  {
    n: "03",
    id: "limbic",
    region: "The Limbic System",
    short: "Limbic",
    module: "Sentiment Stream",
    icon: Activity,
    x: 146,
    y: 240,
    points: [
      {
        label: "Live feed integration",
        text: "News, markets, social media, and regional signals are continuously ingested and analyzed.",
      },
      {
        label: "Geopolitical anomaly detection",
        text: "Live signals are compared against historical baselines to flag emerging anomalies.",
      },
      {
        label: "Predictive jurisdictional modeling",
        text: "Vaino anticipates regulatory, political, and economic shifts before they materialize.",
      },
    ],
    punch:
      "AI with a pulse. The Sentiment Stream ensures Vaino doesn't just know the facts - it understands the mood of the world.",
  },
  {
    n: "04",
    id: "cerebellum",
    region: "The Cerebellum",
    short: "Cerebellum",
    module: "Discriminator Loop",
    icon: RefreshCw,
    x: 300,
    y: 250,
    points: [
      {
        label: "Real-time evaluation",
        text: "When two models conflict, the Discriminator judges which path was better and updates routing weights.",
      },
      {
        label: "Autonomous learning",
        text: "This happens on every cycle with no human intervention - the system self-corrects in real-time.",
      },
      {
        label: "Provenance & audit trails",
        text: "Every decision is signed and preserved, ensuring transparency and accountability.",
      },
    ],
    punch:
      "Vaino learns and evolves. The Discriminator Loop is the secret to its continuous improvement.",
  },
  {
    n: "05",
    id: "hippocampus",
    region: "The Hippocampus",
    short: "Hippocampus",
    module: "Knowledge Synapse",
    icon: Database,
    x: 300,
    y: 168,
    points: [
      {
        label: "Gap detection",
        text: "When Vaino doesn't know something, it triggers a targeted crawl to index new information.",
      },
      {
        label: "Real-time RAG",
        text: "Unlike standard RAG, Vaino actively expands its knowledge base in real-time, not just retrieving pre-indexed data.",
      },
      {
        label: "Provenance & auditability",
        text: "Every new piece of knowledge is signed and tracked for full transparency and trust.",
      },
    ],
    punch:
      "Vaino doesn't just answer questions - it seeks out the answers. Always learning, always growing.",
  },
  {
    n: "06",
    id: "mirror",
    region: "The Mirror-Neuron System",
    short: "Mirror Neuron",
    module: "Human Bias Filter",
    icon: Users,
    x: 90,
    y: 206,
    points: [
      {
        label: "Adaptive persona modeling",
        text: "Vaino calibrates its tone from precise and formal to contextual and conversational.",
      },
      {
        label: "Empathy engine",
        text: "It understands language and intent, so responses are not just accurate but emotionally resonant.",
      },
      {
        label: "Cognitive efficiency",
        text: "Aligning with human communication styles reduces friction, making interaction natural and intuitive.",
      },
    ],
    punch:
      "Vaino computes and connects. The Human Bias Filter makes it feel like a true partner, not just a tool.",
  },
  {
    n: "07",
    id: "executive",
    region: "The Executive Function",
    short: "Executive",
    module: "Agentic Orchestration Matrix",
    icon: Network,
    x: 258,
    y: 92,
    points: [
      {
        label: "Autonomous agentic loops",
        text: "Vaino generates plans and executes them - booking flights, deploying code, running multi-step workflows.",
      },
      {
        label: "Multi-modal synthesis",
        text: "Text, images, and structured data fuse into coherent, actionable insight - nothing left siloed.",
      },
      {
        label: "NLP between models",
        text: "Vaino's models communicate seamlessly, refining outputs for consistency and clarity.",
      },
    ],
    punch:
      "AI that doesn't just advise - it acts. The Agentic Orchestration Matrix is where Vaino enters the realm of true autonomy.",
  },
];

const EDGES: [string, string][] = [
  ["thalamus", "prefrontal"],
  ["thalamus", "executive"],
  ["prefrontal", "mirror"],
  ["mirror", "limbic"],
  ["limbic", "cerebellum"],
  ["cerebellum", "hippocampus"],
  ["hippocampus", "executive"],
];

const byId = (id: string) => REGIONS.find((r) => r.id === id)!;
const ease = [0.2, 0.8, 0.2, 1] as const;

export function ModularBrain() {
  const [activeId, setActiveId] = useState<string>(REGIONS[0].id);
  const active = byId(activeId);

  return (
    <section
      id="cortex"
      className="relative isolate py-24 md:py-32 scroll-mt-24 overflow-hidden"
    >
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader
          index="§ 01"
          eyebrow="The Modular Brain"
          title="A system designed like"
          accent="the human cortex."
          description="The brain is not a monolith - it's a network of specialized regions, each optimized for a function, yet seamlessly interconnected. Vaino's Neural Cortex mirrors this exactly."
        />

        <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-12">
          {/* Interactive cortex map */}
          <div>
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-obsidian-900/40 p-3 sm:p-5">
              <div className="absolute inset-0 bg-grid-fine opacity-30 pointer-events-none" />
              <div
                aria-hidden
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(circle at 50% 48%, rgba(34,211,238,0.08), rgba(4,5,9,0.6) 72%)",
                }}
              />
              <CortexMap
                activeId={activeId}
                onSelect={setActiveId}
              />
            </div>

            <p className="mt-3 flex items-center justify-center gap-2 font-mono-tech text-[10px] uppercase tracking-[0.2em] text-white/40">
              <span className="size-1.5 rounded-full bg-cyan-400 animate-node" />
              Select a region to explore
            </p>

            {/* Mobile / tap-friendly selector */}
            <div className="mt-5 flex gap-2 overflow-x-auto pb-2 lg:hidden">
              {REGIONS.map((r) => {
                const on = r.id === activeId;
                return (
                  <button
                    key={r.id}
                    onClick={() => setActiveId(r.id)}
                    className={`shrink-0 rounded-lg border px-3 py-2 text-left transition ${
                      on
                        ? "border-cyan-400/50 bg-cyan-500/10"
                        : "border-white/10 bg-white/[0.02]"
                    }`}
                  >
                    <span
                      className={`font-mono-tech text-[10px] ${
                        on ? "text-cyan-300" : "text-white/40"
                      }`}
                    >
                      {r.n}
                    </span>
                    <span
                      className={`ml-1.5 text-xs ${
                        on ? "text-white" : "text-white/55"
                      }`}
                    >
                      {r.short}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Detail panel */}
          <div className="relative min-h-[380px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.4, ease }}
                className="glass rounded-2xl p-6 md:p-8"
              >
                <div className="flex items-center justify-between">
                  <div className="inline-flex size-12 items-center justify-center rounded-xl border border-cyan-400/30 bg-cyan-500/10">
                    <active.icon className="size-6 text-cyan-300" />
                  </div>
                  <span className="font-mono-tech text-[11px] tracking-[0.2em] text-white/30">
                    {active.n} / 07
                  </span>
                </div>

                <p className="mt-6 font-serif text-xl italic text-cyan-100/90">
                  {active.region}
                </p>
                <h3 className="mt-1 text-2xl font-medium tracking-tight text-white md:text-3xl">
                  {active.module}
                </h3>

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

                <div className="mt-6 border-l-2 border-cyan-400/40 pl-5">
                  <p className="text-sm leading-relaxed text-white/80">
                    {active.punch}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

function CortexMap({
  activeId,
  onSelect,
}: {
  activeId: string;
  onSelect: (id: string) => void;
}) {
  return (
    <svg
      viewBox="0 0 400 340"
      className="relative w-full"
      role="group"
      aria-label="Interactive neural cortex map"
    >
      <defs>
        <linearGradient id="nc-edge" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#6366f1" stopOpacity="0.25" />
        </linearGradient>
        <radialGradient id="nc-core" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#7ceff8" stopOpacity="1" />
          <stop offset="60%" stopColor="#22d3ee" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
        </radialGradient>
        <filter id="nc-glow" x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="3" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Cortex boundary */}
      <ellipse
        cx="200"
        cy="176"
        rx="178"
        ry="150"
        fill="none"
        stroke="rgba(255,255,255,0.08)"
        strokeWidth="1"
        strokeDasharray="2 6"
      />
      <ellipse
        cx="200"
        cy="176"
        rx="140"
        ry="116"
        fill="none"
        stroke="rgba(255,255,255,0.05)"
        strokeWidth="1"
      />

      {/* Core-to-region spokes */}
      {REGIONS.map((r) => (
        <line
          key={`spoke-${r.id}`}
          x1={CORE.x}
          y1={CORE.y}
          x2={r.x}
          y2={r.y}
          stroke="rgba(255,255,255,0.08)"
          strokeWidth="0.8"
        />
      ))}

      {/* Lateral synapse edges (animated) */}
      {EDGES.map(([a, b], i) => {
        const A = byId(a);
        const B = byId(b);
        return (
          <motion.line
            key={`edge-${i}`}
            x1={A.x}
            y1={A.y}
            x2={B.x}
            y2={B.y}
            stroke="url(#nc-edge)"
            strokeWidth="1"
            initial={{ opacity: 0.2 }}
            animate={{ opacity: [0.2, 0.7, 0.2] }}
            transition={{
              duration: 3 + (i % 3),
              delay: i * 0.25,
              repeat: Infinity,
            }}
          />
        );
      })}

      {/* Core */}
      <circle cx={CORE.x} cy={CORE.y} r="34" fill="url(#nc-core)" />
      <circle
        cx={CORE.x}
        cy={CORE.y}
        r="12"
        fill="none"
        stroke="#7ceff8"
        strokeOpacity="0.5"
      />
      <circle cx={CORE.x} cy={CORE.y} r="4" fill="#ffffff" />

      {/* Region nodes */}
      {REGIONS.map((r) => {
        const on = r.id === activeId;
        return (
          <g
            key={r.id}
            role="button"
            tabIndex={0}
            aria-label={`${r.region} - ${r.module}`}
            aria-pressed={on}
            onClick={() => onSelect(r.id)}
            onMouseEnter={() => onSelect(r.id)}
            onFocus={() => onSelect(r.id)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                onSelect(r.id);
              }
            }}
            className="cursor-pointer outline-none [&:focus-visible>circle:first-child]:stroke-cyan-300"
          >
            {/* Hit area */}
            <circle cx={r.x} cy={r.y} r="22" fill="transparent" />

            {on && (
              <motion.circle
                cx={r.x}
                cy={r.y}
                r="16"
                fill="none"
                stroke="#7ceff8"
                strokeOpacity="0.6"
                initial={{ scale: 0.8, opacity: 0.7 }}
                animate={{ scale: [0.9, 1.25, 0.9], opacity: [0.6, 0.2, 0.6] }}
                transition={{ duration: 2, repeat: Infinity }}
                style={{ transformOrigin: `${r.x}px ${r.y}px` }}
              />
            )}

            <circle
              cx={r.x}
              cy={r.y}
              r={on ? 13 : 10}
              fill={on ? "rgba(34,211,238,0.9)" : "rgba(11,14,22,0.95)"}
              stroke={on ? "#7ceff8" : "rgba(34,211,238,0.4)"}
              strokeWidth={on ? 1.5 : 1}
              filter={on ? "url(#nc-glow)" : undefined}
              className="transition-all duration-300"
            />
            <text
              x={r.x}
              y={r.y + 3.5}
              textAnchor="middle"
              className="pointer-events-none select-none font-mono-tech"
              fontSize="10"
              fontWeight="600"
              fill={on ? "#04121a" : "#7ceff8"}
            >
              {r.n}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

export default ModularBrain;
