import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  MessageSquare, BarChart3, Radio, Server, Users, Activity,
  Clock, Bot, Sparkles, Network, Settings, MessageCircle,
  Palette, Zap, HardDrive, Brain, Bug, FileText, BookOpen,
  ChevronDown, ChevronRight, Key, FileHeart
} from "lucide-react";
import bmoImg from "@/assets/bmo-character.png";

interface NavSection {
  title: string;
  items: { label: string; icon: React.ReactNode; path: string }[];
}

const sections: NavSection[] = [
  {
    title: "CHAT",
    items: [
      { label: "Chat", icon: <MessageSquare size={16} />, path: "/chat" },
    ],
  },
  {
    title: "CONTROL",
    items: [
      { label: "Overview", icon: <BarChart3 size={16} />, path: "/overview" },
      { label: "Channels", icon: <Radio size={16} />, path: "/channels" },
      { label: "Instances", icon: <Server size={16} />, path: "/instances" },
      { label: "Sessions", icon: <Users size={16} />, path: "/sessions" },
      { label: "Usage", icon: <Activity size={16} />, path: "/usage" },
      { label: "Cron Jobs", icon: <Clock size={16} />, path: "/cron-jobs" },
    ],
  },
  {
    title: "AGENT",
    items: [
      { label: "Agents", icon: <Bot size={16} />, path: "/agents" },
      { label: "Skills", icon: <Sparkles size={16} />, path: "/skills" },
      { label: "Nodes", icon: <Network size={16} />, path: "/nodes" },
    ],
  },
  {
    title: "PERSONA",
    items: [
      { label: "Soul.md", icon: <FileHeart size={16} />, path: "/soul-md" },
      { label: "Mind.md", icon: <Brain size={16} />, path: "/mind-md" },
      { label: "Personality.md", icon: <FileText size={16} />, path: "/personality-md" },
    ],
  },
  {
    title: "SETTINGS",
    items: [
      { label: "Config", icon: <Settings size={16} />, path: "/config" },
      { label: "Communications", icon: <MessageCircle size={16} />, path: "/communications" },
      { label: "Appearance", icon: <Palette size={16} />, path: "/appearance" },
      { label: "Automation", icon: <Zap size={16} />, path: "/automation" },
      { label: "Infrastructure", icon: <HardDrive size={16} />, path: "/infrastructure" },
      { label: "AI & Agents", icon: <Brain size={16} />, path: "/ai-agents" },
      { label: "API Keys", icon: <Key size={16} />, path: "/api-keys" },
      { label: "Debug", icon: <Bug size={16} />, path: "/debug" },
      { label: "Logs", icon: <FileText size={16} />, path: "/logs" },
    ],
  },
];

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState<Record<string, boolean>>({});

  const toggle = (title: string) =>
    setCollapsed((p) => ({ ...p, [title]: !p[title] }));

  return (
    <aside className="w-56 h-screen flex flex-col bg-sidebar border-r border-sidebar-border overflow-y-auto shrink-0">
      {/* BMO Logo */}
      <div className="flex items-center gap-2 px-4 py-4 border-b border-sidebar-border">
        <img src={bmoImg} alt="BMO" className="w-9 h-9" style={{ imageRendering: "pixelated" }} />
        <div>
          <div className="font-display text-sm font-bold tracking-wider text-accent glow-text">
            BMO
          </div>
          <div className="text-[10px] text-muted-foreground font-display tracking-wider">
            TERMINAL
          </div>
        </div>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-2 py-3 space-y-1">
        {sections.map((s) => (
          <div key={s.title} className="mb-2">
            <button
              onClick={() => toggle(s.title)}
              className="section-title flex items-center gap-1 px-3 py-1.5 w-full text-left hover:text-foreground transition-colors"
            >
              {collapsed[s.title] ? <ChevronRight size={10} /> : <ChevronDown size={10} />}
              {s.title}
            </button>
            {!collapsed[s.title] && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                className="space-y-0.5 mt-0.5"
              >
                {s.items.map((item) => (
                  <div
                    key={item.path}
                    onClick={() => navigate(item.path)}
                    className={`nav-item ${location.pathname === item.path ? "active" : ""}`}
                  >
                    {item.icon}
                    <span className="font-medium">{item.label}</span>
                  </div>
                ))}
              </motion.div>
            )}
          </div>
        ))}
      </nav>

      {/* Footer */}
      <div className="px-3 py-3 border-t border-sidebar-border flex items-center gap-2">
        <BookOpen size={14} className="text-muted-foreground" />
        <span className="text-xs text-muted-foreground">Docs</span>
      </div>
      <div className="px-3 pb-3 flex items-center gap-2">
        <div className="w-2 h-2 rounded-full bg-success" />
        <span className="text-[10px] text-muted-foreground font-display tracking-wider">
          BMO v2026.3.22
        </span>
      </div>
    </aside>
  );
};

export default Sidebar;
