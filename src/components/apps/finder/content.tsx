import type { DragControls } from "motion/react";

import { handleDragStart } from "@/lib/utils";

export default function FinderContent({ dragControls }: { dragControls: DragControls }) {
  return (
    <div className="bg-background flex flex-col">
      <header
        className="border-l-background bg-input/70 flex h-12 items-center border-l select-none active:cursor-grabbing"
        onPointerDown={(e) => handleDragStart(e, dragControls)}>
        <div className="px-4 text-sm font-bold">Downloads</div>
      </header>
      <div className="border-background bg-muted flex-1 overflow-x-auto border-t border-l">
        <table className="w-full text-xs font-medium [&_td]:px-2 [&_td]:py-1 [&_th]:px-2 [&_th]:py-1">
          <thead>
            <tr className="border-border/50 border-b text-left">
              <th className="w-6 pr-0!"></th>
              <th className="pl-1!">Name</th>
              <th className="border-border/50 border-l">Date Modified</th>
              <th className="border-border/50 border-l">Size</th>
              <th className="border-border/50 border-l">Kind</th>
            </tr>
          </thead>
          <tbody className="[&_tr:nth-child(even)]:bg-input/40 [&_td:nth-child(n+3)]:text-muted-foreground">
            <tr>
              <td className="pr-0!">IC</td>
              <td className="pl-1!">test.txt</td>
              <td>Apr 24, 2026 at 5:50PM</td>
              <td>128 KB</td>
              <td>Document</td>
            </tr>
            <tr>
              <td className="pr-0!">IC</td>
              <td className="pl-1!">test.txt</td>
              <td>Apr 24, 2026 at 5:50PM</td>
              <td>128 KB</td>
              <td>Document</td>
            </tr>
            <tr>
              <td className="pr-0!">IC</td>
              <td className="pl-1!">test.txt</td>
              <td>Apr 24, 2026 at 5:50PM</td>
              <td>128 KB</td>
              <td>Document</td>
            </tr>
          </tbody>
        </table>
      </div>
      <footer
        className="border-background items-center border-t border-l bg-white/20 select-none"
        onPointerDown={(e) => handleDragStart(e, dragControls)}>
        <div className="text-muted-foreground px-4 py-1 text-center text-xs">3 Items</div>
      </footer>
    </div>
  );
}
