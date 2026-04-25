"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, Infinity as InfinityIcon, Lock, Sparkles } from "lucide-react";

export function TechnicalSummary() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="horizon"
      className="relative isolate py-24 md:py-32 scroll-mt-24 overflow-hidden"
    >
      {/* Layered glows */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(34,211,238,0.12), transparent 60%), radial-gradient(ellipse 60% 40% at 50% 110%, rgba(99,102,241,0.12), transparent 60%)",
        }}
      />
      <div className="absolute inset-0 bg-grid bg-grid-fade pointer-events-none opacity-70" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="relative glass-strong rounded-3xl p-8 md:p-16 overflow-hidden"
        >
          {/* Corner cortex sigil */}
          <svg
            className="absolute -top-12 -right-12 size-64 opacity-30"
            viewBox="0 0 200 200"
            fill="none"
          >
            <defs>
              <linearGradient id="sigil" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#22d3ee" />
                <stop offset="100%" stopColor="#6366f1" />
              </linearGradient>
            </defs>
            {[30, 50, 70, 90].map((r, i) => (
              <circle
                key={r}
                cx="100"
                cy="100"
                r={r}
                fill="none"
                stroke="url(#sigil)"
                strokeWidth="0.8"
                strokeDasharray={i % 2 === 0 ? "2 4" : undefined}
              />
            ))}
          </svg>

          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1">
            <InfinityIcon className="size-3 text-cyan-300" />
            <span className="font-mono-tech text-[10px] uppercase tracking-[0.22em] text-white/60">
              § 04 · Continuous Learning · Data Flywheel
            </span>
          </div>

          <h2 className="mt-6 text-4xl md:text-6xl font-semibold tracking-tight text-white text-balance">
            A system that improves
            <span className="block text-neural">every time it runs.</span>
          </h2>

          <p className="mt-6 max-w-3xl text-base md:text-lg text-white/60 text-balance">
            Vaino is designed around a{" "}
            <span className="text-white/85">continuous learning loop</span>.
            Through{" "}
            <span className="text-white/85">synthetic data flywheels</span>{" "}
            and{" "}
            <span className="text-white/85">human-in-the-loop reinforcement</span>,
            the system gets sharper with each session — not through
            retraining, but through structured feedback built into every
            interaction. It doesn't just know what happened yesterday; it is
            actively learning from what is happening now.
          </p>

          {/* Flywheel visual */}
          <Flywheel />

          {/* CTAs */}
          <div className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <a
              href="https://www.vaino.ai"
              className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-xl border border-cyan-400/40 bg-gradient-to-b from-cyan-400/30 to-cyan-500/10 px-6 py-3 text-sm font-medium text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_10px_30px_-10px_rgba(34,211,238,0.4)] transition hover:from-cyan-400/40"
            >
              <span className="relative z-10">Access the Architecture</span>
              <ArrowUpRight className="relative z-10 size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              <span className="absolute inset-0 bg-[linear-gradient(110deg,transparent,rgba(255,255,255,0.14),transparent)] bg-[length:200%_100%] -translate-x-full group-hover:animate-[shimmer_1.6s_linear_infinite]" />
            </a>
            <a
              href="#architecture"
              className="group inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-6 py-3 text-sm text-white/80 backdrop-blur transition hover:border-white/20 hover:bg-white/[0.06]"
            >
              <Sparkles className="size-4 text-cyan-300" />
              Explore the System
            </a>
            <div className="ml-auto hidden sm:flex items-center gap-2 font-mono-tech text-[11px] uppercase tracking-[0.16em] text-white/40">
              <Lock className="size-3" />
              Encrypted · SOC2 · provenance-signed
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Flywheel() {
  const segments = [
    { label: "INGEST", color: "#22d3ee" },
    { label: "SYNTHESIZE", color: "#7ceff8" },
    { label: "CRITIQUE", color: "#818cf8" },
    { label: "CONSOLIDATE", color: "#6366f1" },
  ];

  return (
    <div className="mt-12 grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-8 items-center">
      <div className="relative size-64 mx-auto lg:mx-0 shrink-0">
        <motion.div
          className="absolute inset-0"
          animate={{ rotate: 360 }}
          transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
        >
          <svg viewBox="0 0 200 200" className="size-full">
            <defs>
              {segments.map((s, i) => (
                <linearGradient
                  key={i}
                  id={`fl-${i}`}
                  x1="0"
                  y1="0"
                  x2="1"
                  y2="1"
                >
                  <stop offset="0%" stopColor={s.color} stopOpacity="0.9" />
                  <stop offset="100%" stopColor={s.color} stopOpacity="0.2" />
                </linearGradient>
              ))}
            </defs>

            {segments.map((_s, i) => {
              const start = (i / segments.length) * 360 - 90;
              const end = ((i + 1) / segments.length) * 360 - 90;
              const large = end - start > 180 ? 1 : 0;
              const r = 80;
              const x1 = 100 + r * Math.cos((start * Math.PI) / 180);
              const y1 = 100 + r * Math.sin((start * Math.PI) / 180);
              const x2 = 100 + r * Math.cos((end * Math.PI) / 180);
              const y2 = 100 + r * Math.sin((end * Math.PI) / 180);
              return (
                <path
                  key={i}
                  d={`M 100 100 L ${x1} ${y1} A ${r} ${r} 0 ${large} 1 ${x2} ${y2} Z`}
                  fill={`url(#fl-${i})`}
                  stroke="rgba(4,5,9,0.9)"
                  strokeWidth="1.5"
                />
              );
            })}

            <circle
              cx="100"
              cy="100"
              r="30"
              fill="rgba(4,5,9,0.9)"
              stroke="rgba(255,255,255,0.15)"
              strokeWidth="1"
            />
          </svg>
        </motion.div>

        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="flex flex-col items-center">
            <span className="font-mono-tech text-[9px] uppercase tracking-[0.2em] text-white/40">
              Flywheel
            </span>
            <span className="text-sm font-semibold text-white">v.0.9</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {segments.map((s, i) => (
          <div
            key={s.label}
            className="flex items-center gap-3 rounded-xl border border-white/10 bg-obsidian-900/60 px-3 py-3"
          >
            <span
              className="size-2 rounded-full"
              style={{ background: s.color, boxShadow: `0 0 12px ${s.color}` }}
            />
            <div>
              <div className="font-mono-tech text-[10px] uppercase tracking-[0.18em] text-white/40">
                Stage {String(i + 1).padStart(2, "0")}
              </div>
              <div className="text-sm font-medium text-white/90">{s.label}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TechnicalSummary;
