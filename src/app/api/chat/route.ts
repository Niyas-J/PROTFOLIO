import { NextResponse } from "next/server";
import { PERSONAL_INFO, PROJECTS, SKILL_CATEGORIES, TIMELINE, HACKATHONS } from "@/lib/data";

interface ChatRequest {
  message: string;
}

export async function POST(request: Request) {
  try {
    const { message }: ChatRequest = await request.json();

    if (!message || !message.trim()) {
      return NextResponse.json({ error: "Message cannot be empty." }, { status: 400 });
    }

    const query = message.toLowerCase().trim();
    let answer = "";

    if (query.includes("mediscan") || query.includes("healthtech") || query.includes("medical") || query.includes("hospital")) {
      answer = `**MediScan-AI** is Niyas's flagship healthcare platform. Engineered using Python, TensorFlow, and Flask, it analyzes medical scans and medicine prescriptions. Niyas extended it into an interconnected **6+ repository ecosystem** including Medi-tech, Meditab-AI, Medi-Chat-AI, and Medi-Appointment.`;
    } else if (query.includes("iris") || query.includes("president") || query.includes("community")) {
      answer = `Niyas is the **President of IRIS Community** at KVG College of Engineering (promoted from Technical Coordinator in Oct 2026). He leads IoT, robotics, and intelligent software workshops, including organizing a hands-on PCB workshop for 69 students.`;
    } else if (query.includes("cognex") || query.includes("secretary")) {
      answer = `Niyas serves as the **Secretary General of COGNEX.AI** at KVGCE. He advanced from Member to Joint Secretary and now Secretary General, leading strategic planning, AI events, and technical initiatives.`;
    } else if (query.includes("siraq") || query.includes("studio") || query.includes("business") || query.includes("founder")) {
      answer = `Niyas is the **Founder & CEO of SIRAQ Studio**, an independent design and print services enterprise. He has delivered **100+ creative deliverables** including digital branding, ID cards, certificates, posters, and automated documentation.`;
    } else if (query.includes("hackathon") || query.includes("hackwise") || query.includes("achievement") || query.includes("rank")) {
      answer = `Niyas has proven competitive achievements:
1. **HackWise 3LC Data-Centric AI Challenge (Sphere Hive)**: Secured **Rank 9** nationally with an evaluation score of **0.895**.
2. **Krishimanthan 36-Hour National Hackathon** (MCE Hassan): Rapid problem-solving & agriculture telemetry prototyping.
3. **PCB Cupid Hardware Hackathon 3.0** (DSATM Bengaluru): National PCB design & hardware hackathon.`;
    } else if (query.includes("college") || query.includes("education") || query.includes("degree") || query.includes("kvgce")) {
      answer = `Niyas is pursuing his **B.E. in Electronics & Communication Engineering (ECE)** at **KVG College of Engineering (KVGCE)**, Sullia, Karnataka (Oct 2024 – 2028 expected, currently in 5th Semester).`;
    } else if (query.includes("skills") || query.includes("tech stack") || query.includes("languages")) {
      answer = `Niyas's core competencies:
- **AI & ML**: TensorFlow, AI product prototyping, Data-Centric AI, LangGraph, Ollama.
- **Software**: Python, Flask, JavaScript, TypeScript, Next.js, HTML/CSS, Streamlit, REST APIs.
- **Hardware & ECE**: Arduino, ESP32, IoT, Robotics, Sensors, PCB Development.
- **Enterprise & Creative**: SAP Certified, Microsoft Excel Certified, Canva (100+ deliverables).
- **Languages**: Speaks 5 languages (English, Malayalam, Hindi, Kannada, Tamil).`;
    } else if (query.includes("contact") || query.includes("email") || query.includes("phone")) {
      answer = `You can reach Niyas directly at:
- **Email**: ${PERSONAL_INFO.email}
- **Phone**: ${PERSONAL_INFO.phone}
- **GitHub**: [github.com/Niyas-J](${PERSONAL_INFO.socials.github}) (28+ repositories)
- **LinkedIn**: [linkedin.com/in/niyas-j](${PERSONAL_INFO.socials.linkedin})`;
    } else {
      answer = `Niyas Jahangeer is an ECE undergraduate at KVGCE, AI & software developer, President of IRIS Community, Secretary General of COGNEX.AI, and Founder of SIRAQ Studio. He maintains 28+ GitHub repos and has delivered 100+ creative and technical products. Ask me about his projects (MediScan-AI, AGENTX, AgriMithra), hackathon wins, or leadership roles!`;
    }

    return NextResponse.json({
      reply: answer,
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    console.error("Chat API error:", error);
    return NextResponse.json({
      reply: "Encountered an issue processing query. Please contact Niyas directly at niyasjahangeer772@gmail.com."
    }, { status: 500 });
  }
}
