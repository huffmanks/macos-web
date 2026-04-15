import { useShallow } from "zustand/shallow";

import { useWindowStore } from "@/lib/store/window";

export default function Navbar() {
  const { reset } = useWindowStore(
    useShallow((state) => ({
      reset: state.reset,
    }))
  );

  return (
    <nav className="bg-black/50 px-4 py-1 text-xs backdrop-blur-lg">
      <div className="flex items-center justify-between gap-4">
        <div>Apple</div>
        <div>
          <button className="rounded-sm px-2 py-1" onClick={() => reset()}>
            Reset
          </button>
        </div>
      </div>
    </nav>
  );
}
