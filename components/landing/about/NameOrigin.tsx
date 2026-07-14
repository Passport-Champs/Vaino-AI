"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { SectionHeader } from "@/components/landing/about/SectionHeader";

const QUALITIES = [
  {
    label: "Wisdom & Insight",
    body: "As Väinämöinen shaped the world through knowledge and magic, we harness AI to build systems that understand, reason, and act with human-like intelligence.",
  },
  {
    label: "The Power of Language",
    body: "His mastery of song and poetry mirrors our focus on natural language - systems that communicate with the depth, nuance, and clarity of a true sage.",
  },
  {
    label: "A Legacy of Innovation",
    body: "The name is a homage to exploration and discovery. We are pioneers, pushing the boundaries of what AI can achieve, just as he pushed the boundaries of human knowledge.",
  },
  {
    label: "A Symbol of Unity",
    body: "Väinämöinen was a unifier of disparate elements. Vaino unifies multiple models, technologies, and disciplines into a single, cohesive intelligence.",
  },
];

const ease = [0.2, 0.8, 0.2, 1] as const;

export function NameOrigin() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="name"
      className="relative isolate py-24 md:py-36 scroll-mt-24 overflow-hidden"
    >
      {/* Ambient indigo wash to warm this narrative section */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 50% 50% at 15% 40%, rgba(99,102,241,0.10), transparent 60%)",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader
          index="§ 02"
          eyebrow="Etymology"
          title="The Name:"
          accent="Vaino"
          description="Rooted in lore, wisdom, and the relentless pursuit of knowledge."
        />

        <div
          ref={ref}
          className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20"
        >
          {/* Left - the myth */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease }}
          >
            <span className="font-mono-tech text-[10px] uppercase tracking-[0.24em] text-cyan-300/80">
              Finnish Folklore · The Kalevala
            </span>
            <p className="mt-4 font-serif text-5xl italic leading-[1.05] text-white md:text-6xl">
              Väinämöinen
            </p>
            <p className="mt-3 font-mono-tech text-xs tracking-[0.14em] text-white/40">
              væi·næ·møi·nen - the eternal sage
            </p>

            <p className="mt-8 text-lg leading-relaxed text-white/60 text-balance">
              In Finnish folklore, Väinämöinen - also Vaino, or Väinö - is the
              eternal sage: master of song, wisdom, and magic. He is the
              embodiment of intelligence, creativity, and the power of words.
            </p>

            <blockquote className="mt-10 border-l-2 border-cyan-400/40 pl-6">
              <p className="font-serif text-2xl italic leading-snug text-white/85 md:text-3xl">
                &ldquo;Qualities that define our mission - to shape the world
                through knowledge, and to give intelligence a voice.&rdquo;
              </p>
            </blockquote>
          </motion.div>

          {/* Right - the parallels */}
          <div className="border-t border-white/10">
            {QUALITIES.map((q, i) => (
              <motion.div
                key={q.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.12 + i * 0.1, ease }}
                className="border-b border-white/10 py-6"
              >
                <h3 className="font-serif text-xl italic text-cyan-100/90 md:text-2xl">
                  {q.label}
                </h3>
                <p className="mt-2 text-base leading-relaxed text-white/55">
                  {q.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default NameOrigin;
