import { cn } from "@/lib/utils";

interface SectionWrapperProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
}

/**
 * Plain semantic section.
 *
 * This used to drive `opacity` and `scale` off the section's own scroll progress
 * (`[0, 0.2, 0.8, 1] -> [0, 1, 1, 0]`). On any section taller than the viewport that
 * left most of the content sitting in the faded range — entire cards measured at
 * computed `opacity: 0` while fully on screen. Reveal animations belong on individual
 * elements, where they can't take a whole section down with them.
 */
const SectionWrapper = ({
  id,
  className,
  children,
  ...props
}: SectionWrapperProps) => (
  <section id={id} className={cn("relative", className)} {...props}>
    {children}
  </section>
);

export default SectionWrapper;
