export interface Project {
  id: string;
  title: string;
  shortDesc: string;
  description: string;
  category: "IoT & Robotics" | "Full-Stack SaaS" | "AI & Agents" | "Embedded Systems";
  badge: string;
  tags: string[];
  features: string[];
  architecture: string;
  githubUrl?: string;
  liveUrl?: string;
  metrics: { label: string; value: string }[];
  featured: boolean;
}

export interface SkillCategory {
  name: string;
  icon: string;
  description: string;
  skills: {
    name: string;
    level: number; // 1-100
    category: string;
    experience: string;
    highlight?: boolean;
  }[];
}

export interface TimelineItem {
  id: string;
  period: string;
  role: string;
  organization: string;
  location: string;
  type: "Education" | "Experience" | "Project" | "Achievement";
  description: string;
  achievements: string[];
  tags: string[];
}

export const PERSONAL_INFO = {
  name: "Niyas Jahangeer",
  title: "Electronics & Communication Engineer & Full-Stack AI Developer",
  subheading: "Bridging Silicon, Cloud & Autonomous Intelligence",
  status: "Available for High-Impact Roles & Innovative Collaborations",
  location: "Kerala, India",
  timezone: "Asia/Kolkata (IST, UTC+5:30)",
  bio: "Electronics and Communication Engineering student, full-stack engineer, and technology entrepreneur. I engineer end-to-end solutions that span from microcontrollers and IoT telemetry to high-throughput cloud architectures, modern React/Next.js interfaces, and autonomous AI multi-agent workflows.",
  about: [
    "As an Electronics & Communication Engineering student, I bring a unique hardware-aware perspective to software engineering. Having designed circuit boards, configured LoRaWAN telemetry, and written embedded firmware, I approach cloud computing, systems architecture, and distributed systems with a deep understanding of physics, timing, and resource constraints.",
    "On the software and AI frontier, I build scalable full-stack applications with Next.js, TypeScript, Tailwind CSS, FastAPI, and Node.js, alongside cutting-edge autonomous AI multi-agent architectures using LangGraph, Gemini API, and local LLMs (Ollama, Qwen).",
    "Driven by entrepreneurial ambition, I turn research prototypes into real-world platforms like AgriMithra (precision agriculture IoT) and Smart Hospital Automation, delivering verifiable reliability and exceptional user experiences."
  ],
  stats: [
    { label: "Engineering Disciplines", value: "Hardware + Cloud + AI" },
    { label: "Core Projects Shipped", value: "15+" },
    { label: "Sensor & IoT Nodes Deployed", value: "50+" },
    { label: "Modern Tech Stacks", value: "TypeScript · Python · C++" },
  ],
  socials: {
    github: "https://github.com/niyasjahangeer",
    linkedin: "https://linkedin.com/in/niyasjahangeer",
    email: "niyasjahangeer@gmail.com",
    twitter: "https://x.com/niyasjahangeer",
    portfolio: "https://niyasjahangeer.dev",
  },
};

export const PROJECTS: Project[] = [
  {
    id: "agrimithra",
    title: "AgriMithra: Precision Smart Farm Management System",
    shortDesc: "End-to-end IoT and cloud telemetry platform empowering sustainable agriculture through real-time soil analysis and autonomous irrigation.",
    description: "AgriMithra bridges cutting-edge agronomy with embedded IoT hardware and cloud software. Using custom ESP32/LoRa field nodes equipped with soil NPK, volumetric water content, temperature, and atmospheric sensors, it streams telemetry to an edge gateway and Next.js cloud portal. Machine learning models analyze microclimatic trends to actuate high-precision drip irrigation valves autonomously.",
    category: "IoT & Robotics",
    badge: "Flagship IoT Project",
    tags: ["IoT Telemetry", "ESP32 / LoRaWAN", "Next.js 14", "Python / FastAPI", "MQTT", "TimeScaleDB", "Tailwind CSS"],
    features: [
      "Real-time sensor telemetry streaming over MQTT and WebSockets",
      "Sub-gigahertz LoRa long-range wireless mesh covering up to 5km rural farm radius",
      "Automated solenoid valve actuation triggered by soil moisture thresholds",
      "Crop disease risk prediction based on humidity-temperature index",
      "Offline-first mobile-responsive dashboard for low-bandwidth rural operations"
    ],
    architecture: "Edge Sensor Nodes (ESP32 + LoRa) -> Central Field Gateway -> MQTT Broker (EMQX) -> FastAPI Backend Service -> TimeScaleDB -> Next.js Real-time Analytics Dashboard.",
    metrics: [
      { label: "Water Conservation", value: "38% Saved" },
      { label: "Telemetry Latency", value: "< 250ms" },
      { label: "Battery Field Life", value: "18 Months" },
      { label: "Field Range", value: "5 km LoRa" }
    ],
    featured: true,
    githubUrl: "https://github.com/niyasjahangeer/agrimithra-smart-farm",
    liveUrl: "https://agrimithra.vercel.app",
  },
  {
    id: "smart-hospital",
    title: "Smart Hospital Automation & Patient Care System",
    shortDesc: "Integrated clinical automation platform combining IoT vital monitoring, RFID asset tracking, and emergency alert triage.",
    description: "Developed to alleviate clinical bottlenecks and modernize hospital operations. Incorporates non-invasive patient telemetry monitors (SpO2, ECG heart rate, ambient vitals), RFID medical staff/asset tracking, and automated nurse call dispatch with audio-visual alerts and electronic medical record (EMR) synchronization.",
    category: "IoT & Robotics",
    badge: "Healthcare Innovation",
    tags: ["Embedded C++", "ESP32 / FreeRTOS", "React", "Node.js", "Firebase", "WebSockets", "RFID"],
    features: [
      "Continuous bedside biometric data streaming with instant critical alarm thresholds",
      "RFID badge tracking for surgical tools, medical carts, and ICU personnel",
      "Automated triage prioritization queue minimizing response delay for cardiac alerts",
      "Secure role-based dashboard for doctors, nurses, and administrative supervisors",
      "Encrypted cloud synchronization conforming to patient data privacy principles"
    ],
    architecture: "Bedside Monitor Units (FreeRTOS) -> Local Hospital Broker -> Node.js Microservices -> Firebase Realtime DB -> Hospital Station Dashboard & Mobile Alert System.",
    metrics: [
      { label: "Emergency Response", value: "45% Faster" },
      { label: "Asset Loss Reduction", value: "92%" },
      { label: "System Uptime", value: "99.98%" },
    ],
    featured: true,
    githubUrl: "https://github.com/niyasjahangeer/smart-hospital-automation",
    liveUrl: "https://smart-hospital.vercel.app",
  },
  {
    id: "siraq-platform",
    title: "SIRAQ: High-Performance Enterprise SaaS Engine",
    shortDesc: "Scalable modern SaaS architecture featuring high-speed API layers, multi-tenant RBAC, and intelligent workflow automation.",
    description: "SIRAQ represents an enterprise-grade digital operating platform designed for rapid deployment. Built on Next.js 14, Supabase, and FastAPI, it includes unified authentication, team workspaces, customizable analytics dashboards, audit trails, and automated email/webhook notifications.",
    category: "Full-Stack SaaS",
    badge: "Enterprise SaaS",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "FastAPI", "Stripe API", "PostgreSQL"],
    features: [
      "Enterprise Multi-tenant architecture with Row-Level Security (RLS)",
      "Dynamic dashboard builder with drag-and-drop metrics widgets",
      "Integrated billing system with Stripe webhook verification",
      "Fine-grained role-based access control (RBAC) and team invitation engine",
      "REST & GraphQL external API endpoints with rate limiting and OpenAPI docs"
    ],
    architecture: "Next.js App Router Frontend -> Edge Middleware Authentication -> Supabase / PostgreSQL Database with RLS -> FastAPI Background Workers -> Redis Cache.",
    metrics: [
      { label: "Page Load Speed", value: "0.8s" },
      { label: "Lighthouse Score", value: "98/100" },
      { label: "API Response Time", value: "< 45ms" }
    ],
    featured: true,
    githubUrl: "https://github.com/niyasjahangeer/siraq-platform",
    liveUrl: "https://siraq.com",
  },
  {
    id: "agentic-ai-orchestrator",
    title: "Autonomous Multi-Agent AI Workflow Orchestrator",
    shortDesc: "Hierarchical agentic swarm orchestrator leveraging Gemini 1.5/2.0 API, LangGraph, and local Qwen/Ollama models for automated problem solving.",
    description: "An advanced multi-agent framework that decomposes complex software engineering and research queries into directed acyclic graphs (DAGs) executed by specialized subagents (Architect, Coder, Critic, Verifier). Integrates tool-calling, memory persistence, human-in-the-loop checkpoints, and hybrid cloud/local inference.",
    category: "AI & Agents",
    badge: "Cutting-Edge AI",
    tags: ["LangGraph", "Gemini API", "Python", "FastAPI", "Ollama", "Qwen", "Vector DB (Chroma)"],
    features: [
      "Dynamic agent team generation with stateful graph memory",
      "Hybrid routing: High-speed local LLMs for trivial parsing + Gemini Pro for deep reasoning",
      "Safe sandboxed code execution tool for automated verification",
      "Real-time streaming agent thought process and tool execution graphs",
      "RAG vector memory integration with semantic document indexing"
    ],
    architecture: "Client Web UI -> FastAPI Streaming WebSocket -> LangGraph State Graph -> Gemini / Ollama Model Adapters -> Sandboxed Tool Runners -> Persistent Memory Store.",
    metrics: [
      { label: "Task Success Rate", value: "94.2%" },
      { label: "Cost Reduction vs Pure GPT-4", value: "72%" },
      { label: "Streaming Latency", value: "110ms" }
    ],
    featured: true,
    githubUrl: "https://github.com/niyasjahangeer/agentic-ai-orchestrator",
    liveUrl: "https://agentic-ai.vercel.app",
  },
  {
    id: "robovision-arm",
    title: "RoboVision & Embedded ARM Controller",
    shortDesc: "Real-time edge computer vision and robotic arm kinematics controller based on ARM Cortex and OpenCV.",
    description: "A hardware-software robotics project featuring a 5-axis articulated robotic manipulator guided by an edge camera. The vision pipeline identifies, classifies, and tracks physical objects, while the inverse kinematics engine computes joint angles executed by an ARM microcontroller via PWM servo drives.",
    category: "Embedded Systems",
    badge: "Robotics & CV",
    tags: ["ARM Cortex-M", "Embedded C", "Python", "OpenCV", "Inverse Kinematics", "UART", "Robotics"],
    features: [
      "Sub-30ms object detection and color/shape segmentation at 60 FPS",
      "Analytical inverse kinematics calculation for 5-DOF spatial coordinates",
      "Hardware PID feedback loop maintaining 0.5mm positional repeatability",
      "Safety emergency kill-switch and electronic overload thermal cutoff",
      "Interactive desktop GUI telemetry controller built with Streamlit & WebSockets"
    ],
    architecture: "Industrial Camera -> OpenCV Pipeline (Python) -> Inverse Kinematics Math Module -> UART Serial -> ARM Cortex-M Firmware -> Closed-loop PWM Actuators.",
    metrics: [
      { label: "Frame Rate", value: "60 FPS" },
      { label: "Repeatability", value: "±0.5 mm" },
      { label: "Inference Speed", value: "18ms" }
    ],
    featured: false,
    githubUrl: "https://github.com/niyasjahangeer/robovision-arm",
  },
  {
    id: "campus-portal",
    title: "Smart Campus & Academic Resource Management Portal",
    shortDesc: "Centralized institutional platform facilitating attendance tracking, digital lab resources, event notifications, and student engagement.",
    description: "Engineered to replace fragmented college communications. Provides faculty and students with an intuitive hub for timetable scheduling, attendance analytics, assignment submissions, digital lab manuals, and automated SMS/email announcements.",
    category: "Full-Stack SaaS",
    badge: "EdTech Solution",
    tags: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "JWT Auth"],
    features: [
      "Automated attendance analytics with low-percentage early warning alerts",
      "Interactive schedule viewer with push notifications for cancelled/rescheduled lectures",
      "Digital laboratory repository with downloadable circuit schematics and code samples",
      "Role-based administrative dashboards for Head of Department and faculty mentors",
      "High-throughput exam seat allocator and hall-ticket generation system"
    ],
    architecture: "React Single Page App -> Node.js / Express REST API -> MongoDB Atlas -> Cloudinary File Storage -> SendGrid Notification Dispatcher.",
    metrics: [
      { label: "Active Students", value: "1,200+" },
      { label: "Daily Transactions", value: "8,500+" },
      { label: "Staff Time Saved", value: "65%" }
    ],
    featured: false,
    githubUrl: "https://github.com/niyasjahangeer/smart-campus-portal",
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    name: "Electronics & Embedded Systems",
    icon: "Cpu",
    description: "Physical computing, circuit analysis, microcontrollers, and communication protocols.",
    skills: [
      { name: "Microcontrollers (ESP32, STM32, Arduino, ARM Cortex)", level: 94, category: "Hardware", experience: "3+ Years", highlight: true },
      { name: "Embedded C / C++", level: 90, category: "Hardware", experience: "3+ Years", highlight: true },
      { name: "Wireless Protocols (LoRaWAN, BLE, Zigbee, WiFi, MQTT)", level: 88, category: "Hardware", experience: "2+ Years", highlight: true },
      { name: "Sensors & Actuators (Analog, I2C, SPI, UART, PWM)", level: 92, category: "Hardware", experience: "3+ Years" },
      { name: "Circuit Design & PCB Schematic Simulation (KiCad/Proteus)", level: 82, category: "Hardware", experience: "2+ Years" },
      { name: "Robotics Kinematics & Motor Drivers", level: 84, category: "Hardware", experience: "2+ Years" },
    ]
  },
  {
    name: "Artificial Intelligence & Agents",
    icon: "Bot",
    description: "LLMs, multi-agent frameworks, prompt engineering, and hybrid local/cloud inference.",
    skills: [
      { name: "Autonomous AI Agents (LangGraph, Swarms)", level: 92, category: "AI", experience: "2 Years", highlight: true },
      { name: "Gemini API (1.5 Flash/Pro, Multi-modal, Function Calling)", level: 95, category: "AI", experience: "2 Years", highlight: true },
      { name: "Local LLMs (Ollama, Qwen 2.5, DeepSeek, vLLM)", level: 88, category: "AI", experience: "1.5 Years" },
      { name: "Retrieval-Augmented Generation (RAG) & Vector DBs", level: 86, category: "AI", experience: "1.5 Years" },
      { name: "Computer Vision (OpenCV, Object Detection)", level: 80, category: "AI", experience: "2 Years" },
    ]
  },
  {
    name: "Frontend Engineering",
    icon: "Layout",
    description: "Modern, responsive, animated web applications with exceptional user experiences.",
    skills: [
      { name: "React & Next.js 14+ (App Router, Server Actions)", level: 95, category: "Frontend", experience: "3+ Years", highlight: true },
      { name: "TypeScript & Modern JavaScript (ESNext)", level: 94, category: "Frontend", experience: "3+ Years", highlight: true },
      { name: "Tailwind CSS & Modern Design Systems", level: 98, category: "Frontend", experience: "3+ Years", highlight: true },
      { name: "Framer Motion & Micro-Interactions", level: 90, category: "Frontend", experience: "2+ Years" },
      { name: "Streamlit (Rapid Data & AI Prototyping)", level: 88, category: "Frontend", experience: "2 Years" },
      { name: "HTML5 / Semantic Accessible CSS", level: 96, category: "Frontend", experience: "4+ Years" },
    ]
  },
  {
    name: "Backend & Systems",
    icon: "Server",
    description: "High-performance APIs, real-time WebSockets, microservices, and databases.",
    skills: [
      { name: "Python (FastAPI, Flask, AsyncIO)", level: 92, category: "Backend", experience: "3+ Years", highlight: true },
      { name: "Node.js & Express / Nest", level: 88, category: "Backend", experience: "2+ Years" },
      { name: "RESTful APIs & WebSocket Real-time Feeds", level: 92, category: "Backend", experience: "3+ Years" },
      { name: "Supabase & PostgreSQL (Row-Level Security)", level: 90, category: "Backend", experience: "2 Years", highlight: true },
      { name: "Firebase & Cloud Firestore", level: 92, category: "Backend", experience: "3 Years" },
      { name: "MongoDB & SQLite", level: 86, category: "Backend", experience: "2+ Years" },
    ]
  },
  {
    name: "DevOps & Cloud Infrastructure",
    icon: "Cloud",
    description: "Continuous integration, deployment platforms, Git version control, and containerization.",
    skills: [
      { name: "Vercel & Next.js Edge Deployment", level: 95, category: "DevOps", experience: "3 Years", highlight: true },
      { name: "Git & GitHub Collaborative Workflows", level: 92, category: "DevOps", experience: "4 Years", highlight: true },
      { name: "Railway & Cloud Container Hosting", level: 86, category: "DevOps", experience: "2 Years" },
      { name: "Firebase Hosting & Cloud Functions", level: 88, category: "DevOps", experience: "2 Years" },
      { name: "Google Antigravity & Advanced Agent Tooling", level: 94, category: "DevOps", experience: "1.5 Years" },
    ]
  }
];

export const TIMELINE: TimelineItem[] = [
  {
    id: "ece-degree",
    period: "2023 - Present",
    role: "B.Tech in Electronics & Communication Engineering",
    organization: "Engineering College / University",
    location: "Kerala, India",
    type: "Education",
    description: "Rigorous academic study focusing on Signals & Systems, Microprocessors & Microcontrollers, VLSI, Wireless Communications, Digital Signal Processing, and Embedded Systems.",
    achievements: [
      "Top percentile academic performance with specialized research into IoT telemetry & sensor networks",
      "Lead technical organizer for college robotics hackathons and IEEE tech symposia",
      "Spearheaded the development of the campus academic management web portal"
    ],
    tags: ["Embedded C", "Signals & Systems", "VLSI", "Microcontrollers", "Wireless Comms"]
  },
  {
    id: "siraq-founder",
    period: "2024 - Present",
    role: "Founder & Lead Architect",
    organization: "SIRAQ Technologies",
    location: "Remote / India",
    type: "Experience",
    description: "Driving the design, technical architecture, and implementation of high-performance SaaS platforms, IoT dashboards, and custom AI agent solutions for businesses and institutions.",
    achievements: [
      "Engineered multi-tenant SaaS engines serving real-world users with 99.9% uptime",
      "Architected custom hardware-to-cloud telemetry pipelines for agricultural and industrial clients",
      "Integrated autonomous multi-agent pipelines accelerating internal developer productivity"
    ],
    tags: ["Next.js", "FastAPI", "Supabase", "System Architecture", "Product Strategy"]
  },
  {
    id: "agrimithra-lead",
    period: "2024",
    role: "Lead Hardware & IoT Engineer",
    organization: "AgriMithra Precision Agriculture Project",
    location: "Kerala, India",
    type: "Project",
    description: "Designed, fabricated, and deployed an autonomous farm monitoring and irrigation control system featuring custom ESP32 LoRa wireless field nodes and cloud dashboard.",
    achievements: [
      "Achieved 38% reduction in agricultural water wastage in pilot deployments",
      "Engineered battery-operated sensor nodes with 18-month field longevity",
      "Presented project at regional engineering exhibitions and won top innovation commendation"
    ],
    tags: ["ESP32", "LoRaWAN", "Precision Agriculture", "FastAPI", "Next.js"]
  },
  {
    id: "smart-hospital-lead",
    period: "2024",
    role: "Systems & Firmware Architect",
    organization: "Smart Hospital Automation Initiative",
    location: "Kerala, India",
    type: "Project",
    description: "Conceptualized and engineered a multi-node clinical automation system integrating vital telemetry, RFID equipment localization, and automated emergency triage.",
    achievements: [
      "Reduced critical emergency alert reaction time by 45% in simulated hospital trials",
      "Authored comprehensive architectural whitepaper and engineering specification",
      "Successfully integrated bidirectional WebSockets for instantaneous ICU station updates"
    ],
    tags: ["Embedded Systems", "FreeRTOS", "Healthcare IoT", "Real-time Telemetry"]
  }
];

export const FAQS = [
  {
    q: "What makes your engineering background unique?",
    a: "Unlike typical software developers who only write high-level code, my Electronics and Communication Engineering background gives me deep insight into hardware, silicon, memory registers, signal processing, and low-latency protocols. I bridge the physical world (sensors, ESP32, ARM, LoRa) with the cloud (Next.js, FastAPI, Supabase) and autonomous AI systems."
  },
  {
    q: "Are you available for freelance projects or employment?",
    a: "Yes! I am actively open to high-impact software engineering roles, full-stack development, IoT/embedded systems engineering, and innovative startup collaborations."
  },
  {
    q: "What is your primary tech stack for production applications?",
    a: "For web and full-stack, I build with Next.js 14 (App Router), TypeScript, Tailwind CSS, and Python (FastAPI). For databases and backends, I leverage Supabase (PostgreSQL), Firebase, and MongoDB. For AI, I specialize in the Gemini API, LangGraph multi-agent swarms, and local Ollama models. For hardware, I write Embedded C/C++ on ESP32, STM32, and ARM."
  },
  {
    q: "How do you approach AI agent development?",
    a: "I design stateful, deterministic graph workflows using LangGraph and function-calling architectures. Rather than relying on fragile single-prompt chains, I construct hierarchical agent swarms with specialized roles, dynamic validation steps, and cost-effective hybrid routing between cloud (Gemini) and local LLMs (Ollama)."
  }
];

