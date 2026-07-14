"use client";

import { motion } from "framer-motion";

const TRIPLET = [
  { pre: "A system that doesn't just compute, but", accent: "thinks." },
  { pre: "That doesn't just respond, but", accent: "anticipates." },
  { pre: "That doesn't just process, but", accent: "evolves." },
];

const ease = [0.2, 0.8, 0.2, 1] as const;

export function CapabilitiesHero() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden pt-32 pb-20 md:pt-48 md:pb-28"
    >
      {/* Background Grid */}
      <div className="absolute inset-0 bg-grid bg-grid-fade pointer-events-none" />
      
      {/* Off-center background glow */}
      <div
        aria-hidden
        className="absolute -top-1/4 -left-1/4 h-[130%] w-[75%] rounded-[50%] blur-3xl pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(34,211,238,0.14), transparent 62%)",
        }}
      />

      {/* Oversized ghost numeral pushed to the far right */}
      <span
        aria-hidden
        className="pointer-events-none absolute bottom-0 -right-8 select-none font-serif italic leading-none text-white/[0.025] text-[24vw] md:text-[20vw]"
      >
        13
      </span>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-12 items-start">
          
          {/* Left Column: Heading & Paragraph */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease }}
              className="flex items-center gap-4"
            >
              <span className="font-mono-tech text-[11px] uppercase tracking-[0.28em] text-cyan-300/80">
                § Capabilities
              </span>
              <span className="h-px w-16 bg-gradient-to-r from-cyan-400/40 to-transparent" />
              <span className="font-mono-tech text-[11px] uppercase tracking-[0.24em] text-white/45">
                13 Modules · One Engine
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease }}
              className="mt-8 max-w-3xl text-[2.6rem] leading-[1.02] tracking-[-0.03em] text-white sm:text-6xl md:text-7xl"
            >
              <span className="font-medium">Thirteen capabilities.</span>
              <br />
              <span className="font-serif italic font-normal text-neural">
                One unified engine.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.24, ease }}
              className="mt-8 max-w-xl text-lg leading-relaxed text-white/60 text-balance md:text-xl"
            >
              Each module is independently routable and purpose-built - coordinated
              through a single, self-optimizing orchestration layer. Together, they
              redefine what intelligent execution looks like.
            </motion.p>
          </div>

          {/* Right Column: Triplet List & Sign-off (Staggered downwards) */}
          <div className="lg:col-span-5 lg:mt-32">
            <div className="border-l border-white/10 pl-6 lg:pl-8">
              {TRIPLET.map((t, i) => (
                <motion.p
                  key={t.accent}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + i * 0.14, ease }}
                  className="flex items-baseline gap-3 py-2 text-lg text-white/55 md:text-xl"
                >
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-cyan-400" />
                  <span>
                    {t.pre}{" "}
                    <span className="font-serif italic text-synapse">
                      {t.accent}
                    </span>
                  </span>
                </motion.p>
              ))}
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.9, ease }}
              className="mt-12 font-serif text-2xl italic text-white/80 md:text-3xl pl-6 lg:pl-8"
            >
              This is Vaino.
            </motion.p>
          </div>
          
        </div>
      </div>
    </section>
  );
}

export default CapabilitiesHero;