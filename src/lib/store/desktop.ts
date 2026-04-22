import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

import { DEFAULT_WINDOW_POSITION, DEFAULT_WINDOW_SIZE } from "@/lib/constants";
import type {
  InputWindowData,
  Stack,
  WindowId,
  WindowPosition,
  WindowSize,
  Windows,
} from "@/types";

type DesktopStoreState = {
  windows: Windows;
  stack: Stack;
};

type DesktopStoreActions = {
  openWindow: ({ data }: { data: InputWindowData }) => void;
  closeWindow: ({ windowId }: { windowId: WindowId }) => void;
  focusWindow: ({ windowId }: { windowId: WindowId }) => void;
  minimizeWindow: ({ windowId }: { windowId: WindowId }) => void;
  restoreWindow: ({ windowId }: { windowId: WindowId }) => void;
  maximizeWindow: ({ windowId, size }: { windowId: WindowId; size: WindowSize }) => void;
  moveWindow: ({ windowId, position }: { windowId: WindowId; position: WindowPosition }) => void;
  resizeWindow: ({ windowId, size }: { windowId: WindowId; size: WindowSize }) => void;

  reset: () => void;
};

type DesktopStore = DesktopStoreState & DesktopStoreActions;

const initialDesktopStoreState: DesktopStoreState = {
  windows: {},
  stack: [],
};

export const useDesktopStore = create<DesktopStore>()(
  persist(
    immer((set) => ({
      ...initialDesktopStoreState,
      openWindow: ({ data }) => {
        const windowId = crypto.randomUUID();
        const now = Date.now();

        set((state) => {
          state.windows[windowId] = {
            id: windowId,
            appId: data.appId,
            position: data.position,
            size: data.size,
            isMinimized: false,
            isMaximized: false,
            createdAt: now,
          };

          state.stack.push(windowId);
        });
      },
      closeWindow: ({ windowId }) => {
        set((state) => {
          delete state.windows[windowId];

          const index = state.stack.indexOf(windowId);
          if (index !== -1) {
            state.stack.splice(index, 1);
          }
        });
      },
      focusWindow: ({ windowId }) => {
        set((state) => {
          const win = state.windows[windowId];
          if (!win || win.isMinimized) return;

          const index = state.stack.indexOf(windowId);
          if (index !== -1) {
            state.stack.splice(index, 1);
          }
          state.stack.push(windowId);
        });
      },
      minimizeWindow: ({ windowId }) => {
        set((state) => {
          const win = state.windows[windowId];
          if (!win) return;

          win.isMinimized = true;

          const index = state.stack.indexOf(windowId);
          if (index !== -1) {
            state.stack.splice(index, 1);
          }
        });
      },
      maximizeWindow: ({ windowId, size }) => {
        set((state) => {
          const win = state.windows[windowId];
          if (!win) return;

          win.lastSize = { ...win.size };
          win.lastPosition = { ...win.position };

          win.position.x = 0;
          win.position.y = 0;
          win.size = size;
          win.isMaximized = true;

          const index = state.stack.indexOf(windowId);
          if (index !== -1) {
            state.stack.splice(index, 1);
            state.stack.push(windowId);
          }
        });
      },
      restoreWindow: ({ windowId }) => {
        set((state) => {
          const win = state.windows[windowId];
          if (!win) return;

          if (win.isMaximized) {
            win.position = win.lastPosition ? { ...win.lastPosition } : DEFAULT_WINDOW_POSITION;
            win.size = win.lastSize ? { ...win.lastSize } : DEFAULT_WINDOW_SIZE;

            delete win.lastSize;
            delete win.lastPosition;

            win.isMaximized = false;
          }

          const index = state.stack.indexOf(windowId);
          if (index !== -1) {
            state.stack.splice(index, 1);
          }

          state.stack.push(windowId);
          win.isMinimized = false;
        });
      },
      moveWindow: ({ windowId, position }) => {
        set((state) => {
          const win = state.windows[windowId];
          if (!win) return;

          if (!win.isMaximized) {
            win.position = position;
          }
        });
      },
      resizeWindow: ({ windowId, size }) => {
        set((state) => {
          const win = state.windows[windowId];
          if (!win) return;

          if (!win.isMaximized) {
            win.size = size;
          }
        });
      },
      reset: () =>
        set((state) => {
          state.windows = {};
          state.stack = [];
        }),
    })),
    {
      name: "desktop-store",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export function resetPersistedStorage() {
  useDesktopStore.persist.clearStorage();
  useDesktopStore.getState().reset();
}
