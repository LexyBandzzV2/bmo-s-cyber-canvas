import { useState } from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import GlassCard from "@/components/ui/GlassCard";
import {
  ActionBar, TabBar, SectionHeader,
  SettingToggle, SettingSelect, SettingNumber, SettingSegment,
  SettingInput, SettingList, SettingCustomEntries
} from "@/components/settings/SettingsComponents";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const tabs = ["Infrastructure", "Gateway", "Web", "Browser", "NodeHost", "CanvasHost", "Discovery", "Media"];

const InfrastructurePage = () => {
  const [activeTab, setActiveTab] = useState("Gateway");

  return (
    <DashboardLayout breadcrumb={["Infrastructure"]}>
      <h1 className="font-display text-xl font-bold mb-1">Infrastructure</h1>
      <p className="text-sm text-muted-foreground mb-4">Gateway, web, browser, and media settings.</p>

      <ActionBar />
      <div className="flex items-center gap-3 mb-4">
        <div className="relative flex-shrink-0 w-48">
          <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <Input placeholder="Search settings..." className="pl-9 bg-surface border-glass-border text-foreground text-sm" />
        </div>
        <TabBar tabs={tabs} active={activeTab} onChange={setActiveTab} />
      </div>

      {activeTab === "Gateway" && (
        <div className="space-y-4">
          <SectionHeader title="Gateway" subtitle="Gateway server settings (port, auth, binding)" />
          <GlassCard className="space-y-5">
            <SettingToggle label="Gateway Allow x-real-ip Fallback" tags={["access", "network", "reliability"]} />
            <h4 className="text-xs text-accent font-display tracking-wider">Gateway Auth</h4>
            <SettingToggle label="Gateway Auth Allow Tailscale Identity" tags={["access", "network"]} />
            <SettingSegment label="Gateway Auth Mode" tags={["network"]} options={["none", "token", "password", "trusted-proxy"]} defaultValue="token" />
            <SettingInput label="Gateway Password" tags={["security", "auth", "access", "network"]} type="password" />
            <SettingInput label="Gateway Token" description="Required by default for gateway access." tags={["security", "auth", "access", "network"]} type="password" />
            <SettingSegment label="Gateway Bind Mode" tags={["network"]} options={["auto", "lan", "loopback", "custom", "tailnet"]} />
            <SettingNumber label="Gateway Channel Health Check Interval (min)" tags={["network", "reliability"]} defaultValue={5} />
            <SettingNumber label="Gateway Channel Max Restarts Per Hour" tags={["network", "performance"]} defaultValue={10} />
            <SettingNumber label="Gateway Channel Stale Event Threshold (min)" tags={["network"]} defaultValue={30} />
            <h4 className="text-xs text-accent font-display tracking-wider">Control UI</h4>
            <SettingList label="Control UI Allowed Origins" tags={["access", "network"]} />
            <SettingToggle label="Insecure Control UI Auth Toggle" tags={["security", "access", "network", "advanced"]} />
            <SettingInput label="Control UI Base Path" tags={["network", "storage"]} defaultValue="/openclaw" />
            <SettingToggle label="Dangerously Allow Host-Header Origin Fallback" tags={["security", "access", "network", "advanced"]} />
            <SettingToggle label="Dangerously Disable Control UI Device Auth" tags={["security", "access", "network", "advanced"]} />
            <SettingToggle label="Control UI Enabled" tags={["network"]} defaultChecked />
            <SettingInput label="Control UI Assets Root" tags={["network"]} defaultValue="dist/control-ui" />
            <SettingInput label="Gateway Custom Bind Host" tags={["network"]} />
            <SettingSegment label="Gateway Mode" tags={["network"]} options={["local", "remote"]} />
            <h4 className="text-xs text-accent font-display tracking-wider">Nodes</h4>
            <SettingList label="Gateway Node Allowlist (Extra Commands)" tags={["access", "network"]} />
            <SettingList label="Gateway Node Denylist" tags={["access", "network"]} />
            <SettingNumber label="Gateway Port" tags={["network"]} defaultValue={18789} />
          </GlassCard>
        </div>
      )}

      {activeTab === "Web" && (
        <div className="space-y-4">
          <SectionHeader title="Web" subtitle="Webchat and HTTP settings" />
          <GlassCard><p className="text-sm text-muted-foreground text-center py-8">Webchat and web server configuration.</p></GlassCard>
        </div>
      )}

      {activeTab === "Browser" && (
        <div className="space-y-4">
          <SectionHeader title="Browser" subtitle="Browser automation settings" />
          <GlassCard><p className="text-sm text-muted-foreground text-center py-8">Browser automation configuration.</p></GlassCard>
        </div>
      )}

      {activeTab === "NodeHost" && (
        <div className="space-y-4">
          <SectionHeader title="NodeHost" subtitle="Node host runtime settings" />
          <GlassCard><p className="text-sm text-muted-foreground text-center py-8">Node host configuration.</p></GlassCard>
        </div>
      )}

      {activeTab === "CanvasHost" && (
        <div className="space-y-4">
          <SectionHeader title="CanvasHost" subtitle="Canvas host settings" />
          <GlassCard><p className="text-sm text-muted-foreground text-center py-8">Canvas host configuration.</p></GlassCard>
        </div>
      )}

      {activeTab === "Discovery" && (
        <div className="space-y-4">
          <SectionHeader title="Discovery" subtitle="Service discovery settings" />
          <GlassCard><p className="text-sm text-muted-foreground text-center py-8">Discovery configuration.</p></GlassCard>
        </div>
      )}

      {activeTab === "Media" && (
        <div className="space-y-4">
          <SectionHeader title="Media" subtitle="Media processing settings" />
          <GlassCard><p className="text-sm text-muted-foreground text-center py-8">Media configuration.</p></GlassCard>
        </div>
      )}

      {activeTab === "Infrastructure" && (
        <GlassCard><p className="text-sm text-muted-foreground text-center py-8">Select a category from the tabs above.</p></GlassCard>
      )}
    </DashboardLayout>
  );
};

export default InfrastructurePage;
