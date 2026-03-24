import DashboardLayout from "@/components/layout/DashboardLayout";
import GlassCard from "@/components/ui/GlassCard";
import {
  ActionBar, SectionHeader,
  SettingToggle, SettingSelect, SettingNumber, SettingSegment,
  SettingInput, SettingList, SettingCustomEntries
} from "@/components/settings/SettingsComponents";

const AiAgentsPage = () => (
  <DashboardLayout breadcrumb={["AI & Agents"]}>
    <h1 className="font-display text-xl font-bold mb-1">AI & Agents</h1>
    <p className="text-sm text-muted-foreground mb-4">Model selection, fallbacks, and agent configuration.</p>

    <ActionBar />

    <div className="space-y-4">
      <SectionHeader title="Models" subtitle="Primary model and fallback configuration" />
      <GlassCard className="space-y-5">
        <SettingInput label="Primary Model" description="Default model used for agent turns." defaultValue="anthropic/claude-haiku-4-5" />
        <SettingInput label="Fallback Model" description="Fallback model when primary is unavailable." placeholder="provider/model" />
        <SettingSegment label="Thinking Level" description="Default thinking/reasoning level for supported models." options={["off", "minimal", "low", "medium", "high"]} defaultValue="medium" />
        <SettingNumber label="Max Tokens" description="Maximum tokens per response." defaultValue={8192} />
        <SettingNumber label="Temperature" defaultValue={0.7} />
        <SettingNumber label="Context Window" description="Maximum context tokens sent to the model." defaultValue={128000} />
      </GlassCard>

      <SectionHeader title="Agent Behavior" subtitle="Runtime agent behavior controls" />
      <GlassCard className="space-y-5">
        <SettingToggle label="Tool Use Enabled" description="Allow agents to use configured tools." defaultChecked />
        <SettingNumber label="Max Tool Rounds" description="Maximum tool-use rounds per turn." defaultValue={10} />
        <SettingNumber label="Max Retries" description="Maximum retries on transient errors." defaultValue={3} />
        <SettingToggle label="Streaming Enabled" description="Stream agent responses token by token." defaultChecked />
        <SettingToggle label="Cache Enabled" description="Enable prompt caching for supported providers." defaultChecked />
      </GlassCard>

      <SectionHeader title="LLM Training & Fine-tuning" subtitle="Training data and fine-tuning configuration" />
      <GlassCard className="space-y-5">
        <SettingToggle label="Collect Training Data" description="Collect conversation data for fine-tuning (requires consent)." />
        <SettingInput label="Training Data Export Path" description="Path for exported training data." placeholder="/data/training/" />
        <SettingSegment label="Export Format" description="Format for training data export." options={["jsonl", "csv", "parquet"]} />
        <SettingNumber label="Min Conversation Length" description="Minimum turns to include in training data." defaultValue={3} />
        <SettingToggle label="Include Tool Calls" description="Include tool call/response pairs in training data." defaultChecked />
        <SettingToggle label="Anonymize Data" description="Strip PII from training exports." defaultChecked />
      </GlassCard>

      <SectionHeader title="Provider Keys" subtitle="API key management for LLM providers" />
      <GlassCard className="space-y-5">
        <SettingCustomEntries label="Provider API Keys" description="API keys for model providers (Anthropic, OpenAI, Groq, etc.)." />
        <SettingCustomEntries label="Provider Base URLs" description="Custom base URLs for self-hosted or proxy endpoints." />
      </GlassCard>
    </div>
  </DashboardLayout>
);

export default AiAgentsPage;
