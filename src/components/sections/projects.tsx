"use client";

import Image from "next/image";
import { ArrowUpRight, Lock } from "lucide-react";
import projects, { type Project } from "@/data/projects";
import { cn } from "@/lib/utils";
import { highlight } from "@/lib/rich-text";
import { SectionHeader } from "./section-header";
import SectionWrapper from "../ui/section-wrapper";
import Reveal from "../ui/reveal";

const ProjectRow = ({ project, index }: { project: Project; index: number }) => (
  <Reveal
    as="article"
    delay={index * 0.06}
    className="panel group grid md:grid-cols-12 gap-6 md:gap-10 p-6 md:p-9"
  >
    <div className="md:col-span-4 flex flex-col gap-4">
      <div className="flex items-baseline gap-3">
        <span className="font-display text-brand text-xs tabular">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="eyebrow">{project.kind}</span>
      </div>

      <h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-foreground">
        {project.title}
      </h3>

      <p className="text-sm md:text-base leading-relaxed text-muted-foreground">
        {project.summary}
      </p>

      {project.live ? (
        <a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-1 inline-flex w-fit items-center gap-1.5 text-sm font-medium text-brand hover:underline underline-offset-4"
        >
          {project.live.replace(/^https?:\/\//, "").replace(/\/$/, "")}
          <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      ) : (
        <p className="mt-1 inline-flex w-fit items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground/70">
          <Lock className="h-3 w-3" />
          {project.note}
        </p>
      )}

      {project.image && (
        <div className="mt-2 overflow-hidden border border-border">
          <Image
            src={project.image.src}
            alt={project.image.alt}
            width={1568}
            height={784}
            sizes="(max-width: 768px) 100vw, 33vw"
            className="w-full h-auto transition-transform duration-500 group-hover:scale-[1.02]"
          />
        </div>
      )}
    </div>

    <div className="md:col-span-8 flex flex-col gap-6">
      <dl className="space-y-5">
        {project.facets.map((facet) => (
          <div
            key={facet.label}
            className="grid sm:grid-cols-[7rem_1fr] gap-1.5 sm:gap-5"
          >
            <dt className="eyebrow pt-1">{facet.label}</dt>
            <dd className="text-sm md:text-base leading-relaxed text-muted-foreground">
              {highlight(facet.body)}
            </dd>
          </div>
        ))}
      </dl>

      <div className="flex flex-wrap gap-x-4 gap-y-2 border-t border-border pt-5">
        {project.stack.map((item) => (
          <span
            key={item}
            className="font-mono text-[11px] uppercase tracking-[0.1em] text-muted-foreground"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  </Reveal>
);

const ProjectsSection = () => (
  <SectionWrapper id="work" className="py-24 md:py-32 z-10">
    <div className="mx-auto w-full max-w-7xl px-6 md:px-10">
      <SectionHeader
        id="selected work"
        index="02"
        title="Selected work"
        desc="Two systems that ran in production, with the numbers they actually produced."
        className="mb-12 md:mb-16"
      />

      <div className={cn("flex flex-col gap-5 md:gap-6")}>
        {projects.map((project, index) => (
          <ProjectRow key={project.id} project={project} index={index} />
        ))}
      </div>
    </div>
  </SectionWrapper>
);

export default ProjectsSection;
