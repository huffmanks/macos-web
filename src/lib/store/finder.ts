import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

import type { FinderFile, LastActiveDirectory } from "@/types";

type FinderStoreState = {
  documents: Array<FinderFile>;
  downloads: Array<FinderFile>;
  lastActiveDirectory: LastActiveDirectory;
};

type FinderStoreActions = {
  setLastActiveDirectory: (lastActiveDirectory: LastActiveDirectory) => void;

  reset: () => void;
};

type FinderStore = FinderStoreState & FinderStoreActions;

const initialFinderStoreState: FinderStoreState = {
  documents: [],
  downloads: [],
  lastActiveDirectory: "Documents",
};

export const useFinderStore = create<FinderStore>()(
  persist(
    immer((set) => ({
      ...initialFinderStoreState,

      setLastActiveDirectory: (lastActiveDirectory) => set({ lastActiveDirectory }),

      reset: () =>
        set((state) => {
          state.documents = [];
          state.downloads = [];
        }),
    })),
    {
      name: "finder-store",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export function resetPersistedStorage() {
  useFinderStore.persist.clearStorage();
  useFinderStore.getState().reset();
}
