"use client";

import { EXPERIENCE, SkillNames, SKILLS } from "@/data/constants";
import { SectionHeader } from "./section-header";
import SectionWrapper from "../ui/section-wrapper";
import Reveal from "../ui/reveal";

const ExperienceRow = ({
  experience,
  index,
}: {
  experience: (typeof EXPERIENCE)[number];
  index: number;
}) => (
  <Reveal
    as="article"
    delay={Math.min(index, 3) * 0.06}
    className="group grid md:grid-cols-12 gap-4 md:gap-10 border-t border-border py-8 md:py-10 transition-colors duration-300 hover:border-[var(--brand)]"
  >
    <div className="md:col-span-3">
      <p className="font-mono text-xs tabular text-muted-foreground">
        {experience.startDate} to {experience.endDate}
      </p>
    </div>

    <div className="md:col-span-9 flex flex-col gap-4">
      <div>
        <h3 className="text-xl md:text-2xl font-semibold tracking-tight text-foreground">
          {experience.title}
        </h3>
        <p className="mt-1 text-brand text-sm md:text-base font-medium">
          {experience.company}
        </p>
      </div>

      <ul className="space-y-3">
        {experience.description.map((point, i) => (
          <li
            key={i}
            className="relative pl-5 text-sm md:text-base leading-relaxed text-muted-foreground"
          >
            <span
              aria-hidden
              className="absolute left-0 top-[0.7em] h-px w-2.5"
              style={{ background: "var(--brand)", opacity: 0.6 }}
            />
            {point}
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-x-4 gap-y-2 pt-1">
        {experience.skills.map((skillName) => {
          const skill = SKILLS[skillName as SkillNames];
          return (
            <span
              key={skillName}
              className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.1em] text-muted-foreground"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={skill.icon}
                alt=""
                aria-hidden
                className="w-3 h-3 object-contain opacity-70"
              />
              {skill.label}
            </span>
          );
        })}
      </div>
    </div>
  </Reveal>
);

const ExperienceSection = () => (
  <SectionWrapper id="experience" className="py-24 md:py-32 z-10">
    <div className="mx-auto w-full max-w-7xl px-6 md:px-10">
      <SectionHeader
        id="experience"
        index="03"
        title="Experience"
        desc="Nine years between the code and the operation it runs."
        className="mb-12 md:mb-16"
      />

      <div>
        {EXPERIENCE.map((exp, index) => (
          <ExperienceRow key={exp.id} experience={exp} index={index} />
        ))}
        <div className="border-t border-border" />
      </div>
    </div>
  </SectionWrapper>
);

export default ExperienceSection;
