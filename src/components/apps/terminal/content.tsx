export default function TerminalAppContent() {
  return (
    <div className="bg-muted/50 scrollbar flex h-[calc(100%-1.75rem)] flex-col overflow-y-scroll px-2 py-1 text-sm">
      <div>
        <div className="text-xs">Last login: Wed May 6 14:14:53 on console</div>
        <div className="inline-flex items-center gap-1">
          <span className="text-fuchsia-600">username@host</span>
          <span className="text-teal-500">~</span>
          <span className="text-muted-foreground text-xs">$</span>
        </div>
      </div>
    </div>
  );
}
