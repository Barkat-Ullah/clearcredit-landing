"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Check, ChevronDown, SlidersHorizontal, ArrowRight } from "lucide-react";
import Container from "../shared/Container";

interface LenderCardData {
  id: string;
  name: string;
  logo: string;
  rates: string;
  term: string;
  amount: string;
  isPrimaryButton?: boolean;
}

const lendersData: LenderCardData[] = [
  {
    id: "upstart",
    name: "Upstart",
    logo: "/Upstart.png",
    rates: "6.40-35.99%",
    term: "3-5 Years",
    amount: "Up to $50,000",
    isPrimaryButton: true, // Dark navy button as shown in design
  },
  {
    id: "sofi",
    name: "SoFi",
    logo: "/Sofi.png",
    rates: "6.40-35.99%",
    term: "3-5 Years",
    amount: "Up to $50,000",
    isPrimaryButton: false, // Cyan outline button
  },
  {
    id: "zable",
    name: "Zable",
    logo: "/Zable.png",
    rates: "6.40-35.99%",
    term: "3-5 Years",
    amount: "Up to $50,000",
    isPrimaryButton: false,
  },
  {
    id: "best-egg",
    name: "Best Egg",
    logo: "/Best Egg.png",
    rates: "6.40-35.99%",
    term: "3-5 Years",
    amount: "Up to $50,000",
    isPrimaryButton: false,
  },
  {
    id: "discover",
    name: "Discover",
    logo: "/Discover.png",
    rates: "6.99-24.99%",
    term: "3-7 Years",
    amount: "Up to $40,000",
    isPrimaryButton: false,
  },
];

export const Lenders = () => {
  const [filterAmount, setFilterAmount] = useState("$20,000");
  const [sortOption, setSortOption] = useState("APR");

  return (
    <section className="relative overflow-hidden bg-white py-14 sm:py-20 md:py-24">
      {/* Decorative Right Circle Ring from public/normal-circle.png */}
      <div className="absolute -right-24 sm:-right-36 md:-right-48 top-1/2 -translate-y-1/2 w-64 sm:w-[420px] md:w-[540px] aspect-square pointer-events-none select-none z-0 opacity-70">
        <Image
          src="/normal-circle.png"
          alt=""
          fill
          sizes="(max-width: 768px) 280px, 540px"
          className="object-contain"
        />
      </div>

      <Container size="7xl" className="relative z-10">
        {/* Top Header */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
          {/* Badge Pill */}
          <span className="inline-flex items-center px-4 py-1 rounded-full text-xs font-semibold text-primary-2 border border-primary-2/20 bg-white/90 shadow-2xs mb-3">
            Top Lenders
          </span>

          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-primary-2 tracking-tight">
            Compare personal loan rates from top lender.
          </h2>

          {/* Subtitle */}
          <p className="mt-2 text-sm sm:text-base text-primary-2/70 max-w-lg">
            Easily compare loan offers with rates under 35.99% and flexible terms.
          </p>

          {/* Filter Bar */}
          <div className="mt-6 sm:mt-7 flex flex-wrap items-center justify-center gap-2.5">
            {/* Amount Input */}
            <div className="relative">
              <input
                type="text"
                value={filterAmount}
                onChange={(e) => setFilterAmount(e.target.value)}
                className="h-10 px-3.5 text-sm font-medium text-primary-2 border border-primary-2/25 rounded-lg bg-white w-28 sm:w-32 text-center focus:outline-none focus:ring-2 focus:ring-primary-1 focus:border-primary-1 transition-all"
                aria-label="Filter by loan amount"
              />
            </div>

            {/* Sort Dropdown */}
            <div className="relative">
              <button
                type="button"
                onClick={() => {
                  const options = ["APR", "Term", "Amount"];
                  const nextIndex = (options.indexOf(sortOption) + 1) % options.length;
                  setSortOption(options[nextIndex]);
                }}
                className="h-10 px-3.5 text-sm font-medium text-primary-2 border border-primary-2/25 rounded-lg bg-white flex items-center gap-2 hover:border-primary-1 transition-colors cursor-pointer"
              >
                <span>{sortOption}</span>
                <ChevronDown className="w-4 h-4 text-primary-2/60" />
              </button>
            </div>

            {/* Sliders Filter Button */}
            <button
              type="button"
              className="h-10 w-10 flex items-center justify-center border border-primary-2/25 rounded-lg bg-white text-primary-2 hover:text-primary-1 hover:border-primary-1 transition-colors cursor-pointer"
              aria-label="Filter options"
            >
              <SlidersHorizontal className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Lender Cards Grid */}
        <div className="relative mt-10 sm:mt-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 xl:gap-6">
            {lendersData.slice(0, 4).map((lender) => (
              <div
                key={lender.id}
                className="bg-white rounded-2xl p-5 sm:p-6 border border-primary-2/15 shadow-xs hover:shadow-lg hover:border-primary-1/30 transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Card Logo & View Details */}
                  <div className="flex items-center justify-between gap-2 h-10">
                    <div className="relative h-7 w-28 sm:w-32">
                      <Image
                        src={lender.logo}
                        alt={lender.name}
                        fill
                        sizes="128px"
                        className="object-contain object-left"
                      />
                    </div>
                  </div>

                  <div className="text-right mt-1">
                    <Link
                      href={`#details-${lender.id}`}
                      className="text-xs font-medium text-primary-1 hover:underline"
                    >
                      View Details
                    </Link>
                  </div>

                  {/* Divider */}
                  <div className="my-4 border-t border-primary-2/10" />

                  {/* Attributes Checklist */}
                  <div className="space-y-2.5 text-xs sm:text-sm text-primary-2/80">
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-1.5">
                        <Check className="w-3.5 h-3.5 text-primary-2/50 stroke-[2.5]" />
                        Rates from (APR)
                      </span>
                      <span className="font-semibold text-primary-2">{lender.rates}</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-1.5">
                        <Check className="w-3.5 h-3.5 text-primary-2/50 stroke-[2.5]" />
                        Loan term
                      </span>
                      <span className="font-semibold text-primary-2">{lender.term}</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-1.5">
                        <Check className="w-3.5 h-3.5 text-primary-2/50 stroke-[2.5]" />
                        Loan amount
                      </span>
                      <span className="font-semibold text-primary-2">{lender.amount}</span>
                    </div>
                  </div>
                </div>

                {/* Card CTA Button */}
                <div className="mt-6 pt-2">
                  {lender.isPrimaryButton ? (
                    <button
                      type="button"
                      className="w-full bg-primary-2 hover:bg-primary-2-hover text-white text-xs sm:text-sm font-semibold py-2.5 px-4 rounded-xl shadow-xs transition-all active:scale-[0.98] cursor-pointer"
                    >
                      Find My Rate
                    </button>
                  ) : (
                    <button
                      type="button"
                      className="w-full bg-transparent border-2 border-primary-1 text-primary-2 hover:bg-primary-3/30 text-xs sm:text-sm font-semibold py-2.5 px-4 rounded-xl shadow-xs transition-all active:scale-[0.98] cursor-pointer"
                    >
                      Find My Rate
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Floating Right Navigation Arrow (peek carousel visual from design) */}
          <div className="hidden xl:flex absolute -right-5 top-1/2 -translate-y-1/2 z-20">
            <button
              type="button"
              className="w-11 h-11 rounded-full bg-primary-1 hover:bg-primary-1-hover text-white flex items-center justify-center shadow-lg shadow-primary-1/30 transition-transform active:scale-95 cursor-pointer"
              aria-label="Next lender offer"
            >
              <ArrowRight className="w-5 h-5 stroke-[2.5]" />
            </button>
          </div>
        </div>

        {/* View All Button */}
        <div className="mt-10 sm:mt-12 flex justify-center">
          <button
            type="button"
            className="bg-primary-2 hover:bg-primary-2-hover text-white font-semibold text-sm sm:text-base px-10 py-3 rounded-xl shadow-sm transition-all active:scale-[0.98] cursor-pointer"
          >
            View All
          </button>
        </div>
      </Container>
    </section>
  );
};

export default Lenders;
