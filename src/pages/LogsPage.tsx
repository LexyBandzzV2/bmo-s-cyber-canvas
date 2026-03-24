import { useState } from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import GlassCard from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RefreshCw, Download, Search, Pause, Play } from "lucide-react";

const mockLogs = [
  { id: 1, time: "2026-03-22 18:42:01.123", level: "info", source: "gateway", msg: "HTTP server listening on :18789" },
  { id: 2, time: "2026-03-22 18:42:01.456", level: "info", source: "control-ui", msg: "Serving Control UI at /openclaw" },
  { id: 3, time: "2026-03-22 18:42:02.789", level: "info", source: "agent:main", msg: "Agent initialized · model=anthropic/claude-haiku-4-5" },
  { id: 4, time: "2026-03-22 18:42:03.012", level: "warn", source: "channel:discord", msg: "Reconnecting WebSocket after idle timeout" },
  { id: 5, time: "2026-03-22 18:42:04.234", level: "info", source: "cron", msg: "Scheduler started · 0 active jobs" },
  { id: 6, time: "2026-03-22 18:42:05.567", level: "debug", source: "session", msg: "Resuming session agent:main:main · 75 messages in context" },
  { id: 7, time: "2026-03-22 18:42:06.890", level: "error", source: "channel:signal", msg: "Authentication failed: token expired. Re-authenticate required." },
  { id: 8, time: "2026-03-22 18:42:08.123", level: "info", source: "plugin:telegram", msg: "Telegram bot connected · username=@bmo_bot" },
  { id: 9, time: "2026-03-22 18:42:09.456", level: "info", source: "hooks", msg: "Hooks endpoint enabled at /hooks" },
  { id: 10, time: "2026-03-22 18:42:10.789", level: "warn", source: "agent:main", msg: "Tool call timeout after 30s · tool=exec" },
  { id: 11, time: "2026-03-22 18:42:12.012", level: "info", source: "gateway", msg: "Health check passed · all systems nominal" },
  { id: 12, time: "2026-03-22 18:42:14.234", level: "debug", source: "cache", msg: "Cache hit ratio: 100% · 816.2K cached tokens" },
];

const LogsPage = () => {
  const [paused, setPaused] = useState(false);
  const [filter, setFilter] = useState("");
  const [level, setLevel] = useState("all");

  const filtered = mockLogs.filter(l =>
    (level === "all" || l.level === level) &&
    (!filter || l.msg.toLowerCase().includes(filter.toLowerCase()) || l.source.toLowerCase().includes(filter.toLowerCase()))
  );

  return (
    <DashboardLayout breadcrumb={["Logs"]}>
      <h1 className="font-display text-xl font-bold mb-1">Logs</h1>
      <p className="text-sm text-muted-foreground mb-6">System and application logs.</p>

      <div className="flex items-center gap-2 mb-4 flex-wrap">
        <div className="relative flex-1 min-w-48">
          <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <Input value={filter} onChange={e => setFilter(e.target.value)} placeholder="Filter logs..." className="pl-9 bg-surface border-glass-border text-foreground text-sm" />
        </div>
        <Select value={level} onValueChange={setLevel}>
          <SelectTrigger className="w-28 bg-surface border-glass-border text-sm"><SelectValue /></SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All levels</SelectItem>
            <SelectItem value="debug">Debug</SelectItem>
            <SelectItem value="info">Info</SelectItem>
            <SelectItem value="warn">Warn</SelectItem>
            <SelectItem value="error">Error</SelectItem>
          </SelectContent>
        </Select>
        <Button size="sm" variant="outline" className="text-xs border-glass-border" onClick={() => setPaused(!paused)}>
          {paused ? <Play size={12} className="mr-1" /> : <Pause size={12} className="mr-1" />}
          {paused ? "Resume" : "Pause"}
        </Button>
        <Button size="sm" variant="outline" className="text-xs border-accent/40 text-accent hover:bg-accent/10">
          <RefreshCw size={12} className="mr-1" /> Refresh
        </Button>
        <Button size="sm" variant="outline" className="text-xs border-glass-border">
          <Download size={12} className="mr-1" /> Export
        </Button>
      </div>

      <GlassCard>
        <div className="bg-background/80 rounded-lg p-3 font-mono text-xs space-y-0.5 max-h-[calc(100vh-280px)] overflow-y-auto">
          {filtered.map(l => (
            <div key={l.id} className="flex gap-2 py-0.5 hover:bg-surface/30 px-1 rounded">
              <span className="text-muted-foreground shrink-0 w-44">{l.time}</span>
              <Badge variant="outline" className={`text-[9px] px-1.5 py-0 h-4 shrink-0 w-12 justify-center ${
                l.level === "error" ? "border-destructive text-destructive" :
                l.level === "warn" ? "border-warning text-warning" :
                l.level === "debug" ? "border-muted-foreground text-muted-foreground" :
                "border-accent/30 text-accent"
              }`}>{l.level}</Badge>
              <span className="text-accent shrink-0 w-28 truncate">[{l.source}]</span>
              <span className="text-foreground">{l.msg}</span>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-between mt-3">
          <span className="text-xs text-muted-foreground">{filtered.length} log entries</span>
          {paused && <Badge className="bg-warning/20 text-warning border-warning/30 text-[10px]">⏸ Paused</Badge>}
        </div>
      </GlassCard>
    </DashboardLayout>
  );
};

export default LogsPage;
