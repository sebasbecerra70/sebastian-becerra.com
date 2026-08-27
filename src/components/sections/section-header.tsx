import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import Reveal from "../ui/reveal";

/**
 * Section heading with a monospace index kicker.
 *
 * Previously `sticky top-[70px] mb-96`, which pinned every heading over the content
 * below it ("Tech Stack" rendered on top of "or just read the list") and forced 24rem
 * of dead space under each one.
 */
export const SectionHeader = ({
  id,
  index,
  title,
  desc,
  align = "left",
  className,
}: {
  id: string;
  /** Two-digit section number, e.g. "03". */
  index?: string;
  title: string | ReactNode;
  desc?: ReactNode;
  align?: "left" | "center";
  className?: string;
}) => (
  <Reveal
    className={cn(
      "flex flex-col gap-3",
      align === "center" ? "items-center text-center" : "items-start",
      className
    )}
  >
    {index && (
      <div className="flex items-center gap-3">
        <span className="font-display text-brand text-xs tabular">{index}</span>
        <span className="h-px w-8 bg-brand/50" style={{ background: "var(--brand)", opacity: 0.5 }} />
        <span className="eyebrow" id={`${id}-label`}>
          {id}
        </span>
      </div>
    )}
    <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-foreground">
      {title}
    </h2>
    {desc && (
      <p
        className={cn(
          "max-w-2xl text-base md:text-lg leading-relaxed text-muted-foreground",
          align === "center" && "mx-auto"
        )}
      >
        {desc}
      </p>
    )}
  </Reveal>
);
