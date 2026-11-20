"use client";

import React, { useState, useEffect } from "react";
import { sound } from "@/lib/sound";
import { 
  Terminal, 
  Volume2, 
  VolumeX, 
  Sun, 
  Moon, 
  Menu, 
  X, 
  Bot, 
  FileText,
  Cpu,
  Layers,
  Sparkles,
  Send
} from "lucide-react";

interface NavbarProps {
  onOpenTerminal: () => void;
  onOpenAi: () => void;
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenTerminal,
  onOpenAi,
  onOpenResume,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [soundActive, setSoundActive] = useState(true);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    setSoundActive(sound.isEnabled());

    // Check system or saved theme
    const theme = localStorage.getItem("pf-theme") || "dark";
    if (theme === "light") {
      setIsDark(false);
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
    } else {
      setIsDark(true);
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    }

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleSound = () => {
    const nextState = sound.toggle();
    setSoundActive(nextState);
  };

  const toggleTheme = () => {
    sound.playClick();
    const nextTheme = isDark ? "light" : "dark";
    setIsDark(!isDark);
    localStorage.setItem("pf-theme", nextTheme);
    if (nextTheme === "light") {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
    } else {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    }
  };

  const navLinks = [
    { label: "Projects", href: "#projects", icon: Layers },
    { label: "Skills", href: "#skills", icon: Sparkles },
    { label: "Hardware Lab", href: "#hardware-lab", icon: Cpu },
    { label: "Journey", href: "#timeline", icon: Layers },
    { label: "Contact", href: "#contact", icon: Send },
  ];

  const handleLinkClick = () => {
    sound.playClick();
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "py-3 glass-panel shadow-lg shadow-black/10 border-b border-white/[0.08]"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Identifier */}
          <a
            href="#"
            onClick={() => sound.playClick()}
            className="flex items-center gap-3 group focus:outline-none"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-cyan-400 p-[1.5px] shadow-md shadow-indigo-500/20 group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-[#0d0f17] rounded-[10px] flex items-center justify-center">
                <span className="font-mono font-bold text-sm tracking-tighter text-white">NJ</span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold tracking-tight text-white/90 group-hover:text-indigo-400 transition-colors">
                Niyas Jahangeer
              </span>
              <span className="text-[10px] font-mono text-zinc-400">
                ECE · Full-Stack · AI
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-white/[0.03] border border-white/[0.07] px-3 py-1.5 rounded-full backdrop-blur-md">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={handleLinkClick}
                onMouseEnter={() => sound.playHover()}
                className="px-3.5 py-1 text-xs font-medium text-zinc-300 hover:text-white hover:bg-white/[0.08] rounded-full transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action Icons & Controls */}
          <div className="hidden sm:flex items-center gap-2">
            {/* Ask AI Button */}
            <button
              onClick={() => {
                sound.playClick();
                onOpenAi();
              }}
              onMouseEnter={() => sound.playHover()}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-indigo-500/10 hover:bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 transition-all hover:scale-[1.02]"
              title="Talk with Niyas AI Assistant"
            >
              <Bot className="w-3.5 h-3.5 text-indigo-400" />
              <span>Ask AI</span>
            </button>

            {/* Command Palette / Terminal Shortcut */}
            <button
              onClick={() => {
                sound.playClick();
                onOpenTerminal();
              }}
              onMouseEnter={() => sound.playHover()}
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs text-zinc-400 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.06] transition-colors"
              title="Quick Command Terminal (Ctrl + K)"
            >
              <Terminal className="w-3.5 h-3.5" />
              <kbd className="hidden lg:inline-block font-mono text-[10px] bg-white/[0.08] px-1.5 py-0.5 rounded text-zinc-400">
                ⌘K
              </kbd>
            </button>

            {/* Resume Button */}
            <button
              onClick={() => {
                sound.playClick();
                onOpenResume();
              }}
              onMouseEnter={() => sound.playHover()}
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs text-zinc-300 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.06] transition-colors"
              title="View & Download Resume / CV"
            >
              <FileText className="w-3.5 h-3.5 text-zinc-400" />
              <span className="hidden lg:inline text-xs">Resume</span>
            </button>

            {/* Sound Toggle */}
            <button
              onClick={toggleSound}
              className="p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-white/[0.08] transition-colors"
              title={soundActive ? "Mute UI Sound Effects" : "Enable UI Sound Effects"}
            >
              {soundActive ? <Volume2 className="w-4 h-4 text-indigo-400" /> : <VolumeX className="w-4 h-4 text-zinc-600" />}
            </button>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-white/[0.08] transition-colors"
              title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
            >
              {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-indigo-400" />}
            </button>
          </div>

          {/* Mobile Menu Hamburger */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={() => {
                sound.playClick();
                onOpenAi();
              }}
              className="p-2 rounded-lg text-indigo-400 bg-indigo-500/10 border border-indigo-500/20"
            >
              <Bot className="w-4 h-4" />
            </button>
            <button
              onClick={() => {
                sound.playClick();
                setMobileMenuOpen(!mobileMenuOpen);
              }}
              className="p-2 rounded-lg text-zinc-300 hover:text-white hover:bg-white/[0.08]"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden glass-panel border-b border-white/[0.1] px-4 pt-3 pb-5 mt-3 space-y-3">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={handleLinkClick}
                  className="flex items-center gap-2.5 px-3 py-2 text-sm font-medium text-zinc-200 hover:text-indigo-400 hover:bg-white/[0.05] rounded-lg transition-colors"
                >
                  <Icon className="w-4 h-4 text-zinc-400" />
                  {link.label}
                </a>
              );
            })}
          </div>

          <div className="pt-3 border-t border-white/[0.08] flex items-center justify-between">
            <button
              onClick={() => {
                sound.playClick();
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="flex items-center gap-2 px-3 py-2 text-xs font-medium text-zinc-300 bg-white/[0.05] rounded-lg border border-white/[0.08]"
            >
              <FileText className="w-3.5 h-3.5" />
              View Resume
            </button>

            <button
              onClick={() => {
                sound.playClick();
                setMobileMenuOpen(false);
                onOpenTerminal();
              }}
              className="flex items-center gap-2 px-3 py-2 text-xs font-medium text-zinc-300 bg-white/[0.05] rounded-lg border border-white/[0.08]"
            >
              <Terminal className="w-3.5 h-3.5" />
              Terminal (⌘K)
            </button>

            <button
              onClick={toggleSound}
              className="p-2 rounded-lg bg-white/[0.05] text-zinc-400"
            >
              {soundActive ? <Volume2 className="w-4 h-4 text-indigo-400" /> : <VolumeX className="w-4 h-4" />}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

