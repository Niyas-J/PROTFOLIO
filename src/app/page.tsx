"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ProjectsSection } from "@/components/ProjectsSection";
import { HardwareSimulator } from "@/components/HardwareSimulator";
import { SkillsSection } from "@/components/SkillsSection";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { CommandPalette } from "@/components/CommandPalette";
import { AiAssistantModal } from "@/components/AiAssistantModal";
import { ResumeModal } from "@/components/ResumeModal";

export default function Home() {
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [aiModalOpen, setAiModalOpen] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#090a0f] text-foreground flex flex-col selection:bg-indigo-500/30 selection:text-indigo-200">
      {/* Top Floating Glass Navigation */}
      <Navbar
        onOpenTerminal={() => setTerminalOpen(true)}
        onOpenAi={() => setAiModalOpen(true)}
        onOpenResume={() => setResumeOpen(true)}
      />

      <main className="flex-1">
        {/* Dynamic Hero Section */}
        <Hero
          onOpenTerminal={() => setTerminalOpen(true)}
          onOpenAi={() => setAiModalOpen(true)}
          onOpenResume={() => setResumeOpen(true)}
        />

        {/* Featured Projects & Architectures */}
        <ProjectsSection />

        {/* Interactive ECE Hardware & IoT Telemetry Sandbox */}
        <HardwareSimulator />

        {/* Comprehensive Skills Matrix */}
        <SkillsSection />

        {/* Milestones & Leadership Timeline */}
        <ExperienceTimeline />

        {/* Full-Stack Contact Section with Form API & Validation */}
        <ContactSection />
      </main>

      {/* Production Footer with Live IST Clock */}
      <Footer />

      {/* Global Command Palette / Terminal Drawer (Ctrl+K) */}
      <CommandPalette
        isOpen={terminalOpen}
        onClose={() => setTerminalOpen(false)}
        onOpenAi={() => setAiModalOpen(true)}
        onOpenResume={() => setResumeOpen(true)}
      />

      {/* Interactive AI Assistant Modal ("Ask Niyas AI") */}
      <AiAssistantModal
        isOpen={aiModalOpen}
        onClose={() => setAiModalOpen(false)}
      />

      {/* Printable Resume / CV Modal */}
      <ResumeModal
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
      />
    </div>
  );
}

