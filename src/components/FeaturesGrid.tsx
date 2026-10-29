"use client";

import React from "react";
import { Repeat2, Coins, ShieldCheck, Cpu, ArrowRight } from "lucide-react";

export default function FeaturesGrid() {
  const features = [
    {
      title: "Seamless Swaps",
      desc: "Swap thousands of tokens across 100+ blockchains seamlessly with the best decentralized rates and zero hidden slippage.",
      icon: <Repeat2 className="w-6 h-6 text-[#0500FF]" />,
      badge: "Cross-Chain",
    },
    {
      title: "Earn High Yields",
      desc: "Stake your assets, supply liquidity to verified decentralized protocols, and earn native staking rewards directly.",
      icon: <Coins className="w-6 h-6 text-emerald-600" />,
      badge: "Up to 18% APY",
    },
    {
      title: "True Self-Custody",
      desc: "Your private keys and 12-word seed phrases are encrypted locally on your device hardware. Only you hold the keys.",
      icon: <ShieldCheck className="w-6 h-6 text-[#0500FF]" />,
      badge: "BIP-39 Standard",
    },
    {
      title: "Built for Developers",
      desc: "Type-safe Next.js architecture, Zod schema validation, and modular client-side cryptographic primitives.",
      icon: <Cpu className="w-6 h-6 text-purple-600" />,
      badge: "Zod + React Hook Form",
    },
  ];

  return (
    <section id="features" className="w-full px-4 sm:px-6 py-20 scroll-mt-20">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Section Header as shown in image 1 */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
            Every move you make <br className="hidden sm:inline" />
            in crypto. One app.
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-400">
            A single unified interface to store, swap, earn, and safeguard your digital assets without intermediaries.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item, idx) => (
            <div
              key={idx}
              className="p-7 rounded-[28px] bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all group flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                    {item.badge}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="pt-6">
                <a
                  href="#onboarding"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0500FF] dark:text-blue-400 group-hover:underline"
                >
                  <span>Experience feature</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
