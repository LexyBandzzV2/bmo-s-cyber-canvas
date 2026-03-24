import { useState } from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import GlassCard from "@/components/ui/GlassCard";
import {
  ActionBar, TabBar, SectionHeader,
  SettingToggle, SettingSelect, SettingNumber, SettingSegment,
  SettingInput, SettingList, SettingCustomEntries
} from "@/components/settings/SettingsComponents";

const tabs = ["Communication", "Channels", "Messages", "Broadcast", "Talk", "Audio"];

const CommunicationsPage = () => {
  const [activeTab, setActiveTab] = useState("Broadcast");

  return (
    <DashboardLayout breadcrumb={["Communications"]}>
      <h1 className="font-display text-xl font-bold mb-1">Communications</h1>
      <p className="text-sm text-muted-foreground mb-4">Channels, messages, and audio settings.</p>

      <ActionBar />
      <TabBar tabs={tabs} active={activeTab} onChange={setActiveTab} />

      {activeTab === "Broadcast" && (
        <div className="space-y-4">
          <SectionHeader title="Broadcast" subtitle="Broadcast and notification settings" />
          <GlassCard className="space-y-5">
            <SettingSegment label="Broadcast Strategy" description="Delivery order for broadcast fan-out." tags={["advanced"]} options={["parallel", "sequential"]} />
            <SettingCustomEntries label="Broadcast Targets" />
          </GlassCard>
        </div>
      )}

      {activeTab === "Audio" && (
        <div className="space-y-4">
          <SectionHeader title="Audio" subtitle="Audio input/output settings" />
          <GlassCard className="space-y-5">
            <h4 className="text-xs text-accent font-display tracking-wider">Audio Transcription</h4>
            <SettingList label="Audio Transcription Command" description="Executable + args for audio transcription." tags={["media"]} />
            <SettingNumber label="Audio Transcription Timeout (sec)" tags={["performance", "media"]} defaultValue={30} />
          </GlassCard>
        </div>
      )}

      {activeTab === "Messages" && (
        <div className="space-y-4">
          <SectionHeader title="Messages" subtitle="Message handling and routing settings" />
          <GlassCard className="space-y-5">
            <SettingInput label="Ack Reaction Emoji" description="Emoji reaction for acknowledging inbound messages." tags={["advanced"]} />
            <SettingSelect label="Ack Reaction Scope" tags={["advanced"]} options={["group-mentions", "group-all", "direct", "all", "off", "none"]} placeholder="Select..." />
            <h4 className="text-xs text-accent font-display tracking-wider">Group Chat Rules</h4>
            <SettingNumber label="Group History Limit" tags={["performance"]} defaultValue={50} />
            <SettingList label="Group Mention Patterns" description="Regex patterns for detecting mentions in group chats." tags={["advanced"]} />
            <h4 className="text-xs text-accent font-display tracking-wider">Inbound Debounce</h4>
            <SettingCustomEntries label="Inbound Debounce by Channel (ms)" tags={["advanced"]} />
            <SettingNumber label="Inbound Message Debounce (ms)" tags={["performance"]} defaultValue={0} />
            <SettingInput label="Inbound Message Prefix" tags={["advanced"]} />
            <h4 className="text-xs text-accent font-display tracking-wider">Inbound Queue</h4>
            <SettingSelect label="Queue Mode" tags={["advanced"]} options={["steer", "followup", "collect", "steer-backlog", "steer+backlog", "queue", "interrupt"]} placeholder="Select..." />
            <SettingNumber label="Queue Capacity" tags={["advanced"]} defaultValue={100} />
            <SettingNumber label="Queue Debounce (ms)" tags={["performance"]} defaultValue={0} />
            <SettingSegment label="Queue Drop Strategy" tags={["advanced"]} options={["old", "new", "summarize"]} />
            <SettingToggle label="Remove Ack Reaction After Reply" tags={["advanced"]} defaultChecked />
            <SettingInput label="Outbound Response Prefix" tags={["advanced"]} />
            <SettingToggle label="Suppress Tool Error Warnings" description="Suppress ⚠️ tool-error warnings from being shown to the user." tags={["advanced"]} />
          </GlassCard>
        </div>
      )}

      {activeTab === "Talk" && (
        <div className="space-y-4">
          <SectionHeader title="Talk" subtitle="Voice and speech settings" />
          <GlassCard className="space-y-5">
            <SettingInput label="Talk API Key" tags={["security", "auth", "media"]} type="password" />
            <SettingToggle label="Talk Interrupt on Speech" description="Stop assistant speech when user starts speaking." tags={["media"]} defaultChecked />
            <SettingInput label="Talk Model ID" description="ElevenLabs model ID (default: eleven_v3)." tags={["models", "media"]} defaultValue="eleven_v3" />
            <SettingInput label="Talk Output Format" tags={["media"]} placeholder="pcm_44100" />
            <SettingInput label="Talk Active Provider" tags={["media"]} placeholder="elevenlabs" />
            <SettingCustomEntries label="Talk Provider Settings" tags={["media"]} />
            <SettingNumber label="Talk Silence Timeout (ms)" tags={["performance", "media"]} defaultValue={700} />
            <SettingCustomEntries label="Talk Voice Aliases" tags={["media"]} />
            <SettingInput label="Talk Voice ID" tags={["media"]} />
          </GlassCard>
        </div>
      )}

      {activeTab === "Channels" && (
        <div className="space-y-4">
          <SectionHeader title="Channels" subtitle="Messaging channels (Telegram, Discord, Slack, etc.)" />
          <GlassCard>
            <SettingCustomEntries label="Channel Configuration" description="Per-channel settings keyed by provider ID." />
          </GlassCard>
        </div>
      )}

      {activeTab === "Communication" && (
        <GlassCard>
          <p className="text-sm text-muted-foreground text-center py-8">Select a specific category from the tabs above.</p>
        </GlassCard>
      )}
    </DashboardLayout>
  );
};

export default CommunicationsPage;
