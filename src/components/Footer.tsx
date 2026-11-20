"use client";

import React, { useState, useEffect } from "react";
import { sound } from "@/lib/sound";
import { PERSONAL_INFO } from "@/lib/data";
import { Github, Linkedin, Mail, Phone, ArrowUp } from "lucide-react";

export const Footer: React.FC = () => {
  const [istTime, setIstTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setIstTime(
        now.toLocaleTimeString("en-US", {
          timeZone: "Asia/Kolkata",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    sound.playClick();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-white/[0.08] bg-[#07080c] py-12 text-zinc-400 text-xs relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/[0.06]">
          
          {/* Identity & Status */}
          <div className="flex flex-col items-center md:items-start space-y-1">
            <div className="flex items-center gap-2">
              <span className="font-bold text-white text-sm">Niyas Jahangeer</span>
              <span className="text-[10px] font-mono bg-white/[0.05] px-2 py-0.5 rounded text-zinc-400">
                President @ IRIS · SecGen @ COGNEX.AI · Founder @ SIRAQ
              </span>
            </div>
            <p className="text-zinc-500 text-xs">
              KVG College of Engineering (KVGCE), Sullia, Karnataka · Bengaluru, India
            </p>
          </div>

          {/* Live IST Clock & Node Status */}
          <div className="flex items-center gap-6 text-zinc-400 font-mono text-[11px]">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>KVGCE NODE ONLINE</span>
            </div>
            <div>
              <span>IST (UTC+5:30): </span>
              <span className="text-white font-bold">{istTime || "10:30:00 PM"}</span>
            </div>
          </div>

          {/* Social Icons & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href={PERSONAL_INFO.socials.github}
              target="_blank"
              rel="noreferrer"
              onClick={() => sound.playClick()}
              className="p-2 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-zinc-400 hover:text-white transition-colors"
              title="GitHub (28+ Repos)"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              onClick={() => sound.playClick()}
              className="p-2 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-zinc-400 hover:text-white transition-colors"
              title="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              onClick={() => sound.playClick()}
              className="p-2 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-zinc-400 hover:text-white transition-colors"
              title="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-zinc-400 hover:text-white transition-colors ml-2"
              title="Return to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-zinc-500 text-[11px]">
          <div>
            © {new Date().getFullYear()} Niyas Jahangeer · Phone: {PERSONAL_INFO.phone} · {PERSONAL_INFO.email}
          </div>
          <div className="flex items-center gap-4">
            <span>28+ Repositories</span>
            <span>·</span>
            <span>100+ Deliverables</span>
            <span>·</span>
            <span>Rank 9 HackWise</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
