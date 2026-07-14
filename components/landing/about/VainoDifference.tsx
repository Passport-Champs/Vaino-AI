"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  MapPin,
  Network,
  ShieldCheck,
  Target,
  Telescope,
  type LucideIcon,
} from "lucide-react";
import { SectionHeader } from "@/components/landing/about/SectionHeader";

type Point = {
  id: string;
  icon: LucideIcon;
  title: string;
  body: string;
};

const POINTS: Point[] = [
  {
    id: "unified",
    icon: Network,
    title: "A Unified Engine",
    body: "Not a patchwork of disconnected tools - the Human Intelligence Engine integrates multiple models, technologies, and disciplines into one cohesive system.",
  },
  {
    id: "impact",
    icon: Target,
    title: "Real-World Impact",
    body: "We are not building AI for the sake of AI. Every breakthrough is designed to solve real problems - across business, finance, healthcare, and education.",
  },
  {
    id: "global",
    icon: MapPin,
    title: "A Global Perspective",
    body: "Our team is diverse, distributed, and deeply connected to the world - informed by a wide range of perspectives and experiences.",
  },
  {
    id: "ethics",
    icon: ShieldCheck,
    title: "Ethical & Aligned",
    body: "We build AI that is ethical, transparent, and aligned with human values. Intelligent, and responsible.",
  },
];

const ease = [0.2, 0.8, 0.2, 1] as const;

export function VainoDifference() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="difference"
      className="relative isolate py-24 md:py-36 scroll-mt-24 overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid bg-grid-fade opacity-50 pointer-events-none" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader
          index="§ 06"
          eyebrow="Positioning"
          title="The Vaino difference -"
          accent="why we stand apart."
          description="Vaino is a frontier lab, run by people who are extremely passionate. Not just a company - a movement, and a revolution in intelligence."
        />

        <div
          ref={ref}
          className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"
        >
          {/* Featured card - spans and leads */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease }}
            className="group relative overflow-hidden rounded-2xl border border-cyan-400/25 bg-gradient-to-br from-obsidian-800/80 via-obsidian-900/80 to-obsidian-900 p-7 hover-glow md:row-span-2 lg:col-span-1"
          >
            <div
              className="pointer-events-none absolute -top-24 -right-24 size-64 rounded-full blur-3xl opacity-40"
              style={{
                background:
                  "radial-gradient(circle, rgba(99,102,241,0.4), transparent 60%)",
              }}
            />
            <div className="relative flex h-full flex-col">
              <div className="inline-flex size-12 items-center justify-center rounded-xl border border-cyan-400/30 bg-cyan-500/10">
                <Telescope className="size-5 text-cyan-300" />
              </div>
              <h3 className="mt-auto pt-10 font-serif text-3xl italic leading-tight text-white md:text-4xl">
                The Frontier of AI
              </h3>
              <p className="mt-4 text-base leading-relaxed text-white/60">
                We live on the bleeding edge of technological evolution - a
                team motivated to push boundaries, driven by a genuine sense of
                purpose and agency.
              </p>
            </div>
          </motion.div>

          {POINTS.map((p, i) => (
            <PointCard key={p.id} point={p} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PointCard({
  point,
  index,
  inView,
}: {
  point: Point;
  index: number;
  inView: boolean;
}) {
  const Icon = point.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.1 + index * 0.08, ease }}
      className="relative rounded-2xl border border-white/10 bg-gradient-to-b from-obsidian-800/50 to-obsidian-900/70 p-6 hover-glow"
    >
      <div className="inline-flex size-10 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-500/[0.08]">
        <Icon className="size-[18px] text-cyan-300" />
      </div>
      <h3 className="mt-5 text-lg font-medium tracking-tight text-white">
        {point.title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-white/55">{point.body}</p>
    </motion.div>
  );
}

export default VainoDifference;
