"use client";

import React, { useState } from "react";
import { sound } from "@/lib/sound";
import { PERSONAL_INFO } from "@/lib/data";
import confetti from "canvas-confetti";
import { 
  Send, 
  Mail, 
  Github, 
  Linkedin, 
  CheckCircle2, 
  AlertCircle, 
  Loader2, 
  Sparkles,
  MessageSquare
} from "lucide-react";

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    category: "Full-Stack / AI Project",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const categories = [
    "Full-Stack / AI Project",
    "IoT & Embedded Hardware",
    "SaaS Platform Development",
    "Job / Internship Opportunity",
    "General Collaboration"
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMsg("Please fill out all required fields.");
      sound.playBeep(300, 0.1, "sawtooth", 0.05);
      return;
    }

    setLoading(true);
    sound.playClick();

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setSubmitted(true);
        sound.playSuccess();

        // Trigger celebratory confetti
        try {
          confetti({
            particleCount: 80,
            spread: 70,
            origin: { y: 0.6 }
          });
        } catch {}

        setFormData({
          name: "",
          email: "",
          subject: "",
          category: "Full-Stack / AI Project",
          message: "",
        });
      } else {
        setErrorMsg(data.error || "Failed to transmit message. Please try again.");
      }
    } catch {
      setErrorMsg("Network error connecting to API. You can also email directly at " + PERSONAL_INFO.socials.email);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 mb-3">
            <Send className="w-3.5 h-3.5" />
            <span>Initiate Direct Communication</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Let's Engineer Something Exceptional
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 mt-2">
            Whether you need custom IoT telemetry, full-stack enterprise SaaS, or an autonomous AI agent workflow, my inbox is open.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 max-w-5xl mx-auto">
          
          {/* Left Column: Direct Channels & Information */}
          <div className="lg:col-span-2 space-y-6">
            <div className="glass-panel p-6 rounded-2xl border border-white/[0.08] space-y-6">
              <div>
                <h3 className="text-base font-bold text-white mb-2">Direct Contact Channels</h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Fast response time guaranteed. Feel free to connect across platforms.
                </p>
              </div>

              <div className="space-y-4">
                <a
                  href={`mailto:${PERSONAL_INFO.socials.email}`}
                  onClick={() => sound.playClick()}
                  className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.02] hover:bg-white/[0.06] border border-white/[0.06] text-zinc-200 transition-colors"
                >
                  <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] text-zinc-500 uppercase font-mono">Email Directly</div>
                    <div className="text-xs font-semibold">{PERSONAL_INFO.socials.email}</div>
                  </div>
                </a>

                <a
                  href={PERSONAL_INFO.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => sound.playClick()}
                  className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.02] hover:bg-white/[0.06] border border-white/[0.06] text-zinc-200 transition-colors"
                >
                  <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400">
                    <Linkedin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] text-zinc-500 uppercase font-mono">Professional Network</div>
                    <div className="text-xs font-semibold">linkedin.com/in/niyasjahangeer</div>
                  </div>
                </a>

                <a
                  href={PERSONAL_INFO.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => sound.playClick()}
                  className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.02] hover:bg-white/[0.06] border border-white/[0.06] text-zinc-200 transition-colors"
                >
                  <div className="p-2 rounded-lg bg-violet-500/10 text-violet-400">
                    <Github className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] text-zinc-500 uppercase font-mono">Open Source Repos</div>
                    <div className="text-xs font-semibold">github.com/niyasjahangeer</div>
                  </div>
                </a>
              </div>

              {/* Status Indicator */}
              <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Currently active & ready for high-impact opportunities.</span>
              </div>
            </div>
          </div>

          {/* Right Column: Functional Contact Form */}
          <div className="lg:col-span-3">
            <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/[0.08] shadow-2xl">
              
              {submitted ? (
                <div className="text-center py-12 space-y-4 animate-fade-in">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center mx-auto text-emerald-400">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Message Transmitted!</h3>
                  <p className="text-xs sm:text-sm text-zinc-400 max-w-md mx-auto">
                    Thank you for reaching out. Your transmission has been recorded into the backend API. Niyas will review your message and reply promptly.
                  </p>
                  <button
                    onClick={() => {
                      sound.playClick();
                      setSubmitted(false);
                    }}
                    className="px-5 py-2.5 rounded-xl bg-white/[0.06] hover:bg-white/[0.1] text-xs font-semibold text-zinc-200 transition-colors"
                  >
                    Send Another Transmission
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {errorMsg && (
                    <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-300 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono font-medium text-zinc-300 mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Sarah Jenkins"
                        className="w-full bg-white/[0.04] border border-white/[0.08] focus:border-indigo-500/60 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder:text-zinc-600 focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono font-medium text-zinc-300 mb-1.5">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. sarah@company.com"
                        className="w-full bg-white/[0.04] border border-white/[0.08] focus:border-indigo-500/60 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder:text-zinc-600 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono font-medium text-zinc-300 mb-1.5">
                        Inquiry Category
                      </label>
                      <select
                        value={formData.category}
                        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                        className="w-full bg-[#111422] border border-white/[0.08] focus:border-indigo-500/60 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-zinc-200 focus:outline-none transition-colors"
                      >
                        {categories.map((c) => (
                          <option key={c} value={c} className="bg-[#0f111c] text-white">
                            {c}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-mono font-medium text-zinc-300 mb-1.5">
                        Subject Line
                      </label>
                      <input
                        type="text"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        placeholder="e.g. IoT Project Collaboration"
                        className="w-full bg-white/[0.04] border border-white/[0.08] focus:border-indigo-500/60 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder:text-zinc-600 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-medium text-zinc-300 mb-1.5">
                      Your Message / Technical Scope *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Outline your project goals, timelines, or specifications..."
                      className="w-full bg-white/[0.04] border border-white/[0.08] focus:border-indigo-500/60 rounded-xl p-3.5 text-xs sm:text-sm text-white placeholder:text-zinc-600 focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 text-white font-semibold text-xs sm:text-sm shadow-lg shadow-indigo-600/30 flex items-center justify-center gap-2 transition-all hover:scale-[1.01]"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Transmitting Secure Packet...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Transmit Message to Niyas</span>
                      </>
                    )}
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

