"use client";

import Hero from "./hero/Hero";
import Collaboration from "./collaboration/Collaboration";
import Lenders from "./lenders/Lenders";
import SavingsCalculator from "./savings-calculator/SavingsCalculator";
import WhyChoose from "./why-choose/WhyChoose";

const HomeSection = () => {
  return (
    <div className="w-full">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Collaboration Section */}
      <Collaboration />

      {/* 3. Lenders Section */}
      <Lenders />

      {/* 4. Savings Calculator Section */}
      <SavingsCalculator />

      {/* 5. Why Choose Clear Credit Section */}
      <WhyChoose />
    </div>
  );
};

export default HomeSection;
