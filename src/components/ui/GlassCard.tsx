import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  title?: string;
  subtitle?: string;
}

const GlassCard = ({ children, className, title, subtitle }: GlassCardProps) => (
  <div className={cn("glass-card p-5", className)}>
    {title && (
      <div className="mb-4">
        <h3 className="font-display text-sm font-bold tracking-wider">{title}</h3>
        {subtitle && <p className="text-xs text-muted-foreground mt-0.5">{subtitle}</p>}
      </div>
    )}
    {children}
  </div>
);

export default GlassCard;
