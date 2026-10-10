"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Check, Mail } from "lucide-react";
import Container from "../shared/Container";

export const Hero = () => {
  const [loanAmount, setLoanAmount] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <section className="relative overflow-hidden bg-white pt-8 sm:pt-12 md:pt-16 pb-12 sm:pb-16 md:pb-20">
      {/* Background Decorative Circle (Left Side) */}
      <div className="absolute -left-28 sm:-left-36 md:-left-44 top-1/2 -translate-y-1/2 w-72 sm:w-[480px] md:w-[580px] aspect-square pointer-events-none select-none z-0 opacity-80">
        <Image
          src="/secondary-circle.png"
          alt=""
          fill
          priority
          sizes="(max-width: 768px) 300px, 580px"
          className="object-contain"
        />
      </div>

      <Container size="7xl" className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column Content */}
          <div className="lg:col-span-6 xl:col-span-6 flex flex-col items-start max-w-xl">
            {/* Cyan Title Accent */}
            <div className="inline-block mb-1 sm:mb-2">
              <h3 className="text-xl sm:text-2xl md:text-[28px] font-bold text-primary-1 tracking-tight">
                Personal loans from
              </h3>
              <div className="h-0.5 w-full bg-primary-1 rounded-full mt-0.5" />
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-extrabold text-primary-2 leading-[1.12] tracking-tight mt-1">
              Top Lenders, <br className="hidden sm:inline" />
              All in one place.
            </h1>

            {/* Bullet Points */}
            <div className="mt-5 sm:mt-6 space-y-2.5">
              <div className="flex items-center gap-2.5 text-sm sm:text-base font-medium text-primary-2/90">
                <span className="flex items-center justify-center w-5 h-5 rounded-full bg-[#10B981] text-white shrink-0">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </span>
                <span>Rates from 5.20% - 35.99% APR1</span>
              </div>

              <div className="flex items-center gap-2.5 text-sm sm:text-base font-medium text-primary-2/90">
                <span className="flex items-center justify-center w-5 h-5 rounded-full bg-[#10B981] text-white shrink-0">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </span>
                <span>Loan amounts from $600 to $200,000</span>
              </div>
            </div>

            {/* Form Input + Submit Card */}
            <form
              onSubmit={handleSubmit}
              className="mt-6 sm:mt-8 w-full max-w-md bg-white border border-primary-2/15 rounded-xl sm:rounded-2xl p-1.5 sm:p-2 shadow-sm flex items-center justify-between gap-2 focus-within:ring-2 focus-within:ring-primary-1 focus-within:border-primary-1 transition-all"
            >
              <input
                type="text"
                value={loanAmount}
                onChange={(e) => setLoanAmount(e.target.value)}
                placeholder="Enter amount ($600 - $200,000)"
                className="w-full bg-transparent px-3 py-2 text-sm sm:text-base text-primary-2 placeholder:text-primary-2/45 focus:outline-none"
                aria-label="Enter loan amount"
              />
              <button
                type="submit"
                className="shrink-0 bg-primary-1 hover:bg-primary-1-hover text-white font-semibold text-sm sm:text-base px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg sm:rounded-xl shadow-xs transition-all active:scale-[0.98] cursor-pointer"
              >
                Submit
              </button>
            </form>

            {/* Respond to Mail Offer CTA */}
            <a
              href="#mail-offer"
              className="mt-3.5 w-full max-w-md bg-primary-1 hover:bg-primary-1-hover text-white font-semibold text-sm sm:text-base py-3 sm:py-3.5 px-6 rounded-xl sm:rounded-2xl shadow-sm hover:shadow-md hover:shadow-primary-1/25 transition-all active:scale-[0.98] flex items-center justify-center gap-2.5 text-center"
            >
              <Mail className="w-4 h-4 sm:w-5 sm:h-5 fill-white stroke-primary-1 shrink-0" />
              <span>Respond to Mail Offer</span>
            </a>

            {/* Social Proof: Avatars + Clients Count */}
            <div className="mt-7 sm:mt-9 flex items-center gap-3">
              <div className="flex -space-x-2.5 overflow-hidden">
                <Image
                  width={36}
                  height={36}
                  unoptimized
                  className="inline-block h-8 w-8 sm:h-9 sm:w-9 rounded-full ring-2 ring-white object-cover"
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80"
                  alt="Client"
                />
                <Image
                  width={36}
                  height={36}
                  unoptimized
                  className="inline-block h-8 w-8 sm:h-9 sm:w-9 rounded-full ring-2 ring-white object-cover"
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80"
                  alt="Client"
                />
                <Image
                  width={36}
                  height={36}
                  unoptimized
                  className="inline-block h-8 w-8 sm:h-9 sm:w-9 rounded-full ring-2 ring-white object-cover"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80"
                  alt="Client"
                />
                <Image
                  width={36}
                  height={36}
                  unoptimized
                  className="inline-block h-8 w-8 sm:h-9 sm:w-9 rounded-full ring-2 ring-white object-cover"
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80"
                  alt="Client"
                />
              </div>
              <span className="text-xs sm:text-sm font-semibold text-primary-2/85">
                50,000+ clients around the world
              </span>
            </div>
          </div>

          {/* Right Column Illustration */}
          <div className="lg:col-span-6 xl:col-span-6 relative flex items-center justify-center mt-6 lg:mt-0">
            <div className="relative w-full max-w-lg sm:max-w-xl lg:max-w-none aspect-[3252/2504]">
              <Image
                src="/hero-img.png"
                alt="ClearCredit Top Lenders"
                fill
                priority
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 50vw"
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
