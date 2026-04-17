import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

import { INITIAL_WINDOWS, INITIAL_Z_INDEX } from "@/lib/constants";
import { getNextZIndex } from "@/lib/utils";
import type { WindowData, WindowKey, Windows } from "@/types";

type WindowStoreState = {
  windows: Windows;
  highestWindowKey: WindowKey | null;
};

type WindowStoreActions = {
  openWindow: (windowKey: WindowKey, data: WindowData) => void;
  closeWindow: (windowKey: WindowKey) => void;
  focusWindow: (windowKey: WindowKey) => void;
  updatePosition: (windowKey: WindowKey, x: number, y: number) => void;

  reset: () => void;
};

const initialWindowStoreState: WindowStoreState = {
  windows: INITIAL_WINDOWS,
  highestWindowKey: null,
};

export const useWindowStore = create<WindowStoreState & WindowStoreActions>()(
  persist(
    (set) => ({
      ...initialWindowStoreState,
      openWindow: (windowKey, data) =>
        set((state) => {
          const zIndex = getNextZIndex(state.windows);
          return {
            windows: {
              ...state.windows,
              [windowKey]: {
                ...state.windows[windowKey],
                isOpen: true,
                zIndex,
                data,
              },
            },
            highestWindowKey: windowKey,
          };
        }),
      closeWindow: (windowKey) =>
        set((state) => ({
          windows: {
            ...state.windows,
            [windowKey]: {
              ...state.windows[windowKey],
              isOpen: false,
              zIndex: INITIAL_Z_INDEX,
              data: null,
            },
          },
          highestWindowKey: state.highestWindowKey === windowKey ? null : state.highestWindowKey,
        })),
      focusWindow: (windowKey) =>
        set((state) => {
          if (!state.windows[windowKey].isOpen) return state;

          const zIndex = getNextZIndex(state.windows);

          return {
            windows: {
              ...state.windows,
              [windowKey]: {
                ...state.windows[windowKey],
                zIndex,
              },
            },
            highestWindowKey: windowKey,
          };
        }),
      updatePosition: (windowKey, x, y) =>
        set((state) => ({
          windows: {
            ...state.windows,
            [windowKey]: {
              ...state.windows[windowKey],
              data: {
                ...state.windows[windowKey].data,
                position: { x, y },
              },
            },
          },
        })),

      reset: () => set(initialWindowStoreState),
    }),
    {
      name: "window-store",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export function resetPersistedStorage() {
  useWindowStore.persist.clearStorage();
  useWindowStore.getState().reset();
}
