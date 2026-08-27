"use client";
import { useKonami } from "@/hooks/use-konami";
import { unlockAchievement } from "@/lib/achievements";
import { config } from "@/data/config";
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
    if (typeof console === "undefined") return;

    // Printed unconditionally. This used to be gated on a devtools-detector
    // heuristic that also fired an "Achievement unlocked" toast, and it
    // false-positived with devtools closed, popping a toast at visitors for no
    // reason. Only someone with the console open ever sees this anyway.
    console.log(
      `%c${BANNER}`,
      "color:#0ABAB5; font-family:monospace; font-size:12px; line-height:1.1;"
    );
    console.log(
      "%cSoftware engineer, Miami FL\n" +
        "I build the systems I run on: full-stack products, applied AI, and the data and payments plumbing underneath.\n\n" +
        `${config.email}  ·  sebastian-becerra.com  ·  linkedin.com/in/sebastian-becerra-8b499b231`,
      "color:#a1a1aa; font-family:monospace; font-size:13px; line-height:1.6;"
    );
    console.log(
      "%cSince you're already in here, type %csebastian%c and hit enter. 🪄\n" +
        "There are 4 easter eggs on this site. Two of them are in this console.",
      "color:#fbbf24; font-family:monospace; font-size:13px; font-weight:bold;",
      "color:#34d399; font-family:monospace; font-size:13px; font-weight:bold;",
      "color:#fbbf24; font-family:monospace; font-size:13px; font-weight:bold;"
    );

    SUMMON_NAMES.forEach((name) => {
      if (Object.prototype.hasOwnProperty.call(window, name)) return;
      Object.defineProperty(window, name, {
        configurable: true,
        get() {
          unlockAchievement("summon");
          console.log(
            "%c✨ Summoned. ✨\n\n" +
              "Nine years running real operations, and I still get the same kick out of a clean deploy.\n" +
              "If you're hiring for something that needs both halves of that, let's talk.\n\n" +
              "One more: press 'n' somewhere on the page. 🐱",
            "color:#f472b6; font-family:monospace; font-size:14px; font-weight:bold; line-height:1.6;"
          );
          return config.email;
        },
      });
    });
  }, []);

  return <NyanCat />;
};

export default EasterEggs;
