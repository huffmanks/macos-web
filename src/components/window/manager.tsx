import { useDesktopStore } from "@/lib/store/desktop";

import WindowFrame from "@/components/window";

export default function WindowManager({
  constraintsRef,
}: {
  constraintsRef: React.RefObject<HTMLDivElement | null>;
}) {
  const stack = useDesktopStore((state) => state.stack);

  return (
    <>
      {stack.map((id) => (
        <WindowFrame key={id} windowId={id} constraintsRef={constraintsRef} />
      ))}
    </>
  );
}
