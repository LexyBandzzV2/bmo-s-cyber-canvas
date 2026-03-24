import { Sparkles } from "lucide-react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import GlassCard from "@/components/ui/GlassCard";
import StatCard from "@/components/ui/StatCard";

const OverviewPage = () => (
  <DashboardLayout breadcrumb={["Overview"]}>
    <h1 className="font-display text-xl font-bold mb-1">Overview</h1>
    <p className="text-sm text-muted-foreground mb-6">Status, entry points, health.</p>

    <GlassCard title="Gateway Access" subtitle="Where the dashboard connects and how it authenticates." className="mb-6">
      <div className="space-y-3">
        <div>
          <label className="section-title text-[10px]">WebSocket URL</label>
          <div className="mt-1 glass-card px-3 py-2 text-sm font-mono text-muted-foreground">ws://127.0.0.1:18789</div>
        </div>
        <div className="grid grid-cols-4 gap-3">
          <div>
            <label className="section-title text-[10px]">Gateway Token</label>
            <div className="mt-1 glass-card px-3 py-2 text-xs font-mono text-muted-foreground truncate">BMO_GATEWAY_TO...</div>
          </div>
          <div>
            <label className="section-title text-[10px]">Password (not stored)</label>
            <div className="mt-1 glass-card px-3 py-2 text-xs text-muted-foreground">••••••••</div>
          </div>
          <div>
            <label className="section-title text-[10px]">Default Session Key</label>
            <div className="mt-1 glass-card px-3 py-2 text-xs font-mono text-muted-foreground">agent:main:main</div>
          </div>
          <div>
            <label className="section-title text-[10px]">Language</label>
            <div className="mt-1 glass-card px-3 py-2 text-xs text-muted-foreground">English</div>
          </div>
        </div>
        <div className="flex gap-2">
          <button className="px-4 py-1.5 rounded-md bg-primary/30 text-sm font-semibold hover:bg-primary/50 transition-colors">Connect</button>
          <button className="px-4 py-1.5 rounded-md bg-accent/20 text-sm font-semibold hover:bg-accent/30 transition-colors">Refresh</button>
        </div>
      </div>
    </GlassCard>

    <GlassCard title="Snapshot" subtitle="Latest gateway handshake information." className="mb-6">
      <div className="grid grid-cols-4 gap-3">
        <StatCard label="STATUS" value="OK" accent />
        <StatCard label="UPTIME" value="43s" />
        <StatCard label="TICK INTERVAL" value="30s" />
        <StatCard label="LAST CHANNELS REFRESH" value="just now" />
      </div>
      <div className="mt-4 glass-card px-4 py-2.5 text-sm bg-surface/50">
        Use Channels to link WhatsApp, Telegram, Discord, Signal, or iMessage.
      </div>
    </GlassCard>

    <div className="grid grid-cols-4 gap-3 mb-6">
      <StatCard label="COST" value="$0.411" sub="1.1M tokens · 99 msgs" />
      <StatCard label="SESSIONS" value="1" sub="Recent session keys tracked." />
      <StatCard label="SKILLS" value="50/50" sub="50 active" />
      <StatCard label="CRON" value="0 jobs" />
    </div>

    <GlassCard title="Recent Sessions" className="mb-6">
      <div className="glass-card px-4 py-3 flex justify-between items-center">
        <span className="font-mono text-sm">agent:main:main</span>
        <span className="text-xs text-muted-foreground">claude-haiku-4-5 · 1h ago</span>
      </div>
    </GlassCard>

    <GlassCard title="Attention">
      <div className="flex items-start gap-3 glass-card px-4 py-3">
        <Sparkles className="text-warning mt-0.5" size={16} />
        <div>
          <div className="text-sm font-semibold">Skills with missing dependencies</div>
          <div className="text-xs text-muted-foreground mt-0.5">1password, apple-notes, apple-reminders +42 more</div>
        </div>
      </div>
    </GlassCard>
  </DashboardLayout>
);

export default OverviewPage;
