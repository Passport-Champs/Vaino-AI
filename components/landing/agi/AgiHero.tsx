"use client";

import { motion } from "framer-motion";

const ease = [0.2, 0.8, 0.2, 1] as const;

// Waypoints on the rising trajectory (viewBox 0 0 1000 400)
const WAYPOINTS = [
  { x: 150, y: 320, label: "AI", sub: "today" },
  { x: 520, y: 210, label: "AGI", sub: "the goal" },
  { x: 880, y: 80, label: "ASI", sub: "the horizon" },
];

const CURVE = "M 20 370 C 260 350, 340 250, 520 210 S 760 150, 980 60";

export function AgiHero() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden pt-40 pb-24 md:pt-52 md:pb-32"
    >
      {/* Trajectory backdrop */}
      <svg
        aria-hidden
        viewBox="0 0 1000 400"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 h-full w-full pointer-events-none opacity-70"
      >
        <defs>
          <linearGradient id="agi-curve" x1="0" y1="1" x2="1" y2="0">
            <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.15" />
            <stop offset="55%" stopColor="#38e1f2" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#818cf8" stopOpacity="0.9" />
          </linearGradient>
          <filter id="agi-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="4" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Horizon line */}
        <line
          x1="0"
          y1="372"
          x2="1000"
          y2="372"
          stroke="rgba(255,255,255,0.08)"
          strokeWidth="1"
        />

        {/* Rising trajectory */}
        <motion.path
          d={CURVE}
          fill="none"
          stroke="url(#agi-curve)"
          strokeWidth="2"
          strokeLinecap="round"
          filter="url(#agi-glow)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2, ease }}
        />

        {/* Waypoints */}
        {WAYPOINTS.map((w, i) => (
          <motion.g
            key={w.label}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.8 + i * 0.4, ease }}
            style={{ transformOrigin: `${w.x}px ${w.y}px` }}
          >
            <circle
              cx={w.x}
              cy={w.y}
              r="16"
              fill="none"
              stroke="#7ceff8"
              strokeOpacity="0.3"
            />
            <circle cx={w.x} cy={w.y} r="5" fill="#7ceff8" filter="url(#agi-glow)" />
            <text
              x={w.x}
              y={w.y - 26}
              textAnchor="middle"
              className="font-mono-tech"
              fontSize="16"
              fontWeight="600"
              fill="#ffffff"
              letterSpacing="1.5"
            >
              {w.label}
            </text>
            <text
              x={w.x}
              y={w.y - 12}
              textAnchor="middle"
              className="font-mono-tech"
              fontSize="9"
              fill="rgba(255,255,255,0.45)"
              letterSpacing="1.5"
            >
              {w.sub.toUpperCase()}
            </text>
          </motion.g>
        ))}
      </svg>

      {/* Low horizon glow */}
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-2/3 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 70% at 50% 130%, rgba(99,102,241,0.18), transparent 60%)",
        }}
      />

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
          className="flex items-center justify-center gap-4"
        >
          <span className="h-px w-12 bg-gradient-to-r from-transparent to-cyan-400/40" />
          <span className="font-mono-tech text-[11px] uppercase tracking-[0.28em] text-white/50">
            § AGI Horizon
          </span>
          <span className="h-px w-12 bg-gradient-to-l from-transparent to-cyan-400/40" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease }}
          className="mt-8 text-[2.7rem] leading-[1.02] tracking-[-0.03em] text-white sm:text-6xl md:text-7xl"
        >
          <span className="font-medium">Intelligence,</span>{" "}
          <span className="font-serif italic font-normal text-neural">
            unbound.
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.26, ease }}
          className="mx-auto mt-8 max-w-2xl space-y-5"
        >
          <p className="text-lg leading-relaxed text-white/65 text-balance md:text-xl">
            Artificial General Intelligence - a system that understands, learns,
            and applies knowledge across any domain, just as a human would. But
            unlike human intelligence, it is not constrained by biology:
            scalable, adaptable, and limitless in its potential.
          </p>
          <p className="text-base leading-relaxed text-white/50 text-balance">
            We do not see AGI as a distant dream. We see it as the inevitable
            outcome of a relentless pursuit of computational cognition. Our
            approach is not incremental - it is exponential.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default AgiHero;
