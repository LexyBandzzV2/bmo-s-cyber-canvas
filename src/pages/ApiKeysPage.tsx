import { useState } from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import GlassCard from "@/components/ui/GlassCard";
import { Key, Eye, EyeOff, Plus, Trash2 } from "lucide-react";

interface ApiKey {
  id: string;
  name: string;
  provider: string;
  key: string;
  usage: string;
  status: "active" | "inactive";
}

const defaultKeys: ApiKey[] = [
  { id: "1", name: "Anthropic", provider: "anthropic", key: "sk-ant-••••••••••••", usage: "$0.41 / 1.1M tokens", status: "active" },
  { id: "2", name: "Groq", provider: "groq", key: "gsk_••••••••••••", usage: "$0.00 / 0 tokens", status: "active" },
  { id: "3", name: "Moonshot (Kimi)", provider: "moonshot", key: "sk-••••••••••••", usage: "$0.00 / 0 tokens", status: "active" },
  { id: "4", name: "OpenAI", provider: "openai", key: "sk-••••••••••••", usage: "Not used", status: "inactive" },
  { id: "5", name: "ElevenLabs", provider: "elevenlabs", key: "el_••••••••••••", usage: "Not used", status: "inactive" },
  { id: "6", name: "Tavily", provider: "tavily", key: "tvly-••••••••••••", usage: "Not used", status: "active" },
];

const ApiKeysPage = () => {
  const [keys] = useState<ApiKey[]>(defaultKeys);
  const [visible, setVisible] = useState<Record<string, boolean>>({});

  return (
    <DashboardLayout breadcrumb={["API Keys"]}>
      <h1 className="font-display text-xl font-bold mb-1">API Keys</h1>
      <p className="text-sm text-muted-foreground mb-6">Manage your provider API keys and track usage.</p>

      <div className="flex justify-end mb-4">
        <button className="px-4 py-2 rounded-md bg-accent/20 text-accent font-semibold text-sm hover:bg-accent/30 transition-colors flex items-center gap-2">
          <Plus size={14} /> Add API Key
        </button>
      </div>

      <div className="space-y-3">
        {keys.map((k) => (
          <GlassCard key={k.id}>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className={`w-2 h-2 rounded-full ${k.status === "active" ? "bg-success" : "bg-muted-foreground"}`} />
                <Key size={16} className="text-accent" />
                <div>
                  <div className="font-semibold text-sm">{k.name}</div>
                  <div className="text-[10px] text-muted-foreground">{k.provider}</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="font-mono text-xs text-muted-foreground">
                  {visible[k.id] ? "sk-ant-api03-realkey..." : k.key}
                </div>
                <button onClick={() => setVisible((p) => ({ ...p, [k.id]: !p[k.id] }))} className="p-1 hover:bg-surface rounded transition-colors">
                  {visible[k.id] ? <EyeOff size={14} className="text-muted-foreground" /> : <Eye size={14} className="text-muted-foreground" />}
                </button>
                <div className="text-xs text-muted-foreground">{k.usage}</div>
                <button className="p-1 hover:bg-destructive/20 rounded transition-colors">
                  <Trash2 size={14} className="text-destructive" />
                </button>
              </div>
            </div>
          </GlassCard>
        ))}
      </div>
    </DashboardLayout>
  );
};

export default ApiKeysPage;
