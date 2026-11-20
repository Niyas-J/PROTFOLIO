"use client";

import React from "react";
import { sound } from "@/lib/sound";
import { PERSONAL_INFO } from "@/lib/data";
import { 
  X, 
  Printer, 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin,
  ExternalLink,
  Award,
  BookOpen,
  Briefcase,
  Cpu,
  Layers,
  Sparkles
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/85 backdrop-blur-md animate-fade-in no-print">
      <div 
        className="w-full max-w-4xl bg-[#0d0f17] border border-white/[0.12] rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[95vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Header */}
        <div className="flex items-center justify-between px-6 py-3.5 border-b border-white/[0.08] bg-[#101322]">
          <div className="flex items-center gap-2">
            <span className="text-sm font-bold text-white">Niyas Jahangeer – Official Resume</span>
            <span className="text-xs font-mono text-zinc-400">· KVGCE ECE / Founder</span>
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

        {/* Printable Resume Body - Authentic matching Niyas_Jahangeer_Resume_TwoPage.pdf */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-10 space-y-7 bg-white text-zinc-900 font-sans print:p-0 print:m-0">
          
          {/* Header Block with Dark Navy Stripe in Print/Preview */}
          <div className="bg-[#0f172a] text-white p-6 rounded-xl print:rounded-none -mx-2 sm:-mx-6 print:m-0">
            <h1 className="text-2xl sm:text-3xl font-black tracking-tight uppercase">
              NIYAS JAHANGEER
            </h1>
            <p className="text-xs sm:text-sm font-medium tracking-wide text-indigo-300 mt-1 uppercase">
              ECE UNDERGRADUATE | AI & SOFTWARE DEVELOPER | TECHNICAL LEADER | ENTREPRENEUR | PRODUCT BUILDER
            </p>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-zinc-300 mt-3 font-normal">
              <span>Bengaluru, India</span>
              <span>•</span>
              <span>{PERSONAL_INFO.phone}</span>
              <span>•</span>
              <a href={`mailto:${PERSONAL_INFO.email}`} className="text-cyan-300 hover:underline">
                {PERSONAL_INFO.email}
              </a>
              <span>•</span>
              <a href={PERSONAL_INFO.socials.github} target="_blank" rel="noreferrer" className="text-cyan-300 hover:underline">
                github.com/Niyas-J
              </a>
              <span>•</span>
              <a href={PERSONAL_INFO.socials.linkedin} target="_blank" rel="noreferrer" className="text-cyan-300 hover:underline">
                linkedin.com/in/niyas-j
              </a>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="space-y-1.5">
            <h2 className="text-xs font-black uppercase tracking-widest text-[#0f172a] border-b-2 border-[#0f172a] pb-0.5">
              PROFESSIONAL SUMMARY
            </h2>
            <p className="text-xs sm:text-[13px] text-zinc-700 leading-relaxed pt-1">
              Electronics & Communication Engineering undergraduate, AI and software developer, and founder who ships real products: AI-powered healthtech platforms, Flask web applications, and IoT and robotics hardware. Holds two student leadership positions as <strong>President of IRIS Community</strong> and <strong>Secretary General of COGNEX.AI</strong> at KVGCE, runs <strong>SIRAQ Studio</strong> as Founder & CEO, and maintains <strong>28+ GitHub repositories</strong> including a 6+ repository healthtech ecosystem. Delivered <strong>100+ creative deliverables</strong>; works in 5 languages.
            </p>
          </div>

          {/* Leadership Experience */}
          <div className="space-y-3">
            <h2 className="text-xs font-black uppercase tracking-widest text-[#0f172a] border-b-2 border-[#0f172a] pb-0.5">
              LEADERSHIP EXPERIENCE
            </h2>

            {/* IRIS Community */}
            <div className="space-y-1">
              <div className="flex justify-between items-baseline text-xs sm:text-sm">
                <div>
                  <strong className="text-zinc-900">President, IRIS Community</strong> – <span className="text-zinc-700">KVG College of Engineering</span>
                </div>
                <span className="font-semibold text-zinc-800 text-xs">Oct 2026 – Present</span>
              </div>
              <p className="text-[11px] text-indigo-700 font-medium italic">
                Promoted from Technical Coordinator (Mar 2026 – Oct 2026)
              </p>
              <ul className="list-disc list-outside ml-4 text-xs text-zinc-700 space-y-1">
                <li>Lead student community operations, technical teams, events and workshops across IoT, Robotics and Intelligent Software initiatives.</li>
                <li>Organized PCB workshop activities involving <strong>69 students</strong>; coordinating a growing student community and project exhibitions.</li>
                <li>Manage technical development, digital platforms, branding and communication for the community.</li>
                <li>Coordinate student engagement, collaborative learning and practical, project-based learning initiatives.</li>
              </ul>
            </div>

            {/* COGNEX.AI */}
            <div className="space-y-1 pt-1">
              <div className="flex justify-between items-baseline text-xs sm:text-sm">
                <div>
                  <strong className="text-zinc-900">Secretary General, COGNEX.AI</strong> – <span className="text-zinc-700">KVG College of Engineering</span>
                </div>
                <span className="font-semibold text-zinc-800 text-xs">Oct 2026 – Present</span>
              </div>
              <p className="text-[11px] text-indigo-700 font-medium italic">
                Member (Nov 2025 – Jan 2026) → Joint Secretary (Jan 2026 – Oct 2026) → Secretary General
              </p>
              <ul className="list-disc list-outside ml-4 text-xs text-zinc-700 space-y-1">
                <li>Coordinate club operations, strategic planning, technical events and team collaboration.</li>
                <li>Manage student communication; contribute to technical activities, poster design and branding.</li>
              </ul>
            </div>
          </div>

          {/* Entrepreneurship */}
          <div className="space-y-2">
            <h2 className="text-xs font-black uppercase tracking-widest text-[#0f172a] border-b-2 border-[#0f172a] pb-0.5">
              ENTREPRENEURSHIP
            </h2>
            <div className="flex justify-between items-baseline text-xs sm:text-sm">
              <div>
                <strong className="text-zinc-900">Founder & CEO, SIRAQ / SIRAQ Studio</strong>
              </div>
              <span className="font-semibold text-zinc-800 text-xs">Present</span>
            </div>
            <ul className="list-disc list-outside ml-4 text-xs text-zinc-700 space-y-1">
              <li>Independently run a design and print services business: digital design and branding, ID cards and certificates, posters, banners, invitations, resume and presentation design, printing and documentation.</li>
              <li>Own client communication, customer service, business operations and delivery of both digital and physical products.</li>
            </ul>
          </div>

          {/* Featured Projects */}
          <div className="space-y-3">
            <h2 className="text-xs font-black uppercase tracking-widest text-[#0f172a] border-b-2 border-[#0f172a] pb-0.5">
              FEATURED PROJECTS
            </h2>

            {/* MediScan-AI */}
            <div className="space-y-1">
              <div className="flex justify-between items-baseline text-xs sm:text-sm">
                <div>
                  <strong className="text-zinc-900">MediScan-AI – AI Healthtech Platform</strong>
                </div>
                <span className="font-semibold text-zinc-800 text-xs">2024 – Present</span>
              </div>
              <ul className="list-disc list-outside ml-4 text-xs text-zinc-700 space-y-1">
                <li>Engineered an AI-powered platform for medical scan-report and medicine-data analysis using Python, TensorFlow and Flask.</li>
                <li>Integrated an HTML/CSS interface, Flask API backend and AI inference pipeline into an end-to-end application; extended it into a <strong>6+ repository ecosystem</strong> (Medi-tech, Meditab-AI, Medi-Chat-AI, Medi-Appointment).</li>
              </ul>
            </div>

            {/* Medi-tech */}
            <div className="space-y-1">
              <div className="flex justify-between items-baseline text-xs sm:text-sm">
                <div>
                  <strong className="text-zinc-900">Medi-tech – Multi-feature Healthtech Web App</strong>
                </div>
                <span className="font-semibold text-zinc-800 text-xs">2024 – Present</span>
              </div>
              <ul className="list-disc list-outside ml-4 text-xs text-zinc-700 space-y-1">
                <li>Built with HTML, CSS and JavaScript: medical scanning, medicine reports, location finding, alternative-medicine lookup and AI chat; maintained as a public GitHub project.</li>
              </ul>
            </div>

            {/* Customer Data Collection */}
            <div className="space-y-1">
              <div className="flex justify-between items-baseline text-xs sm:text-sm">
                <div>
                  <strong className="text-zinc-900">Customer Data Collection Web App – Flask</strong>
                </div>
                <span className="font-semibold text-zinc-800 text-xs">2024</span>
              </div>
              <ul className="list-disc list-outside ml-4 text-xs text-zinc-700 space-y-1">
                <li>Sole developer: designed the UI, data-flow logic and deployment pipeline for structured customer-information collection with photo uploads.</li>
              </ul>
            </div>

            {/* Additional Project Bullets */}
            <div className="text-xs text-zinc-700 pl-4 space-y-0.5">
              <p>• <strong>MediLens</strong> – medicine verification and analysis.</p>
              <p>• <strong>AGENTX</strong> – enterprise AI agent intelligence and reliability platform.</p>
              <p>• <strong>AgriMithra</strong> – smart farm management system.</p>
              <p>• <strong>IRIS Agrishield</strong> – IoT-based agricultural monitoring and automation.</p>
              <p>• <strong>Student ID Card Generator</strong> – Flask-based web application.</p>
              <p>• <strong>Robotics & Arduino projects</strong> – hands-on microcontroller and robotics builds.</p>
            </div>
          </div>

          {/* Technical Skills Table */}
          <div className="space-y-2">
            <h2 className="text-xs font-black uppercase tracking-widest text-[#0f172a] border-b-2 border-[#0f172a] pb-0.5">
              TECHNICAL SKILLS
            </h2>
            <div className="text-xs space-y-1.5 text-zinc-800">
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-1">
                <span className="font-bold sm:col-span-1">AI & Machine Learning:</span>
                <span className="sm:col-span-3 text-zinc-700">TensorFlow, AI application development, AI-powered product prototyping, data-centric AI concepts</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-1">
                <span className="font-bold sm:col-span-1">Programming & Software:</span>
                <span className="sm:col-span-3 text-zinc-700">Python, Flask, JavaScript, HTML, CSS, REST API concepts, Streamlit</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-1">
                <span className="font-bold sm:col-span-1">Hardware & Embedded:</span>
                <span className="sm:col-span-3 text-zinc-700">Arduino, ESP32, IoT, Robotics, sensors and actuators, embedded systems; PCB development (exposure)</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-1">
                <span className="font-bold sm:col-span-1">Tools & Platforms:</span>
                <span className="sm:col-span-3 text-zinc-700">GitHub, Firebase, Vercel, Railway, MongoDB, Ollama, LangGraph, Plotly, SQLite</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-1">
                <span className="font-bold sm:col-span-1">Business & Creative:</span>
                <span className="sm:col-span-3 text-zinc-700">SAP ERP, Microsoft Excel, Canva, presentation design, branding, customer service</span>
              </div>
            </div>
          </div>

          {/* Hackathons & Achievements */}
          <div className="space-y-2">
            <h2 className="text-xs font-black uppercase tracking-widest text-[#0f172a] border-b-2 border-[#0f172a] pb-0.5">
              HACKATHONS & ACHIEVEMENTS
            </h2>
            <ul className="list-disc list-outside ml-4 text-xs text-zinc-700 space-y-1">
              <li><strong>HackWise – 3LC Data-Centric AI Challenge (Sphere Hive): Rank 9, score 0.895.</strong> Worked on AI model training, structured datasets and real-time model evaluation.</li>
              <li><strong>Krishimanthan – 36-Hour National Hackathon</strong>, Malnad College of Engineering, Hassan: time-constrained problem-solving, collaboration and project presentation.</li>
              <li><strong>PCB Cupid Hardware Hackathon 3.0</strong>, Dayananda Sagar Academy of Technology and Management, Bengaluru: national-level hardware and PCB-design hackathon.</li>
            </ul>
          </div>

          {/* Education */}
          <div className="space-y-1">
            <h2 className="text-xs font-black uppercase tracking-widest text-[#0f172a] border-b-2 border-[#0f172a] pb-0.5">
              EDUCATION
            </h2>
            <div className="flex justify-between items-baseline text-xs sm:text-sm">
              <div>
                <strong className="text-zinc-900">B.E. Electronics & Communication Engineering</strong>
              </div>
              <span className="font-semibold text-zinc-800 text-xs">Oct 2024 – 2028 (expected)</span>
            </div>
            <p className="text-xs text-zinc-700">
              KVG College of Engineering (KVGCE), Sullia, Karnataka | Currently in 5th Semester
            </p>
          </div>

          {/* Certifications & Additional Achievements */}
          <div className="space-y-2">
            <h2 className="text-xs font-black uppercase tracking-widest text-[#0f172a] border-b-2 border-[#0f172a] pb-0.5">
              CERTIFICATIONS & ADDITIONAL ACHIEVEMENTS
            </h2>
            <ul className="list-disc list-outside ml-4 text-xs text-zinc-700 space-y-1">
              <li><strong>SAP Certified</strong> – Enterprise Resource Planning fundamentals</li>
              <li><strong>Microsoft Excel</strong> – Data Analysis, Formulas and Pivot Tables (Great Learning and Coursera)</li>
              <li><strong>28+ GitHub repositories</strong> – AI, Flask, automation, healthtech and embedded projects</li>
              <li><strong>100+ creative deliverables</strong> – presentations, posters, branding materials and social media designs</li>
              <li><strong>5 languages</strong> – English, Malayalam, Hindi, Kannada, Tamil</li>
            </ul>
          </div>

        </div>

        {/* Modal Bottom Close */}
        <div className="px-6 py-3 border-t border-white/[0.08] bg-[#0d0f17] flex justify-end">
          <button
            onClick={() => {
              sound.playClick();
              onClose();
            }}
            className="px-4 py-2 text-xs font-medium text-zinc-400 hover:text-white"
          >
            Close Resume
          </button>
        </div>
      </div>
    </div>
  );
};
