import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import ChatPage from "./pages/ChatPage.tsx";
import OverviewPage from "./pages/OverviewPage.tsx";
import ChannelsPage from "./pages/ChannelsPage.tsx";
import InstancesPage from "./pages/InstancesPage.tsx";
import SessionsPage from "./pages/SessionsPage.tsx";
import UsagePage from "./pages/UsagePage.tsx";
import CronJobsPage from "./pages/CronJobsPage.tsx";
import ApiKeysPage from "./pages/ApiKeysPage.tsx";
import { SoulMdPage, MindMdPage, PersonalityMdPage } from "./pages/MdEditorPage.tsx";
import AgentsPage from "./pages/AgentsPage.tsx";
import SkillsPage from "./pages/SkillsPage.tsx";
import NodesPage from "./pages/NodesPage.tsx";
import ConfigPage from "./pages/ConfigPage.tsx";
import CommunicationsPage from "./pages/CommunicationsPage.tsx";
import AppearancePage from "./pages/AppearancePage.tsx";
import AutomationPage from "./pages/AutomationPage.tsx";
import InfrastructurePage from "./pages/InfrastructurePage.tsx";
import AiAgentsPage from "./pages/AiAgentsPage.tsx";
import DebugPage from "./pages/DebugPage.tsx";
import LogsPage from "./pages/LogsPage.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/chat" element={<ChatPage />} />
          <Route path="/overview" element={<OverviewPage />} />
          <Route path="/channels" element={<ChannelsPage />} />
          <Route path="/instances" element={<InstancesPage />} />
          <Route path="/sessions" element={<SessionsPage />} />
          <Route path="/usage" element={<UsagePage />} />
          <Route path="/cron-jobs" element={<CronJobsPage />} />
          <Route path="/agents" element={<AgentsPage />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/nodes" element={<NodesPage />} />
          <Route path="/soul-md" element={<SoulMdPage />} />
          <Route path="/mind-md" element={<MindMdPage />} />
          <Route path="/personality-md" element={<PersonalityMdPage />} />
          <Route path="/config" element={<ConfigPage />} />
          <Route path="/communications" element={<CommunicationsPage />} />
          <Route path="/appearance" element={<AppearancePage />} />
          <Route path="/automation" element={<AutomationPage />} />
          <Route path="/infrastructure" element={<InfrastructurePage />} />
          <Route path="/ai-agents" element={<AiAgentsPage />} />
          <Route path="/api-keys" element={<ApiKeysPage />} />
          <Route path="/debug" element={<DebugPage />} />
          <Route path="/logs" element={<LogsPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
