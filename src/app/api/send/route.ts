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
    console.log(body);
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
      console.log("📧 Contact form submission (dummy mode):", {
        from: zodData.fullName,
        email: zodData.email,
        message: zodData.message
      });
      return Response.json({ 
        success: true,
        id: 'dummy_' + Date.now(),
        message: "Message received! (Email service not configured)" 
      });
    }

    const resend = new Resend(apiKey);
    const { data: resendData, error: resendError } = await resend.emails.send({
      from: "Porfolio <onboarding@resend.dev>",
      to: [config.email],
      subject: "Contact me from portfolio",
      react: EmailTemplate({
        fullName: zodData.fullName,
        email: zodData.email,
        message: zodData.message,
      }),
    });

    if (resendError) {
      return Response.json({ resendError }, { status: 500 });
    }

    return Response.json(resendData);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
