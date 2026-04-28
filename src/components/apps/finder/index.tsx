import type { AppContentComponentProps } from "@/types";

import FinderContent from "@/components/apps/finder/content";
import FinderAppSidebar from "@/components/apps/finder/sidebar";

export default function FinderAppContent({
  windowId,
  constraintsRef,
  dragControls,
}: AppContentComponentProps) {
  return (
    <div className="bg-muted/90 grid h-full grid-cols-[150px_1fr] backdrop-blur-sm">
      <FinderAppSidebar
        windowId={windowId}
        constraintsRef={constraintsRef}
        dragControls={dragControls}
      />
      <FinderContent dragControls={dragControls} />
    </div>
  );
}
