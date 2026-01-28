import { EmailTemplate } from "@/components/email-template";
import { config } from "@/data/config";
import { Resend } from "resend";
import { z } from "zod";

const Email = z.object({
  fullName: z.string().min(2, "Full name is invalid!"),
  email: z.string().email({ message: "Email is invalid!" }),
  message: z.string().min(10, "Message is too short!"),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    console.log("📧 Contact form submission:", body);
    
    const {
      success: zodSuccess,
      data: zodData,
      error: zodError,
    } = Email.safeParse(body);
    if (!zodSuccess)
      return Response.json({ error: zodError?.message }, { status: 400 });

    // Use dummy API key if not configured
    const apiKey = process.env.RESEND_API_KEY || 're_dummy_key_not_configured';
    
    // If using dummy key, just log and return success
    if (apiKey === 're_dummy_key_not_configured') {
      console.log("⚠️ RESEND_API_KEY not configured - running in dummy mode");
      return Response.json({ 
        success: true,
        id: 'dummy_' + Date.now(),
        message: "Message received! (Email service not configured)" 
      });
    }

    console.log("🚀 Sending email via Resend...");
    const resend = new Resend(apiKey);
    const { data: resendData, error: resendError } = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: [config.email],
      replyTo: zodData.email,
      subject: `New contact from ${zodData.fullName}`,
      react: EmailTemplate({
        fullName: zodData.fullName,
        email: zodData.email,
        message: zodData.message,
      }),
    });

    if (resendError) {
      console.error("❌ Resend error:", resendError);
      return Response.json({ 
        error: `Email service error: ${JSON.stringify(resendError)}` 
      }, { status: 500 });
    }

    console.log("✅ Email sent successfully:", resendData);
    return Response.json(resendData);
  } catch (error) {
    console.error("❌ API error:", error);
    return Response.json({ error: String(error) }, { status: 500 });
  }
}
