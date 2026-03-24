import { useState } from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import GlassCard from "@/components/ui/GlassCard";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import {
  ActionBar, TabBar, SectionHeader,
  SettingInput, SettingSegment
} from "@/components/settings/SettingsComponents";

const tabs = ["Appearance", "UI", "Setup Wizard"];

const AppearancePage = () => {
  const [activeTab, setActiveTab] = useState("Appearance");
  const [roundness, setRoundness] = useState([50]);

  return (
    <DashboardLayout breadcrumb={["Appearance"]}>
      <h1 className="font-display text-xl font-bold mb-1">Appearance</h1>
      <p className="text-sm text-muted-foreground mb-4">Theme, UI, and setup wizard settings.</p>

      <ActionBar />
      <TabBar tabs={tabs} active={activeTab} onChange={setActiveTab} />

      {activeTab === "Appearance" && (
        <div className="space-y-4">
          <GlassCard className="space-y-5">
            <div>
              <h4 className="text-xs text-accent font-display tracking-wider mb-2">Theme</h4>
              <p className="text-xs text-muted-foreground mb-3">Choose a theme family.</p>
              <SettingSegment label="" options={["Claw", "Knot", "Dash"]} defaultValue="Claw" />
            </div>

            <div>
              <h4 className="text-xs text-accent font-display tracking-wider mb-2">Roundness</h4>
              <p className="text-xs text-muted-foreground mb-3">Adjust corner radius across the UI.</p>
              <div className="flex items-center gap-3">
                <span className="text-xs text-muted-foreground">Square</span>
                <Slider value={roundness} onValueChange={setRoundness} max={100} step={1} className="flex-1" />
                <span className="text-xs text-muted-foreground">Round</span>
              </div>
              <p className="text-center text-xs text-accent mt-1">{roundness[0]}%</p>
            </div>

            <div>
              <h4 className="text-xs text-accent font-display tracking-wider mb-2">Connection</h4>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <span className="text-[10px] text-muted-foreground">Gateway</span>
                  <p className="text-sm font-mono text-foreground">ws://127.0.0.1:18789</p>
                </div>
                <div>
                  <span className="text-[10px] text-muted-foreground">Status</span>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-success" />
                    <span className="text-sm text-foreground">Connected</span>
                  </div>
                </div>
                <div>
                  <span className="text-[10px] text-muted-foreground">Assistant</span>
                  <p className="text-sm text-foreground">BMO</p>
                </div>
              </div>
            </div>
          </GlassCard>
        </div>
      )}

      {activeTab === "Setup Wizard" && (
        <div className="space-y-4">
          <SectionHeader title="Setup Wizard" subtitle="Setup wizard state and history" />
          <GlassCard className="space-y-5">
            <SettingInput label="Wizard Last Run Timestamp" tags={["advanced"]} placeholder="ISO timestamp" />
            <SettingInput label="Wizard Last Run Command" tags={["advanced"]} />
            <SettingInput label="Wizard Last Run Commit" tags={["advanced"]} />
            <SettingSegment label="Wizard Last Run Mode" tags={["advanced"]} options={["local", "remote"]} />
            <SettingInput label="Wizard Last Run Version" tags={["advanced"]} />
          </GlassCard>
        </div>
      )}

      {activeTab === "UI" && (
        <div className="space-y-4">
          <SectionHeader title="UI" subtitle="User interface preferences" />
          <GlassCard className="space-y-5">
            <h4 className="text-xs text-accent font-display tracking-wider">Assistant Appearance</h4>
            <SettingInput label="Assistant Avatar" description="Avatar image source for UI surfaces." tags={["advanced"]} />
            <SettingInput label="Assistant Name" description="Display name shown for the assistant." tags={["advanced"]} defaultValue="BMO" />
            <SettingInput label="Accent Color" description="Primary accent color for UI emphasis." tags={["advanced"]} />
          </GlassCard>
        </div>
      )}
    </DashboardLayout>
  );
};

export default AppearancePage;
