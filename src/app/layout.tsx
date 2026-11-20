import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Niyas Jahangeer | ECE Undergraduate, AI Developer & Technical Leader",
  description: "Official portfolio of Niyas Jahangeer: President of IRIS Community, Secretary General of COGNEX.AI, Founder & CEO of SIRAQ Studio. Building MediScan-AI 6+ repo healthtech platform, AGENTX, and IoT robotics hardware at KVGCE.",
  keywords: [
    "Niyas Jahangeer",
    "ECE Undergraduate",
    "KVGCE",
    "KVG College of Engineering",
    "President IRIS Community",
    "Secretary General COGNEX.AI",
    "SIRAQ Studio",
    "MediScan-AI",
    "Medi-tech",
    "AGENTX",
    "AgriMithra",
    "IRIS AgriShield",
    "HackWise Rank 9",
    "Krishimanthan",
    "PCB Cupid 3.0",
    "TensorFlow",
    "Python",
    "Flask",
    "IoT",
    "Robotics",
    "LangGraph"
  ],
  authors: [{ name: "Niyas Jahangeer" }],
  openGraph: {
    title: "Niyas Jahangeer | ECE Undergraduate, AI Developer & Technical Leader",
    description: "President @ IRIS Community · Secretary General @ COGNEX.AI · Founder @ SIRAQ Studio · 28+ GitHub Repositories.",
    type: "website",
    locale: "en_US",
    siteName: "Niyas Jahangeer Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Niyas Jahangeer | Official Portfolio",
    description: "AI Healthtech platforms, Flask applications, IoT robotics hardware, and technical leadership at KVGCE.",
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

