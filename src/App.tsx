import { useShallow } from "zustand/shallow";

import { useWindowStore } from "@/lib/store/window";

import Dock from "@/components/desktop/dock";
import WindowManager from "@/components/window/manager";

export default function App() {
  const { reset } = useWindowStore(
    useShallow((state) => ({
      reset: state.reset,
    }))
  );

  return (
    <>
      <div className="relative h-screen w-screen bg-black text-white">
        <div className="flex h-full w-full flex-col items-center justify-center gap-4">
          <h1 className="text-2xl font-bold">macOS</h1>
          <button
            className="absolute top-4 right-4 z-999999 rounded-sm border border-zinc-600 px-2 py-1"
            onClick={() => reset()}>
            Reset
          </button>
          <Dock />
        </div>

        <div className="pointer-events-none absolute inset-0">
          <WindowManager />
        </div>
      </div>
    </>
  );
}
