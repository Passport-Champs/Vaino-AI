"use client";

import { motion } from "framer-motion";

const ease = [0.2, 0.8, 0.2, 1] as const;
const CHIPS = ["Modular", "Adaptive", "Self-optimizing", "Self-evolving"];

export function NeuralCortexHero() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden pt-40 pb-20 md:pt-52 md:pb-28"
    >
      {/* Animated synapse / EEG backdrop */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(99,102,241,0.14), transparent 60%), radial-gradient(ellipse 70% 40% at 50% 100%, rgba(34,211,238,0.10), transparent 60%)",
        }}
      />
      <SynapseField />

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
          className="flex items-center justify-center gap-4"
        >
          <span className="h-px w-12 bg-gradient-to-r from-transparent to-cyan-400/40" />
          <span className="font-mono-tech text-[11px] uppercase tracking-[0.28em] text-white/50">
            § Neural Cortex · Blueprint
          </span>
          <span className="h-px w-12 bg-gradient-to-l from-transparent to-cyan-400/40" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease }}
          className="mt-8 text-[2.6rem] leading-[1.03] tracking-[-0.03em] text-white sm:text-6xl md:text-7xl"
        >
          <span className="font-medium">The Neural Cortex</span>
          <br />
          <span className="font-serif italic font-normal text-neural">
            A blueprint for superintelligence.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.26, ease }}
          className="mt-6 font-mono-tech text-[11px] uppercase tracking-[0.26em] text-cyan-300/70"
        >
          The Architecture of a New Mind
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.34, ease }}
          className="mx-auto mt-8 max-w-2xl space-y-5"
        >
          <p className="text-lg leading-relaxed text-white/65 text-balance md:text-xl">
            Vaino's Neural Cortex is a living, evolving framework - designed to
            mimic, augment, and ultimately surpass the human brain. Modular,
            adaptive, and relentlessly efficient. It is the first step toward a
            true superintelligence.
          </p>
          <p className="text-base leading-relaxed text-white/50 text-balance">
            Artificial intelligence meets biological inspiration. We are
            reverse-engineering the principles of the greatest biomachine of
            them all - the human brain - applying modularity, plasticity, and
            parallel processing to computational systems.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5, ease }}
          className="mt-9 flex flex-wrap items-center justify-center gap-2"
        >
          {CHIPS.map((c) => (
            <span
              key={c}
              className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 font-mono-tech text-[10px] uppercase tracking-[0.18em] text-white/55"
            >
              {c}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* Faint animated synapse lines behind the hero */
function SynapseField() {
  const lines = [
    { x1: 60, y1: 40, x2: 300, y2: 120 },
    { x1: 340, y1: 30, x2: 620, y2: 150 },
    { x1: 700, y1: 60, x2: 980, y2: 40 },
    { x1: 120, y1: 200, x2: 480, y2: 240 },
    { x1: 520, y1: 260, x2: 880, y2: 190 },
  ];
  return (
    <svg
      aria-hidden
      className="absolute inset-0 h-full w-full pointer-events-none opacity-40"
      viewBox="0 0 1000 300"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient id="nc-hero-edge" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#6366f1" stopOpacity="0.15" />
        </linearGradient>
      </defs>
      {lines.map((l, i) => (
        <g key={i}>
          <motion.line
            x1={l.x1}
            y1={l.y1}
            x2={l.x2}
            y2={l.y2}
            stroke="url(#nc-hero-edge)"
            strokeWidth="1"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: [0, 0.7, 0.3] }}
            transition={{
              duration: 2.6,
              delay: i * 0.3,
              repeat: Infinity,
              repeatType: "reverse",
              repeatDelay: 1.5 + (i % 3),
            }}
          />
          <motion.circle
            cx={l.x2}
            cy={l.y2}
            r="2"
            fill="#7ceff8"
            initial={{ opacity: 0.2 }}
            animate={{ opacity: [0.2, 1, 0.2] }}
            transition={{ duration: 2.4, delay: i * 0.4, repeat: Infinity }}
          />
        </g>
      ))}
    </svg>
  );
}

export default NeuralCortexHero;
