export const EASE_OUT_SOFT = [0.16, 1, 0.3, 1] as const;
export const EASE_IN_OUT_SOFT = [0.65, 0, 0.35, 1] as const;

export const DURATION = {
  fast: 0.25,
  base: 0.45,
  slow: 0.6,
  slower: 0.85,
} as const;

export const SPRING_SNAPPY = {
  type: "spring",
  stiffness: 380,
  damping: 30,
} as const;

export const SPRING_SOFT = {
  type: "spring",
  stiffness: 180,
  damping: 24,
} as const;
