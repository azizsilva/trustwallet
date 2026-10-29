import { z } from "zod";

export const accountInfoSchema = z.object({
  fullName: z
    .string()
    .min(2, { message: "Full Name must be at least 2 characters." })
    .max(60, { message: "Full Name cannot exceed 60 characters." })
    .regex(/^[a-zA-Z\s'-]+$/, { message: "Name can only contain letters, spaces, hyphens and apostrophes." }),
  email: z
    .string()
    .min(1, { message: "Email address is required." })
    .email({ message: "Please provide a valid email address (e.g., user@domain.com)." }),
  description: z
    .string()
    .min(10, { message: "Please enter a description of at least 10 characters." })
    .max(500, { message: "Description cannot exceed 500 characters." }),
  termsAccepted: z
    .boolean()
    .refine((val) => val === true, {
      message: "You must acknowledge that you are responsible for your security phrase.",
    }),
});

export type AccountInfoFormData = z.infer<typeof accountInfoSchema>;

export interface OnboardingState {
  step: 1 | 2 | 3 | 4;
  accountInfo: AccountInfoFormData | null;
  generatedPhrase: string[];
  orderedPhrase: string[];
  shuffledWords: string[];
  isPhraseSavedConfirmed: boolean;
  isOrderingValid: boolean;
  submissionResult: {
    submissionId: string;
    submittedAt: string;
    fullName: string;
    email: string;
    description: string;
    verificationHash: string;
  } | null;
}
