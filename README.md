# Niyas Jahangeer – Portfolio & Engineering Showcase

> **Bridging Silicon, Cloud & Autonomous Intelligence**  
> Official interactive portfolio of **Niyas Jahangeer**: Electronics and Communication Engineering student, Full-Stack Developer, AI Agent Architect, and Technology Entrepreneur.

---

## ⚡ Architectural Highlights

- **Framework**: Next.js 14 (App Router) + TypeScript
- **Styling**: Tailwind CSS + Custom CSS Variables + Glassmorphic Surfaces
- **Interactive ECE Sandbox**: Real-time virtual ESP32/LoRa field telemetry node with live sensor waveform rendering, relay actuator controls, and UART console stream.
- **AI Agent Integration**: Built-in "Ask Niyas AI" assistant powered by knowledge retrieval and ready for Gemini API streaming.
- **Command Palette & Dev Terminal**: Global shortcut (`Cmd+K` / `Ctrl+K`) for keyboard navigation, system diagnostics, and shortcuts.
- **Web Audio API Soundscape**: Low-latency, zero-dependency micro-sound synthesizers for tactile UI feedback (with toggleable audio state).
- **Full-Stack Contact Engine**: Validated API endpoint (`/api/contact`) with status tracking and confetti celebration.
- **Print-Optimized CV**: Integrated interactive resume viewer with clean print stylesheet for instant PDF export.

---

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Local Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Production Build & Test
```bash
npm run build
npm run start
```

---

## 🌐 Production Deployment Guide

### Deploying to Vercel (Recommended)
1. Push this repository to your GitHub account:
   ```bash
   git init
   git add .
   git commit -m "feat: complete production portfolio"
   git remote add origin https://github.com/niyasjahangeer/portfolio.git
   git branch -M main
   git push -u origin main
   ```
2. Go to [vercel.com](https://vercel.com) and click **"Add New Project"**.
3. Import your `portfolio` repository.
4. Leave build settings as default (Framework: `Next.js`).
5. Click **Deploy**. Your portfolio will be live with global edge caching and SSL!

### Deploying to Firebase Hosting / Railway
- **Firebase**: Run `firebase init hosting` and configure `.next` export or Next.js experimental web frameworks.
- **Railway**: Connect your GitHub repo; Railway will automatically detect Node.js and run `npm run build && npm run start`.

---

## 📁 Project Structure

```
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   ├── chat/route.ts       # AI assistant knowledge API endpoint
│   │   │   └── contact/route.ts    # Full-stack contact form API endpoint
│   │   ├── globals.css             # Tailwind styling, dark/light variables & glassmorphism
│   │   ├── layout.tsx              # SEO metadata, OpenGraph, theme wrapper
│   │   └── page.tsx                # Master landing page layout
│   ├── components/
│   │   ├── Navbar.tsx              # Glassy floating navbar, theme/sound toggle
│   │   ├── Hero.tsx                # Dynamic hero, status beacon, magnetic actions
│   │   ├── ProjectsSection.tsx     # Filterable project showcase
│   │   ├── ProjectModal.tsx        # Deep system architecture modal
│   │   ├── HardwareSimulator.tsx   # Live virtual ECE IoT node & waveform visualizer
│   │   ├── SkillsSection.tsx       # Interactive categorized skills matrix
│   │   ├── ExperienceTimeline.tsx  # Academic & leadership journey
│   │   ├── ContactSection.tsx      # Full-stack contact transmission & confetti
│   │   ├── ResumeModal.tsx         # Printable CV with PDF print trigger
│   │   ├── CommandPalette.tsx      # Cmd+K Dev terminal & command runner
│   │   ├── AiAssistantModal.tsx    # "Ask Niyas AI" interactive chat drawer
│   │   └── Footer.tsx              # Modern footer with real-time IST clock
│   └── lib/
│       ├── data.ts                 # Authentic biographical, project & skills data
│       ├── sound.ts                # Web Audio API procedural sound synthesizer
│       └── utils.ts                # Tailwind merge helper
├── .env.example                    # Environment variable template
├── tailwind.config.ts              # Custom colors, animations & font tokens
├── tsconfig.json                   # TypeScript configuration
└── package.json                    # Project metadata & optimized dependencies
```

---

## 🛡️ License & Credits

Designed and engineered by **Niyas Jahangeer**.
All rights reserved.

