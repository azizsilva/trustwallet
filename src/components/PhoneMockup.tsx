"use client";

import React, { useState } from "react";
import { 
  ArrowUpRight, 
  ArrowDown, 
  Repeat2, 
  Plus, 
  ScanLine, 
  Clock, 
  Wallet,
  Wifi, 
  BatteryMedium, 
  ChevronRight,
  Sparkles
} from "lucide-react";

export default function PhoneMockup() {
  const [activeAction, setActiveAction] = useState<string>("Swap");

  return (
    <div className="relative mx-auto w-full max-w-[360px] sm:max-w-[400px]">
      {/* Outer Phone Bezel with titanium frame styling */}
      <div className="relative rounded-[54px] p-[10px] bg-gradient-to-b from-[#d1d5db] via-[#9ca3af] to-[#6b7280] shadow-[0_30px_70px_-15px_rgba(0,0,0,0.22)] border-[3px] border-[#e5e7eb]">
        
        {/* Antenna bands */}
        <div className="absolute left-[-3px] top-28 w-[3px] h-3 bg-slate-400 rounded-l" />
        <div className="absolute right-[-3px] top-36 w-[3px] h-3 bg-slate-400 rounded-r" />

        {/* Inner Phone Screen with pure white background as in the real UI */}
        <div className="relative rounded-[45px] bg-[#FFFFFF] overflow-hidden text-slate-900 pt-3 pb-6 px-5 border border-slate-100 shadow-inner select-none">
          
          {/* Status Bar */}
          <div className="flex items-center justify-between text-xs font-semibold px-2 pb-2 text-black">
            <span className="font-bold tracking-tight text-[13px]">9:41</span>
            
            {/* Dynamic Island Pill with camera lens reflection */}
            <div className="w-24 h-6 rounded-full bg-black flex items-center justify-end px-3">
              <div className="w-2.5 h-2.5 rounded-full bg-[#111827] border border-[#1f2937]" />
            </div>

            <div className="flex items-center gap-1.5 text-black">
              {/* Cellular Signal Icon */}
              <div className="flex items-end gap-0.5 h-3">
                <span className="w-0.5 h-1 bg-black rounded-full" />
                <span className="w-0.5 h-1.5 bg-black rounded-full" />
                <span className="w-0.5 h-2 bg-black rounded-full" />
                <span className="w-0.5 h-2.5 bg-black rounded-full" />
              </div>
              <Wifi className="w-3.5 h-3.5 stroke-[2.5]" />
              <BatteryMedium className="w-4 h-4 stroke-[2.5]" />
            </div>
          </div>

          {/* Top Bar inside App */}
          <div className="flex items-center justify-between pt-2 pb-4">
            {/* Main Wallet Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#EEF2F6] hover:bg-[#E2E8F0] transition cursor-pointer">
              <div className="w-5 h-5 rounded-full bg-[#0500FF] flex items-center justify-center text-white">
                <Wallet className="w-3 h-3" />
              </div>
              <span className="text-xs font-bold text-slate-900">Main Wallet</span>
            </div>

            {/* Top Right Actions */}
            <div className="flex items-center gap-2 text-slate-800">
              <button 
                className="w-9 h-9 rounded-full bg-[#F3F4F6] flex items-center justify-center hover:bg-slate-200 transition"
                aria-label="History"
              >
                <Clock className="w-4 h-4 text-slate-700" />
              </button>
              <button 
                className="w-9 h-9 rounded-full bg-[#F3F4F6] flex items-center justify-center hover:bg-slate-200 transition"
                aria-label="Scan QR"
              >
                <ScanLine className="w-4 h-4 text-slate-700" />
              </button>
            </div>
          </div>

          {/* Large Portfolio Balance */}
          <div className="py-2">
            <h3 className="text-3xl sm:text-[38px] font-black tracking-tight text-slate-900 leading-tight">
              $197,473.23
            </h3>
            <p className="mt-1 text-xs sm:text-sm font-bold text-[#16A34A] flex items-center gap-1">
              <span className="text-[10px]">▲</span>
              <span>$13.10 (1.28%)</span>
            </p>
          </div>

          {/* Action Grid (Send, Receive, Swap, Buy) - Exact match to user screenshot */}
          <div className="grid grid-cols-4 gap-3 py-4">
            {/* Send */}
            <button
              onClick={() => setActiveAction("Send")}
              className="flex flex-col items-center gap-1.5 group"
            >
              <div className="w-[62px] h-[62px] rounded-[22px] bg-[#F1F3F5] flex items-center justify-center text-slate-900 group-hover:bg-[#E5E7EB] transition-all">
                <ArrowUpRight className="w-6 h-6 stroke-[2.2]" />
              </div>
              <span className="text-xs font-bold text-slate-800">Send</span>
            </button>

            {/* Receive */}
            <button
              onClick={() => setActiveAction("Receive")}
              className="flex flex-col items-center gap-1.5 group"
            >
              <div className="w-[62px] h-[62px] rounded-[22px] bg-[#F1F3F5] flex items-center justify-center text-slate-900 group-hover:bg-[#E5E7EB] transition-all">
                <ArrowDown className="w-6 h-6 stroke-[2.2]" />
              </div>
              <span className="text-xs font-bold text-slate-800">Receive</span>
            </button>

            {/* Swap (Highlighted in Royal Blue like the real app) */}
            <button
              onClick={() => setActiveAction("Swap")}
              className="flex flex-col items-center gap-1.5 group"
            >
              <div className="w-[62px] h-[62px] rounded-[22px] bg-[#0500FF] flex items-center justify-center text-white shadow-lg shadow-blue-600/30 group-hover:bg-[#0000cc] transition-all">
                <Repeat2 className="w-6 h-6 stroke-[2.5]" />
              </div>
              <span className="text-xs font-black text-[#0500FF]">Swap</span>
            </button>

            {/* Buy */}
            <button
              onClick={() => setActiveAction("Buy")}
              className="flex flex-col items-center gap-1.5 group"
            >
              <div className="w-[62px] h-[62px] rounded-[22px] bg-[#F1F3F5] flex items-center justify-center text-slate-900 group-hover:bg-[#E5E7EB] transition-all">
                <Plus className="w-6 h-6 stroke-[2.5]" />
              </div>
              <span className="text-xs font-bold text-slate-800">Buy</span>
            </button>
          </div>

          {/* Tokens Header */}
          <div className="flex items-center justify-between pt-2 pb-2 text-sm font-bold text-slate-900">
            <span className="flex items-center gap-0.5 cursor-pointer hover:text-blue-600">
              Tokens <ChevronRight className="w-4 h-4 text-slate-400" />
            </span>
          </div>

          {/* Token List items with realistic icons & prices */}
          <div className="space-y-3">
            {/* Bitcoin */}
            <div className="flex items-center justify-between py-1 group cursor-pointer">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#F7931A] text-white flex items-center justify-center font-black text-lg shadow-sm">
                  ₿
                </div>
                <div>
                  <p className="text-sm font-extrabold text-slate-900">Bitcoin</p>
                  <p className="text-xs text-slate-500 font-medium">1.08 BTC</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm font-extrabold text-slate-900">$76,939.73</p>
                <p className="text-xs font-bold text-[#16A34A]">+0.25%</p>
              </div>
            </div>

            {/* Ethereum */}
            <div className="flex items-center justify-between py-1 group cursor-pointer">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#627EEA] text-white flex items-center justify-center font-bold text-base shadow-sm">
                  Ξ
                </div>
                <div>
                  <p className="text-sm font-extrabold text-slate-900">Ethereum</p>
                  <p className="text-xs text-slate-500 font-medium">12.30 ETH</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm font-extrabold text-slate-900">$41,522.84</p>
                <p className="text-xs font-bold text-[#16A34A]">+2.56%</p>
              </div>
            </div>
          </div>

          {/* Bottom subtle gradient fade */}
          <div className="absolute bottom-0 left-0 right-0 h-14 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none" />

        </div>

      </div>
    </div>
  );
}
