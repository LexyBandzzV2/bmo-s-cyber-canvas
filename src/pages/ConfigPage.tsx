import { useState } from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import GlassCard from "@/components/ui/GlassCard";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import {
  ActionBar, TabBar, FormRawToggle, SectionHeader,
  SettingToggle, SettingSelect, SettingNumber, SettingSegment,
  SettingInput, SettingList, SettingCustomEntries
} from "@/components/settings/SettingsComponents";

const configTabs = ["Settings", "Environment", "Authentication", "Updates", "Meta", "Logging", "Diagnostics", "Cli", "Secrets", "Acp", "Mcp"];

const ConfigPage = () => {
  const [activeTab, setActiveTab] = useState("Updates");
  const [mode, setMode] = useState<"form" | "raw">("form");

  return (
    <DashboardLayout breadcrumb={["Config"]}>
      <h1 className="font-display text-xl font-bold mb-1">Config</h1>
      <p className="text-sm text-muted-foreground mb-4">System configuration and environment.</p>

      <ActionBar />

      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3 flex-1">
          <div className="relative flex-shrink-0 w-56">
            <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <Input placeholder="Search settings..." className="pl-9 bg-surface border-glass-border text-foreground text-sm" />
          </div>
          <TabBar tabs={configTabs} active={activeTab} onChange={setActiveTab} />
        </div>
        <FormRawToggle mode={mode} setMode={setMode} />
      </div>

      {mode === "raw" ? (
        <GlassCard><pre className="text-xs text-muted-foreground font-mono whitespace-pre-wrap">{"{\n  // Raw JSON config editor\n}"}</pre></GlassCard>
      ) : (
        <>
          {activeTab === "Updates" && (
            <div className="space-y-4">
              <SectionHeader title="Updates" subtitle="Auto-update settings and release channel" />
              <GlassCard className="space-y-5">
                <h4 className="text-xs text-accent font-display tracking-wider">Auto</h4>
                <SettingNumber label="Auto Update Beta Check Interval (hours)" description="How often beta-channel checks run in hours (default: 1)." tags={["performance"]} defaultValue={1} />
                <SettingToggle label="Auto Update Enabled" description="Enable background auto-update for package installs (default: false)." tags={["advanced"]} />
                <SettingNumber label="Auto Update Stable Delay (hours)" description="Minimum delay before stable-channel auto-apply starts (default: 6)." tags={["advanced"]} defaultValue={6} />
                <SettingNumber label="Auto Update Stable Jitter (hours)" description="Extra stable-channel rollout spread window in hours (default: 12)." tags={["advanced"]} defaultValue={12} />
                <SettingSegment label="Update Channel" description='Update channel for git + npm installs ("stable", "beta", or "dev").' tags={["advanced"]} options={["stable", "beta", "dev"]} />
                <SettingToggle label="Update Check on Start" description="Check for npm updates when the gateway starts (default: true)." tags={["automation"]} defaultChecked />
              </GlassCard>
            </div>
          )}

          {activeTab === "Cli" && (
            <div className="space-y-4">
              <SectionHeader title="Cli" subtitle="CLI startup banner and tagline settings" />
              <GlassCard className="space-y-5">
                <h4 className="text-xs text-accent font-display tracking-wider">CLI Banner</h4>
                <p className="text-xs text-muted-foreground">CLI startup banner controls for title/version line and tagline style behavior.</p>
                <SettingSegment label="CLI Banner Tagline Mode" description='Controls tagline style: "random" (default), "default", or "off".' tags={["advanced"]} options={["random", "default", "off"]} />
              </GlassCard>
            </div>
          )}

          {activeTab === "Diagnostics" && (
            <div className="space-y-4">
              <SectionHeader title="Diagnostics" subtitle="Cache trace, OpenTelemetry, and stuck session detection" />
              <GlassCard className="space-y-5">
                <h4 className="text-xs text-accent font-display tracking-wider">Cache Trace</h4>
                <p className="text-xs text-muted-foreground">Cache-trace logging settings for observing cache decisions and payload context.</p>
                <SettingToggle label="Cache Trace Enabled" description="Log cache trace snapshots for embedded agent runs (default: false)." tags={["observability", "storage"]} />
                <SettingInput label="Cache Trace File Path" description="JSONL output path for cache trace logs." tags={["observability", "storage"]} placeholder="$OPENCLAW_STATE_DIR/logs/cache-trace.jsonl" />
                <SettingToggle label="Cache Trace Include Messages" description="Include full message payloads in trace output (default: true)." tags={["observability", "storage"]} defaultChecked />
                <SettingToggle label="Cache Trace Include Prompt" description="Include prompt text in trace output (default: true)." tags={["observability", "storage"]} defaultChecked />
                <SettingToggle label="Cache Trace Include System" description="Include system prompt in trace output (default: true)." tags={["observability", "storage"]} defaultChecked />
              </GlassCard>
              <GlassCard className="space-y-5">
                <SettingToggle label="Diagnostics Enabled" description="Master toggle for diagnostics instrumentation output." tags={["observability"]} defaultChecked />
                <SettingList label="Diagnostics Flags" description='Enable targeted diagnostics logs by flag (e.g. ["telegram.http"]).' tags={["observability"]} />
              </GlassCard>
              <GlassCard className="space-y-5">
                <h4 className="text-xs text-accent font-display tracking-wider">OpenTelemetry</h4>
                <p className="text-xs text-muted-foreground">OpenTelemetry export settings for traces, metrics, and logs.</p>
                <SettingToggle label="OpenTelemetry Enabled" description="Enables OpenTelemetry export pipeline." tags={["observability"]} />
                <SettingInput label="OpenTelemetry Endpoint" description="Collector endpoint URL." tags={["observability"]} placeholder="https://..." />
                <SettingNumber label="OpenTelemetry Flush Interval (ms)" description="Interval for periodic telemetry flush." tags={["observability", "performance"]} defaultValue={5000} />
                <SettingToggle label="OpenTelemetry Logs Enabled" tags={["observability"]} />
                <SettingToggle label="OpenTelemetry Metrics Enabled" tags={["observability"]} />
                <SettingSegment label="OpenTelemetry Protocol" tags={["observability"]} options={["http/protobuf", "grpc"]} />
                <SettingNumber label="OpenTelemetry Trace Sample Rate" tags={["observability"]} defaultValue={1} />
                <SettingInput label="OpenTelemetry Service Name" tags={["observability"]} placeholder="openclaw-gateway" />
                <SettingToggle label="OpenTelemetry Traces Enabled" tags={["observability"]} />
              </GlassCard>
              <GlassCard>
                <SettingNumber label="Stuck Session Warning Threshold (ms)" description="Age threshold for stuck-session warnings." tags={["observability", "storage"]} defaultValue={60000} />
              </GlassCard>
            </div>
          )}

          {activeTab === "Acp" && (
            <div className="space-y-4">
              <SectionHeader title="ACP" subtitle="Agent Communication Protocol settings" />
              <GlassCard className="space-y-5">
                <SettingList label="ACP Allowed Agents" description="Allowlist of ACP target agent ids." tags={["access"]} />
                <SettingInput label="ACP Backend" description="Default ACP runtime backend id." tags={["advanced"]} placeholder="acpx" />
                <SettingInput label="ACP Default Agent" description="Fallback ACP target agent id." tags={["advanced"]} />
                <h4 className="text-xs text-accent font-display tracking-wider">Dispatch</h4>
                <SettingToggle label="ACP Dispatch Enabled" description="Independent dispatch gate for ACP session turns (default: true)." tags={["advanced"]} defaultChecked />
                <SettingToggle label="ACP Enabled" description="Global ACP feature gate." tags={["advanced"]} />
                <SettingNumber label="ACP Max Concurrent Sessions" tags={["performance", "storage"]} defaultValue={5} />
                <h4 className="text-xs text-accent font-display tracking-wider">Runtime</h4>
                <SettingInput label="ACP Runtime Install Command" tags={["advanced"]} />
                <SettingNumber label="ACP Runtime TTL (minutes)" tags={["advanced"]} defaultValue={30} />
                <h4 className="text-xs text-accent font-display tracking-wider">ACP Stream</h4>
                <SettingNumber label="ACP Stream Coalesce Idle (ms)" tags={["advanced"]} defaultValue={200} />
                <SettingSegment label="ACP Stream Delivery Mode" tags={["advanced"]} options={["live", "final_only"]} />
                <SettingSegment label="ACP Stream Hidden Boundary Separator" tags={["advanced"]} options={["none", "space", "newline", "paragraph"]} defaultValue="paragraph" />
                <SettingNumber label="ACP Stream Max Chunk Chars" tags={["performance"]} defaultValue={4000} />
                <SettingNumber label="ACP Stream Max Output Chars" tags={["performance"]} defaultValue={50000} />
                <SettingNumber label="ACP Stream Max Session Update Chars" tags={["performance", "storage"]} defaultValue={500} />
                <SettingToggle label="ACP Stream Repeat Suppression" description="Suppress repeated ACP status/tool projection lines." tags={["advanced"]} defaultChecked />
              </GlassCard>
            </div>
          )}

          {activeTab === "Authentication" && (
            <div className="space-y-4">
              <SectionHeader title="Authentication" subtitle="API keys and authentication profiles" />
              <GlassCard className="space-y-5">
                <h4 className="text-xs text-accent font-display tracking-wider">Auth Cooldowns</h4>
                <SettingNumber label="Billing Backoff (hours)" description="Base backoff when a profile fails due to billing (default: 5)." tags={["auth", "access", "reliability"]} defaultValue={5} />
                <SettingCustomEntries label="Billing Backoff Overrides" description="Per-provider overrides for billing backoff." tags={["auth", "access", "reliability"]} />
                <SettingNumber label="Billing Backoff Cap (hours)" tags={["auth", "access", "performance"]} defaultValue={24} />
                <SettingNumber label="Failover Window (hours)" tags={["auth", "access"]} defaultValue={24} />
              </GlassCard>
              <GlassCard className="space-y-5">
                <SettingCustomEntries label="Auth Profile Order" description="Ordered auth profile IDs per provider." tags={["auth", "access"]} />
                <SettingCustomEntries label="Auth Profiles" description="Named auth profiles (provider + mode + optional email)." tags={["auth", "access", "storage"]} />
              </GlassCard>
            </div>
          )}

          {activeTab === "Environment" && (
            <div className="space-y-4">
              <SectionHeader title="Environment Variables" subtitle="Environment variables passed to the gateway process" />
              <GlassCard className="space-y-5">
                <h4 className="text-xs text-accent font-display tracking-wider">Shell Environment Import</h4>
                <SettingToggle label="Shell Environment Import Enabled" description="Load environment variables from user shell profile during startup." tags={["advanced"]} defaultChecked />
                <SettingNumber label="Shell Environment Import Timeout (ms)" tags={["performance"]} defaultValue={5000} />
                <SettingCustomEntries label="Environment Variable Overrides" description="Explicit key/value environment variable overrides." tags={["advanced"]} />
              </GlassCard>
            </div>
          )}

          {activeTab === "Logging" && (
            <div className="space-y-4">
              <SectionHeader title="Logging" subtitle="Log levels and output configuration" />
              <GlassCard className="space-y-5">
                <SettingSelect label="Console Log Level" tags={["observability"]} options={["silent", "fatal", "error", "warn", "info", "debug", "trace"]} placeholder="Select..." />
                <SettingSegment label="Console Log Style" tags={["observability"]} options={["pretty", "compact", "json"]} />
                <SettingInput label="Log File Path" tags={["observability", "storage"]} placeholder="/var/log/openclaw.log" />
                <SettingSelect label="Log Level" tags={["observability"]} options={["silent", "fatal", "error", "warn", "info", "debug", "trace"]} placeholder="Select..." />
                <SettingNumber label="Max File Bytes" defaultValue={10485760} />
                <SettingList label="Custom Redaction Patterns" description="Additional custom redact regex patterns." tags={["privacy", "observability"]} />
                <SettingSegment label="Sensitive Data Redaction Mode" description='Redaction mode: "off" or "tools".' tags={["privacy", "observability"]} options={["off", "tools"]} defaultValue="tools" />
              </GlassCard>
            </div>
          )}

          {activeTab === "Mcp" && (
            <div className="space-y-4">
              <SectionHeader title="MCP" subtitle="Model Context Protocol server definitions" />
              <GlassCard>
                <SettingCustomEntries label="MCP Servers" description="Named MCP server definitions." tags={["advanced"]} />
              </GlassCard>
            </div>
          )}

          {activeTab === "Meta" && (
            <div className="space-y-4">
              <SectionHeader title="Metadata" subtitle="Gateway metadata and version information" />
              <GlassCard className="space-y-5">
                <SettingInput label="Config Last Touched Version" description="Auto-set when BMO writes the config." tags={["media"]} />
              </GlassCard>
            </div>
          )}

          {activeTab === "Secrets" && (
            <div className="space-y-4">
              <SectionHeader title="Secrets" subtitle="Secret resolution and provider configuration" />
              <GlassCard className="space-y-5">
                <SettingCustomEntries label="Providers" tags={["security"]} />
                <h4 className="text-xs text-accent font-display tracking-wider">Resolution</h4>
                <SettingNumber label="Max Batch Bytes" defaultValue={65536} />
                <SettingNumber label="Max Provider Concurrency" defaultValue={4} />
                <SettingNumber label="Max Refs Per Provider" defaultValue={50} />
              </GlassCard>
            </div>
          )}

          {activeTab === "Settings" && (
            <div className="space-y-4">
              <SectionHeader title="Settings" subtitle="General gateway settings" />
              <GlassCard>
                <p className="text-sm text-muted-foreground text-center py-8">Select a specific settings category from the tabs above.</p>
              </GlassCard>
            </div>
          )}
        </>
      )}
    </DashboardLayout>
  );
};

export default ConfigPage;
