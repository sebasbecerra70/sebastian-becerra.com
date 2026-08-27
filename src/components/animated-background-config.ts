export type Section =
  | "hero"
  | "intro"
  | "impact"
  | "work"
  | "experience"
  /** The dedicated empty stage inside the stack section. */
  | "stack"
  /** Scrolled past the stage, into the actual lists — keyboard gets out of the way. */
  | "stacklists"
  | "contact";

/** Sections where the keyboard is on stage. Everywhere else it parks off-canvas. */
export const KEYBOARD_SECTIONS: Section[] = ["hero", "stack"];

/**
 * Parked: pushed far below the viewport and scaled down. The previous config kept the
 * keyboard mid-canvas at 0.13 scale during the text-heavy sections, where it floated
 * on top of the copy and made the page look broken.
 */
const PARKED = {
  desktop: {
    scale: { x: 0.001, y: 0.001, z: 0.001 },
    position: { x: 1800, y: -2200, z: 0 },
    rotation: { x: Math.PI / 12, y: Math.PI / 8, z: 0 },
  },
  mobile: {
    scale: { x: 0.001, y: 0.001, z: 0.001 },
    position: { x: 0, y: -2400, z: 0 },
    rotation: { x: Math.PI / 10, y: Math.PI / 8, z: 0 },
  },
};

export const STATES: Record<Section, typeof PARKED> = {
  hero: {
    desktop: {
      scale: { x: 0.2, y: 0.2, z: 0.2 },
      position: { x: 260, y: -90, z: 0 },
      rotation: { x: 0, y: 0, z: 0 },
    },
    mobile: {
      scale: { x: 0.3, y: 0.3, z: 0.3 },
      position: { x: 0, y: -200, z: 0 },
      rotation: { x: 0, y: 0, z: 0 },
    },
  },
  stack: {
    desktop: {
      scale: { x: 0.25, y: 0.25, z: 0.25 },
      position: { x: 0, y: -40, z: 0 },
      rotation: { x: 0, y: Math.PI / 12, z: 0 },
    },
    mobile: {
      scale: { x: 0.3, y: 0.3, z: 0.3 },
      position: { x: 0, y: -40, z: 0 },
      rotation: { x: 0, y: Math.PI / 6, z: 0 },
    },
  },
  intro: PARKED,
  impact: PARKED,
  work: PARKED,
  experience: PARKED,
  stacklists: PARKED,
  contact: PARKED,
};

export const getKeyboardState = ({
  section,
  isMobile,
}: {
  section: Section;
  isMobile: boolean;
}) => {
  const baseTransform = (STATES[section] ?? PARKED)[
    isMobile ? "mobile" : "desktop"
  ];

  const getScaleOffset = () => {
    const width = window.innerWidth;
    const DESKTOP_REF_WIDTH = 1280;
    const MOBILE_REF_WIDTH = 390;

    const targetScale = isMobile
      ? width / MOBILE_REF_WIDTH
      : width / DESKTOP_REF_WIDTH;

    const minScale = 0.5;
    const maxScale = isMobile ? 0.6 : 1.15;

    return Math.min(Math.max(targetScale, minScale), maxScale);
  };

  const scaleOffset = getScaleOffset();

  return {
    ...baseTransform,
    scale: {
      x: Math.abs(baseTransform.scale.x * scaleOffset),
      y: Math.abs(baseTransform.scale.y * scaleOffset),
      z: Math.abs(baseTransform.scale.z * scaleOffset),
    },
  };
};
