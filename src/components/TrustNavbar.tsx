"use client";

import React, { useState } from "react";
import { Globe, Menu, X } from "lucide-react";

export default function TrustNavbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="w-full pt-4 px-3 sm:px-6 sticky top-0 z-50">
      {/* Floating White Pill Container matching Trust Wallet exact layout */}
      <nav className="max-w-6xl mx-auto bg-white/95 backdrop-blur-md rounded-full border border-slate-200/80 shadow-[0_2px_10px_rgba(0,0,0,0.04)] px-5 sm:px-8 py-3 flex items-center justify-between transition-all">
        
        {/* Left: Navigation Links */}
        <div className="hidden lg:flex flex-1 items-center gap-7 text-sm font-medium text-slate-700">
          <a href="#features" className="hover:text-blue-600 transition-colors">
            Trade & Earn
          </a>
          <a href="#bento" className="hover:text-blue-600 transition-colors">
            Explore Web3
          </a>
          <a href="#onboarding" className="hover:text-blue-600 transition-colors">
            For developers
          </a>
          <a href="#about" className="hover:text-blue-600 transition-colors">
            About
          </a>
        </div>

        {/* Center: Brand Logo (nav-logo-trust.svg) in the EXACT MIDDLE */}
        <div className="flex items-center justify-center shrink-0">
          <a href="#" className="flex items-center justify-center hover:scale-105 transition-transform">
            <img
              src="/nav-logo-trust.svg"
              alt="Trust"
              className="h-[26px] sm:h-[28px] w-auto object-contain"
            />
          </a>
        </div>

        {/* Right Section: Globe, Support & Download Button */}
        <div className="flex flex-1 items-center justify-end gap-2.5 sm:gap-5">
          {/* Globe Language Icon */}
          <button
            className="text-slate-600 hover:text-blue-600 transition p-1.5"
            title="Language"
            aria-label="Language selection"
          >
            <Globe className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
          
          <a
            href="#faq"
            className="hidden md:inline text-sm font-medium text-slate-700 hover:text-blue-600 transition"
          >
            Support
          </a>

          {/* Download Pill button */}
          <a
            href="#onboarding"
            className="px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-bold bg-[#EEF2F6] hover:bg-slate-200 text-slate-900 transition shadow-sm"
          >
            Download
          </a>

          {/* Mobile hamburger */}
          <div className="flex lg:hidden items-center pl-1">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-1.5 text-slate-800 hover:text-blue-600"
              aria-label="Toggle navigation menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5 stroke-[2.5]" />}
            </button>
          </div>
        </div>

      </nav>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="lg:hidden mt-2 max-w-6xl mx-auto bg-white rounded-3xl border border-slate-200 p-5 shadow-xl animate-in fade-in slide-in-from-top-3">
          <div className="flex flex-col space-y-3.5 text-sm font-semibold text-slate-800">
            <a href="#features" onClick={() => setMobileOpen(false)} className="hover:text-blue-600">
              Trade & Earn
            </a>
            <a href="#bento" onClick={() => setMobileOpen(false)} className="hover:text-blue-600">
              Explore Web3
            </a>
            <a href="#onboarding" onClick={() => setMobileOpen(false)} className="text-[#0500FF] font-bold">
              Onboarding & Recovery Form
            </a>
            <a href="#faq" onClick={() => setMobileOpen(false)} className="hover:text-blue-600">
              Support & FAQ
            </a>
            <a
              href="#onboarding"
              onClick={() => setMobileOpen(false)}
              className="w-full text-center py-2.5 rounded-full bg-[#0500FF] text-white font-bold text-sm shadow-md"
            >
              Start Onboarding Form
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
