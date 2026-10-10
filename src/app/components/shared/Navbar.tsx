"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, Menu, X, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface NavItem {
  label: string;
  href: string;
  active?: boolean;
}

const navItems: NavItem[] = [
  { label: "Home", href: "/", active: true },
  { label: "Compare Lenders", href: "#compare-lenders" },
  { label: "Saving Calculator", href: "#calculator" },
  { label: "Blogs", href: "#blogs" },
  { label: "Contact Us", href: "#contact-us" },
];

const PHONE_NUMBER = "1-844-208-1100";
const PHONE_HREF = `tel:${PHONE_NUMBER.replace(/[^0-9]/g, "")}`;

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll detection for glassmorphism border and shadow
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isMobileMenuOpen]);

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md transition-all duration-200",
          isScrolled
            ? "border-b border-primary-2/10 shadow-xs py-2.5 sm:py-3"
            : "border-b border-primary-2/5 py-3 sm:py-4 md:py-5"
        )}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-2 sm:gap-4">
            {/* Logo */}
            <div className="flex items-center shrink-0">
              <Link
                href="/"
                className="group flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-1 rounded-lg"
                aria-label="ClearCredit Home"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <div className="relative h-7 sm:h-8 md:h-9 w-36 sm:w-44 md:w-48 aspect-[50/9]">
                  <Image
                    src="/nav-logo.png"
                    alt="ClearCredit"
                    fill
                    sizes="(max-width: 640px) 144px, (max-width: 768px) 176px, 192px"
                    priority
                    className="object-contain object-left transition-transform duration-200 group-hover:scale-[1.02]"
                  />
                </div>
              </Link>
            </div>

            {/* Desktop Navigation Links */}
            <nav
              className="hidden lg:flex items-center gap-6 xl:gap-8"
              aria-label="Main Navigation"
            >
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={cn(
                    "text-sm xl:text-[15px] transition-colors duration-200 py-1.5 relative select-none",
                    item.active
                      ? "text-primary-1 font-semibold"
                      : "text-primary-2 font-medium hover:text-primary-1"
                  )}
                >
                  {item.label}
                  {item.active && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-1 rounded-full" />
                  )}
                </Link>
              ))}
            </nav>

            {/* Desktop Right CTA: Phone Button */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href={PHONE_HREF}
                className={cn(
                  "inline-flex items-center justify-center gap-2",
                  "bg-primary-1 hover:bg-primary-1-hover text-white",
                  "text-xs sm:text-sm font-semibold rounded-xl",
                  "px-3.5 sm:px-4 md:px-5 py-2.5",
                  "min-h-[44px] shadow-sm hover:shadow-md hover:shadow-primary-1/25",
                  "transition-all duration-200 active:scale-[0.98]",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-1 focus-visible:ring-offset-2"
                )}
                aria-label={`Call us at ${PHONE_NUMBER}`}
              >
                <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-white shrink-0" />
                <span className="tracking-tight whitespace-nowrap">{PHONE_NUMBER}</span>
              </a>
            </div>

            {/* Mobile Actions: Phone quick-call & Hamburger Button */}
            <div className="flex sm:hidden items-center gap-1.5">
              {/* Quick Call Icon Button on Mobile */}
              <a
                href={PHONE_HREF}
                className="inline-flex sm:hidden items-center justify-center w-10 h-10 rounded-lg bg-primary-1 text-white hover:bg-primary-1-hover transition-colors active:scale-95"
                aria-label={`Call ${PHONE_NUMBER}`}
                title={`Call ${PHONE_NUMBER}`}
              >
                <Phone className="w-4 h-4 fill-white" />
              </a>

              {/* Hamburger Menu Toggle Button (Min 44px tap target) */}
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen((prev) => !prev)}
                className="inline-flex items-center justify-center min-w-[44px] min-h-[44px] w-11 h-11 rounded-lg text-primary-2 hover:bg-primary-3/50 hover:text-primary-1 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-1 cursor-pointer"
                aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-navigation-drawer"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6 stroke-[2.2]" />
                ) : (
                  <Menu className="w-6 h-6 stroke-[2.2]" />
                )}
              </button>
            </div>

            {/* Tablet/Medium Screen Hamburger Toggle (640px to 1023px) */}
            <div className="hidden sm:flex lg:hidden items-center">
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen((prev) => !prev)}
                className="inline-flex items-center justify-center min-w-[44px] min-h-[44px] w-11 h-11 rounded-lg text-primary-2 hover:bg-primary-3/50 hover:text-primary-1 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-1 cursor-pointer"
                aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-navigation-drawer"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6 stroke-[2.2]" />
                ) : (
                  <Menu className="w-6 h-6 stroke-[2.2]" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer / Overlay */}
      {isMobileMenuOpen && (
        <div
          id="mobile-navigation-drawer"
          className="fixed inset-0 z-50 lg:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation Menu"
        >
          {/* Dimmed Backdrop */}
          <div
            className="fixed inset-0 bg-primary-2/40 backdrop-blur-xs transition-opacity animate-in fade-in duration-200"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Slide-out Drawer (Ensuring min 320px viewport perfection) */}
          <div
            className={cn(
              "fixed inset-y-0 right-0 w-full max-w-[320px] sm:max-w-xs",
              "bg-white shadow-2xl flex flex-col justify-between",
              "p-4 sm:p-6 overflow-y-auto z-50",
              "animate-in slide-in-from-right duration-250 ease-out"
            )}
          >
            {/* Top Bar with Logo and Close Button */}
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-primary-2/10">
                <div className="relative h-7 w-36 aspect-[50/9]">
                  <Image
                    src="/nav-logo.png"
                    alt="ClearCredit"
                    fill
                    sizes="144px"
                    className="object-contain object-left"
                  />
                </div>
                <button
                  type="button"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="inline-flex items-center justify-center min-w-[40px] min-h-[40px] w-10 h-10 rounded-lg text-primary-2 hover:bg-primary-3/50 hover:text-primary-1 transition-colors"
                  aria-label="Close navigation menu"
                >
                  <X className="w-5 h-5 stroke-[2.2]" />
                </button>
              </div>

              {/* Navigation Links with large touch targets */}
              <nav className="mt-5 flex flex-col gap-1.5" aria-label="Mobile Navigation Links">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={cn(
                      "flex items-center justify-between px-3.5 py-3 rounded-xl text-base font-medium transition-all duration-150 min-h-[44px]",
                      item.active
                        ? "bg-primary-3/70 text-primary-1 font-semibold border border-primary-1/20"
                        : "text-primary-2 hover:bg-primary-3/30 hover:text-primary-1"
                    )}
                  >
                    <span>{item.label}</span>
                    <ArrowRight
                      className={cn(
                        "w-4 h-4 transition-transform",
                        item.active ? "text-primary-1" : "text-primary-2/40"
                      )}
                    />
                  </Link>
                ))}
              </nav>
            </div>

            {/* Bottom Support & Phone CTA */}
            <div className="mt-8 pt-5 border-t border-primary-2/10 flex flex-col gap-3">
              <div className="bg-primary-3/30 rounded-xl p-3 border border-primary-1/10 text-center">
                <p className="text-xs font-medium text-primary-2/70">
                  Speak with a Loan Specialist
                </p>
                <p className="text-[11px] text-primary-2/50 mt-0.5">
                  Toll-Free • Mon-Fri 9AM-8PM EST
                </p>
              </div>

              <a
                href={PHONE_HREF}
                className={cn(
                  "flex items-center justify-center gap-2.5",
                  "w-full bg-primary-1 hover:bg-primary-1-hover text-white",
                  "text-base font-semibold rounded-xl",
                  "py-3.5 px-4 min-h-[48px] shadow-md shadow-primary-1/20",
                  "transition-all duration-200 active:scale-[0.98]"
                )}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Phone className="w-4 h-4 fill-white shrink-0" />
                <span className="tracking-tight">{PHONE_NUMBER}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;