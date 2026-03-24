import DashboardLayout from "@/components/layout/DashboardLayout";
import GlassCard from "@/components/ui/GlassCard";

const SessionsPage = () => (
  <DashboardLayout breadcrumb={["Sessions"]}>
    <h1 className="font-display text-xl font-bold mb-1">Sessions</h1>
    <p className="text-sm text-muted-foreground mb-6">Active sessions and defaults.</p>

    <GlassCard title="Sessions" subtitle="Store (multiple)">
      <div className="flex items-center gap-3 mb-4 flex-wrap">
        <span className="text-sm">Active</span>
        <input className="w-16 bg-surface rounded px-2 py-1 text-xs border border-border" defaultValue="min" />
        <span className="text-sm">Limit</span>
        <input className="w-16 bg-surface rounded px-2 py-1 text-xs border border-border" defaultValue="120" />
        <label className="flex items-center gap-1 text-sm"><input type="checkbox" defaultChecked className="accent-accent" /> Global</label>
        <label className="flex items-center gap-1 text-sm"><input type="checkbox" className="accent-accent" /> Unknown</label>
        <button className="ml-auto px-4 py-1.5 rounded-md bg-primary/20 text-sm font-semibold hover:bg-primary/30 transition-colors">Refresh</button>
      </div>

      <div className="glass-card px-3 py-2 mb-2">
        <input className="w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground" placeholder="Filter by key, label, kind..." />
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-[10px] uppercase tracking-wider text-muted-foreground border-b border-border">
              <th className="p-2 text-left">Key</th>
              <th className="p-2 text-left">Label</th>
              <th className="p-2 text-left">Kind</th>
              <th className="p-2 text-left">Modified</th>
              <th className="p-2 text-left">Tokens</th>
              <th className="p-2 text-left">Thinking</th>
              <th className="p-2 text-left">Fast</th>
              <th className="p-2 text-left">Vision</th>
              <th className="p-2 text-left">Msg/Stmble</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-border/50 hover:bg-surface/30">
              <td className="p-2 text-accent font-mono">agent:main:main</td>
              <td className="p-2"><input className="bg-surface rounded px-2 py-0.5 text-xs w-20 border border-border" placeholder="(optional)" /></td>
              <td className="p-2 text-info">direct</td>
              <td className="p-2 text-muted-foreground">1h ago</td>
              <td className="p-2">27353 / 200000</td>
              <td className="p-2"><select className="bg-surface rounded px-1 py-0.5 text-xs border border-border"><option>inherit</option></select></td>
              <td className="p-2"><select className="bg-surface rounded px-1 py-0.5 text-xs border border-border"><option>inherit</option></select></td>
              <td className="p-2"><select className="bg-surface rounded px-1 py-0.5 text-xs border border-border"><option>inherit</option></select></td>
              <td className="p-2"><select className="bg-surface rounded px-1 py-0.5 text-xs border border-border"><option>inherit</option></select></td>
            </tr>
          </tbody>
        </table>
      </div>
    </GlassCard>
  </DashboardLayout>
);

export default SessionsPage;
