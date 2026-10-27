"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function BookingSummaryScreen() {
  const router = useRouter();
  const [name, setName] = useState("Adil Farooq");
  const [phone, setPhone] = useState("+91 98765 43210");
  const [email, setEmail] = useState("adil.sports@gmail.com");
  const [whatsappOptIn, setWhatsappOptIn] = useState(true);
  const [securing, setSecuring] = useState(false);

  const handleProceed = () => {
    setSecuring(true);
    setTimeout(() => {
      router.push("/checkout/payment");
    }, 600);
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
        <div className="flex flex-col w-full px-margin pb-32 space-y-space-md">
          {/* Progress Stepper */}
          <div className="w-full bg-surface-container-lowest rounded-xl p-space-md shadow-[0_4px_16px_rgba(11,27,58,0.06)] flex flex-col gap-space-xs">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-space-xs">
                <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-secondary-fixed text-on-secondary-fixed font-caption text-caption">
                  2
                </span>
                <span className="font-label-md text-label-md text-primary-container">
                  Review &amp; Player Details
                </span>
              </div>
              <span className="font-caption text-caption text-on-surface-variant font-medium">
                Step 2 of 3
              </span>
            </div>
            <div className="w-full bg-surface-container h-1.5 rounded-full overflow-hidden">
              <div className="bg-secondary-fixed-dim h-full rounded-full w-2/3 transition-all duration-300" />
            </div>
          </div>

          {/* Facility Card */}
          <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-[0_4px_16px_rgba(11,27,58,0.06)] flex items-center gap-space-md">
            <div className="relative w-[72px] h-[72px] rounded-xl overflow-hidden shrink-0 bg-surface-container">
              <img
                alt="Greenfield Arena"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCmg70X2iFpj39-PoPdheTWu7quQrJmBniF9Z_-rBLes88ZGukqczZk6zf7rSpAVdIz6w7tSnbZYo7LHF8QEyVDIY9oW1AMi-75MN1QvyUHmP7z12huNQRgI3auMq1wh3sDNHAcgBZh8R8AUIRvTddIqB_yb3lok54cqowO0fBG_nz-B9NL_vXi31v-UOv3SJJyy1NuOG0GQ1keGAI8bx2uo63_oIPnhrR3U9jM09fW-t0CLkUD4mGH"
              />
            </div>
            <div className="flex flex-col min-w-0 flex-1">
              <h2 className="font-headline-sm text-headline-sm text-primary tracking-tight truncate">
                Greenfield Arena &amp; Turf
              </h2>
              <p className="font-label-sm text-label-sm text-secondary font-semibold truncate">
                Pitch A (7v7 Synthetic)
              </p>
              <div className="flex items-center gap-space-xs mt-space-xs text-on-surface-variant">
                <span className="material-symbols-outlined text-[14px] text-secondary">
                  location_on
                </span>
                <span className="font-caption text-caption truncate">
                  Moodbidri, Mangalore
                </span>
              </div>
            </div>
            <div className="flex items-center gap-0.5 bg-surface-container-high px-2 py-1 rounded-full shrink-0">
              <span
                className="material-symbols-outlined text-[15px] text-amber-500"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                star
              </span>
              <span className="font-label-sm text-label-sm font-bold text-on-surface">4.8</span>
            </div>
          </div>

          {/* Booking Details Card */}
          <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-[0_4px_16px_rgba(11,27,58,0.06)] flex flex-col gap-space-md">
            <div className="flex items-center justify-between pb-space-xs">
              <div className="flex items-center gap-space-xs">
                <span className="material-symbols-outlined text-[20px] text-primary-container">
                  event_available
                </span>
                <h3 className="font-headline-sm text-headline-sm text-primary">Slot Details</h3>
              </div>
              <button
                type="button"
                onClick={() => router.back()}
                className="font-label-sm text-label-sm font-semibold text-secondary hover:underline flex items-center gap-0.5 cursor-pointer"
              >
                Edit Slot
                <span className="material-symbols-outlined text-[14px]">edit</span>
              </button>
            </div>

            <div className="grid grid-cols-1 gap-space-sm">
              <div className="flex items-center justify-between p-2.5 rounded-lg bg-surface-container-low">
                <div className="flex items-center gap-space-sm text-on-surface-variant">
                  <span className="material-symbols-outlined text-[18px] text-primary-container">
                    calendar_today
                  </span>
                  <span className="font-body-md text-body-md">Date</span>
                </div>
                <span className="font-label-md text-label-md text-primary">
                  Friday, 23 Oct 2026
                </span>
              </div>
              <div className="flex items-center justify-between p-2.5 rounded-lg bg-surface-container-low">
                <div className="flex items-center gap-space-sm text-on-surface-variant">
                  <span className="material-symbols-outlined text-[18px] text-primary-container">
                    schedule
                  </span>
                  <span className="font-body-md text-body-md">Time</span>
                </div>
                <span className="font-label-md text-label-md text-primary">
                  07:00 PM - 09:00 PM (2 hrs)
                </span>
              </div>
              <div className="flex items-center justify-between p-2.5 rounded-lg bg-surface-container-low">
                <div className="flex items-center gap-space-sm text-on-surface-variant">
                  <span className="material-symbols-outlined text-[18px] text-primary-container">
                    sports_soccer
                  </span>
                  <span className="font-body-md text-body-md">Sport</span>
                </div>
                <span className="font-label-md text-label-md text-primary">7-a-side Football</span>
              </div>
              <div className="flex items-center justify-between p-2.5 rounded-lg bg-surface-container-low">
                <div className="flex items-center gap-space-sm text-on-surface-variant">
                  <span className="material-symbols-outlined text-[18px] text-primary-container">
                    groups
                  </span>
                  <span className="font-body-md text-body-md">Max Capacity</span>
                </div>
                <span className="font-label-md text-label-md text-primary">
                  14 Players allowed
                </span>
              </div>
            </div>
          </div>

          {/* Primary Contact Information Card */}
          <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-[0_4px_16px_rgba(11,27,58,0.06)] flex flex-col gap-space-md">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-space-xs">
                <span className="material-symbols-outlined text-[20px] text-primary-container">
                  badge
                </span>
                <h3 className="font-headline-sm text-headline-sm text-primary">
                  Contact Information
                </h3>
              </div>
              <span className="font-caption text-caption text-secondary font-semibold bg-secondary-fixed/20 px-2 py-0.5 rounded-full">
                Lead Player
              </span>
            </div>

            <div className="space-y-space-sm">
              <div className="flex flex-col gap-1">
                <label className="font-label-sm text-label-sm text-on-surface-variant">
                  Full Name
                </label>
                <div className="relative flex items-center">
                  <span className="material-symbols-outlined absolute left-3 text-[18px] text-on-surface-variant">
                    person
                  </span>
                  <input
                    className="w-full h-12 pl-10 pr-3 rounded-lg bg-surface-container-low font-body-md text-body-md text-primary focus:outline-none focus:bg-surface-container-high transition-colors"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <label className="font-label-sm text-label-sm text-on-surface-variant">
                  Mobile Number
                </label>
                <div className="relative flex items-center">
                  <span className="material-symbols-outlined absolute left-3 text-[18px] text-on-surface-variant">
                    phone_iphone
                  </span>
                  <input
                    className="w-full h-12 pl-10 pr-3 rounded-lg bg-surface-container-low font-body-md text-body-md text-primary focus:outline-none focus:bg-surface-container-high transition-colors"
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <label className="font-label-sm text-label-sm text-on-surface-variant">
                  Email Address
                </label>
                <div className="relative flex items-center">
                  <span className="material-symbols-outlined absolute left-3 text-[18px] text-on-surface-variant">
                    mail
                  </span>
                  <input
                    className="w-full h-12 pl-10 pr-3 rounded-lg bg-surface-container-low font-body-md text-body-md text-primary focus:outline-none focus:bg-surface-container-high transition-colors"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
            </div>

            {/* WhatsApp Toggle */}
            <div className="flex items-center justify-between pt-space-xs mt-space-xs bg-surface-container-low p-3 rounded-lg">
              <div className="flex items-center gap-space-sm min-w-0 pr-2">
                <span className="material-symbols-outlined text-[20px] text-secondary">chat</span>
                <span className="font-label-sm text-label-sm text-primary">
                  Send booking pass on WhatsApp 💬
                </span>
              </div>
              <label className="relative inline-flex items-center cursor-pointer shrink-0">
                <input
                  checked={whatsappOptIn}
                  onChange={(e) => setWhatsappOptIn(e.target.checked)}
                  className="sr-only peer"
                  type="checkbox"
                />
                <div className="w-11 h-6 bg-surface-container-highest peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-surface-container-lowest after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-secondary" />
              </label>
            </div>
          </div>

          {/* Price Breakdown Card */}
          <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-[0_4px_16px_rgba(11,27,58,0.06)] flex flex-col gap-space-sm">
            <div className="flex items-center gap-space-xs pb-space-xs">
              <span className="material-symbols-outlined text-[20px] text-primary-container">
                receipt_long
              </span>
              <h3 className="font-headline-sm text-headline-sm text-primary">Price Breakdown</h3>
            </div>
            <div className="flex justify-between items-center py-1">
              <span className="font-body-md text-body-md text-on-surface-variant">
                Ground Fee (2 hrs @ ₹800/hr)
              </span>
              <span className="font-label-md text-label-md text-primary">₹1,600</span>
            </div>
            <div className="flex justify-between items-center py-1">
              <span className="font-body-md text-body-md text-on-surface-variant">
                Floodlight &amp; Maintenance
              </span>
              <span className="font-label-md text-label-md text-secondary">₹0 (Included)</span>
            </div>
            <div className="flex justify-between items-center py-1">
              <span className="font-body-md text-body-md text-on-surface-variant">
                Convenience / Platform Fee
              </span>
              <span className="font-label-md text-label-md text-primary">₹49</span>
            </div>
            <div className="flex justify-between items-center py-1">
              <span className="font-body-md text-body-md text-on-surface-variant">
                GST (18% on fee)
              </span>
              <span className="font-label-md text-label-md text-primary">₹9</span>
            </div>

            {/* Promo Code Block */}
            <div className="my-space-xs p-3 rounded-lg bg-secondary-fixed/15 flex items-center justify-between">
              <div className="flex items-center gap-space-xs">
                <span className="material-symbols-outlined text-[18px] text-secondary">
                  confirmation_number
                </span>
                <span className="font-label-sm text-label-sm font-bold text-on-surface">
                  PLAYSPORT50
                </span>
              </div>
              <span className="font-caption text-caption font-semibold px-2 py-0.5 rounded-full bg-secondary text-on-secondary">
                - ₹50 saved
              </span>
            </div>

            <div className="w-full h-px bg-surface-container my-1" />
            <div className="flex justify-between items-center pt-1">
              <span className="font-label-md text-label-md text-primary-container">
                Total Payable
              </span>
              <span className="font-headline-md text-headline-md text-primary-container font-bold">
                ₹1,608
              </span>
            </div>
          </div>

          {/* Cancellation Policy Note */}
          <div className="p-3.5 rounded-xl bg-surface-container flex items-start gap-space-sm text-primary-container">
            <span className="material-symbols-outlined text-[20px] text-secondary shrink-0 mt-0.5">
              info
            </span>
            <p className="font-body-md text-body-md leading-relaxed">
              Free cancellation up to 4 hours before the slot. Full refund credited instantly to
              source account.
            </p>
          </div>

          {/* Sticky Bottom Checkout Bar */}
          <div className="fixed bottom-0 left-0 right-0 z-40 bg-surface-container-lowest shadow-[0_-4px_20px_rgba(11,27,58,0.08)] pb-safe">
            <div className="max-w-[420px] mx-auto px-margin py-3 flex items-center justify-between gap-space-md">
              <div className="flex flex-col min-w-0">
                <div className="flex items-baseline gap-1">
                  <span className="font-caption text-caption text-on-surface-variant font-medium">
                    Total:
                  </span>
                  <span className="font-headline-md text-headline-md text-primary-container font-bold">
                    ₹1,608
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => window.scrollTo({ top: 400, behavior: "smooth" })}
                  className="font-caption text-caption text-secondary font-semibold hover:underline text-left cursor-pointer"
                >
                  View bill details
                </button>
              </div>
              <button
                type="button"
                onClick={handleProceed}
                className="h-14 px-6 rounded-full bg-secondary text-on-secondary font-label-md text-label-md font-semibold flex items-center justify-center gap-space-xs shadow-lg active:scale-95 transition-transform cursor-pointer"
              >
                {securing ? (
                  <>
                    <span className="material-symbols-outlined animate-spin text-[20px]">
                      progress_activity
                    </span>
                    <span>Securing Slot...</span>
                  </>
                ) : (
                  <>
                    <span>Proceed to Payment</span>
                    <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
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
