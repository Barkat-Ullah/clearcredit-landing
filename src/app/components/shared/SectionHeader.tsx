import React from "react";
import { cn } from "@/lib/utils";
import Badge, { BadgeProps } from "./Badge";

export interface SectionHeaderProps {
  /** Optional badge/tag text displayed above the title (e.g. "COMPARE", "FAQ") */
  badge?: string | React.ReactNode;
  /** Badge color variant */
  badgeVariant?: BadgeProps["variant"];
  /** Main section heading */
  title: string | React.ReactNode;
  /** Substring within title to highlight in Primary 1 (#05C8E8) */
  highlight?: string;
  /** Optional descriptive paragraph below title */
  description?: string | React.ReactNode;
  /** Alignment of header content */
  align?: "center" | "left" | "right";
  /** HTML Heading level for accessibility (default is h2) */
  as?: "h1" | "h2" | "h3" | "h4";
  /** Optional container max-width constraints */
  maxWidth?: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "full";
  /** Custom wrapper class */
  className?: string;
  /** Custom title class */
  titleClassName?: string;
  /** Custom description class */
  descriptionClassName?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  badge,
  badgeVariant = "soft-cyan",
  title,
  highlight,
  description,
  align = "center",
  as: HeadingTag = "h2",
  maxWidth = "2xl",
  className,
  titleClassName,
  descriptionClassName,
}) => {
  const alignContainerStyles = {
    center: "items-center text-center mx-auto",
    left: "items-start text-left mr-auto",
    right: "items-end text-right ml-auto",
  };

  const maxWidthStyles = {
    sm: "max-w-sm",
    md: "max-w-md",
    lg: "max-w-lg",
    xl: "max-w-xl",
    "2xl": "max-w-2xl",
    "3xl": "max-w-3xl",
    full: "max-w-full",
  };

  // Helper to render title with highlighted text if provided as a string
  const renderTitleContent = () => {
    if (typeof title === "string" && highlight && title.includes(highlight)) {
      const parts = title.split(highlight);
      return (
        <>
          {parts[0]}
          <span className="text-primary-1 text-gradient-primary">{highlight}</span>
          {parts.slice(1).join(highlight)}
        </>
      );
    }
    return title;
  };

  return (
    <div
      className={cn(
        "flex flex-col mb-8 sm:mb-10 md:mb-12",
        alignContainerStyles[align],
        maxWidthStyles[maxWidth],
        className
      )}
    >
      {badge && (
        <div className="mb-2.5 sm:mb-3">
          {typeof badge === "string" ? (
            <Badge variant={badgeVariant}>{badge}</Badge>
          ) : (
            badge
          )}
        </div>
      )}

      <HeadingTag
        className={cn(
          "font-bold tracking-tight text-primary-2",
          // Fluid responsive typography: scales cleanly from 320px up to desktop
          "text-2xl sm:text-3xl md:text-4xl lg:text-[40px] leading-[1.2]",
          titleClassName
        )}
      >
        {renderTitleContent()}
      </HeadingTag>

      {description && (
        <p
          className={cn(
            "mt-3 sm:mt-4 text-sm sm:text-base md:text-lg leading-relaxed text-primary-2/75",
            descriptionClassName
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
