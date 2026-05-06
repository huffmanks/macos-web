import { useDesktopStore } from "@/lib/store/desktop";
import { cn, handleDragStart } from "@/lib/utils";
import type { AppContentComponentProps } from "@/types";

import WindowControls from "@/components/window/controls";

export default function TerminalAppHeader({
  windowId,
  constraintsRef,
  dragControls,
}: AppContentComponentProps) {
  const stack = useDesktopStore((state) => state.stack);
  const focusedWindowId = stack[stack.length - 1] ?? null;

  return (
    <header
      className={cn(
        "border-b-background bg-muted grid h-7 grid-cols-[125px_1fr] items-center border-b select-none active:cursor-grabbing",
        windowId !== focusedWindowId && "opacity-70"
      )}
      onPointerDown={(e) => handleDragStart(e, dragControls)}>
      <WindowControls
        windowId={windowId}
        constraintsRef={constraintsRef}
        dragControls={dragControls}
        headerClassName="bg-transparent"
        buttonWrapperClassName="p-1"></WindowControls>
      <div className="text-muted-foreground inline-flex items-center gap-1.5 px-4 text-xs font-bold">
        <span>
          <img
            className={cn("size-4", windowId !== focusedWindowId && "grayscale")}
            src="/icons/folder.png"
          />
        </span>
        <span>username</span>
        <span>—</span>
        <span>zsh</span>
      </div>
    </header>
  );
}
