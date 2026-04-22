import { resetPersistedStorage, useDesktopStore } from "@/lib/store/desktop";
import { getFormattedDateTime } from "@/lib/utils";

import { Icon } from "@/components/icons";

export default function Navbar() {
  const reset = useDesktopStore((state) => state.reset);

  const { date, time } = getFormattedDateTime();

  function handleReset(e: React.MouseEvent) {
    e.stopPropagation();
    localStorage.clear();
    window.location.reload();
    resetPersistedStorage();
    reset();
  }

  return (
    <header className="bg-black/50 pr-2 pl-1 text-xs backdrop-blur-lg select-none">
      <nav className="flex items-center justify-between gap-4">
        <button className="rounded-sm px-3.5 py-1 active:bg-white/20">
          <Icon name="apple" className="size-4" />
        </button>
        <div>
          <button className="rounded-sm px-2.5 py-1 active:bg-white/20" onClick={handleReset}>
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
            <span>{date}</span>
            <span>{time}</span>
          </button>
        </div>
      </nav>
    </header>
  );
}
