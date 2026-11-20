"use client";

import React, { useState, useEffect, useRef } from "react";
import { sound } from "@/lib/sound";
import { PERSONAL_INFO, PROJECTS } from "@/lib/data";
import { 
  Terminal as TerminalIcon, 
  X, 
  CornerDownLeft, 
  HelpCircle, 
  Layers, 
  Sparkles, 
  Cpu, 
  Send, 
  Bot, 
  Sun,
  FileText
} from "lucide-react";

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenAi: () => void;
  onOpenResume: () => void;
}

interface CommandLog {
  command: string;
  output: string | React.ReactNode;
  time: string;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({
  isOpen,
  onClose,
  onOpenAi,
  onOpenResume,
}) => {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<CommandLog[]>([
    {
      command: "welcome",
      output: (
        <div className="text-zinc-300 space-y-1">
          <p className="text-indigo-400 font-bold">Niyas Jahangeer Dev Terminal v2.0</p>
          <p className="text-xs text-zinc-400">Type <span className="text-cyan-400 font-mono">help</span> to list available commands or click quick actions below.</p>
        </div>
      ),
      time: "init",
    },
  ]);
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [history]);

  // Global keyboard shortcut Cmd+K or Ctrl+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        sound.playClick();
        if (isOpen) {
          onClose();
        } else {
          // Open triggered by parent if wired, or let toggle operate
        }
      } else if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const executeCommand = (cmdStr: string) => {
    sound.playClick();
    const trimmed = cmdStr.trim().toLowerCase();
    const time = new Date().toLocaleTimeString();

    if (!trimmed) return;

    let output: string | React.ReactNode = "";

    switch (trimmed) {
      case "help":
        output = (
          <div className="space-y-1 text-xs">
            <p className="text-indigo-400 font-semibold mb-1">Available System Commands:</p>
            <div className="grid grid-cols-2 gap-2 text-zinc-300">
              <div><span className="text-cyan-400 font-mono">projects</span> - View shipped projects</div>
              <div><span className="text-cyan-400 font-mono">skills</span> - Inspect technical matrix</div>
              <div><span className="text-cyan-400 font-mono">hardware</span> - Jump to IoT Lab simulator</div>
              <div><span className="text-cyan-400 font-mono">ai</span> - Launch conversational assistant</div>
              <div><span className="text-cyan-400 font-mono">resume</span> - Open printable CV</div>
              <div><span className="text-cyan-400 font-mono">contact</span> - Scroll to contact form</div>
              <div><span className="text-cyan-400 font-mono">bio</span> - Read engineer overview</div>
              <div><span className="text-cyan-400 font-mono">sound</span> - Toggle audio feedback</div>
              <div><span className="text-cyan-400 font-mono">clear</span> - Clear terminal window</div>
            </div>
          </div>
        );
        break;

      case "projects":
        output = (
          <div className="space-y-1 text-xs text-zinc-300">
            <p className="text-indigo-400 font-semibold">Featured Architectures:</p>
            {PROJECTS.map((p) => (
              <p key={p.id}>• <span className="text-white font-medium">{p.title}</span> ({p.category})</p>
            ))}
            <p className="text-cyan-400 mt-1">Scrolling to projects section...</p>
          </div>
        );
        setTimeout(() => {
          document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
          onClose();
        }, 800);
        break;

      case "skills":
        output = <p className="text-xs text-zinc-300">Navigating to technical skills matrix...</p>;
        setTimeout(() => {
          document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" });
          onClose();
        }, 800);
        break;

      case "hardware":
      case "lab":
        output = <p className="text-xs text-cyan-300">Opening live IoT Telemetry & Sensor Simulator...</p>;
        setTimeout(() => {
          document.getElementById("hardware-lab")?.scrollIntoView({ behavior: "smooth" });
          onClose();
        }, 800);
        break;

      case "ai":
      case "chat":
        output = <p className="text-xs text-indigo-300">Connecting to Niyas AI agent...</p>;
        setTimeout(() => {
          onClose();
          onOpenAi();
        }, 500);
        break;

      case "resume":
      case "cv":
        output = <p className="text-xs text-amber-300">Opening printable resume modal...</p>;
        setTimeout(() => {
          onClose();
          onOpenResume();
        }, 500);
        break;

      case "contact":
        output = <p className="text-xs text-emerald-300">Directing to contact transmission module...</p>;
        setTimeout(() => {
          document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
          onClose();
        }, 800);
        break;

      case "bio":
        output = (
          <p className="text-xs text-zinc-300 leading-relaxed">
            {PERSONAL_INFO.bio}
          </p>
        );
        break;

      case "sound":
        const next = sound.toggle();
        output = <p className="text-xs text-zinc-300">Audio feedback is now {next ? "ENABLED" : "MUTED"}.</p>;
        break;

      case "clear":
        setHistory([]);
        setInput("");
        return;

      default:
        output = (
          <p className="text-xs text-red-400">
            Command not recognized: <span className="font-mono text-white">{cmdStr}</span>. Type <span className="text-cyan-400 font-mono">help</span> for valid options.
          </p>
        );
    }

    setHistory((prev) => [...prev, { command: cmdStr, output, time }]);
    setInput("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      executeCommand(input);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in">
      <div className="w-full max-w-2xl bg-[#0b0d14] border border-white/[0.12] rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[85vh]">
        {/* Header bar */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-white/[0.08] bg-white/[0.02]">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
            </div>
            <span className="text-xs font-mono text-zinc-400 ml-2">niyas@dev-terminal:~</span>
          </div>
          <button
            onClick={() => {
              sound.playClick();
              onClose();
            }}
            className="text-zinc-400 hover:text-white p-1 rounded-lg hover:bg-white/[0.08]"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Terminal Log Area */}
        <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-3 font-mono text-xs">
          {history.map((item, index) => (
            <div key={index} className="space-y-1">
              <div className="flex items-center gap-2 text-zinc-500">
                <span className="text-emerald-400">➜</span>
                <span className="text-indigo-400 font-bold">~</span>
                <span className="text-white">{item.command}</span>
                <span className="text-[10px] text-zinc-600 ml-auto">{item.time}</span>
              </div>
              <div className="pl-4">{item.output}</div>
            </div>
          ))}
        </div>

        {/* Quick Command Action Chips */}
        <div className="px-4 py-2 border-t border-white/[0.06] bg-white/[0.01] flex items-center gap-2 overflow-x-auto">
          <span className="text-[10px] text-zinc-500 font-mono uppercase">Quick:</span>
          {["help", "projects", "hardware", "skills", "ai", "resume", "contact", "clear"].map((q) => (
            <button
              key={q}
              onClick={() => executeCommand(q)}
              className="px-2 py-0.5 rounded text-[11px] font-mono bg-white/[0.05] hover:bg-white/[0.1] text-zinc-300 hover:text-cyan-300 transition-colors"
            >
              {q}
            </button>
          ))}
        </div>

        {/* Input prompt */}
        <div className="flex items-center gap-2 px-4 py-3 border-t border-white/[0.08] bg-[#0d0f17]">
          <span className="text-emerald-400 font-mono text-sm">➜</span>
          <span className="text-indigo-400 font-mono text-xs font-bold">~</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type a command (e.g. help, projects, hardware, ai, resume)..."
            className="flex-1 bg-transparent text-sm text-white font-mono placeholder:text-zinc-600 focus:outline-none"
          />
          <button
            onClick={() => executeCommand(input)}
            className="p-1.5 rounded-lg bg-indigo-600 text-white hover:bg-indigo-500 transition-colors"
          >
            <CornerDownLeft className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};

