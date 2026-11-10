"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Plus, Minus } from "lucide-react";
import Container from "../shared/Container";

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

const faqsData: FaqItem[] = [
  {
    id: "interest-rate",
    question: "What interest rate can I expect?",
    answer:
      "Generally, the shorter the loan term, the lower the interest rate offered by most loan companies. Some lenders even offer an autopay discount if you authorize your monthly loan payments to be directly withdrawn from your checking account or savings account. Qualifying for lower rates offered by a lender is dependent on your online loan application, credit history and credit score, whether you get a short-term loan or a long-term loan, loan purpose, and other factors. The better your credit score, the better the interest rate you can qualify for.",
  },
  {
    id: "loan-usage",
    question: "What can I use a personal loan for?",
    answer:
      "Personal loans can be used for virtually any legitimate purpose, including debt consolidation, home improvements, medical expenses, unexpected emergencies, major purchases, or weddings. Most lenders only restrict using funds for illegal activities, post-secondary education tuition, or investments.",
  },
  {
    id: "how-to-get",
    question: "How can I get a personal loan?",
    answer:
      "Getting a personal loan with Clear Credit AI is simple: fill out a quick online form with your basic financial information, compare prequalified offers from top reputable lenders without affecting your credit score, select the loan offer that best matches your budget, and complete the lender's verification to receive your funds.",
  },
  {
    id: "what-is-loan",
    question: "What is a personal loan?",
    answer:
      "A personal loan is an installment loan provided by a bank, credit union, or online lender that gives you a lump sum of money upfront. You repay the loan over a predetermined period (typically 1 to 7 years) in fixed monthly payments with a set interest rate.",
  },
];

export const Faq = () => {
  // First item open by default matching design reference
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative overflow-hidden bg-white py-16 md:py-24">
      {/* 3. Left Bottom Decorative Circle Ring (Red Box 3) */}
      <div className="absolute -left-36 md:-left-88 bottom-6 w-72 md:w-150 aspect-square pointer-events-none select-none z-0">
        <Image
          src="/secondary-circle.png"
          alt=""
          fill
          sizes="(max-width: 768px) 300px, 600px"
          className="object-contain"
        />
      </div>

      <Container size="7xl" className="relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-primary-1 font-bold text-xs sm:text-sm tracking-[0.2em] uppercase">
            FAQ
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-[44px] font-extrabold text-primary-2 tracking-tight leading-tight">
            Frequently asked questions
          </h2>
          <p className="mt-3 text-sm sm:text-base text-primary-2/70 max-w-xl mx-auto font-normal">
            There&apos;s no such thing as too many questions
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="mt-10 sm:mt-12 max-w-4xl mx-auto space-y-4 sm:space-y-4.5">
          {faqsData.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.id}
                className={`transition-all duration-300 rounded-[20px] border ${
                  isOpen
                    ? "bg-white border-[#CCEBF0] p-6 sm:p-8 shadow-[0_4px_24px_rgba(5,200,232,0.06)]"
                    : "bg-[#EAF8FA] hover:bg-[#E2F6F9] border-[#CCEBF0] px-6 sm:px-8 py-5 sm:py-6"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between gap-4 text-left cursor-pointer select-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold text-primary-2 leading-snug">
                    {faq.question}
                  </span>
                  <div className="shrink-0">
                    {isOpen ? (
                      <Minus className="w-5 h-5 text-primary-1 stroke-3" />
                    ) : (
                      <Plus className="w-5 h-5 text-primary-1 stroke-3" />
                    )}
                  </div>
                </button>

                {isOpen && (
                  <div className="mt-4 pt-2 text-xs sm:text-sm text-primary-2/75 leading-relaxed font-normal animate-fadeIn">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default Faq;

