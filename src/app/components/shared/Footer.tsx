import React from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "./Container";

export const Footer = () => {
  return (
    <footer className="bg-primary-2 text-white pt-16 pb-12 mt-auto border-t border-primary-2-30">
      <Container size="7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-12 border-b border-white/10">
          <div className="md:col-span-1">
            <div className="relative h-8 w-44 aspect-[50/9] mb-4">
              <Image
                src="/footer-logo.png"
                alt="ClearCredit"
                fill
                sizes="176px"
                className="object-contain object-left"
              />
            </div>
            <p className="text-sm text-white/60 leading-relaxed">
              Empowering consumers to find the best personal loan offers with complete transparency and zero hidden fees.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-sm tracking-wider uppercase text-primary-3 mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm text-white/70">
              <li>
                <Link href="#compare-lenders" className="hover:text-primary-1 transition-colors">
                  Compare Lenders
                </Link>
              </li>
              <li>
                <Link href="#calculator" className="hover:text-primary-1 transition-colors">
                  Saving Calculator
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-primary-1 transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="#faq" className="hover:text-primary-1 transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm tracking-wider uppercase text-primary-3 mb-4">
              Resources
            </h4>
            <ul className="space-y-2.5 text-sm text-white/70">
              <li>
                <Link href="#blogs" className="hover:text-primary-1 transition-colors">
                  Financial Blog
                </Link>
              </li>
              <li>
                <Link href="#loan-guide" className="hover:text-primary-1 transition-colors">
                  Loan Guide
                </Link>
              </li>
              <li>
                <Link href="#terms" className="hover:text-primary-1 transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="#privacy" className="hover:text-primary-1 transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm tracking-wider uppercase text-primary-3 mb-4">
              Customer Support
            </h4>
            <p className="text-sm text-white/70 mb-2">Toll-Free Phone:</p>
            <a
              href="tel:18442081100"
              className="text-lg font-bold text-primary-1 hover:text-white transition-colors block mb-3"
            >
              1-844-208-1100
            </a>
            <p className="text-xs text-white/50 leading-relaxed">
              Monday – Friday: 9:00 AM – 8:00 PM EST
            </p>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <p>© {new Date().getFullYear()} ClearCredit Inc. All rights reserved.</p>
          <p>Personal loan offers provided through licensed lending partners.</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;