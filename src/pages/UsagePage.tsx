import DashboardLayout from "@/components/layout/DashboardLayout";
import GlassCard from "@/components/ui/GlassCard";
import StatCard from "@/components/ui/StatCard";
import { useState } from "react";

const UsagePage = () => {
  const [view, setView] = useState<"tokens" | "cost">("tokens");

  return (
    <DashboardLayout breadcrumb={["Usage"]}>
      <h1 className="font-display text-xl font-bold mb-1">Usage</h1>
      <p className="text-sm text-muted-foreground mb-6">API usage and costs.</p>

      <GlassCard title="Filters" className="mb-6">
        <div className="flex items-center gap-3 mb-3 flex-wrap">
          <div className="tag-pill">1.1M Tokens</div>
          <div className="tag-pill">$0.41 Cost</div>
          <div className="tag-pill">3 sessions</div>
          <button className="tag-pill hover:bg-primary/20">Pin</button>
          <button className="tag-pill hover:bg-primary/20">Export ▾</button>
        </div>
        <div className="flex items-center gap-2 mb-3 flex-wrap">
          {["Today", "7d", "30d"].map((t) => (
            <button key={t} className="px-3 py-1 rounded-md text-xs bg-primary/20 hover:bg-primary/30 transition-colors font-semibold">
              {t}
            </button>
          ))}
          <span className="text-xs text-muted-foreground">03/23/2026 to 03/23/2026</span>
          <span className="mx-2 text-muted-foreground">|</span>
          <button
            onClick={() => setView("tokens")}
            className={`px-3 py-1 rounded-md text-xs font-semibold transition-colors ${view === "tokens" ? "bg-accent/30 text-accent" : "bg-surface hover:bg-surface-hover"}`}
          >
            Tokens
          </button>
          <button
            onClick={() => setView("cost")}
            className={`px-3 py-1 rounded-md text-xs font-semibold transition-colors ${view === "cost" ? "bg-accent/30 text-accent" : "bg-surface hover:bg-surface-hover"}`}
          >
            Cost
          </button>
          <button className="px-3 py-1 rounded-md text-xs bg-destructive/20 text-destructive font-semibold">Refresh</button>
        </div>
        <div className="flex items-center gap-2 flex-wrap">
          {["Agent", "Channel", "Provider", "Model", "Tool"].map((f) => (
            <div key={f} className="tag-pill">
              {f} <span className="ml-1 text-accent text-[10px]">All</span>
            </div>
          ))}
          <span className="text-xs text-muted-foreground ml-2">Tip: use filters or click bars to refine days.</span>
        </div>
      </GlassCard>

      <GlassCard title="Usage Overview" className="mb-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
          <StatCard label="MESSAGES" value="99" sub="45 user · 54 assistant" />
          <StatCard label="THROUGHPUT" value="3.8K" sub="tok/min · $0.0015/min" accent />
          <StatCard label="TOOL CALLS" value="6" sub="4 tools used" />
          <StatCard label="AVG TOKENS / MSG" value="10.6K" sub="Across 99 messages" />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <StatCard label="CACHE HIT RATE" value="100.0%" sub="816.2K cached" accent />
          <StatCard label="ERROR RATE" value="5.05%" sub="5 errors · 1h 31m avg" className="[&>div:nth-child(2)]:text-destructive" />
          <StatCard label="AVG COST / MSG" value="$0.0042" sub="$0.41 total" />
          <StatCard label="SESSIONS" value="3" sub="of 3 in range" />
        </div>
      </GlassCard>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <GlassCard title="Top Models">
          <div className="space-y-2">
            <div className="flex justify-between text-sm"><span>claude-haiku-4-5</span><span className="text-muted-foreground">$0.41 · 1.1M · 53 msgs</span></div>
            <div className="flex justify-between text-sm"><span>llama-3.3-70b-versatile</span><span className="text-muted-foreground">$0.00 · 0 · 1 msgs</span></div>
          </div>
        </GlassCard>
        <GlassCard title="Top Providers">
          <div className="space-y-2">
            <div className="flex justify-between text-sm"><span>anthropic</span><span className="text-muted-foreground">$0.41 · 1.1M · 53 msgs</span></div>
            <div className="flex justify-between text-sm"><span>groq</span><span className="text-muted-foreground">$0.00 · 0 · 1 msgs</span></div>
          </div>
        </GlassCard>
        <GlassCard title="Top Tools">
          <div className="space-y-2">
            {[["read", "2"], ["gateway", "2"], ["write", "1"], ["exec", "1"]].map(([t, c]) => (
              <div key={t} className="flex justify-between text-sm"><span>{t}</span><span className="text-muted-foreground">{c} calls</span></div>
            ))}
          </div>
        </GlassCard>
        <GlassCard title="Top Agents">
          <div className="flex justify-between text-sm"><span>main</span><span className="text-muted-foreground">$0.41 · 1.1M</span></div>
        </GlassCard>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <GlassCard title="Peak Error Days">
          <div className="flex justify-between text-sm">
            <span>Mar 22</span>
            <span className="text-destructive">5.05% · 5 errors · 99 msgs</span>
          </div>
        </GlassCard>
        <GlassCard title="Peak Error Hours">
          <div className="space-y-1">
            {[["6 PM", "6.67%", "1 err · 22 msgs"], ["7 PM", "6.67%", "1 err · 22 msgs"], ["8 PM", "6.67%", "1 err · 10 msgs"]].map(([h, r, d]) => (
              <div key={h} className="flex justify-between text-sm"><span>{h}</span><span className="text-muted-foreground">{r} — {d}</span></div>
            ))}
          </div>
        </GlassCard>
      </div>

      <GlassCard title="Activity by Time" subtitle="Estimated from session spans. Time zone: Local.">
        <div className="grid grid-cols-7 gap-2 mb-4">
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
            <div key={d} className="text-center">
              <div className="text-[10px] text-muted-foreground mb-1">{d}</div>
              <div className={`h-8 rounded-md ${d === "Mon" ? "bg-accent/40" : "bg-surface"}`} />
              <div className="text-[10px] text-muted-foreground mt-0.5">{d === "Mon" ? "1.1M" : "0"}</div>
            </div>
          ))}
        </div>
      </GlassCard>

      <GlassCard title="Sessions" subtitle="3 shown" className="mt-6">
        <div className="space-y-2">
          {[
            { key: "agent:main:main", tokens: "781.6K", detail: "channel:webchat · msgs:75 · errors:5 · dur:3h 23m" },
            { key: "agent:main:b6b4da65...", tokens: "124.4K", detail: "msgs:14 · errors:0 · dur:33s" },
            { key: "agent:main:b14fd05c...", tokens: "145.2K", detail: "msgs:10 · tools:5 · errors:0 · dur:1h 8m" },
          ].map((s) => (
            <div key={s.key} className="glass-card px-4 py-3 flex justify-between items-center">
              <div>
                <div className="font-mono text-sm text-accent">{s.key}</div>
                <div className="text-[11px] text-muted-foreground mt-0.5">{s.detail}</div>
              </div>
              <div className="font-display text-sm font-bold">{s.tokens}</div>
            </div>
          ))}
        </div>
      </GlassCard>
    </DashboardLayout>
  );
};

export default UsagePage;
