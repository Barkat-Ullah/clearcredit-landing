"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Container from "../shared/Container";

interface ServiceItem {
  id: string;
  stepNumber: string;
  title: string;
  description: string;
}

const servicesData: ServiceItem[] = [
  {
    id: "your-information",
    stepNumber: "01.",
    title: "Your Information",
    description:
      "We'll ask you a few questions to better understand your financial situation and preferences. This helps us narrow down your lender and rate eligibility. What you receive are real rates, not mere estimates.",
  },
  {
    id: "compare-rates",
    stepNumber: "02.",
    title: "Compare Rates",
    description:
      "We'll ask you a few questions to better understand your financial situation and preferences. This helps us narrow down your lender and rate eligibility. What you receive are real rates, not mere estimates.",
  },
  {
    id: "close-loan",
    stepNumber: "03.",
    title: "Close Your Loan and Fund Your Goal",
    description:
      "We'll ask you a few questions to better understand your financial situation and preferences. This helps us narrow down your lender and rate eligibility. What you receive are real rates, not mere estimates.",
  },
  {
    id: "sign-documents",
    stepNumber: "04.",
    title: "Sign Your Documents",
    description:
      "We'll ask you a few questions to better understand your financial situation and preferences. This helps us narrow down your lender and rate eligibility. What you receive are real rates, not mere estimates.",
  },
  {
    id: "funds-on-way",
    stepNumber: "05.",
    title: "Funds on Their Way",
    description:
      "We'll ask you a few questions to better understand your financial situation and preferences. This helps us narrow down your lender and rate eligibility. What you receive are real rates, not mere estimates.",
  },
];

export const Services = () => {
  const [activeStep, setActiveStep] = useState<string>("your-information");

  return (
    <section id="services" className="relative overflow-hidden bg-white py-16 sm:py-20 md:py-24">
      {/* 1. Left Decorative Circle Ring (Red Box 1) */}
      <div className="absolute -left-36 md:-left-88 top-12 sm:top-20 w-72 md:w-150 aspect-square pointer-events-none select-none z-0">
        <Image
          src="/secondary-circle.png"
          alt=""
          fill
          sizes="(max-width: 768px) 300px, 600px"
          className="object-contain"
        />
      </div>

      {/* 2. Right Decorative Circle Ring (Red Box 2) */}
      <div className="absolute -right-36 md:-right-90 top-1/2 -translate-y-1/4 w-72 md:w-150 aspect-square pointer-events-none select-none z-0">
        <Image
          src="/secondary-circle.png"
          alt=""
          fill
          sizes="(max-width: 768px) 300px, 580px"
          className="object-contain"
        />
      </div>

      <Container size="7xl" className="relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Section Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-[44px] font-extrabold text-primary-2 tracking-tight mb-8 sm:mb-10 text-left">
            Our services
          </h2>

          {/* Service Steps Unified Card */}
          <div className="bg-white rounded-3xl sm:rounded-4xl border border-[#E2EDF1] shadow-[0_12px_40px_rgba(5,200,232,0.06)] overflow-hidden divide-y">
            {servicesData.map((item) => {
              const isActive = activeStep === item.id;

              return (
                <div
                  key={item.id}
                  onClick={() => setActiveStep(item.id)}
                  className={`p-6 sm:p-8 flex items-start sm:items-center justify-between gap-4 sm:gap-8 transition-colors cursor-pointer group ${
                    isActive ? "bg-white" : "hover:bg-[#F9FDFF]"
                  }`}
                >
                  <div className="flex items-start gap-4 sm:gap-6 min-w-0">
                    {/* Step Number (e.g. 01.) */}
                    <span className="text-primary-1 font-bold text-lg sm:text-xl shrink-0 leading-none pt-0.5 sm:pt-0">
                      {item.stepNumber}
                    </span>

                    {/* Step Content */}
                    <div className="min-w-0">
                      <h3 className="text-lg sm:text-xl font-bold text-primary-2 tracking-tight group-hover:text-primary-2 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-primary-2/70 text-xs sm:text-sm mt-1.5 leading-relaxed font-normal max-w-3xl">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Action Arrow Icon Button */}
                  <div className="shrink-0 self-center">
                    {isActive ? (
                      <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-primary-1 text-white flex items-center justify-center shadow-sm transition-all duration-300">
                        <ArrowUpRight className="w-5 h-5 stroke-[2.5]" />
                      </div>
                    ) : (
                      <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full text-primary-1 group-hover:bg-primary-1 group-hover:text-white flex items-center justify-center transition-all duration-300">
                        <ArrowUpRight className="w-5 h-5 stroke-[2.5]" />
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Services;

