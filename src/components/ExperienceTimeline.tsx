"use client";

import React from "react";
import { sound } from "@/lib/sound";
import { TIMELINE, HACKATHONS } from "@/lib/data";
import { 
  GraduationCap, 
  Briefcase, 
  Cpu, 
  Calendar, 
  MapPin, 
  CheckCircle2,
  Trophy,
  Award
} from "lucide-react";

export const ExperienceTimeline: React.FC = () => {
  const getTypeBadge = (type: string) => {
    switch (type) {
      case "Education":
        return <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">Education</span>;
      case "Leadership":
        return <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">Leadership</span>;
      case "Entrepreneurship":
        return <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-amber-500/20 text-amber-300 border border-amber-500/30">Founder & CEO</span>;
      default:
        return null;
    }
  };

  return (
    <section id="timeline" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Leadership & Track Record</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Roles, Community & Education
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 mt-2">
            Serving as President of IRIS Community, Secretary General of COGNEX.AI, Founder of SIRAQ Studio, and ECE undergraduate at KVGCE.
          </p>
        </div>

        {/* Timeline Items */}
        <div className="relative border-l border-white/[0.1] ml-4 sm:ml-32 space-y-12 mb-20">
          {TIMELINE.map((item) => (
            <div key={item.id} className="relative pl-8 sm:pl-10 group">
              
              {/* Bullet Node */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-[#090a0f] border-2 border-indigo-500 group-hover:border-cyan-400 group-hover:scale-125 transition-all shadow-md shadow-indigo-500/50" />

              {/* Time Label on left for desktop */}
              <div className="hidden sm:block absolute -left-36 top-1 text-right w-24">
                <span className="font-mono text-xs font-bold text-indigo-400">
                  {item.period}
                </span>
              </div>

              {/* Card Container */}
              <div className="glass-panel glass-panel-hover p-6 rounded-2xl border border-white/[0.08]">
                
                {/* Mobile time badge */}
                <div className="sm:hidden font-mono text-xs font-bold text-indigo-400 mb-2">
                  {item.period}
                </div>

                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <h3 className="text-lg font-bold text-white group-hover:text-indigo-300 transition-colors">
                    {item.role}
                  </h3>
                  {getTypeBadge(item.type)}
                </div>

                <div className="flex items-center gap-4 text-xs text-zinc-400 mb-4">
                  <span className="font-medium text-zinc-300">{item.organization}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-zinc-500" />
                    <span>{item.location}</span>
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mb-4">
                  {item.description}
                </p>

                {/* Key Achievements */}
                <div className="space-y-2 mb-4">
                  {item.achievements.map((ach, aIdx) => (
                    <div key={aIdx} className="flex items-start gap-2 text-xs text-zinc-400">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{ach}</span>
                    </div>
                  ))}
                </div>

                {/* Tag Pills */}
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/[0.05]">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/[0.03] text-zinc-400 border border-white/[0.05]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

              </div>

            </div>
          ))}
        </div>

        {/* Hackathons & Competitions Grid */}
        <div className="mt-16">
          <div className="flex items-center gap-2 mb-6">
            <Trophy className="w-5 h-5 text-amber-400" />
            <h3 className="text-xl font-bold text-white">National Hackathons & Competitions</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {HACKATHONS.map((hack, idx) => (
              <div key={idx} className="glass-panel p-5 rounded-2xl border border-white/[0.08] flex flex-col justify-between">
                <div>
                  {hack.rank && (
                    <span className="inline-block px-2.5 py-0.5 rounded text-[10px] font-mono font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30 mb-3">
                      {hack.rank}
                    </span>
                  )}
                  <h4 className="text-sm font-bold text-white mb-1">{hack.name}</h4>
                  <div className="text-xs text-zinc-400 mb-3">{hack.organizer}</div>
                  <p className="text-xs text-zinc-400 leading-relaxed mb-4">{hack.description}</p>
                </div>
                <div className="pt-3 border-t border-white/[0.05] text-[11px] font-mono text-cyan-300">
                  {hack.highlight}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
