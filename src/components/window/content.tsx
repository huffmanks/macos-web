import { DOCK_APPS } from "@/lib/constants";
import { useDesktopStore } from "@/lib/store/desktop";
import type { WindowId } from "@/types";

export default function WindowContent({ windowId }: { windowId: WindowId }) {
  const windows = useDesktopStore((state) => state.windows);
  const window = windows[windowId];
  const dockApp = DOCK_APPS[window.appId];

  return (
    <div
      className="max-w-full p-4"
      style={{
        height: window.size.height,
        width: window.size.width,
      }}>
      <h2 className="text-lg font-medium">{dockApp.name}</h2>
    </div>
  );
}
