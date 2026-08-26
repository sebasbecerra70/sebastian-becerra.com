"use client";
import { useDevToolsOpen } from "@/hooks/use-devtools-open";
import { useKonami } from "@/hooks/use-konami";
import { unlockAchievement } from "@/lib/achievements";
import React, { useEffect } from "react";
import confetti from "canvas-confetti";
import NyanCat from "./nyan-cat";

const SUMMON_NAMES = ["sebastian", "Sebastian", "sebas", "SEBASTIAN"];

const BANNER = `
   ____       _               _   _
  / ___|  ___| |__   __ _ ___| |_(_) __ _ _ __
  \\___ \\ / _ \\ '_ \\ / _\` / __| __| |/ _\` | '_ \\
   ___) |  __/ |_) | (_| \\__ \\ |_| | (_| | | | |
  |____/ \\___|_.__/ \\__,_|___/\\__|_|\\__,_|_| |_|
`;

const EasterEggs = () => {
  const { isDevToolsOpen } = useDevToolsOpen();

  // Konami code -> emoji confetti
  useKonami(() => {
    const scalar = 2;
    const shapes = ["⌨️", "🚚", "💸", "🤖"].map((text) =>
      confetti.shapeFromText({ text, scalar })
    );
    confetti({
      shapes,
      scalar,
      particleCount: 40,
      spread: 90,
      startVelocity: 45,
      origin: { x: 0.5, y: 0.6 },
    });
    unlockAchievement("konami");
  });

  useEffect(() => {
    if (!isDevToolsOpen) return;
    if (typeof console === "undefined") return;

    unlockAchievement("devtools");

    console.log(
      `%c${BANNER}`,
      "color:#38bdf8; font-family:monospace; font-size:12px; line-height:1.1;"
    );
    console.log(
      "%cSoftware engineer & operations leader — Miami, FL\n" +
        "I build the systems I run on: full-stack products, AI automation, and the money and data plumbing underneath.\n\n" +
        "sebasbecerra70@gmail.com  ·  sebastian-becerra.com  ·  linkedin.com/in/sebastian-becerra-8b499b231",
      "color:#a1a1aa; font-family:monospace; font-size:13px; line-height:1.6;"
    );
    console.log(
      "%cSince you're already in here — type %csebastian%c and hit enter. 🪄\n" +
        "There are 5 easter eggs on this site. Two of them are in this console.",
      "color:#fbbf24; font-family:monospace; font-size:13px; font-weight:bold;",
      "color:#34d399; font-family:monospace; font-size:13px; font-weight:bold;",
      "color:#fbbf24; font-family:monospace; font-size:13px; font-weight:bold;"
    );

    SUMMON_NAMES.forEach((name) => {
      // @ts-ignore - Object.hasOwn lib target
      if (Object.hasOwn(window, name)) return;
      Object.defineProperty(window, name, {
        configurable: true,
        get() {
          unlockAchievement("summon");
          console.log(
            "%c✨ Summoned. ✨\n\n" +
              "Nine years running real operations, and I still get the same kick out of a clean deploy.\n" +
              "If you're hiring for something that needs both halves of that — let's talk.\n\n" +
              "One more: press 'n' somewhere on the page. 🐱",
            "color:#f472b6; font-family:monospace; font-size:14px; font-weight:bold; line-height:1.6;"
          );
          return "sebasbecerra70@gmail.com";
        },
      });
    });
  }, [isDevToolsOpen]);

  return (
    <>
      <NyanCat />
    </>
  );
};

export default EasterEggs;
