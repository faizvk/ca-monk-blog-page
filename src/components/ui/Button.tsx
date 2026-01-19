import * as React from "react";
import { cn } from "../../lib/utils";

type ButtonVariant = "primary" | "secondary" | "outline";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

export function Button({
  className,
  variant = "primary",
  size = "md",
  disabled,
  ...props
}: ButtonProps) {
  return (
    <button
      disabled={disabled}
      className={cn(
        "inline-flex items-center justify-center rounded-xl font-semibold transition-all active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:active:scale-100",

        variant === "primary" &&
          "bg-slate-900 text-white shadow-md hover:bg-slate-800 hover:shadow-lg hover:shadow-slate-200",
        variant === "secondary" && "bg-blue-50 text-blue-600 hover:bg-blue-100",
        variant === "outline" &&
          "border border-slate-200 bg-white hover:bg-slate-50 hover:border-slate-300",

        size === "sm" && "h-9 px-4 text-xs tracking-wide",
        size === "md" && "h-11 px-6 text-sm",
        size === "lg" && "h-13 px-8 text-base",

        className,
      )}
      {...props}
    />
  );
}
