import * as React from "react";
import { cn } from "../../lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "hover";
}

export function Card({ className, variant = "default", ...props }: CardProps) {
  return (
    <div
      className={cn(
        "group relative rounded-2xl border border-slate-200 bg-white p-5 transition-all duration-300",
        variant === "hover" &&
          "hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/50 hover:border-blue-200",
        className,
      )}
      {...props}
    />
  );
}
