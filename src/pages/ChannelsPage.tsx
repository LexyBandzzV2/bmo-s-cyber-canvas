import DashboardLayout from "@/components/layout/DashboardLayout";
import GlassCard from "@/components/ui/GlassCard";

const channels = [
  { name: "WhatsApp", status: { configured: "No", linked: "No", running: "No", connected: "No" }, actions: ["Show QR", "Relink", "Wait for scan", "Logout", "Refresh"] },
  { name: "Telegram", status: { configured: "No", running: "No", mode: "n/a" }, actions: ["Save", "Reload", "Probe"] },
  { name: "Discord", status: { configured: "No", running: "No" }, actions: ["Save", "Reload"] },
  { name: "Google Chat", status: { configured: "n/a", running: "n/a" }, actions: ["Save", "Reload"] },
  { name: "Slack", status: { configured: "No", running: "No" }, actions: ["Save", "Reload"] },
  { name: "Signal", status: { configured: "No", running: "No" }, actions: ["Save", "Reload"] },
  { name: "iMessage", status: { configured: "No", running: "No" }, actions: ["Save", "Reload"] },
  { name: "Noxter", status: { configured: "No", running: "No" }, actions: ["Save", "Reload"] },
];

const ChannelsPage = () => (
  <DashboardLayout breadcrumb={["Channels"]}>
    <h1 className="font-display text-xl font-bold mb-1">Channels</h1>
    <p className="text-sm text-muted-foreground mb-6">Channels and settings.</p>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
      {channels.map((ch) => (
        <GlassCard key={ch.name} title={ch.name} subtitle={`Connection health and channel configuration.`}>
          <div className="space-y-2 mb-3">
            {Object.entries(ch.status).map(([k, v]) => (
              <div key={k} className="flex justify-between text-sm">
                <span className="text-muted-foreground capitalize">{k}</span>
                <span className={v === "No" || v === "n/a" ? "text-muted-foreground" : "text-success"}>{v}</span>
              </div>
            ))}
          </div>
          <div className="flex gap-2 flex-wrap">
            {ch.actions.map((a) => (
              <button
                key={a}
                className={`px-3 py-1 rounded-md text-xs font-semibold transition-colors ${
                  a === "Logout" || a === "Save"
                    ? "bg-destructive/20 text-destructive hover:bg-destructive/30"
                    : "bg-primary/20 hover:bg-primary/30"
                }`}
              >
                {a}
              </button>
            ))}
          </div>
        </GlassCard>
      ))}
    </div>

    <GlassCard title="Channel Health" subtitle="Channel status snapshots from the gateway.">
      <div className="glass-card p-3 bg-surface/50 font-mono text-xs text-muted-foreground whitespace-pre">
{`{
  "ts": 1774317110158,
  "channelOrder": [],
  "channelLabels": {},
  "channels": {},
  "channelAccounts": {}
}`}
      </div>
    </GlassCard>
  </DashboardLayout>
);

export default ChannelsPage;
