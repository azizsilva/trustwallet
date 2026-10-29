"use client";

import React, { useState, useEffect } from "react";
import { Globe, Menu, X, ChevronRight, ShieldCheck, Sparkles, HelpCircle, Layers, ArrowUpRight } from "lucide-react";

export default function TrustNavbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // Close drawer on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="w-full pt-4 px-3 sm:px-6 sticky top-0 z-50">
      {/* Floating White Pill Container matching Trust Wallet exact layout */}
      <nav className="max-w-6xl mx-auto bg-white/95 backdrop-blur-md rounded-full border border-slate-200/80 shadow-[0_2px_10px_rgba(0,0,0,0.04)] px-5 sm:px-8 py-3 flex items-center justify-between transition-all">
        
        {/* Left: Desktop Navigation Links */}
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

          {/* Mobile Hamburger Trigger (Opens drawer from left) */}
          <div className="flex lg:hidden items-center pl-1">
            <button
              onClick={() => setMobileOpen(true)}
              className="p-2 -mr-1 rounded-full text-slate-800 hover:bg-slate-100 active:scale-95 transition-all"
              aria-label="Open navigation menu"
            >
              <Menu className="w-5 h-5 stroke-[2.5]" />
            </button>
          </div>
        </div>

      </nav>

      {/* ========================================================================= */}
      {/* SHADCN-STYLE ANIMATED SIDE DRAWER / SHEET (SLIDES SMOOTHLY FROM LEFT)      */}
      {/* ========================================================================= */}
      <div
        className={`fixed inset-0 z-[100] lg:hidden transition-all duration-300 ${
          mobileOpen ? "visible" : "invisible pointer-events-none delay-300"
        }`}
        aria-hidden={!mobileOpen}
      >
        {/* Backdrop / Overlay with smooth blur and fade */}
        <div
          onClick={() => setMobileOpen(false)}
          className={`fixed inset-0 bg-slate-950/60 backdrop-blur-sm transition-opacity duration-300 ease-in-out ${
            mobileOpen ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Left Side Sheet Container */}
        <aside
          className={`fixed top-0 bottom-0 left-0 w-[85%] max-w-[340px] h-full bg-white shadow-2xl flex flex-col justify-between z-[101] transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            mobileOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {/* Header with Logo + Close Button */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-slate-100">
            <a href="#" onClick={() => setMobileOpen(false)} className="flex items-center gap-2">
              <img
                src="/nav-logo-trust.svg"
                alt="Trust Wallet"
                className="h-[26px] w-auto object-contain"
              />
            </a>

            <button
              onClick={() => setMobileOpen(false)}
              className="p-2 rounded-full text-slate-500 hover:text-slate-900 hover:bg-slate-100 active:scale-90 transition-all"
              aria-label="Close navigation menu"
            >
              <X className="w-5 h-5 stroke-[2.5]" />
            </button>
          </div>

          {/* Navigation Links Scrollable Area */}
          <div className="flex-1 overflow-y-auto px-5 py-6 space-y-1">
            <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 px-3 mb-2">
              Navigation
            </p>

            <a
              href="#features"
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-between px-3.5 py-3 rounded-2xl text-[15px] font-semibold text-slate-700 hover:bg-slate-50 hover:text-blue-600 transition-all group"
            >
              <span className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Layers className="w-4 h-4" />
                </span>
                Trade & Earn
              </span>
              <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-blue-600 group-hover:translate-x-0.5 transition-all" />
            </a>

            <a
              href="#bento"
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-between px-3.5 py-3 rounded-2xl text-[15px] font-semibold text-slate-700 hover:bg-slate-50 hover:text-blue-600 transition-all group"
            >
              <span className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Sparkles className="w-4 h-4" />
                </span>
                Explore Web3
              </span>
              <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-blue-600 group-hover:translate-x-0.5 transition-all" />
            </a>

            <a
              href="#faq"
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-between px-3.5 py-3 rounded-2xl text-[15px] font-semibold text-slate-700 hover:bg-slate-50 hover:text-blue-600 transition-all group"
            >
              <span className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <HelpCircle className="w-4 h-4" />
                </span>
                Support & FAQ
              </span>
              <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-blue-600 group-hover:translate-x-0.5 transition-all" />
            </a>

            {/* Featured Section for Onboarding */}
            <div className="pt-4">
              <div className="p-4 rounded-2xl bg-gradient-to-br from-blue-50 via-indigo-50/50 to-blue-50/30 border border-blue-100">
                <div className="flex items-center gap-2 mb-1.5">
                  <ShieldCheck className="w-4 h-4 text-blue-600" />
                  <span className="text-xs font-bold text-blue-700 uppercase tracking-wide">
                    Self-Custody
                  </span>
                </div>
                <h4 className="text-sm font-bold text-slate-900 mb-1">
                  Onboarding & Recovery
                </h4>
                <p className="text-xs text-slate-500 mb-3 leading-relaxed">
                  Backup, recover or initialize your multi-chain Web3 vault in seconds.
                </p>
                <a
                  href="#onboarding"
                  onClick={() => setMobileOpen(false)}
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#0500FF] hover:bg-blue-700 text-white font-bold text-xs shadow-md shadow-blue-500/20 active:scale-[0.98] transition-all"
                >
                  <span>Start Onboarding Form</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Drawer Bottom / Footer */}
          <div className="p-5 border-t border-slate-100 bg-slate-50/60">
            <div className="flex items-center justify-between text-xs text-slate-500">
              <span className="flex items-center gap-1.5 font-medium">
                <Globe className="w-3.5 h-3.5 text-slate-400" /> English (US)
              </span>
              <span className="text-[11px] font-semibold text-slate-400 bg-slate-200/60 px-2 py-0.5 rounded-full">
                v2.1
              </span>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
