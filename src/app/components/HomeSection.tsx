"use client";

import React from "react";
import Hero from "./hero/Hero";
import Collaboration from "./collaboration/Collaboration";
import Lenders from "./lenders/Lenders";

const HomeSection = () => {
  return (
    <div className="w-full">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Collaboration Section */}
      <Collaboration />

      {/* 3. Lenders Section */}
      <Lenders />
    </div>
  );
};

export default HomeSection;