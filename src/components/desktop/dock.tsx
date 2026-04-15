import { useShallow } from "zustand/shallow";

import { DOCK_APPS, WINDOWS_DATA } from "@/lib/constants";
import { useWindowStore } from "@/lib/store/window";

export default function Dock() {
  const { windows, openWindow } = useWindowStore(
    useShallow((state) => ({
      windows: state.windows,
      openWindow: state.openWindow,
    }))
  );

  return (
    <footer className="mb-1.5 w-full">
      <div className="mx-auto w-fit rounded-xl bg-black/50 p-3 backdrop-blur-lg">
        <div className="flex items-center gap-3">
          {Object.entries(DOCK_APPS).map(([key, app]) => {
            const windowKey = key as keyof typeof WINDOWS_DATA;
            const data = WINDOWS_DATA[windowKey];
            const isDisabled = windows[windowKey].isOpen;

            return (
              <button
                key={app.id}
                disabled={isDisabled}
                className="cursor-pointer border-none transition-opacity outline-none active:opacity-60"
                onClick={() => openWindow(windowKey, data)}>
                <img className="size-12 object-cover" draggable="false" src={app.image} />
              </button>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
