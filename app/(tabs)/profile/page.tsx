"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { USER_AVATAR } from "@/lib/mockData";

export default function ProfilePage() {
  const router = useRouter();
  const [notificationsActive, setNotificationsActive] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [userName, setUserName] = useState("Adil Farooq");
  const [userPhone, setUserPhone] = useState("+91 98765 43210");
  const [userEmail, setUserEmail] = useState("adil.sports@gmail.com");

  const handleLogout = () => {
    if (confirm("Are you sure you want to log out of SportSpace?")) {
      router.push("/login");
    }
  };

  return (
    <div className="flex flex-col w-full px-margin pb-20 gap-space-md">
      {/* Profile Header Card */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary-container via-primary-container to-inverse-surface p-5 text-white shadow-md border border-white/10 mt-1">
        <div className="absolute -right-8 -top-8 w-40 h-40 rounded-full bg-secondary/20 blur-2xl pointer-events-none" />
        <div className="absolute -left-12 -bottom-10 w-32 h-32 rounded-full bg-secondary-fixed/10 blur-xl pointer-events-none" />

        <div className="relative z-10 flex flex-col gap-3">
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="relative">
                <img
                  alt="Adil Farooq profile portrait"
                  className="w-16 h-16 rounded-full object-cover shadow-sm bg-surface-variant p-0.5 border border-white/30"
                  src={USER_AVATAR}
                />
                <span className="absolute bottom-0 right-0 w-4 h-4 rounded-full bg-secondary-fixed-dim flex items-center justify-center border border-primary-container">
                  <span className="material-symbols-outlined text-[10px] text-on-secondary-fixed font-bold">
                    bolt
                  </span>
                </span>
              </div>
              <div className="flex flex-col min-w-0">
                <div className="flex items-center gap-1.5">
                  <h2 className="font-headline-sm font-bold text-lg text-white truncate">{userName}</h2>
                  <span
                    className="material-symbols-outlined text-secondary-fixed text-[18px]"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    verified
                  </span>
                </div>
                <p className="font-caption text-xs text-primary-fixed-dim tracking-wide">{userPhone}</p>
                <p className="font-caption text-xs text-outline-variant truncate">{userEmail}</p>
              </div>
            </div>

            <button
              onClick={() => setIsEditing(!isEditing)}
              className="shrink-0 bg-white/15 hover:bg-white/25 active:scale-95 transition-all text-white font-headline-sm text-xs font-semibold px-3.5 py-1.5 rounded-full flex items-center gap-1 shadow-sm border border-white/20 cursor-pointer"
              type="button"
            >
              <span className="material-symbols-outlined text-[15px]">{isEditing ? "done" : "edit"}</span>
              <span>{isEditing ? "Done" : "Edit"}</span>
            </button>
          </div>

          {isEditing && (
            <div className="mt-2 p-3 bg-white/10 rounded-xl flex flex-col gap-2 border border-white/15">
              <input
                type="text"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                placeholder="Full Name"
                className="h-9 px-3 bg-white/20 rounded-lg text-xs text-white placeholder:text-white/60 outline-none"
              />
              <input
                type="text"
                value={userPhone}
                onChange={(e) => setUserPhone(e.target.value)}
                placeholder="Phone Number"
                className="h-9 px-3 bg-white/20 rounded-lg text-xs text-white placeholder:text-white/60 outline-none"
              />
              <input
                type="email"
                value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
                placeholder="Email Address"
                className="h-9 px-3 bg-white/20 rounded-lg text-xs text-white placeholder:text-white/60 outline-none"
              />
            </div>
          )}
        </div>
      </div>

      {/* Player Stats Row */}
      <div className="grid grid-cols-3 gap-2.5">
        <div className="bg-surface-container-lowest p-3 rounded-2xl shadow-sm border border-surface-container flex flex-col items-center text-center">
          <span className="font-headline-lg text-headline-lg font-bold text-primary">18</span>
          <span className="font-caption text-caption text-on-surface-variant mt-0.5">
            Matches Played
          </span>
        </div>
        <div className="bg-surface-container-lowest p-3 rounded-2xl shadow-sm border border-surface-container flex flex-col items-center text-center">
          <span className="font-headline-lg text-headline-lg font-bold text-secondary">24 hrs</span>
          <span className="font-caption text-caption text-on-surface-variant mt-0.5">
            Pitch Time
          </span>
        </div>
        <div className="bg-surface-container-lowest p-3 rounded-2xl shadow-sm border border-surface-container flex flex-col items-center text-center">
          <span className="font-headline-lg text-headline-lg font-bold text-primary">4.9 ★</span>
          <span className="font-caption text-caption text-on-surface-variant mt-0.5">
            Reliability
          </span>
        </div>
      </div>

      {/* Quick Settings & Actions List */}
      <div className="bg-surface-container-lowest rounded-2xl shadow-sm border border-surface-container overflow-hidden flex flex-col">
        {/* WhatsApp Notification Preference */}
        <div className="flex items-center justify-between p-4 border-b border-surface-container">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-secondary-fixed/30 flex items-center justify-center text-secondary">
              <span className="material-symbols-outlined text-[20px]">chat</span>
            </div>
            <div className="flex flex-col">
              <span className="font-label-sm text-sm text-on-surface font-semibold">
                WhatsApp Match Updates
              </span>
              <span className="font-caption text-xs text-on-surface-variant">
                Receive match passes &amp; reminders
              </span>
            </div>
          </div>
          <label className="relative inline-flex items-center cursor-pointer shrink-0">
            <input
              checked={notificationsActive}
              onChange={(e) => setNotificationsActive(e.target.checked)}
              className="sr-only peer"
              type="checkbox"
            />
            <div className="w-11 h-6 bg-surface-container-highest peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-surface-container-lowest after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-secondary" />
          </label>
        </div>

        {/* My Bookings link */}
        <Link
          href="/bookings"
          className="flex items-center justify-between p-4 border-b border-surface-container hover:bg-surface-container-low transition-colors"
        >
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-surface-container flex items-center justify-center text-primary-container">
              <span className="material-symbols-outlined text-[20px]">calendar_month</span>
            </div>
            <span className="font-label-sm text-sm text-on-surface font-semibold">
              My Bookings &amp; Passes
            </span>
          </div>
          <span className="material-symbols-outlined text-outline text-[18px]">chevron_right</span>
        </Link>

        {/* Saved Turfs */}
        <Link
          href="/venues"
          className="flex items-center justify-between p-4 border-b border-surface-container hover:bg-surface-container-low transition-colors"
        >
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-surface-container flex items-center justify-center text-error">
              <span className="material-symbols-outlined text-[20px]">favorite</span>
            </div>
            <span className="font-label-sm text-sm text-on-surface font-semibold">
              Saved Favorite Arenas
            </span>
          </div>
          <span className="material-symbols-outlined text-outline text-[18px]">chevron_right</span>
        </Link>

        {/* Payment Methods */}
        <div className="flex items-center justify-between p-4 border-b border-surface-container hover:bg-surface-container-low transition-colors cursor-pointer">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-surface-container flex items-center justify-center text-primary-container">
              <span className="material-symbols-outlined text-[20px]">account_balance_wallet</span>
            </div>
            <div className="flex flex-col">
              <span className="font-label-sm text-sm text-on-surface font-semibold">
                Saved UPI &amp; Cards
              </span>
              <span className="font-caption text-xs text-on-surface-variant">adil@okaxis</span>
            </div>
          </div>
          <span className="material-symbols-outlined text-outline text-[18px]">chevron_right</span>
        </div>

        {/* Help & Support */}
        <a
          href="mailto:support@sportspace.in"
          className="flex items-center justify-between p-4 hover:bg-surface-container-low transition-colors"
        >
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-surface-container flex items-center justify-center text-secondary">
              <span className="material-symbols-outlined text-[20px]">help_center</span>
            </div>
            <span className="font-label-sm text-sm text-on-surface font-semibold">
              Help &amp; Customer Support
            </span>
          </div>
          <span className="material-symbols-outlined text-outline text-[18px]">chevron_right</span>
        </a>
      </div>

      {/* Logout Button */}
      <button
        type="button"
        onClick={handleLogout}
        className="w-full h-12 rounded-2xl bg-error-container/40 text-error font-label-md text-sm font-semibold flex items-center justify-center gap-2 active:scale-98 transition-transform cursor-pointer"
      >
        <span className="material-symbols-outlined text-[20px]">logout</span>
        <span>Log Out</span>
      </button>

      <p className="text-center font-caption text-[11px] text-on-surface-variant/60">
        SportSpace v2.4 • Made for Indian Sports Community
      </p>
    </div>
  );
}
