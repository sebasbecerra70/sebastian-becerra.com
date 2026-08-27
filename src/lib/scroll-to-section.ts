import { getLenis } from "@/components/smooth-scroll";

/**
 * Scrolls to an in-page section.
 *
 * Everything else was tried and does not work on this site, because Lenis writes
 * the scroll position on every animation frame and overrides it:
 *  - `<Link href="/#work">` re-runs the route without moving the viewport
 *  - `window.scrollTo({ behavior: "smooth" })` and `scrollIntoView` get cancelled
 *  - even a hand-rolled rAF tween of instant scrolls loses the frame race
 *
 * So the scroll has to be handed to Lenis itself. The instant fallback below is
 * only for the case where Lenis hasn't initialised yet.
 */
const HEADER_OFFSET = 72;

export function scrollToSection(hash: string) {
  if (typeof window === "undefined") return;
  const target = document.querySelector(hash);
  if (!target) return;

  const max = Math.max(
    0,
    document.documentElement.scrollHeight - window.innerHeight
  );
  const top = Math.min(
    Math.max(0, window.scrollY + target.getBoundingClientRect().top - HEADER_OFFSET),
    max
  );

  const lenis = getLenis();
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (lenis) {
    lenis.scrollTo(top, { duration: reduced ? 0 : 0.8, lock: true });
    return;
  }

  window.scrollTo(0, top);
}
