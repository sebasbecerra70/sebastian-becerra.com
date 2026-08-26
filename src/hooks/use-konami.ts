import { useEffect, useRef } from "react";

const SEQUENCE = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a",
];

/** Calls `onUnlock` when the Konami code is entered. */
export const useKonami = (onUnlock: () => void) => {
  const progress = useRef(0);
  const callback = useRef(onUnlock);
  callback.current = onUnlock;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const active = document.activeElement;
      if (
        active &&
        (active.tagName === "INPUT" ||
          active.tagName === "TEXTAREA" ||
          (active as HTMLElement).isContentEditable)
      ) {
        return;
      }

      const expected = SEQUENCE[progress.current];
      const key = expected.startsWith("Arrow") ? e.key : e.key.toLowerCase();

      if (key === expected) {
        progress.current += 1;
        if (progress.current === SEQUENCE.length) {
          progress.current = 0;
          callback.current();
        }
      } else {
        // A wrong key restarts — but it might be the start of a fresh attempt.
        progress.current = e.key === SEQUENCE[0] ? 1 : 0;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);
};

export default useKonami;
