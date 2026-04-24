import type { AppContentComponentProps } from "@/types";

import FinderAppHeader from "@/components/apps/finder/header";
import FinderSidebar from "@/components/apps/finder/sidebar";

export default function FinderAppContent({
  windowId,
  constraintsRef,
  dragControls,
}: AppContentComponentProps) {
  return (
    <>
      <FinderAppHeader
        windowId={windowId}
        constraintsRef={constraintsRef}
        dragControls={dragControls}
      />
      <div className="bg-muted/90 grid flex-1 grid-cols-[100px_1fr] pl-4">
        <FinderSidebar />
        <div className="border-background bg-muted flex-1 border-t border-l p-4">body</div>
      </div>
    </>
  );
}
