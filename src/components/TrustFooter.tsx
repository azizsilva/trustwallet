"use client";

import React from "react";
import { Send, Twitter, Facebook, Award, CheckCircle2 } from "lucide-react";

export default function TrustFooter() {
  return (
    <footer className="w-full bg-[#F5F6F8] dark:bg-slate-950 text-slate-800 dark:text-slate-200 border-t border-slate-200/80 dark:border-slate-800 pt-16 pb-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-slate-200 dark:border-slate-800">
          
          {/* Brand & Socials Column (Left) */}
          <div className="lg:col-span-4 space-y-6">
            {/* Logo */}
            <div className="flex items-center gap-2.5">
              <img
                src="/nav-logo-trust.svg"
                alt="Trust"
                className="h-7 w-auto object-contain"
              />
            </div>

            {/* Social Icons (Telegram, Facebook, X) */}
            <div className="flex items-center gap-3">
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-slate-200/80 dark:bg-slate-800 hover:bg-[#0500FF] hover:text-white text-slate-700 dark:text-slate-300 flex items-center justify-center transition shadow-sm"
                aria-label="Telegram"
              >
                <Send className="w-4 h-4 -translate-x-0.5 translate-y-0.5" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-slate-200/80 dark:bg-slate-800 hover:bg-[#0500FF] hover:text-white text-slate-700 dark:text-slate-300 flex items-center justify-center transition shadow-sm"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-slate-200/80 dark:bg-slate-800 hover:bg-[#0500FF] hover:text-white text-slate-700 dark:text-slate-300 flex items-center justify-center transition shadow-sm"
                aria-label="X Twitter"
              >
                <span className="font-bold text-xs">𝕏</span>
              </a>
            </div>

            {/* ISO & GDPR Certification Badges as shown in reference */}
            <div className="flex items-center gap-4 pt-2">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-slate-300 dark:border-slate-700 bg-white/60 dark:bg-slate-900/60 text-[11px] font-bold text-slate-600 dark:text-slate-300">
                <Award className="w-3.5 h-3.5 text-blue-600" />
                <span>ISO 27001</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-slate-300 dark:border-slate-700 bg-white/60 dark:bg-slate-900/60 text-[11px] font-bold text-slate-600 dark:text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>GDPR Compliant</span>
              </div>
            </div>
          </div>

          {/* Links Column 1: Wallet & Markets */}
          <div className="lg:col-span-2 space-y-6">
            <div className="space-y-3">
              <h4 className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                Wallet
              </h4>
              <ul className="space-y-2 text-xs font-semibold text-slate-700 dark:text-slate-300">
                <li><a href="#" className="hover:text-blue-600 transition">Mobile App</a></li>
                <li><a href="#" className="hover:text-blue-600 transition">Browser Extension</a></li>
              </ul>
            </div>

            <div className="space-y-3 pt-2">
              <h4 className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                Markets
              </h4>
              <ul className="space-y-2 text-xs font-semibold text-slate-700 dark:text-slate-300">
                <li><a href="#" className="hover:text-blue-600 transition">Prices</a></li>
                <li><a href="#" className="hover:text-blue-600 transition">Converter</a></li>
              </ul>
            </div>
          </div>

          {/* Links Column 2: Features */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
              Features
            </h4>
            <ul className="space-y-2 text-xs font-semibold text-slate-700 dark:text-slate-300">
              <li><a href="#" className="hover:text-blue-600 transition">Swaps</a></li>
              <li><a href="#" className="hover:text-blue-600 transition">Staking</a></li>
              <li><a href="#" className="hover:text-blue-600 transition">NFTs</a></li>
              <li><a href="#" className="hover:text-blue-600 transition">Security</a></li>
              <li><a href="#" className="hover:text-blue-600 transition">Buy Crypto</a></li>
              <li><a href="#" className="hover:text-blue-600 transition">RWAs</a></li>
              <li><a href="#" className="hover:text-blue-600 transition">Perps</a></li>
              <li><a href="#" className="hover:text-blue-600 transition">Prediction Markets</a></li>
            </ul>
          </div>

          {/* Links Column 3: Build & Earn */}
          <div className="lg:col-span-2 space-y-6">
            <div className="space-y-3">
              <h4 className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                Build
              </h4>
              <ul className="space-y-2 text-xs font-semibold text-slate-700 dark:text-slate-300">
                <li><a href="#" className="hover:text-blue-600 transition">Developer Docs</a></li>
                <li><a href="#" className="hover:text-blue-600 transition">Wallet Core</a></li>
                <li><a href="#" className="hover:text-blue-600 transition">Submit dApp</a></li>
              </ul>
            </div>

            <div className="space-y-3 pt-2">
              <h4 className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                Earn
              </h4>
              <ul className="space-y-2 text-xs font-semibold text-slate-700 dark:text-slate-300">
                <li><a href="#" className="hover:text-blue-600 transition">Stablecoin Earn</a></li>
                <li><a href="#" className="hover:text-blue-600 transition">USDT Earn</a></li>
                <li><a href="#" className="hover:text-blue-600 transition">USDC Earn</a></li>
              </ul>
            </div>
          </div>

          {/* Links Column 4: About & Wallets */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
              About
            </h4>
            <ul className="space-y-2 text-xs font-semibold text-slate-700 dark:text-slate-300">
              <li><a href="#" className="hover:text-blue-600 transition">About Us</a></li>
              <li><a href="#" className="hover:text-blue-600 transition">Careers</a></li>
              <li><a href="#" className="hover:text-blue-600 transition">Press Kit</a></li>
              <li><a href="#" className="hover:text-blue-600 transition">Blog</a></li>
              <li><a href="#" className="hover:text-blue-600 transition">Glossary</a></li>
              <li><a href="#" className="hover:text-blue-600 transition">Compare Wallets</a></li>
              <li><a href="#" className="hover:text-blue-600 transition">Trust Squad</a></li>
              <li><a href="#" className="hover:text-blue-600 transition">Contact Us</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Legal Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
          <div className="flex flex-wrap items-center gap-6">
            <span>© Trust 2026</span>
            <a href="#" className="hover:text-blue-600 transition">Privacy Notice</a>
            <a href="#" className="hover:text-blue-600 transition">Terms of Service</a>
            <a href="#" className="hover:text-blue-600 transition">Cookie Notice</a>
          </div>

          <div className="text-[11px] text-slate-400">
            Inspired by modern non-custodial decentralized web architecture.
          </div>
        </div>

      </div>
    </footer>
  );
}
