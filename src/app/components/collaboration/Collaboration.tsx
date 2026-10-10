"use client";

import React, { useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Container from "../shared/Container";

interface PartnerLogo {
  name: string;
  renderLogo: () => React.ReactNode;
}

const partners: PartnerLogo[] = [
  {
    name: "Immensia",
    renderLogo: () => (
      <div className="flex items-center gap-2 text-primary-2/80 hover:text-primary-2 transition-colors">
        <svg className="w-5 h-5 sm:w-6 sm:h-6 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <line x1="9" y1="10" x2="9" y2="14" />
          <line x1="15" y1="10" x2="15" y2="14" />
        </svg>
        <span className="text-base sm:text-lg font-semibold tracking-tight">Immensia</span>
      </div>
    ),
  },
  {
    name: "MOLI",
    renderLogo: () => (
      <div className="flex items-center gap-2 text-primary-2/80 hover:text-primary-2 transition-colors">
        <svg className="w-5 h-5 sm:w-6 sm:h-6 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2a7 7 0 0 0-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 0 0-7-7z" />
          <circle cx="12" cy="9" r="2.5" />
        </svg>
        <span className="text-base sm:text-lg font-black tracking-wider uppercase font-mono">MOLI</span>
      </div>
    ),
  },
  {
    name: "fastrans",
    renderLogo: () => (
      <div className="flex items-center gap-1.5 text-primary-2/80 hover:text-primary-2 transition-colors">
        <span className="text-base sm:text-xl font-bold tracking-tighter lowercase font-sans">fastrans</span>
      </div>
    ),
  },
  {
    name: "picoli",
    renderLogo: () => (
      <div className="flex items-center gap-2 text-primary-2/80 hover:text-primary-2 transition-colors">
        <svg className="w-5 h-5 sm:w-6 sm:h-6 shrink-0 animate-spin-slow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="3" />
          <path d="M12 2v7m0 6v7m-10-8h7m6 0h7" />
        </svg>
        <span className="text-base sm:text-lg font-bold tracking-tight lowercase">picoli</span>
      </div>
    ),
  },
  {
    name: "soka",
    renderLogo: () => (
      <div className="flex items-center gap-2 text-primary-2/80 hover:text-primary-2 transition-colors">
        <svg className="w-5 h-5 sm:w-6 sm:h-6 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 12c4-8 14-8 18 0-4 8-14 8-18 0z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
        <span className="text-base sm:text-lg font-extrabold tracking-normal">soka</span>
      </div>
    ),
  },
];

export const Collaboration = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -220, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 220, behavior: "smooth" });
    }
  };

  return (
    <section className="w-full bg-[#E8F8FA]/75 border-y border-primary-1/15 py-6 sm:py-8">
      <Container size="7xl">
        {/* Section Label */}
        <h3 className="text-center text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-primary-1 mb-5 sm:mb-6">
          COLLABORATED WITH
        </h3>

        {/* Carousel & Navigation Controls */}
        <div className="relative flex items-center justify-between gap-2 sm:gap-4">
          {/* Left Navigation Button */}
          <button
            type="button"
            onClick={scrollLeft}
            aria-label="Scroll left"
            className="shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary-1 hover:bg-primary-1-hover text-white flex items-center justify-center shadow-xs transition-all active:scale-95 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-1"
          >
            <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.2]" />
          </button>

          {/* Logos Scroll Track */}
          <div
            ref={scrollRef}
            className="flex-1 flex items-center justify-start md:justify-around gap-8 sm:gap-12 md:gap-14 overflow-x-auto no-scrollbar scroll-smooth py-1 px-2 select-none"
          >
            {partners.map((partner) => (
              <div
                key={partner.name}
                className="shrink-0 opacity-85 hover:opacity-100 transition-opacity"
              >
                {partner.renderLogo()}
              </div>
            ))}
          </div>

          {/* Right Navigation Button */}
          <button
            type="button"
            onClick={scrollRight}
            aria-label="Scroll right"
            className="shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary-1 hover:bg-primary-1-hover text-white flex items-center justify-center shadow-xs transition-all active:scale-95 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-1"
          >
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.2]" />
          </button>
        </div>
      </Container>
    </section>
  );
};

export default Collaboration;
