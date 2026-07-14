"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Cpu,
  Radar,
  ScanLine,
  ShieldCheck,
  Sparkles,
  Users,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import Link from "next/link";
import { SectionHeader } from "@/components/landing/about/SectionHeader";

const FLYWHEEL = [
  {
    n: "01",
    name: "Ingest",
    body: "The system consumes vast streams of data - news, markets, social signals, user interactions - converting raw information into structured knowledge through intelligent curation.",
  },
  {
    n: "02",
    name: "Synthesize",
    body: "Ingested data becomes actionable intelligence. Multi-modal synthesis fuses text, structured data, and real-time signals into coherent, context-aware insight.",
  },
  {
    n: "03",
    name: "Critique",
    body: "Vaino does not accept its own outputs. Every response is cross-validated and refined through recursive self-correction - a silent, high-speed debate between models.",
  },
  {
    n: "04",
    name: "Refine",
    body: "Through human-in-the-loop reinforcement and synthetic data flywheels, Vaino learns from every interaction. Not a one-time update - a perpetual ascent.",
  },
];

const PHASE2: { icon: LucideIcon; k: string; v: string }[] = [
  {
    icon: Cpu,
    k: "Modular Intelligence",
    v: "Independent yet interconnected modules, each optimized for a cognitive task, unified under one orchestration layer.",
  },
  {
    icon: Workflow,
    k: "Dynamic Reasoning",
    v: "A Reasoning Engine for deep, multi-step cognition - complex problems tackled with the nuance of a human expert.",
  },
  {
    icon: Radar,
    k: "Real-Time Adaptation",
    v: "Through Sentiment-Weighted Logic and anomaly detection, Vaino doesn't just respond to the world - it anticipates it.",
  },
];

const PHASE3: { icon: LucideIcon; k: string; v: string }[] = [
  {
    icon: Users,
    k: "Human-in-the-Loop",
    v: "Every interaction refines Vaino's understanding of human intent, keeping the system aligned with human values and goals.",
  },
  {
    icon: Sparkles,
    k: "Cognitive Augmentation",
    v: "By automating routine tasks and executing complex workflows, it frees humans for creativity, strategy, and innovation.",
  },
  {
    icon: ShieldCheck,
    k: "Ethical Alignment",
    v: "AGI built with guardrails. Our Constitution Layer ensures Vaino operates within ethical boundaries and societal norms.",
  },
];

const ease = [0.2, 0.8, 0.2, 1] as const;

export function PhasedAscent() {
  return (
    <section
      id="pathway"
      className="relative isolate py-24 md:py-32 scroll-mt-24 overflow-hidden"
    >
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader
          index="§ 01"
          eyebrow="The Pathway"
          title="A phased ascent"
          accent="to AGI."
          description="A methodical climb - each phase building on the last with unshakable precision, refining and evolving with every cycle."
        />

        {/* Phase 1 - flywheel */}
        <PhaseBlock index="Phase 1" title="The Continuous Learning Loop" delay={0}>
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
            <div className="mx-auto w-full max-w-[320px]">
              <Flywheel />
            </div>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {FLYWHEEL.map((s) => (
                <div
                  key={s.n}
                  className="rounded-xl border border-white/5 bg-obsidian-900/50 p-4"
                >
                  <div className="flex items-baseline gap-2">
                    <span className="font-serif text-lg italic text-cyan-300/70">
                      {s.n}
                    </span>
                    <h4 className="text-base font-medium tracking-tight text-white">
                      {s.name}
                    </h4>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-white/55">
                    {s.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </PhaseBlock>

        {/* Phase 2 */}
        <PhaseBlock
          index="Phase 2"
          title="The Cognitive Architecture"
          delay={0.05}
        >
          <p className="mb-6 max-w-2xl text-sm leading-relaxed text-white/55 md:text-base">
            Replicating the brain's architecture not in form, but in function.
            Vaino's{" "}
            <Link
              href="/neuralcortex"
              className="text-cyan-300 underline-offset-4 hover:underline"
            >
              Neural Cortex
            </Link>{" "}
            is the first step - modular, self-optimizing, and parallel.
          </p>
          <PointRow points={PHASE2} />
        </PhaseBlock>

        {/* Phase 3 */}
        <PhaseBlock
          index="Phase 3"
          title="The Human-AI Symbiosis"
          delay={0.1}
        >
          <p className="mb-6 max-w-2xl text-sm leading-relaxed text-white/55 md:text-base">
            AGI as a multiplier for human intelligence - systems that augment
            human potential, enabling collaboration between man and machine at
            unprecedented scale.
          </p>
          <PointRow points={PHASE3} />
        </PhaseBlock>
      </div>
    </section>
  );
}

function PhaseBlock({
  index,
  title,
  delay,
  children,
}: {
  index: string;
  title: string;
  delay: number;
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-90px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease }}
      className="mt-14 border-t border-white/10 pt-10 first:mt-16"
    >
      <div className="mb-8 flex items-baseline gap-4">
        <span className="font-mono-tech text-[11px] uppercase tracking-[0.24em] text-cyan-300/80">
          {index}
        </span>
        <h3 className="text-2xl font-medium tracking-tight text-white md:text-3xl">
          {title}
        </h3>
      </div>
      {children}
    </motion.div>
  );
}

function PointRow({
  points,
}: {
  points: { icon: LucideIcon; k: string; v: string }[];
}) {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
      {points.map((p) => {
        const Icon = p.icon;
        return (
          <div
            key={p.k}
            className="rounded-2xl border border-white/10 bg-gradient-to-b from-obsidian-800/50 to-obsidian-900/70 p-5 hover-glow"
          >
            <div className="inline-flex size-10 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-500/[0.08]">
              <Icon className="size-[18px] text-cyan-300" />
            </div>
            <h4 className="mt-4 text-base font-medium tracking-tight text-white">
              {p.k}
            </h4>
            <p className="mt-1.5 text-sm leading-relaxed text-white/55">{p.v}</p>
          </div>
        );
      })}
    </div>
  );
}

/* 4-stage flywheel: circular nodes with directional arrows + rotating highlight */
function Flywheel() {
  const cx = 160;
  const cy = 160;
  const r = 110;
  // 4 nodes at top, right, bottom, left
  const angles = [-90, 0, 90, 180];
  const nodes = angles.map((deg) => {
    const rad = (deg * Math.PI) / 180;
    return { x: cx + Math.cos(rad) * r, y: cy + Math.sin(rad) * r };
  });

  return (
    <svg viewBox="0 0 320 320" className="w-full" aria-hidden>
      <defs>
        <linearGradient id="agi-fw" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#22d3ee" />
          <stop offset="100%" stopColor="#6366f1" />
        </linearGradient>
        <radialGradient id="agi-fw-core" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#7ceff8" stopOpacity="0.9" />
          <stop offset="70%" stopColor="#22d3ee" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Ring track */}
      <circle
        cx={cx}
        cy={cy}
        r={r}
        fill="none"
        stroke="rgba(255,255,255,0.1)"
        strokeWidth="1"
      />

      {/* Rotating highlight arc */}
      <motion.circle
        cx={cx}
        cy={cy}
        r={r}
        fill="none"
        stroke="url(#agi-fw)"
        strokeWidth="3"
        strokeLinecap="round"
        strokeDasharray={`${2 * Math.PI * r * 0.25} ${2 * Math.PI * r}`}
        animate={{ rotate: 360 }}
        transition={{ duration: 5, ease: "linear", repeat: Infinity }}
        style={{ transformOrigin: `${cx}px ${cy}px` }}
      />

      {/* Directional arrowheads between nodes (clockwise) */}
      {[-45, 45, 135, 225].map((deg, i) => {
        const rad = (deg * Math.PI) / 180;
        const ax = cx + Math.cos(rad) * r;
        const ay = cy + Math.sin(rad) * r;
        return (
          <circle
            key={i}
            cx={ax}
            cy={ay}
            r="2.5"
            fill="#7ceff8"
            opacity="0.6"
          />
        );
      })}

      {/* Core */}
      <circle cx={cx} cy={cy} r="42" fill="url(#agi-fw-core)" />
      <text
        x={cx}
        y={cy - 2}
        textAnchor="middle"
        className="font-mono-tech"
        fontSize="9"
        fill="#7ceff8"
        letterSpacing="1.5"
      >
        FLYWHEEL
      </text>
      <text
        x={cx}
        y={cy + 12}
        textAnchor="middle"
        className="font-mono-tech"
        fontSize="8"
        fill="rgba(255,255,255,0.45)"
        letterSpacing="1"
      >
        of intelligence
      </text>

      {/* Nodes */}
      {nodes.map((n, i) => (
        <g key={i}>
          <circle
            cx={n.x}
            cy={n.y}
            r="24"
            fill="rgba(11,14,22,0.95)"
            stroke="url(#agi-fw)"
            strokeWidth="1.5"
          />
          <text
            x={n.x}
            y={n.y - 2}
            textAnchor="middle"
            className="font-mono-tech"
            fontSize="11"
            fontWeight="600"
            fill="#7ceff8"
          >
            {String(i + 1).padStart(2, "0")}
          </text>
          <text
            x={n.x}
            y={n.y + 10}
            textAnchor="middle"
            className="font-mono-tech"
            fontSize="7.5"
            fill="rgba(255,255,255,0.6)"
            letterSpacing="0.5"
          >
            {FLYWHEEL[i].name.toUpperCase()}
          </text>
        </g>
      ))}
    </svg>
  );
}

export default PhasedAscent;
