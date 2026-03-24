import DashboardLayout from "@/components/layout/DashboardLayout";
import GlassCard from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { RefreshCw } from "lucide-react";

const SkillsPage = () => (
  <DashboardLayout breadcrumb={["Skills"]}>
    <h1 className="font-display text-xl font-bold mb-1">Skills</h1>
    <p className="text-sm text-muted-foreground mb-6">Skills and API keys.</p>

    <GlassCard>
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="font-display text-sm font-bold">Skills</h3>
          <p className="text-xs text-muted-foreground">Installed skills and their status.</p>
        </div>
        <Button size="sm" variant="outline" className="text-xs border-accent/40 text-accent hover:bg-accent/10">
          <RefreshCw size={12} className="mr-1" /> Refresh
        </Button>
      </div>

      <div className="flex items-center gap-3 mb-4">
        <Button size="sm" className="text-xs bg-accent hover:bg-accent/80 text-accent-foreground">Browse Skills Store</Button>
        <Input placeholder="Search skills..." className="flex-1 bg-surface border-glass-border text-foreground text-sm" />
        <span className="text-xs text-muted-foreground">0 shown</span>
      </div>

      <p className="text-sm text-muted-foreground text-center py-8">No skills found.</p>
    </GlassCard>
  </DashboardLayout>
);

export default SkillsPage;
