"use client";

import React from "react";
import { PlusCircle, Compass, Box } from "lucide-react";

export default function BentoSection() {
  return (
    <section id="bento" className="w-full px-4 sm:px-6 py-12 sm:py-20 bg-[#F4F5F7] transition-colors">
      <div className="max-w-6xl mx-auto space-y-8 sm:space-y-12">
        
        {/* Section Heading matching screenshot */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-slate-900 tracking-tight leading-[1.1]">
            in crypto. One app.
          </h2>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-stretch">
          
          {/* Left Complex (8 columns on lg) */}
          <div className="lg:col-span-8 flex flex-col gap-5 sm:gap-6 justify-between">
            
            {/* Top Row: Two equal width feature cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 flex-1">
              
              {/* Card 1: Trade across markets */}
              <div className="rounded-[32px] bg-white p-7 sm:p-8 border border-slate-200/60 shadow-[0_2px_12px_rgba(0,0,0,0.03)] flex flex-col justify-between min-h-[220px] sm:min-h-[240px] hover:shadow-md transition-all">
                <div className="w-10 h-10 flex items-center justify-start text-slate-900">
                  {/* Candlestick / Slider Icon */}
                  <div className="flex items-center gap-1.5 h-6">
                    <div className="relative flex flex-col items-center h-full justify-center">
                      <span className="w-0.5 h-full bg-slate-900" />
                      <span className="absolute w-2 h-2.5 rounded-[2px] bg-slate-900 top-1" />
                    </div>
                    <div className="relative flex flex-col items-center h-full justify-center">
                      <span className="w-0.5 h-full bg-slate-900" />
                      <span className="absolute w-2 h-2.5 rounded-[2px] bg-slate-900 bottom-1" />
                    </div>
                  </div>
                </div>

                <div className="space-y-2 pt-4">
                  <h3 className="text-2xl font-black tracking-tight text-slate-900">
                    Trade across markets
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 font-medium leading-relaxed">
                    Swaps, perpetual futures, prediction markets, RWAs and more, from one interface.
                  </p>
                </div>
              </div>

              {/* Card 2: Buy crypto with your local currency */}
              <div className="rounded-[32px] bg-white p-7 sm:p-8 border border-slate-200/60 shadow-[0_2px_12px_rgba(0,0,0,0.03)] flex flex-col justify-between min-h-[220px] sm:min-h-[240px] hover:shadow-md transition-all">
                <div className="w-10 h-10 flex items-center justify-start text-slate-900">
                  <PlusCircle className="w-7 h-7 stroke-[2]" />
                </div>

                <div className="space-y-2 pt-4">
                  <h3 className="text-2xl font-black tracking-tight text-slate-900">
                    Buy crypto with your local currency
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 font-medium leading-relaxed">
                    Buy and sell crypto inside the app through integrated third-party providers, without moving funds to an exchange account.
                  </p>
                </div>
              </div>

            </div>

            {/* Bottom Row: Couch Photo + Two Small Feature Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-5 sm:gap-6 items-stretch flex-1">
              
              {/* Card 3: Couch Image (Woman relaxing with headphones) */}
              <div className="sm:col-span-5 rounded-[32px] overflow-hidden bg-slate-100 shadow-[0_2px_12px_rgba(0,0,0,0.03)] border border-slate-200/60 min-h-[220px] sm:min-h-[240px] relative">
                <img
                  src="/bento-couch.png"
                  alt="Explore Web3 from comfort"
                  className="w-full h-full object-cover object-center"
                />
              </div>

              {/* Card 4 & 5: Explore Web3 + Non-custodial */}
              <div className="sm:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                
                {/* Explore Web3 and dApps */}
                <div className="rounded-[32px] bg-white p-6 sm:p-7 border border-slate-200/60 shadow-[0_2px_12px_rgba(0,0,0,0.03)] flex flex-col justify-between min-h-[220px] sm:min-h-[240px] hover:shadow-md transition-all">
                  <div className="w-8 h-8 flex items-center justify-start text-slate-900">
                    <Compass className="w-7 h-7 stroke-[2]" />
                  </div>
                  <div className="space-y-2 pt-4">
                    <h3 className="text-xl font-black tracking-tight text-slate-900">
                      Explore Web3 and dApps
                    </h3>
                    <p className="text-xs text-slate-500 font-medium leading-relaxed">
                      Connect to DeFi apps, NFT marketplaces and Web3 games from the app or the browser extension.
                    </p>
                  </div>
                </div>

                {/* Non-custodial */}
                <div className="rounded-[32px] bg-white p-6 sm:p-7 border border-slate-200/60 shadow-[0_2px_12px_rgba(0,0,0,0.03)] flex flex-col justify-between min-h-[220px] sm:min-h-[240px] hover:shadow-md transition-all">
                  <div className="w-8 h-8 flex items-center justify-start text-slate-900">
                    <Box className="w-7 h-7 stroke-[2]" />
                  </div>
                  <div className="space-y-2 pt-4">
                    <h3 className="text-xl font-black tracking-tight text-slate-900">
                      Non-custodial
                    </h3>
                    <p className="text-xs text-slate-500 font-medium leading-relaxed">
                      Your private keys never leave your device. Holdings sit exactly where you put them.
                    </p>
                  </div>
                </div>

              </div>

            </div>

          </div>

          {/* Right Column: Tall Portrait (Man with coffee & phone) - Exactly aligned to match left height */}
          <div className="lg:col-span-4 rounded-[32px] overflow-hidden bg-slate-100 shadow-[0_2px_12px_rgba(0,0,0,0.03)] border border-slate-200/60 min-h-[460px] lg:min-h-full flex items-stretch">
            <img
              src="/bento-portrait.png"
              alt="Crypto wallet user lifestyle"
              className="w-full h-full object-cover object-top"
            />
          </div>

        </div>

      </div>
    </section>
  );
}
