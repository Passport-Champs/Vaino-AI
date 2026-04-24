import type { Metadata, Viewport } from "next";
import { Geist, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vaino AI — The Human Intelligence Engine",
  description:
    "Vaino AI is the world's first Human Intelligence Engine. A Mixture of Experts architecture with an Agentic Orchestration Matrix — advancing from generative mimicry to autonomous agency.",
  metadataBase: new URL("https://www.vaino.ai"),
  openGraph: {
    title: "Vaino AI — The Human Intelligence Engine",
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
      className={`${geistSans.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-obsidian-950 text-white/90 selection:bg-cyan-500/30">
        {children}
      </body>
    </html>
  );
}
