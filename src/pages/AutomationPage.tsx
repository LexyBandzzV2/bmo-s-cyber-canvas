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

const tabs = ["Automation", "Commands", "Hooks", "Bindings", "Cron", "Approvals", "Plugins"];

const AutomationPage = () => {
  const [activeTab, setActiveTab] = useState("Commands");

  return (
    <DashboardLayout breadcrumb={["Automation"]}>
      <h1 className="font-display text-xl font-bold mb-1">Automation</h1>
      <p className="text-sm text-muted-foreground mb-4">Commands, hooks, cron, and plugins.</p>

      <ActionBar />
      <div className="flex items-center gap-3 mb-4">
        <div className="relative flex-shrink-0 w-48">
          <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <Input placeholder="Search settings..." className="pl-9 bg-surface border-glass-border text-foreground text-sm" />
        </div>
        <TabBar tabs={tabs} active={activeTab} onChange={setActiveTab} />
      </div>

      {activeTab === "Commands" && (
        <div className="space-y-4">
          <SectionHeader title="Commands" subtitle="Custom slash commands" />
          <GlassCard className="space-y-5">
            <SettingCustomEntries label="Command Elevated Access Rules" description="Elevated command allow rules by channel and sender." tags={["access"]} />
            <SettingToggle label="Allow Bash Chat Command" description="Allow bash chat command (requires tools.elevated)." tags={["advanced"]} />
            <SettingNumber label="Bash Foreground Window (ms)" tags={["advanced"]} defaultValue={2000} />
            <SettingToggle label="Allow /config" description="Allow /config chat command to read/write config." tags={["advanced"]} />
            <SettingToggle label="Allow /debug" description="Allow /debug chat command for runtime overrides." tags={["advanced"]} />
            <SettingToggle label="Allow /mcp" description="Allow /mcp chat command to manage MCP server config." tags={["advanced"]} />
            <SettingToggle label="Native Commands" description="Register native slash/menu commands with channels." tags={["advanced"]} defaultChecked />
            <SettingToggle label="Native Skill Commands" description="Register native skill commands for provider command menus." tags={["advanced"]} defaultChecked />
            <SettingList label="Command Owners" description="Explicit owner allowlist for owner-only tools/commands." tags={["access"]} />
            <SettingSegment label="Owner ID Display" description="How owner IDs are rendered in the system prompt." tags={["access"]} options={["raw", "hash"]} />
            <SettingInput label="Owner ID Hash Secret" tags={["security", "auth", "access"]} type="password" />
            <SettingToggle label="Allow /plugins" description="Allow /plugins chat command." tags={["advanced"]} />
            <SettingToggle label="Allow Restart" description="Allow /restart and gateway restart tool actions." tags={["advanced"]} defaultChecked />
            <SettingToggle label="Text Commands" description="Enable text-command parsing in chat input." tags={["advanced"]} defaultChecked />
            <SettingToggle label="Use Access Groups" description="Enforce access-group allowlists for commands." tags={["access"]} />
          </GlassCard>
        </div>
      )}

      {activeTab === "Approvals" && (
        <div className="space-y-4">
          <SectionHeader title="Approvals" subtitle="Exec approval forwarding" />
          <GlassCard className="space-y-5">
            <SettingList label="Approval Agent Filter" description="Allowlist of agent IDs for forwarded approvals." tags={["advanced"]} />
            <SettingToggle label="Forward Exec Approvals" description="Forward exec approval requests to delivery destinations." tags={["advanced"]} />
            <SettingSegment label="Approval Forwarding Mode" tags={["advanced"]} options={["session", "targets", "both"]} />
            <SettingList label="Approval Session Filter" description="Session-key filters for forwarding." tags={["storage"]} />
            <SettingList label="Approval Forwarding Targets" description="Explicit delivery targets for forwarding." tags={["advanced"]} />
          </GlassCard>
        </div>
      )}

      {activeTab === "Bindings" && (
        <div className="space-y-4">
          <SectionHeader title="Bindings" subtitle="Key bindings and shortcuts" />
          <GlassCard>
            <SettingList label="Binding Rules" description="Top-level binding rules for routing and ACP conversation ownership." tags={["advanced"]} />
          </GlassCard>
        </div>
      )}

      {activeTab === "Cron" && (
        <div className="space-y-4">
          <SectionHeader title="Cron" subtitle="Scheduled tasks and automation" />
          <GlassCard className="space-y-5">
            <SettingToggle label="Cron Enabled" description="Enable cron job execution for stored schedules." tags={["automation"]} defaultChecked />
            <SettingNumber label="Cron Max Concurrent Runs" tags={["performance", "automation"]} defaultValue={3} />
            <h4 className="text-xs text-accent font-display tracking-wider">Retry Policy</h4>
            <SettingList label="Cron Retry Backoff (ms)" tags={["reliability", "automation"]} />
            <SettingNumber label="Cron Retry Max Attempts" tags={["reliability", "performance", "automation"]} defaultValue={3} />
            <SettingList label="Cron Retry Error Types" tags={["reliability", "automation"]} />
            <h4 className="text-xs text-accent font-display tracking-wider">Run Log Pruning</h4>
            <SettingNumber label="Cron Run Log Keep Lines" tags={["automation"]} defaultValue={2000} />
            <SettingNumber label="Cron Run Log Max Bytes" tags={["performance", "automation"]} defaultValue={2000000} />
            <SettingInput label="Cron Session Retention" description='How long completed sessions are kept (default: "24h").' tags={["storage", "automation"]} defaultValue="24h" />
            <SettingInput label="Cron Store Path" tags={["storage", "automation"]} />
            <SettingInput label="Cron Webhook Bearer Token" tags={["security", "auth", "automation"]} type="password" />
          </GlassCard>
        </div>
      )}

      {activeTab === "Hooks" && (
        <div className="space-y-4">
          <SectionHeader title="Hooks" subtitle="Webhooks and event hooks" />
          <GlassCard className="space-y-5">
            <SettingList label="Hooks Allowed Agent IDs" tags={["access"]} />
            <SettingList label="Hooks Allowed Session Key Prefixes" tags={["access", "storage"]} />
            <SettingToggle label="Hooks Allow Request Session Key" tags={["access", "storage"]} />
            <SettingInput label="Hooks Default Session Key" tags={["storage"]} />
            <SettingToggle label="Hooks Enabled" description="Enable hooks endpoint and mapping execution." tags={["advanced"]} />
            <SettingList label="Hook Mappings" description="Ordered mapping rules for inbound hook requests." tags={["advanced"]} />
            <SettingNumber label="Hooks Max Body Bytes" tags={["performance"]} defaultValue={1048576} />
            <SettingInput label="Hooks Endpoint Path" tags={["storage"]} defaultValue="/hooks" />
            <SettingList label="Hooks Presets" tags={["advanced"]} />
            <SettingInput label="Hooks Auth Token" tags={["security", "auth"]} type="password" />
            <SettingInput label="Hooks Transforms Directory" tags={["storage"]} />
          </GlassCard>
        </div>
      )}

      {activeTab === "Plugins" && (
        <div className="space-y-4">
          <SectionHeader title="Plugins" subtitle="Plugin management and extensions" />
          <GlassCard className="space-y-5">
            <SettingList label="Plugin Allowlist" tags={["access"]} />
            <SettingList label="Plugin Denylist" tags={["access"]} />
            <SettingToggle label="Enable Plugins" description="Enable plugin/extension loading globally." tags={["advanced"]} defaultChecked />
            <h4 className="text-xs text-accent font-display tracking-wider">Plugin Entries</h4>
            <p className="text-xs text-muted-foreground">Per-plugin settings keyed by plugin ID.</p>
            {["Amazon Bedrock", "Anthropic", "@openclaw/discord", "@openclaw/telegram", "@openclaw/slack", "@openclaw/signal", "OpenAI", "Groq", "xAI", "Ollama", "Together"].map(p => (
              <div key={p} className="flex items-center justify-between py-1 px-2 rounded bg-surface/50">
                <span className="text-xs text-foreground font-body">{p}</span>
                <span className="text-[10px] text-accent">advanced</span>
              </div>
            ))}
            <SettingCustomEntries label="Custom Plugin Entries" />
            <h4 className="text-xs text-accent font-display tracking-wider">Plugin Loader</h4>
            <SettingList label="Plugin Load Paths" description="Additional plugin files or directories." tags={["storage"]} />
            <h4 className="text-xs text-accent font-display tracking-wider">Plugin Slots</h4>
            <SettingInput label="Context Engine Plugin" tags={["advanced"]} />
            <SettingInput label="Memory Plugin" description='Select active memory plugin or "none" to disable.' tags={["advanced"]} />
          </GlassCard>
        </div>
      )}

      {activeTab === "Automation" && (
        <GlassCard>
          <p className="text-sm text-muted-foreground text-center py-8">Select a specific category from the tabs above.</p>
        </GlassCard>
      )}
    </DashboardLayout>
  );
};

export default AutomationPage;
