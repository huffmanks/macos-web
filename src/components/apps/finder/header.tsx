import { FINDER_SIDEBAR_BUTTONS } from "@/lib/constants";
import { useFinderStore } from "@/lib/store/finder";
import { cn } from "@/lib/utils";
import type { AppContentComponentProps, FinderSidebarButton } from "@/types";

import AppHeader from "@/components/apps/default/header";
import { Icon } from "@/components/icons";

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
      headerClassName="bg-transparent"
      buttonWrapperClassName="p-4">
      <aside className="p-2">
        <div className="select-none">
          {FINDER_SIDEBAR_BUTTONS.map((button) => (
            <SidebarButton key={button.name} button={button} />
          ))}
        </div>
      </aside>
    </AppHeader>
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
