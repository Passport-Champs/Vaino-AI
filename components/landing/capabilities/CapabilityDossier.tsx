"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  Binary,
  BrainCog,
  Compass,
  Eye,
  Gauge,
  GitBranch,
  Layers,
  Network,
  Radar,
  Route,
  Scissors,
  SlidersHorizontal,
  Waves,
  type LucideIcon,
} from "lucide-react";

type Cap = {
  n: string;
  id: string;
  title: string;
  epithet: string;
  tag: string;
  icon: LucideIcon;
  body: string;
  punch: string;
};

const CAPABILITIES: Cap[] = [
  {
    n: "01",
    id: "cap-01",
    title: "Dynamic Expert Routing",
    epithet: "The Neural Thalamus of AI Orchestration",
    tag: "MoE / Gating",
    icon: Route,
    body: "Every query is routed in sub-millisecond time to the optimal model based on domain, complexity, and depth. Vaino moves beyond static load-balancing into real-time cognitive triage: an advanced Mixture-of-Experts (MoE) gating mechanism dynamically selects between Mistral, Gemini, and Grok. Lightning-fast tasks like text generation are handled by lean, high-speed models, while deep, multi-layered problems like financial modeling and geopolitical forecasting are escalated to heavier, specialized ones.",
    punch:
      "No wasted compute. No unnecessary latency. Neural efficiency - like a brain deciding which pathway to activate.",
  },
  {
    n: "02",
    id: "cap-02",
    title: "Sentiment-Weighted Logic",
    epithet: "The Pulse of the Planet, in Real-Time",
    tag: "Live Feed",
    icon: Waves,
    body: "Vaino absorbs the world. By integrating live data streams - news cycles, market fluctuations, regional socio-political signals - it weighs every decision against the current global state. A query about supply chain risk isn't answered in a vacuum; it's cross-referenced with real-time sentiment, trade data, and geopolitical tension to deliver insight that is not just accurate, but contextually alive.",
    punch: "Static knowledge is obsolete. Vaino adapts to the now.",
  },
  {
    n: "03",
    id: "cap-03",
    title: "Recursive Self-Correction",
    epithet: "The Socratic Debate of Machines",
    tag: "Debate Protocol",
    icon: GitBranch,
    body: "Before a single word reaches you, Vaino's models engage in a silent, high-speed debate. Multiple models cross-validate outputs, identifying inconsistencies, biases, or gaps. Disagreements aren't suppressed - they're resolved through iterative refinement, ensuring the final response is not just the best answer, but the most rigorously tested one.",
    punch:
      "AI that thinks critically. Drastically reduced hallucinations. No oversights - only the truth, distilled.",
  },
  {
    n: "04",
    id: "cap-04",
    title: "Multi-Modal Synthesis",
    epithet: "The Omni-Sensory Intelligence",
    tag: "Vision · NLP · Struct",
    icon: Layers,
    body: "Text, images, structured data - Vaino doesn't process them separately. It fuses them into a single, coherent understanding. Upload a spreadsheet, a satellite image, and a news article, and Vaino synthesizes them into an actionable insight. Whether extracting trends from financial reports, interpreting medical imaging, or generating a strategy from mixed inputs, no data is left siloed.",
    punch:
      "AI that sees, reads, and reasons simultaneously. The future isn't text-only - it's rich, interconnected, and holistic.",
  },
  {
    n: "05",
    id: "cap-05",
    title: "Autonomous Agentic Loops",
    epithet: "From Thought to Execution - Seamlessly",
    tag: "Executor",
    icon: Network,
    body: "Vaino doesn't stop at generating a plan. It executes it. Need a flight booked, code deployed, or a multi-step workflow automated? Vaino's Agentic Engine takes over - running scripts, calling APIs, navigating systems, and handling logistics, all without human intervention. This is AI that doesn't just advise, it acts.",
    punch:
      "The end of hand-holding. Vaino is your autonomous co-pilot, engineer, and executor - all in one.",
  },
  {
    n: "06",
    id: "cap-06",
    title: "Predictive Jurisdictional Modeling",
    epithet: "The Geopolitical Oracle",
    tag: "Geopolitical",
    icon: Compass,
    body: "Vaino anticipates change before it arrives. By continuously monitoring regulatory shifts, political movements, and economic indicators, it models downstream impact on your travel, assets, and operations before they materialize. Planning a cross-border expansion? Vaino flags legal hurdles, tax implications, and market risks before they become problems.",
    punch:
      "AI with foresight. In a world of volatility, Vaino is your strategic shield.",
  },
  {
    n: "07",
    id: "cap-07",
    title: "Parametric Fluidity",
    epithet: "The Shape-Shifting Intelligence",
    tag: "7B → 1.5T",
    icon: Gauge,
    body: "Vaino's active model capacity isn't fixed - it's fluid. For speed-sensitive tasks like real-time chat and quick summaries, it deploys lightweight models (7B parameters). For deep, precision-driven work like complex simulation and legal analysis, it scales up to heavyweight models (1.5T parameters). Dynamic scaling ensures optimal performance without waste.",
    punch:
      "AI that adapts its brainpower to the task. No overkill. No underperformance. Pure computational efficiency.",
  },
  {
    n: "08",
    id: "cap-08",
    title: 'The "Human Bias" Filter',
    epithet: "The Empathy Engine",
    tag: "Persona Layer",
    icon: SlidersHorizontal,
    body: "Vaino doesn't just understand language, it understands you. Through adaptive persona modeling, it calibrates its communication style to your preferences - whether you need precise, formal analysis or contextual, conversational insight. It's not just about what it says, but how it says it.",
    punch:
      "AI that speaks your language - literally and figuratively. No more robotic responses. Just human-like clarity.",
  },
  {
    n: "09",
    id: "cap-09",
    title: "Adaptive World Model",
    epithet: "The Living Memory",
    tag: "Context Engine",
    icon: BrainCog,
    body: "Every interaction refines Vaino's understanding of your context, objectives, and preferences. It remembers, and it evolves. Over time, Vaino builds a dynamic, personalized model of your world, ensuring every response is tailored, relevant, and increasingly intuitive.",
    punch:
      "AI that learns with you. The more you use it, the smarter it gets - for you.",
  },
  {
    n: "10",
    id: "cap-10",
    title: "Dynamic LoRA Switching",
    epithet: "The Domain-Specialist, Instantly",
    tag: "Adapters",
    icon: Binary,
    body: "Need legal reasoning one moment and itinerary optimization the next? Vaino swaps domain-specific fine-tunes (LoRA adapters) in real-time, without reloading the underlying model. That means instant expertise in any field, on demand.",
    punch:
      "AI that doesn't just know a lot - it knows exactly what you need, when you need it.",
  },
  {
    n: "11",
    id: "cap-11",
    title: "Geopolitical Anomaly Detection",
    epithet: "The Global Radar",
    tag: "Sentiment Δ",
    icon: Radar,
    body: "Vaino tracks live signals and compares them against historical baselines to flag emerging anomalies. Whether it's a sudden shift in market sentiment, a spike in geopolitical tension, or a supply chain disruption, Vaino alerts you before the rest of the world catches on.",
    punch:
      "AI that sees the invisible. In a world of noise, Vaino is your signal detector.",
  },
  {
    n: "12",
    id: "cap-12",
    title: "Context-Aware Token Pruning",
    epithet: "The Memory Optimizer",
    tag: "Context Hygiene",
    icon: Scissors,
    body: "Vaino's active context window stays lean by automatically pruning irrelevant information mid-session - like an intelligent human with the wisdom to decipher what matters. Efficient use of memory preserves speed without losing signal.",
    punch:
      "The result? Faster responses, sharper insight, and far less bloat. Vaino forgets what doesn't matter, so it can focus on what does.",
  },
  {
    n: "13",
    id: "cap-13",
    title: 'The "Human Intent" Interface',
    epithet: "The Mind-Reader",
    tag: "Intent → Query",
    icon: Eye,
    body: "Humans don't speak in structured queries - we speak in vague, imprecise, natural language. Vaino's intent parser bridges the gap, translating human requests into structured, actionable queries its models can execute. No more frustrating miscommunication - just seamless understanding.",
    punch:
      "AI that gets you. Less learning curve. No jargon. Just natural, effortless interaction.",
  },
];

const ease = [0.2, 0.8, 0.2, 1] as const;

export function CapabilityDossier() {
  const [activeId, setActiveId] = useState<string>(CAPABILITIES[0].id);

  useEffect(() => {
    const els = CAPABILITIES.map((c) => document.getElementById(c.id)).filter(
      (el): el is HTMLElement => el !== null
    );

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort(
            (a, b) => a.boundingClientRect.top - b.boundingClientRect.top
          );
        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="dossier" className="relative isolate py-12 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid lg:grid-cols-[220px_1fr] lg:gap-14">
          {/* Sticky scroll-spy index */}
          <nav aria-label="Capabilities index" className="hidden lg:block">
            <div className="sticky top-28">
              <p className="mb-4 font-mono-tech text-[10px] uppercase tracking-[0.24em] text-white/40">
                Index · 13 Modules
              </p>
              <ul className="space-y-0.5">
                {CAPABILITIES.map((c) => {
                  const active = c.id === activeId;
                  return (
                    <li key={c.id}>
                      <a
                        href={`#${c.id}`}
                        className={`group flex items-baseline gap-3 border-l-2 py-1.5 pl-3 transition-colors ${
                          active
                            ? "border-cyan-400"
                            : "border-white/10 hover:border-white/30"
                        }`}
                      >
                        <span
                          className={`font-mono-tech text-[10px] tabular-nums transition-colors ${
                            active ? "text-cyan-300" : "text-white/40"
                          }`}
                        >
                          {c.n}
                        </span>
                        <span
                          className={`text-xs leading-tight transition-colors ${
                            active
                              ? "text-white"
                              : "text-white/45 group-hover:text-white/70"
                          }`}
                        >
                          {c.title}
                        </span>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </nav>

          {/* Entries */}
          <div>
            {CAPABILITIES.map((c, i) => (
              <Entry key={c.id} cap={c} first={i === 0} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Entry({ cap, first }: { cap: Cap; first: boolean }) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-120px" });
  const Icon = cap.icon;

  return (
    <motion.article
      id={cap.id}
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease }}
      className={`relative scroll-mt-28 overflow-hidden py-12 md:py-16 ${
        first ? "" : "border-t border-white/10"
      }`}
    >
      {/* Ghost numeral */}
      <span
        aria-hidden
        className="pointer-events-none absolute -top-6 right-0 select-none font-serif italic leading-none text-white/[0.03] text-[110px] md:text-[150px]"
      >
        {cap.n}
      </span>

      <div className="relative">
        <div className="flex flex-wrap items-center gap-3">
          <div className="inline-flex size-11 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-500/[0.08]">
            <Icon className="size-5 text-cyan-300" />
          </div>
          <span className="rounded-md border border-white/10 bg-white/[0.02] px-2 py-1 font-mono-tech text-[10px] uppercase tracking-[0.14em] text-white/55">
            {cap.tag}
          </span>
          <span className="font-mono-tech text-[11px] tracking-[0.2em] text-white/30">
            {cap.n} / 13
          </span>
        </div>

        <h2 className="mt-6 text-3xl font-medium tracking-tight text-white md:text-4xl">
          {cap.title}
        </h2>
        <p className="mt-2 font-serif text-xl italic text-cyan-100/90 md:text-2xl">
          {cap.epithet}
        </p>

        <div className="mt-7 grid gap-8 lg:grid-cols-[1.6fr_1fr]">
          <p className="max-w-2xl text-base leading-relaxed text-white/60 md:text-lg">
            {cap.body}
          </p>
          <div className="self-start border-l-2 border-cyan-400/40 pl-5">
            <p className="font-mono-tech text-[10px] uppercase tracking-[0.2em] text-cyan-300/70">
              Why it matters
            </p>
            <p className="mt-2 text-base leading-relaxed text-white/80">
              {cap.punch}
            </p>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export default CapabilityDossier;
