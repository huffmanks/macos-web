import { motion, useDragControls } from "motion/react";
import { useShallow } from "zustand/shallow";

import { useWindowStore } from "@/lib/store/window";
import { cn } from "@/lib/utils";
import type { WindowKey } from "@/types";

import { Icon } from "@/components/icons";

export default function Window({
  windowKey,
  children,
}: {
  windowKey: WindowKey;
  children: React.ReactNode;
}) {
  const { windows, highestWindowKey, focusWindow, closeWindow, updatePosition } = useWindowStore(
    useShallow((state) => ({
      windows: state.windows,
      highestWindowKey: state.highestWindowKey,
      focusWindow: state.focusWindow,
      closeWindow: state.closeWindow,
      updatePosition: state.updatePosition,
    }))
  );

  const dragControls = useDragControls();

  const win = windows[windowKey];
  if (!win.isOpen || !win.data) {
    return null;
  }

  const data = win.data;

  return (
    <>
      <motion.div
        data-window={windowKey}
        initial={false}
        animate={{ opacity: 1, x: data.position.x, y: data.position.y }}
        transition={{
          opacity: { duration: 0.25 },
          x: { duration: 0 },
          y: { duration: 0 },
        }}
        drag
        dragControls={dragControls}
        dragListener={false}
        dragMomentum={false}
        onDragEnd={(_, info) => {
          updatePosition(
            windowKey,
            data.position.x + info.offset.x,
            data.position.y + info.offset.y
          );
        }}
        className="absolute touch-none"
        style={{
          zIndex: windows[windowKey].zIndex,
        }}
        onClick={(e) => {
          e.stopPropagation();
          focusWindow(windowKey);
        }}>
        <div className="ring-ring bg-background overflow-hidden rounded-md ring ring-offset-0">
          <header
            className="bg-secondary p-3 active:cursor-grabbing"
            onPointerDown={(e) => {
              e.stopPropagation();
              focusWindow(windowKey);
              dragControls.start(e, { snapToCursor: false });
            }}>
            <div
              className="group flex w-fit cursor-auto items-center gap-2"
              onPointerDown={(e) => e.stopPropagation()}>
              <button onClick={() => closeWindow(windowKey)}>
                <div
                  className={cn(
                    "flex size-3 items-center justify-center rounded-full group-hover:bg-red-500",
                    windowKey === highestWindowKey ? "bg-red-500" : "bg-muted-foreground/30"
                  )}>
                  <Icon
                    name="close"
                    className="text-background/50 hidden size-2.5 group-hover:block"
                  />
                </div>
              </button>
              <button>
                <div
                  className={cn(
                    "flex size-3 items-center justify-center rounded-full group-hover:bg-yellow-500",
                    windowKey === highestWindowKey ? "bg-yellow-500" : "bg-muted-foreground/30"
                  )}>
                  <Icon
                    name="minimize"
                    className="text-background/50 hidden size-2.5 group-hover:block"
                  />
                </div>
              </button>
              <button>
                <div
                  className={cn(
                    "flex size-3 items-center justify-center rounded-full group-hover:bg-green-500",
                    windowKey === highestWindowKey ? "bg-green-500" : "bg-muted-foreground/30"
                  )}>
                  <Icon
                    name="resize"
                    className="text-background/50 hidden size-2.5 group-hover:block"
                  />
                </div>
              </button>
            </div>
          </header>
          <div
            className="max-w-full p-4"
            style={{
              backgroundColor: data.backgroundColor,
              width: data.size.width,
              height: data.size.height,
            }}>
            <h2 className="text-lg font-medium">{windowKey}</h2>
            {children}
          </div>
        </div>
      </motion.div>
    </>
  );
}
