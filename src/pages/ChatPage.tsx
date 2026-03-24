import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Paperclip, Mic, ChevronDown, Sparkles } from "lucide-react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import bmoImg from "@/assets/bmo-character.png";

const taskModes = [
  { label: "🤖 Auto", model: "Kimi K2" },
  { label: "💻 Coding", model: "Claude Haiku" },
  { label: "🌐 Search Web", model: "Grok + Tavily" },
  { label: "📋 Planning", model: "Kimi K2" },
  { label: "💬 General Chat", model: "Grok Free" },
  { label: "👁️ Vision", model: "Claude Haiku" },
  { label: "⚡ Automation", model: "Claude Haiku" },
  { label: "🖥️ Local LM Studio", model: "Local" },
];

const advancedModels = [
  "Claude Haiku 4.5", "Kimi K2", "Grok", "Grok Free",
  "Llama 3.3 70B", "GPT-5 Mini", "Gemini 2.5 Flash",
];

interface Message {
  role: "user" | "assistant";
  content: string;
}

const ChatPage = () => {
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: "Hey! I'm BMO — I'm not magic, I'm just extremely persistent with retries and coping strategies. 🎮" },
  ]);
  const [input, setInput] = useState("");
  const [selectedMode, setSelectedMode] = useState(taskModes[0]);
  const [showModeDropdown, setShowModeDropdown] = useState(false);
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [branch] = useState("main");

  const send = () => {
    if (!input.trim()) return;
    setMessages((p) => [...p, { role: "user", content: input }, { role: "assistant", content: "Processing your request... 🎮" }]);
    setInput("");
  };

  return (
    <DashboardLayout breadcrumb={["Chat"]}>
      <div className="flex flex-col h-full max-h-[calc(100vh-7rem)]">
        {/* Top controls */}
        <div className="flex items-center gap-3 mb-4">
          <div className="glass-card px-3 py-1.5 flex items-center gap-2 text-sm cursor-pointer">
            <span className="text-muted-foreground">{branch}</span>
            <ChevronDown size={12} />
          </div>

          {/* Mode selector */}
          <div className="relative">
            <button
              onClick={() => { setShowModeDropdown(!showModeDropdown); setShowAdvanced(false); }}
              className="glass-card px-3 py-1.5 flex items-center gap-2 text-sm"
            >
              <Sparkles size={13} className="text-accent" />
              <span>{selectedMode.label}</span>
              <span className="text-muted-foreground text-xs">— {selectedMode.model}</span>
              <ChevronDown size={12} />
            </button>

            {showModeDropdown && (
              <motion.div
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute top-full left-0 mt-1 w-64 glass-card p-2 z-50"
              >
                <div className="section-title px-2 py-1 mb-1">Task Modes</div>
                {taskModes.map((m) => (
                  <button
                    key={m.label}
                    onClick={() => { setSelectedMode(m); setShowModeDropdown(false); }}
                    className="w-full text-left px-3 py-2 rounded-md text-sm hover:bg-surface transition-colors flex justify-between"
                  >
                    <span>{m.label}</span>
                    <span className="text-muted-foreground text-xs">{m.model}</span>
                  </button>
                ))}
                <div className="border-t border-border mt-1 pt-1">
                  <button
                    onClick={() => setShowAdvanced(!showAdvanced)}
                    className="w-full text-left px-3 py-2 rounded-md text-sm hover:bg-surface transition-colors flex items-center gap-2"
                  >
                    <span>🔧 Advanced</span>
                    <ChevronDown size={12} className={showAdvanced ? "rotate-180" : ""} />
                  </button>
                  {showAdvanced && (
                    <div className="pl-2">
                      {advancedModels.map((m) => (
                        <button
                          key={m}
                          onClick={() => {
                            setSelectedMode({ label: `🔧 ${m}`, model: m });
                            setShowModeDropdown(false);
                          }}
                          className="w-full text-left px-3 py-1.5 rounded-md text-xs hover:bg-surface transition-colors text-muted-foreground hover:text-foreground"
                        >
                          {m}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            )}
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto space-y-4 mb-4">
          {messages.map((msg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"} gap-2`}
            >
              {msg.role === "assistant" && (
                <img src={bmoImg} alt="BMO" className="w-8 h-8 mt-1" style={{ imageRendering: "pixelated" }} />
              )}
              <div
                className={`max-w-[70%] rounded-xl px-4 py-2.5 text-sm ${
                  msg.role === "user"
                    ? "bg-primary/30 border border-primary/40"
                    : "glass-card"
                }`}
              >
                {msg.content}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Input */}
        <div className="glass-card p-3 flex items-center gap-3">
          <button className="p-2 rounded-md hover:bg-surface transition-colors">
            <Paperclip size={16} className="text-muted-foreground" />
          </button>
          <button className="p-2 rounded-md hover:bg-surface transition-colors">
            <Mic size={16} className="text-muted-foreground" />
          </button>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && send()}
            placeholder="Message BMO (Enter to send)"
            className="flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
          />
          <button
            onClick={send}
            className="p-2 rounded-md bg-primary/20 hover:bg-primary/40 transition-colors"
          >
            <Send size={16} className="text-accent" />
          </button>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ChatPage;
