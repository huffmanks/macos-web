import type { AppContentComponentProps } from "@/types";

import FinderAppHeader from "@/components/apps/finder/header";

import FinderContent from "./content";

export default function FinderAppContent({
  windowId,
  constraintsRef,
  dragControls,
}: AppContentComponentProps) {
  return (
    <div className="bg-muted/90 grid h-full grid-cols-[150px_1fr] backdrop-blur-sm">
      <FinderAppHeader
        windowId={windowId}
        constraintsRef={constraintsRef}
        dragControls={dragControls}
      />
      <FinderContent />
    </div>
  );
}
