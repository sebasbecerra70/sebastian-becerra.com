import { ABOUT } from "@/data/constants";
import { SectionHeader } from "./section-header";
import { cn } from "@/lib/utils";
import SectionWrapper from "../ui/section-wrapper";
import SpotlightCard from "../ui/spotlight-card";
import IconTile from "../ui/icon-tile";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const FACT_ACCENTS = ["sky", "violet", "amber", "emerald"];

const Monogram = () => (
  <div className="relative shrink-0 animate-float">
    <div
      aria-hidden
      className="absolute -inset-2 rounded-3xl bg-gradient-to-br from-sky-500/30 via-violet-500/20 to-emerald-500/30 blur-xl"
    />
    <div
      className={cn(
        "relative flex h-24 w-24 items-center justify-center rounded-3xl",
        "bg-gradient-to-br from-sky-500 via-violet-500 to-emerald-500 p-[2px]"
      )}
    >
      <div className="flex h-full w-full items-center justify-center rounded-[calc(1.5rem-2px)] bg-card">
        <span className="font-display text-3xl font-bold tracking-tight bg-gradient-to-br from-sky-400 via-violet-400 to-emerald-400 bg-clip-text text-transparent">
          SB
        </span>
      </div>
    </div>
  </div>
);

const AboutSection = () => {
  return (
    <SectionWrapper
      id="about"
      className="flex flex-col items-center justify-center min-h-screen py-20 z-10"
    >
      <div className="w-full max-w-4xl px-4 md:px-8 mx-auto">
        <SectionHeader
          id="about"
          title="About"
          desc="Engineer by trade, operator by habit."
          className="mb-12 md:mb-20 mt-0"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <SpotlightCard accent="violet" tilt={0}>
            <Card
              className={cn(
                "bg-card/95 backdrop-blur-md text-card-foreground border-border",
                "shadow-sm"
              )}
            >
              <CardContent className="pt-6 flex flex-col md:flex-row gap-6 md:gap-8">
                <Monogram />
                <div className="space-y-5">
                  {ABOUT.paragraphs.map((paragraph, i) => (
                    <p
                      key={i}
                      className={cn(
                        "text-base md:text-lg leading-relaxed",
                        i === 0 ? "text-foreground" : "text-muted-foreground"
                      )}
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </CardContent>
            </Card>
          </SpotlightCard>
        </motion.div>

        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
          {ABOUT.facts.map((fact, index) => {
            const Icon = fact.icon;
            const accent = FACT_ACCENTS[index % FACT_ACCENTS.length];
            return (
              <motion.div
                key={fact.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -4 }}
                transition={{
                  duration: 0.4,
                  delay: 0.15 + index * 0.08,
                  ease: "easeOut",
                }}
                viewport={{ once: true, margin: "-50px" }}
                className="h-full"
              >
                <SpotlightCard accent={accent} tilt={4} className="h-full group">
                  <Card
                    className={cn(
                      "h-full bg-card/95 backdrop-blur-md text-card-foreground border-border",
                      "hover:border-primary/20 transition-colors duration-300"
                    )}
                  >
                    <CardContent className="p-4 space-y-2">
                      <IconTile
                        accent={accent}
                        size="sm"
                        className="group-hover:scale-110 group-hover:-rotate-6"
                      >
                        <Icon />
                      </IconTile>
                      <p className="text-[11px] uppercase tracking-[0.15em] text-muted-foreground">
                        {fact.label}
                      </p>
                      <p className="text-sm md:text-base font-medium text-foreground leading-snug">
                        {fact.value}
                      </p>
                    </CardContent>
                  </Card>
                </SpotlightCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default AboutSection;
