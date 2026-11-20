"use client";

import React from "react";
import { sound } from "@/lib/sound";
import { PERSONAL_INFO } from "@/lib/data";
import { 
  ArrowUpRight, 
  Terminal, 
  Bot, 
  Cpu, 
  Sparkles, 
  Layers, 
  Github, 
  Linkedin, 
  Mail,
  CheckCircle2,
  Activity
} from "lucide-react";

interface HeroProps {
  onOpenTerminal: () => void;
  onOpenAi: () => void;
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenTerminal,
  onOpenAi,
  onOpenResume,
}) => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-grid-pattern">
      {/* Background Radial Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[550px] glow-spotlight pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel text-xs font-medium text-zinc-300 mb-8 border border-white/[0.08] shadow-inner">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>{PERSONAL_INFO.status}</span>
          </div>

          {/* Primary Main Title */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white mb-6 leading-[1.1]">
            Engineering{" "}
            <span className="gradient-text-indigo">Silicon</span>,{" "}
            <span className="gradient-text-cyan">Cloud</span> &{" "}
            <span className="gradient-text-emerald">Agentic AI</span>.
          </h1>

          {/* Subheading & Core Value Proposition */}
          <p className="text-base sm:text-lg md:text-xl text-zinc-400 font-normal max-w-2xl mb-10 leading-relaxed">
            I am <strong className="text-white font-semibold">Niyas Jahangeer</strong> — an Electronics & Communication Engineering student, full-stack engineer, and technology builder. I bridge physical microcontrollers and IoT telemetry with high-throughput cloud architectures and autonomous multi-agent intelligence.
          </p>

          {/* Primary Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-14">
            {/* Explore Projects Button */}
            <a
              href="#projects"
              onClick={() => sound.playClick()}
              onMouseEnter={() => sound.playHover()}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold shadow-lg shadow-indigo-600/30 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <Layers className="w-4 h-4" />
              <span>Explore Architecture & Projects</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            {/* Live Hardware Simulator Button */}
            <a
              href="#hardware-lab"
              onClick={() => sound.playClick()}
              onMouseEnter={() => sound.playHover()}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl glass-panel text-zinc-200 hover:text-white text-sm font-semibold transition-all hover:scale-[1.02] hover:border-cyan-500/40"
            >
              <Cpu className="w-4 h-4 text-cyan-400" />
              <span>Interactive IoT Hardware Lab</span>
            </a>

            {/* Talk to AI Button */}
            <button
              onClick={() => {
                sound.playClick();
                onOpenAi();
              }}
              onMouseEnter={() => sound.playHover()}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl glass-panel text-indigo-300 hover:text-indigo-200 text-sm font-semibold transition-all hover:scale-[1.02] hover:border-indigo-500/40"
            >
              <Bot className="w-4 h-4 text-indigo-400" />
              <span>Ask Niyas AI</span>
            </button>

            {/* Terminal Button */}
            <button
              onClick={() => {
                sound.playClick();
                onOpenTerminal();
              }}
              onMouseEnter={() => sound.playHover()}
              className="inline-flex items-center gap-2 px-4 py-3 rounded-xl glass-panel text-zinc-400 hover:text-white text-sm font-mono transition-all hover:scale-[1.02]"
              title="Launch Dev Shell"
            >
              <Terminal className="w-4 h-4" />
              <span className="text-xs">⌘K Shell</span>
            </button>
          </div>

          {/* Social Proof & Direct Channels */}
          <div className="flex items-center gap-4 text-zinc-400 mb-12">
            <a
              href={PERSONAL_INFO.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => sound.playClick()}
              className="p-2.5 rounded-full glass-panel hover:text-white hover:border-white/20 transition-all hover:scale-110"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => sound.playClick()}
              className="p-2.5 rounded-full glass-panel hover:text-white hover:border-white/20 transition-all hover:scale-110"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.socials.email}`}
              onClick={() => sound.playClick()}
              className="p-2.5 rounded-full glass-panel hover:text-white hover:border-white/20 transition-all hover:scale-110"
              aria-label="Send Direct Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          {/* Core Quantitative Engineering Metrics Cards */}
          <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            {PERSONAL_INFO.stats.map((stat, i) => (
              <div
                key={i}
                className="glass-panel p-4 rounded-2xl flex flex-col items-center justify-center border border-white/[0.06] hover:border-indigo-500/30 transition-all"
              >
                <div className="text-xl sm:text-2xl font-mono font-bold text-white tracking-tight">
                  {stat.value}
                </div>
                <div className="text-[11px] sm:text-xs text-zinc-400 uppercase tracking-wider mt-1 text-center font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

