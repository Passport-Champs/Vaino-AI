"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";

/**
 * A stylized "Neural Cortex" — concentric synaptic rings with a
 * deterministic web of nodes/edges. Uses SVG so it stays crisp and
 * keeps animation cost low versus a canvas simulation.
 */
export function NeuralCortex() {
  const { nodes, edges } = useMemo(() => buildCortex(), []);

  return (
    <div className="relative glass-strong cortex-ring rounded-2xl aspect-square w-full overflow-hidden">
      {/* Inner vignette */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(34,211,238,0.08), rgba(4,5,9,0.9) 70%)",
        }}
      />
      {/* Fine grid */}
      <div className="absolute inset-0 bg-grid-fine opacity-40" />

      <svg viewBox="0 0 400 400" className="relative size-full">
        <defs>
          <radialGradient id="core" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#7ceff8" stopOpacity="1" />
            <stop offset="60%" stopColor="#22d3ee" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="edgeG" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#6366f1" stopOpacity="0.2" />
          </linearGradient>
          <filter id="softGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Orbit rings */}
        {[70, 120, 170].map((r, i) => (
          <circle
            key={r}
            cx="200"
            cy="200"
            r={r}
            fill="none"
            stroke="rgba(255,255,255,0.07)"
            strokeWidth="1"
            strokeDasharray={i === 1 ? "2 6" : undefined}
          />
        ))}

        {/* Cardinal markers */}
        {[0, 90, 180, 270].map((deg) => {
          const rad = (deg * Math.PI) / 180;
          const x = 200 + Math.cos(rad) * 170;
          const y = 200 + Math.sin(rad) * 170;
          return (
            <g key={deg}>
              <circle cx={x} cy={y} r="2.2" fill="#22d3ee" opacity="0.9" />
              <circle
                cx={x}
                cy={y}
                r="5"
                fill="none"
                stroke="#22d3ee"
                strokeOpacity="0.25"
              />
            </g>
          );
        })}

        {/* Edges */}
        <g>
          {edges.map((e, i) => (
            <motion.line
              key={i}
              x1={nodes[e.a].x}
              y1={nodes[e.a].y}
              x2={nodes[e.b].x}
              y2={nodes[e.b].y}
              stroke="url(#edgeG)"
              strokeWidth="0.8"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: [0, 0.8, 0.4] }}
              transition={{
                duration: 2.2,
                delay: 0.05 * i,
                repeat: Infinity,
                repeatType: "reverse",
                repeatDelay: 2 + (i % 5),
              }}
            />
          ))}
        </g>

        {/* Nodes */}
        <g filter="url(#softGlow)">
          {nodes.map((n, i) => (
            <motion.circle
              key={i}
              cx={n.x}
              cy={n.y}
              r={n.ring === 0 ? 3.6 : n.ring === 1 ? 2.6 : 2}
              fill={n.ring === 0 ? "#7ceff8" : n.ring === 1 ? "#22d3ee" : "#818cf8"}
              initial={{ opacity: 0.3 }}
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{
                duration: 1.8 + (i % 5) * 0.3,
                delay: (i % 7) * 0.15,
                repeat: Infinity,
              }}
            />
          ))}
        </g>

        {/* Core */}
        <circle cx="200" cy="200" r="45" fill="url(#core)" />
        <circle
          cx="200"
          cy="200"
          r="18"
          fill="none"
          stroke="#7ceff8"
          strokeOpacity="0.55"
        />
        <circle cx="200" cy="200" r="7" fill="#ffffff" />

        {/* Scanner sweep */}
        <motion.line
          x1="200"
          y1="200"
          x2="370"
          y2="200"
          stroke="url(#edgeG)"
          strokeWidth="1.2"
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 7, ease: "linear", repeat: Infinity }}
          style={{ transformOrigin: "200px 200px" }}
        />
      </svg>

      {/* Technical caption */}
      <div className="absolute inset-x-0 bottom-0 p-3 flex items-center justify-between">
        <div className="flex items-center gap-2 rounded-full border border-white/10 bg-obsidian-900/70 px-2.5 py-1 backdrop-blur">
          <span className="size-1.5 rounded-full bg-cyan-400 animate-node" />
          <span className="font-mono-tech text-[10px] uppercase tracking-[0.2em] text-white/60">
            cortex.loop · active
          </span>
        </div>
        <div className="hidden sm:flex items-center gap-2 rounded-full border border-white/10 bg-obsidian-900/70 px-2.5 py-1 backdrop-blur font-mono-tech text-[10px] uppercase tracking-[0.18em] text-white/50">
          42.8k tok/s
        </div>
      </div>

      {/* Corner technical marks */}
      {[
        { pos: "top-2 left-2" },
        { pos: "top-2 right-2" },
        { pos: "bottom-2 left-2" },
        { pos: "bottom-2 right-2" },
      ].map((c, i) => (
        <div key={i} className={`absolute size-3 ${c.pos}`}>
          <div className="absolute inset-0 border-t border-l border-cyan-300/50" />
        </div>
      ))}
    </div>
  );
}

type Node = { x: number; y: number; ring: number };

function buildCortex() {
  const center = 200;
  const rings = [
    { r: 55, count: 6, ring: 0 },
    { r: 110, count: 10, ring: 1 },
    { r: 160, count: 14, ring: 2 },
  ];

  const nodes: Node[] = [];
  for (const { r, count, ring } of rings) {
    for (let i = 0; i < count; i++) {
      const off = ring * 0.13;
      const a = (i / count) * Math.PI * 2 + off;
      nodes.push({
        x: center + Math.cos(a) * r,
        y: center + Math.sin(a) * r,
        ring,
      });
    }
  }

  const edges: { a: number; b: number }[] = [];
  // Connect core to each inner ring node
  for (let i = 0; i < 6; i++) edges.push({ a: 0, b: i });
  // Connect inner ring to middle ring (every other)
  for (let i = 0; i < 6; i++) {
    edges.push({ a: i, b: 6 + ((i * 2) % 10) });
    edges.push({ a: i, b: 6 + ((i * 2 + 1) % 10) });
  }
  // Middle to outer
  for (let i = 0; i < 10; i++) {
    edges.push({ a: 6 + i, b: 16 + ((i * 2) % 14) });
  }
  // Some lateral edges for web feel
  for (let i = 0; i < 14; i++) {
    edges.push({ a: 16 + i, b: 16 + ((i + 1) % 14) });
  }

  return { nodes, edges };
}

export default NeuralCortex;
