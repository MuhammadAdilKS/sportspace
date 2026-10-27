"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function PaymentScreen() {
  const router = useRouter();
  const [activeMethod, setActiveMethod] = useState<"upi" | "card" | "netbanking" | "wallets">("upi");
  const [upiId, setUpiId] = useState("adil@okaxis");
  const [processing, setProcessing] = useState(false);

  const handlePay = () => {
    setProcessing(true);
    setTimeout(() => {
      router.push("/booking/confirmed/SS-2026-48291");
    }, 1200);
  };

  return (
    <div className="bg-surface font-body-md text-on-surface antialiased min-h-screen flex flex-col">
      {/* Top Stack Header */}
      <header className="fixed top-0 w-full z-50 bg-surface-container-lowest/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(11,27,58,0.04)]">
        <div className="h-16 pt-safe flex items-center justify-between px-margin">
          <div className="flex items-center gap-space-sm min-w-0">
            <button
              type="button"
              aria-label="Back"
              onClick={() => router.back()}
              className="w-11 h-11 -ml-space-sm flex items-center justify-center text-on-surface rounded-full hover:bg-surface-container transition-colors cursor-pointer"
            >
              <span className="material-symbols-outlined text-[24px]">arrow_back</span>
            </button>
            <img
              alt="SportSpace Logo"
              className="h-8 w-auto object-contain"
              src="/logo.png"
            />
            <h1 className="font-headline-sm text-headline-sm text-primary tracking-tight truncate">
              Slot Selection &amp; Checkout
            </h1>
          </div>
          <Link
            href="/profile"
            className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0"
          >
            <span className="material-symbols-outlined text-on-primary text-[18px]">person</span>
          </Link>
        </div>
      </header>

      <main className="flex flex-col relative w-full pt-20 bg-surface min-h-screen">
        <div className="flex flex-col w-full px-margin pb-32">
          {/* Step 3 Indicator */}
          <div className="flex flex-col gap-space-xs mt-space-sm mb-space-md">
            <div className="flex items-center justify-between text-on-surface-variant">
              <span className="font-label-sm text-label-sm font-semibold tracking-wider uppercase text-secondary">
                Step 3 of 3
              </span>
              <span className="font-caption text-caption text-on-surface-variant font-medium">
                Payment &amp; Checkout
              </span>
            </div>
            <div className="w-full h-1.5 bg-surface-container rounded-full overflow-hidden">
              <div className="h-full bg-secondary-container rounded-full w-full" />
            </div>
          </div>

          {/* Total Amount Banner */}
          <div className="bg-primary-container text-on-primary rounded-xl p-space-md shadow-md mb-space-lg relative overflow-hidden">
            <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-secondary/20 rounded-full blur-xl pointer-events-none" />
            <div className="flex items-center justify-between relative z-10">
              <div className="flex flex-col gap-space-xs">
                <span className="font-caption text-caption uppercase tracking-wider text-inverse-primary">
                  Total Amount Payable
                </span>
                <span className="font-body-md text-body-md font-semibold text-on-primary flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[18px] text-secondary-fixed">
                    receipt_long
                  </span>
                  SS-2026-48291
                </span>
              </div>
              <div className="flex flex-col items-end">
                <span className="font-headline-lg text-headline-lg font-bold text-secondary-fixed tracking-tight">
                  ₹1,608
                </span>
                <span className="font-caption text-caption text-secondary-fixed/80 font-medium">
                  Inclusive of GST
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between mb-space-sm">
            <h2 className="font-headline-sm text-headline-sm text-on-surface">
              Select Payment Method
            </h2>
            <span className="font-caption text-caption bg-surface-container-high text-on-surface-variant px-2.5 py-1 rounded-full font-medium">
              Secured by Razorpay
            </span>
          </div>

          {/* Payment Methods Accordion */}
          <div className="flex flex-col gap-space-sm">
            {/* 1. UPI Payment */}
            <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm transition-all">
              <div
                onClick={() => setActiveMethod("upi")}
                className="flex items-start justify-between cursor-pointer"
              >
                <div className="flex items-center gap-space-sm">
                  <div
                    className={`w-5 h-5 rounded-full flex items-center justify-center ${
                      activeMethod === "upi" ? "bg-primary" : "bg-surface-container-high"
                    }`}
                  >
                    <div
                      className={`w-2 h-2 rounded-full ${
                        activeMethod === "upi"
                          ? "bg-secondary-fixed"
                          : "bg-surface-container-lowest"
                      }`}
                    />
                  </div>
                  <div>
                    <div className="flex items-center gap-space-xs">
                      <span className="font-label-md text-label-md text-on-surface">
                        UPI Payment
                      </span>
                      <span className="font-caption text-caption bg-secondary-fixed/20 text-on-secondary-container px-2 py-0.5 rounded-full font-semibold">
                        Recommended
                      </span>
                    </div>
                    <p className="font-caption text-caption text-on-surface-variant mt-0.5">
                      Google Pay, PhonePe, Paytm, BHIM
                    </p>
                  </div>
                </div>
                <span className="material-symbols-outlined text-[20px] text-secondary font-semibold">
                  bolt
                </span>
              </div>

              {activeMethod === "upi" && (
                <div className="mt-space-md pt-space-md flex flex-col gap-space-md border-t border-surface-container">
                  <div className="flex items-center justify-between bg-surface-container-low p-2 rounded-lg">
                    <div className="flex items-center gap-space-xs">
                      {["GPay", "PhonePe", "Paytm", "BHIM"].map((app) => (
                        <span
                          key={app}
                          className="px-2 py-1 bg-surface-container-lowest rounded text-[11px] font-bold tracking-tight text-on-surface shadow-sm"
                        >
                          {app}
                        </span>
                      ))}
                    </div>
                    <span className="font-caption text-caption text-secondary font-medium">
                      Instant refund eligible
                    </span>
                  </div>

                  <div className="flex flex-col gap-space-xs">
                    <label className="font-label-sm text-label-sm text-on-surface-variant font-medium">
                      Enter UPI ID / VPA
                    </label>
                    <div className="flex items-center gap-space-xs">
                      <input
                        className="flex-1 h-11 bg-surface-container-low text-on-surface font-body-md text-body-md px-space-sm rounded-lg outline-none"
                        placeholder="username@upi"
                        type="text"
                        value={upiId}
                        onChange={(e) => setUpiId(e.target.value)}
                      />
                      <button
                        type="button"
                        className="h-11 px-space-md bg-primary-container text-on-primary rounded-lg font-label-sm text-label-sm font-semibold active:scale-95 transition-transform"
                      >
                        Verify
                      </button>
                    </div>
                    <span className="font-caption text-caption text-secondary flex items-center gap-1 mt-0.5">
                      <span className="material-symbols-outlined text-[14px]">check_circle</span>
                      Verified: Adil Farooq
                    </span>
                  </div>
                </div>
              )}
            </div>

            {/* 2. Credit / Debit Cards */}
            <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm transition-all">
              <div
                onClick={() => setActiveMethod("card")}
                className="flex items-start justify-between cursor-pointer"
              >
                <div className="flex items-center gap-space-sm">
                  <div
                    className={`w-5 h-5 rounded-full flex items-center justify-center ${
                      activeMethod === "card" ? "bg-primary" : "bg-surface-container-high"
                    }`}
                  >
                    <div
                      className={`w-2 h-2 rounded-full ${
                        activeMethod === "card"
                          ? "bg-secondary-fixed"
                          : "bg-surface-container-lowest"
                      }`}
                    />
                  </div>
                  <div>
                    <span className="font-label-md text-label-md text-on-surface">
                      Credit / Debit Cards
                    </span>
                    <p className="font-caption text-caption text-on-surface-variant mt-0.5">
                      Visa, Mastercard, RuPay, Maestro
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-[10px] font-bold text-on-surface-variant">
                  <span className="px-1.5 py-0.5 bg-surface-container rounded">VISA</span>
                  <span className="px-1.5 py-0.5 bg-surface-container rounded">MC</span>
                  <span className="px-1.5 py-0.5 bg-surface-container rounded">RUPAY</span>
                </div>
              </div>

              {activeMethod === "card" && (
                <div className="mt-space-md pt-space-md flex flex-col gap-space-sm border-t border-surface-container">
                  <input
                    className="w-full h-11 bg-surface-container-low text-on-surface font-body-md px-space-sm rounded-lg outline-none"
                    defaultValue="4532 •••• •••• 8821"
                  />
                  <div className="grid grid-cols-2 gap-space-sm">
                    <input
                      className="w-full h-11 bg-surface-container-low text-on-surface font-body-md px-space-sm rounded-lg outline-none"
                      defaultValue="08/29"
                    />
                    <input
                      className="w-full h-11 bg-surface-container-low text-on-surface font-body-md px-space-sm rounded-lg outline-none"
                      type="password"
                      defaultValue="888"
                    />
                  </div>
                </div>
              )}
            </div>

            {/* 3. Net Banking */}
            <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm transition-all">
              <div
                onClick={() => setActiveMethod("netbanking")}
                className="flex items-start justify-between cursor-pointer"
              >
                <div className="flex items-center gap-space-sm">
                  <div
                    className={`w-5 h-5 rounded-full flex items-center justify-center ${
                      activeMethod === "netbanking" ? "bg-primary" : "bg-surface-container-high"
                    }`}
                  >
                    <div
                      className={`w-2 h-2 rounded-full ${
                        activeMethod === "netbanking"
                          ? "bg-secondary-fixed"
                          : "bg-surface-container-lowest"
                      }`}
                    />
                  </div>
                  <div>
                    <span className="font-label-md text-label-md text-on-surface">Net Banking</span>
                    <p className="font-caption text-caption text-on-surface-variant mt-0.5">
                      SBI, Canara, HDFC, ICICI &amp; more
                    </p>
                  </div>
                </div>
                <span className="material-symbols-outlined text-[20px] text-on-surface-variant">
                  account_balance
                </span>
              </div>
            </div>

            {/* 4. Wallets */}
            <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm transition-all">
              <div
                onClick={() => setActiveMethod("wallets")}
                className="flex items-start justify-between cursor-pointer"
              >
                <div className="flex items-center gap-space-sm">
                  <div
                    className={`w-5 h-5 rounded-full flex items-center justify-center ${
                      activeMethod === "wallets" ? "bg-primary" : "bg-surface-container-high"
                    }`}
                  >
                    <div
                      className={`w-2 h-2 rounded-full ${
                        activeMethod === "wallets"
                          ? "bg-secondary-fixed"
                          : "bg-surface-container-lowest"
                      }`}
                    />
                  </div>
                  <div>
                    <span className="font-label-md text-label-md text-on-surface">Wallets</span>
                    <p className="font-caption text-caption text-on-surface-variant mt-0.5">
                      Paytm, Amazon Pay, Mobikwik
                    </p>
                  </div>
                </div>
                <span className="material-symbols-outlined text-[20px] text-on-surface-variant">
                  account_balance_wallet
                </span>
              </div>
            </div>
          </div>

          <div className="mt-space-lg mb-space-sm bg-surface-container-low rounded-xl p-space-sm flex items-center justify-center gap-space-xs text-on-surface-variant text-center">
            <span className="material-symbols-outlined text-[18px] text-secondary font-bold">
              verified_user
            </span>
            <span className="font-caption text-caption font-medium tracking-tight">
              100% Secure Payments • 256-bit SSL Encryption • RBI Compliant
            </span>
          </div>

          {/* Sticky Bottom Pay Bar */}
          <div className="fixed bottom-0 left-0 right-0 z-40 bg-surface-container-lowest p-margin shadow-[0_-4px_20px_rgba(11,27,58,0.08)]">
            <div className="max-w-[420px] mx-auto flex flex-col gap-1">
              <div className="flex items-center justify-between text-[11px] text-on-surface-variant px-1">
                <span>
                  Slot will be reserved for <strong className="text-on-surface">09:42</strong>
                </span>
                <span className="text-secondary font-medium">Free cancellation up to 4 hrs</span>
              </div>
              <button
                type="button"
                disabled={processing}
                onClick={handlePay}
                className="w-full h-14 bg-secondary-container text-on-secondary-fixed rounded-full font-label-md text-label-md flex items-center justify-center gap-space-xs shadow-lg active:scale-95 transition-all cursor-pointer"
              >
                {processing ? (
                  <>
                    <span className="material-symbols-outlined text-[20px] animate-spin">
                      refresh
                    </span>
                    <span className="font-bold">Processing Payment...</span>
                  </>
                ) : (
                  <>
                    <span className="font-bold">Pay &amp; Confirm ₹1,608</span>
                    <span className="material-symbols-outlined text-[20px]">lock</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
