"use client";
import React, { Suspense, useEffect, useRef, useState } from "react";
import { Application, SPEObject, SplineEvent } from "@splinetool/runtime";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
const Spline = React.lazy(() => import("@splinetool/react-spline"));
import { Skill, SkillNames, SKILLS } from "@/data/constants";
import { sleep } from "@/lib/utils";
import { useMediaQuery } from "@/hooks/use-media-query";
import { usePreloader } from "./preloader";
import { useTheme } from "next-themes";
import {
  Section,
  getKeyboardState,
  KEYBOARD_SECTIONS,
} from "./animated-background-config";
import { useSounds } from "./realtime/hooks/use-sounds";

gsap.registerPlugin(ScrollTrigger);

/**
 * Decides whether the 3D scene should exist at all, then mounts it lazily.
 *
 * The scene used to load in parallel with first paint on every device. Between the
 * Spline runtime, three.js and the particle canvas the main thread stalled hard enough
 * that the preloader's animation frame never completed and the site never appeared.
 * Now: desktop only, fine pointers only, motion-safe only, and never before the
 * intro has finished.
 */
const AnimatedBackground = () => {
  const isMobile = useMediaQuery("(max-width: 767px)");
  const isCoarse = useMediaQuery("(pointer: coarse)");
  const [allowed, setAllowed] = useState(false);
  const { isLoading } = usePreloader();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (isMobile || isCoarse) return;
    if (isLoading) return;

    // Hold off until the hero's entrance animations have finished, then wait for
    // an idle moment. Loading the scene while the hero was still animating in was
    // enough to starve those animations completely.
    let idle = 0;
    const hasIdle = typeof window.requestIdleCallback === "function";
    const kickoff = window.setTimeout(() => {
      idle = hasIdle
        ? window.requestIdleCallback(() => setAllowed(true), { timeout: 2000 })
        : window.setTimeout(() => setAllowed(true), 200);
    }, 1400);

    return () => {
      window.clearTimeout(kickoff);
      if (!idle) return;
      if (hasIdle) window.cancelIdleCallback(idle);
      else window.clearTimeout(idle);
    };
  }, [isMobile, isCoarse, isLoading]);

  if (!allowed) return null;
  return <SplineScene isMobile={isMobile} />;
};

const SplineScene = ({ isMobile }: { isMobile: boolean }) => {
  const { bypassLoading } = usePreloader();
  const { theme } = useTheme();
  const splineContainer = useRef<HTMLDivElement>(null);
  const [splineApp, setSplineApp] = useState<Application>();
  const selectedSkillRef = useRef<Skill | null>(null);

  const { playPressSound, playReleaseSound } = useSounds();

  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);
  const [activeSection, setActiveSection] = useState<Section>("hero");

  const keycapAnimationsRef = useRef<{ start: () => void; stop: () => void }>();
  const [keyboardRevealed, setKeyboardRevealed] = useState(false);

  // --- Event Handlers ---

  const handleMouseHover = (e: SplineEvent) => {
    if (!splineApp || selectedSkillRef.current?.name === e.target.name) return;

    if (e.target.name === "body" || e.target.name === "platform") {
      if (selectedSkillRef.current) playReleaseSound();
      setSelectedSkill(null);
      selectedSkillRef.current = null;
      if (splineApp.getVariable("heading") && splineApp.getVariable("desc")) {
        splineApp.setVariable("heading", "");
        splineApp.setVariable("desc", "");
      }
    } else if (
      !selectedSkillRef.current ||
      selectedSkillRef.current.name !== e.target.name
    ) {
      const skill = SKILLS[e.target.name as SkillNames];
      if (skill) {
        if (selectedSkillRef.current) playReleaseSound();
        playPressSound();
        setSelectedSkill(skill);
        selectedSkillRef.current = skill;
      }
    }
  };

  const handleSplineInteractions = () => {
    if (!splineApp) return;

    const isInputFocused = () => {
      const activeElement = document.activeElement;
      return (
        activeElement &&
        (activeElement.tagName === "INPUT" ||
          activeElement.tagName === "TEXTAREA" ||
          (activeElement as HTMLElement).isContentEditable)
      );
    };

    splineApp.addEventListener("keyUp", () => {
      if (!splineApp || isInputFocused()) return;
      playReleaseSound();
      splineApp.setVariable("heading", "");
      splineApp.setVariable("desc", "");
    });
    splineApp.addEventListener("keyDown", (e) => {
      if (!splineApp || isInputFocused()) return;
      const skill = SKILLS[e.target.name as SkillNames];
      if (skill) {
        playPressSound();
        setSelectedSkill(skill);
        selectedSkillRef.current = skill;
        splineApp.setVariable("heading", skill.label);
        splineApp.setVariable("desc", skill.shortDescription);
      }
    });
    splineApp.addEventListener("mouseHover", handleMouseHover);
  };

  // --- Animation Setup Helpers ---

  const moveKeyboardTo = (section: Section) => {
    if (!splineApp) return;
    const kbd = splineApp.findObjectByName("keyboard");
    if (!kbd) return;
    const state = getKeyboardState({ section, isMobile });
    const parking = !KEYBOARD_SECTIONS.includes(section);

    // Scale resolves faster than position when parking, so the keyboard shrinks
    // out of sight instead of sweeping diagonally across the body copy.
    gsap.to(kbd.scale, {
      ...state.scale,
      duration: parking ? 0.4 : 0.9,
      ease: parking ? "power2.in" : "power2.out",
      overwrite: true,
    });
    gsap.to(kbd.position, { ...state.position, duration: 0.9, overwrite: true });
    gsap.to(kbd.rotation, { ...state.rotation, duration: 0.9, overwrite: true });
  };

  const createSectionTimeline = (
    triggerId: string,
    targetSection: Section,
    prevSection: Section,
    start: string = "top 50%",
    end: string = "bottom bottom"
  ) => {
    if (!splineApp || !document.querySelector(triggerId)) return;

    gsap.timeline({
      scrollTrigger: {
        trigger: triggerId,
        start,
        end,
        scrub: true,
        onEnter: () => {
          setActiveSection(targetSection);
          moveKeyboardTo(targetSection);
        },
        onLeaveBack: () => {
          setActiveSection(prevSection);
          moveKeyboardTo(prevSection);
        },
      },
    });
  };

  const setupScrollAnimations = () => {
    if (!splineApp || !splineContainer.current) return;
    const kbd = splineApp.findObjectByName("keyboard");
    if (!kbd) return;

    const heroState = getKeyboardState({ section: "hero", isMobile });
    gsap.set(kbd.scale, heroState.scale);
    gsap.set(kbd.position, heroState.position);

    createSectionTimeline("#intro", "intro", "hero");
    createSectionTimeline("#impact", "impact", "intro");
    createSectionTimeline("#work", "work", "impact");
    createSectionTimeline("#experience", "experience", "work");
    // The keyboard is staged against a dedicated empty band, not the whole stack
    // section — otherwise it lands centred on top of the capability lists.
    createSectionTimeline("#keyboard-stage", "stack", "experience", "top 65%");
    createSectionTimeline("#stack-lists", "stacklists", "stack", "top 75%");
    createSectionTimeline("#contact", "contact", "stacklists", "top 30%");
  };

  const getKeycapsAnimation = () => {
    if (!splineApp) return { start: () => {}, stop: () => {} };

    let tweens: gsap.core.Tween[] = [];
    const removePrevTweens = () => tweens.forEach((t) => t.kill());

    const start = () => {
      removePrevTweens();
      Object.values(SKILLS)
        .sort(() => Math.random() - 0.5)
        .forEach((skill, idx) => {
          const keycap = splineApp.findObjectByName(skill.name);
          if (!keycap) return;
          const t = gsap.to(keycap.position, {
            y: Math.random() * 200 + 200,
            duration: Math.random() * 2 + 2,
            delay: idx * 0.6,
            repeat: -1,
            yoyo: true,
            yoyoEase: "none",
            ease: "elastic.out(1,0.3)",
          });
          tweens.push(t);
        });
    };

    const stop = () => {
      removePrevTweens();
      Object.values(SKILLS).forEach((skill) => {
        const keycap = splineApp.findObjectByName(skill.name);
        if (!keycap) return;
        const t = gsap.to(keycap.position, {
          y: 0,
          duration: 4,
          repeat: 1,
          ease: "elastic.out(1,0.7)",
        });
        tweens.push(t);
      });
      setTimeout(removePrevTweens, 1000);
    };

    return { start, stop };
  };

  /**
   * Reveal the board once, on load.
   *
   * Deliberately has no `await`s on the path that makes things visible. The
   * previous version hid the keyboard, awaited a sleep, then awaited a sleep per
   * keycap inside a `forEach` — so any stall partway through left the board
   * permanently bare. Now every visibility flag is set synchronously and the
   * stagger is expressed as a GSAP delay, which is cosmetic if it drops frames.
   */
  const revealKeyboard = () => {
    if (!splineApp) return;
    const kbd = splineApp.findObjectByName("keyboard");
    if (!kbd) return;

    setKeyboardRevealed(true);
    kbd.visible = true;

    const allObjects = splineApp.getAllObjects();
    const keycaps = allObjects.filter((obj) => obj.name === "keycap");
    const desktopKeyCaps = allObjects.filter(
      (obj) => obj.name === "keycap-desktop"
    );

    [...desktopKeyCaps, ...keycaps].forEach((keycap) => {
      keycap.visible = true;
    });

    const currentState = getKeyboardState({ section: activeSection, isMobile });
    gsap.fromTo(
      kbd.scale,
      { x: 0.01, y: 0.01, z: 0.01 },
      { ...currentState.scale, duration: 1.2, ease: "elastic.out(1, 0.6)" }
    );

    keycaps.forEach((keycap, idx) => {
      gsap.fromTo(
        keycap.position,
        { y: 200 },
        { y: 50, duration: 0.5, delay: 0.25 + idx * 0.045, ease: "bounce.out" }
      );
    });
  };

  // --- Effects ---

  useEffect(() => {
    if (!splineApp) return;
    handleSplineInteractions();
    setupScrollAnimations();
    keycapAnimationsRef.current = getKeycapsAnimation();
    return () => {
      keycapAnimationsRef.current?.stop();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [splineApp, isMobile]);

  // Keycap label plate: only legible while the stack section is on screen.
  useEffect(() => {
    if (!splineApp) return;
    const textDesktopDark = splineApp.findObjectByName("text-desktop-dark");
    const textDesktopLight = splineApp.findObjectByName("text-desktop");
    const textMobileDark = splineApp.findObjectByName("text-mobile-dark");
    const textMobileLight = splineApp.findObjectByName("text-mobile");

    if (!textDesktopDark || !textDesktopLight || !textMobileDark || !textMobileLight)
      return;

    const setVisibility = (dDark: boolean, dLight: boolean) => {
      textDesktopDark.visible = dDark;
      textDesktopLight.visible = dLight;
      textMobileDark.visible = false;
      textMobileLight.visible = false;
    };

    if (activeSection !== "stack") setVisibility(false, false);
    else if (theme === "dark") setVisibility(false, true);
    else setVisibility(true, false);
  }, [theme, splineApp, isMobile, activeSection]);

  useEffect(() => {
    if (!selectedSkill || !splineApp) return;
    splineApp.setVariable("heading", selectedSkill.label);
    splineApp.setVariable("desc", selectedSkill.shortDescription);
  }, [selectedSkill, splineApp]);

  // Idle rotation in the hero; keycaps scatter over the contact section.
  useEffect(() => {
    if (!splineApp) return;

    let rotateKeyboard: gsap.core.Tween | undefined;
    const kbd = splineApp.findObjectByName("keyboard");

    if (kbd) {
      rotateKeyboard = gsap.to(kbd.rotation, {
        y: Math.PI * 2 + kbd.rotation.y,
        duration: 10,
        repeat: -1,
        yoyo: true,
        yoyoEase: true,
        ease: "back.inOut",
        delay: 2.5,
        paused: true,
      });
    }

    const manageAnimations = async () => {
      if (activeSection !== "stack") {
        splineApp.setVariable("heading", "");
        splineApp.setVariable("desc", "");
      }

      if (activeSection === "hero") rotateKeyboard?.restart();
      else rotateKeyboard?.pause();

      await sleep(400);
      if (activeSection === "contact") keycapAnimationsRef.current?.start();
      else keycapAnimationsRef.current?.stop();
    };

    manageAnimations();

    return () => {
      rotateKeyboard?.kill();
    };
  }, [activeSection, splineApp]);

  // Reveal once, on first load. This used to also call `router.push("/#section")`
  // on every section change, rewriting history continuously while scrolling.
  useEffect(() => {
    if (!splineApp || keyboardRevealed) return;
    revealKeyboard();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [splineApp, keyboardRevealed]);

  return (
    <Suspense fallback={null}>
      <Spline
        className="w-full h-full fixed"
        ref={splineContainer}
        onLoad={(app: Application) => {
          setSplineApp(app);
          bypassLoading();
        }}
        scene="/assets/skills-keyboard.spline"
      />
    </Suspense>
  );
};

export default AnimatedBackground;
