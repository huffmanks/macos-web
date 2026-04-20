import { useShallow } from "zustand/shallow";

import { resetPersistedStorage, useWindowStore } from "@/lib/store/window";

import { Icon } from "@/components/icons";

export default function Navbar() {
  const { reset } = useWindowStore(
    useShallow((state) => ({
      reset: state.reset,
    }))
  );

  return (
    <header className="bg-black/50 pr-2 pl-1 text-xs backdrop-blur-lg select-none">
      <nav className="flex items-center justify-between gap-4">
        <button className="rounded-sm px-3.5 py-1 active:bg-white/20">
          <Icon name="apple" className="size-4" />
        </button>
        <div>
          <button
            className="rounded-sm px-2.5 py-1 active:bg-white/20"
            onClick={() => {
              resetPersistedStorage();
              reset();
            }}>
            Reset
          </button>
        </div>
        <div className="flex items-center">
          <button className="rounded-sm px-2.25 py-1 active:bg-white/20">
            <Icon name="wifi" className="size-4" />
          </button>
          <button className="rounded-sm px-2.25 py-1 active:bg-white/20">
            <Icon name="search" className="size-4" />
          </button>
          <button className="flex items-center gap-2 rounded-sm px-2.25 py-1 font-medium active:bg-white/20">
            <span>Wed Apr 15</span>
            <span>11:20 AM</span>
          </button>
        </div>
      </nav>
    </header>
  );
}
