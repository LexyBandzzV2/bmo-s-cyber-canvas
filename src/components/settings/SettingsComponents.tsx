import { useState } from "react";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Minus, Plus } from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";

export const SettingToggle = ({ label, description, tags, defaultChecked = false }: {
  label: string; description?: string; tags?: string[]; defaultChecked?: boolean;
}) => {
  const [checked, setChecked] = useState(defaultChecked);
  return (
    <GlassCard className="flex items-center justify-between gap-4">
      <div className="flex-1">
        <div className="font-body font-semibold text-sm text-foreground">{label}</div>
        {description && <p className="text-xs text-muted-foreground mt-0.5">{description}</p>}
        {tags && <div className="flex gap-1 mt-1">{tags.map(t => <Badge key={t} variant="outline" className="text-[10px] px-1.5 py-0 border-accent/30 text-accent">{t}</Badge>)}</div>}
      </div>
      <Switch checked={checked} onCheckedChange={setChecked} />
    </GlassCard>
  );
};

export const SettingSelect = ({ label, description, tags, options, defaultValue, placeholder }: {
  label: string; description?: string; tags?: string[]; options: string[]; defaultValue?: string; placeholder?: string;
}) => (
  <div className="space-y-1.5">
    <div className="font-body font-semibold text-sm text-foreground">{label}</div>
    {description && <p className="text-xs text-muted-foreground">{description}</p>}
    {tags && <div className="flex gap-1 mt-1">{tags.map(t => <Badge key={t} variant="outline" className="text-[10px] px-1.5 py-0 border-accent/30 text-accent">{t}</Badge>)}</div>}
    <Select defaultValue={defaultValue}>
      <SelectTrigger className="bg-surface border-glass-border text-foreground">
        <SelectValue placeholder={placeholder || "Select..."} />
      </SelectTrigger>
      <SelectContent>
        {options.map(o => <SelectItem key={o} value={o}>{o}</SelectItem>)}
      </SelectContent>
    </Select>
  </div>
);

export const SettingInput = ({ label, description, tags, defaultValue, placeholder, type = "text" }: {
  label: string; description?: string; tags?: string[]; defaultValue?: string; placeholder?: string; type?: string;
}) => (
  <div className="space-y-1.5">
    <div className="font-body font-semibold text-sm text-foreground">{label}</div>
    {description && <p className="text-xs text-muted-foreground">{description}</p>}
    {tags && <div className="flex gap-1 mt-1">{tags.map(t => <Badge key={t} variant="outline" className="text-[10px] px-1.5 py-0 border-accent/30 text-accent">{t}</Badge>)}</div>}
    <Input type={type} defaultValue={defaultValue} placeholder={placeholder} className="bg-surface border-glass-border text-foreground" />
  </div>
);

export const SettingNumber = ({ label, description, tags, defaultValue = 0 }: {
  label: string; description?: string; tags?: string[]; defaultValue?: number;
}) => {
  const [val, setVal] = useState(defaultValue);
  return (
    <div className="space-y-1.5">
      <div className="font-body font-semibold text-sm text-foreground">{label}</div>
      {description && <p className="text-xs text-muted-foreground">{description}</p>}
      {tags && <div className="flex gap-1 mt-1">{tags.map(t => <Badge key={t} variant="outline" className="text-[10px] px-1.5 py-0 border-accent/30 text-accent">{t}</Badge>)}</div>}
      <div className="flex items-center gap-2">
        <Button size="icon" variant="outline" className="h-7 w-7 border-glass-border" onClick={() => setVal(v => v - 1)}><Minus size={12} /></Button>
        <Input value={val} onChange={e => setVal(Number(e.target.value))} className="w-24 bg-surface border-glass-border text-foreground text-center" />
        <Button size="icon" variant="outline" className="h-7 w-7 border-glass-border" onClick={() => setVal(v => v + 1)}><Plus size={12} /></Button>
        <div className="flex-1 h-1.5 rounded-full bg-surface" />
      </div>
    </div>
  );
};

export const SettingSegment = ({ label, description, tags, options, defaultValue }: {
  label: string; description?: string; tags?: string[]; options: string[]; defaultValue?: string;
}) => {
  const [selected, setSelected] = useState(defaultValue || options[0]);
  return (
    <div className="space-y-1.5">
      <div className="font-body font-semibold text-sm text-foreground">{label}</div>
      {description && <p className="text-xs text-muted-foreground">{description}</p>}
      {tags && <div className="flex gap-1 mt-1">{tags.map(t => <Badge key={t} variant="outline" className="text-[10px] px-1.5 py-0 border-accent/30 text-accent">{t}</Badge>)}</div>}
      <div className="flex gap-1 mt-1">
        {options.map(o => (
          <button key={o} onClick={() => setSelected(o)}
            className={`px-3 py-1 text-xs rounded font-body transition-colors ${selected === o ? 'bg-accent text-accent-foreground' : 'bg-surface text-muted-foreground hover:text-foreground'}`}>
            {o}
          </button>
        ))}
      </div>
    </div>
  );
};

export const SettingList = ({ label, description, tags, count = 0 }: {
  label: string; description?: string; tags?: string[]; count?: number;
}) => (
  <GlassCard>
    <div className="flex items-center justify-between">
      <div>
        <div className="font-body font-semibold text-sm text-foreground">{label}</div>
        {tags && <div className="flex gap-1 mt-1">{tags.map(t => <Badge key={t} variant="outline" className="text-[10px] px-1.5 py-0 border-accent/30 text-accent">{t}</Badge>)}</div>}
      </div>
      <div className="flex items-center gap-2">
        <span className="text-xs text-muted-foreground">{count} items</span>
        <Button size="sm" variant="outline" className="text-xs border-accent/30 text-accent hover:bg-accent/10">+ Add</Button>
      </div>
    </div>
    {description && <p className="text-xs text-muted-foreground mt-1">{description}</p>}
    {count === 0 && <p className="text-xs text-muted-foreground mt-3 text-center italic">No items yet. Click "Add" to create one.</p>}
  </GlassCard>
);

export const SettingCustomEntries = ({ label, description, tags }: {
  label: string; description?: string; tags?: string[];
}) => (
  <div className="space-y-1.5">
    <div className="flex items-center justify-between">
      <div>
        <div className="font-body font-semibold text-sm text-foreground">{label}</div>
        {tags && <div className="flex gap-1 mt-1">{tags.map(t => <Badge key={t} variant="outline" className="text-[10px] px-1.5 py-0 border-accent/30 text-accent">{t}</Badge>)}</div>}
      </div>
      <Button size="sm" variant="outline" className="text-xs border-accent/30 text-accent hover:bg-accent/10">Add Entry</Button>
    </div>
    {description && <p className="text-xs text-muted-foreground">{description}</p>}
    <p className="text-xs text-muted-foreground text-center italic py-2">No custom entries.</p>
  </div>
);

export const SectionHeader = ({ icon, title, subtitle }: { icon?: React.ReactNode; title: string; subtitle?: string }) => (
  <div className="flex items-center gap-2 px-4 py-3 bg-glass-bg/50 rounded-lg border border-glass-border/30 mb-4">
    {icon && <span className="text-accent">{icon}</span>}
    <div>
      <h3 className="font-display text-sm font-bold tracking-wider">{title}</h3>
      {subtitle && <p className="text-xs text-muted-foreground">{subtitle}</p>}
    </div>
  </div>
);

export const ActionBar = ({ hasChanges = false }: { hasChanges?: boolean }) => (
  <div className="flex items-center justify-between px-4 py-2 bg-glass-bg/30 rounded-lg border border-glass-border/30 mb-4">
    <span className="text-xs text-muted-foreground">{hasChanges ? "Unsaved changes" : "No changes"}</span>
    <div className="flex gap-2">
      <Button size="sm" variant="outline" className="text-xs border-glass-border">Open</Button>
      <Button size="sm" variant="outline" className="text-xs border-glass-border">Reload</Button>
      <Button size="sm" className="text-xs bg-warning/80 hover:bg-warning text-warning-foreground">Save</Button>
      <Button size="sm" variant="outline" className="text-xs border-glass-border">Apply</Button>
      <Button size="sm" variant="outline" className="text-xs border-glass-border">Update</Button>
    </div>
  </div>
);

export const TabBar = ({ tabs, active, onChange }: { tabs: string[]; active: string; onChange: (t: string) => void }) => (
  <div className="flex gap-1 flex-wrap mb-4">
    {tabs.map(t => (
      <button key={t} onClick={() => onChange(t)}
        className={`px-3 py-1.5 text-xs rounded-full font-body transition-colors border ${active === t ? 'bg-accent text-accent-foreground border-accent' : 'bg-surface border-glass-border text-muted-foreground hover:text-foreground hover:border-accent/50'}`}>
        {t}
      </button>
    ))}
  </div>
);

export const FormRawToggle = ({ mode, setMode }: { mode: "form" | "raw"; setMode: (m: "form" | "raw") => void }) => (
  <div className="flex gap-1">
    <button onClick={() => setMode("form")} className={`px-3 py-1 text-xs rounded font-body ${mode === "form" ? "bg-accent text-accent-foreground" : "bg-surface text-muted-foreground"}`}>Form</button>
    <button onClick={() => setMode("raw")} className={`px-3 py-1 text-xs rounded font-body ${mode === "raw" ? "bg-accent text-accent-foreground" : "bg-surface text-muted-foreground"}`}>Raw</button>
  </div>
);
