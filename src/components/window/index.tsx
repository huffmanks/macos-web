import { APP_REGISTRY } from "@/lib/constants";
import { useDesktopStore } from "@/lib/store/desktop";
import type { DockAppId, WindowId } from "@/types";

import WindowFrame from "@/components/window/frame";

export default function WindowManager({
  constraintsRef,
}: {
  constraintsRef: React.RefObject<HTMLDivElement | null>;
}) {
  const stack = useDesktopStore((state) => state.stack);

  return (
    <>
      {stack.map((id) => (
        <WindowInstance key={id} windowId={id} constraintsRef={constraintsRef} />
      ))}
    </>
  );
}

function WindowInstance({
  windowId,
  constraintsRef,
}: {
  windowId: WindowId;
  constraintsRef: React.RefObject<HTMLDivElement | null>;
}) {
  const windows = useDesktopStore((state) => state.windows);
  const appId = windows[windowId].appId as DockAppId;

  const App = APP_REGISTRY[appId] ?? APP_REGISTRY.default;

  return (
    <WindowFrame windowId={windowId} constraintsRef={constraintsRef}>
      <App.Content />
    </WindowFrame>
  );
}
