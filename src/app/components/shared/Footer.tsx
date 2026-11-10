import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import Container from "./Container";

export const Footer = () => {
  return (
    <footer className="bg-primary-2 text-white rounded-t-[44px] sm:rounded-t-[60px] md:rounded-t-[80px] pt-12 sm:pt-16 md:pt-20 pb-12 sm:pb-16 mt-auto">
      <Container size="7xl">
        {/* Brand Logo */}
        <div className="mb-10 sm:mb-12">
          <div className="relative h-8 sm:h-9 w-44 sm:w-48">
            <Image
              src="/footer-logo.png"
              alt="ClearCredit"
              fill
              sizes="(max-width: 640px) 176px, 192px"
              className="object-contain object-left"
              priority
            />
          </div>
        </div>

        {/* Footer Navigation & Details Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-12 gap-8 lg:gap-10 pb-10 sm:pb-12">
          {/* Column 1: Legal Links */}
          <div className="col-span-1 lg:col-span-3">
            <ul className="space-y-3 sm:space-y-3.5 text-xs sm:text-sm text-white/90">
              <li>
                <Link href="#terms" className="hover:text-primary-1 transition-colors">
                  Terms of Use
                </Link>
              </li>
              <li>
                <Link href="#privacy" className="hover:text-primary-1 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#privacy-ca" className="hover:text-primary-1 transition-colors">
                  Privacy Statement-CA
                </Link>
              </li>
              <li>
                <Link href="#loan-policy" className="hover:text-primary-1 transition-colors">
                  Loan Policy
                </Link>
              </li>
              <li>
                <Link href="#consent" className="hover:text-primary-1 transition-colors">
                  Consent
                </Link>
              </li>
              <li>
                <Link href="#disclosure" className="hover:text-primary-1 transition-colors">
                  Disclosure
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="col-span-1 lg:col-span-3">
            <ul className="space-y-3 sm:space-y-3.5 text-xs sm:text-sm text-white/90">
              <li>
                <Link href="#about" className="hover:text-primary-1 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="#faq" className="hover:text-primary-1 transition-colors">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="#blogs" className="hover:text-primary-1 transition-colors">
                  Blogs
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div className="col-span-2 md:col-span-1 lg:col-span-3">
            <ul className="space-y-3 sm:space-y-3.5 text-xs sm:text-sm text-white/90">
              <li>
                <a
                  href="mailto:service@clearcredit.ai"
                  className="flex items-center gap-2.5 hover:text-primary-1 transition-colors group"
                >
                  <Mail className="w-4 h-4 text-white group-hover:text-primary-1 shrink-0 transition-colors" />
                  <span>service@clearcredit.ai</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+18442081100"
                  className="flex items-center gap-2.5 hover:text-primary-1 transition-colors group"
                >
                  <Phone className="w-4 h-4 text-white group-hover:text-primary-1 shrink-0 transition-colors" />
                  <span>+1-844-208-1100</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Social Icons */}
          <div className="col-span-2 md:col-span-1 lg:col-span-3">
            <span className="font-bold text-white text-xs sm:text-sm block mb-3.5">
              Follow us
            </span>
            <div className="flex items-center gap-3">
              {/* Facebook */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white text-primary-2 hover:bg-primary-1 hover:text-white flex items-center justify-center transition-colors shadow-2xs"
              >
                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white text-primary-2 hover:bg-primary-1 hover:text-white flex items-center justify-center transition-colors shadow-2xs"
              >
                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white text-primary-2 hover:bg-primary-1 hover:text-white flex items-center justify-center transition-colors shadow-2xs"
              >
                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Legal Disclaimer Divider */}
        <div className="border-t border-white/20 pt-8 sm:pt-10">
          <p className="text-[11px] sm:text-xs text-white/80 leading-relaxed font-normal">
            Clear Credit is a Utah licensed lender under the Utah Department of Financial
            Institutions and also provides loan referral services. We will attempt to qualify
            you for personal loan offers with rates of less than 35.99% with terms from 6 months
            to 84 months . All loan or credit approval, or rates and terms you may be offered,
            are solely at the discretion of any lender with which you may apply, and you should
            read all disclosures carefully. Rates and terms are based on lender discretion and
            may change at any time. Your exact rate depends on your loan amount, loan term,
            state of residence, and credit-worthiness, and will be agreed upon between you and
            the lender. Repayment example: $5,000 personal loan at 9.99% APR with a 36-month
            term would be equivalent to $161.31 per month for a total paid of $5,807.50 over
            the 36-month life of the loan. For additional loan options, please call
            1tel:194999051621100
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
