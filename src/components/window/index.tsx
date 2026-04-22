import { useRef } from "react";

import { type PanInfo, motion, useDragControls } from "motion/react";
import { useShallow } from "zustand/shallow";

import { DOCK_APPS, NAVBAR_HEADER_HEIGHT } from "@/lib/constants";
import { useDesktopStore } from "@/lib/store/desktop";
import { cn } from "@/lib/utils";
import type { WindowId } from "@/types";

import { Icon } from "@/components/icons";
import WindowContent from "@/components/window/content";

export default function WindowFrame({
  windowId,
  constraintsRef,
}: {
  windowId: WindowId;
  constraintsRef: React.RefObject<HTMLDivElement | null>;
}) {
  const windowRef = useRef<HTMLDivElement | null>(null);
  const dragControls = useDragControls();

  const windows = useDesktopStore((state) => state.windows);
  const stack = useDesktopStore((state) => state.stack);

  const { focusWindow, closeWindow, minimizeWindow, maximizeWindow, restoreWindow, moveWindow } =
    useDesktopStore(
      useShallow((state) => ({
        focusWindow: state.focusWindow,
        closeWindow: state.closeWindow,
        minimizeWindow: state.minimizeWindow,
        maximizeWindow: state.maximizeWindow,
        restoreWindow: state.restoreWindow,
        moveWindow: state.moveWindow,
      }))
    );

  const window = windows[windowId];
  const dockApp = DOCK_APPS[window.appId];
  const zIndex = stack.indexOf(windowId);
  const focusedWindowId = stack[stack.length - 1] ?? null;

  function handleOnDragEnd(_event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) {
    if (!constraintsRef.current || !windowRef.current) return;

    const container = constraintsRef.current.getBoundingClientRect();
    const win = windowRef.current.getBoundingClientRect();

    const newX = window.position.x + info.offset.x;
    const newY = window.position.y + info.offset.y;

    const position = {
      x: Math.max(0, Math.min(newX, container.width - win.width)),
      y: Math.max(0, Math.min(newY, container.height - win.height)),
    };

    moveWindow({ windowId, position });
  }

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

  if (!window) return null;

  return (
    <>
      <motion.div
        data-window-id={windowId}
        data-app={dockApp?.id}
        ref={windowRef}
        initial={false}
        animate={{ opacity: 1, x: window.position.x, y: window.position.y }}
        transition={{
          opacity: { duration: 0.25 },
          x: { duration: 0 },
          y: { duration: 0 },
        }}
        drag={!window.isMaximized}
        dragConstraints={constraintsRef}
        dragElastic={0}
        dragControls={dragControls}
        dragListener={false}
        dragMomentum={false}
        onDragEnd={handleOnDragEnd}
        className="absolute touch-none"
        style={{
          zIndex,
        }}
        onClick={(e) => {
          e.stopPropagation();
          focusWindow({ windowId });
        }}>
        <div className="ring-ring bg-background overflow-hidden rounded-md ring ring-offset-0">
          <header
            className="bg-secondary p-3 active:cursor-grabbing"
            onPointerDown={(e) => {
              e.stopPropagation();
              focusWindow({ windowId });
              dragControls.start(e, { snapToCursor: false });
            }}>
            <div
              className="group flex w-fit cursor-auto items-center gap-2"
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
                  <Icon
                    name="close"
                    className="text-background/50 hidden size-2.5 group-hover:block"
                  />
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
                  <Icon
                    name="resize"
                    className="text-background/50 hidden size-2.5 group-hover:block"
                  />
                </div>
              </button>
            </div>
          </header>
          <WindowContent windowId={windowId} />
        </div>
      </motion.div>
    </>
  );
}
