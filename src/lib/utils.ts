import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

import { INITIAL_Z_INDEX } from "@/lib/constants";
import type { Windows } from "@/types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getNextZIndex(windows: Windows) {
  return (
    Math.max(
      INITIAL_Z_INDEX,
      ...Object.values(windows)
        .filter((w) => w.isOpen)
        .map((w) => w.zIndex ?? INITIAL_Z_INDEX)
    ) + 1
  );
}
