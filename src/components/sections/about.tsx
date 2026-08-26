import { ABOUT } from "@/data/constants";
import { SectionHeader } from "./section-header";
import { cn } from "@/lib/utils";
import SectionWrapper from "../ui/section-wrapper";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

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
          <Card
            className={cn(
              "bg-card/95 backdrop-blur-md text-card-foreground border-border",
              "shadow-sm"
            )}
          >
            <CardContent className="pt-6 space-y-5">
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
            </CardContent>
          </Card>
        </motion.div>

        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
          {ABOUT.facts.map((fact, index) => (
            <motion.div
              key={fact.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                delay: 0.15 + index * 0.08,
                ease: "easeOut",
              }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <Card
                className={cn(
                  "h-full bg-card/95 backdrop-blur-md text-card-foreground border-border",
                  "hover:border-primary/20 transition-colors duration-300"
                )}
              >
                <CardContent className="p-4">
                  <p className="text-[11px] uppercase tracking-[0.15em] text-muted-foreground">
                    {fact.label}
                  </p>
                  <p className="mt-1.5 text-sm md:text-base font-medium text-foreground leading-snug">
                    {fact.value}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default AboutSection;
