"use client";

import React from "react";
import { ArrowRight, ShieldCheck, Lock, Key, Zap, CheckCircle2, TrendingUp, Sparkles } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative pt-12 pb-24 md:pt-20 md:pb-32 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-brand-500/20 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[350px] h-[300px] bg-brand-cyan/15 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 w-[300px] h-[250px] bg-brand-emerald/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Heading and CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
            
            {/* Pill tag */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-500/10 border border-brand-500/30 text-xs sm:text-sm font-semibold text-brand-cyan shadow-inner">
              <Sparkles className="w-4 h-4 text-brand-cyan" />
              <span>Next-Gen Web Architecture & Onboarding</span>
              <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan" />
              <span className="text-slate-400 font-normal">Next.js + Zod</span>
            </div>

            {/* Main Title */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white leading-[1.1]">
              Uncompromising Security. <br />
              <span className="bg-gradient-to-r from-brand-cyan via-blue-400 to-brand-emerald bg-clip-text text-transparent">
                True Ownership
              </span>{" "}
              Over Every Word.
            </h1>

            {/* Description */}
            <p className="text-lg sm:text-xl text-slate-300 max-w-2xl font-normal leading-relaxed">
              Step into the modern web ecosystem. Experience our verified onboarding workflow featuring 
              dynamic 12-word recovery phrase generation, interactive ordering verification, 
              and strict type-safe Zod validation.
            </p>

            {/* Feature Bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-sm text-slate-300 w-full">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-brand-cyan shrink-0" />
                <span>Client-Side Phrase Verification</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-brand-cyan shrink-0" />
                <span>Zero Third-Party Trackers</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-brand-emerald shrink-0" />
                <span>Type-Safe React Hook Form</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-brand-emerald shrink-0" />
                <span>100% Non-Custodial Architecture</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4 w-full sm:w-auto">
              <a
                href="#onboarding-section"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl font-bold text-base text-white bg-gradient-to-r from-brand-500 via-brand-600 to-brand-cyan hover:brightness-110 shadow-xl shadow-brand-500/30 hover:shadow-brand-cyan/20 hover:-translate-y-0.5 transition-all text-center"
              >
                <span>Launch Onboarding Form</span>
                <ArrowRight className="w-5 h-5" />
              </a>

              <a
                href="#features"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-2xl font-semibold text-base text-slate-200 bg-navy-900/90 hover:bg-navy-800 border border-white/10 hover:border-white/20 transition-all text-center"
              >
                <span>Explore Features</span>
              </a>
            </div>

            {/* Stats row */}
            <div className="pt-6 border-t border-white/10 grid grid-cols-3 gap-6 w-full">
              <div>
                <p className="text-2xl sm:text-3xl font-black text-white">100M+</p>
                <p className="text-xs text-slate-400 font-medium">Global Community</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-black text-brand-cyan">100%</p>
                <p className="text-xs text-slate-400 font-medium">Self-Custody Standard</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-black text-brand-emerald">BIP-39</p>
                <p className="text-xs text-slate-400 font-medium">Deterministic Seed</p>
              </div>
            </div>

          </div>

          {/* Right Column: Trust Wallet Style Interactive Floating Visual */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer Card with Glassmorphism */}
              <div className="relative rounded-3xl p-6 bg-gradient-to-b from-navy-850 to-navy-900 border border-white/15 shadow-2xl shadow-brand-900/60 backdrop-blur-2xl">
                
                {/* Header of the mock card */}
                <div className="flex items-center justify-between pb-5 border-b border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-brand-500/20 border border-brand-500/40 flex items-center justify-center">
                      <ShieldCheck className="w-6 h-6 text-brand-cyan" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">Main Secure Vault</h4>
                      <p className="text-[11px] text-emerald-400 flex items-center gap-1 font-mono">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                        0x8849...21B8
                      </p>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded-md text-[11px] font-bold bg-brand-500/20 text-brand-cyan border border-brand-500/30">
                    Live Demo
                  </span>
                </div>

                {/* Portfolio Balance Display */}
                <div className="py-6">
                  <span className="text-xs font-medium uppercase tracking-wider text-slate-400">Total Portfolio Value</span>
                  <div className="flex items-baseline gap-3 mt-1">
                    <span className="text-3xl sm:text-4xl font-black text-white tracking-tight">$42,850.70</span>
                    <span className="inline-flex items-center text-xs font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-md border border-emerald-500/20">
                      <TrendingUp className="w-3 h-3 mr-1" />
                      +12.8%
                    </span>
                  </div>
                </div>

                {/* Action Buttons (Send, Receive, Buy, Swap) */}
                <div className="grid grid-cols-4 gap-2 pb-6 border-b border-white/10 text-center">
                  <div className="flex flex-col items-center gap-1 p-2 rounded-xl bg-white/5 hover:bg-white/10 transition cursor-pointer">
                    <div className="w-9 h-9 rounded-full bg-brand-500/20 flex items-center justify-center text-brand-cyan">
                      ↑
                    </div>
                    <span className="text-[11px] font-medium text-slate-300">Send</span>
                  </div>
                  <div className="flex flex-col items-center gap-1 p-2 rounded-xl bg-white/5 hover:bg-white/10 transition cursor-pointer">
                    <div className="w-9 h-9 rounded-full bg-brand-500/20 flex items-center justify-center text-brand-cyan">
                      ↓
                    </div>
                    <span className="text-[11px] font-medium text-slate-300">Receive</span>
                  </div>
                  <div className="flex flex-col items-center gap-1 p-2 rounded-xl bg-white/5 hover:bg-white/10 transition cursor-pointer">
                    <div className="w-9 h-9 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                      ⚡
                    </div>
                    <span className="text-[11px] font-medium text-slate-300">Swap</span>
                  </div>
                  <div className="flex flex-col items-center gap-1 p-2 rounded-xl bg-white/5 hover:bg-white/10 transition cursor-pointer">
                    <div className="w-9 h-9 rounded-full bg-brand-500/20 flex items-center justify-center text-brand-cyan">
                      <Key className="w-4 h-4" />
                    </div>
                    <span className="text-[11px] font-medium text-slate-300">Backup</span>
                  </div>
                </div>

                {/* Asset List Preview */}
                <div className="space-y-3 pt-5">
                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-white/5 hover:bg-white/10 transition">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-blue-600/30 flex items-center justify-center font-bold text-xs text-blue-400">
                        ETH
                      </div>
                      <div>
                        <p className="text-xs font-bold text-white">Ethereum</p>
                        <p className="text-[11px] text-slate-400">8.42 ETH</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-xs font-bold text-white">$27,420.10</p>
                      <p className="text-[11px] text-emerald-400">+4.5%</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-white/5 hover:bg-white/10 transition">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-yellow-500/30 flex items-center justify-center font-bold text-xs text-yellow-400">
                        BNB
                      </div>
                      <div>
                        <p className="text-xs font-bold text-white">BNB Chain</p>
                        <p className="text-[11px] text-slate-400">22.50 BNB</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-xs font-bold text-white">$13,500.60</p>
                      <p className="text-[11px] text-emerald-400">+8.1%</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-white/5 hover:bg-white/10 transition">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-purple-500/30 flex items-center justify-center font-bold text-xs text-purple-400">
                        SOL
                      </div>
                      <div>
                        <p className="text-xs font-bold text-white">Solana</p>
                        <p className="text-[11px] text-slate-400">12.00 SOL</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-xs font-bold text-white">$1,930.00</p>
                      <p className="text-[11px] text-emerald-400">+15.3%</p>
                    </div>
                  </div>
                </div>

              </div>

              {/* Floating Badge Decor */}
              <div className="absolute -bottom-6 -left-6 p-4 rounded-2xl bg-navy-900 border border-brand-cyan/40 shadow-xl shadow-brand-500/30 flex items-center gap-3 animate-float-slow backdrop-blur-xl">
                <div className="w-10 h-10 rounded-xl bg-brand-cyan/20 flex items-center justify-center text-brand-cyan">
                  <Lock className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-extrabold text-white">Zero Cloud Storing</p>
                  <p className="text-[10px] text-slate-400">Keys encrypted purely in memory</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
