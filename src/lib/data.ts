export interface Project {
  id: string;
  title: string;
  shortDesc: string;
  description: string;
  category: "AI & Healthtech" | "IoT & Hardware" | "Enterprise AI" | "Web & Automation";
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
    level: number;
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
  type: "Leadership" | "Education" | "Entrepreneurship" | "Hackathon";
  description: string;
  achievements: string[];
  tags: string[];
}

export interface HackathonItem {
  name: string;
  organizer: string;
  rank?: string;
  description: string;
  highlight: string;
}

export const PERSONAL_INFO = {
  name: "Niyas Jahangeer",
  roleTitle: "ECE Undergraduate | AI & Software Developer | Technical Leader | Entrepreneur | Product Builder",
  subheading: "President @ IRIS Community · Secretary General @ COGNEX.AI · Founder @ SIRAQ Studio",
  status: "President @ IRIS Community & Secretary General @ COGNEX.AI",
  location: "Bengaluru & Sullia, Karnataka, India",
  phone: "+91 82174 69646",
  email: "niyasjahangeer772@gmail.com",
  college: "KVG College of Engineering (KVGCE), Sullia, Karnataka",
  degree: "B.E. in Electronics & Communication Engineering (Oct 2024 – 2028 Expected, 5th Semester)",
  bio: "Electronics & Communication Engineering undergraduate, AI and software developer, and founder who ships real products: AI-powered healthtech platforms, Flask web applications, and IoT & robotics hardware. President of IRIS Community and Secretary General of COGNEX.AI at KVGCE, Founder & CEO of SIRAQ Studio, maintaining 28+ GitHub repositories with 100+ creative deliverables.",
  languages: ["English", "Malayalam", "Hindi", "Kannada", "Tamil"],
  stats: [
    { label: "GitHub Repositories", value: "28+" },
    { label: "HackWise AI Challenge", value: "Rank 9 (0.895)" },
    { label: "Creative Deliverables", value: "100+" },
    { label: "Students in Workshops", value: "69+ Mentored" },
  ],
  socials: {
    github: "https://github.com/Niyas-J",
    linkedin: "https://linkedin.com/in/niyas-j",
    email: "niyasjahangeer772@gmail.com",
    portfolio: "https://github.com/Niyas-J/PROTFOLIO",
  },
};

export const PROJECTS: Project[] = [
  {
    id: "mediscan-ai",
    title: "MediScan-AI: 6+ Repository Healthtech Ecosystem",
    shortDesc: "End-to-end AI-powered healthtech ecosystem for medical scan-report analysis, medicine verification, and automated clinical appointments.",
    description: "An AI-powered clinical intelligence platform engineered with Python, TensorFlow, and Flask. MediScan-AI processes medical imaging and medicine data, integrating an AI inference pipeline with interactive web interfaces. Extended into a 6+ repository open-source healthcare ecosystem comprising Medi-tech, Meditab-AI, Medi-Chat-AI, and Medi-Appointment.",
    category: "AI & Healthtech",
    badge: "Flagship Healthtech Platform",
    tags: ["Python", "TensorFlow", "Flask", "Computer Vision", "Healthtech", "REST API", "JavaScript"],
    features: [
      "Medical scan-report classification and medicine prescription verification",
      "6+ repository interconnected ecosystem (Medi-tech, Meditab-AI, Medi-Chat-AI, Medi-Appointment)",
      "Alternative-medicine lookup, nearby clinic locator, and real-time AI triage chat",
      "Structured medicine data extraction using custom machine learning inference",
      "High-speed responsive web client with photo and PDF report uploads"
    ],
    architecture: "HTML5/CSS Client -> Flask REST API Backend -> TensorFlow Inference Engine -> Medicine Database -> Multi-Repo Micro-services (Medi-tech, Meditab, Medi-Chat).",
    metrics: [
      { label: "Ecosystem Size", value: "6+ Repos" },
      { label: "Inference Stack", value: "TensorFlow" },
      { label: "Deployment", value: "Flask + Cloud" },
      { label: "Target Domain", value: "Clinical AI" }
    ],
    featured: true,
    githubUrl: "https://github.com/Niyas-J/MediScan-AI",
  },
  {
    id: "agentx",
    title: "AGENTX: Enterprise AI Agent Intelligence Platform",
    shortDesc: "Stateful enterprise AI multi-agent orchestration engine built for deterministic problem solving and high-reliability task automation.",
    description: "An enterprise AI agent intelligence and reliability platform. Leverages LangGraph DAGs, Ollama local model hosting, and frontier LLMs for multi-agent collaboration, verification checkpoints, and dynamic planning.",
    category: "Enterprise AI",
    badge: "Autonomous AI Platform",
    tags: ["LangGraph", "Ollama", "Python", "Multi-Agent Swarms", "Vector DB", "FastAPI"],
    features: [
      "Stateful hierarchical multi-agent teams (Planner, Coder, Critic, Verifier)",
      "Hybrid inference routing: low-latency local LLMs + cloud frontier models",
      "Deterministic graph memory with checkpoint recovery",
      "Dynamic tool calling with sandboxed execution environments"
    ],
    architecture: "Client UI -> FastAPI Streaming Gateway -> LangGraph State Machine -> Local Ollama / Frontier Adapters -> Sandboxed Verification Runner.",
    metrics: [
      { label: "Architecture", value: "LangGraph DAG" },
      { label: "Local Models", value: "Ollama / Qwen" },
      { label: "Reliability", value: "Enterprise Grade" }
    ],
    featured: true,
    githubUrl: "https://github.com/Niyas-J",
  },
  {
    id: "iris-agrishield",
    title: "IRIS AgriShield & AgriMithra: IoT Agriculture",
    shortDesc: "IoT-based precision agricultural monitoring, microclimate analysis, and automated irrigation control for sustainable farming.",
    description: "Developed under IRIS Community and showcased at the Krishimanthan National Hackathon. Combines ESP32 and Arduino microcontroller hardware with multi-parameter soil moisture, NPK, and atmospheric sensors. Features automated irrigation valve actuation and cloud telemetry.",
    category: "IoT & Hardware",
    badge: "Hardware & IoT Innovation",
    tags: ["ESP32", "Arduino", "IoT Sensors", "Embedded C++", "Flask", "Robotics", "Automation"],
    features: [
      "Real-time sensor telemetry streaming: soil moisture, ambient temperature, humidity",
      "Automated solenoid irrigation relay triggered by soil moisture thresholds",
      "Wireless telemetry node integration for field deployment",
      "Low-power sleep scheduling for extended field battery life",
      "Demonstrated at Krishimanthan 36-Hour National Hackathon"
    ],
    architecture: "Sensor Node (ESP32 + Soil/SHT31) -> Relay Actuator -> Edge Broker -> Flask Telemetry Service -> Responsive Live Dashboard.",
    metrics: [
      { label: "Water Savings", value: "35%+" },
      { label: "Hackathon", value: "Krishimanthan" },
      { label: "Microcontroller", value: "ESP32 & Arduino" },
    ],
    featured: true,
    githubUrl: "https://github.com/Niyas-J",
  },
  {
    id: "siraq-studio",
    title: "SIRAQ Studio & Commercial Print Solutions",
    shortDesc: "Design, branding, and customized digital/physical documentation business serving institutional and commercial clients.",
    description: "Founded and operated by Niyas Jahangeer. Delivered 100+ creative deliverables spanning digital branding, ID cards and certificates, posters, banners, invitations, resume/presentation design, and automated print pipelines.",
    category: "Web & Automation",
    badge: "Entrepreneurship & SaaS",
    tags: ["Branding", "Canva", "SAP ERP", "Product Design", "Client Operations", "UI/UX"],
    features: [
      "Over 100+ creative deliverables shipped across corporate and student organizations",
      "Full lifecycle ownership: client consultation, creative prototyping, high-res production",
      "Automated design templates for ID card, certificate, and presentation generation",
      "Comprehensive digital and physical print delivery fulfillment"
    ],
    architecture: "Client Requirement Intake -> Digital Vector Prototyping (Canva/Figma) -> Automated Template Engine -> Print & Digital Asset Delivery.",
    metrics: [
      { label: "Deliverables", value: "100+ Shipped" },
      { label: "Role", value: "Founder & CEO" },
      { label: "Operation", value: "Digital & Print" }
    ],
    featured: true,
    githubUrl: "https://github.com/Niyas-J",
  },
  {
    id: "customer-data-flask",
    title: "Customer Data Collection Web App",
    shortDesc: "Structured multi-step customer information collection platform with photo uploads and secure server-side processing.",
    description: "Sole developer for this production Flask web application. Designed the user interface, relational data-flow logic, file upload pipeline for photo capture, and backend validation.",
    category: "Web & Automation",
    badge: "Production Web App",
    tags: ["Python", "Flask", "SQLite", "HTML5", "CSS3", "JavaScript", "File Uploads"],
    features: [
      "Structured customer questionnaire with real-time client-side validation",
      "Photo and identification document upload and server-side processing",
      "SQLite / Relational database storage with search and export capabilities",
      "Responsive layout optimized for mobile and low-bandwidth connectivity"
    ],
    architecture: "HTML5/CSS Responsive UI -> Flask Routing & Form Parser -> Local File Storage & SQLite DB -> Admin Review Panel.",
    metrics: [
      { label: "Stack", value: "Flask + Python" },
      { label: "Role", value: "Sole Developer" },
      { label: "Storage", value: "Relational + Media" }
    ],
    featured: false,
    githubUrl: "https://github.com/Niyas-J",
  },
  {
    id: "pcb-robotics",
    title: "Robotics & PCB Hardware Projects",
    shortDesc: "Microcontroller-based embedded robotics, sensor integration, and PCB design showcased at national hackathons.",
    description: "Hands-on hardware engineering incorporating Arduino, ESP32, motor drivers, sensor arrays, and PCB development. Participant at the PCB Cupid Hardware Hackathon 3.0 at Dayananda Sagar Academy of Technology and Management, Bengaluru.",
    category: "IoT & Hardware",
    badge: "Hardware & PCB Hackathon",
    tags: ["Arduino", "ESP32", "PCB Design", "Sensors", "Actuators", "Embedded C", "Robotics"],
    features: [
      "Microcontroller firmware for autonomous sensor-guided obstacle navigation",
      "PCB schematic development and layout design verified at PCB Cupid Hackathon 3.0",
      "Conducted hands-on PCB workshop for 69 students as IRIS President",
      "Multi-sensor integration (Ultrasonic, IR, Temperature, Relay actuators)"
    ],
    architecture: "Sensors & Inputs -> Microcontroller (Arduino/ESP32) -> Motor Drivers / Relays -> PCB Power Distribution.",
    metrics: [
      { label: "Hackathon", value: "PCB Cupid 3.0" },
      { label: "Students Trained", value: "69 Students" },
      { label: "Hardware", value: "Arduino / ESP32" }
    ],
    featured: false,
    githubUrl: "https://github.com/Niyas-J",
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    name: "AI & Machine Learning",
    icon: "Bot",
    description: "Model training, data-centric AI, LangGraph multi-agent swarms, and healthcare AI applications.",
    skills: [
      { name: "TensorFlow & AI Model Training", level: 92, category: "AI", experience: "2+ Years", highlight: true },
      { name: "AI Application Development & Prototyping", level: 95, category: "AI", experience: "2+ Years", highlight: true },
      { name: "Data-Centric AI (HackWise Rank 9: score 0.895)", level: 94, category: "AI", experience: "2 Years", highlight: true },
      { name: "LangGraph & Autonomous Multi-Agent Swarms", level: 90, category: "AI", experience: "1.5 Years", highlight: true },
      { name: "Ollama Local LLMs (Qwen, DeepSeek)", level: 88, category: "AI", experience: "1.5 Years" },
      { name: "Computer Vision & Medical Scan Analysis", level: 86, category: "AI", experience: "2 Years" },
    ]
  },
  {
    name: "Hardware & Embedded Systems",
    icon: "Cpu",
    description: "Electronics and Communication engineering, microcontrollers, IoT, sensors, and PCB design.",
    skills: [
      { name: "Arduino & ESP32 Microcontrollers", level: 95, category: "Hardware", experience: "3+ Years", highlight: true },
      { name: "IoT & Wireless Sensor Networks", level: 92, category: "Hardware", experience: "2+ Years", highlight: true },
      { name: "Robotics, Sensors & Actuators", level: 88, category: "Hardware", experience: "2+ Years", highlight: true },
      { name: "Embedded C / Firmware Development", level: 88, category: "Hardware", experience: "2+ Years" },
      { name: "PCB Development & Hardware Prototyping", level: 82, category: "Hardware", experience: "PCB Cupid 3.0" },
      { name: "Workshop Mentorship (Trained 69 Students)", level: 94, category: "Hardware", experience: "IRIS President" },
    ]
  },
  {
    name: "Programming & Software",
    icon: "Layout",
    description: "Backend APIs, dynamic web apps, full-stack frameworks, and responsive design.",
    skills: [
      { name: "Python & Flask Web Framework", level: 94, category: "Software", experience: "3+ Years", highlight: true },
      { name: "JavaScript & TypeScript", level: 90, category: "Software", experience: "2+ Years", highlight: true },
      { name: "HTML5, CSS3 & Responsive UI Systems", level: 96, category: "Software", experience: "3+ Years", highlight: true },
      { name: "Next.js & React (App Router)", level: 92, category: "Software", experience: "2+ Years", highlight: true },
      { name: "Streamlit (AI & Data Dashboard Prototyping)", level: 90, category: "Software", experience: "2 Years" },
      { name: "REST API Design & Architecture", level: 92, category: "Software", experience: "2+ Years" },
    ]
  },
  {
    name: "Tools, Platforms & Databases",
    icon: "Server",
    description: "Version control, hosting, databases, and visualization libraries.",
    skills: [
      { name: "GitHub & Version Control (28+ Public Repos)", level: 96, category: "DevOps", experience: "3+ Years", highlight: true },
      { name: "Vercel, Railway & Cloud Deployment", level: 92, category: "DevOps", experience: "2+ Years", highlight: true },
      { name: "Firebase & Cloud Firestore", level: 90, category: "Database", experience: "2+ Years" },
      { name: "MongoDB & SQLite", level: 88, category: "Database", experience: "2+ Years" },
      { name: "Plotly Data Visualizations", level: 86, category: "Tools", experience: "1.5 Years" },
    ]
  },
  {
    name: "Business, Creative & Languages",
    icon: "Sparkles",
    description: "Enterprise systems, design suites, entrepreneurial execution, and polyglot communication.",
    skills: [
      { name: "SAP ERP Fundamentals (SAP Certified)", level: 88, category: "Enterprise", experience: "Certified", highlight: true },
      { name: "Microsoft Excel & Data Analysis (Certified)", level: 92, category: "Analytics", experience: "Certified", highlight: true },
      { name: "Canva & Presentation Design (100+ Deliverables)", level: 96, category: "Creative", experience: "SIRAQ Studio", highlight: true },
      { name: "Customer Service & Business Operations", level: 90, category: "Business", experience: "Founder & CEO" },
      { name: "5 Languages (English, Malayalam, Hindi, Kannada, Tamil)", level: 95, category: "Languages", experience: "Fluent / Working", highlight: true },
    ]
  }
];

export const TIMELINE: TimelineItem[] = [
  {
    id: "iris-president",
    period: "Oct 2026 – Present",
    role: "President, IRIS Community",
    organization: "KVG College of Engineering (KVGCE)",
    location: "Sullia, Karnataka",
    type: "Leadership",
    description: "Promoted from Technical Coordinator (Mar 2026 – Oct 2026) to lead student community operations, technical teams, events, and workshops across IoT, Robotics, and Intelligent Software initiatives.",
    achievements: [
      "Organized hands-on PCB workshop activities involving 69 students",
      "Coordinating project exhibitions, collaborative student engagement, and project-based learning",
      "Manage technical development, digital platforms, branding, and community communications"
    ],
    tags: ["Leadership", "IoT", "Robotics", "PCB Workshop", "Community Building"]
  },
  {
    id: "cognex-secretary",
    period: "Oct 2026 – Present",
    role: "Secretary General, COGNEX.AI",
    organization: "KVG College of Engineering (KVGCE)",
    location: "Sullia, Karnataka",
    type: "Leadership",
    description: "Promoted from Member (Nov 2025 – Jan 2026) → Joint Secretary (Jan 2026 – Oct 2026) → Secretary General of the premier AI club at KVGCE.",
    achievements: [
      "Coordinate club operations, strategic planning, technical hackathons, and team collaborations",
      "Spearhead AI workshops, student communication, and poster/branding design"
    ],
    tags: ["AI Leadership", "COGNEX.AI", "Event Management", "Strategy"]
  },
  {
    id: "siraq-ceo",
    period: "Present",
    role: "Founder & CEO",
    organization: "SIRAQ / SIRAQ Studio",
    location: "Bengaluru & Sullia, India",
    type: "Entrepreneurship",
    description: "Independently run a design and print services enterprise delivering digital branding, ID cards and certificates, posters, banners, invitations, resume/presentation design, printing, and documentation.",
    achievements: [
      "Successfully delivered 100+ creative and commercial deliverables",
      "Own complete client communication, pricing, quality control, and on-time fulfillment"
    ],
    tags: ["Entrepreneurship", "Founder & CEO", "Branding", "Client Operations"]
  },
  {
    id: "be-degree",
    period: "Oct 2024 – 2028 (Expected)",
    role: "B.E. in Electronics & Communication Engineering",
    organization: "KVG College of Engineering (KVGCE)",
    location: "Sullia, Karnataka",
    type: "Education",
    description: "Currently in 5th Semester. Focused on Signals & Systems, Microprocessors & Microcontrollers, VLSI, Embedded Systems, and Wireless Sensor Telemetry.",
    achievements: [
      "Active researcher and builder in IoT hardware, robotics, and embedded systems",
      "Elected President of IRIS Community and Secretary General of COGNEX.AI"
    ],
    tags: ["ECE", "KVGCE", "Embedded C", "Signals", "Hardware"]
  }
];

export const HACKATHONS: HackathonItem[] = [
  {
    name: "HackWise – 3LC Data-Centric AI Challenge",
    organizer: "Sphere Hive",
    rank: "Rank 9 (Score: 0.895)",
    description: "Focused on AI model training, structured datasets, data curation, and real-time model evaluation.",
    highlight: "National Rank 9 with 0.895 evaluation score in data-centric AI"
  },
  {
    name: "Krishimanthan – 36-Hour National Hackathon",
    organizer: "Malnad College of Engineering, Hassan",
    description: "Time-constrained hardware-software problem solving, rapid prototyping, and presentation of smart agricultural solutions.",
    highlight: "Developed IoT agricultural telemetry prototype under pressure"
  },
  {
    name: "PCB Cupid Hardware Hackathon 3.0",
    organizer: "Dayananda Sagar Academy of Technology and Management, Bengaluru",
    description: "National-level hardware and printed circuit board (PCB) design and fabrication hackathon.",
    highlight: "Engineered and validated custom circuit schematics and PCB layouts"
  }
];
