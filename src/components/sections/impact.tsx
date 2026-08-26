"use client";

import { useEffect, useRef, useState } from "react";
import { IMPACT_METRICS, type Metric } from "@/data/constants";
import { cn } from "@/lib/utils";
import SectionWrapper from "../ui/section-wrapper";
import IconTile from "../ui/icon-tile";
import { useSounds } from "../realtime/hooks/use-sounds";
import { animate, motion, useInView } from "framer-motion";

const ACCENTS = [
  "emerald",
  "sky",
  "violet",
  "amber",
  "cyan",
  "rose",
  "fuchsia",
  "orange",
];

const CountUp = ({ value, suffix }: { value: number; suffix: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 1.4,
      ease: "easeOut",
      onUpdate: (latest) => setDisplay(Math.round(latest)),
    });
    return () => controls.stop();
  }, [inView, value]);

  return (
    <span ref={ref} className="tabular-nums">
      {display.toLocaleString()}
      <span className="text-primary/70">{suffix}</span>
    </span>
  );
};

const MetricCard = ({
  metric,
  index,
  onPeek,
}: {
  metric: Metric;
  index: number;
  onPeek: () => void;
}) => {
  const Icon = metric.icon;
  const accent = ACCENTS[index % ACCENTS.length];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -6 }}
      onHoverStart={onPeek}
      transition={{ duration: 0.4, delay: (index % 4) * 0.08, ease: "easeOut" }}
      viewport={{ once: true, margin: "-50px" }}
      className={cn(
        "interactive-card group flex flex-col items-center text-center gap-2 px-4 py-6 rounded-xl",
        "bg-card/95 backdrop-blur-md border border-border",
        "hover:border-primary/25 hover:shadow-lg transition-[border-color,box-shadow] duration-300"
      )}
    >
      <IconTile
        accent={accent}
        size="sm"
        className="group-hover:scale-110 group-hover:-rotate-6"
      >
        <Icon />
      </IconTile>
      <span className="font-display text-3xl md:text-4xl font-bold text-foreground leading-none">
        <CountUp value={metric.value} suffix={metric.suffix} />
      </span>
      <p className="text-xs md:text-sm text-muted-foreground leading-snug max-w-[18ch]">
        {metric.label}
      </p>
    </motion.div>
  );
};

const ImpactSection = () => {
  const { playSendSound } = useSounds();
  const lastPeek = useRef(0);

  // Throttle so sweeping across the row doesn't machine-gun the speakers.
  const peek = () => {
    const now = Date.now();
    if (now - lastPeek.current < 220) return;
    lastPeek.current = now;
    playSendSound();
  };

  return (
    <SectionWrapper id="impact" className="py-16 md:py-24 z-10">
      <div className="w-full max-w-6xl px-4 md:px-8 mx-auto">
        <p className="text-center text-xs md:text-sm uppercase tracking-[0.25em] text-muted-foreground mb-8 md:mb-12">
          Measured in production
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {IMPACT_METRICS.map((metric, index) => (
            <MetricCard
              key={metric.label}
              metric={metric}
              index={index}
              onPeek={peek}
            />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default ImpactSection;
