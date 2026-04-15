import { motion } from "motion/react";
import { useShallow } from "zustand/shallow";

import { useWindowStore } from "@/lib/store/window";
import type { WindowData, WindowKey } from "@/types";

export default function Window({
  windowKey,
  constraintsRef,
}: {
  windowKey: WindowKey;
  constraintsRef: React.RefObject<HTMLElement | null>;
}) {
  const { windows, focusWindow, updatePosition } = useWindowStore(
    useShallow((state) => ({
      windows: state.windows,
      focusWindow: state.focusWindow,
      updatePosition: state.updatePosition,
    }))
  );

  const data = windows[windowKey].data as WindowData;

  if (!windows[windowKey].isOpen || !data) {
    return null;
  }

  return (
    <>
      <motion.div
        data-window={windowKey}
        initial={{ opacity: 0, x: data.position.x, y: data.position.y }}
        animate={{ opacity: 1, x: data.position.x, y: data.position.y }}
        transition={{
          opacity: { duration: 0.25 },
          x: { duration: 0 },
          y: { duration: 0 },
        }}
        drag
        dragConstraints={constraintsRef}
        dragMomentum={false}
        onDragStart={(e) => {
          e.stopPropagation();
          focusWindow(windowKey);
        }}
        onDragEnd={(_, info) => {
          updatePosition(
            windowKey,
            data.position.x + info.offset.x,
            data.position.y + info.offset.y
          );
        }}
        className="absolute"
        style={{
          zIndex: windows[windowKey].zIndex,
        }}
        onClick={(e) => {
          e.stopPropagation();
          focusWindow(windowKey);
        }}>
        <div
          className="cursor-grab rounded-lg border border-zinc-600 p-8 active:cursor-grabbing"
          style={{
            backgroundColor: data.backgroundColor,
            width: data.size.width,
            height: data.size.height,
          }}>
          <h2 className="text-lg font-medium">{windowKey}</h2>
        </div>
      </motion.div>
    </>
  );
}
