import { Children, type ReactElement, cloneElement, isValidElement, useRef } from "react";

import { type PanInfo, motion, useDragControls } from "motion/react";
import { useShallow } from "zustand/shallow";

import { DOCK_APPS } from "@/lib/constants";
import { useDesktopStore } from "@/lib/store/desktop";
import type { AppContentComponentProps, WindowId } from "@/types";

export default function WindowFrame({
  windowId,
  constraintsRef,
  children,
}: {
  windowId: WindowId;
  constraintsRef: React.RefObject<HTMLDivElement | null>;
  children: React.ReactNode;
}) {
  const windowRef = useRef<HTMLDivElement | null>(null);
  const dragControls = useDragControls();

  const windows = useDesktopStore((state) => state.windows);
  const stack = useDesktopStore((state) => state.stack);

  const { focusWindow, moveWindow } = useDesktopStore(
    useShallow((state) => ({
      focusWindow: state.focusWindow,
      moveWindow: state.moveWindow,
    }))
  );

  const window = windows[windowId];
  const dockApp = DOCK_APPS[window.appId];
  const zIndex = stack.indexOf(windowId);

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

  // eslint-disable-next-line react-hooks/refs
  const appChildren = Children.map(children, (child) => {
    if (!isValidElement(child)) return child;

    return cloneElement(child as ReactElement<AppContentComponentProps>, {
      windowId,
      constraintsRef,
      dragControls,
    });
  });

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
        <div
          className="ring-ring flex max-w-full flex-col overflow-hidden rounded-md ring ring-offset-0"
          style={{
            height: window.size.height,
            width: window.size.width,
          }}>
          {appChildren}
        </div>
      </motion.div>
    </>
  );
}
