"use client";

import Navbar from "./components/shared/Navbar";
import HomeSection from "./components/HomeSection";
import Footer from "./components/shared/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white overflow-x-hidden">
      <Navbar />
      <main className="flex-1">
        <HomeSection />
      </main>
      <Footer />
    </div>
  );
}
