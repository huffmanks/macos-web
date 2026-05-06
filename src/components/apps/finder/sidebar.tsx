import { FINDER_SIDEBAR_BUTTONS } from "@/lib/constants";
import { useDesktopStore } from "@/lib/store/desktop";
import { useFinderStore } from "@/lib/store/finder";
import { cn } from "@/lib/utils";
import type { AppContentComponentProps, FinderSidebarButton } from "@/types";

import { Icon } from "@/components/icons";
import WindowControls from "@/components/window/controls";

export default function FinderAppSidebar({
  windowId,
  constraintsRef,
  dragControls,
}: AppContentComponentProps) {
  const stack = useDesktopStore((state) => state.stack);
  const focusedWindowId = stack[stack.length - 1] ?? null;

  return (
    <div className={cn("flex h-full flex-col", windowId !== focusedWindowId && "opacity-50")}>
      <WindowControls
        windowId={windowId}
        constraintsRef={constraintsRef}
        dragControls={dragControls}
        headerClassName="bg-transparent"
        buttonWrapperClassName="p-3">
        <aside className="flex-1 p-2">
          <div className="select-none">
            <div className="text-muted-foreground mb-1 px-2 text-[10px] font-medium">Favorites</div>
            {FINDER_SIDEBAR_BUTTONS.map((button) => (
              <SidebarButton key={button.name} button={button} />
            ))}
          </div>
        </aside>
      </WindowControls>
    </div>
  );
}

function SidebarButton({ button }: { button: FinderSidebarButton }) {
  const lastActiveDirectory = useFinderStore((state) => state.lastActiveDirectory);
  const setLastActiveDirectory = useFinderStore((state) => state.setLastActiveDirectory);

  return (
    <button
      className={cn(
        "flex w-full items-center gap-1 rounded-md px-2 py-1.5 text-xs font-medium",
        lastActiveDirectory === button.name && "bg-white/15"
      )}
      onClick={() => setLastActiveDirectory(button.name)}>
      <Icon name={button.icon} className="stroke-1.5 size-4 stroke-blue-500 text-blue-500" />
      <span>{button.name}</span>
    </button>
  );
}
