import { NextResponse } from "next/server";
import { PERSONAL_INFO, PROJECTS, SKILL_CATEGORIES, TIMELINE } from "@/lib/data";

interface ChatRequest {
  message: string;
  history?: { role: "user" | "assistant"; content: string }[];
}

export async function POST(request: Request) {
  try {
    const { message }: ChatRequest = await request.json();

    if (!message || !message.trim()) {
      return NextResponse.json({ error: "Message cannot be empty." }, { status: 400 });
    }

    const query = message.toLowerCase().trim();

    // Built-in intelligent context engine for Niyas Jahangeer
    let answer = "";

    if (query.includes("agrimithra") || query.includes("farm") || query.includes("agriculture")) {
      const p = PROJECTS.find((x) => x.id === "agrimithra");
      answer = `**AgriMithra** is Niyas's flagship IoT precision agriculture project. It connects ESP32/LoRa field sensor nodes (monitoring soil NPK, moisture, and microclimate) to a Next.js telemetry dashboard and FastAPI cloud service. It achieved a 38% reduction in water consumption with automated solenoid valve actuation over a 5km wireless range.`;
    } else if (query.includes("hospital") || query.includes("clinical") || query.includes("medical") || query.includes("smart hospital")) {
      answer = `The **Smart Hospital Automation System** was engineered by Niyas to streamline healthcare operations. It combines non-invasive patient biometric monitors (FreeRTOS on ESP32), RFID staff/asset tracking, and real-time triage dashboards with WebSockets, slashing critical alert response times by 45%.`;
    } else if (query.includes("siraq") || query.includes("saas") || query.includes("startup") || query.includes("company")) {
      answer = `**SIRAQ Technologies** is founded by Niyas Jahangeer. It delivers high-performance SaaS engines and automation architectures built with Next.js 14, Supabase (with Row-Level Security), and FastAPI, achieving sub-second page loads and 99.9% uptime for business clients.`;
    } else if (query.includes("ai") || query.includes("agent") || query.includes("llm") || query.includes("langgraph") || query.includes("gemini")) {
      answer = `Niyas is an advanced AI engineer with hands-on experience developing **autonomous multi-agent workflows** using LangGraph, Google Gemini API, and local models via Ollama (Qwen 2.5, DeepSeek). He architects deterministic graph workflows with hybrid routing (fast local LLMs for parsing + frontier models for reasoning), tool execution sandboxes, and vector RAG memory.`;
    } else if (query.includes("ece") || query.includes("electronics") || query.includes("hardware") || query.includes("iot") || query.includes("degree")) {
      answer = `Niyas is an **Electronics & Communication Engineering (ECE)** student. His technical background includes microcontrollers (ESP32, STM32, ARM Cortex, Arduino), wireless protocols (LoRaWAN, BLE, Zigbee, MQTT), circuit design & PCB layout, and low-level C/C++ firmware. This hardware depth allows him to bridge the physical world with cloud systems seamlessly.`;
    } else if (query.includes("skills") || query.includes("tech stack") || query.includes("languages") || query.includes("stack")) {
      answer = `Niyas's core technical stack spans three primary layers:
1. **Hardware & ECE**: Embedded C/C++, ESP32, STM32, ARM Cortex, LoRaWAN, MQTT, PCB Design.
2. **Full-Stack & Cloud**: Next.js 14, React, TypeScript, Tailwind CSS, Python (FastAPI/Flask), Node.js, Supabase, Firebase, MongoDB.
3. **AI & Agents**: Gemini API, LangGraph, Ollama, Qwen, Vector DBs, Multi-Agent Swarms.`;
    } else if (query.includes("contact") || query.includes("hire") || query.includes("email") || query.includes("reach") || query.includes("freelance")) {
      answer = `You can get in touch with Niyas directly via:
- **Email**: ${PERSONAL_INFO.socials.email}
- **LinkedIn**: [linkedin.com/in/niyasjahangeer](${PERSONAL_INFO.socials.linkedin})
- **GitHub**: [github.com/niyasjahangeer](${PERSONAL_INFO.socials.github})
- Or simply use the interactive **Contact Form** at the bottom of this portfolio!`;
    } else if (query.includes("who are you") || query.includes("about") || query.includes("niyas") || query.includes("bio")) {
      answer = `I am the AI assistant for **Niyas Jahangeer** — an Electronics & Communication Engineering student, full-stack engineer, AI agent developer, and entrepreneur based in Kerala, India. Niyas specializes in uniting hardware electronics, embedded IoT, cloud microservices, and autonomous AI systems. How can I assist you with his projects or qualifications today?`;
    } else {
      answer = `Thank you for asking! Niyas Jahangeer is an Electronics & Communication Engineering student, full-stack engineer, and AI developer. He specializes in:
- **IoT & Embedded Systems** (AgriMithra precision farm, Smart Hospital automation)
- **Full-Stack SaaS Platforms** (Next.js 14, TypeScript, FastAPI, Supabase)
- **Autonomous Multi-Agent AI** (LangGraph, Gemini API, local Ollama models)

Feel free to ask about his specific projects, tech stack, ECE background, or how to contact him for collaborations!`;
    }

    return NextResponse.json({
      reply: answer,
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    console.error("Chat API error:", error);
    return NextResponse.json({
      reply: "I am having trouble processing your query right now. Please try again or reach out directly to Niyas via the contact form."
    }, { status: 500 });
  }
}

