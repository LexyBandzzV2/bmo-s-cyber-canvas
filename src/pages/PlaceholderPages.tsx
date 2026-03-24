import DashboardLayout from "@/components/layout/DashboardLayout";
import GlassCard from "@/components/ui/GlassCard";

const PlaceholderPage = ({ title, subtitle }: { title: string; subtitle: string }) => (
  <DashboardLayout breadcrumb={[title]}>
    <h1 className="font-display text-xl font-bold mb-1">{title}</h1>
    <p className="text-sm text-muted-foreground mb-6">{subtitle}</p>
    <GlassCard>
      <div className="text-center py-12 text-muted-foreground text-sm">
        This section is ready for configuration. Select an option to get started.
      </div>
    </GlassCard>
  </DashboardLayout>
);

export const AgentsPage = () => <PlaceholderPage title="Agents" subtitle="Workspaces, tools, identities." />;
export const SkillsPage = () => <PlaceholderPage title="Skills" subtitle="Skills and API keys." />;
export const NodesPage = () => <PlaceholderPage title="Nodes" subtitle="Connected processing nodes." />;
export const ConfigPage = () => <PlaceholderPage title="Config" subtitle="System configuration and environment." />;
export const CommunicationsPage = () => <PlaceholderPage title="Communications" subtitle="Channels, messages, and audio settings." />;
export const AppearancePage = () => <PlaceholderPage title="Appearance" subtitle="Theme, UI, and setup wizard settings." />;
export const AutomationPage = () => <PlaceholderPage title="Automation" subtitle="Commands, hooks, cron, and plugins." />;
export const InfrastructurePage = () => <PlaceholderPage title="Infrastructure" subtitle="Runtime, networking, and storage." />;
export const AiAgentsPage = () => <PlaceholderPage title="AI & Agents" subtitle="Model selection, fallbacks, and agent configuration." />;
export const DebugPage = () => <PlaceholderPage title="Debug" subtitle="Diagnostics and troubleshooting." />;
export const LogsPage = () => <PlaceholderPage title="Logs" subtitle="System and application logs." />;
