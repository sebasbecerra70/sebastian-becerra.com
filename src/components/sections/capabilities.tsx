import { CAPABILITIES, type Capability } from "@/data/constants";
import { SectionHeader } from "./section-header";
import { Badge } from "../ui/badge";
import { cn } from "@/lib/utils";
import SectionWrapper from "../ui/section-wrapper";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const CapabilityCard = ({
  capability,
  index,
}: {
  capability: Capability;
  index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1, ease: "easeOut" }}
      viewport={{ once: true, margin: "-50px" }}
      className="h-full"
    >
      <Card
        className={cn(
          "h-full bg-card/95 backdrop-blur-md text-card-foreground border-border",
          "hover:border-primary/20 transition-colors duration-300",
          "shadow-sm hover:shadow-md"
        )}
      >
        <CardHeader className="pb-3">
          <div className="flex items-baseline gap-3">
            <span className="font-mono text-xs text-muted-foreground">
              {String(index + 1).padStart(2, "0")}
            </span>
            <CardTitle className="text-xl font-bold tracking-tight">
              {capability.title}
            </CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-5">
          <p className="text-base text-muted-foreground leading-relaxed">
            {capability.blurb}
          </p>
          <div className="flex flex-wrap gap-2">
            {capability.items.map((item) => (
              <Badge
                key={item}
                variant="outline"
                className="text-xs font-normal bg-secondary/30 hover:bg-secondary/50 transition-colors border-transparent"
              >
                {item}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const CapabilitiesSection = () => {
  return (
    <SectionWrapper
      id="capabilities"
      className="flex flex-col items-center justify-center min-h-screen py-20 z-10"
    >
      <div className="w-full max-w-5xl px-4 md:px-8 mx-auto">
        <SectionHeader
          id="capabilities"
          title="What I Do"
          desc="Four things I get hired for — and the overlap between them is the point."
          className="relative mb-12 md:mb-20 mt-0"
        />

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
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
