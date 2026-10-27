"use client";

import { useState } from "react";
import Link from "next/link";

export default function BookingConfirmationScreen() {
  const [copied, setCopied] = useState(false);
  const bookingId = "SS-2026-48291";

  const copyBookingId = () => {
    navigator.clipboard?.writeText(bookingId);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  return (
    <main className="flex flex-col relative w-full bg-surface flex-grow min-h-screen pt-safe pb-safe">
      <div className="flex flex-col w-full px-margin pb-space-xl">
        {/* Festive & Celebratory Header */}
        <div className="flex flex-col items-center text-center pt-space-md relative">
          {/* Animated Success Check Badge */}
          <div className="relative w-20 h-20 rounded-full bg-secondary-container flex items-center justify-center shadow-lg mb-space-md">
            <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center text-on-secondary shadow-inner">
              <span
                className="material-symbols-outlined text-[36px]"
                style={{ fontVariationSettings: "'FILL' 1, 'wght' 700" }}
              >
                check
              </span>
            </div>
            <div className="absolute -bottom-1 -right-1 bg-surface-container-lowest rounded-full p-1 shadow-sm">
              <span
                className="material-symbols-outlined text-secondary text-[20px]"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                sports_soccer
              </span>
            </div>
          </div>

          <h1 className="font-headline-lg text-headline-lg text-primary-container tracking-tight">
            Booking Confirmed! 🎉
          </h1>
          <p className="font-body-md text-body-md text-on-surface-variant mt-space-xs max-w-xs leading-relaxed">
            We&apos;ve emailed and sent the WhatsApp pass to{" "}
            <span className="font-semibold text-on-surface">+91 98765 43210</span>
          </p>

          {/* Booking Reference Badge */}
          <div className="mt-space-md flex items-center gap-space-xs bg-surface-container-high px-space-md py-1.5 rounded-full shadow-sm">
            <span className="font-label-sm text-label-sm text-on-surface-variant">Booking ID:</span>
            <span className="font-label-md text-label-md text-on-surface tracking-wider">
              {bookingId}
            </span>
            <button
              type="button"
              onClick={copyBookingId}
              aria-label="Copy Booking ID"
              className="ml-1 text-on-surface-variant hover:text-secondary active:scale-90 transition-transform flex items-center cursor-pointer"
            >
              <span className="material-symbols-outlined text-[18px]">
                {copied ? "check" : "content_copy"}
              </span>
            </button>
          </div>
        </div>

        {/* Digital Match Ticket Card */}
        <div className="relative mt-space-lg w-full bg-surface-container-lowest rounded-2xl shadow-xl overflow-hidden">
          {/* Stadium/Turf Decorative Header Strip */}
          <div className="relative h-28 w-full bg-primary-container overflow-hidden">
            <div
              className="bg-cover bg-center w-full h-full opacity-40"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDjwxFDxwWFhBgBbuiOtkPubEahFzoYO0c1YkEEHwYRRT3nDWn-GuRlHfvhJ-l6Fus50tZOs0HwTUNSHvOYFoEHsOwThSg5yhGjsYICMrBpKGwXXFeGzj4aoyXA_nfOCP2-8_EaW-f82iPjIxEV6r7Xd6B1nObIVNkIN7uRquLILWwr0fv1xLn1a_OUx7QScRNaQMFju77vt2v12t59WpQzzeENDU86VumrtQZBm2iGveR66bIkq23J')",
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary-container via-transparent to-transparent" />
            <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
              <span className="px-2.5 py-0.5 rounded-full bg-secondary text-on-secondary font-label-sm text-label-sm inline-flex items-center gap-1 shadow-sm">
                <span className="material-symbols-outlined text-[14px]">sports_soccer</span> 7v7
                Football Match Slot
              </span>
              <span className="px-2 py-0.5 rounded bg-surface-container-lowest/20 backdrop-blur-sm text-on-primary font-caption text-caption uppercase tracking-wider">
                Confirmed
              </span>
            </div>
          </div>

          {/* Ticket Venue Details */}
          <div className="p-space-md pb-space-sm bg-surface-container-lowest">
            <div className="flex items-start justify-between">
              <div>
                <h2 className="font-headline-sm text-headline-sm text-primary-container">
                  Greenfield Arena &amp; Turf
                </h2>
                <p className="font-body-md text-body-md text-on-surface-variant flex items-center gap-1 mt-0.5">
                  <span className="material-symbols-outlined text-[16px] text-secondary">
                    location_on
                  </span>{" "}
                  Moodbidri, Mangalore
                </p>
              </div>
              <div className="w-10 h-10 rounded-xl bg-surface-container flex items-center justify-center text-primary-container">
                <span className="material-symbols-outlined text-[24px]">stadium</span>
              </div>
            </div>

            {/* Ticket Middle Info Grid */}
            <div className="grid grid-cols-2 gap-3 mt-space-md p-space-sm bg-surface-container-low rounded-xl">
              <div className="flex flex-col">
                <span className="font-caption text-caption text-on-surface-variant uppercase tracking-wider">
                  Date
                </span>
                <span className="font-label-md text-label-md text-on-surface mt-0.5 flex items-center gap-1">
                  <span className="material-symbols-outlined text-[16px] text-on-surface-variant">
                    calendar_today
                  </span>{" "}
                  Fri, 23 Oct 2026
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-caption text-caption text-on-surface-variant uppercase tracking-wider">
                  Time
                </span>
                <span className="font-label-md text-label-md text-on-surface mt-0.5 flex items-center gap-1">
                  <span className="material-symbols-outlined text-[16px] text-on-surface-variant">
                    schedule
                  </span>{" "}
                  07:00 PM - 09:00 PM
                </span>
              </div>
              <div className="flex flex-col mt-1">
                <span className="font-caption text-caption text-on-surface-variant uppercase tracking-wider">
                  Pitch Details
                </span>
                <span className="font-label-md text-label-md text-on-surface mt-0.5 truncate">
                  Pitch A (Synthetic Floodlit)
                </span>
              </div>
              <div className="flex flex-col mt-1">
                <span className="font-caption text-caption text-on-surface-variant uppercase tracking-wider">
                  Amount Paid
                </span>
                <span className="font-label-md text-label-md text-secondary mt-0.5 font-bold">
                  ₹1,608{" "}
                  <span className="font-caption text-caption text-on-surface-variant font-normal">
                    (UPI)
                  </span>
                </span>
              </div>
            </div>
          </div>

          {/* Scalloped Tear Notch & Perforation */}
          <div className="relative w-full h-6 flex items-center justify-between px-0 overflow-hidden bg-surface-container-lowest">
            <div className="w-4 h-8 bg-surface rounded-r-full -ml-2 shadow-inner" />
            <div className="flex-grow mx-2 h-0 border-b-2 border-dashed border-outline-variant" />
            <div className="w-4 h-8 bg-surface rounded-l-full -mr-2 shadow-inner" />
          </div>

          {/* Ticket Footer / Entry QR Code Section */}
          <div className="p-space-md pt-space-xs bg-surface-container-lowest flex flex-col items-center text-center">
            <div className="bg-surface-container-lowest p-3 rounded-2xl shadow-md mt-2 flex flex-col items-center">
              <svg className="w-36 h-36" fill="currentColor" viewBox="0 0 100 100">
                <rect className="text-primary-container" height="28" rx="4" width="28" x="5" y="5" />
                <rect fill="#FFFFFF" height="20" rx="2" width="20" x="9" y="9" />
                <rect className="text-primary-container" height="12" rx="1" width="12" x="13" y="13" />
                <rect className="text-primary-container" height="28" rx="4" width="28" x="67" y="5" />
                <rect fill="#FFFFFF" height="20" rx="2" width="20" x="71" y="9" />
                <rect className="text-primary-container" height="12" rx="1" width="12" x="75" y="13" />
                <rect className="text-primary-container" height="28" rx="4" width="28" x="5" y="67" />
                <rect fill="#FFFFFF" height="20" rx="2" width="20" x="9" y="71" />
                <rect className="text-primary-container" height="12" rx="1" width="12" x="13" y="75" />
                <rect className="text-primary-container" height="6" rx="1" width="6" x="38" y="7" />
                <rect className="text-secondary" height="6" rx="1" width="6" x="48" y="7" />
                <rect className="text-primary-container" height="6" rx="1" width="6" x="56" y="7" />
                <rect className="text-primary-container" height="14" rx="1" width="6" x="48" y="17" />
                <rect className="text-secondary" height="6" rx="1" width="10" x="35" y="50" />
                <rect className="text-primary-container" height="8" rx="1" width="8" x="50" y="48" />
                <rect className="text-secondary" height="6" rx="1" width="12" x="80" y="48" />
                <rect className="text-primary-container" height="14" rx="1" width="10" x="38" y="78" />
                <rect className="text-secondary" height="6" rx="1" width="6" x="52" y="80" />
                <rect className="text-primary-container" height="13" rx="1" width="12" x="80" y="79" />
              </svg>
            </div>
            <p className="font-label-sm text-label-sm text-on-surface-variant mt-2">
              Scan at Ground Entry Kiosk
            </p>
            <div className="mt-1 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container text-primary-container font-label-md text-label-md">
              <span className="material-symbols-outlined text-[16px] text-secondary">pin</span>
              <span>
                Passcode: <span className="font-bold tracking-wider">4829</span>
              </span>
            </div>
          </div>
        </div>

        {/* Pro Match Tip */}
        <div className="mt-space-md bg-surface-container p-space-md rounded-2xl flex items-center gap-space-sm shadow-sm">
          <div className="w-10 h-10 rounded-full bg-secondary-fixed flex items-center justify-center text-on-secondary-fixed shrink-0">
            <span className="material-symbols-outlined text-[20px]">lightbulb</span>
          </div>
          <div className="flex flex-col">
            <span className="font-label-sm text-label-sm text-on-surface font-semibold">
              Pro Match Tip
            </span>
            <span className="font-body-md text-caption text-on-surface-variant">
              Arrive 15 minutes early to stretch, warm up, and claim complimentary turf bibs.
            </span>
          </div>
        </div>

        {/* Action Buttons Section */}
        <div className="mt-space-lg flex flex-col gap-3">
          <Link
            href="/bookings"
            className="w-full h-14 bg-secondary text-on-secondary rounded-full font-label-md text-label-md flex items-center justify-center gap-2 shadow-md hover:opacity-95 active:scale-95 transition-all"
          >
            <span className="material-symbols-outlined text-[20px]">confirmation_number</span>
            View in My Bookings
          </Link>
          <a
            href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=Football+Match+at+Greenfield+Arena&location=Moodbidri,+Mangalore"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full h-14 bg-surface-container-lowest text-primary-container rounded-full font-label-md text-label-md flex items-center justify-center gap-2 shadow-sm hover:bg-surface-container active:scale-95 transition-all"
          >
            <span className="material-symbols-outlined text-[20px] text-primary-container">
              event
            </span>
            Add to Google Calendar 📅
          </a>
          <Link
            href="/home"
            className="mt-1 w-full py-2.5 text-center text-secondary font-label-md text-label-md hover:underline transition-all"
          >
            Back to Home Dashboard
          </Link>
        </div>
      </div>
    </main>
  );
}
