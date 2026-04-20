import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

import { INITIAL_Z_INDEX } from "@/lib/constants";
import type { WindowState, Windows } from "@/types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

function getOpenWindowEntries(windows: Windows) {
  return Object.entries(windows).filter(([_, w]) => w.isOpen);
}

function getSafeZIndex(window: WindowState) {
  return window.zIndex ?? INITIAL_Z_INDEX;
}

export function getNextZIndex(windows: Windows) {
  const openWindows = getOpenWindowEntries(windows);

  if (openWindows.length === 0) return INITIAL_Z_INDEX + 1;

  const maxZ = Math.max(...openWindows.map(([_, w]) => getSafeZIndex(w)));
  return maxZ + 1;
}

export function getTopWindowKey(windows: Windows) {
  const openWindows = getOpenWindowEntries(windows);

  if (openWindows.length === 0) {
    return null;
  }

  return openWindows.reduce((top, current) => {
    return getSafeZIndex(current[1]) > getSafeZIndex(top[1]) ? current : top;
  })[0] as keyof Windows;
}
