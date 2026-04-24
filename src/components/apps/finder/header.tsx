import type { AppContentComponentProps } from "@/types";

import AppHeader from "@/components/apps/default/header";

export default function FinderAppHeader({
  windowId,
  constraintsRef,
  dragControls,
}: AppContentComponentProps) {
  return (
    <AppHeader
      windowId={windowId}
      constraintsRef={constraintsRef}
      dragControls={dragControls}
      className="bg-muted/90 grid h-12 grid-cols-[100px_1fr] items-center p-0 pl-4">
      <div className="bg-input border-l-background flex h-12 items-center border-l px-4 select-none">
        <div className="text-sm font-bold">Downloads</div>
      </div>
    </AppHeader>
  );
}
