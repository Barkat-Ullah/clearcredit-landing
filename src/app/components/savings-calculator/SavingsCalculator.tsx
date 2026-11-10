"use client";

import React, { useState, useId } from "react";
import Image from "next/image";
import { ChevronDown, ArrowDown } from "lucide-react";
import Container from "../shared/Container";

// Amortization loan payment calculator
function calculateLoanDetails(principal: number, annualRate: number, years: number) {
  if (principal <= 0 || years <= 0) {
    return { monthlyPayment: 0, totalInterest: 0 };
  }
  const monthlyRate = annualRate / 100 / 12;
  const numPayments = years * 12;

  if (monthlyRate === 0) {
    const monthlyPayment = principal / numPayments;
    return { monthlyPayment, totalInterest: 0 };
  }

  const factor = Math.pow(1 + monthlyRate, numPayments);
  const monthlyPayment = (principal * monthlyRate * factor) / (factor - 1);
  const totalPaid = monthlyPayment * numPayments;
  const totalInterest = Math.max(0, totalPaid - principal);

  return { monthlyPayment, totalInterest };
}

interface GaugeProps {
  value: string;
  label: string;
  progressPercent?: number;
}

const CircularGauge: React.FC<GaugeProps> = ({
  value,
  label,
  progressPercent = 75,
}) => {
  const size = 96;
  const strokeWidth = 7;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset =
    circumference - (Math.min(Math.max(progressPercent, 10), 100) / 100) * circumference;

  return (
    <div className="relative w-22 h-22 sm:w-24 sm:h-24 shrink-0 flex items-center justify-center">
      <svg
        className="w-full h-full -rotate-90 transform"
        viewBox={`0 0 ${size} ${size}`}
      >
        {/* Background track circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#E5F7FA"
          strokeWidth={strokeWidth}
          fill="transparent"
        />
        {/* Active progress arc */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#05C8E8"
          strokeWidth={strokeWidth}
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          className="transition-all duration-500 ease-out"
        />
      </svg>

      {/* Center content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-1 pointer-events-none">
        <div className="flex items-center justify-center gap-0.5 text-primary-2 font-extrabold text-base sm:text-lg tracking-tight leading-none">
          <span>{value}</span>
          <ArrowDown className="w-3.5 h-3.5 text-emerald-500 stroke-3 shrink-0" />
        </div>
        <span className="text-[10px] sm:text-[11px] font-medium text-primary-2/70 leading-tight mt-1">
          {label}
        </span>
      </div>
    </div>
  );
};

export const SavingsCalculator = () => {
  const amountInputId = useId();

  // State matching design defaults: $1,000, 10.00%, 2 Years, 2.00%, 3 Years
  const [loanAmount, setLoanAmount] = useState<number>(1000);
  const [amountDisplay, setAmountDisplay] = useState<string>("$1,000");

  const [currentRate, setCurrentRate] = useState<number>(10.0);
  const [currentTerm, setCurrentTerm] = useState<number>(2);

  const [compareRate, setCompareRate] = useState<number>(2.0);
  const [compareTerm, setCompareTerm] = useState<number>(3);

  // Calculations
  const currentLoan = calculateLoanDetails(loanAmount, currentRate, currentTerm);
  const compareLoan = calculateLoanDetails(loanAmount, compareRate, compareTerm);

  // Rounded amounts for display matching design
  const currentMonthly = Math.round(currentLoan.monthlyPayment);
  const currentInterest = Math.round(currentLoan.totalInterest);

  const compareMonthly = Math.round(compareLoan.monthlyPayment);
  const compareInterest = Math.round(compareLoan.totalInterest);

  const interestSavings = Math.max(0, currentInterest - compareInterest);
  const monthlySavings = Math.max(0, currentMonthly - compareMonthly);

  // Interest bar calculations
  const maxInterest = Math.max(currentInterest, compareInterest, 1);
  const currentInterestPercent = Math.min(100, (currentInterest / maxInterest) * 100);
  const compareInterestPercent = Math.min(100, Math.max(12, (compareInterest / maxInterest) * 100));

  // Monthly bar calculations
  const maxMonthly = Math.max(currentMonthly, compareMonthly, 1);
  const currentMonthlyPercent = Math.min(100, (currentMonthly / maxMonthly) * 100);
  const compareMonthlyPercent = Math.min(100, Math.max(12, (compareMonthly / maxMonthly) * 100));

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawVal = e.target.value.replace(/[^0-9]/g, "");
    setAmountDisplay(rawVal ? `$${rawVal}` : "$");
    const num = parseInt(rawVal, 10);
    if (!isNaN(num)) {
      setLoanAmount(num);
    } else {
      setLoanAmount(0);
    }
  };

  const handleAmountBlur = () => {
    if (loanAmount > 0) {
      setAmountDisplay(`$${loanAmount.toLocaleString("en-US")}`);
    } else {
      setLoanAmount(1000);
      setAmountDisplay("$1,000");
    }
  };

  return (
    <section id="calculator" className="relative overflow-hidden bg-white py-16 sm:py-20 md:py-24">
      {/* Decorative Left Circle Ring (secondary-circle.png) */}
      <div className="absolute -left-16 md:-left-116 top-1/3 -translate-y-1/2 w-80 md:w-170 aspect-square pointer-events-none select-none z-0">
        <Image
          src="/secondary-circle.png"
          alt=""
          fill
          sizes="(max-width: 768px) 300px, 580px"
          className="object-contain"
        />
      </div>

      {/* Decorative Right Shadow Glow (shadow-circle.png) */}
      <div className="absolute -right-36 md:-right-104 top-2/3 -translate-y-1/2 w-80 md:w-170 aspect-square pointer-events-none select-none z-0 opacity-75">
        <Image
          src="/shadow-circle.png"
          alt=""
          fill
          sizes="(max-width: 768px) 300px, 580px"
          className="object-contain"
        />
      </div>

      <Container size="7xl" className="relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-primary-1 font-bold text-xs sm:text-sm tracking-[0.2em] uppercase">
            SAVINGS CALCULATOR
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-[46px] font-extrabold text-primary-2 tracking-tight leading-[1.18]">
            Calculate Your Savings with <br className="hidden sm:inline" />
            Clear Credit AI
          </h2>
        </div>

        {/* Calculator Main Card */}
        <div className="mt-10 sm:mt-12 max-w-155 mx-auto bg-white rounded-3xl border border-[#E2EBEF] p-6 sm:p-8 md:p-10 shadow-[0_4px_30px_rgba(26,64,72,0.06)]">
          {/* Step 1: Enter your current loan details */}
          <div>
            <h3 className="text-sm sm:text-base font-bold text-primary-2 mb-3">
              1. Enter your current loan details
            </h3>

            {/* Loan Amount Input Box */}
            <div className="border border-[#92DEEA] hover:border-primary-1 focus-within:ring-2 focus-within:ring-primary-1/20 rounded-xl px-4 py-3 flex items-center justify-between transition-all bg-white">
              <label
                htmlFor={amountInputId}
                className="text-primary-1 font-semibold text-sm sm:text-[15px] cursor-pointer select-none"
              >
                Loan Amount
              </label>
              <input
                id={amountInputId}
                type="text"
                value={amountDisplay}
                onChange={handleAmountChange}
                onBlur={handleAmountBlur}
                className="text-right font-bold text-primary-2 text-sm sm:text-base bg-transparent focus:outline-none w-36 tracking-tight"
                aria-label="Enter loan amount"
              />
            </div>

            {/* Interest Rate & Loan Term 2-Column Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mt-3">
              {/* Interest Rate */}
              <div className="border border-[#92DEEA] hover:border-primary-1 focus-within:ring-2 focus-within:ring-primary-1/20 rounded-xl px-4 py-3 flex items-center justify-between transition-all bg-white">
                <span className="text-primary-1 font-semibold text-sm sm:text-[15px] select-none">
                  Interest Rate
                </span>
                <div className="flex items-center">
                  <input
                    type="number"
                    step="0.01"
                    min="0"
                    max="100"
                    value={currentRate}
                    onChange={(e) => setCurrentRate(parseFloat(e.target.value) || 0)}
                    className="text-right font-bold text-primary-2 text-sm sm:text-base bg-transparent focus:outline-none w-16"
                    aria-label="Current interest rate"
                  />
                  <span className="text-primary-1 font-semibold text-sm sm:text-base ml-1 select-none">
                    %
                  </span>
                </div>
              </div>

              {/* Loan Term */}
              <div className="border border-[#92DEEA] hover:border-primary-1 focus-within:ring-2 focus-within:ring-primary-1/20 rounded-xl px-4 py-3 flex items-center justify-between transition-all bg-white relative">
                <span className="text-primary-1 font-semibold text-sm sm:text-[15px] select-none">
                  Loan Term
                </span>
                <div className="flex items-center gap-2">
                  <select
                    value={currentTerm}
                    onChange={(e) => setCurrentTerm(parseInt(e.target.value, 10))}
                    className="text-right font-bold text-primary-2 text-sm sm:text-base bg-transparent focus:outline-none cursor-pointer appearance-none pr-1"
                    aria-label="Current loan term"
                  >
                    <option value={1}>1 Year</option>
                    <option value={2}>2 Years</option>
                    <option value={3}>3 Years</option>
                    <option value={4}>4 Years</option>
                    <option value={5}>5 Years</option>
                    <option value={7}>7 Years</option>
                  </select>
                  <div className="h-4 w-px bg-primary-2/20" />
                  <ChevronDown className="w-4 h-4 text-primary-1 stroke-[2.5] pointer-events-none" />
                </div>
              </div>
            </div>
          </div>

          {/* Step 2: Choose a rate to compare */}
          <div className="mt-7">
            <h3 className="text-sm sm:text-base font-bold text-primary-2">
              2. Choose a rate to compare
            </h3>
            <p className="text-xs sm:text-[13px] text-primary-2/75 mt-1 mb-3">
              Our lender rates vary from{" "}
              <span className="font-bold text-primary-2">5.20%</span> to{" "}
              <span className="font-bold text-primary-2">35.99% APR</span>
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {/* Interest Rate */}
              <div className="border border-[#92DEEA] hover:border-primary-1 focus-within:ring-2 focus-within:ring-primary-1/20 rounded-xl px-4 py-3 flex items-center justify-between transition-all bg-white">
                <span className="text-primary-1 font-semibold text-sm sm:text-[15px] select-none">
                  Interest Rate
                </span>
                <div className="flex items-center">
                  <input
                    type="number"
                    step="0.01"
                    min="0"
                    max="100"
                    value={compareRate}
                    onChange={(e) => setCompareRate(parseFloat(e.target.value) || 0)}
                    className="text-right font-bold text-primary-2 text-sm sm:text-base bg-transparent focus:outline-none w-16"
                    aria-label="Compare interest rate"
                  />
                  <span className="text-primary-1 font-semibold text-sm sm:text-base ml-1 select-none">
                    %
                  </span>
                </div>
              </div>

              {/* Loan Term */}
              <div className="border border-[#92DEEA] hover:border-primary-1 focus-within:ring-2 focus-within:ring-primary-1/20 rounded-xl px-4 py-3 flex items-center justify-between transition-all bg-white relative">
                <span className="text-primary-1 font-semibold text-sm sm:text-[15px] select-none">
                  Loan Term
                </span>
                <div className="flex items-center gap-2">
                  <select
                    value={compareTerm}
                    onChange={(e) => setCompareTerm(parseInt(e.target.value, 10))}
                    className="text-right font-bold text-primary-2 text-sm sm:text-base bg-transparent focus:outline-none cursor-pointer appearance-none pr-1"
                    aria-label="Compare loan term"
                  >
                    <option value={1}>1 Year</option>
                    <option value={2}>2 Years</option>
                    <option value={3}>3 Years</option>
                    <option value={4}>4 Years</option>
                    <option value={5}>5 Years</option>
                    <option value={7}>7 Years</option>
                  </select>
                  <div className="h-4 w-px bg-primary-2/20" />
                  <ChevronDown className="w-4 h-4 text-primary-1 stroke-[2.5] pointer-events-none" />
                </div>
              </div>
            </div>
          </div>

          {/* Step 3: Check the results */}
          <div className="mt-7">
            <h3 className="text-sm sm:text-base font-bold text-primary-2 mb-1.5">
              3. Check the results
            </h3>
            <p className="text-xs sm:text-[13px] text-primary-2/80 leading-relaxed">
              With an interest rate of{" "}
              <span className="font-bold text-primary-2">
                {compareRate.toFixed(2)}%
              </span>{" "}
              over{" "}
              <span className="font-bold text-primary-2">
                {compareTerm} {compareTerm === 1 ? "Year" : "Years"}
              </span>
              , you will pay{" "}
              <span className="font-bold text-primary-2">
                ${compareMonthly.toLocaleString()}
              </span>{" "}
              per month and{" "}
              <span className="font-bold text-primary-2">
                ${compareInterest.toLocaleString()}
              </span>{" "}
              in interest over the lifetime of your loan.
            </p>
          </div>

          {/* Comparison Gauges & Progress Bars */}
          <div className="mt-8 space-y-6">
            {/* Stat 1: Total Interest */}
            <div className="flex items-center gap-4 sm:gap-6">
              <CircularGauge
                value={`$${interestSavings.toLocaleString()}`}
                label="Less in interest"
                progressPercent={70}
              />

              <div className="flex-1 min-w-0">
                {/* Legend */}
                <div className="flex items-center justify-center sm:justify-start gap-4 mb-2 text-xs font-semibold text-primary-2">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-xs bg-[#1A4048]" />
                    <span>New Loan</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-xs bg-[#05C8E8]" />
                    <span>Current Loan</span>
                  </div>
                </div>

                {/* Progress Bars */}
                <div className="space-y-2">
                  {/* New Loan Interest */}
                  <div className="flex items-center gap-3">
                    <span className="w-10 sm:w-11 text-left font-bold text-primary-2 text-xs sm:text-sm">
                      ${compareInterest.toLocaleString()}
                    </span>
                    <div className="flex-1 h-2.5 sm:h-3 bg-[#E5F7FA] rounded-full overflow-hidden">
                      <div
                        className="h-full bg-[#1A4048] rounded-full transition-all duration-500"
                        style={{ width: `${compareInterestPercent}%` }}
                      />
                    </div>
                  </div>

                  {/* Current Loan Interest */}
                  <div className="flex items-center gap-3">
                    <span className="w-10 sm:w-11 text-left font-bold text-primary-2 text-xs sm:text-sm">
                      ${currentInterest.toLocaleString()}
                    </span>
                    <div className="flex-1 h-2.5 sm:h-3 bg-[#E5F7FA] rounded-full overflow-hidden">
                      <div
                        className="h-full bg-[#05C8E8] rounded-full transition-all duration-500"
                        style={{ width: `${currentInterestPercent}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Stat 2: Monthly Payment */}
            <div className="flex items-center gap-4 sm:gap-6 pt-2">
              <CircularGauge
                value={`$${monthlySavings.toLocaleString()}`}
                label="Less per month"
                progressPercent={65}
              />

              <div className="flex-1 min-w-0">
                {/* Legend */}
                <div className="flex items-center justify-center sm:justify-start gap-4 mb-2 text-xs font-semibold text-primary-2">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-xs bg-[#05C8E8]" />
                    <span>New Loan</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-xs bg-[#1A4048]" />
                    <span>Current Loan</span>
                  </div>
                </div>

                {/* Progress Bars */}
                <div className="space-y-2">
                  {/* New Loan Monthly */}
                  <div className="flex items-center gap-3">
                    <span className="w-10 sm:w-11 text-left font-bold text-primary-2 text-xs sm:text-sm">
                      ${compareMonthly.toLocaleString()}
                    </span>
                    <div className="flex-1 h-2.5 sm:h-3 bg-[#E5F7FA] rounded-full overflow-hidden">
                      <div
                        className="h-full bg-[#1A4048] rounded-full transition-all duration-500"
                        style={{ width: `${compareMonthlyPercent}%` }}
                      />
                    </div>
                  </div>

                  {/* Current Loan Monthly */}
                  <div className="flex items-center gap-3">
                    <span className="w-10 sm:w-11 text-left font-bold text-primary-2 text-xs sm:text-sm">
                      ${currentMonthly.toLocaleString()}
                    </span>
                    <div className="flex-1 h-2.5 sm:h-3 bg-[#E5F7FA] rounded-full overflow-hidden">
                      <div
                        className="h-full bg-[#05C8E8] rounded-full transition-all duration-500"
                        style={{ width: `${currentMonthlyPercent}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Check Rates CTA Button */}
          <button
            type="button"
            className="mt-8 w-full bg-primary-2 hover:bg-primary-2-hover text-white font-semibold text-sm sm:text-base py-3.5 sm:py-4 rounded-xl shadow-xs hover:shadow-md transition-all active:scale-[0.99] cursor-pointer"
          >
            Check Rates
          </button>

          {/* Footnote Disclaimer */}
          <p className="mt-4 text-center text-[11px] sm:text-xs text-primary-2/70 font-normal leading-normal">
            Checking rate won&apos;t affect your credit score. Calculator results are
            for illustrative purposes only.
          </p>
        </div>
      </Container>
    </section>
  );
};

export default SavingsCalculator;

