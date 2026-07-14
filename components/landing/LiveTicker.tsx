"use client";

import {
  Activity,
  Globe2,
  Landmark,
  LineChart,
  Scale,
  Satellite,
  Shield,
} from "lucide-react";

/**
 * "Sequential Particle Learning" ticker - represents live global data
 * streams being ingested into the cortex in real time.
 */

type Tick = {
  icon: React.ComponentType<{ className?: string }>;
  tag: string;
  label: string;
  delta?: string;
  sentiment?: "pos" | "neg" | "neu";
};

const TICKS: Tick[] = [
  { icon: Globe2, tag: "GEO", label: "EU-ASEAN corridor · tariff shift detected", delta: "+0.18σ", sentiment: "pos" },
  { icon: Scale, tag: "LEGAL", label: "US 9th Circuit · AI Liability ruling indexed", delta: "Δ schema", sentiment: "neu" },
  { icon: LineChart, tag: "MARKET", label: "Semis volatility · 3σ event", delta: "-2.1%", sentiment: "neg" },
  { icon: Satellite, tag: "FEED", label: "Grok sentiment pull · 412k tokens/s", delta: "+stream", sentiment: "pos" },
  { icon: Shield, tag: "COMPLIANCE", label: "SOC2 Type II · posture nominal", delta: "GREEN", sentiment: "pos" },
  { icon: Landmark, tag: "POLICY", label: "MENA central bank guidance · parsed", delta: "v4.2", sentiment: "neu" },
  { icon: Activity, tag: "CORTEX", label: "DPO cycle 842 · gating weights updated", delta: "+0.03", sentiment: "pos" },
  { icon: Globe2, tag: "GEO", label: "LATAM energy grid · sentiment delta", delta: "+1.2σ", sentiment: "pos" },
  { icon: LineChart, tag: "MARKET", label: "FX · JPY carry unwind detected", delta: "-0.4%", sentiment: "neg" },
];

const REEL = [...TICKS, ...TICKS];

export function LiveTicker() {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-obsidian-900/60 backdrop-blur">
      {/* Edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-obsidian-900 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-obsidian-900 to-transparent" />

      {/* Header bar */}
      <div className="flex items-center justify-between px-4 py-2 border-b border-white/5">
        <div className="flex items-center gap-2">
          <span className="relative flex size-1.5">
            <span className="absolute inset-0 animate-ping rounded-full bg-emerald-400/60" />
            <span className="relative size-1.5 rounded-full bg-emerald-400" />
          </span>
          <span className="font-mono-tech text-[10px] uppercase tracking-[0.2em] text-white/50">
            Sequential Particle Learning · Live Ingestion
          </span>
        </div>
        <span className="hidden sm:inline font-mono-tech text-[10px] uppercase tracking-[0.18em] text-white/40">
          Vectorizing 42.8k tok/s
        </span>
      </div>

      {/* Marquee */}
      <div className="relative py-3">
        <div className="flex gap-6 whitespace-nowrap animate-marquee will-change-transform">
          {REEL.map((t, i) => (
            <TickItem key={i} {...t} />
          ))}
        </div>
        {/* Scanning line */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-transparent via-cyan-400/15 to-transparent animate-scan" />
      </div>
    </div>
  );
}

function TickItem({ icon: Icon, tag, label, delta, sentiment }: Tick) {
  const color =
    sentiment === "pos"
      ? "text-emerald-300"
      : sentiment === "neg"
        ? "text-rose-300"
        : "text-cyan-300";

  return (
    <div className="flex items-center gap-3 shrink-0">
      <span className="inline-flex items-center gap-1.5 rounded-md border border-white/10 bg-white/[0.03] px-2 py-1">
        <Icon className="size-3 text-cyan-300" />
        <span className="font-mono-tech text-[10px] uppercase tracking-[0.18em] text-white/60">
          {tag}
        </span>
      </span>
      <span className="text-xs text-white/70">{label}</span>
      {delta && (
        <span className={`font-mono-tech text-[11px] ${color}`}>{delta}</span>
      )}
      <span className="text-white/15">·</span>
    </div>
  );
}

export default LiveTicker;
