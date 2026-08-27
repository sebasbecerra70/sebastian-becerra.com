"use client";

import React from "react";
import { cn } from "@/lib/utils";
import AnimatedBackground from "@/components/animated-background";
import HeroSection from "@/components/sections/hero";
import IntroSection from "@/components/sections/intro";
import ImpactSection from "@/components/sections/impact";
import ProjectsSection from "@/components/sections/projects";
import ExperienceSection from "@/components/sections/experience";
import SkillsSection from "@/components/sections/skills";
import ContactSection from "@/components/sections/contact";

function MainPage() {
  return (
    <>
      <AnimatedBackground />
      <main className={cn("canvas-overlay-mode")}>
        <HeroSection />
        <IntroSection />
        <ImpactSection />
        <ProjectsSection />
        <ExperienceSection />
        <SkillsSection />
        <ContactSection />
      </main>
    </>
  );
}

export default MainPage;
