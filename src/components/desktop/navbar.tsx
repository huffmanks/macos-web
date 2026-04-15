import { useShallow } from "zustand/shallow";

import { useWindowStore } from "@/lib/store/window";

import { Icon } from "@/components/icons";

export default function Navbar() {
  const { reset } = useWindowStore(
    useShallow((state) => ({
      reset: state.reset,
    }))
  );

  return (
    <nav className="bg-black/50 px-1 text-xs backdrop-blur-lg">
      <div className="flex items-center justify-between gap-5">
        <button className="rounded-sm px-2.5 py-1 active:bg-white/20">
          <Icon name="apple" className="size-4" />
        </button>
        <div>
          <button className="rounded-sm px-2.5 py-1 active:bg-white/20" onClick={() => reset()}>
            Reset
          </button>
        </div>
        <div className="flex items-center">
          <button className="rounded-sm px-2.5 py-1 active:bg-white/20">
            <Icon name="wifi" className="size-4" />
          </button>
          <button className="rounded-sm px-2.5 py-1 active:bg-white/20">
            <Icon name="search" className="size-4" />
          </button>
          <button className="flex items-center gap-2 rounded-sm px-2.5 py-1 font-medium active:bg-white/20">
            <span>Wed Apr 15</span>
            <span>11:20 AM</span>
          </button>
        </div>
      </div>
    </nav>
  );
}
