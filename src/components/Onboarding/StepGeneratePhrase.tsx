"use client";

import React, { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Check, 
  Copy, 
  RotateCcw, 
  ArrowRight, 
  ArrowLeft, 
  Key,
  Sparkles,
  AlertCircle,
  CheckCircle2,
  Clipboard
} from "lucide-react";
import { WORDLIST } from "@/lib/dictionary";

interface StepGeneratePhraseProps {
  phrase?: string[];
  initialWords?: string[];
  onBack: () => void;
  onNext: (words: string[]) => void;
  onRegenerate?: () => void;
  onPhraseChange?: (newPhrase: string[]) => void;
}

export default function StepGeneratePhrase({
  phrase,
  initialWords,
  onBack,
  onNext,
}: StepGeneratePhraseProps) {
  // 12 word input boxes
  const [words, setWords] = useState<string[]>(() => {
    if (initialWords && initialWords.length === 12 && initialWords.some(w => w)) {
      return [...initialWords];
    }
    return Array(12).fill("");
  });

  const [focusedIndex, setFocusedIndex] = useState<number | null>(null);
  const [validationError, setValidationError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [pasteNotice, setPasteNotice] = useState(false);

  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  // Update if initialWords change
  useEffect(() => {
    if (initialWords && initialWords.length === 12 && initialWords.some(w => w)) {
      setWords([...initialWords]);
    }
  }, [initialWords]);

  // Clean and set word at index
  const handleWordChange = (index: number, val: string) => {
    // If user pasted or typed text containing spaces
    if (val.includes(" ")) {
      const parts = val.trim().toLowerCase().split(/\s+/).map(w => w.replace(/[^a-zA-Z]/g, "")).filter(Boolean);
      if (parts.length > 1) {
        handlePasteWords(index, parts);
        return;
      }
    }

    const cleaned = val.replace(/[^a-zA-Z]/g, "").toLowerCase();
    const nextWords = [...words];
    nextWords[index] = cleaned;
    setWords(nextWords);
    setValidationError(null);
  };

  // Keyboard navigation: Space/Enter advances, Backspace in empty box goes back
  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === " " || e.key === "Enter") {
      e.preventDefault();
      if (index < 11) {
        inputRefs.current[index + 1]?.focus();
      }
    } else if (e.key === "Backspace" && !words[index] && index > 0) {
      e.preventDefault();
      inputRefs.current[index - 1]?.focus();
    } else if (e.key === "ArrowRight" && index < 11) {
      const target = e.currentTarget;
      if (target.selectionStart === target.value.length) {
        inputRefs.current[index + 1]?.focus();
      }
    } else if (e.key === "ArrowLeft" && index > 0) {
      const target = e.currentTarget;
      if (target.selectionStart === 0) {
        inputRefs.current[index - 1]?.focus();
      }
    }
  };

  // Handle paste directly into input
  const handlePaste = (index: number, e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pastedText = e.clipboardData.getData("text");
    const extracted = pastedText
      .trim()
      .toLowerCase()
      .split(/\s+/)
      .map(w => w.replace(/[^a-zA-Z]/g, ""))
      .filter(Boolean);

    if (extracted.length === 0) return;
    handlePasteWords(index, extracted);
  };

  // Fill words starting from target index (or from 0 if 12 words pasted)
  const handlePasteWords = (startIndex: number, pastedWords: string[]) => {
    const nextWords = [...words];
    const start = pastedWords.length >= 12 ? 0 : startIndex;

    pastedWords.forEach((word, offset) => {
      const targetIdx = start + offset;
      if (targetIdx < 12) {
        nextWords[targetIdx] = word.toLowerCase();
      }
    });

    setWords(nextWords);
    setValidationError(null);
    setPasteNotice(true);
    setTimeout(() => setPasteNotice(false), 2000);

    // Focus next empty box or the 12th box
    const nextEmpty = nextWords.findIndex(w => !w.trim());
    if (nextEmpty !== -1) {
      inputRefs.current[nextEmpty]?.focus();
    } else {
      inputRefs.current[11]?.focus();
    }
  };

  // Paste from system clipboard via button
  const handleClipboardButton = async () => {
    try {
      const text = await navigator.clipboard.readText();
      const extracted = text
        .trim()
        .toLowerCase()
        .split(/\s+/)
        .map(w => w.replace(/[^a-zA-Z]/g, ""))
        .filter(Boolean);

      if (extracted.length > 0) {
        handlePasteWords(0, extracted);
      } else {
        setValidationError("Clipboard is empty or contains no valid words.");
      }
    } catch {
      setValidationError("Unable to access clipboard. Please paste directly into any of the boxes.");
    }
  };

  // Quick reset all boxes
  const handleClearAll = () => {
    setWords(Array(12).fill(""));
    setValidationError(null);
    inputRefs.current[0]?.focus();
  };

  // Quick fill sample words for easy testing
  const handleFillSample = () => {
    const sample = WORDLIST.slice(0, 12);
    setWords([...sample]);
    setValidationError(null);
  };

  // Copy entered words
  const handleCopy = () => {
    const joined = words.map(w => w.trim()).filter(Boolean).join(" ");
    if (!joined) return;
    navigator.clipboard.writeText(joined);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Count filled words
  const filledCount = words.filter(w => w.trim().length > 0).length;
  const isComplete = filledCount === 12;

  // Submit / continue
  const handleContinue = () => {
    if (!isComplete) {
      setValidationError("Please enter all 12 words in the boxes to continue.");
      return;
    }
    const cleanWords = words.map(w => w.trim().toLowerCase());
    onNext(cleanWords);
  };

  return (
    <div className="space-y-6 select-none">
      
      {/* Outer Card container */}
      <div className="rounded-[28px] sm:rounded-[36px] bg-[#F2F4F7] p-5 sm:p-8 border border-slate-200/80 shadow-sm transition-all space-y-5">
        
        {/* Title and Subtitle */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pb-2 border-b border-slate-200/60">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-[#0500FF] text-xs font-bold mb-2 border border-blue-200">
              <Key className="w-3.5 h-3.5" />
              <span>12-Word Recovery Phrase</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Enter Your 12 Recovery Words
            </h2>
            <p className="text-xs sm:text-sm font-medium text-slate-500 mt-1">
              Type your 12 words into the boxes below in order. Press Space or Enter to jump to the next box.
            </p>
          </div>

          {/* Progress Badge */}
          <div className="self-start sm:self-center">
            <Badge variant={isComplete ? "success" : "brand"} className="px-3 py-1 text-xs font-bold">
              {filledCount} / 12 words
            </Badge>
          </div>
        </div>

        {/* Toolbar: Paste, Clear, Sample, Copy */}
        <div className="flex flex-wrap items-center justify-between gap-2 pt-1 text-xs">
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleClipboardButton}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm text-slate-700 hover:text-[#0500FF] hover:border-blue-300 font-bold transition active:scale-95"
              title="Paste phrase from clipboard"
            >
              <Clipboard className="w-3.5 h-3.5 text-slate-500" />
              <span>Paste Phrase</span>
            </button>

            <button
              type="button"
              onClick={handleClearAll}
              disabled={filledCount === 0}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm text-slate-600 hover:text-red-600 font-bold transition disabled:opacity-40 disabled:cursor-not-allowed"
              title="Clear all 12 boxes"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Clear</span>
            </button>
          </div>

          <div className="flex items-center gap-2">
            {isComplete && (
              <button
                type="button"
                onClick={handleCopy}
                className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm text-slate-700 hover:text-blue-600 font-bold transition"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600 stroke-[3]" />
                    <span className="text-emerald-600">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-slate-500" />
                    <span>Copy All</span>
                  </>
                )}
              </button>
            )}

            <button
              type="button"
              onClick={handleFillSample}
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-blue-50/80 border border-blue-200/80 text-[#0500FF] font-bold hover:bg-blue-100 transition text-[11px]"
              title="Fill sample 12 words for testing"
            >
              <Sparkles className="w-3 h-3 text-[#0500FF]" />
              <span>Sample Words</span>
            </button>
          </div>
        </div>

        {/* 12 WORD INPUT BOXES */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2.5 sm:gap-3 pt-1">
          {words.map((word, index) => {
            const isFilled = word.trim().length > 0;
            const isFocused = focusedIndex === index;

            return (
              <div
                key={index}
                className={`relative bg-white rounded-2xl py-2.5 px-3 sm:px-4 shadow-sm border-2 transition-all flex items-center gap-2 ${
                  isFocused
                    ? "border-[#0500FF] ring-2 ring-blue-500/20 shadow-md scale-[1.01]"
                    : isFilled
                    ? "border-emerald-300 bg-white"
                    : "border-slate-200/90 hover:border-slate-300"
                }`}
              >
                {/* Number indicator */}
                <span className="text-xs font-bold text-slate-400 select-none w-5 shrink-0 text-left">
                  {index + 1}.
                </span>

                {/* Direct Word Input */}
                <input
                  ref={(el) => {
                    inputRefs.current[index] = el;
                  }}
                  type="text"
                  value={word}
                  onChange={(e) => handleWordChange(index, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                  onPaste={(e) => handlePaste(index, e)}
                  onFocus={() => setFocusedIndex(index)}
                  onBlur={() => setFocusedIndex(null)}
                  placeholder={`word ${index + 1}`}
                  className="w-full bg-transparent font-mono font-bold text-xs sm:text-sm text-slate-900 focus:outline-none placeholder:text-slate-300 lowercase tracking-wide"
                  autoComplete="off"
                  autoCapitalize="none"
                  spellCheck={false}
                />

                {/* Filled Status Icon */}
                {isFilled && (
                  <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0 stroke-[2.5]" />
                )}
              </div>
            );
          })}
        </div>

        {/* Paste notification banner */}
        {pasteNotice && (
          <p className="text-xs text-emerald-600 font-semibold text-center animate-in fade-in">
            ✓ Words pasted into boxes!
          </p>
        )}

        {/* Complete Status Banner */}
        {isComplete && (
          <div className="flex items-center gap-2.5 p-3.5 rounded-2xl bg-emerald-50 border border-emerald-200 text-xs sm:text-sm text-emerald-800 font-bold animate-in fade-in">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
            <span>All 12 words entered successfully! You can now continue.</span>
          </div>
        )}

      </div>

      {/* Validation Error Message */}
      {validationError && (
        <div className="flex items-start gap-2.5 p-4 rounded-2xl bg-red-50 border border-red-200 text-xs sm:text-sm text-red-700 font-semibold animate-in fade-in">
          <AlertCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
          <span>{validationError}</span>
        </div>
      )}

      {/* Navigation Buttons */}
      <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
        <Button
          type="button"
          variant="outline"
          size="pill"
          onClick={onBack}
          className="w-full sm:w-auto flex items-center gap-2 order-2 sm:order-1"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Account Details</span>
        </Button>

        <Button
          type="button"
          variant="royal"
          size="pill"
          disabled={!isComplete}
          onClick={handleContinue}
          className="w-full sm:w-auto flex items-center gap-2 order-1 sm:order-2"
        >
          <span>Continue</span>
          <ArrowRight className="w-4 h-4" />
        </Button>
      </div>

    </div>
  );
}
