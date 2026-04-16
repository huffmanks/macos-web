import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

import type { WindowKey, Windows } from "@/types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getHighestWindowKey(windows: Windows): WindowKey | null {
  let highestKey: WindowKey | null = null;
  let highestZ = -Infinity;

  for (const key in windows) {
    const w = windows[key as WindowKey];
    if (w.isOpen && w.zIndex > highestZ) {
      highestZ = w.zIndex;
      highestKey = key as WindowKey;
    }
  }

  return highestKey;
}
