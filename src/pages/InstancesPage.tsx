import DashboardLayout from "@/components/layout/DashboardLayout";
import GlassCard from "@/components/ui/GlassCard";

const InstancesPage = () => (
  <DashboardLayout breadcrumb={["Instances"]}>
    <h1 className="font-display text-xl font-bold mb-1">Instances</h1>
    <p className="text-sm text-muted-foreground mb-6">Connected clients and nodes.</p>

    <GlassCard title="Connected Instances" subtitle="Presence beacons from the gateway and clients.">
      <div className="flex justify-end mb-3">
        <button className="px-4 py-1.5 rounded-md bg-primary/20 text-sm font-semibold hover:bg-primary/30 transition-colors">Refresh</button>
      </div>
      <div className="glass-card px-4 py-3">
        <div className="flex justify-between items-start">
          <div>
            <div className="font-display text-sm font-bold">DESKTOP-5DNLQG9</div>
            <div className="text-xs text-muted-foreground mt-0.5">172.19.160.255 gateway 2026.3.22</div>
            <div className="flex gap-2 mt-2 flex-wrap">
              {["gateway", "linux 6.6.87.2", "Linux", "x64", "2026.3.22"].map((t) => (
                <span key={t} className="tag-pill">{t}</span>
              ))}
            </div>
          </div>
          <div className="text-right text-xs text-muted-foreground">
            <div>in &lt;1m</div>
            <div>Last input n/a</div>
            <div>Reason self</div>
          </div>
        </div>
      </div>
    </GlassCard>
  </DashboardLayout>
);

export default InstancesPage;
