"use client";

import React, { useState } from "react";
import { sound } from "@/lib/sound";
import { PROJECTS, Project } from "@/lib/data";
import { ProjectModal } from "./ProjectModal";
import { 
  Layers, 
  ExternalLink, 
  Github, 
  ArrowUpRight, 
  Cpu, 
  Bot, 
  Server, 
  SlidersHorizontal 
} from "lucide-react";

export const ProjectsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ["All", "IoT & Robotics", "Full-Stack SaaS", "AI & Agents", "Embedded Systems"];

  const filteredProjects = activeCategory === "All"
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === activeCategory);

  const handleCardClick = (p: Project) => {
    sound.playClick();
    setSelectedProject(p);
  };

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 mb-3">
              <Layers className="w-3.5 h-3.5" />
              <span>Production Portfolio</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Featured Architectures & Systems
            </h2>
            <p className="text-sm sm:text-base text-zinc-400 mt-2 max-w-xl">
              From low-power IoT sensor telemetry to full-stack multi-tenant web platforms and agentic AI pipelines. Click any system for deep architecture specs.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-white/[0.03] border border-white/[0.06] backdrop-blur-md">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  sound.playClick();
                  setActiveCategory(cat);
                }}
                onMouseEnter={() => sound.playHover()}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 ${
                  activeCategory === cat
                    ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/30"
                    : "text-zinc-400 hover:text-white hover:bg-white/[0.05]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => handleCardClick(project)}
              onMouseEnter={() => sound.playHover()}
              className="glass-panel glass-panel-hover rounded-2xl p-6 flex flex-col justify-between cursor-pointer group relative overflow-hidden"
            >
              {/* Top Accent Gradient Border */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-indigo-500 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity" />

              <div>
                {/* Badge & Category */}
                <div className="flex items-center justify-between mb-4">
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
                    {project.badge}
                  </span>
                  <span className="text-[11px] font-mono text-zinc-500 group-hover:text-zinc-300 transition-colors">
                    {project.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors mb-2.5 flex items-center justify-between">
                  <span>{project.title}</span>
                  <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-indigo-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-6 line-clamp-3">
                  {project.shortDesc}
                </p>

                {/* Metrics Highlight Pills */}
                <div className="grid grid-cols-2 gap-2 mb-6">
                  {project.metrics.slice(0, 2).map((m, idx) => (
                    <div key={idx} className="bg-white/[0.02] border border-white/[0.05] p-2 rounded-lg text-center">
                      <div className="text-xs font-mono font-bold text-cyan-400">{m.value}</div>
                      <div className="text-[10px] text-zinc-500 uppercase">{m.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Tags & Links */}
              <div>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.slice(0, 4).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded text-[11px] font-mono bg-white/[0.03] text-zinc-400 border border-white/[0.04]"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 4 && (
                    <span className="px-1.5 py-0.5 rounded text-[10px] font-mono text-zinc-500">
                      +{project.tags.length - 4}
                    </span>
                  )}
                </div>

                <div className="flex items-center justify-between text-xs text-indigo-400 font-medium pt-3 border-t border-white/[0.05]">
                  <span className="group-hover:underline">View System Specs</span>
                  <span className="text-zinc-500 text-[11px]">Inspect Architecture →</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};

