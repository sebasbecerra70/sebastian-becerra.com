"use client";

import dynamic from "next/dynamic";
import Particles from "@/components/Particles";
import EasterEggs from "@/components/easter-eggs";
import { useMediaQuery } from "@/hooks/use-media-query";

// Pointer-driven decorations are desktop-only and are never part of first paint.
// `RemoteCursors` was dropped entirely: it opens a socket.io connection that has no
// server (`socketio.tsx` bails without NEXT_PUBLIC_WS_URL, which is set nowhere), so
// it was pure main-thread cost for a feature that could never work.
const ElasticCursor = dynamic(() => import("@/components/ui/ElasticCursor"), {
  ssr: false,
});
const RadialMenu = dynamic(() => import("@/components/radial-menu/index"), {
  ssr: false,
});

export default function AppOverlays() {
  const isMobile = useMediaQuery("(max-width: 767px)");
  const isCoarse = useMediaQuery("(pointer: coarse)");

  return (
    <>
      <Particles
        className="fixed inset-0 -z-10"
        quantity={isMobile ? 28 : 64}
      />
      <EasterEggs />
      {!isCoarse && (
        <>
          <ElasticCursor />
          <RadialMenu />
        </>
      )}
    </>
  );
}
