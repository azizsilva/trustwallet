"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

export default function BlueCtaBanner() {
  return (
    <div className="w-full px-3 sm:px-6 py-12">
      {/* Giant Vibrant Royal Blue Container from user screenshots */}
      <div className="max-w-6xl mx-auto rounded-[32px] sm:rounded-[48px] bg-[#0500FF] text-white pt-10 sm:pt-14 px-6 sm:px-12 md:px-16 pb-0 relative overflow-hidden shadow-2xl shadow-blue-700/30">
        
        {/* Background glow highlights */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
          
          {/* Left Column: Heading, Subtitle, Download Pill, Ratings */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left pb-8 lg:pb-14">
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-white leading-[1.08]">
              The crypto wallet <br className="hidden sm:inline" />
              you control
            </h2>

            <p className="text-base sm:text-lg text-blue-100 font-medium max-w-lg mx-auto lg:mx-0">
              Take custody. Take control. Start in seconds.
            </p>

            {/* White Pill Button */}
            <div className="pt-1">
              <a
                href="#onboarding"
                className="inline-flex items-center justify-center gap-2 px-9 py-3 rounded-full text-base font-bold bg-white text-slate-900 hover:bg-slate-100 shadow-xl hover:scale-105 active:scale-95 transition-all"
              >
                <span>Download</span>
              </a>
            </div>

            {/* App Store & Google Play proofs */}
            <div className="pt-2 flex items-center justify-center lg:justify-start gap-6 text-xs sm:text-sm font-semibold text-blue-100">
              <div className="flex items-center gap-1.5">
                <span className="text-base"></span>
                <span>4.7 on App Store</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-xs">▶</span>
                <span>4.6 on Google Play</span>
              </div>
            </div>
          </div>

          {/* Right Column: iPhone Hero Asset placed at bottom edge */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end items-end overflow-hidden">
            <img
              src="/iphone-hero.png"
              alt="Trust Wallet App Interface"
              className="w-full max-w-[280px] sm:max-w-[340px] h-auto object-contain drop-shadow-2xl translate-y-4 sm:translate-y-6 lg:translate-y-8 select-none"
            />
          </div>

        </div>

      </div>
    </div>
  );
}
