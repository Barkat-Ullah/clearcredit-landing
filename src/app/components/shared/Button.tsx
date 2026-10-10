import React from "react";
import Link from "next/link";
import { Phone, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "phone" | "soft";
  size?: "sm" | "md" | "lg";
  href?: string;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  fullWidth?: boolean;
  isLoading?: boolean;
  target?: string;
  rel?: string;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className,
      variant = "primary",
      size = "md",
      href,
      icon,
      iconPosition = "left",
      fullWidth = false,
      isLoading = false,
      disabled,
      ...props
    },
    ref
  ) => {
    // Base styles ensuring accessible tap target and premium transitions
    const baseStyles =
      "inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-200 select-none cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-1 focus-visible:ring-offset-2 active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none disabled:active:scale-100";

    const variantStyles = {
      // Primary cyan button (as seen across the page & navbar)
      primary:
        "bg-primary-1 text-white hover:bg-primary-1-hover shadow-sm hover:shadow-md hover:shadow-primary-1/20 border border-transparent",
      // Secondary dark navy button (#1A4048)
      secondary:
        "bg-primary-2 text-white hover:bg-primary-2-hover shadow-sm hover:shadow-md hover:shadow-primary-2/20 border border-transparent",
      // Outline button
      outline:
        "bg-transparent text-primary-2 border-2 border-primary-2/20 hover:border-primary-1 hover:text-primary-1 hover:bg-primary-3/30",
      // Ghost button
      ghost:
        "bg-transparent text-primary-2 hover:bg-primary-3/40 hover:text-primary-1",
      // Dedicated Phone CTA variant with icon styling
      phone:
        "bg-primary-1 text-white hover:bg-primary-1-hover shadow-sm hover:shadow-md hover:shadow-primary-1/25 border border-primary-1/20 tracking-tight",
      // Soft ice/cyan background
      soft:
        "bg-primary-3/80 text-primary-2 hover:bg-primary-3 hover:text-primary-1 border border-primary-1/20",
    };

    const sizeStyles = {
      sm: "h-9 px-3.5 text-xs sm:text-sm min-h-[38px] gap-1.5",
      md: "h-11 px-5 text-sm sm:text-base min-h-[44px] gap-2",
      lg: "h-12 sm:h-13 px-6 sm:px-7 text-base min-h-[48px] gap-2.5",
    };

    const combinedClassName = cn(
      baseStyles,
      variantStyles[variant],
      sizeStyles[size],
      fullWidth && "w-full",
      className
    );

    const renderedIcon = isLoading ? (
      <Loader2 className="w-4 h-4 animate-spin" />
    ) : icon ? (
      icon
    ) : variant === "phone" ? (
      <Phone className="w-4 h-4 fill-current shrink-0" />
    ) : null;

    const content = (
      <>
        {renderedIcon && iconPosition === "left" && renderedIcon}
        <span>{children}</span>
        {renderedIcon && iconPosition === "right" && renderedIcon}
      </>
    );

    if (href) {
      const isExternalOrTel = href.startsWith("http") || href.startsWith("tel:") || href.startsWith("mailto:");
      if (isExternalOrTel) {
        return (
          <a
            href={href}
            className={combinedClassName}
            aria-disabled={disabled}
            {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
          >
            {content}
          </a>
        );
      }
      return (
        <Link
          href={href}
          className={combinedClassName}
          aria-disabled={disabled}
          onClick={props.onClick as unknown as React.MouseEventHandler<HTMLAnchorElement>}
        >
          {content}
        </Link>
      );
    }

    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={combinedClassName}
        {...props}
      >
        {content}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
