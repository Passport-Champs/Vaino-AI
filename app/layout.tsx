import type { Metadata, Viewport } from "next";
import { Geist, JetBrains_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Vaino AI - The Human Intelligence Engine",
  description:
    "Vaino AI is the world's first Human Intelligence Engine. A Mixture of Experts architecture with an Agentic Orchestration Matrix - advancing from generative mimicry to autonomous agency.",
  metadataBase: new URL("https://www.vaino.ai"),
  openGraph: {
    title: "Vaino AI - The Human Intelligence Engine",
    description:
      "Trillions of active parameters. Lifelong reinforcement learning. The architecture of the inevitable future.",
    url: "https://www.vaino.ai",
    siteName: "Vaino AI",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#040509",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${jetbrainsMono.variable} ${instrumentSerif.variable} h-full antialiased`}
    >
      <head>
        {/* Favicon injected as inline SVG */}
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 32 32%22><defs><linearGradient id=%22g%22 x1=%220%22 y1=%220%22 x2=%2232%22 y2=%2232%22><stop stop-color=%22%2322d3ee%22/><stop offset=%221%22 stop-color=%22%236366f1%22/></linearGradient></defs><path d=%22M5 7 L16 26 L27 7%22 stroke=%22url(%23g)%22 stroke-width=%222.5%22 fill=%22none%22 stroke-linecap=%22round%22 stroke-linejoin=%22round%22/><circle cx=%2216%22 cy=%2215%22 r=%222.5%22 fill=%22url(%23g)%22/><circle cx=%2216%22 cy=%2215%22 r=%227.5%22 stroke=%22url(%23g)%22 stroke-opacity=%220.25%22 stroke-width=%221.2%22 fill=%22none%22/></svg>"
        />
      </head>

      <body className="min-h-full flex flex-col bg-obsidian-950 text-white/90 selection:bg-cyan-500/30">
        {children}
      </body>
    </html>
  );
}