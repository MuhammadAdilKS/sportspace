"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const DATES = [
  { day: "Wed", date: "21", status: "Avail" },
  { day: "Thu", date: "22", status: "Avail" },
  { day: "Fri", date: "23", status: "Avail" },
  { day: "Sat", date: "24", status: "Weekend" },
  { day: "Sun", date: "25", status: "Fast Filling", urgent: true },
  { day: "Mon", date: "26", status: "Avail" },
  { day: "Tue", date: "27", status: "Avail" },
];

const INITIAL_SLOTS = [
  { id: "17", time: "05:00 PM", endTime: "06:00 PM", price: 800, booked: false },
  { id: "18", time: "06:00 PM", endTime: "07:00 PM", price: 800, booked: true },
  { id: "19", time: "07:00 PM", endTime: "08:00 PM", price: 800, booked: false },
  { id: "20", time: "08:00 PM", endTime: "09:00 PM", price: 800, booked: false },
  { id: "21", time: "09:00 PM", endTime: "10:00 PM", price: 800, booked: false },
  { id: "22", time: "10:00 PM", endTime: "11:00 PM", price: 700, booked: false, badge: "Deal" },
];

export default function SlotSelectionScreen() {
  const router = useRouter();
  const [selectedDate, setSelectedDate] = useState("23");
  const [duration, setDuration] = useState("2 hrs");
  const [selectedSlotIds, setSelectedSlotIds] = useState<string[]>(["19", "20"]);

  const toggleSlot = (id: string, booked: boolean) => {
    if (booked) return;
    setSelectedSlotIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const totalAmount = selectedSlotIds.reduce((sum, id) => {
    const slot = INITIAL_SLOTS.find((s) => s.id === id);
    return sum + (slot ? slot.price : 0);
  }, 0);

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

      {/* Main Content */}
      <main className="flex flex-col relative w-full pt-16 bg-surface min-h-screen">
        <div className="flex flex-col w-full pb-32">
          {/* Step Progress Indicator */}
          <div className="px-margin pt-space-sm pb-space-xs bg-surface-container-lowest">
            <div className="flex items-center justify-between mb-space-xs">
              <span className="font-label-sm text-label-sm text-on-surface-variant font-medium">
                Step 1 of 3: Date &amp; Slots
              </span>
              <span className="font-label-sm text-label-sm font-semibold text-secondary">
                33% Completed
              </span>
            </div>
            <div className="w-full h-1.5 bg-surface-container rounded-full overflow-hidden">
              <div className="h-full bg-secondary-fixed-dim rounded-full transition-all duration-300 w-1/3" />
            </div>
          </div>

          {/* Venue Summary Snippet */}
          <div className="px-margin py-space-sm bg-surface-container-low flex items-center justify-between">
            <div className="flex items-center gap-space-xs min-w-0">
              <span
                className="material-symbols-outlined text-[18px] text-secondary shrink-0"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                sports_soccer
              </span>
              <p className="font-body-md text-body-md text-on-surface font-medium truncate">
                Greenfield Arena <span className="text-on-surface-variant">•</span> Pitch A (7v7 Synthetic)
              </p>
            </div>
            <span className="font-caption text-caption bg-surface-container text-primary-container px-2 py-0.5 rounded-full shrink-0 font-semibold uppercase tracking-wider">
              Outdoor
            </span>
          </div>

          {/* Main Booking Flow */}
          <div className="px-margin pt-space-md flex flex-col gap-space-lg">
            {/* Date Section */}
            <section className="flex flex-col gap-space-sm">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-space-xs">
                  <span className="material-symbols-outlined text-[20px] text-primary">
                    calendar_month
                  </span>
                  <h2 className="font-headline-sm text-headline-sm text-primary tracking-tight">
                    Select Date
                  </h2>
                </div>
                <button
                  type="button"
                  className="flex items-center gap-1 bg-surface-container-low hover:bg-surface-container transition-colors px-3 py-1.5 rounded-full text-on-surface font-label-sm text-label-sm font-semibold shadow-sm"
                >
                  <span>October 2026</span>
                  <span className="material-symbols-outlined text-[18px]">keyboard_arrow_down</span>
                </button>
              </div>

              {/* Horizontal Week Date Strip */}
              <div className="flex gap-2.5 overflow-x-auto pb-1.5 -mx-margin px-margin scroll-smooth no-scrollbar">
                {DATES.map((d) => {
                  const isSelected = selectedDate === d.date;
                  return (
                    <button
                      key={d.date}
                      type="button"
                      onClick={() => setSelectedDate(d.date)}
                      className={`flex flex-col items-center justify-center rounded-2xl transition-all shrink-0 cursor-pointer ${
                        isSelected
                          ? "min-w-[66px] h-[82px] bg-secondary shadow-md -my-0.5 relative"
                          : "min-w-[62px] h-[78px] bg-surface-container-lowest shadow-sm hover:bg-surface-container-low"
                      }`}
                    >
                      {isSelected && (
                        <span className="absolute -top-1 px-1.5 py-0.2 bg-secondary-fixed text-on-secondary-fixed font-caption text-[9px] font-bold rounded-full uppercase tracking-widest shadow-xs">
                          Selected
                        </span>
                      )}
                      <span
                        className={`font-caption text-caption font-medium ${
                          isSelected ? "text-on-secondary opacity-90" : "text-on-surface-variant"
                        }`}
                      >
                        {d.day}
                      </span>
                      <span
                        className={`font-headline-sm text-headline-sm mt-0.5 ${
                          isSelected ? "text-on-secondary font-extrabold" : "text-on-surface font-bold"
                        }`}
                      >
                        {d.date}
                      </span>
                      {isSelected ? (
                        <span className="w-1.5 h-1.5 rounded-full bg-secondary-fixed mt-1.5" />
                      ) : (
                        <span
                          className={`font-caption text-[10px] mt-1 ${
                            d.urgent
                              ? "text-error font-semibold"
                              : d.status === "Weekend"
                              ? "text-on-surface-variant font-medium"
                              : "text-secondary font-semibold"
                          }`}
                        >
                          {d.status}
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            </section>

            {/* Duration Segmented Control */}
            <section className="flex flex-col gap-space-xs">
              <div className="flex items-center justify-between">
                <label className="font-headline-sm text-headline-sm text-primary tracking-tight">
                  Select Duration
                </label>
                <span className="font-caption text-caption text-secondary font-medium flex items-center gap-0.5">
                  <span className="material-symbols-outlined text-[14px]">bolt</span> Best Value: 2 hrs
                </span>
              </div>
              <div className="p-1 bg-surface-container-low rounded-2xl flex items-center gap-1">
                {["1 hr", "1.5 hrs", "2 hrs", "3 hrs"].map((dur) => {
                  const isActive = duration === dur;
                  return (
                    <button
                      key={dur}
                      type="button"
                      onClick={() => setDuration(dur)}
                      className={`flex-1 py-2 text-center rounded-xl font-label-sm text-label-sm transition-all cursor-pointer flex flex-col items-center ${
                        isActive
                          ? "bg-primary-container text-on-primary font-semibold shadow-sm"
                          : "text-on-surface-variant font-medium hover:text-on-surface"
                      }`}
                    >
                      <span>{dur}</span>
                      {dur === "2 hrs" && isActive && (
                        <span className="text-[9px] text-secondary-fixed leading-none font-bold uppercase tracking-wider mt-0.5">
                          Recommended
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            </section>

            {/* Time Slot Section */}
            <section className="flex flex-col gap-space-sm">
              <div className="flex flex-col">
                <div className="flex items-center justify-between">
                  <h2 className="font-headline-sm text-headline-sm text-primary tracking-tight">
                    Select Time Slot
                  </h2>
                  <span className="font-label-sm text-label-sm font-semibold text-secondary flex items-center gap-0.5">
                    <span className="material-symbols-outlined text-[16px]">flare</span> Floodlights On
                  </span>
                </div>
                <p className="font-caption text-caption text-on-surface-variant mt-0.5">
                  Evening &amp; Night Floodlit Slots
                </p>
              </div>

              {/* Legend Indicator Row */}
              <div className="flex items-center justify-start gap-4 py-2 px-3 bg-surface-container-lowest rounded-xl shadow-sm">
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-surface-container-lowest shadow-inner ring-1 ring-outline-variant" />
                  <span className="font-caption text-caption text-on-surface-variant">Available</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-secondary" />
                  <span className="font-caption text-caption text-on-surface font-semibold">
                    Selected
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-surface-container-highest" />
                  <span className="font-caption text-caption text-outline">Booked</span>
                </div>
              </div>

              {/* Time Slot Grid */}
              <div className="grid grid-cols-3 gap-2.5">
                {INITIAL_SLOTS.map((slot) => {
                  const isSelected = selectedSlotIds.includes(slot.id);
                  if (slot.booked) {
                    return (
                      <div
                        key={slot.id}
                        className="flex flex-col items-center justify-center p-3 rounded-xl bg-surface-container-high/60 cursor-not-allowed text-center opacity-70"
                      >
                        <span className="font-label-sm text-label-sm text-outline font-semibold line-through">
                          {slot.time}
                        </span>
                        <span className="font-caption text-[11px] text-outline line-through">
                          {slot.endTime}
                        </span>
                        <span className="font-caption text-[10px] text-error font-medium mt-1 uppercase tracking-wide">
                          Booked
                        </span>
                      </div>
                    );
                  }

                  return (
                    <button
                      key={slot.id}
                      type="button"
                      onClick={() => toggleSlot(slot.id, slot.booked)}
                      className={`flex flex-col items-center justify-center p-3 rounded-xl transition-all active:scale-[0.98] text-center relative cursor-pointer ${
                        isSelected
                          ? "bg-secondary text-on-secondary shadow-md overflow-hidden"
                          : "bg-surface-container-lowest shadow-sm hover:shadow-md"
                      }`}
                    >
                      {isSelected && (
                        <span className="absolute top-1 right-1.5 material-symbols-outlined text-[13px] text-secondary-fixed">
                          check_circle
                        </span>
                      )}
                      {slot.badge && !isSelected && (
                        <span className="absolute -top-1 px-1.5 py-0.1 bg-primary-container text-primary-fixed font-caption text-[8px] font-bold rounded-full uppercase">
                          {slot.badge}
                        </span>
                      )}
                      <span
                        className={`font-label-sm text-label-sm ${
                          isSelected ? "font-bold" : "text-on-surface font-semibold"
                        }`}
                      >
                        {slot.time}
                      </span>
                      <span
                        className={`font-caption text-[11px] ${
                          isSelected ? "text-on-secondary opacity-90" : "text-on-surface-variant"
                        }`}
                      >
                        {slot.endTime}
                      </span>
                      <span
                        className={`font-caption text-caption mt-1 ${
                          isSelected ? "font-extrabold text-secondary-fixed" : "font-bold text-secondary"
                        }`}
                      >
                        {isSelected ? "Selected" : `₹${slot.price}`}
                      </span>
                    </button>
                  );
                })}
              </div>
            </section>

            {/* Price Calculation Summary Card */}
            <div className="bg-surface-container-lowest rounded-2xl p-4 shadow-sm flex flex-col gap-3">
              <div className="flex items-start justify-between pb-2 bg-surface-container-low/60 p-3 rounded-xl">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-secondary-fixed/40 flex items-center justify-center text-on-secondary-fixed">
                    <span className="material-symbols-outlined text-[18px]">verified</span>
                  </div>
                  <div>
                    <p className="font-label-sm text-label-sm text-primary font-bold">
                      Fri, {selectedDate} Oct • 07:00 PM - 09:00 PM
                    </p>
                    <p className="font-caption text-caption text-on-surface-variant font-medium">
                      Duration: {selectedSlotIds.length} Hours (Consecutive Match Slots)
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-1.5 px-1 font-body-md text-body-md">
                <div className="flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm">
                  <span>Court Base Rate</span>
                  <span className="font-medium text-on-surface">
                    ₹800/hr × {selectedSlotIds.length} hrs = ₹{totalAmount.toLocaleString("en-IN")}
                  </span>
                </div>
                <div className="flex items-center justify-between font-label-sm text-label-sm">
                  <span className="flex items-center gap-1 text-on-surface-variant">
                    <span className="material-symbols-outlined text-[15px] text-secondary">
                      lightbulb
                    </span>{" "}
                    Floodlight Charges
                  </span>
                  <span className="font-semibold text-secondary">Included Free</span>
                </div>
              </div>
            </div>
          </div>

          {/* Sticky Bottom Bar */}
          <div className="fixed bottom-0 left-0 right-0 z-40 bg-surface-container-lowest shadow-[0_-4px_20px_rgba(11,27,58,0.08)] px-margin py-3 pb-safe flex items-center justify-between">
            <div className="flex flex-col">
              <div className="flex items-baseline gap-1">
                <span className="font-headline-md text-headline-md text-primary-container font-extrabold tracking-tight">
                  ₹{totalAmount.toLocaleString("en-IN")}
                </span>
                <span className="font-caption text-caption text-on-surface-variant font-medium">
                  for {selectedSlotIds.length} hrs
                </span>
              </div>
              <span className="font-caption text-[11px] text-secondary font-semibold flex items-center gap-0.5">
                <span className="material-symbols-outlined text-[12px]">flash_on</span> Instant
                Confirmation
              </span>
            </div>
            <button
              type="button"
              onClick={() => router.push("/checkout/summary")}
              className="h-14 px-6 rounded-full bg-secondary hover:bg-on-secondary-container active:scale-[0.98] text-on-secondary font-label-md text-label-md font-bold shadow-md flex items-center gap-2 transition-all cursor-pointer"
            >
              <span>Continue to Summary</span>
              <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
