"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

/**
 * Scroll reveal that fails open.
 *
 * The rule: **content must end up visible even if the animation never runs.**
 * The previous approach set `opacity: 0` inline via Framer's `whileInView` and
 * relied on a rAF-driven spring to bring it back. When the main thread stalled —
 * a heavy 3D scene is enough — elements froze mid-flight at `opacity: 0`
 * permanently, and whole sections of the site were never seen.
 *
 * Three guarantees here:
 *  1. Server-rendered markup is visible; hiding only happens after mount, in JS.
 *  2. Anything already on screen at mount is never hidden at all, so a stalled
 *     thread can't blank the first viewport.
 *  3. A failsafe timer reveals everything regardless of the observer.
 */
const Reveal = ({
  children,
  className,
  delay = 0,
  as: Tag = "div",
}: {
  children: React.ReactNode;
  className?: string;
  /** Stagger in seconds. Capped so a long list can't leave the last row waiting. */
  delay?: number;
  as?: "div" | "li" | "section" | "article";
}) => {
  const ref = useRef<HTMLElement>(null);
  const [armed, setArmed] = useState(false);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (
      typeof IntersectionObserver === "undefined" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    // Already on screen? Leave it alone — no reason to hide something the
    // visitor can see, and no window in which a stalled thread could blank it.
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight) return;

    setArmed(true);

    let done = false;
    const reveal = () => {
      if (done) return;
      done = true;
      setShown(true);
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.clearTimeout(failsafe);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) reveal();
      },
      { rootMargin: "0px 0px -6% 0px", threshold: 0.01 }
    );
    observer.observe(el);

    // Jump-scrolling (an anchor link, a restored scroll position) can carry the
    // viewport clean past an element: it never becomes "intersecting", so the
    // observer never fires and the element stays hidden for good. Any element
    // whose top is above the fold has been reached, intersecting or not.
    const onScroll = () => {
      if (el.getBoundingClientRect().top < window.innerHeight) reveal();
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    // Last resort: if nothing above fires, don't leave a hole in the page.
    const failsafe = window.setTimeout(reveal, 2500);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.clearTimeout(failsafe);
    };
  }, []);

  const hidden = armed && !shown;

  return (
    <Tag
      ref={ref as never}
      className={cn(
        "motion-safe:transition-[opacity,transform] motion-safe:duration-500 motion-safe:ease-out",
        hidden ? "opacity-0 translate-y-3" : "opacity-100 translate-y-0",
        className
      )}
      style={hidden ? undefined : { transitionDelay: `${Math.min(delay, 0.4)}s` }}
    >
      {children}
    </Tag>
  );
};

export default Reveal;
export { Reveal };
