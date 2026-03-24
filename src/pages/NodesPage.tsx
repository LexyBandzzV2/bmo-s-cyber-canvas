import { useState } from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import GlassCard from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { RefreshCw } from "lucide-react";

const NodesPage = () => {
  const [autoAllow, setAutoAllow] = useState(false);

  return (
    <DashboardLayout breadcrumb={["Nodes"]}>
      <h1 className="font-display text-xl font-bold mb-1">Nodes</h1>
      <p className="text-sm text-muted-foreground mb-6">Paired devices and commands.</p>

      {/* Exec Approvals */}
      <GlassCard className="mb-4">
        <div className="flex items-center justify-between mb-3">
          <div>
            <h3 className="font-display text-sm font-bold">Exec approvals</h3>
            <p className="text-xs text-muted-foreground">Allowlist and approval policy for exec: host=gateway/node.</p>
          </div>
          <Button size="sm" className="text-xs bg-accent hover:bg-accent/80 text-accent-foreground">Save</Button>
        </div>

        <GlassCard>
          <div className="flex items-center justify-between">
            <div>
              <span className="font-body font-semibold text-sm">Target</span>
              <p className="text-xs text-muted-foreground">Gateway edits local approvals; node edits the selected node.</p>
            </div>
            <Select defaultValue="Gateway">
              <SelectTrigger className="w-40 bg-surface border-glass-border text-sm"><SelectValue /></SelectTrigger>
              <SelectContent>
                <SelectItem value="Gateway">Gateway</SelectItem>
                <SelectItem value="Node">Node</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </GlassCard>

        <div className="flex items-center gap-2 mt-3">
          <span className="text-xs text-muted-foreground">Scope</span>
          <Badge className="bg-accent/20 text-accent border-accent/30">Defaults</Badge>
          <Badge variant="outline" className="border-accent/30 text-accent">main</Badge>
        </div>

        <div className="space-y-2 mt-4">
          {[
            { label: "Security", desc: "Default security mode.", key: "Mode", options: ["Deny", "Allow", "Ask"] },
            { label: "Ask", desc: "Default prompt policy.", key: "Mode", options: ["On miss", "Always", "Never"] },
            { label: "Ask fallback", desc: "Applied when the UI prompt is unavailable.", key: "Fallback", options: ["Deny", "Allow"] },
          ].map(item => (
            <GlassCard key={item.label}>
              <div className="flex items-center justify-between">
                <div>
                  <span className="font-body font-semibold text-sm">{item.label}</span>
                  <p className="text-xs text-muted-foreground">{item.desc}</p>
                </div>
                <div className="text-right">
                  <span className="text-[10px] text-muted-foreground">{item.key}</span>
                  <Select defaultValue={item.options[0]}>
                    <SelectTrigger className="w-32 bg-surface border-glass-border text-sm mt-0.5"><SelectValue /></SelectTrigger>
                    <SelectContent>{item.options.map(o => <SelectItem key={o} value={o}>{o}</SelectItem>)}</SelectContent>
                  </Select>
                </div>
              </div>
            </GlassCard>
          ))}

          <GlassCard>
            <div className="flex items-center justify-between">
              <div>
                <span className="font-body font-semibold text-sm">Auto-allow skill CLIs</span>
                <p className="text-xs text-muted-foreground">Allow skill executables listed by the Gateway.</p>
              </div>
              <div className="text-right">
                <span className="text-[10px] text-muted-foreground">Enabled</span>
                <div className="mt-0.5"><Switch checked={autoAllow} onCheckedChange={setAutoAllow} /></div>
              </div>
            </div>
          </GlassCard>
        </div>
      </GlassCard>

      {/* Exec node binding */}
      <GlassCard className="mb-4">
        <div className="flex items-center justify-between mb-3">
          <div>
            <h3 className="font-display text-sm font-bold">Exec node binding</h3>
            <p className="text-xs text-muted-foreground">Pin agents to a specific node when using exec: host=node.</p>
          </div>
          <Button size="sm" className="text-xs bg-accent hover:bg-accent/80 text-accent-foreground">Save</Button>
        </div>

        <GlassCard>
          <div className="flex items-center justify-between">
            <div>
              <span className="font-body font-semibold text-sm">Default binding</span>
              <p className="text-xs text-muted-foreground">Used when agents do not override a node binding.</p>
            </div>
            <div className="text-right">
              <span className="text-[10px] text-muted-foreground">Node</span>
              <Select defaultValue="any">
                <SelectTrigger className="w-36 bg-surface border-glass-border text-sm mt-0.5"><SelectValue /></SelectTrigger>
                <SelectContent><SelectItem value="any">Any node</SelectItem></SelectContent>
              </Select>
              <p className="text-[10px] text-muted-foreground mt-0.5">No nodes with system.run available.</p>
            </div>
          </div>
        </GlassCard>

        <GlassCard className="mt-2">
          <div className="flex items-center justify-between">
            <div>
              <span className="font-body font-semibold text-sm">main</span>
              <p className="text-xs text-muted-foreground">agent · uses default (any)</p>
            </div>
            <div className="text-right">
              <span className="text-[10px] text-muted-foreground">Binding</span>
              <Select defaultValue="default">
                <SelectTrigger className="w-36 bg-surface border-glass-border text-sm mt-0.5"><SelectValue /></SelectTrigger>
                <SelectContent><SelectItem value="default">Use default</SelectItem></SelectContent>
              </Select>
            </div>
          </div>
        </GlassCard>
      </GlassCard>

      {/* Devices */}
      <GlassCard className="mb-4">
        <div className="flex items-center justify-between mb-3">
          <div>
            <h3 className="font-display text-sm font-bold">Devices</h3>
            <p className="text-xs text-muted-foreground">Pairing requests + role tokens.</p>
          </div>
          <Button size="sm" variant="outline" className="text-xs border-accent/40 text-accent hover:bg-accent/10">
            <RefreshCw size={12} className="mr-1" /> Refresh
          </Button>
        </div>

        <span className="text-xs text-accent font-semibold">Paired</span>

        {["5df1d6fab3a91fa3b5c6a62e85696ee30cd81647bc14096b8a09debc7c83a7b0a", "062a5f068fff3ca3dc677fb9792d162eb652505e15ef0883c5e8dc8849c87ab5"].map((id, i) => (
          <GlassCard key={id} className="mt-2">
            <p className="text-xs font-mono text-foreground break-all">{id}</p>
            <p className="text-[10px] font-mono text-muted-foreground mt-1 break-all">{id.slice(0, 40)}...</p>
            <p className="text-[10px] text-muted-foreground mt-1">roles: operator · scopes: operator.admin, operator.approvals, operator.pairing, operator.read, operator.write</p>
            <div className="mt-2">
              <span className="text-xs text-accent">Tokens</span>
              <div className="flex items-center justify-between mt-1">
                <p className="text-[10px] text-muted-foreground">operator · active · scopes: operator.admin, operator.approvals, operator.pairing · 22h ago</p>
                <div className="flex gap-2">
                  <Button size="sm" className="text-xs bg-info/80 hover:bg-info text-white h-6 px-3">Rotate</Button>
                  <Button size="sm" className="text-xs bg-destructive/80 hover:bg-destructive text-white h-6 px-3">Revoke</Button>
                </div>
              </div>
            </div>
          </GlassCard>
        ))}
      </GlassCard>

      {/* Nodes */}
      <GlassCard>
        <div className="flex items-center justify-between mb-3">
          <div>
            <h3 className="font-display text-sm font-bold">Nodes</h3>
            <p className="text-xs text-muted-foreground">Paired devices and live links.</p>
          </div>
          <Button size="sm" variant="outline" className="text-xs border-accent/40 text-accent hover:bg-accent/10">
            <RefreshCw size={12} className="mr-1" /> Refresh
          </Button>
        </div>
        <p className="text-sm text-muted-foreground text-center py-4">No nodes found.</p>
      </GlassCard>
    </DashboardLayout>
  );
};

export default NodesPage;
