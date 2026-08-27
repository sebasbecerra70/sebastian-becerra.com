import { ABOUT } from "@/data/constants";
import SectionWrapper from "../ui/section-wrapper";
import Reveal from "../ui/reveal";

/**
 * Two paragraphs, not four. The full `ABOUT.paragraphs` copy is good writing, but a
 * four-paragraph block under the hero is a wall a recruiter scrolls past.
 */
const IntroSection = () => (
  <SectionWrapper id="intro" className="py-24 md:py-36 z-10">
    <div className="mx-auto w-full max-w-7xl px-6 md:px-10">
      <div className="grid md:grid-cols-12 gap-8 md:gap-12">
        <Reveal className="md:col-span-4">
          <div className="flex items-center gap-3 md:sticky md:top-28">
            <span className="font-display text-brand text-xs tabular">01</span>
            <span
              className="h-px w-8"
              style={{ background: "var(--brand)", opacity: 0.5 }}
            />
            <span className="eyebrow">The short version</span>
          </div>
        </Reveal>

        <div className="md:col-span-8 space-y-6 max-w-2xl">
          {ABOUT.paragraphs.slice(0, 2).map((paragraph, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <p
                className={
                  i === 0
                    ? "text-xl md:text-2xl leading-relaxed text-foreground"
                    : "text-base md:text-lg leading-relaxed text-muted-foreground"
                }
              >
                {paragraph}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  </SectionWrapper>
);

export default IntroSection;
