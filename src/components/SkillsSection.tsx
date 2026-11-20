"use client";

import React, { useState } from "react";
import { sound } from "@/lib/sound";
import { SKILL_CATEGORIES } from "@/lib/data";
import { 
  Sparkles, 
  Cpu, 
  Bot, 
  Layout, 
  Server, 
  Cloud,
  CheckCircle2,
  Award
} from "lucide-react";

export const SkillsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Cpu": return <Cpu className="w-4 h-4 text-cyan-400" />;
      case "Bot": return <Bot className="w-4 h-4 text-indigo-400" />;
      case "Layout": return <Layout className="w-4 h-4 text-violet-400" />;
      case "Server": return <Server className="w-4 h-4 text-emerald-400" />;
      case "Cloud": return <Cloud className="w-4 h-4 text-sky-400" />;
      default: return <Sparkles className="w-4 h-4 text-indigo-400" />;
    }
  };

  return (
    <section id="skills" className="py-24 relative bg-grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Comprehensive Skills Matrix
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 mt-2">
            Structured proficiency across physical electronics, autonomous AI swarms, full-stack web engineering, and cloud deployment.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {SKILL_CATEGORIES.map((cat, idx) => (
            <button
              key={cat.name}
              onClick={() => {
                sound.playClick();
                setActiveTab(idx);
              }}
              onMouseEnter={() => sound.playHover()}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                activeTab === idx
                  ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/30 scale-[1.02]"
                  : "glass-panel text-zinc-400 hover:text-white hover:bg-white/[0.06]"
              }`}
            >
              {getIcon(cat.icon)}
              <span>{cat.name}</span>
            </button>
          ))}
        </div>

        {/* Active Category Display */}
        <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-white/[0.08] shadow-2xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-white/[0.08] mb-6 gap-2">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08]">
                {getIcon(SKILL_CATEGORIES[activeTab].icon)}
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">
                  {SKILL_CATEGORIES[activeTab].name}
                </h3>
                <p className="text-xs text-zinc-400">
                  {SKILL_CATEGORIES[activeTab].description}
                </p>
              </div>
            </div>
            <span className="text-xs font-mono text-zinc-500">
              {SKILL_CATEGORIES[activeTab].skills.length} Core Competencies Verified
            </span>
          </div>

          {/* Skills Grid */}
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
            {SKILL_CATEGORIES[activeTab].skills.map((skill, i) => (
              <div
                key={i}
                className="bg-white/[0.02] hover:bg-white/[0.04] p-4 rounded-xl border border-white/[0.05] transition-all"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold text-zinc-200">
                      {skill.name}
                    </span>
                    {skill.highlight && (
                      <span className="px-1.5 py-0.5 rounded text-[10px] font-mono bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                        Primary
                      </span>
                    )}
                  </div>
                  <span className="text-xs font-mono text-indigo-400 font-bold">
                    {skill.level}%
                  </span>
                </div>

                {/* Progress Bar */}
                <div className="w-full bg-white/[0.06] h-1.5 rounded-full overflow-hidden mb-2">
                  <div
                    className="h-full bg-gradient-to-r from-indigo-500 to-cyan-400 rounded-full transition-all duration-700 ease-out"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>

                <div className="flex items-center justify-between text-[11px] text-zinc-500 font-mono">
                  <span>Track: {skill.category}</span>
                  <span>Exp: {skill.experience}</span>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

