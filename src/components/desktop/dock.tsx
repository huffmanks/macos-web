import { useShallow } from "zustand/shallow";

import { WINDOWS_DATA } from "@/lib/constants";
import { useWindowStore } from "@/lib/store/window";
import type { WindowKey } from "@/types";

export default function Dock() {
  const { windows, openWindow } = useWindowStore(
    useShallow((state) => ({
      windows: state.windows,
      openWindow: state.openWindow,
    }))
  );

  return (
    <div className="flex items-center gap-2 px-4 py-1">
      {Object.entries(WINDOWS_DATA).map(([key, data]) => {
        const windowKey = key as WindowKey;

        const isDisabled = windows[windowKey].isOpen;

        return (
          <button
            key={windowKey}
            disabled={isDisabled}
            className="rounded-sm border border-zinc-600 px-2 py-1"
            onClick={() => openWindow(windowKey, data)}>
            {data.name}
          </button>
        );
      })}
    </div>
  );
}
