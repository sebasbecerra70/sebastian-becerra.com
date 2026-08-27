"use client";

import React, { useEffect, useRef } from "react";
import { ReactLenis } from "@/lib/lenis";

/**
 * Module-level handle on the Lenis instance.
 *
 * `useLenis()` returned null in the header and hero even with the provider
 * hoisted to the layout, and Lenis rewrites the scroll position on every frame —
 * so any nav link that scrolled by other means (native smooth scroll,
 * `scrollIntoView`, a rAF tween of our own) was simply overridden and the page
 * never moved. Anything that needs to scroll the page programmatically has to go
 * through this instance.
 */
let lenisInstance: any = null;
export const getLenis = () => lenisInstance;

interface LenisProps {
  children: React.ReactNode;
  isInsideModal?: boolean;
}

function SmoothScroll({ children, isInsideModal = false }: LenisProps) {
  const ref = useRef<any>(null);

  useEffect(() => {
    lenisInstance = ref.current?.lenis ?? null;
    return () => {
      lenisInstance = null;
    };
  });

  return (
    <ReactLenis
      root
      ref={ref}
      options={{
        // 2s felt like lag on a long page.
        duration: 1.05,
        prevent: (node: Element) => {
          if (isInsideModal) return true;
          return node.classList.contains("modall");
        },
      }}
    >
      {children}
    </ReactLenis>
  );
}

export default SmoothScroll;
