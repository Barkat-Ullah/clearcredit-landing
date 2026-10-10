import React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  variant?: "soft-cyan" | "outline" | "navy" | "white";
  size?: "sm" | "md";
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = "soft-cyan",
  size = "md",
  className,
  ...props
}) => {
  const variantStyles = {
    "soft-cyan": "bg-primary-3/70 text-primary-2 border border-primary-1/20 shadow-xs",
    outline: "bg-transparent text-primary-1 border border-primary-1/40",
    navy: "bg-primary-2/10 text-primary-2 border border-primary-2/20",
    white: "bg-white text-primary-2 border border-primary-2/10 shadow-xs",
  };

  const sizeStyles = {
    sm: "px-2.5 py-0.5 text-[11px] tracking-wider",
    md: "px-3.5 py-1 text-xs tracking-wider",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center justify-center font-semibold uppercase rounded-full transition-colors",
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
};

export default Badge;
