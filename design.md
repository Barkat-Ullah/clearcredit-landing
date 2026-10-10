# ClearCredit Landing Page — Design System & Section Template Guide

This document describes the design tokens, reusable layout components, section templates, and mobile responsiveness specifications for the **ClearCredit** landing page.

---

## 1. Color Palette & Design Tokens (Figma Selection Colors)

The design system is extracted directly from the Figma specifications:

| Token Name | Hex / Value | Figma Label | Purpose / Usage |
| :--- | :--- | :--- | :--- |
| `--color-primary-1` | `#05C8E8` | **Primary 1** | Brand cyan/teal. Primary CTA buttons, active links, highlighted text, badge accents. |
| `--color-primary-1-hover` | `#04B1CC` | — | Hover state for Primary 1 buttons and links. |
| `--color-primary-2` | `#1A4048` | **Primary 2** | Deep slate navy. Headings, body text, dark buttons, footer background, primary contrast. |
| `--color-primary-2-muted` | `#4B686F` | — | Subtitles, body descriptions, secondary icons. |
| `--color-primary-3` | `#D5F6FA` | **3** | Light ice cyan. Badge pill backgrounds, active state fills, subtle border tints. |
| `--color-white-100` | `#FFFFFF` | **FFFFFF 100%** | Pure white cards, clean backgrounds, button text. |
| `--color-white-60` | `rgba(255, 255, 255, 0.6)` | **FFFFFF 60%** | Translucent text on dark backgrounds (e.g. footer, hero accents). |
| `--color-primary-2-30` | `rgba(26, 64, 72, 0.3)` | **1A4048 30%** | Border accents, divider lines, soft elevation shadows. |
| `--color-primary-2-10` | `rgba(26, 64, 72, 0.1)` | — | Subtle card borders and neutral dividers. |
| `--color-brand-bg` | `#F8FDFF` | — | Subtle tinted section background. |

### Gradients
* **Primary Gradient**: `linear-gradient(135deg, #05C8E8 0%, #00B5E2 100%)`
* **Soft Ice Gradient**: `linear-gradient(180deg, #EBFBFE 0%, #FFFFFF 100%)`
* **Dark Navy Gradient**: `linear-gradient(180deg, #1A4048 0%, #112B30 100%)`
* **Hero Radial Glow**: `radial-gradient(circle at 50% 30%, rgba(5, 200, 232, 0.15) 0%, rgba(255, 255, 255, 0) 70%)`

---

## 2. Typography Hierarchy

* **Font Family**: Modern Sans-Serif (`var(--font-geist-sans)`, Inter, or Plus Jakarta Sans).
* **Display / Hero H1**: `text-3xl sm:text-4xl md:text-5xl lg:text-6xl`, font-bold, leading-tight, color `#1A4048`.
* **Section H2**: `text-2xl sm:text-3xl md:text-4xl lg:text-[40px]`, font-bold, leading-[1.2], color `#1A4048`.
* **Card H3**: `text-lg sm:text-xl md:text-2xl`, font-semibold, color `#1A4048`.
* **Section Description**: `text-sm sm:text-base md:text-lg`, font-normal, leading-relaxed, color `text-primary-2/75`.
* **Badge / Pill Tag**: `text-[11px] sm:text-xs`, font-semibold, uppercase, tracking-wider.
* **Button Labels**: `text-xs sm:text-sm md:text-base`, font-semibold.

---

## 3. Reusable Component Library

All reusable components are located in `src/app/components/shared/` and built with Tailwind CSS v4 and TypeScript.

### 3.1. `SectionHeader` (`SectionHeader.tsx`)
A standardized header used at the top of every landing page section (excluding Hero and Footer).

#### Props Interface
```typescript
interface SectionHeaderProps {
  /** Optional badge/tag text displayed above the title (e.g. "COMPARE", "FAQ") */
  badge?: string | React.ReactNode;
  /** Badge color variant */
  badgeVariant?: "soft-cyan" | "outline" | "navy" | "white";
  /** Main section heading */
  title: string | React.ReactNode;
  /** Substring within title to highlight in Primary 1 (#05C8E8) */
  highlight?: string;
  /** Optional descriptive paragraph below title */
  description?: string | React.ReactNode;
  /** Alignment of header content: "center" | "left" | "right" (default: "center") */
  align?: "center" | "left" | "right";
  /** HTML Heading level for accessibility (default: "h2") */
  as?: "h1" | "h2" | "h3" | "h4";
  /** Max width constraint (default: "2xl") */
  maxWidth?: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "full";
  className?: string;
  titleClassName?: string;
  descriptionClassName?: string;
}
```

#### Usage Examples

**Centered Header with Badge & Description:**
```tsx
import SectionHeader from "@/app/components/shared/SectionHeader";

<SectionHeader
  badge="COMPARE"
  title="Compare personal loan rates from top lender."
  description="Check personalized offers with soft credit check with no impact on your credit score."
  align="center"
/>
```

**Header with Highlighted Accent Text:**
```tsx
<SectionHeader
  badge="CALCULATE YOUR SAVING"
  title="Calculate Your Savings with Clear Credit AI"
  highlight="Clear Credit AI"
  align="center"
/>
```

**Left-Aligned Header (e.g. "Our services"):**
```tsx
<SectionHeader
  title="Our services"
  description="Comprehensive loan and credit management tools tailored for you."
  align="left"
/>
```

---

### 3.2. `Button` (`Button.tsx`)
A versatile, accessible button supporting primary, secondary, outline, ghost, and phone CTA variants with minimum 44px tap targets for mobile.

#### Props Interface
```typescript
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "phone" | "soft";
  size?: "sm" | "md" | "lg";
  href?: string;             // If provided, automatically renders Next.js Link or tel/external anchor
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  fullWidth?: boolean;
  isLoading?: boolean;
}
```

#### Usage Examples
```tsx
import Button from "@/app/components/shared/Button";

// Primary Action Button (Cyan #05C8E8)
<Button variant="primary" size="md">
  Check Rates Now
</Button>

// Secondary Dark Button (#1A4048)
<Button variant="secondary" size="md">
  Learn More
</Button>

// Phone CTA Button (with phone icon and clickable link)
<Button variant="phone" href="tel:1-844-208-1100">
  1-844-208-1100
</Button>

// Full Width Mobile Button
<Button variant="primary" fullWidth size="lg">
  Get Started
</Button>
```

---

### 3.3. `Badge` (`Badge.tsx`)
Pill tag component for section badges, feature categories, and statuses.

```tsx
import Badge from "@/app/components/shared/Badge";

<Badge variant="soft-cyan">WHY CHOOSE CLEAR CREDIT</Badge>
<Badge variant="outline">FAQ</Badge>
```

---

### 3.4. `Container` (`Container.tsx`)
Standard responsive layout boundary ensuring clean margins from 320px screens up to 4K displays.

```tsx
import Container from "@/app/components/shared/Container";

<Container size="7xl">
  {/* Content */}
</Container>
```

---

## 4. Standard Section Template Pattern

Every landing page section follows this clean, composable structure:

```tsx
import Container from "@/app/components/shared/Container";
import SectionHeader from "@/app/components/shared/SectionHeader";

export default function CompareRatesSection() {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white relative overflow-hidden">
      <Container size="7xl">
        {/* 1. Reusable Section Header */}
        <SectionHeader
          badge="COMPARE"
          title="Compare personal loan rates from top lender."
          description="Check personalized offers with soft credit check with no impact on your credit score."
          align="center"
        />

        {/* 2. Section Content Grid / Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8 sm:mt-12">
          {/* Cards & Items */}
        </div>
      </Container>
    </section>
  );
}
```

---

## 5. Navbar Section & Mobile Responsiveness (320px Min)

### 5.1. Desktop Behavior (>= 1024px)
* **Logo**: ClearCredit logo from `/nav-logo.png` (800x144 source aspect ratio, rendered at height 36px, width ~192px).
* **Navigation Links**:
  * `Home` (Active state: `text-primary-1 font-semibold` with bottom active line indicator).
  * `Compare Lenders`, `Saving Calculator`, `Blogs`, `Contact Us` (`text-primary-2 hover:text-primary-1 font-medium`).
* **CTA Button**: Primary cyan button with phone icon + `1-844-208-1100` (`tel:18442081100`).
* **Header Style**: Sticky header with `bg-white/95 backdrop-blur-md border-b border-primary-2/10 shadow-xs`.

### 5.2. Mobile Responsiveness Strategy (320px Minimum Screen Width)
To support ultra-compact screens like iPhone SE (320px) and Galaxy Z Fold (outer display 320px):

1. **Fluid Header Gutter Padding**: `px-3 sm:px-6 lg:px-8` ensures header elements don't get squished against screen edges.
2. **Responsive Logo Size**: Scales dynamically:
   * At 320px: `h-7 w-36` (144px width)
   * At 640px: `h-8 w-44` (176px width)
   * At 768px+: `h-9 w-48` (192px width)
3. **Dual Mobile Actions**:
   * Compact quick-call button (`40x40px`) for one-tap calling.
   * Hamburger toggle button with accessible `min-w-[44px] min-h-[44px]` tap target.
4. **Mobile Slide-Out Drawer**:
   * Uses modern dynamic viewport units: `h-[100dvh]` to avoid mobile address bar shifting.
   * Max width capped at `max-w-[320px] sm:max-w-xs`, fitting 100% of 320px viewports with zero horizontal overflow.
   * Large tap targets (`min-h-[44px]` per navigation item).
   * Active link highlighted with `bg-primary-3/70 text-primary-1 font-semibold`.
   * Prominent full-width Phone CTA button: `1-844-208-1100` with support hours.
5. **Accessibility & Interactions**:
   * `aria-expanded` and `aria-controls` bindings.
   * Background scrolling locked (`overflow: hidden`) when drawer is open.
   * Closes on Escape key press, backdrop click, or navigation item selection.

---

## 6. Landing Page Sections Breakdown (Mapped to Design Image)

1. **Header / Navbar**: Sticky responsive navigation with phone CTA (`Navbar.tsx`).
2. **Hero Section**: "Personal loans from Top Lenders, All in one place", loan input search form, partner proof bar.
3. **Compare Rates Section**:
   * Badge: `COMPARE`
   * Title: `Compare personal loan rates from top lender.`
   * Cards: Upstart, SoFi, Zable, Best Egg, Discover with APR, terms, and CTA buttons.
4. **Savings Calculator Section**:
   * Badge: `CALCULATE YOUR SAVING`
   * Title: `Calculate Your Savings with Clear Credit AI`
   * Interactive calculator widget with monthly payment breakdown.
5. **Why Choose Clear Credit AI Section**:
   * Badge: `WHY CHOOSE CLEAR CREDIT`
   * Title: `Why Choose Clear Credit AI for Your Personal Loans Needs?`
   * 3 Feature cards: "Find a Loan From Reputable Lenders in Minutes", "Your Data is Safe & Secure", "We Are Unbiased and Transparent".
6. **Our Services Section**:
   * Title: `Our services`
   * Interactive accordion / services list with expand/collapse arrows.
7. **FAQ Section**:
   * Badge: `FAQ`
   * Title: `Frequently asked questions`
   * Description: "Find quick answers to common questions about our platform."
   * Expandable FAQ accordions.
8. **Footer Section**: Dark navy (`#1A4048`) background, logo, links, disclaimer, and copyright.
