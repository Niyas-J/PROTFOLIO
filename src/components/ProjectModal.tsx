"use client";

import React from "react";
import { sound } from "@/lib/sound";
import { Project } from "@/lib/data";
import { 
  X, 
  ExternalLink, 
  Github, 
  Layers, 
  CheckCircle2, 
  Cpu, 
  Activity, 
  Network
} from "lucide-react";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-fade-in">
      <div 
        className="w-full max-w-3xl bg-[#0c0e17] border border-white/[0.12] rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/[0.08] bg-white/[0.02]">
          <div className="flex items-center gap-2.5">
            <span className="px-2.5 py-1 rounded-full text-xs font-mono font-medium bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
              {project.badge}
            </span>
            <span className="text-xs text-zinc-400 font-mono">
              {project.category}
            </span>
          </div>
          <button
            onClick={() => {
              sound.playClick();
              onClose();
            }}
            className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-white/[0.08] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-white mb-2 tracking-tight">
              {project.title}
            </h2>
            <p className="text-sm text-zinc-300 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Key Quantitative Metrics Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-white/[0.02] p-4 rounded-xl border border-white/[0.06]">
            {project.metrics.map((metric, idx) => (
              <div key={idx} className="text-center">
                <div className="text-lg font-mono font-bold text-indigo-400">
                  {metric.value}
                </div>
                <div className="text-[11px] text-zinc-400 uppercase tracking-wider mt-0.5 font-medium">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>

          {/* Architecture Blueprint Breakdown */}
          <div className="glass-panel p-4 rounded-xl border border-white/[0.08] space-y-2">
            <div className="flex items-center gap-2 text-xs font-bold text-cyan-400 uppercase tracking-wider">
              <Network className="w-4 h-4" />
              <span>System & Data Architecture</span>
            </div>
            <p className="text-xs font-mono text-zinc-300 bg-black/40 p-3 rounded-lg border border-white/[0.05] leading-relaxed">
              {project.architecture}
            </p>
          </div>

          {/* Key Capabilities / Features */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold text-zinc-200 uppercase tracking-wider flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Engineered Capabilities</span>
            </h3>
            <div className="grid sm:grid-cols-2 gap-2.5">
              {project.features.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-zinc-300 bg-white/[0.02] p-2.5 rounded-lg border border-white/[0.04]">
                  <span className="text-emerald-400 font-bold mt-0.5">•</span>
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Chips */}
          <div className="space-y-2">
            <h3 className="text-xs font-bold text-zinc-400 uppercase tracking-wider">
              Technologies & Standards
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 rounded-md text-xs font-mono bg-white/[0.04] text-zinc-300 border border-white/[0.06]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer with External Links */}
        <div className="px-6 py-4 border-t border-white/[0.08] bg-[#0d0f17] flex items-center justify-between">
          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => sound.playClick()}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-zinc-200 bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.08] transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>Source Repository</span>
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => sound.playClick()}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-white bg-indigo-600 hover:bg-indigo-500 shadow-md shadow-indigo-600/30 transition-colors"
              >
                <span>Live Portal</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
          <button
            onClick={() => {
              sound.playClick();
              onClose();
            }}
            className="text-xs text-zinc-400 hover:text-white px-3 py-1.5"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

