"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { ArrowUpRight } from "lucide-react";
import { SiLinkedin } from "react-icons/si";
import ScrollDownIcon from "../scroll-down-icon";
import { config } from "@/data/config";
import { ABOUT } from "@/data/constants";
import SectionWrapper from "../ui/section-wrapper";
import { scrollToSection } from "@/lib/scroll-to-section";

/**
 * Staggered entrance, CSS only.
 *
 * The hero used to be built out of Framer `BlurIn` wrappers gated on `!isLoading`. Two
 * problems: the content did not exist in the DOM until the preloader cleared (bad for
 * crawlers and for anyone whose JS is slow), and the tweens froze at `opacity: 0`
 * whenever the Spline scene starved the frame loop, leaving a completely blank hero.
 * This renders immediately and animates on the browser's own animation timeline.
 */
const Enter = ({
  delay = 0,
  className,
  children,
}: {
  delay?: number;
  className?: string;
  children: React.ReactNode;
}) => (
  <div
    className={cn("enter", className)}
    style={{ ["--enter-delay" as string]: `${delay}ms` }}
  >
    {children}
  </div>
);

const HeroSection = () => {
  const goToContact = (e: React.MouseEvent) => {
    if (!document.querySelector("#contact")) return;
    e.preventDefault();
    scrollToSection("#contact");
  };

  return (
    <SectionWrapper id="hero" className="relative w-full min-h-[100svh]">
      <div className="mx-auto w-full max-w-7xl px-6 md:px-10">
        <div className="grid md:grid-cols-12 items-center min-h-[100svh] pt-28 pb-24 md:py-0">
          <div className="md:col-span-7 lg:col-span-6 z-[2]">
            <div className="flex flex-col items-start">
              <Enter delay={120}>
                <h1
                  className={cn(
                    "font-display leading-[0.82] tracking-tight text-foreground",
                    "text-[clamp(2.75rem,9vw,6.5rem)]"
                  )}
                >
                  Sebastian
                  <br />
                  Becerra
                </h1>
              </Enter>

              {/* The whole pitch in one line. */}
              <Enter delay={260}>
                <p className="mt-8 text-2xl md:text-4xl font-medium tracking-tight text-foreground/90">
                  I build the systems I run on.
                </p>
              </Enter>

              <Enter delay={400}>
                <div className="mt-10 flex flex-wrap items-center gap-3">
                  <a
                    href="#contact"
                    onClick={goToContact}
                    className={cn(
                      "group inline-flex items-center gap-2 px-6 py-3 text-sm font-medium",
                      "bg-[var(--brand)] text-background",
                      "transition-transform duration-200 hover:-translate-y-0.5"
                    )}
                  >
                    Get in touch
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                  <Link
                    href={config.social.linkedin}
                    target="_blank"
                    rel="noopener"
                    aria-label="LinkedIn"
                    className="p-3 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <SiLinkedin size={18} />
                  </Link>
                </div>
              </Enter>

              {/* Facts read as a data strip, not as four pastel tiles. */}
              <Enter delay={540} className="w-full">
                <dl className="mt-14 flex flex-wrap gap-x-10 gap-y-5 border-t border-border pt-6 max-w-xl">
                  {ABOUT.facts.map((fact) => (
                    <div key={fact.label}>
                      <dt className="eyebrow">{fact.label}</dt>
                      <dd className="mt-1.5 text-sm font-medium text-foreground">
                        {fact.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </Enter>
            </div>
          </div>
          {/* Right column is deliberately empty: the 3D keyboard parks here on
              desktop, and on mobile the copy simply gets the full width. */}
          <div className="hidden md:block md:col-span-5 lg:col-span-6" />
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <ScrollDownIcon />
      </div>
    </SectionWrapper>
  );
};

export default HeroSection;
