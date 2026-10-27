"use client";

import { useState } from "react";
import Link from "next/link";
import { INITIAL_BOOKINGS } from "@/lib/mockData";

export default function MyBookingsPage() {
  const [bookings, setBookings] = useState(INITIAL_BOOKINGS);
  const [activeTab, setActiveTab] = useState<"upcoming" | "completed" | "cancelled">("upcoming");
  const [ratedBookings, setRatedBookings] = useState<Record<string, number>>({});

  const upcomingBookings = bookings.filter((b) => b.status === "upcoming");
  const completedBookings = bookings.filter((b) => b.status === "completed");
  const cancelledBookings = bookings.filter((b) => b.status === "cancelled");

  const handleRate = (id: string, stars: number) => {
    setRatedBookings((prev) => ({ ...prev, [id]: stars }));
  };

  const handleCancel = (id: string) => {
    if (confirm("Are you sure you want to cancel this booking? Full refund will be processed to source.")) {
      setBookings((prev) =>
        prev.map((b) => (b.id === id ? { ...b, status: "cancelled", statusBadge: "Cancelled" } : b))
      );
    }
  };

  return (
    <div className="flex flex-col w-full px-margin pb-20">
      {/* Header Info Row */}
      <div className="flex items-center justify-between mt-1 mb-3">
        <div className="flex flex-col">
          <h1 className="font-headline-lg text-headline-lg text-primary tracking-tight">My Bookings</h1>
          <span className="font-caption text-xs text-on-surface-variant">
            Manage your game slots &amp; match history
          </span>
        </div>
        <div className="flex items-center gap-1.5 bg-surface-container-high px-3 py-1 rounded-full border border-surface-container">
          <span className="material-symbols-outlined text-[15px] text-secondary">
            sports_and_outdoors
          </span>
          <span className="font-headline-sm font-bold text-xs text-on-surface">
            {upcomingBookings.length} Active Slots
          </span>
        </div>
      </div>

      {/* Segmented Tab Switcher */}
      <div className="flex items-center justify-between w-full bg-surface-container-low p-1 rounded-2xl mb-4 shadow-xs border border-surface-container">
        <button
          type="button"
          onClick={() => setActiveTab("upcoming")}
          className={`relative flex-1 py-2 flex flex-col items-center justify-center transition-all cursor-pointer ${
            activeTab === "upcoming" ? "text-primary font-bold" : "text-on-surface-variant font-medium"
          }`}
        >
          <span className="font-headline-sm text-xs">Upcoming ({upcomingBookings.length})</span>
          <div
            className={`w-8 h-1 rounded-full mt-1 transition-all ${
              activeTab === "upcoming" ? "bg-secondary" : "bg-transparent"
            }`}
          />
        </button>

        <button
          type="button"
          onClick={() => setActiveTab("completed")}
          className={`relative flex-1 py-2 flex flex-col items-center justify-center transition-all cursor-pointer ${
            activeTab === "completed" ? "text-primary font-bold" : "text-on-surface-variant font-medium"
          }`}
        >
          <span className="font-headline-sm text-xs">Completed ({completedBookings.length})</span>
          <div
            className={`w-8 h-1 rounded-full mt-1 transition-all ${
              activeTab === "completed" ? "bg-secondary" : "bg-transparent"
            }`}
          />
        </button>

        <button
          type="button"
          onClick={() => setActiveTab("cancelled")}
          className={`relative flex-1 py-2 flex flex-col items-center justify-center transition-all cursor-pointer ${
            activeTab === "cancelled" ? "text-primary font-bold" : "text-on-surface-variant font-medium"
          }`}
        >
          <span className="font-headline-sm text-xs">Cancelled ({cancelledBookings.length})</span>
          <div
            className={`w-8 h-1 rounded-full mt-1 transition-all ${
              activeTab === "cancelled" ? "bg-secondary" : "bg-transparent"
            }`}
          />
        </button>
      </div>

      {/* Tab 1: Upcoming Content */}
      {activeTab === "upcoming" && (
        <div className="flex flex-col gap-4 w-full">
          {upcomingBookings.length === 0 ? (
            <div className="p-8 text-center bg-surface-container-lowest rounded-2xl shadow-sm border border-surface-container flex flex-col items-center gap-3">
              <span className="material-symbols-outlined text-[44px] text-outline">
                event_busy
              </span>
              <p className="font-headline-sm font-bold text-on-surface">No upcoming matches</p>
              <p className="font-body-md text-xs text-on-surface-variant">
                You don&apos;t have any active turf bookings right now.
              </p>
              <Link
                href="/venues"
                className="mt-2 px-6 py-2.5 bg-secondary text-on-secondary rounded-full font-label-md text-xs font-semibold shadow-sm"
              >
                Find &amp; Book a Turf
              </Link>
            </div>
          ) : (
            upcomingBookings.map((b) => (
              <div
                key={b.id}
                className="bg-surface-container-lowest rounded-2xl p-4 shadow-md flex flex-col gap-3.5 relative overflow-hidden border border-surface-container"
              >
                <div className="flex items-start gap-3">
                  <div className="w-16 h-16 rounded-xl overflow-hidden bg-surface-container shrink-0">
                    <img src={b.image} alt={b.venueName} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex flex-col flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <span className="font-caption text-[10px] font-bold uppercase tracking-wider text-secondary flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
                        {b.sport}
                      </span>
                      <span className="px-2 py-0.5 rounded-full bg-secondary-fixed/40 text-on-secondary-fixed font-caption text-[10px] font-bold">
                        {b.statusBadge}
                      </span>
                    </div>
                    <h3 className="font-headline-sm font-bold text-sm text-primary truncate mt-0.5">
                      {b.venueName}
                    </h3>
                    <p className="font-caption text-xs text-on-surface-variant truncate">
                      {b.pitch}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 p-2.5 rounded-xl bg-surface-container-low text-xs">
                  <div className="flex items-center gap-1.5 text-on-surface">
                    <span className="material-symbols-outlined text-[16px] text-secondary">
                      calendar_today
                    </span>
                    <span>{b.date}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-on-surface">
                    <span className="material-symbols-outlined text-[16px] text-secondary">
                      schedule
                    </span>
                    <span className="truncate">{b.timeSlot}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-1">
                  <div className="flex flex-col">
                    <span className="font-caption text-[11px] text-on-surface-variant">
                      Total Paid ({b.paymentMethod})
                    </span>
                    <span className="font-headline-sm font-bold text-sm text-primary">
                      ₹{b.totalAmount}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => handleCancel(b.id)}
                      className="px-3 py-1.5 rounded-full text-xs font-semibold text-error hover:bg-error-container/20 transition-colors cursor-pointer"
                    >
                      Cancel
                    </button>
                    <Link
                      href={`/booking/confirmed/${b.id}`}
                      className="px-4 py-2 rounded-full bg-secondary text-on-secondary font-label-sm text-xs font-bold flex items-center gap-1 shadow-sm active:scale-95 transition-transform"
                    >
                      <span>View Pass</span>
                      <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      )}

      {/* Tab 2: Completed Content */}
      {activeTab === "completed" && (
        <div className="flex flex-col gap-4 w-full">
          {completedBookings.map((b) => (
            <div
              key={b.id}
              className="bg-surface-container-lowest rounded-2xl p-4 shadow-sm flex flex-col gap-3 border border-surface-container"
            >
              <div className="flex items-start gap-3">
                <div className="w-16 h-16 rounded-xl overflow-hidden bg-surface-container shrink-0">
                  <img src={b.image} alt={b.venueName} className="w-full h-full object-cover" />
                </div>
                <div className="flex flex-col flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <span className="font-caption text-[10px] font-bold text-on-surface-variant uppercase">
                      {b.sport}
                    </span>
                    <span className="px-2 py-0.5 rounded-full bg-surface-container-high text-on-surface-variant font-caption text-[10px] font-semibold">
                      Completed
                    </span>
                  </div>
                  <h3 className="font-headline-sm font-bold text-sm text-primary truncate mt-0.5">
                    {b.venueName}
                  </h3>
                  <p className="font-caption text-xs text-on-surface-variant">
                    {b.date} • {b.timeSlot}
                  </p>
                </div>
              </div>

              {/* Rate Match Experience */}
              <div className="flex items-center justify-between p-2.5 rounded-xl bg-surface-container-low">
                <span className="font-caption text-xs text-on-surface font-medium">
                  {ratedBookings[b.id] ? "Thank you for rating!" : "Rate your turf experience:"}
                </span>
                <div className="flex items-center gap-1 text-amber-500">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => handleRate(b.id, star)}
                      className="cursor-pointer"
                    >
                      <span
                        className="material-symbols-outlined text-[18px]"
                        style={{
                          fontVariationSettings: `'FILL' ${
                            (ratedBookings[b.id] || 0) >= star ? 1 : 0
                          }`,
                        }}
                      >
                        star
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between pt-1">
                <span className="font-headline-sm font-bold text-sm text-primary">
                  ₹{b.totalAmount}
                </span>
                <Link
                  href={`/venues/${b.venueId}/slots`}
                  className="px-4 py-1.5 rounded-full bg-surface-container text-primary font-label-sm text-xs font-bold hover:bg-surface-container-high transition-colors"
                >
                  Book Again
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Tab 3: Cancelled Content */}
      {activeTab === "cancelled" && (
        <div className="flex flex-col gap-4 w-full">
          {cancelledBookings.length === 0 ? (
            <div className="p-8 text-center bg-surface-container-lowest rounded-2xl shadow-sm border border-surface-container flex flex-col items-center gap-2">
              <span className="material-symbols-outlined text-[40px] text-secondary">
                check_circle
              </span>
              <p className="font-headline-sm font-bold text-on-surface">No cancelled bookings</p>
              <p className="font-body-md text-xs text-on-surface-variant">
                You have not cancelled any bookings yet.
              </p>
            </div>
          ) : (
            cancelledBookings.map((b) => (
              <div
                key={b.id}
                className="bg-surface-container-lowest rounded-2xl p-4 shadow-sm flex flex-col gap-2.5 opacity-80 border border-surface-container"
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-headline-sm font-bold text-sm text-primary">{b.venueName}</h3>
                  <span className="px-2 py-0.5 rounded-full bg-error-container text-error font-caption text-[10px] font-bold">
                    Cancelled
                  </span>
                </div>
                <p className="font-caption text-xs text-on-surface-variant">
                  {b.date} • {b.timeSlot} • {b.pitch}
                </p>
                <div className="flex items-center justify-between pt-2 border-t border-surface-container text-xs">
                  <span className="text-secondary font-medium">Refund ₹{b.totalAmount} processed</span>
                  <Link
                    href={`/venues/${b.venueId}`}
                    className="text-secondary font-bold hover:underline"
                  >
                    View Ground
                  </Link>
                </div>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
}
