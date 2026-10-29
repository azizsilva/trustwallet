"use client";

import React, { useEffect } from "react";
import confetti from "canvas-confetti";
import { Button } from "@/components/ui/button";
import { 
  CheckCircle, 
  Download, 
  RotateCcw, 
  User, 
  Mail, 
  FileText, 
  Hash, 
  Calendar,
  Sparkles
} from "lucide-react";

interface StepSuccessReceiptProps {
  receipt: {
    submissionId: string;
    submittedAt: string;
    fullName: string;
    email: string;
    description: string;
    verificationHash: string;
  };
  onRestart: () => void;
}

export default function StepSuccessReceipt({
  receipt,
  onRestart,
}: StepSuccessReceiptProps) {
  useEffect(() => {
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#0500FF", "#00D4FF", "#00F5A0", "#F7931A"],
      });
    } catch (e) {
      // safe fallback
    }
  }, []);

  const handleDownloadJson = () => {
    // Only includes public registration receipt metadata; never includes recovery words
    const payload = JSON.stringify(receipt, null, 2);
    const blob = new Blob([payload], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `recovery-verified-receipt-${receipt.submissionId}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-6 text-center select-none">
      {/* Verified Shield Icon */}
      <div className="mx-auto w-16 h-16 rounded-3xl bg-emerald-50 border-2 border-emerald-500/30 flex items-center justify-center text-emerald-600 shadow-lg shadow-emerald-500/10">
        <CheckCircle className="w-9 h-9 stroke-[2.2]" />
      </div>

      <div className="space-y-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-200">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Recovery Phrase Verified</span>
        </div>
        <h3 className="text-3xl font-black text-slate-900 tracking-tight">
          Verification Complete!
        </h3>
        <p className="text-sm text-slate-600 max-w-md mx-auto">
          Your 12-word recovery sequence has been verified locally. Your mnemonic phrase remains strictly on your device.
        </p>
      </div>

      {/* Official Receipt Card */}
      <div className="rounded-3xl bg-slate-50 border border-slate-200 p-6 text-left space-y-4 shadow-sm max-w-lg mx-auto">
        <div className="flex items-center justify-between pb-3 border-b border-slate-200">
          <div>
            <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
              RECEIPT IDENTIFIER
            </p>
            <p className="text-sm font-mono font-extrabold text-[#0500FF]">
              {receipt.submissionId}
            </p>
          </div>
          <span className="px-2.5 py-1 rounded-md text-[11px] font-bold bg-emerald-100 text-emerald-700 border border-emerald-300">
            VERIFIED
          </span>
        </div>

        <div className="space-y-2.5 text-xs">
          <div className="flex items-center justify-between py-1 border-b border-slate-200/60">
            <span className="text-slate-500 flex items-center gap-1.5 font-medium">
              <User className="w-3.5 h-3.5 text-slate-400" />
              Full Name:
            </span>
            <span className="font-bold text-slate-900">{receipt.fullName}</span>
          </div>

          <div className="flex items-center justify-between py-1 border-b border-slate-200/60">
            <span className="text-slate-500 flex items-center gap-1.5 font-medium">
              <Mail className="w-3.5 h-3.5 text-slate-400" />
              Email:
            </span>
            <span className="font-bold text-slate-900">{receipt.email}</span>
          </div>

          <div className="flex items-center justify-between py-1 border-b border-slate-200/60">
            <span className="text-slate-500 flex items-center gap-1.5 font-medium">
              <Calendar className="w-3.5 h-3.5 text-slate-400" />
              Timestamp:
            </span>
            <span className="font-mono text-slate-700">
              {receipt.submittedAt}
            </span>
          </div>

          <div className="flex items-center justify-between py-1 border-b border-slate-200/60">
            <span className="text-slate-500 flex items-center gap-1.5 font-medium">
              <Hash className="w-3.5 h-3.5 text-slate-400" />
              Local Verification Hash:
            </span>
            <span className="font-mono text-[11px] text-slate-700">
              {receipt.verificationHash}
            </span>
          </div>

          <div className="pt-1">
            <span className="text-slate-500 flex items-center gap-1.5 font-medium pb-1">
              <FileText className="w-3.5 h-3.5 text-slate-400" />
              Description:
            </span>
            <p className="text-slate-800 bg-white p-2.5 rounded-xl border border-slate-200 font-sans text-xs">
              {receipt.description}
            </p>
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
        <Button
          type="button"
          variant="royal"
          size="pill"
          onClick={handleDownloadJson}
          className="w-full sm:w-auto flex items-center gap-2"
        >
          <Download className="w-4 h-4" />
          <span>Download JSON Receipt</span>
        </Button>

        <Button
          type="button"
          variant="outline"
          size="pill"
          onClick={onRestart}
          className="w-full sm:w-auto flex items-center gap-2"
        >
          <RotateCcw className="w-4 h-4" />
          <span>New Onboarding Session</span>
        </Button>
      </div>
    </div>
  );
}
