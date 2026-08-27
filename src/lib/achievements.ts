import { toast } from "@/components/ui/use-toast";

export const ACHIEVEMENTS = {
  nyan: { emoji: "🐱", title: "Cat Person", hint: "You pressed N." },
  konami: { emoji: "🎮", title: "Old School", hint: "You know the code." },
  radial: { emoji: "🎨", title: "Reactor", hint: "You found the reaction wheel." },
  summon: { emoji: "🪄", title: "Summoner", hint: "You called my name in the console." },
} as const;

export type AchievementId = keyof typeof ACHIEVEMENTS;

const STORAGE_KEY = "sb:achievements";
const TOTAL = Object.keys(ACHIEVEMENTS).length;

const read = (): AchievementId[] => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    // private mode, blocked site data, whatever — the eggs still work.
    return [];
  }
};

const write = (ids: AchievementId[]) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(ids));
  } catch {
    /* non-fatal */
  }
};

/**
 * Fires a toast the first time a given easter egg is discovered, and a
 * closing toast once every one has been found. Safe to call repeatedly.
 */
export const unlockAchievement = (id: AchievementId) => {
  if (typeof window === "undefined") return;

  const found = read();
  if (found.includes(id)) return;

  const next = [...found, id];
  write(next);

  const { emoji, title, hint } = ACHIEVEMENTS[id];
  toast({
    title: `${emoji}  Achievement unlocked — ${title}`,
    description: `${hint}  (${next.length}/${TOTAL} found)`,
  });

  if (next.length === TOTAL) {
    setTimeout(() => {
      toast({
        title: "🏆  You found everything",
        description:
          "That is genuinely more curiosity than most people bring to a portfolio. Say hi — sebasbecerra70@gmail.com",
      });
    }, 2600);
  }
};

export const getFoundAchievements = read;
export const TOTAL_ACHIEVEMENTS = TOTAL;
