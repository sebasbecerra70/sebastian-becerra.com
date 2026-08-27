"use client";

import { useEffect, useRef, useState } from "react";
import { IMPACT_METRICS, type Metric } from "@/data/constants";
import SectionWrapper from "../ui/section-wrapper";
import Reveal from "../ui/reveal";

/**
 * Count-up that always lands on the real number.
 *
 * The previous version drove this with Framer's `animate()`; when the main thread
 * stalled the tween froze and a metric sat on screen reading "11+" instead of "300+",
 * which is worse than no animation at all. This version derives the displayed value
 * from elapsed wall-clock time and hard-sets the final number when the window closes.
 */
const CountUp = ({ value, suffix }: { value: number; suffix: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (
      typeof IntersectionObserver === "undefined" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    setDisplay(0);
    let raf = 0;
    let settled = false;
    const DURATION = 1200;

    const run = () => {
      const start = performance.now();
      const tick = () => {
        const t = Math.min(1, (performance.now() - start) / DURATION);
        // easeOutCubic
        setDisplay(Math.round(value * (1 - Math.pow(1 - t, 3))));
        if (t < 1) raf = requestAnimationFrame(tick);
        else settled = true;
      };
      raf = requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          run();
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);

    // Whatever happens to the frame loop, the correct number is on screen.
    const settle = window.setTimeout(() => {
      if (!settled) {
        cancelAnimationFrame(raf);
        setDisplay(value);
      }
    }, DURATION + 900);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(raf);
      window.clearTimeout(settle);
    };
  }, [value]);

  return (
    <span ref={ref} className="tabular">
      {display.toLocaleString()}
      <span className="text-brand">{suffix}</span>
    </span>
  );
};

const MetricCell = ({ metric, index }: { metric: Metric; index: number }) => (
  <Reveal
    delay={index * 0.06}
    className="flex flex-col gap-2 border-t border-border pt-5"
  >
    <span className="font-display text-3xl md:text-[2.75rem] leading-none text-foreground">
      <CountUp value={metric.value} suffix={metric.suffix} />
    </span>
    <p className="text-xs md:text-sm leading-snug text-muted-foreground max-w-[20ch]">
      {metric.label}
    </p>
  </Reveal>
);

const ImpactSection = () => (
  <SectionWrapper id="impact" className="py-16 md:py-24 z-10">
    <div className="mx-auto w-full max-w-7xl px-6 md:px-10">
      <Reveal className="eyebrow mb-8">Measured in production</Reveal>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-8 gap-y-10">
        {IMPACT_METRICS.map((metric, index) => (
          <MetricCell key={metric.label} metric={metric} index={index} />
        ))}
      </div>
    </div>
  </SectionWrapper>
);

export default ImpactSection;
