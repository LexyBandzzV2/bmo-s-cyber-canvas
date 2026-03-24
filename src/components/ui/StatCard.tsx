import { cn } from "@/lib/utils";

interface StatCardProps {
  label: string;
  value: string;
  sub?: string;
  className?: string;
  accent?: boolean;
}

const StatCard = ({ label, value, sub, className, accent }: StatCardProps) => (
  <div className={cn("stat-card", className)}>
    <div className="section-title text-[10px] mb-1">{label}</div>
    <div className={cn("text-2xl font-display font-bold", accent && "text-accent glow-text")}>
      {value}
    </div>
    {sub && <div className="text-[11px] text-muted-foreground mt-0.5">{sub}</div>}
  </div>
);

export default StatCard;
