import { useWindowStore } from "@/lib/store/window";
import type { WindowData, WindowKey } from "@/types";

import Window from "@/components/window";

export default function WindowManager() {
  const windows = useWindowStore((state) => state.windows);

  return (
    <>
      {Object.entries(windows).map(([key, state]) => {
        const windowKey = key as WindowKey;
        const windowData = state.data as WindowData;

        if (!state.isOpen) return null;

        return <Window key={windowData.id} windowKey={windowKey} />;
      })}
    </>
  );
}
