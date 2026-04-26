export default function FinderContent() {
  return (
    <div className="bg-background">
      <div className="bg-input border-l-background flex h-12 items-center border-l px-4 select-none">
        <div className="text-sm font-bold">Downloads</div>
      </div>
      <div className="border-background bg-muted h-full flex-1 overflow-x-auto border-t border-l">
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
          </tbody>
        </table>
      </div>
    </div>
  );
}
