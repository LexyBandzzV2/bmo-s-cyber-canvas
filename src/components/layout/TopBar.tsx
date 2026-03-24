import { Search, Bell, Settings, User } from "lucide-react";

interface TopBarProps {
  breadcrumb: string[];
}

const TopBar = ({ breadcrumb }: TopBarProps) => (
  <header className="h-12 flex items-center justify-between px-5 border-b border-border bg-background/80 backdrop-blur-sm shrink-0">
    <div className="flex items-center gap-2 text-sm">
      <span className="text-accent font-display text-xs tracking-wider">BMO</span>
      {breadcrumb.map((b, i) => (
        <span key={i} className="flex items-center gap-2">
          <span className="text-muted-foreground">›</span>
          <span className="font-semibold">{b}</span>
        </span>
      ))}
    </div>
    <div className="flex items-center gap-3">
      <div className="flex items-center gap-2 bg-muted/50 rounded-md px-3 py-1.5 text-xs text-muted-foreground">
        <Search size={13} />
        <span>Search</span>
        <kbd className="ml-2 px-1.5 py-0.5 rounded bg-surface text-[10px] border border-border">⌘K</kbd>
      </div>
      <button className="p-1.5 rounded-md hover:bg-surface transition-colors">
        <Bell size={16} className="text-muted-foreground" />
      </button>
      <button className="p-1.5 rounded-md hover:bg-surface transition-colors">
        <Settings size={16} className="text-muted-foreground" />
      </button>
      <button className="p-1.5 rounded-md hover:bg-surface transition-colors">
        <User size={16} className="text-muted-foreground" />
      </button>
    </div>
  </header>
);

export default TopBar;
