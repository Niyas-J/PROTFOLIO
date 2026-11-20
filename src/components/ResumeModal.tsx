"use client";

import React from "react";
import { sound } from "@/lib/sound";
import { PERSONAL_INFO, PROJECTS, SKILL_CATEGORIES, TIMELINE } from "@/lib/data";
import { 
  X, 
  Printer, 
  Download, 
  Mail, 
  MapPin, 
  Globe, 
  Github, 
  Linkedin,
  Cpu,
  Layers,
  Award
} from "lucide-react";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    sound.playClick();
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in no-print">
      <div 
        className="w-full max-w-4xl bg-[#0d0f17] border border-white/[0.12] rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/[0.08] bg-[#111422]">
          <div className="flex items-center gap-2">
            <span className="text-sm font-bold text-white">Curriculum Vitae</span>
            <span className="text-xs font-mono text-zinc-400">· Niyas Jahangeer</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-indigo-600 hover:bg-indigo-500 text-white shadow-md shadow-indigo-600/30 transition-all"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save as PDF</span>
            </button>
            <button
              onClick={() => {
                sound.playClick();
                onClose();
              }}
              className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-white/[0.08]"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Printable Document Content */}
        <div className="flex-1 overflow-y-auto p-8 sm:p-10 space-y-8 bg-white text-zinc-900 font-sans">
          
          {/* Header */}
          <div className="border-b-2 border-zinc-900 pb-6">
            <h1 className="text-3xl font-black tracking-tight text-zinc-900 uppercase">
              {PERSONAL_INFO.name}
            </h1>
            <p className="text-base font-semibold text-indigo-700 mt-1">
              Electronics & Communication Engineering · Full-Stack & AI Developer · Founder
            </p>

            <div className="flex flex-wrap items-center gap-4 text-xs text-zinc-600 mt-3 font-medium">
              <span className="flex items-center gap-1">
                <MapPin className="w-3 h-3 text-zinc-500" />
                {PERSONAL_INFO.location}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Mail className="w-3 h-3 text-zinc-500" />
                {PERSONAL_INFO.socials.email}
              </span>
              <span>•</span>
              <a href={PERSONAL_INFO.socials.github} target="_blank" rel="noreferrer" className="underline text-indigo-600">
                github.com/niyasjahangeer
              </a>
              <span>•</span>
              <a href={PERSONAL_INFO.socials.linkedin} target="_blank" rel="noreferrer" className="underline text-indigo-600">
                linkedin.com/in/niyasjahangeer
              </a>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-2">
              Professional Summary
            </h2>
            <p className="text-xs sm:text-sm text-zinc-700 leading-relaxed">
              Electronics & Communication Engineering undergraduate and multi-disciplinary software engineer. Extensive track record architecting end-to-end hardware-to-cloud solutions, embedded firmware (ESP32, STM32, ARM Cortex), full-stack SaaS web applications (Next.js, FastAPI, TypeScript), and state-of-the-art autonomous multi-agent AI pipelines (LangGraph, Gemini API, local LLMs).
            </p>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-2">
              Education
            </h2>
            <div className="text-xs sm:text-sm">
              <div className="flex justify-between font-bold text-zinc-900">
                <span>Bachelor of Technology (B.Tech) - Electronics & Communication Engineering</span>
                <span className="font-mono text-zinc-600">2023 - Present</span>
              </div>
              <p className="text-xs text-zinc-600 mt-0.5">
                Core Coursework: Signals & Systems, Microprocessors & Microcontrollers, VLSI Circuit Design, Digital Signal Processing, Wireless & RF Communications, Embedded Firmware.
              </p>
            </div>
          </div>

          {/* Core Projects & Inventions */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-3">
              Selected Engineered Systems
            </h2>
            <div className="space-y-4">
              {PROJECTS.slice(0, 4).map((p) => (
                <div key={p.id} className="text-xs sm:text-sm">
                  <div className="flex justify-between font-bold text-zinc-900">
                    <span>{p.title}</span>
                    <span className="font-mono text-[11px] text-zinc-500">{p.category}</span>
                  </div>
                  <p className="text-xs text-zinc-700 mt-1">
                    {p.shortDesc}
                  </p>
                  <p className="text-[11px] text-zinc-500 font-mono mt-1">
                    Stack: {p.tags.join(" · ")}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills Overview */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-2">
              Technical Core Competencies
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-zinc-700">
              <div>
                <strong className="text-zinc-900">Hardware & Embedded:</strong> Embedded C/C++, ESP32, STM32, ARM Cortex, LoRaWAN, MQTT, SPI, I2C, UART, PCB Design, Robotics.
              </div>
              <div>
                <strong className="text-zinc-900">Frontend & UI/UX:</strong> React, Next.js 14 (App Router), TypeScript, Tailwind CSS, Framer Motion, Streamlit, Responsive Design.
              </div>
              <div>
                <strong className="text-zinc-900">Backend & Cloud:</strong> Python (FastAPI, Flask), Node.js, Supabase (RLS), Firebase Firestore, MongoDB, PostgreSQL, WebSockets.
              </div>
              <div>
                <strong className="text-zinc-900">AI & Autonomous Agents:</strong> LangGraph, Gemini API, Ollama, Qwen 2.5, Vector Databases (Chroma), RAG, Prompt Engineering.
              </div>
            </div>
          </div>

        </div>

        {/* Modal Bottom Actions */}
        <div className="px-6 py-3 border-t border-white/[0.08] bg-[#0d0f17] flex justify-end">
          <button
            onClick={() => {
              sound.playClick();
              onClose();
            }}
            className="px-4 py-2 text-xs font-medium text-zinc-400 hover:text-white"
          >
            Close Preview
          </button>
        </div>
      </div>
    </div>
  );
};

