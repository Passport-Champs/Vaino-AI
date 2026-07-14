"use client";

import { motion } from "framer-motion";

const FACTS = [
  { k: "Discipline", v: "Frontier AI Lab" },
  { k: "Headquarters", v: "Miami, Florida" },
  { k: "Trajectory", v: "AI → AGI → ASI" },
];

const ease = [0.2, 0.8, 0.2, 1] as const;

export function AboutHero() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden pt-40 pb-24 md:pt-52 md:pb-32"
    >
      <div className="absolute inset-0 bg-grid bg-grid-fade pointer-events-none" />
      <div
        aria-hidden
        className="absolute -top-1/3 left-1/2 -translate-x-1/2 h-[130%] w-[75%] rounded-[50%] blur-3xl pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(34,211,238,0.14), transparent 62%)",
        }}
      />

      {/* Oversized ghost wordmark */}
      <span
        aria-hidden
        className="pointer-events-none absolute -bottom-10 -right-6 select-none font-serif italic text-[26vw] leading-none text-white/[0.025] md:text-[20vw]"
      >
        Väinö
      </span>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
          className="flex items-center gap-4"
        >
          <span className="font-mono-tech text-[11px] uppercase tracking-[0.28em] text-cyan-300/80">
            § 00
          </span>
          <span className="h-px w-16 bg-gradient-to-r from-cyan-400/40 to-transparent" />
          <span className="font-mono-tech text-[11px] uppercase tracking-[0.24em] text-white/45">
            About Vaino
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease }}
          className="mt-8 max-w-4xl text-[2.6rem] leading-[1.02] tracking-[-0.03em] text-white sm:text-6xl md:text-7xl"
        >
          <span className="font-medium">The architects of the</span>
          <br />
          <span className="font-serif italic font-normal text-neural">
            Human Intelligence Engine
          </span>
        </motion.h1>

        <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-[1.5fr_1fr] md:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.24, ease }}
            className="space-y-6"
          >
            <p className="text-xl leading-relaxed text-white/70 text-balance md:text-2xl">
              A system designed to mimic, augment, and ultimately surpass human
              cognition - built to serve humanity, and aligned with human
              values from first principles.
            </p>
            <p className="text-base leading-relaxed text-white/50 text-balance md:text-lg">
              Artificial Intelligence, Computer Science, and Mathematics
              converge into computational excellence. We are a frontier lab run
              by people obsessed with turning the theoretical into the
              tangible - and the impossible into the inevitable. Every line of
              code and every algorithm is a step toward AGI and beyond.
            </p>
          </motion.div>

          <motion.dl
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.38, ease }}
            className="flex flex-col justify-end gap-0 self-end border-t border-white/10"
          >
            {FACTS.map((f) => (
              <div
                key={f.k}
                className="flex items-baseline justify-between gap-4 border-b border-white/10 py-3.5"
              >
                <dt className="font-mono-tech text-[10px] uppercase tracking-[0.2em] text-white/40">
                  {f.k}
                </dt>
                <dd className="font-serif text-lg italic text-white/85">
                  {f.v}
                </dd>
              </div>
            ))}
          </motion.dl>
        </div>
      </div>
    </section>
  );
}

export default AboutHero;
