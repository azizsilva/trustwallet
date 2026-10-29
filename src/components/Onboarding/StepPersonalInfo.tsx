"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { accountInfoSchema, AccountInfoFormData } from "@/types/form";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  FormDescription,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { User, Mail, FileText, ArrowRight, ShieldCheck } from "lucide-react";

interface StepPersonalInfoProps {
  initialData: AccountInfoFormData | null;
  onNext: (data: AccountInfoFormData) => void;
}

export default function StepPersonalInfo({ initialData, onNext }: StepPersonalInfoProps) {
  const form = useForm<AccountInfoFormData>({
    resolver: zodResolver(accountInfoSchema),
    mode: "onChange",
    defaultValues: initialData || {
      fullName: "",
      email: "",
      description: "",
      termsAccepted: false,
    },
  });

  const onSubmit = (data: AccountInfoFormData) => {
    onNext(data);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="text-left pb-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-bold mb-3 border border-blue-500/20">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Shadcn UI Form & Zod Validation</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
            Account Registration & Security Setup
          </h3>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
            Provide your profile details. In the next step, a unique 12-word recovery phrase will be generated that you must remember and verify before final submission.
          </p>
        </div>

        {/* Full Name Field */}
        <FormField
          control={form.control}
          name="fullName"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                <User className="w-3.5 h-3.5 text-[#0500FF]" />
                Full Name
              </FormLabel>
              <FormControl>
                <Input placeholder="e.g. Satoshi Nakamoto" {...field} />
              </FormControl>
              <FormDescription>
                Your legal or professional name for verified vault identification.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Email Field */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                <Mail className="w-3.5 h-3.5 text-[#0500FF]" />
                Email Address
              </FormLabel>
              <FormControl>
                <Input type="email" placeholder="e.g. satoshi@bitcoin.org" {...field} />
              </FormControl>
              <FormDescription>
                Encrypted notifications and backup receipts will be sent here.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Description Field */}
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                <FileText className="w-3.5 h-3.5 text-[#0500FF]" />
                Project / Application Description
              </FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Describe your intended usage, portfolio goals, or decentralized project requirements (at least 10 characters)..."
                  rows={3}
                  {...field}
                />
              </FormControl>
              <FormDescription>
                Detailed overview of your vault deployment or ecosystem activity.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Acknowledgment Field */}
        <FormField
          control={form.control}
          name="termsAccepted"
          render={({ field }) => (
            <FormItem className="rounded-2xl bg-slate-50 dark:bg-slate-800/50 p-4 border border-slate-200 dark:border-slate-700/80">
              <div className="flex items-start gap-3">
                <FormControl>
                  <input
                    type="checkbox"
                    checked={field.value}
                    onChange={field.onChange}
                    className="mt-1 h-4 w-4 rounded border-slate-300 text-[#0500FF] focus:ring-blue-500 cursor-pointer"
                  />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel className="text-xs font-semibold text-slate-800 dark:text-slate-200 cursor-pointer">
                    I acknowledge that I am solely responsible for recording and remembering my security phrase.
                  </FormLabel>
                  <FormDescription className="text-[11px] text-slate-500 dark:text-slate-400">
                    Trust Vault does not store seed phrases on any centralized server. Losing your phrase means losing access.
                  </FormDescription>
                </div>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Submit Button */}
        <div className="pt-2 flex justify-end">
          <Button
            type="submit"
            variant="royal"
            size="pill"
            className="w-full sm:w-auto flex items-center gap-2"
          >
            <span>Proceed to Recovery Phrase Generation</span>
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </form>
    </Form>
  );
}
