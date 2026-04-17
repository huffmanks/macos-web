import Dock from "@/components/desktop/dock";
import Navbar from "@/components/desktop/navbar";
import WindowManager from "@/components/window/manager";

export default function App() {
  return (
    <>
      <div className="h-screen w-screen overflow-hidden bg-[url('/desktop/wallpaper.jpg')] bg-cover bg-center bg-no-repeat">
        <Navbar />
        <main className="relative size-full overflow-hidden">
          <WindowManager />
        </main>
        <Dock />
      </div>
    </>
  );
}
