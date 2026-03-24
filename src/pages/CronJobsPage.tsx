import { useState } from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import GlassCard from "@/components/ui/GlassCard";

const CronJobsPage = () => {
  const [showNewJob, setShowNewJob] = useState(false);

  return (
    <DashboardLayout breadcrumb={["Cron Jobs"]}>
      <h1 className="font-display text-xl font-bold mb-1">Cron Jobs</h1>
      <p className="text-sm text-muted-foreground mb-6">Wakeup and recurring runs.</p>

      <div className="flex gap-3 mb-6">
        <GlassCard title="Jobs" subtitle="All scheduled jobs stored in the gateway." className="flex-1">
          <div className="glass-card px-3 py-2 mb-3">
            <input className="w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground" placeholder="Search jobs by name, description, or agent..." />
          </div>
          <div className="flex items-center gap-2 mb-3 flex-wrap text-xs">
            {["All", "OK", "Error", "Skip"].map((s) => (
              <button key={s} className="px-2 py-1 rounded bg-surface hover:bg-surface-hover transition-colors">{s}</button>
            ))}
            <span className="text-muted-foreground mx-1">|</span>
            {["All", "Every", "Cron"].map((s) => (
              <button key={s} className="px-2 py-1 rounded bg-surface hover:bg-surface-hover transition-colors">{s}</button>
            ))}
            <span className="text-muted-foreground mx-1">|</span>
            {["All", "Enabled", "Disabled"].map((s) => (
              <button key={s} className="px-2 py-1 rounded bg-surface hover:bg-surface-hover transition-colors">{s}</button>
            ))}
          </div>
          <div className="text-center text-sm text-muted-foreground py-8">No jobs scheduled yet.</div>
        </GlassCard>
      </div>

      <GlassCard title="Run History" subtitle="Latest runs across all jobs.">
        <div className="flex items-center gap-2 mb-3 flex-wrap text-xs">
          <span className="text-muted-foreground">Scope:</span>
          <select className="bg-surface rounded px-2 py-1 border border-border text-xs"><option>All Jobs</option></select>
          <span className="text-muted-foreground">Status:</span>
          <select className="bg-surface rounded px-2 py-1 border border-border text-xs"><option>All Status</option><option>OK</option><option>Error</option><option>Skipped</option></select>
          <span className="text-muted-foreground">Sort:</span>
          <select className="bg-surface rounded px-2 py-1 border border-border text-xs"><option>Newest first</option><option>Oldest first</option></select>
        </div>
        <div className="text-center text-sm text-muted-foreground py-8">No runs recorded.</div>
      </GlassCard>

      {/* New Job Panel */}
      <div className="mt-6">
        <button
          onClick={() => setShowNewJob(!showNewJob)}
          className="px-4 py-2 rounded-md bg-accent/20 text-accent font-semibold text-sm hover:bg-accent/30 transition-colors"
        >
          + New Job
        </button>

        {showNewJob && (
          <GlassCard title="New Job" subtitle="Create a scheduled wakeup or agent run." className="mt-4">
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="section-title text-[10px]">Name *</label>
                  <input className="mt-1 w-full bg-surface rounded-md px-3 py-2 text-sm border border-border outline-none focus:border-accent" placeholder="Job name" />
                </div>
                <div>
                  <label className="section-title text-[10px]">Agent ID</label>
                  <input className="mt-1 w-full bg-surface rounded-md px-3 py-2 text-sm border border-border outline-none focus:border-accent" placeholder="agent:main" />
                </div>
              </div>
              <div>
                <label className="section-title text-[10px]">Description</label>
                <textarea className="mt-1 w-full bg-surface rounded-md px-3 py-2 text-sm border border-border outline-none focus:border-accent h-20" placeholder="Description..." />
              </div>
              <div className="flex items-center gap-2">
                <label className="section-title text-[10px]">Enabled</label>
                <input type="checkbox" defaultChecked className="accent-accent" />
              </div>

              <div className="border-t border-border pt-4">
                <h4 className="font-display text-xs font-bold tracking-wider mb-3">Schedule</h4>
                <div className="grid grid-cols-3 gap-3">
                  <div>
                    <label className="section-title text-[10px]">Type</label>
                    <select className="mt-1 w-full bg-surface rounded-md px-3 py-2 text-sm border border-border">
                      <option>Every</option><option>At</option><option>Cron</option>
                    </select>
                  </div>
                  <div>
                    <label className="section-title text-[10px]">Interval</label>
                    <input type="number" defaultValue={30} className="mt-1 w-full bg-surface rounded-md px-3 py-2 text-sm border border-border" />
                  </div>
                  <div>
                    <label className="section-title text-[10px]">Unit</label>
                    <select className="mt-1 w-full bg-surface rounded-md px-3 py-2 text-sm border border-border">
                      <option>Minutes</option><option>Hours</option><option>Days</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="border-t border-border pt-4">
                <h4 className="font-display text-xs font-bold tracking-wider mb-3">Execution</h4>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="section-title text-[10px]">Session</label>
                    <div className="flex gap-2 mt-1">
                      <button className="px-3 py-1 rounded bg-primary/30 text-xs font-semibold">Main</button>
                      <button className="px-3 py-1 rounded bg-surface text-xs">Isolated</button>
                    </div>
                  </div>
                  <div>
                    <label className="section-title text-[10px]">Wake Mode</label>
                    <div className="flex gap-2 mt-1">
                      <button className="px-3 py-1 rounded bg-primary/30 text-xs font-semibold">Now</button>
                      <button className="px-3 py-1 rounded bg-surface text-xs">Next heartbeat</button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t border-border pt-4">
                <h4 className="font-display text-xs font-bold tracking-wider mb-3">Delivery</h4>
                <div className="grid grid-cols-3 gap-3">
                  <div>
                    <label className="section-title text-[10px]">Result delivery</label>
                    <select className="mt-1 w-full bg-surface rounded-md px-3 py-2 text-sm border border-border">
                      <option>Announce summary</option><option>Webhook POST</option><option>None</option>
                    </select>
                  </div>
                  <div>
                    <label className="section-title text-[10px]">Channel</label>
                    <select className="mt-1 w-full bg-surface rounded-md px-3 py-2 text-sm border border-border">
                      <option>last</option>
                    </select>
                  </div>
                  <div>
                    <label className="section-title text-[10px]">To</label>
                    <input className="mt-1 w-full bg-surface rounded-md px-3 py-2 text-sm border border-border" placeholder="Optional" />
                  </div>
                </div>
              </div>

              <div className="flex gap-2 pt-2">
                <button className="px-4 py-2 rounded-md bg-accent/20 text-accent font-semibold text-sm hover:bg-accent/30 transition-colors">Create Job</button>
                <button onClick={() => setShowNewJob(false)} className="px-4 py-2 rounded-md bg-surface text-sm hover:bg-surface-hover transition-colors">Cancel</button>
              </div>
            </div>
          </GlassCard>
        )}
      </div>
    </DashboardLayout>
  );
};

export default CronJobsPage;
