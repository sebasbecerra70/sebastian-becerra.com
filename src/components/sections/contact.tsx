"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, FileText } from "lucide-react";
import { SiGithub, SiLinkedin, SiX } from "react-icons/si";
import ContactForm from "../ContactForm";
import { config } from "@/data/config";
import { SectionHeader } from "./section-header";
import SectionWrapper from "../ui/section-wrapper";
import Reveal from "../ui/reveal";

const LINKS = [
  { label: "LinkedIn", href: config.social.linkedin, Icon: SiLinkedin },
  { label: "GitHub", href: config.social.github, Icon: SiGithub },
  { label: "X", href: config.social.twitter, Icon: SiX },
].filter((l) => Boolean(l.href));

const ContactSection = () => (
  <SectionWrapper id="contact" className="py-24 md:py-32 z-10">
    <div className="mx-auto w-full max-w-7xl px-6 md:px-10">
      <SectionHeader
        id="contact"
        index="05"
        title="Let's talk"
        desc="Open to software engineering roles. The fastest way to reach me is email."
        className="mb-12 md:mb-16"
      />

      <div className="grid md:grid-cols-12 gap-10 md:gap-16">
        <div className="md:col-span-5 flex flex-col gap-8">
          <Reveal>
            <p className="eyebrow mb-2">Email</p>
            <a
              href={`mailto:${config.email}`}
              className="text-lg md:text-xl font-medium text-foreground hover:text-brand transition-colors break-all"
            >
              {config.email}
            </a>
          </Reveal>

          <Reveal delay={0.06}>
            <p className="eyebrow mb-3">Elsewhere</p>
            <div className="flex flex-col gap-2">
              {LINKS.map(({ label, href, Icon }) => (
                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener"
                  className="group inline-flex items-center gap-2.5 text-sm text-muted-foreground hover:text-foreground transition-colors w-fit"
                >
                  <Icon className="h-4 w-4 opacity-70" />
                  {label}
                  <ArrowUpRight className="h-3.5 w-3.5 opacity-0 -translate-x-1 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0" />
                </Link>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <Link
              href={config.resume}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-[var(--brand)] w-fit"
            >
              <FileText className="h-4 w-4" />
              Download résumé
            </Link>
          </Reveal>
        </div>

        <Reveal delay={0.08} className="md:col-span-7">
          <div className="panel p-6 md:p-8">
            <ContactForm />
          </div>
        </Reveal>
      </div>
    </div>
  </SectionWrapper>
);

export default ContactSection;
