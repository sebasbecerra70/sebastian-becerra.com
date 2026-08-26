import { CAPABILITIES, type Capability } from "@/data/constants";
import { SectionHeader } from "./section-header";
import { Badge } from "../ui/badge";
import { cn } from "@/lib/utils";
import SectionWrapper from "../ui/section-wrapper";
import SpotlightCard from "../ui/spotlight-card";
import IconTile from "../ui/icon-tile";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const CapabilityCard = ({
  capability,
  index,
}: {
  capability: Capability;
  index: number;
}) => {
  const Icon = capability.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: (index % 3) * 0.1, ease: "easeOut" }}
      viewport={{ once: true, margin: "-50px" }}
      className="h-full"
    >
      <SpotlightCard accent={capability.accent} className="h-full group">
        <Card
          className={cn(
            "h-full bg-card/95 backdrop-blur-md text-card-foreground border-border",
            "hover:border-primary/20 transition-colors duration-300",
            "shadow-sm hover:shadow-lg"
          )}
        >
          <CardHeader className="pb-3">
            <div className="flex items-center gap-3">
              <IconTile
                accent={capability.accent}
                className="group-hover:scale-110 group-hover:-rotate-6"
              >
                <Icon />
              </IconTile>
              <CardTitle className="text-lg md:text-xl font-bold tracking-tight">
                {capability.title}
              </CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-5">
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              {capability.blurb}
            </p>
            <div className="flex flex-wrap gap-2">
              {capability.items.map((item) => (
                <Badge
                  key={item}
                  variant="outline"
                  className={cn(
                    "text-xs font-normal bg-secondary/30 border-transparent",
                    "hover:bg-secondary/60 hover:-translate-y-0.5 transition-all duration-200"
                  )}
                >
                  {item}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </SpotlightCard>
    </motion.div>
  );
};

const CapabilitiesSection = () => {
  return (
    <SectionWrapper
      id="capabilities"
      className="flex flex-col items-center justify-center min-h-screen py-20 z-10"
    >
      <div className="w-full max-w-6xl px-4 md:px-8 mx-auto">
        <SectionHeader
          id="capabilities"
          title="What I Do"
          desc="Six things I get hired for — and the overlap between them is the point."
          className="relative top-0 mb-12 md:mb-20 mt-0"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {CAPABILITIES.map((capability, index) => (
            <CapabilityCard
              key={capability.title}
              capability={capability}
              index={index}
            />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default CapabilitiesSection;
