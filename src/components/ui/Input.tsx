import * as React from "react";
import { cn } from "../../lib/utils";

export function Input({
  className,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement>) {
  const Component = props.type === "textarea" ? "textarea" : "input";

  return (
    <Component
      className={cn(
        "flex w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-2.5 text-sm transition-all placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-4 focus:ring-blue-50 focus:border-blue-400 disabled:cursor-not-allowed disabled:opacity-50",
        props.type === "textarea" && "min-h-[120px] resize-none",
        className,
      )}
      {...(props as any)}
    />
  );
}
