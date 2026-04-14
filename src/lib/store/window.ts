import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

import { INITIAL_WINDOWS, INITIAL_Z_INDEX } from "@/lib/constants";
import type { WindowData, WindowKey, Windows } from "@/types";

type WindowStoreState = {
  windows: Windows;
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
        })),
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
        })),
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
