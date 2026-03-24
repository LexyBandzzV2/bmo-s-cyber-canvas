import { useState } from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import GlassCard from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { RefreshCw, MoreHorizontal } from "lucide-react";

const tabs = ["Overview", "Files", "Tools", "Skills", "Channels", "Cron Jobs"];

const AgentsPage = () => {
  const [activeTab, setActiveTab] = useState("Overview");

  return (
    <DashboardLayout breadcrumb={["Agents"]}>
      <h1 className="font-display text-xl font-bold mb-1">Agents</h1>
      <p className="text-sm text-muted-foreground mb-6">Workspaces, tools, identities.</p>

      <div className="flex items-center gap-3 mb-4">
        <span className="text-xs text-muted-foreground font-body">AGENT</span>
        <Select defaultValue="main">
          <SelectTrigger className="w-48 bg-surface border-glass-border text-foreground text-sm">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="main">main (default)</SelectItem>
          </SelectContent>
        </Select>
        <Button size="icon" variant="ghost" className="text-muted-foreground"><MoreHorizontal size={16} /></Button>
        <Button size="sm" variant="outline" className="text-xs border-accent/40 text-accent hover:bg-accent/10">
          <RefreshCw size={12} className="mr-1" /> Refresh
        </Button>
      </div>

      <div className="flex gap-1 mb-6 flex-wrap">
        {tabs.map(t => (
          <button key={t} onClick={() => setActiveTab(t)}
            className={`px-3 py-1.5 text-xs rounded font-body transition-colors ${activeTab === t ? 'text-accent border-b-2 border-accent' : 'text-muted-foreground hover:text-foreground'}`}>
            {t}{t === "Channels" ? " 0" : ""}
          </button>
        ))}
      </div>

      {activeTab === "Overview" && (
        <GlassCard>
          <h3 className="font-display text-sm font-bold mb-1">Overview</h3>
          <p className="text-xs text-muted-foreground mb-4">Workspace paths and identity metadata.</p>

          <div className="grid grid-cols-3 gap-6 mb-6">
            <div>
              <span className="text-xs text-accent">Workspace</span>
              <p className="text-sm text-foreground font-semibold mt-0.5">default</p>
            </div>
            <div>
              <span className="text-xs text-accent">Primary Model</span>
              <p className="text-sm text-foreground mt-0.5">anthropic/claude-haiku-4-5</p>
            </div>
            <div>
              <span className="text-xs text-accent">Skills Filter</span>
              <p className="text-sm text-foreground mt-0.5">all skills</p>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <span className="text-xs text-accent">Model Selection</span>
              <p className="text-xs text-muted-foreground mt-0.5">Primary model (default)</p>
              <Select defaultValue="anthropic/claude-haiku-4-5">
                <SelectTrigger className="mt-1 bg-surface border-glass-border text-foreground text-sm">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="anthropic/claude-haiku-4-5">Current (anthropic/claude-haiku-4-5)</SelectItem>
                  <SelectItem value="anthropic/claude-sonnet-4">anthropic/claude-sonnet-4</SelectItem>
                  <SelectItem value="openai/gpt-5">openai/gpt-5</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <span className="text-xs text-accent">Fallbacks</span>
              <Input placeholder="provider/model" className="mt-1 bg-surface border-glass-border text-foreground" />
            </div>

            <div className="flex gap-2">
              <Button size="sm" variant="outline" className="text-xs border-accent/40 text-accent hover:bg-accent/10">Reload Config</Button>
              <Button size="sm" className="text-xs bg-accent hover:bg-accent/80 text-accent-foreground">Save</Button>
            </div>
          </div>
        </GlassCard>
      )}

      {activeTab === "Files" && (
        <GlassCard>
          <p className="text-center text-sm text-muted-foreground py-8">Workspace files will appear here.</p>
        </GlassCard>
      )}

      {activeTab === "Tools" && (
        <GlassCard>
          <p className="text-center text-sm text-muted-foreground py-8">Agent tools configuration.</p>
        </GlassCard>
      )}

      {activeTab === "Skills" && (
        <GlassCard>
          <p className="text-center text-sm text-muted-foreground py-8">Agent skills will appear here.</p>
        </GlassCard>
      )}

      {activeTab === "Channels" && (
        <GlassCard>
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">0 channels connected</span>
          </div>
        </GlassCard>
      )}

      {activeTab === "Cron Jobs" && (
        <GlassCard>
          <p className="text-center text-sm text-muted-foreground py-8">Agent cron jobs will appear here.</p>
        </GlassCard>
      )}
    </DashboardLayout>
  );
};

export default AgentsPage;
