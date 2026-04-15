import { useRef } from "react";

import Dock from "@/components/desktop/dock";
import Navbar from "@/components/desktop/navbar";
import WindowManager from "@/components/window/manager";

export default function App() {
  const constraintsRef = useRef<HTMLDivElement | null>(null);

  return (
    <>
      <div className="grid h-screen w-screen grid-rows-[auto_1fr_auto] overflow-hidden bg-[url('/desktop/wallpaper.jpg')] bg-cover bg-center bg-no-repeat">
        <Navbar />
        <main ref={constraintsRef} className="relative size-full overflow-hidden">
          <WindowManager constraintsRef={constraintsRef} />
        </main>
        <Dock />
      </div>
    </>
  );
}
