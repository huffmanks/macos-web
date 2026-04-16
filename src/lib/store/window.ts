import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

import { INITIAL_WINDOWS, INITIAL_Z_INDEX } from "@/lib/constants";
import { getHighestWindowKey } from "@/lib/utils";
import type { WindowData, WindowKey, Windows } from "@/types";

type WindowStoreState = {
  windows: Windows;
  highestWindowKey: WindowKey | null;
  nextZIndex: number;
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
  nextZIndex: INITIAL_Z_INDEX + 1,
};

export const useWindowStore = create<WindowStoreState & WindowStoreActions>()(
  persist(
    (set) => ({
      ...initialWindowStoreState,
      openWindow: (windowKey, data) =>
        set((state) => ({
          windows: {
            ...state.windows,
            [windowKey]: {
              ...state.windows[windowKey],
              isOpen: true,
              zIndex: state.nextZIndex,
              data,
            },
          },
          nextZIndex: state.nextZIndex + 1,
          highestWindowKey: windowKey,
        })),
      closeWindow: (windowKey) =>
        set((state) => {
          const windows = {
            ...state.windows,
            [windowKey]: {
              ...state.windows[windowKey],
              isOpen: false,
              zIndex: INITIAL_Z_INDEX,
              data: null,
            },
          };

          return {
            windows,
            highestWindowKey: getHighestWindowKey(windows), // not quite working
          };
        }),
      focusWindow: (windowKey) =>
        set((state) => ({
          windows: {
            ...state.windows,
            [windowKey]: {
              ...state.windows[windowKey],
              zIndex: state.nextZIndex,
            },
          },
          nextZIndex: state.nextZIndex + 1,
          highestWindowKey: windowKey,
        })),
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
      name: "Window-store",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export function resetPersistedStorage() {
  useWindowStore.persist.clearStorage();
  useWindowStore.getState().reset();
}
