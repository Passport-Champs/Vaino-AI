function GithubMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.87-1.54-3.87-1.54-.52-1.33-1.28-1.68-1.28-1.68-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.71 1.26 3.37.96.11-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.68 0-1.25.45-2.28 1.19-3.08-.12-.29-.52-1.46.11-3.04 0 0 .97-.31 3.18 1.18.92-.26 1.91-.39 2.89-.39.98 0 1.97.13 2.89.39 2.21-1.49 3.18-1.18 3.18-1.18.63 1.58.23 2.75.11 3.04.74.8 1.19 1.83 1.19 3.08 0 4.41-2.7 5.38-5.27 5.67.41.35.78 1.05.78 2.12 0 1.53-.01 2.77-.01 3.14 0 .31.21.68.8.56C20.21 21.38 23.5 17.08 23.5 12 23.5 5.65 18.35.5 12 .5z" />
    </svg>
  );
}

function XMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M18.244 2H21.5l-7.523 8.596L23 22h-6.844l-5.36-6.93L4.64 22H1.38l8.046-9.196L1 2h7.014l4.85 6.41L18.244 2zm-1.2 18h1.9L7.056 4h-2.02l12.008 16z" />
    </svg>
  );
}

function LinkedinMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.95v5.66H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 1 1 0-4.15 2.07 2.07 0 0 1 0 4.15zM7.12 20.45H3.55V9h3.57v11.45zM22.23 0H1.77C.79 0 0 .77 0 1.72v20.55C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.73V1.72C24 .77 23.21 0 22.23 0z" />
    </svg>
  );
}

const NAV = [
  {
    heading: "Engine",
    items: [
      { label: "Capabilities", href: "#capabilities" },
      { label: "Neural Cortex", href: "#architecture" },
      { label: "Memory Model", href: "#architecture" },
      { label: "AGI Horizon", href: "#horizon" },
    ],
  },
  {
    heading: "Company",
    items: [
      { label: "About", href: "#" },
      { label: "Research", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Press", href: "#" },
    ],
  },
  {
    heading: "Compliance",
    items: [
      { label: "Security", href: "#" },
      { label: "Privacy", href: "#" },
      { label: "Terms", href: "#" },
      { label: "Provenance", href: "#" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative mt-auto border-t border-white/5">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr_1fr_1fr] gap-10">
          <div>
            <div className="flex items-center gap-2">
              <svg viewBox="0 0 28 28" className="size-6" fill="none">
                <defs>
                  <linearGradient id="fg" x1="0" y1="0" x2="28" y2="28">
                    <stop offset="0%" stopColor="#22d3ee" />
                    <stop offset="100%" stopColor="#6366f1" />
                  </linearGradient>
                </defs>
                <path
                  d="M4 5 L14 23 L24 5"
                  stroke="url(#fg)"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle cx="14" cy="14" r="2" fill="url(#fg)" />
              </svg>
              <span className="text-sm font-semibold tracking-tight text-white">
                Vaino AI
              </span>
              <span className="font-mono-tech text-[10px] uppercase tracking-[0.18em] text-white/40 border-l border-white/10 pl-2 ml-1">
                v.0.9
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm text-white/50 text-balance">
              The world's first Human Intelligence Engine. Trillions of
              active parameters. Lifelong reinforcement learning. Strategic
              execution, not prediction.
            </p>
            <div className="mt-5 flex items-center gap-2">
              {[
                { icon: GithubMark, href: "#" },
                { icon: XMark, href: "#" },
                { icon: LinkedinMark, href: "#" },
              ].map(({ icon: Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="inline-flex size-8 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-white/60 transition hover:border-cyan-400/40 hover:text-cyan-300"
                >
                  <Icon className="size-3.5" />
                </a>
              ))}
            </div>
          </div>

          {NAV.map((col) => (
            <div key={col.heading}>
              <h4 className="font-mono-tech text-[10px] uppercase tracking-[0.2em] text-white/40">
                {col.heading}
              </h4>
              <ul className="mt-4 space-y-2.5">
                {col.items.map((i) => (
                  <li key={i.label}>
                    <a
                      href={i.href}
                      className="text-sm text-white/70 transition hover:text-white"
                    >
                      {i.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-6 border-t border-white/5 flex flex-col md:flex-row gap-3 md:items-center md:justify-between">
          <p className="font-mono-tech text-[11px] uppercase tracking-[0.14em] text-white/35">
            © {new Date().getFullYear()} Vaino AI · www.vaino.ai
          </p>
          <div className="flex items-center gap-4 font-mono-tech text-[10px] uppercase tracking-[0.14em] text-white/35">
            <span className="flex items-center gap-1.5">
              <span className="size-1.5 rounded-full bg-emerald-400 animate-node" />
              Cortex online
            </span>
            <span>SOC2 · GDPR · EU-AI-Act ready</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
