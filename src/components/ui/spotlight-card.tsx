"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * Accent name -> the HSL triplet fed to the CSS spotlight gradient in
 * globals.css (`--brand-spot`). Kept as raw triplets so the gradient can
 * apply its own alpha.
 */
const ACCENT_HSL: Record<string, string> = {
  sky: "199 89% 55%",
  violet: "258 90% 66%",
  cyan: "187 92% 50%",
  emerald: "160 84% 45%",
  amber: "38 92% 55%",
  rose: "347 89% 62%",
  fuchsia: "292 84% 61%",
  orange: "25 95% 58%",
};

interface SpotlightCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  /** Key of ACCENT_HSL; drives the spotlight hue. */
  accent?: string;
  /** Degrees of 3D tilt at the card's edge. 0 disables tilt. */
  tilt?: number;
}

const SpotlightCard = ({
  children,
  className,
  accent = "sky",
  tilt = 6,
  ...props
}: SpotlightCardProps) => {
  const ref = useRef<HTMLDivElement>(null);

  // -0.5..0.5 relative to the card's center
  const px = useMotionValue(0);
  const py = useMotionValue(0);

  const springs = { stiffness: 220, damping: 20, mass: 0.4 };
  const rotateX = useSpring(useTransform(py, [-0.5, 0.5], [tilt, -tilt]), springs);
  const rotateY = useSpring(useTransform(px, [-0.5, 0.5], [-tilt, tilt]), springs);

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Feed the CSS gradient directly — cheaper than re-rendering.
    el.style.setProperty("--spot-x", `${x}px`);
    el.style.setProperty("--spot-y", `${y}px`);

    px.set(x / rect.width - 0.5);
    py.set(y / rect.height - 0.5);
  };

  const handleLeave = () => {
    px.set(0);
    py.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{
        rotateX: tilt ? rotateX : undefined,
        rotateY: tilt ? rotateY : undefined,
        transformPerspective: 900,
        // consumed by .interactive-card::before
        ["--brand-spot" as string]: ACCENT_HSL[accent] ?? ACCENT_HSL.sky,
      }}
      className={cn("interactive-card relative", className)}
      {...(props as any)}
    >
      {children}
    </motion.div>
  );
};

export { SpotlightCard, ACCENT_HSL };
export default SpotlightCard;
