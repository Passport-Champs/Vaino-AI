"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ListTree, Scan, SlidersHorizontal, type LucideIcon } from "lucide-react";
import { SectionHeader } from "@/components/landing/about/SectionHeader";

const STEPS: {
  icon: LucideIcon;
  label: string;
  body: string;
}[] = [
  {
    icon: Scan,
    label: "Context-Aware Token Parsing",
    body: "Input tokens are parsed in the context of the user's history and the current session, so every response is grounded in the full picture.",
  },
  {
    icon: SlidersHorizontal,
    label: "Dynamic Memory Prioritization",
    body: "Recall is prioritized by recency, relevance, and user preferences - the most important information always at the forefront.",
  },
  {
    icon: ListTree,
    label: "Sequential Reasoning Chains",
    body: "For complex, multi-step queries, related data points and logical steps are linked into a coherent, comprehensive response.",
  },
];

const ease = [0.2, 0.8, 0.2, 1] as const;

export function RetrievalLoop() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="retrieval"
      className="relative isolate py-24 md:py-32 scroll-mt-24 overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid bg-grid-fade opacity-40 pointer-events-none" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader
          index="§ 02"
          eyebrow="The Retrieval Loop"
          title="Context-aware recall,"
          accent="on every request."
          description="Every time you make a request, Vaino evaluates the context, your history, and the current state of the world to deliver the most relevant, accurate, and actionable response."
        />

        <div
          ref={ref}
          className="mt-16 grid grid-cols-1 items-center gap-12 lg:grid-cols-[auto_1fr] lg:gap-16"
        >
          {/* Cyclic diagram */}
          <div className="mx-auto w-full max-w-[320px]">
            <LoopDiagram inView={inView} />
          </div>

          {/* Steps */}
          <div className="space-y-3">
            {STEPS.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.15 * i, ease }}
                  className="flex gap-4 rounded-xl border border-white/5 bg-obsidian-900/50 p-5 hover-glow"
                >
                  <div className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-500/[0.08]">
                    <Icon className="size-5 text-cyan-300" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-mono-tech text-[10px] text-cyan-300/70">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <h3 className="text-lg font-medium tracking-tight text-white">
                        {s.label}
                      </h3>
                    </div>
                    <p className="mt-1.5 text-sm leading-relaxed text-white/55">
                      {s.body}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function LoopDiagram({ inView }: { inView: boolean }) {
  // 3 nodes on a ring at 12, 4, 8 o'clock
  const cx = 160;
  const cy = 160;
  const r = 108;
  const angles = [-90, 30, 150];
  const nodes = angles.map((deg) => {
    const rad = (deg * Math.PI) / 180;
    return { x: cx + Math.cos(rad) * r, y: cy + Math.sin(rad) * r };
  });

  return (
    <svg viewBox="0 0 320 320" className="w-full" aria-hidden>
      <defs>
        <linearGradient id="ml-loop" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#22d3ee" />
          <stop offset="100%" stopColor="#6366f1" />
        </linearGradient>
        <radialGradient id="ml-core" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#7ceff8" stopOpacity="0.9" />
          <stop offset="70%" stopColor="#22d3ee" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Ring track */}
      <circle
        cx={cx}
        cy={cy}
        r={r}
        fill="none"
        stroke="rgba(255,255,255,0.08)"
        strokeWidth="1"
        strokeDasharray="2 6"
      />

      {/* Rotating arc (the "loop" signal) */}
      <motion.circle
        cx={cx}
        cy={cy}
        r={r}
        fill="none"
        stroke="url(#ml-loop)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeDasharray={`${2 * Math.PI * r * 0.22} ${2 * Math.PI * r}`}
        animate={{ rotate: 360 }}
        transition={{ duration: 6, ease: "linear", repeat: Infinity }}
        style={{ transformOrigin: `${cx}px ${cy}px` }}
      />

      {/* Spokes to core */}
      {nodes.map((n, i) => (
        <line
          key={`spoke-${i}`}
          x1={cx}
          y1={cy}
          x2={n.x}
          y2={n.y}
          stroke="rgba(255,255,255,0.08)"
          strokeWidth="0.8"
        />
      ))}

      {/* Core */}
      <circle cx={cx} cy={cy} r="40" fill="url(#ml-core)" />
      <circle cx={cx} cy={cy} r="15" fill="none" stroke="#7ceff8" strokeOpacity="0.5" />
      <text
        x={cx}
        y={cy + 3}
        textAnchor="middle"
        className="font-mono-tech"
        fontSize="9"
        fill="#7ceff8"
        letterSpacing="1.5"
      >
        RECALL
      </text>

      {/* Nodes */}
      {nodes.map((n, i) => (
        <motion.g
          key={`node-${i}`}
          initial={{ opacity: 0, scale: 0.6 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 + i * 0.15, ease }}
          style={{ transformOrigin: `${n.x}px ${n.y}px` }}
        >
          <circle
            cx={n.x}
            cy={n.y}
            r="20"
            fill="rgba(11,14,22,0.95)"
            stroke="url(#ml-loop)"
            strokeWidth="1.5"
          />
          <text
            x={n.x}
            y={n.y + 4}
            textAnchor="middle"
            className="font-mono-tech"
            fontSize="12"
            fontWeight="600"
            fill="#7ceff8"
          >
            {String(i + 1).padStart(2, "0")}
          </text>
        </motion.g>
      ))}
    </svg>
  );
}

export default RetrievalLoop;
