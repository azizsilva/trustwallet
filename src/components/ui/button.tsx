import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "secondary" | "outline" | "ghost" | "royal" | "destructive";
  size?: "default" | "sm" | "lg" | "icon" | "pill";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]";

    const variants = {
      default: "bg-blue-600 text-white hover:bg-blue-700 shadow-md shadow-blue-500/20",
      royal: "bg-[#0500FF] text-white hover:bg-[#0000cc] shadow-lg shadow-blue-600/30 font-bold",
      secondary: "bg-slate-100 text-slate-900 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-100 dark:hover:bg-slate-700",
      outline: "border border-slate-200 dark:border-slate-800 bg-transparent hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-900 dark:text-slate-100",
      ghost: "hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300",
      destructive: "bg-red-500 text-white hover:bg-red-600 shadow-sm",
    };

    const sizes = {
      default: "h-11 px-5 py-2.5 rounded-xl text-sm",
      sm: "h-9 px-3.5 rounded-lg text-xs",
      lg: "h-13 px-8 py-3.5 rounded-2xl text-base",
      pill: "h-12 px-8 py-3 rounded-full text-base",
      icon: "h-10 w-10 rounded-xl",
    };

    return (
      <button
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };
