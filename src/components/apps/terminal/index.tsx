import type { AppContentComponentProps } from "@/types";

import TerminalAppContent from "@/components/apps/terminal/content";
import TerminalAppHeader from "@/components/apps/terminal/header";

export default function TerminalApp({
  windowId,
  constraintsRef,
  dragControls,
}: AppContentComponentProps) {
  return (
    <div className="bg-background h-full backdrop-blur-sm">
      <TerminalAppHeader
        windowId={windowId}
        constraintsRef={constraintsRef}
        dragControls={dragControls}
      />
      <TerminalAppContent />
    </div>
  );
}
