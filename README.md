# ClearCredit AI — Modern Personal Loan & Savings Platform

[![Live Demo](https://img.shields.io/badge/Demo-Live%20Website-05C8E8?style=for-the-badge&logo=vercel&logoColor=white)](https://clearcredit-page.vercel.app/)
[![Next.js](https://img.shields.io/badge/Next.js%2016-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React%2019-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript%205-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS%20v4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

> **Live Deployment:** [https://clearcredit-page.vercel.app/](https://clearcredit-page.vercel.app/)

A high-performance, pixel-perfect FinTech landing page and loan comparison platform designed for **ClearCredit AI**. Built with modern frontend engineering principles using **Next.js 16 (App Router)**, **React 19**, **TypeScript**, and **Tailwind CSS v4**.

---

## 🌟 Executive Summary for Recruiters & Hiring Managers

This project demonstrates production-grade frontend engineering, UI/UX precision, and stateful client-side logic. Key accomplishments include:

- **Pixel-Perfect Design Fidelity**: Translated high-fidelity Figma mockups into a responsive web application with custom design tokens, micro-interactions, and visual harmony.
- **Interactive Financial Engine**: Implemented a real-time loan amortization and savings calculation engine with dynamic dual-gauge visualization.
- **Modern Web Stack**: Leveraged the latest features of React 19, Next.js 16 App Router, and Tailwind CSS v4's unified `@theme` configuration.
- **Accessibility & Performance**: Built with semantic HTML5, accessible ARIA attributes (`aria-expanded`, `aria-label`), keyboard navigation, and optimized media delivery with `next/image` to ensure strong Core Web Vitals (LCP, CLS, INP).

---

## 🚀 Key Features

### 1. Interactive Loan Savings Calculator
- **Mathematical Amortization Model**: Dynamically computes monthly payments, lifetime interest, and net savings between existing debt and competitor rates.
- **Dual Gauge Visualization**: Custom SVG gauge and comparative progress bars that dynamically reflect rate and term variations.
- **Reactive State Management**: Synchronized inputs for loan amounts, interest rates (APR), and loan durations (years).

### 2. Multi-Lender Rate Comparison
- **Filter & Sort Engine**: Filter offers by customized principal thresholds and sort dynamically by APR, repayment terms, or max loan amounts.
- **Responsive Lender Grid**: Detailed cards showcasing verified lending partners (Upstart, SoFi, Zable, Best Egg, Discover) with distinct call-to-actions.

### 3. Step-by-Step Service Workflow
- **Qualification Journey**: Interactive 5-stage roadmap covering initial intake, rate comparison, closing, digital documentation, and fund disbursement.
- **Micro-Interactions**: Active item highlights and responsive arrow indicators with hover states.

### 4. Accessible FAQ Accordion
- **Collapsible Disclosure Panels**: Single-expansion toggle pattern with animated plus/minus indicators.
- **Screen Reader Support**: Structured with semantic button triggers and explicit ARIA states.

### 5. Custom Footer & Visual Identity
- **Signature Curvature**: Custom top border radius (`rounded-t-[80px]`) allowing background contrast as specified in the brand design.
- **Compliance & Disclosures**: Complete licensing disclosures, legal navigation, contact touchpoints, and social channels.

---

## 🛠️ Tech Stack & Architecture

| Layer | Technology | Purpose |
| :--- | :--- | :--- |
| **Framework** | [Next.js 16](https://nextjs.org/) (App Router) | High-performance React framework with server/client component splitting |
| **Library** | [React 19](https://react.dev/) | Component architecture, modern state management, and optimized rendering |
| **Language** | [TypeScript 5](https://www.typescriptlang.org/) | End-to-end type safety, structured interfaces, and maintainable codebase |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) | Next-generation utility-first CSS with native `@theme` design tokens |
| **Icons** | [Lucide React](https://lucide.dev/) | Clean, accessible, and tree-shakeable vector icons |
| **Deployment** | [Vercel](https://vercel.com/) | Continuous integration, edge hosting, and instant previews |

---

## 📂 Project Structure

```bash
clearcredit-page/
├── public/                     # Static assets (optimized logos, vectors, illustrations)
│   ├── footer-logo.png
│   ├── hero-img.png
│   ├── nav-logo.png
│   ├── secondary-circle.png
│   └── shadow-circle.png
├── src/
│   ├── app/
│   │   ├── (layout)/           # Grouped layout routes
│   │   ├── components/         # Modular feature components
│   │   │   ├── collaboration/  # Partner brand marquee
│   │   │   ├── Faq/            # Accordion FAQ section
│   │   │   ├── hero/           # Hero section with primary CTA
│   │   │   ├── lenders/        # Lender rate comparison cards & filter
│   │   │   ├── savings-calculator/ # Loan amortization calculator & visualizer
│   │   │   ├── Services/       # 5-step service process roadmap
│   │   │   ├── shared/         # Reusable primitives (Navbar, Footer, Container, Button)
│   │   │   ├── why-choose/     # 3-pillar value proposition cards
│   │   │   └── HomeSection.tsx # Main section composition orchestrator
│   │   ├── globals.css         # Tailwind v4 theme tokens & custom utilities
│   │   ├── layout.tsx          # Root layout & font definition
│   │   └── page.tsx            # Main landing page entry point
│   └── lib/
│       └── utils.ts            # Class merging utility (clsx + tailwind-merge)
├── package.json
├── tsconfig.json
└── README.md
```

---

## 📐 Design Tokens & Palette

The design system incorporates a curated color palette configured directly in `src/app/globals.css`:

```css
@theme {
  --color-primary-1: #05C8E8;       /* Electric Cyan (Primary Accent / CTAs) */
  --color-primary-1-hover: #04B1CC; /* Darker Cyan for interactive states */
  --color-primary-2: #1A4048;       /* Deep Navy / Dark Slate (Typography & Backgrounds) */
  --color-primary-2-hover: #122D33; /* Rich Slate Hover */
  --color-primary-3: #D5F6FA;       /* Soft Ice Blue (Subtle highlights & badges) */
  --color-brand-bg: #F8FDFF;        /* Light ambient background */
}
```

---

## 💻 Getting Started Locally

### Prerequisites
- **Node.js**: v18.18.0 or later
- **Package Manager**: `npm`, `pnpm`, `yarn`, or `bun`

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/<your-username>/clearcredit-page.git
   cd clearcredit-page
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   pnpm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open in browser:**
   Navigate to [http://localhost:3000](http://localhost:3000) to view the application.

### Production Build
To create an optimized production build:
```bash
npm run build
npm run start
```

---

## 🧪 Engineering Best Practices Implemented

- **Component Encapsulation**: Every section (`Hero`, `Lenders`, `SavingsCalculator`, `WhyChoose`, `Services`, `Faq`, `Footer`) is decoupled with clear TypeScript props and zero circular dependencies.
- **Responsive-First Layouts**: Standardized breakpoints (`sm: 640px`, `md: 768px`, `lg: 1024px`, `xl: 1280px`) ensure seamless browsing on mobile, tablet, and ultra-wide screens.
- **Defensive Error Handling**: Input validation on the financial calculator prevents NaN values, negative balances, or division-by-zero errors.
- **Zero CLS (Cumulative Layout Shift)**: Aspect-ratio preservation and defined Next.js Image sizes prevent layout shifts during image loading.

---

## 👤 Author & Contact

- **Live Application**: [https://clearcredit-page.vercel.app/](https://clearcredit-page.vercel.app/)
- **Repository**: [GitHub Repository](https://github.com/)

*Feel free to reach out for inquiries, technical discussions, or frontend opportunities!*
