"use client";

import { motion } from "framer-motion";

const ease = [0.2, 0.8, 0.2, 1] as const;
const CHIPS = ["Ingest", "Reason", "Consolidate", "Recall"];

export function MemoryHero() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden pt-36 pb-20 md:pt-44 md:pb-28"
    >
      <div className="absolute inset-0 bg-grid bg-grid-fade pointer-events-none" />
      <div
        aria-hidden
        className="absolute -top-1/4 right-0 h-[120%] w-[60%] rounded-[50%] blur-3xl pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 70% 20%, rgba(34,211,238,0.14), transparent 62%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          {/* Left - text */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease }}
              className="flex items-center gap-4"
            >
              <span className="font-mono-tech text-[11px] uppercase tracking-[0.28em] text-cyan-300/80">
                § Memory Model
              </span>
              <span className="h-px w-16 bg-gradient-to-r from-cyan-400/40 to-transparent" />
              <span className="font-mono-tech text-[11px] uppercase tracking-[0.24em] text-white/45">
                How it works
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease }}
              className="mt-8 text-[2.6rem] leading-[1.03] tracking-[-0.03em] text-white sm:text-6xl md:text-[4.2rem]"
            >
              <span className="font-medium">The Memory Model</span>
              <br />
              <span className="font-serif italic font-normal text-neural">
                A computational masterpiece.
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.24, ease }}
              className="mt-8 space-y-5"
            >
              <p className="max-w-xl text-lg leading-relaxed text-white/65 text-balance">
                Memory is the bedrock of cognition - without it, there is no
                learning, no reasoning, no continuity of thought. We have
                reimagined it as a dynamic, self-optimizing system that
                ingests, processes, and refines information in real-time.
              </p>
              <p className="max-w-xl text-base leading-relaxed text-white/50 text-balance">
                Here memory is not a bottleneck - it is a catalyst. Not just
                storage, but computation: the architectural backbone of an
                intelligence that evolves with every interaction.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.42, ease }}
              className="mt-9 flex flex-wrap items-center gap-2"
            >
              {CHIPS.map((c, i) => (
                <span
                  key={c}
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 font-mono-tech text-[10px] uppercase tracking-[0.18em] text-white/55"
                >
                  <span className="font-mono-tech text-cyan-300/70">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {c}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Right - animated memory core */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease }}
          >
            <MemoryCore />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

const STATS = [
  { label: "Throughput", value: "412K", unit: "tok/s" },
  { label: "Latency", value: "<8", unit: "ms" },
  { label: "Context", value: "10M+", unit: "tokens" },
];

const BUFFERS = [
  { name: "Ingest", fill: "78%", delay: 0 },
  { name: "Context", fill: "92%", delay: 0.4 },
  { name: "Store", fill: "64%", delay: 0.8 },
];

function MemoryCore() {
  return (
    <div className="relative glass-strong rounded-2xl p-5 md:p-6 overflow-hidden">
      <div className="absolute inset-0 bg-grid-fine opacity-30 pointer-events-none" />

      {/* Header row */}
      <div className="relative flex items-center justify-between">
        <div className="flex items-center gap-2 rounded-full border border-white/10 bg-obsidian-900/70 px-2.5 py-1 backdrop-blur">
          <span className="size-1.5 rounded-full bg-cyan-400 animate-node" />
          <span className="font-mono-tech text-[10px] uppercase tracking-[0.2em] text-white/60">
            memory.core · live
          </span>
        </div>
        <span className="font-mono-tech text-[10px] uppercase tracking-[0.18em] text-white/40">
          v.0.9
        </span>
      </div>

      {/* Token stream → buffers */}
      <div className="relative mt-5 h-40 overflow-hidden rounded-xl border border-white/5 bg-obsidian-900/60">
        <TokenStream />
      </div>

      {/* Buffer bars */}
      <div className="relative mt-4 space-y-3">
        {BUFFERS.map((b) => (
          <div key={b.name} className="flex items-center gap-3">
            <span className="w-16 shrink-0 font-mono-tech text-[10px] uppercase tracking-[0.16em] text-white/45">
              {b.name}
            </span>
            <div className="relative h-1.5 flex-1 overflow-hidden rounded-full bg-white/5">
              <div
                className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-cyan-400/70 to-ultra-500/70"
                style={{ width: b.fill }}
              />
              <motion.div
                className="absolute inset-y-0 w-1/4 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                animate={{ x: ["-100%", "400%"] }}
                transition={{
                  duration: 2.6,
                  repeat: Infinity,
                  ease: "linear",
                  delay: b.delay,
                }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Stat readouts */}
      <div className="relative mt-5 grid grid-cols-3 gap-2">
        {STATS.map((s) => (
          <div
            key={s.label}
            className="rounded-lg border border-white/10 bg-white/[0.02] px-3 py-2.5"
          >
            <div className="font-mono-tech text-[9px] uppercase tracking-[0.16em] text-white/40">
              {s.label}
            </div>
            <div className="mt-1 flex items-baseline gap-1">
              <span className="text-lg font-semibold tracking-tight text-cyan-300">
                {s.value}
              </span>
              <span className="font-mono-tech text-[10px] text-white/45">
                {s.unit}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* Token particles streaming left -> right into the buffer */
function TokenStream() {
  const rows = [0, 1, 2, 3, 4];
  return (
    <div className="absolute inset-0">
      {/* Retrieval loop ring, top-right */}
      <motion.div
        aria-hidden
        className="absolute right-3 top-3 size-10 rounded-full border border-dashed border-cyan-400/30"
        animate={{ rotate: 360 }}
        transition={{ duration: 8, ease: "linear", repeat: Infinity }}
      >
        <span className="absolute -top-0.5 left-1/2 size-1.5 -translate-x-1/2 rounded-full bg-cyan-300" />
      </motion.div>

      {rows.map((r) => (
        <div
          key={r}
          className="absolute left-0 right-0 flex items-center"
          style={{ top: `${14 + r * 20}%` }}
        >
          {[0, 1, 2, 3].map((c) => (
            <motion.span
              key={c}
              className="absolute h-1.5 w-6 rounded-full bg-gradient-to-r from-cyan-400/80 to-ultra-500/50"
              initial={{ left: "-10%", opacity: 0 }}
              animate={{ left: ["-10%", "88%"], opacity: [0, 1, 1, 0] }}
              transition={{
                duration: 2.4 + (r % 3) * 0.4,
                repeat: Infinity,
                ease: "linear",
                delay: r * 0.3 + c * 0.6,
              }}
            />
          ))}
        </div>
      ))}

      {/* Ingest edge (right boundary where tokens land) */}
      <div className="absolute inset-y-0 right-0 w-px bg-gradient-to-b from-transparent via-cyan-400/50 to-transparent" />
    </div>
  );
}

export default MemoryHero;
