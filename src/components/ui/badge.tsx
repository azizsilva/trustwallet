import * as React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "secondary" | "outline" | "success" | "brand";
}

function Badge({ className, variant = "default", ...props }: BadgeProps) {
  const variants = {
    default: "bg-blue-600/10 text-blue-600 dark:text-blue-400 border-blue-500/20",
    brand: "bg-[#0500FF]/10 text-[#0500FF] dark:text-blue-400 border-[#0500FF]/25 font-bold",
    secondary: "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700",
    outline: "border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200",
    success: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/25",
  };

  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors",
        variants[variant],
        className
      )}
      {...props}
    />
  );
}

export { Badge };
