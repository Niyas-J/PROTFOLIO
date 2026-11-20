import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Niyas Jahangeer | Electronics & Communication Engineer, Full-Stack & AI Developer",
  description: "Official portfolio of Niyas Jahangeer: Electronics and Communication Engineering student, full-stack software engineer, and AI developer. Specializing in IoT, robotics, Next.js, FastAPI, and autonomous multi-agent AI systems.",
  keywords: [
    "Niyas Jahangeer",
    "Electronics and Communication Engineer",
    "Full-Stack Developer",
    "AI Engineer",
    "AgriMithra",
    "Smart Hospital Automation",
    "SIRAQ",
    "IoT",
    "Robotics",
    "Next.js",
    "FastAPI",
    "LangGraph",
    "Gemini API"
  ],
  authors: [{ name: "Niyas Jahangeer" }],
  openGraph: {
    title: "Niyas Jahangeer | Electronics & Communication Engineer & AI Developer",
    description: "Bridging Silicon, Cloud & Autonomous Intelligence. Explore live IoT telemetry, full-stack applications, and agentic AI systems.",
    type: "website",
    locale: "en_US",
    siteName: "Niyas Jahangeer Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Niyas Jahangeer | Engineering & Full-Stack Portfolio",
    description: "Electronics & Communication Engineering, IoT telemetry, Next.js, and autonomous AI agents.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="theme-color" content="#090a0f" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body className="antialiased selection:bg-indigo-500/30 selection:text-indigo-200">
        {children}
      </body>
    </html>
  );
}

