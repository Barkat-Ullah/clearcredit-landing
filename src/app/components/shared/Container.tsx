import React from "react";
import { cn } from "@/lib/utils";

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  /** Max width constraint (defaults to 7xl) */
  size?: "sm" | "md" | "lg" | "xl" | "2xl" | "7xl" | "full";
  /** Clean container class */
  className?: string;
}

export const Container: React.FC<ContainerProps> = ({
  children,
  size = "7xl",
  className,
  ...props
}) => {
  const sizeStyles = {
    sm: "max-w-screen-sm",
    md: "max-w-screen-md",
    lg: "max-w-screen-lg",
    xl: "max-w-screen-xl",
    "2xl": "max-w-screen-2xl",
    "7xl": "max-w-7xl",
    full: "max-w-full",
  };

  return (
    <div
      className={cn(
        "w-full mx-auto px-4 sm:px-6 lg:px-8",
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default Container;
