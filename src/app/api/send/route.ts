import { EmailTemplate } from "@/components/email-template";
import { config } from "@/data/config";
import { Resend } from "resend";
import { z } from "zod";

const Email = z.object({
  fullName: z.string().min(2, "Please enter your name."),
  email: z.string().email({ message: "That email address doesn't look right." }),
  message: z.string().min(10, "Tell me a little more than that."),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const parsed = Email.safeParse(body);

    if (!parsed.success) {
      return Response.json(
        { error: parsed.error.issues[0]?.message ?? "Invalid submission." },
        { status: 400 }
      );
    }

    // No key means no email was sent. Say so.
    //
    // This route used to fall back to a placeholder key and return
    // `{ success: true }` without sending anything — so a recruiter would see a
    // confirmation, close the tab, and never hear back. Failing loudly lets the
    // client offer a mailto: fallback instead.
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("RESEND_API_KEY is not configured — contact form cannot send.");
      return Response.json(
        { error: "Mail service is not configured." },
        { status: 503 }
      );
    }

    const resend = new Resend(apiKey);
    const { data, error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: [config.email],
      replyTo: parsed.data.email,
      subject: `New contact from ${parsed.data.fullName}`,
      react: EmailTemplate({
        fullName: parsed.data.fullName,
        email: parsed.data.email,
        message: parsed.data.message,
      }),
    });

    if (error) {
      console.error("Resend error:", error);
      return Response.json({ error: "Could not send the message." }, { status: 502 });
    }

    return Response.json({ success: true, id: data?.id });
  } catch (error) {
    console.error("Contact route error:", error);
    return Response.json({ error: "Could not send the message." }, { status: 500 });
  }
}
