"use client";
import { ChevronRight, Loader2 } from "lucide-react";
import React from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/ace-input";
import { Textarea } from "./ui/ace-textarea";
import { cn } from "@/lib/utils";
import { useToast } from "./ui/use-toast";
import { Button } from "./ui/button";
import { config } from "@/data/config";
import confetti from "canvas-confetti";

const ContactForm = () => {
  const [fullName, setFullName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [failed, setFailed] = React.useState(false);

  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setFailed(false);
    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fullName, email, message }),
      });
      const data = await res.json();
      if (!res.ok || data.error) throw new Error(data.error || "Send failed");

      confetti({
        particleCount: 90,
        spread: 75,
        startVelocity: 40,
        origin: { x: 0.5, y: 0.7 },
      });
      toast({
        title: "Message sent",
        description: "I'll get back to you shortly.",
        className: cn("top-0 mx-auto flex fixed md:top-4 md:right-4"),
      });
      setFullName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      // Never claim success we can't verify. The old version silently
      // "succeeded" whenever the mail provider wasn't configured.
      setFailed(true);
      toast({
        title: "Message didn't send",
        description: "Email me directly instead. The link is below the form.",
        className: cn(
          "top-0 w-full flex justify-center fixed md:max-w-7xl md:top-4 md:right-4"
        ),
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const mailtoHref = `mailto:${config.email}?subject=${encodeURIComponent(
    "Hello from your site"
  )}&body=${encodeURIComponent(message)}`;

  return (
    <form className="w-full" onSubmit={handleSubmit}>
      <div className="flex flex-col md:flex-row gap-4 mb-4">
        <LabelInputContainer>
          <Label htmlFor="fullname">Name</Label>
          <Input
            id="fullname"
            placeholder="Your name"
            type="text"
            autoComplete="name"
            required
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </LabelInputContainer>
        <LabelInputContainer>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            placeholder="you@company.com"
            type="email"
            autoComplete="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </LabelInputContainer>
      </div>
      <div className="grid w-full gap-1.5 mb-5">
        <Label htmlFor="content">Message</Label>
        <Textarea
          placeholder="The role, the team, what you're building. Whatever's useful."
          id="content"
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <p className="text-xs text-muted-foreground">
          Goes straight to my inbox. Never shared with anyone.
        </p>
      </div>
      <Button
        disabled={loading}
        className="w-full h-11 rounded-none bg-[var(--brand)] text-background font-medium hover:opacity-90 transition-opacity"
        type="submit"
      >
        {loading ? (
          <span className="flex items-center justify-center">
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Sending
          </span>
        ) : (
          <span className="flex items-center justify-center">
            Send message <ChevronRight className="w-4 h-4 ml-2" />
          </span>
        )}
      </Button>

      {failed && (
        <p className="mt-3 text-sm text-destructive">
          That didn&apos;t go through.{" "}
          <a href={mailtoHref} className="underline underline-offset-4">
            Send it as an email instead
          </a>
          .
        </p>
      )}
    </form>
  );
};

export default ContactForm;

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div className={cn("flex flex-col space-y-2 w-full", className)}>
    {children}
  </div>
);
