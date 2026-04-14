import { useShallow } from "zustand/shallow";

import { WINDOWS_DATA } from "@/lib/constants";
import { useWindowStore } from "@/lib/store/window";
import type { WindowKey } from "@/types";

export default function Dock() {
  const { openWindow } = useWindowStore(
    useShallow((state) => ({
      openWindow: state.openWindow,
    }))
  );

  return (
    <div className="mb-4 flex items-center gap-2">
      {Object.entries(WINDOWS_DATA).map(([key, data]) => {
        const windowKey = key as WindowKey;

        return (
          <button
            key={windowKey}
            className="rounded-sm border border-zinc-600 px-2 py-1"
            onClick={() => openWindow(windowKey, data)}>
            {data.name}
          </button>
        );
      })}
    </div>
  );
}
