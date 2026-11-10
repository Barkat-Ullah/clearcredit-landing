"use client";

import React from "react";
import { ArrowRight, ShieldCheck, Search } from "lucide-react";
import Container from "../shared/Container";

// Stylized Hand with Dollar Sign icon matching design crop
const HandCoinsIcon = ({ className = "w-7 h-7 text-primary-1" }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    {/* Dollar symbol */}
    <path d="M12 4v8" />
    <path d="M14 6c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2 2 .9 2 2-.9 2-2 2-2-.9-2-2" />
    {/* Left cupped hand */}
    <path d="M6 10v3a4 4 0 0 0 4 4h1" />
    <path d="M8 8v4a2 2 0 0 0 2 2h1" />
    <path d="M11 17v3" />
    {/* Right cupped hand */}
    <path d="M18 10v3a4 4 0 0 1-4 4h-1" />
    <path d="M16 8v4a2 2 0 0 1-2 2h-1" />
    <path d="M13 17v3" />
  </svg>
);

interface FeatureCardData {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  isPrimaryButton?: boolean;
}

const features: FeatureCardData[] = [
  {
    id: "find-loan",
    icon: <HandCoinsIcon className="w-7 h-7 text-primary-1 stroke-[2.2]" />,
    title: "Find a Loan from Reputable Lenders in Minutes",
    description:
      "Whether you're seeking to consolidate debt or address an unexpected financial need, Clear Credit AI simplifies the process of finding a personal loan tailored to your unique circumstances. We connect you with reputable lenders quickly and effortlessly.",
    isPrimaryButton: true, // Solid dark navy button
  },
  {
    id: "safe-secure",
    icon: <ShieldCheck className="w-7 h-7 text-primary-1 stroke-[2.2]" />,
    title: "Your Data Is Safe & Secure",
    description:
      "Your privacy matters to us. When you check your prequalified rates from multiple lenders on Clear Credit AI, rest assured that it's 100% free, and your data is never shared or sold to lenders. Your financial information remains confidential and secure.",
    isPrimaryButton: false, // Cyan outline button
  },
  {
    id: "unbiased-transparent",
    icon: <Search className="w-7 h-7 text-primary-1 stroke-[2.4]" />,
    title: "We Are Unbiased and Transparent",
    description:
      "At Clear Credit AI, we don't play favorites or accept payments to promote specific loan products. Our commitment to transparency means you'll always have a clear understanding of the costs involved. Before selecting a lender, you'll know precisely how your loan breaks down, with no hidden fees or surprises.",
    isPrimaryButton: false, // Cyan outline button
  },
];

export const WhyChoose = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#FEFEFF] via-[#F8FDFF] to-[#F0FAFD] py-16 sm:py-20 md:py-24">
      <Container size="7xl" className="relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-primary-1 font-bold text-xs sm:text-sm tracking-[0.2em] uppercase">
            EASY, SIMPLE, FREE
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-[44px] font-extrabold text-primary-2 tracking-tight leading-[1.2]">
            Why Choose Clear Credit AI <br className="hidden sm:inline" />
            for Your Personal Loans Needs?
          </h2>
          <p className="mt-3.5 text-sm sm:text-base text-primary-2/70 max-w-xl mx-auto font-normal">
            There&apos;s no such thing as too many questions
          </p>
        </div>

        {/* 3-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6 lg:gap-8 pt-10 mt-8 sm:mt-10">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="relative bg-white rounded-[24px] sm:rounded-[28px] border border-[#E5EDF0] p-6 sm:p-8 pt-10 shadow-[0_12px_36px_rgba(5,200,232,0.08)] hover:shadow-[0_18px_44px_rgba(5,200,232,0.14)] hover:border-primary-1/30 transition-all flex flex-col justify-between group"
            >
              {/* Floating Dark Navy Squircle Icon Box */}
              <div className="absolute -top-7 left-6 sm:left-8 w-14 h-14 rounded-2xl bg-primary-2 flex items-center justify-center shadow-md shadow-primary-2/20">
                {feature.icon}
              </div>

              <div>
                {/* Title */}
                <h3 className="text-xl sm:text-[22px] font-bold text-primary-2 leading-snug tracking-tight">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="mt-4 text-xs sm:text-sm text-primary-2/70 leading-relaxed font-normal">
                  {feature.description}
                </p>
              </div>

              {/* Action Button */}
              <div className="mt-8 pt-2">
                {feature.isPrimaryButton ? (
                  <button
                    type="button"
                    className="w-full bg-primary-2 hover:bg-primary-2-hover text-white text-xs sm:text-sm font-semibold py-3 px-4 rounded-xl flex items-center justify-center gap-2 shadow-xs transition-all active:scale-[0.98] cursor-pointer"
                  >
                    <span>Learn more</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>
                ) : (
                  <button
                    type="button"
                    className="w-full bg-transparent border-2 border-primary-1 hover:bg-primary-1/10 text-primary-2 text-xs sm:text-sm font-semibold py-2.5 px-4 rounded-xl flex items-center justify-center gap-2 transition-all active:scale-[0.98] cursor-pointer"
                  >
                    <span>Learn more</span>
                    <ArrowRight className="w-4 h-4 text-primary-2 transition-transform group-hover:translate-x-1" />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default WhyChoose;

