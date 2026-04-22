import { useShallow } from "zustand/shallow";

import { DEFAULT_WINDOW_POSITION, DEFAULT_WINDOW_SIZE, DOCK_APPS } from "@/lib/constants";
import { useDesktopStore } from "@/lib/store/desktop";
import type { DockApp, InputWindowData } from "@/types";

export default function Dock() {
  return (
    <footer className="fixed right-0 bottom-0 left-0 z-500 mb-1.5">
      <div className="mx-auto w-fit rounded-xl bg-black/50 p-3 backdrop-blur-lg">
        <div className="flex items-center gap-3">
          {Object.entries(DOCK_APPS).map(([_key, app], index, array) => (
            <DockAppButton key={app.id} app={app} isLastItem={index === array.length - 1} />
          ))}
        </div>
      </div>
    </footer>
  );
}

function DockAppButton({ app, isLastItem }: { app: DockApp; isLastItem: boolean }) {
  const windows = useDesktopStore((state) => state.windows);

  const { openWindow, focusWindow, restoreWindow } = useDesktopStore(
    useShallow((state) => ({
      openWindow: state.openWindow,
      focusWindow: state.focusWindow,
      restoreWindow: state.restoreWindow,
    }))
  );

  const window = Object.values(windows).find((w) => w.appId === app.id);
  const isOpen = !!window;

  const data: InputWindowData = {
    appId: app.id,
    size: DEFAULT_WINDOW_SIZE,
    position: DEFAULT_WINDOW_POSITION,
  };

  function handleClick(e: React.MouseEvent) {
    e.stopPropagation();

    if (!window) {
      openWindow({ data });
      return;
    }

    if (window.isMinimized) {
      restoreWindow({ windowId: window.id });
      return;
    }

    focusWindow({ windowId: window.id });
  }

  return (
    <>
      {isLastItem && <div className="border-border ml-2 h-10 border-l" />}
      <div className="relative flex items-center gap-3">
        <button
          className="cursor-pointer border-none transition-opacity outline-none active:opacity-60"
          onClick={handleClick}>
          <img className="size-12 object-cover select-none" draggable="false" src={app.image} />
        </button>
        {isOpen && (
          <div className="absolute -bottom-2 left-1/2 size-1 -translate-x-1/2 rounded-full bg-white/50"></div>
        )}
      </div>
    </>
  );
}
