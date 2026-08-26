import { cn } from "@/lib/utils";

/**
 * Full class strings (not interpolated) so Tailwind's scanner keeps them.
 */
const ACCENT_CLASSES: Record<string, string> = {
  sky: "bg-sky-500/10 text-sky-600 dark:text-sky-400 ring-sky-500/20",
  violet: "bg-violet-500/10 text-violet-600 dark:text-violet-400 ring-violet-500/20",
  cyan: "bg-cyan-500/10 text-cyan-700 dark:text-cyan-400 ring-cyan-500/20",
  emerald: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 ring-emerald-500/20",
  amber: "bg-amber-500/10 text-amber-600 dark:text-amber-400 ring-amber-500/20",
  rose: "bg-rose-500/10 text-rose-600 dark:text-rose-400 ring-rose-500/20",
  fuchsia: "bg-fuchsia-500/10 text-fuchsia-600 dark:text-fuchsia-400 ring-fuchsia-500/20",
  orange: "bg-orange-500/10 text-orange-600 dark:text-orange-400 ring-orange-500/20",
};

const SIZES = {
  sm: "w-8 h-8 rounded-lg [&>svg]:w-4 [&>svg]:h-4",
  md: "w-10 h-10 rounded-xl [&>svg]:w-5 [&>svg]:h-5",
  lg: "w-12 h-12 rounded-xl [&>svg]:w-6 [&>svg]:h-6",
};

const IconTile = ({
  children,
  accent = "sky",
  size = "md",
  className,
}: {
  children: React.ReactNode;
  accent?: string;
  size?: keyof typeof SIZES;
  className?: string;
}) => (
  <span
    className={cn(
      "inline-flex shrink-0 items-center justify-center ring-1 transition-transform duration-300",
      SIZES[size],
      ACCENT_CLASSES[accent] ?? ACCENT_CLASSES.sky,
      className
    )}
  >
    {children}
  </span>
);

export { IconTile, ACCENT_CLASSES };
export default IconTile;
