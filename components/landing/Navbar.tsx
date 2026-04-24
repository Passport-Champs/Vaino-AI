"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";

const LINKS = [
  { label: "Capabilities", href: "#capabilities" },
  { label: "Architecture", href: "#architecture" },
  { label: "Horizon", href: "#horizon" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 12);
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "pt-2" : "pt-5"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <motion.nav
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
          className={`relative flex items-center justify-between rounded-2xl border px-4 sm:px-5 py-3 transition-all duration-500 ${
            scrolled
              ? "border-white/10 bg-obsidian-900/80 backdrop-blur-xl shadow-[0_10px_40px_-15px_rgba(0,0,0,0.8)]"
              : "border-white/5 bg-obsidian-900/40 backdrop-blur-md"
          }`}
        >
          <a href="#top" className="flex items-center gap-2.5 group">
            <VainoLogo />
            <div className="flex items-baseline gap-2">
              <span className="text-sm font-semibold tracking-tight text-white">
                Vaino
              </span>
              <span className="font-mono-tech text-[10px] uppercase tracking-[0.18em] text-cyan-300/80">
                AI
              </span>
            </div>
            <span className="hidden md:inline-flex font-mono-tech text-[10px] uppercase tracking-[0.2em] text-white/40 ml-3 border-l border-white/10 pl-3">
              v.0.9 · cortex
            </span>
          </a>

          <ul className="hidden md:flex items-center gap-1">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="relative rounded-lg px-3 py-1.5 text-sm text-white/70 transition hover:text-white hover:bg-white/5"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <a
              href="#horizon"
              className="hidden sm:inline-flex items-center gap-1.5 font-mono-tech text-[11px] uppercase tracking-[0.14em] text-white/60 hover:text-white transition"
            >
              <span className="size-1.5 rounded-full bg-emerald-400 animate-node" />
              Live
            </a>
            <a
              href="#horizon"
              className="group relative inline-flex items-center gap-1.5 overflow-hidden rounded-lg border border-cyan-400/30 bg-gradient-to-b from-cyan-500/20 to-cyan-500/5 px-3.5 py-1.5 text-xs font-medium text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] transition hover:border-cyan-400/60 hover:from-cyan-500/30"
            >
              <span className="relative z-10">Access</span>
              <ArrowUpRight className="relative z-10 size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              <span className="absolute inset-0 bg-[linear-gradient(110deg,transparent,rgba(125,239,248,0.3),transparent)] bg-[length:200%_100%] -translate-x-full group-hover:animate-[shimmer_1.4s_linear_infinite]" />
            </a>

            <button
              aria-label="Toggle menu"
              onClick={() => setOpen((v) => !v)}
              className="md:hidden inline-flex size-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white/80"
            >
              {open ? <X className="size-4" /> : <Menu className="size-4" />}
            </button>
          </div>
        </motion.nav>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="md:hidden mt-2 glass-strong rounded-2xl p-2"
            >
              <ul className="flex flex-col">
                {LINKS.map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className="flex items-center justify-between rounded-lg px-3 py-2.5 text-sm text-white/80 hover:bg-white/5"
                    >
                      {l.label}
                      <ArrowUpRight className="size-4 text-white/40" />
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}

function VainoLogo() {
  return (
    <div className="relative size-7 shrink-0">
      <svg viewBox="0 0 28 28" className="size-full" fill="none">
        <defs>
          <linearGradient id="logoG" x1="0" y1="0" x2="28" y2="28">
            <stop offset="0%" stopColor="#22d3ee" />
            <stop offset="100%" stopColor="#6366f1" />
          </linearGradient>
        </defs>
        <path
          d="M4 5 L14 23 L24 5"
          stroke="url(#logoG)"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="14" cy="14" r="2" fill="url(#logoG)" />
        <circle
          cx="14"
          cy="14"
          r="6"
          stroke="url(#logoG)"
          strokeOpacity="0.35"
          strokeWidth="1"
        />
      </svg>
      <div className="absolute inset-0 blur-md opacity-60 bg-cyan-400/30 rounded-full -z-10" />
    </div>
  );
}

export default Navbar;
