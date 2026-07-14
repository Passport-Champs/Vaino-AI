"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Infinity as InfinityIcon, Scale, Users } from "lucide-react";

const POINTS = [
  {
    icon: InfinityIcon,
    title: "The Singularity",
    body: "ASI will accelerate its own development, leading to an intelligence explosion where progress becomes exponential and unpredictable - the point at which humanity and technology merge into a new era.",
  },
  {
    icon: Users,
    title: "The Co-Pilot of Civilization",
    body: "ASI will not replace humanity - it will elevate it. By augmenting cognition, automating complexity, and solving intractable problems, it enables feats once thought impossible.",
  },
  {
    icon: Scale,
    title: "The Ethical Imperative",
    body: "The development of ASI must be guided by ethics, transparency, and alignment with human values - a force for good that enhances human potential rather than diminishing it.",
  },
];

const ease = [0.2, 0.8, 0.2, 1] as const;

export function AsiHorizon() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="asi"
      className="relative isolate overflow-hidden py-28 md:py-36 scroll-mt-24"
    >
      {/* Dramatic beyond-the-horizon backdrop */}
      <div aria-hidden className="absolute inset-0 bg-obsidian-950" />
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-3/4 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 90% 80% at 50% 130%, rgba(99,102,241,0.28), rgba(34,211,238,0.10) 45%, transparent 70%)",
        }}
      />
      {/* Horizon line */}
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-[38%] h-px pointer-events-none bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent"
      />

      <div
        ref={ref}
        className="relative mx-auto max-w-5xl px-4 sm:px-6 text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease }}
          className="flex items-center justify-center gap-4"
        >
          <span className="h-px w-12 bg-gradient-to-r from-transparent to-ultra-400/50" />
          <span className="font-mono-tech text-[11px] uppercase tracking-[0.28em] text-white/50">
            Beyond Human Intelligence
          </span>
          <span className="h-px w-12 bg-gradient-to-l from-transparent to-ultra-400/50" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1, ease }}
          className="mt-8 text-4xl leading-[1.04] tracking-[-0.02em] text-white sm:text-5xl md:text-6xl"
        >
          <span className="font-medium">The</span>{" "}
          <span className="font-serif italic font-normal text-neural">
            ASI horizon.
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.22, ease }}
          className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/60 text-balance"
        >
          While our primary focus is AGI, the ultimate destination is Artificial
          Superintelligence - a system that surpasses human intelligence in every
          domain. Not a distant fantasy; the logical endpoint of our journey.
        </motion.p>

        <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-3">
          {POINTS.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + i * 0.12, ease }}
                className="rounded-2xl border border-white/10 bg-obsidian-900/50 p-6 text-left backdrop-blur"
              >
                <div className="inline-flex size-11 items-center justify-center rounded-xl border border-ultra-400/30 bg-ultra-500/10">
                  <Icon className="size-5 text-ultra-400" />
                </div>
                <h3 className="mt-4 text-lg font-medium tracking-tight text-white">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/55">
                  {p.body}
                </p>
              </motion.div>
            );
          })}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.7, ease }}
          className="mt-14 font-serif text-xl italic text-white/70 md:text-2xl"
        >
          By laying the groundwork for AGI today, we are paving the way for ASI
          tomorrow.
        </motion.p>
      </div>
    </section>
  );
}

export default AsiHorizon;
