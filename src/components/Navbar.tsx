"use client";

import React, { useState } from "react";
import { Shield, ChevronRight, Menu, X, Lock, Sparkles, Globe } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-xl bg-navy-950/80 border-b border-white/10 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo Brand */}
          <div className="flex items-center gap-3">
            <a href="#" className="flex items-center gap-3 group">
              <div className="relative w-11 h-11 rounded-2xl bg-gradient-to-tr from-brand-600 to-brand-cyan p-0.5 shadow-lg shadow-brand-500/20 group-hover:shadow-brand-500/40 transition-all">
                <div className="w-full h-full bg-navy-900 rounded-[14px] flex items-center justify-center">
                  <Shield className="w-6 h-6 text-brand-cyan group-hover:scale-110 transition-transform" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-extrabold tracking-tight text-white flex items-center gap-1">
                  Trust<span className="text-brand-cyan">Vault</span>
                </span>
                <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400">
                  Secure Web System
                </span>
              </div>
            </a>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            <a href="#features" className="hover:text-brand-cyan transition-colors">
              Features
            </a>
            <a href="#portfolio" className="hover:text-brand-cyan transition-colors">
              Live Showcase
            </a>
            <a href="#security" className="hover:text-brand-cyan transition-colors">
              Security Standard
            </a>
            <a href="#onboarding-section" className="hover:text-brand-cyan transition-colors flex items-center gap-1.5 text-brand-cyan">
              <Sparkles className="w-4 h-4 text-brand-cyan animate-pulse" />
              Onboarding Form
            </a>
            <a href="#faq" className="hover:text-brand-cyan transition-colors">
              FAQ
            </a>
          </nav>

          {/* Action CTAs & Status */}
          <div className="hidden lg:flex items-center gap-4">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-navy-900 border border-emerald-500/30 text-xs font-medium text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>Multi-Chain Secure</span>
            </div>

            <a
              href="#onboarding-section"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-brand-500 to-brand-cyan hover:from-brand-600 hover:to-cyan-400 shadow-lg shadow-brand-500/25 hover:shadow-brand-500/40 hover:-translate-y-0.5 transition-all"
            >
              <span>Get Started</span>
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile hamburger */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-navy-900 text-slate-300 hover:text-white border border-white/10"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden px-4 pt-2 pb-6 bg-navy-900/95 border-b border-white/10 backdrop-blur-2xl animate-in slide-in-from-top-2">
          <div className="flex flex-col space-y-3 text-base font-medium text-slate-200">
            <a
              href="#features"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-navy-800"
            >
              Features
            </a>
            <a
              href="#portfolio"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-navy-800"
            >
              Live Showcase
            </a>
            <a
              href="#security"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-navy-800"
            >
              Security Standard
            </a>
            <a
              href="#onboarding-section"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg bg-brand-500/10 text-brand-cyan border border-brand-500/20"
            >
              Onboarding Form & Passphrase
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-navy-800"
            >
              FAQ
            </a>
            <a
              href="#onboarding-section"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center mt-2 py-3 rounded-xl font-bold text-white bg-gradient-to-r from-brand-500 to-brand-cyan"
            >
              Start Verification Form
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
