"use client";

import React from "react";
import { Star, ArrowRight } from "lucide-react";

export default function TrustHero() {
  return (
    <div className="w-full px-3 sm:px-6 pt-3 pb-8 sm:pb-12">
      {/* Giant White Rounded Container matching Trust Wallet design */}
      <section className="max-w-6xl mx-auto bg-white dark:bg-slate-900 rounded-[32px] sm:rounded-[52px] border border-slate-200/70 dark:border-slate-800 shadow-sm pt-10 sm:pt-18 pb-10 sm:pb-12 px-4 sm:px-8 relative overflow-hidden transition-all">
        
        {/* Centered Heading */}
        <div className="max-w-3xl mx-auto text-center space-y-4 sm:space-y-5">
          <h1 className="text-3xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.08]">
            The crypto wallet <br className="hidden sm:inline" />
            you control
          </h1>

          {/* Centered Subtitle */}
          <p className="text-sm sm:text-lg md:text-xl text-slate-600 dark:text-slate-300 font-normal max-w-2xl mx-auto leading-relaxed">
            Trust Wallet is a self-custody crypto wallet for iOS, Android and 
            your browser. Buy, swap, stake and explore Web3 across 100+ 
            blockchains while your private keys stay on your device.
          </p>

          {/* Royal Blue Download / Launch Onboarding Pill Button */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <a
              href="#onboarding"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-sm sm:text-base font-bold text-white bg-[#0500FF] hover:bg-[#0000cc] shadow-lg shadow-blue-600/30 hover:scale-105 active:scale-95 transition-all"
            >
              <span>Download</span>
            </a>
          </div>
        </div>

        {/* Centered iPhone Hero Asset from public/iphone-hero.png */}
        <div className="pt-8 sm:pt-12 pb-6 sm:pb-10 flex justify-center">
          <img
            src="/iphone-hero.png"
            alt="Trust Wallet iPhone Interface"
            className="w-full max-w-[320px] sm:max-w-[400px] h-auto object-contain drop-shadow-2xl hover:scale-[1.02] transition-transform duration-300 select-none"
          />
        </div>

        {/* Bottom Proof Section: App Store & Google Play Ratings (as in Trust Wallet screenshot) */}
        <div className="max-w-4xl mx-auto border-t border-slate-100 dark:border-slate-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          
          <div className="flex flex-col sm:flex-row items-center sm:items-center gap-4 sm:gap-8 text-center sm:text-left">
            <div>
              <p className="text-[10px] sm:text-[11px] font-bold tracking-widest text-slate-400 uppercase">
                TOP RATED CRYPTO WALLET
              </p>
            </div>

            <div className="flex items-center gap-6 sm:gap-8">
              {/* App Store Rating */}
              <div className="flex items-center gap-2.5 sm:gap-3">
                <div className="w-8 h-8 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-600 font-bold text-sm">
                  
                </div>
                <div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-xs sm:text-sm font-extrabold text-slate-900 dark:text-white">4.7</span>
                    <span className="text-[10px] sm:text-xs text-slate-400">/5</span>
                  </div>
                  <div className="flex items-center gap-0.5 text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-2.5 h-2.5 fill-amber-500 text-amber-500" />
                    ))}
                  </div>
                </div>
              </div>

              {/* Google Play Rating */}
              <div className="flex items-center gap-2.5 sm:gap-3">
                <div className="w-8 h-8 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-600 font-bold text-xs">
                  ▶
                </div>
                <div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-xs sm:text-sm font-extrabold text-slate-900 dark:text-white">4.6</span>
                    <span className="text-[10px] sm:text-xs text-slate-400">/5</span>
                  </div>
                  <div className="flex items-center gap-0.5 text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-2.5 h-2.5 fill-amber-500 text-amber-500" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 text-center sm:text-right">
            <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
            <span>Audited & Verified Non-Custodial Architecture</span>
          </div>

        </div>

      </section>
    </div>
  );
}
