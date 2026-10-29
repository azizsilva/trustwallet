import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Trust Wallet | The crypto wallet you control",
  description: "Trust Wallet is a self-custody crypto wallet for iOS, Android and your browser. Buy, swap, stake and explore Web3 across 100+ blockchains.",
  keywords: ["trust wallet", "crypto wallet", "web3", "bip39", "self custody"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-[#F5F6F8] text-slate-900 min-h-screen flex flex-col antialiased selection:bg-[#0500FF] selection:text-white">
        {children}
      </body>
    </html>
  );
}
