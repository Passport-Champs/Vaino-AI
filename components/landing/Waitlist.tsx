"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { joinWaitlist } from "@/app/actions/waitlist";

export function Waitlist() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;
    setLoading(true);
    setError(null);
    const result = await joinWaitlist(name, email);
    setLoading(false);
    if (result.error) {
      setError(result.error);
    } else {
      setSubmitted(true);
    }
  }

  return (
    <section
      id="waitlist"
      className="relative isolate overflow-hidden py-28 md:py-36"
    >
      {/* Deep indigo base fill — distinct from the rest of the page */}
      <div className="absolute inset-0 bg-[#06040f]" />

      {/* Radial violet bloom */}
      <div
        aria-hidden
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[90%] w-[80%] rounded-[50%] blur-3xl pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, rgba(109,40,217,0.22), rgba(79,70,229,0.08) 50%, transparent 75%)",
        }}
      />

      {/* Subtle top + bottom edge glows */}
      <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-violet-500/40 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-indigo-500/20 to-transparent" />

      <div className="relative mx-auto max-w-xl px-4 sm:px-6 text-center">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-500/10 px-3 py-1 backdrop-blur">
            <span className="relative flex size-1.5">
              <span className="absolute inset-0 animate-ping rounded-full bg-violet-400/70" />
              <span className="relative size-1.5 rounded-full bg-violet-400" />
            </span>
            <span className="font-mono-tech text-[11px] uppercase tracking-[0.2em] text-violet-300/80">
              Early Access · Limited Seats
            </span>
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.2, 0.8, 0.2, 1] }}
          className="mt-6 text-4xl sm:text-5xl font-semibold tracking-tight leading-[1.08] text-balance"
        >
          <span className="text-white">Be First to Access</span>
          <span className="block bg-linear-to-r from-violet-300 via-indigo-300 to-cyan-300 bg-clip-text text-transparent mt-1">
            the Engine
          </span>
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-5 text-base text-white/50 text-balance"
        >
          Vaino AI is in closed development. Join the waitlist for priority
          access when we open the gates - no spam, just the signal.
        </motion.p>

        {/* Glass card form */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10"
        >
          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="mx-auto inline-flex items-center gap-3 rounded-2xl border border-emerald-400/30 bg-emerald-500/10 px-6 py-5 text-sm text-emerald-300"
              >
                <CheckCircle2 className="size-5 shrink-0" />
                <span className="text-left">
                  <span className="block font-medium text-emerald-200">
                    You&apos;re on the list.
                  </span>
                  <span className="text-emerald-400/60">
                    We&apos;ll reach out when access opens.
                  </span>
                </span>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6 backdrop-blur-md flex flex-col gap-3 shadow-[0_0_60px_-10px_rgba(109,40,217,0.25)]"
              >
                <input
                  type="text"
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition focus:border-violet-400/50 focus:ring-1 focus:ring-violet-400/30"
                />
                <input
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition focus:border-violet-400/50 focus:ring-1 focus:ring-violet-400/30"
                />
                {error && (
                  <p className="text-xs text-red-400/90 text-center -mt-0.5">{error}</p>
                )}
                <button
                  type="submit"
                  disabled={loading}
                  className="group relative w-full inline-flex items-center justify-center gap-2 overflow-hidden rounded-xl border border-violet-400/40 bg-linear-to-b from-violet-500/30 to-indigo-600/20 px-6 py-3 text-sm font-medium text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_10px_30px_-10px_rgba(109,40,217,0.5)] transition hover:from-violet-500/40 disabled:opacity-60"
                >
                  {loading ? (
                    <span className="size-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                  ) : (
                    <>
                      <span>Join Waitlist</span>
                      <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
                    </>
                  )}
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Fine print */}
        {!submitted && (
          <p className="mt-4 font-mono-tech text-[10px] uppercase tracking-[0.16em] text-white/20">
            No credit card · No spam · Unsubscribe any time
          </p>
        )}
      </div>
    </section>
  );
}
