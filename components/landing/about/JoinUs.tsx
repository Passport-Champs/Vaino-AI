"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, Sparkles } from "lucide-react";
import Link from "next/link";

const ease = [0.2, 0.8, 0.2, 1] as const;

export function JoinUs() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="join"
      className="relative isolate py-28 md:py-40 scroll-mt-24 overflow-hidden"
    >
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 60%, rgba(34,211,238,0.12), transparent 60%), radial-gradient(ellipse 50% 40% at 50% 120%, rgba(99,102,241,0.14), transparent 60%)",
        }}
      />
      <div className="absolute inset-0 bg-grid bg-grid-fade pointer-events-none opacity-50" />

      <div
        ref={ref}
        className="relative mx-auto max-w-4xl px-4 sm:px-6 text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease }}
          className="flex items-center justify-center gap-4"
        >
          <span className="h-px w-12 bg-gradient-to-r from-transparent to-cyan-400/40" />
          <span className="font-mono-tech text-[11px] uppercase tracking-[0.28em] text-white/45">
            § 07 · Join Us
          </span>
          <span className="h-px w-12 bg-gradient-to-l from-transparent to-cyan-400/40" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.12, ease }}
          className="mt-8 text-4xl leading-[1.05] tracking-[-0.02em] text-white sm:text-5xl md:text-6xl"
        >
          <span className="font-medium">Be part of the</span>
          <br />
          <span className="font-serif italic font-normal text-neural">
            cognitive revolution.
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.24, ease }}
          className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-white/60 text-balance"
        >
          Vaino is on a mission to redefine intelligence and build a future
          where technology serves humanity - where machines don&apos;t just
          compute, they think. If you are passionate about AI, obsessed with
          innovation, and driven to make a difference, we invite you to build
          the future of intelligence with us.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.36, ease }}
          className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <Link
            href="/#waitlist"
            className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-xl border border-cyan-400/40 bg-gradient-to-b from-cyan-400/30 to-cyan-500/10 px-6 py-3 text-sm font-medium text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_10px_30px_-10px_rgba(34,211,238,0.4)] transition hover:from-cyan-400/40"
          >
            <span className="relative z-10">Join the Waitlist</span>
            <ArrowUpRight className="relative z-10 size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            <span className="absolute inset-0 bg-[linear-gradient(110deg,transparent,rgba(255,255,255,0.14),transparent)] bg-[length:200%_100%] -translate-x-full group-hover:animate-[shimmer_1.6s_linear_infinite]" />
          </Link>
          <Link
            href="/#architecture"
            className="group inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-6 py-3 text-sm text-white/80 backdrop-blur transition hover:border-white/20 hover:bg-white/[0.06]"
          >
            <Sparkles className="size-4 text-cyan-300" />
            Explore the System
          </Link>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.6, ease }}
          className="mt-16 font-serif text-xl italic text-white/45 md:text-2xl"
        >
          Welcome to Vaino - the next step in computational evolution.
        </motion.p>
      </div>
    </section>
  );
}

export default JoinUs;
