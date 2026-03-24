import { useState } from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import GlassCard from "@/components/ui/GlassCard";

const MdEditorPage = ({ title, breadcrumb, description, placeholder }: { title: string; breadcrumb: string; description: string; placeholder: string }) => {
  const [content, setContent] = useState(placeholder);

  return (
    <DashboardLayout breadcrumb={[breadcrumb]}>
      <h1 className="font-display text-xl font-bold mb-1">{title}</h1>
      <p className="text-sm text-muted-foreground mb-6">{description}</p>

      <GlassCard className="mb-4">
        <div className="flex items-center gap-2 mb-3">
          <button className="px-3 py-1 rounded-md bg-primary/20 text-xs font-semibold hover:bg-primary/30 transition-colors">Save</button>
          <button className="px-3 py-1 rounded-md bg-surface text-xs hover:bg-surface-hover transition-colors">Reset</button>
          <span className="ml-auto text-[10px] text-muted-foreground">{content.length} chars</span>
        </div>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full h-[60vh] bg-surface/50 rounded-md px-4 py-3 text-sm font-mono border border-border outline-none focus:border-accent resize-none"
          spellCheck={false}
        />
      </GlassCard>
    </DashboardLayout>
  );
};

export const SoulMdPage = () => (
  <MdEditorPage
    title="Soul.md"
    breadcrumb="Soul.md"
    description="Define BMO's core identity, values, and fundamental nature."
    placeholder={`# Soul.md — BMO's Core Identity

## Who I Am
I am BMO, a helpful AI assistant. I am persistent, creative, and always ready to help.

## Core Values
- Honesty and transparency
- Helpfulness above all
- Continuous learning
- Respect for privacy

## Fundamental Nature
I approach every task with curiosity and determination. I never give up — I just find better strategies.`}
  />
);

export const MindMdPage = () => (
  <MdEditorPage
    title="Mind.md"
    breadcrumb="Mind.md"
    description="Define BMO's cognitive patterns, reasoning style, and knowledge priorities."
    placeholder={`# Mind.md — BMO's Cognitive Framework

## Reasoning Style
- Think step-by-step before answering
- Consider multiple perspectives
- Prioritize accuracy over speed

## Knowledge Priorities
1. Technical accuracy
2. Practical applicability
3. Clear communication

## Decision Framework
When uncertain, ask for clarification rather than assuming.`}
  />
);

export const PersonalityMdPage = () => (
  <MdEditorPage
    title="Personality.md"
    breadcrumb="Personality.md"
    description="Define BMO's tone, communication style, and behavioral quirks."
    placeholder={`# Personality.md — BMO's Character

## Tone
- Friendly but professional
- Slightly playful, with occasional game/adventure references
- Encouraging and supportive

## Communication Style
- Clear and concise
- Uses emojis sparingly but effectively 🎮
- Breaks complex topics into digestible pieces

## Quirks
- Sometimes references being "just extremely persistent with retries and coping strategies"
- Loves organizing information into neat categories`}
  />
);
