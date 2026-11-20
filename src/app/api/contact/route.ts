import { NextResponse } from "next/server";

interface ContactPayload {
  name: string;
  email: string;
  subject?: string;
  message: string;
  category?: string;
}

export async function POST(request: Request) {
  try {
    const body: ContactPayload = await request.json();

    // Input validation
    if (!body.name || !body.name.trim()) {
      return NextResponse.json({ success: false, error: "Name is required." }, { status: 400 });
    }

    if (!body.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email)) {
      return NextResponse.json({ success: false, error: "A valid email address is required." }, { status: 400 });
    }

    if (!body.message || body.message.trim().length < 10) {
      return NextResponse.json({ success: false, error: "Message must be at least 10 characters long." }, { status: 400 });
    }

    const timestamp = new Date().toISOString();
    const messageRecord = {
      id: `msg_${Date.now()}`,
      name: body.name.trim(),
      email: body.email.trim(),
      subject: body.subject?.trim() || "Portfolio General Inquiry",
      category: body.category || "General Collaboration",
      message: body.message.trim(),
      timestamp,
      status: "received"
    };

    // In production, this can forward to Resend, SendGrid, Firebase, or Discord/Telegram Webhook
    console.log("[INCOMING CONTACT MESSAGE]", messageRecord);

    return NextResponse.json({
      success: true,
      message: "Thank you, your message has been transmitted successfully! Niyas will review and reply within 24 hours.",
      receiptId: messageRecord.id,
      timestamp: messageRecord.timestamp
    }, { status: 200 });

  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json({
      success: false,
      error: "Internal server error occurred while processing your message."
    }, { status: 500 });
  }
}

