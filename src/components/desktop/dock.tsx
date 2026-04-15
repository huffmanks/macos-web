import { useShallow } from "zustand/shallow";

import { DOCK_APPS, WINDOWS_DATA } from "@/lib/constants";
import { useWindowStore } from "@/lib/store/window";
import type { DockApp, WindowKey } from "@/types";

export default function Dock() {
  return (
    <footer className="mb-1.5 w-full">
      <div className="mx-auto w-fit rounded-xl bg-black/50 p-3 backdrop-blur-lg">
        <div className="flex items-center gap-3">
          {Object.entries(DOCK_APPS).map(([key, app]) => (
            <DockAppButton key={app.id} windowKey={key as WindowKey} app={app} />
          ))}
        </div>
      </div>
    </footer>
  );
}

function DockAppButton({ windowKey, app }: { windowKey: WindowKey; app: DockApp }) {
  const { windows, openWindow, focusWindow } = useWindowStore(
    useShallow((state) => ({
      windows: state.windows,
      openWindow: state.openWindow,
      focusWindow: state.focusWindow,
    }))
  );

  const data = WINDOWS_DATA[windowKey];
  const isOpen = windows[windowKey]?.isOpen ?? false;

  function handleClick() {
    if (isOpen) {
      focusWindow(windowKey);
    } else {
      openWindow(windowKey, data);
    }
  }

  return (
    <button
      className="cursor-pointer border-none transition-opacity outline-none active:opacity-60"
      onClick={handleClick}>
      <img className="size-12 object-cover" draggable="false" src={app.image} />
    </button>
  );
}
