import { useState } from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import GlassCard from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { RefreshCw, Terminal, AlertTriangle, CheckCircle, XCircle } from "lucide-react";

const checks = [
  { name: "Gateway Connection", status: "ok", detail: "ws://127.0.0.1:18789 · Connected" },
  { name: "Primary Model", status: "ok", detail: "anthropic/claude-haiku-4-5 · Responding" },
  { name: "Cron Scheduler", status: "ok", detail: "0 active jobs · Idle" },
  { name: "Channel Health", status: "warn", detail: "2/6 channels disconnected" },
  { name: "Memory Usage", status: "ok", detail: "127 MB / 512 MB" },
  { name: "Disk Space", status: "ok", detail: "2.1 GB free" },
  { name: "Node Pairing", status: "ok", detail: "2 devices paired" },
  { name: "Plugin Loader", status: "ok", detail: "11 plugins loaded" },
];

const DebugPage = () => {
  const [logs] = useState([
    { time: "18:42:01", level: "info", msg: "Gateway started on port 18789" },
    { time: "18:42:02", level: "info", msg: "Control UI serving at /openclaw" },
    { time: "18:42:03", level: "warn", msg: "Discord channel reconnecting..." },
    { time: "18:42:05", level: "info", msg: "Agent main initialized with anthropic/claude-haiku-4-5" },
    { time: "18:42:06", level: "debug", msg: "Session agent:main:main resumed · 75 messages" },
    { time: "18:42:08", level: "error", msg: "Signal channel: auth token expired" },
  ]);

  return (
    <DashboardLayout breadcrumb={["Debug"]}>
      <h1 className="font-display text-xl font-bold mb-1">Debug</h1>
      <p className="text-sm text-muted-foreground mb-6">Diagnostics and troubleshooting.</p>

      <div className="flex items-center gap-2 mb-4">
        <Button size="sm" variant="outline" className="text-xs border-accent/40 text-accent hover:bg-accent/10">
          <RefreshCw size={12} className="mr-1" /> Run Health Check
        </Button>
        <Button size="sm" variant="outline" className="text-xs border-glass-border">Export Diagnostics</Button>
      </div>

      <GlassCard className="mb-4">
        <h3 className="font-display text-sm font-bold mb-3">System Health</h3>
        <div className="space-y-2">
          {checks.map(c => (
            <div key={c.name} className="flex items-center justify-between py-1.5 px-3 rounded bg-surface/50">
              <div className="flex items-center gap-2">
                {c.status === "ok" && <CheckCircle size={14} className="text-success" />}
                {c.status === "warn" && <AlertTriangle size={14} className="text-warning" />}
                {c.status === "error" && <XCircle size={14} className="text-destructive" />}
                <span className="text-sm font-body text-foreground">{c.name}</span>
              </div>
              <span className="text-xs text-muted-foreground">{c.detail}</span>
            </div>
          ))}
        </div>
      </GlassCard>

      <GlassCard>
        <div className="flex items-center gap-2 mb-3">
          <Terminal size={14} className="text-accent" />
          <h3 className="font-display text-sm font-bold">Live Logs</h3>
        </div>
        <div className="bg-background/80 rounded-lg p-3 font-mono text-xs space-y-1 max-h-64 overflow-y-auto">
          {logs.map((l, i) => (
            <div key={i} className="flex gap-2">
              <span className="text-muted-foreground shrink-0">{l.time}</span>
              <Badge variant="outline" className={`text-[9px] px-1 py-0 h-4 shrink-0 ${
                l.level === "error" ? "border-destructive text-destructive" :
                l.level === "warn" ? "border-warning text-warning" :
                l.level === "debug" ? "border-muted-foreground text-muted-foreground" :
                "border-accent/30 text-accent"
              }`}>{l.level}</Badge>
              <span className="text-foreground">{l.msg}</span>
            </div>
          ))}
        </div>
      </GlassCard>
    </DashboardLayout>
  );
};

export default DebugPage;
