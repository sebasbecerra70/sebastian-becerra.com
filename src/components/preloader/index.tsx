"use client";
import {
  useState,
  useEffect,
  createContext,
  ReactNode,
  useContext,
  useRef,
  useCallback,
} from "react";

import Loader from "./loader";

type PreloaderContextType = {
  isLoading: boolean;
  loadingPercent: number;
  bypassLoading: () => void;
};
const INITIAL: PreloaderContextType = {
  isLoading: true,
  loadingPercent: 0,
  bypassLoading: () => {},
};
export const preloaderContext = createContext<PreloaderContextType>(INITIAL);

type PreloaderProps = {
  children: ReactNode;
  disabled?: boolean;
};

export const usePreloader = () => {
  const context = useContext(preloaderContext);
  if (!context) {
    throw new Error("usePreloader must be used within a PreloaderProvider");
  }
  return context;
};

/** Intro budget. The loader is never allowed to outlive HARD_TIMEOUT_MS. */
const LOADING_TIME_MS = 1000;
const HARD_TIMEOUT_MS = 1800;
/** How long the slide-out is given before the node is removed outright. */
const EXIT_MS = 700;

function Preloader({ children, disabled = false }: PreloaderProps) {
  const [isLoading, setIsLoading] = useState(!disabled);
  const [mounted, setMounted] = useState(!disabled);
  const [loadingPercent, setLoadingPercent] = useState(0);
  const doneRef = useRef(false);

  const finish = useCallback(() => {
    if (doneRef.current) return;
    doneRef.current = true;
    setLoadingPercent(100);
    setIsLoading(false);
    // Unmount on a timer rather than on an animation callback. The previous
    // implementation exited via AnimatePresence animating `top` to `-100dvh`;
    // Framer can't interpolate `dvh`, so the tween froze partway
    // (`top: -3.8dvh`), `onExitComplete` never fired, and the loader stayed
    // mounted over the whole page: the black "95 %" screen.
    setTimeout(() => setMounted(false), EXIT_MS);
  }, []);

  useEffect(() => {
    if (disabled) return;

    // Progress is wall-clock, not rAF, so a busy main thread can't stall it.
    const start = performance.now();
    const interval = window.setInterval(() => {
      const pct = Math.min(
        100,
        ((performance.now() - start) / LOADING_TIME_MS) * 100
      );
      setLoadingPercent(pct);
      if (pct >= 100) {
        window.clearInterval(interval);
        finish();
      }
    }, 50);

    const hardStop = window.setTimeout(finish, HARD_TIMEOUT_MS);

    const onReady = () => {
      if (document.readyState === "complete") finish();
    };
    document.addEventListener("readystatechange", onReady);

    return () => {
      window.clearInterval(interval);
      window.clearTimeout(hardStop);
      document.removeEventListener("readystatechange", onReady);
    };
  }, [disabled, finish]);

  return (
    <preloaderContext.Provider
      value={{ isLoading, bypassLoading: finish, loadingPercent }}
    >
      {mounted && <Loader leaving={!isLoading} />}
      {children}
    </preloaderContext.Provider>
  );
}

export default Preloader;
