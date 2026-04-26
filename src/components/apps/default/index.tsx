import { DOCK_APPS } from "@/lib/constants";
import { useDesktopStore } from "@/lib/store/desktop";
import type { AppContentComponentProps } from "@/types";

import AppHeader from "@/components/apps/default/header";

export default function DefaultAppContent({
  windowId,
  constraintsRef,
  dragControls,
}: AppContentComponentProps) {
  const windows = useDesktopStore((state) => state.windows);
  const window = windows[windowId];
  const dockApp = DOCK_APPS[window.appId];

  return (
    <div className="bg-background h-full">
      <AppHeader windowId={windowId} constraintsRef={constraintsRef} dragControls={dragControls} />
      <div className="p-4">
        <h2 className="text-lg font-medium">{dockApp.name}</h2>
      </div>
    </div>
  );
}
