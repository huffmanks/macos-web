import { useShallow } from "zustand/shallow";

import { NAVBAR_HEADER_HEIGHT } from "@/lib/constants";
import { useDesktopStore } from "@/lib/store/desktop";
import { cn } from "@/lib/utils";
import type { AppContentComponentProps } from "@/types";

import { Icon } from "@/components/icons";

export default function AppHeader({
  windowId,
  constraintsRef,
  dragControls,
  headerClassName,
  buttonWrapperClassName,
  children,
}: AppContentComponentProps & {
  headerClassName?: string;
  buttonWrapperClassName?: string;
  children?: React.ReactNode;
}) {
  const windows = useDesktopStore((state) => state.windows);
  const stack = useDesktopStore((state) => state.stack);

  const { focusWindow, closeWindow, minimizeWindow, maximizeWindow, restoreWindow } =
    useDesktopStore(
      useShallow((state) => ({
        focusWindow: state.focusWindow,
        closeWindow: state.closeWindow,
        minimizeWindow: state.minimizeWindow,
        maximizeWindow: state.maximizeWindow,
        restoreWindow: state.restoreWindow,
      }))
    );

  const focusedWindowId = stack[stack.length - 1] ?? null;

  function handleMaximizeWindow(e: React.MouseEvent) {
    e.stopPropagation();

    const win = windows[windowId];
    if (win.isMaximized) {
      restoreWindow({ windowId });
      return;
    }

    if (!constraintsRef.current) return;

    const rect = constraintsRef.current.getBoundingClientRect();
    const size = {
      height: rect.height - NAVBAR_HEADER_HEIGHT,
      width: rect.width,
    };
    maximizeWindow({ windowId, size });
  }

  return (
    <header
      className={cn("bg-secondary active:cursor-grabbing", headerClassName)}
      onPointerDown={(e) => {
        e.stopPropagation();
        focusWindow({ windowId });
        dragControls.start(e, { snapToCursor: false });
      }}>
      <div
        className={cn(
          "group flex w-fit cursor-auto items-center gap-2 p-3",
          buttonWrapperClassName
        )}
        onPointerDown={(e) => e.stopPropagation()}>
        <button
          onClick={(e) => {
            e.stopPropagation();
            closeWindow({ windowId });
          }}>
          <div
            className={cn(
              "flex size-3 items-center justify-center rounded-full group-hover:bg-red-500",
              windowId === focusedWindowId ? "bg-red-500" : "bg-muted-foreground/30"
            )}>
            <Icon name="close" className="text-background/50 hidden size-2.5 group-hover:block" />
          </div>
        </button>
        <button
          onClick={(e) => {
            e.stopPropagation();
            minimizeWindow({ windowId });
          }}>
          <div
            className={cn(
              "flex size-3 items-center justify-center rounded-full group-hover:bg-yellow-500",
              windowId === focusedWindowId ? "bg-yellow-500" : "bg-muted-foreground/30"
            )}>
            <Icon
              name="minimize"
              className="text-background/50 hidden size-2.5 group-hover:block"
            />
          </div>
        </button>
        <button onClick={handleMaximizeWindow}>
          <div
            className={cn(
              "flex size-3 items-center justify-center rounded-full group-hover:bg-green-500",
              windowId === focusedWindowId ? "bg-green-500" : "bg-muted-foreground/30"
            )}>
            <Icon name="resize" className="text-background/50 hidden size-2.5 group-hover:block" />
          </div>
        </button>
      </div>
      <div>{children}</div>
    </header>
  );
}
