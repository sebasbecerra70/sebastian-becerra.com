"use client";

import { CAPABILITIES, CREDENTIALS, TECH_STACK } from "@/data/constants";
import SectionWrapper from "../ui/section-wrapper";
import { SectionHeader } from "./section-header";
import Reveal from "../ui/reveal";

/**
 * Stack, capabilities and credentials in one band.
 *
 * These used to be three full-height sections — a six-card capability grid, a six-card
 * stack grid and a five-row credential list, each with its own pastel icon tile. Same
 * information, roughly a third of the scroll, and nothing that looks generated.
 */
const SkillsSection = () => (
  <SectionWrapper id="stack" className="py-24 md:py-32 z-10">
    <div className="mx-auto w-full max-w-7xl px-6 md:px-10">
      <SectionHeader
        id="stack"
        index="04"
        title="Stack & capabilities"
        desc="Press any key on the keyboard — every keycap is a real one."
        className="mb-12 md:mb-16"
      />

      {/* Dedicated stage for the Spline keyboard. Scroll triggers key off this
          element rather than the section, so the keyboard is parked again before
          the lists below come into view instead of landing on top of them. */}
      <div
        id="keyboard-stage"
        aria-hidden
        className="hidden md:block h-[68vh] max-h-[560px]"
      />

      <div id="stack-lists" className="grid lg:grid-cols-12 gap-x-12 gap-y-14">
        <div className="lg:col-span-7">
          <p className="eyebrow mb-6">Tools</p>
          <div className="space-y-7">
            {TECH_STACK.map((category, i) => (
              <Reveal
                key={category.title}
                delay={i * 0.04}
                className="grid sm:grid-cols-[10rem_1fr] gap-2 sm:gap-6 border-t border-border pt-4"
              >
                <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-foreground pt-0.5">
                  {category.title}
                </p>
                <div className="flex flex-wrap gap-x-4 gap-y-2.5">
                  {category.items.map((item) => {
                    const ItemIcon = item.icon;
                    return (
                      <span
                        key={item.label}
                        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors duration-200 hover:text-foreground"
                      >
                        {ItemIcon ? (
                          <ItemIcon className="w-3.5 h-3.5 shrink-0 opacity-70" />
                        ) : null}
                        {item.label}
                      </span>
                    );
                  })}
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="lg:col-span-5 flex flex-col gap-14">
          <div>
            <p className="eyebrow mb-6">Hired for</p>
            <div className="space-y-4">
              {CAPABILITIES.map((capability, i) => (
                <Reveal
                  key={capability.title}
                  delay={i * 0.04}
                  className="border-t border-border pt-3.5"
                >
                  <p className="text-sm font-medium text-foreground">
                    {capability.title}
                  </p>
                  <p className="mt-1 text-[13px] leading-relaxed text-muted-foreground">
                    {capability.items.join(" · ")}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>

          <div>
            <p className="eyebrow mb-6">Education & credentials</p>
            <div className="space-y-4">
              {CREDENTIALS.map((credential, i) => (
                <Reveal
                  key={credential.title}
                  delay={i * 0.04}
                  className="border-t border-border pt-3.5"
                >
                  <div className="flex items-baseline justify-between gap-4">
                    <p className="text-sm font-medium text-foreground">
                      {credential.title}
                    </p>
                    {credential.period && (
                      <span className="font-mono text-[11px] tabular text-muted-foreground shrink-0">
                        {credential.period}
                      </span>
                    )}
                  </div>
                  <p className="mt-1 text-[13px] leading-relaxed text-muted-foreground">
                    <span className="text-foreground/70">{credential.org}</span>
                    {credential.detail ? ` — ${credential.detail}` : ""}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </SectionWrapper>
);

export default SkillsSection;
