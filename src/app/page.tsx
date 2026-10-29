"use client";

import React from "react";
import TrustNavbar from "@/components/TrustNavbar";
import TrustHero from "@/components/TrustHero";
import BentoSection from "@/components/BentoSection";
import OnboardingSection from "@/components/Onboarding/OnboardingSection";
import BlueCtaBanner from "@/components/BlueCtaBanner";
import TrustFooter from "@/components/TrustFooter";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F5F6F8] text-slate-900 flex flex-col font-sans selection:bg-[#0500FF] selection:text-white">
      {/* 1. Floating Pill Header with logo, links, language and download button */}
      <TrustNavbar />

      {/* 2. Hero Section with white rounded container and iPhone mockup */}
      <TrustHero />

      {/* 3. Bento Grid Showcase with bento-couch.png and bento-portrait.png */}
      <BentoSection />

      {/* 4. Interactive Verified Onboarding Form (Zod + React Hook Form + 12-Word Phrase Ordering Verification) */}
      <OnboardingSection />

      {/* 5. Vibrant Royal Blue CTA Card with iPhone Hero */}
      <BlueCtaBanner />

      {/* 6. Multi-Column Trust Wallet Footer */}
      <TrustFooter />
    </main>
  );
}
