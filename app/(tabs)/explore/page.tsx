"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { SPORTS_CATEGORIES } from "@/lib/mockData";

export default function ExplorePage() {
  const router = useRouter();
  const [filterType, setFilterType] = useState<"all" | "outdoor" | "indoor" | "water" | "fitness">("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filterTabs = [
    { id: "all" as const, label: "All Sports" },
    { id: "outdoor" as const, label: "Outdoor" },
    { id: "indoor" as const, label: "Indoor" },
    { id: "water" as const, label: "Water Sports" },
    { id: "fitness" as const, label: "Fitness" },
  ];

  const filteredCategories = SPORTS_CATEGORIES.filter((sport) => {
    const matchesQuery =
      sport.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      sport.countText.toLowerCase().includes(searchQuery.toLowerCase());

    if (!matchesQuery) return false;

    if (filterType === "outdoor") {
      return ["Football", "Box Cricket", "Basketball", "Volleyball", "Tennis"].includes(sport.name);
    }
    if (filterType === "indoor") {
      return ["Badminton", "Basketball"].includes(sport.name);
    }
    if (filterType === "water") {
      return ["Swimming"].includes(sport.name);
    }
    return true;
  });

  return (
    <div className="flex flex-col w-full pb-20">
      {/* Content Header Area */}
      <div className="px-margin pt-space-xs pb-1">
        <h1 className="font-headline-lg text-headline-lg text-primary tracking-tight">Explore Sports</h1>
        <p className="font-body-md text-body-md text-on-surface-variant">
          Discover 140+ verified grounds &amp; courts across Mangaluru, Moodbidri, Puttur, Belthangady &amp; Karkala
        </p>
      </div>

      {/* Search & Filter Bar */}
      <div className="px-margin py-2">
        <div className="flex items-center gap-2">
          <div className="flex-1 flex items-center bg-surface-container-lowest rounded-xl px-3.5 py-3 shadow-[0_4px_16px_rgba(11,27,58,0.06)] border border-surface-container">
            <span className="material-symbols-outlined text-outline text-[20px] shrink-0 mr-2">
              search
            </span>
            <input
              className="w-full bg-transparent font-body-md text-body-md text-on-surface placeholder:text-outline focus:outline-none"
              placeholder="Search sports or venues..."
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="text-xs text-on-surface-variant hover:text-on-surface cursor-pointer"
              >
                Clear
              </button>
            )}
          </div>
          <Link
            href="/venues"
            aria-label="Filter Sports"
            className="w-12 h-12 flex items-center justify-center rounded-xl bg-surface-container-lowest text-primary shadow-[0_4px_16px_rgba(11,27,58,0.06)] border border-surface-container active:scale-95 transition-transform shrink-0"
          >
            <span className="material-symbols-outlined text-[20px]">tune</span>
          </Link>
        </div>
      </div>

      {/* Quick Filter Horizontal Scroll */}
      <div className="w-full overflow-x-auto no-scrollbar py-1 px-margin">
        <div className="flex items-center gap-2 min-w-max pb-1">
          {filterTabs.map((tab) => {
            const isActive = filterType === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setFilterType(tab.id)}
                className={`h-9 px-4 rounded-full font-label-md text-xs font-semibold flex items-center gap-1.5 transition-all shadow-xs cursor-pointer ${
                  isActive
                    ? "bg-primary-container text-on-primary shadow-sm"
                    : "bg-surface-container-lowest text-on-surface-variant hover:bg-surface-container-low border border-surface-container"
                }`}
              >
                {isActive && <span className="w-1.5 h-1.5 rounded-full bg-secondary-fixed" />}
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 2-Column Sports Categories Grid */}
      <div className="px-margin pt-2 pb-4 grid grid-cols-2 gap-3">
        {filteredCategories.map((sport) => (
          <div
            key={sport.id}
            onClick={() => router.push(`/venues?sport=${encodeURIComponent(sport.name.toLowerCase())}`)}
            className="group relative aspect-[4/5] rounded-2xl overflow-hidden shadow-[0_4px_16px_rgba(11,27,58,0.08)] bg-cover bg-center cursor-pointer active:scale-[0.98] transition-all border border-surface-container-high/40 hover:shadow-lg"
            style={{ backgroundImage: `url('${sport.image}')` }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-primary-container via-primary-container/40 to-transparent" />

            {/* Top Icon Pill */}
            <div className="absolute top-2.5 left-2.5 w-8 h-8 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center shadow-sm">
              <span className="material-symbols-outlined text-[18px] text-primary">
                {sport.icon}
              </span>
            </div>

            {/* Live badge if any */}
            {sport.tag && (
              <div className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded-full bg-secondary-fixed/90 backdrop-blur-sm flex items-center gap-1">
                <span className="w-1 h-1 rounded-full bg-secondary" />
                <span className="font-caption text-[10px] text-on-secondary-fixed-variant font-bold uppercase tracking-wider">
                  {sport.tag}
                </span>
              </div>
            )}

            {/* Specific sport badges */}
            {sport.badge && (
              <div className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded-full bg-white/80 backdrop-blur-sm">
                <span className="font-caption text-[10px] text-primary font-semibold">
                  {sport.badge}
                </span>
              </div>
            )}

            {/* Card Copy */}
            <div className="absolute bottom-0 inset-x-0 p-3 flex flex-col justify-end text-white">
              <span className="font-headline-sm font-bold text-base leading-tight drop-shadow-sm">
                {sport.name}
              </span>
              <span className="font-caption text-xs text-surface-container-high opacity-95">
                {sport.countText}
              </span>
            </div>
          </div>
        ))}

        {/* More Sports Bento Card */}
        <div
          onClick={() => router.push("/venues")}
          className="group relative aspect-[4/5] rounded-2xl overflow-hidden shadow-[0_4px_16px_rgba(11,27,58,0.08)] bg-surface-container-high flex flex-col justify-between p-3.5 cursor-pointer active:scale-[0.98] transition-all border border-surface-container hover:shadow-md"
        >
          <div className="flex items-center justify-between w-full">
            <div className="flex -space-x-1.5 overflow-hidden">
              <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center shadow-sm text-primary">
                <span className="material-symbols-outlined text-[16px]">fitness_center</span>
              </div>
              <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center shadow-sm text-primary">
                <span className="material-symbols-outlined text-[16px]">sports_mma</span>
              </div>
              <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center shadow-sm text-primary">
                <span className="material-symbols-outlined text-[16px]">self_improvement</span>
              </div>
            </div>
            <div className="w-8 h-8 rounded-full bg-secondary-fixed flex items-center justify-center shadow-sm group-hover:translate-x-0.5 transition-transform text-on-secondary-fixed">
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </div>
          </div>

          <div className="flex flex-col">
            <div className="flex items-center gap-1 mb-1">
              <span className="material-symbols-outlined text-[14px] text-secondary">verified</span>
              <span className="font-caption text-[10px] text-secondary font-bold uppercase tracking-wider">
                Multi-Sport
              </span>
            </div>
            <span className="font-headline-sm font-bold text-base text-primary leading-tight">
              +15 Other
            </span>
            <span className="font-caption text-xs text-on-surface-variant mt-0.5">
              Gym, TT, Skating &amp; Yoga
            </span>
          </div>
        </div>
      </div>

      {/* Tournament League Promo Banner */}
      <div className="px-margin pb-4">
        <div className="relative overflow-hidden rounded-2xl bg-primary-container p-4 text-white shadow-[0_8px_24px_rgba(11,27,58,0.12)]">
          <div className="absolute -right-6 -bottom-6 w-32 h-32 rounded-full bg-secondary-fixed/15 blur-2xl pointer-events-none" />

          <div className="relative z-10 flex flex-col gap-2">
            <div className="flex items-start justify-between gap-2">
              <div className="flex items-center gap-1.5">
                <span className="text-xl">🏆</span>
                <span className="font-caption text-xs text-secondary-fixed font-bold uppercase tracking-wider">
                  Corporate &amp; Leagues
                </span>
              </div>
              <span className="material-symbols-outlined text-outline-variant text-[20px]">stars</span>
            </div>

            <div>
              <h2 className="font-headline-sm font-bold text-base text-white">Hosting a tournament?</h2>
              <p className="font-body-md text-xs text-surface-container-highest mt-1">
                Register your corporate league, inter-college cup, or weekend tournament in simple steps.
              </p>
            </div>

            <div className="pt-1">
              <Link
                href="/venues"
                className="h-11 px-5 rounded-full bg-secondary-fixed hover:bg-secondary-fixed-dim text-on-secondary-fixed font-headline-sm font-bold text-xs inline-flex items-center justify-center gap-2 shadow-md active:scale-95 transition-all"
              >
                <span>Explore Events &amp; Venues</span>
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
