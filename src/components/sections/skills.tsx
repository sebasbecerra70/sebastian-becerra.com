import { TECH_STACK, type TechCategory } from "@/data/constants";
import { cn } from "@/lib/utils";
import SectionWrapper from "../ui/section-wrapper";
import SpotlightCard from "../ui/spotlight-card";
import IconTile from "../ui/icon-tile";
import { SectionHeader } from "./section-header";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const StackCard = ({
  category,
  index,
}: {
  category: TechCategory;
  index: number;
}) => {
  const Icon = category.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: (index % 3) * 0.08, ease: "easeOut" }}
      viewport={{ once: true, margin: "-50px" }}
      className="h-full"
    >
      <SpotlightCard accent={category.accent} tilt={4} className="h-full group">
        <Card
          className={cn(
            "h-full bg-card/95 backdrop-blur-md text-card-foreground border-border",
            "hover:border-primary/20 hover:shadow-lg transition-all duration-300"
          )}
        >
          <CardContent className="p-5 space-y-4">
            <div className="flex items-center gap-3">
              <IconTile
                accent={category.accent}
                size="sm"
                className="group-hover:scale-110 group-hover:-rotate-6"
              >
                <Icon />
              </IconTile>
              <p className="text-sm font-bold uppercase tracking-[0.12em] text-foreground">
                {category.title}
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {category.items.map((item) => {
                const ItemIcon = item.icon;
                return (
                  <span
                    key={item.label}
                    className={cn(
                      "inline-flex items-center gap-1.5 rounded-md px-2.5 py-1.5",
                      "bg-secondary/40 text-xs font-medium text-muted-foreground",
                      "hover:bg-secondary/70 hover:text-foreground hover:-translate-y-0.5",
                      "transition-all duration-200"
                    )}
                  >
                    {ItemIcon ? <ItemIcon className="w-3.5 h-3.5" /> : null}
                    {item.label}
                  </span>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </SpotlightCard>
    </motion.div>
  );
};

const SkillsSection = () => {
  return (
    <SectionWrapper
      id="skills"
      className="w-full min-h-screen md:min-h-[150dvh] pb-24"
    >
      {/* The 3D keyboard lives behind this space — leave it uncovered. */}
      <SectionHeader
        id="skills"
        title="Tech Stack"
        desc="Press any key on the keyboard — every keycap is a real one."
      />

      <div className="w-full max-w-6xl px-4 md:px-8 mx-auto">
        <p className="text-center text-xs uppercase tracking-[0.25em] text-muted-foreground mb-8">
          or just read the list
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {TECH_STACK.map((category, index) => (
            <StackCard key={category.title} category={category} index={index} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default SkillsSection;
