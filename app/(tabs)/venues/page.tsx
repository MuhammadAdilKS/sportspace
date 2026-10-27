"use client";

import { Suspense, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { VENUES } from "@/lib/mockData";

export default function VenuesListPage() {
  return (
    <Suspense fallback={<div className="p-8 text-center text-on-surface-variant">Loading venues...</div>}>
      <VenuesListContent />
    </Suspense>
  );
}

function VenuesListContent() {
  const searchParams = useSearchParams();
  const sportParam = searchParams.get("sport") || "";

  const [distanceFilterActive, setDistanceFilterActive] = useState(false);
  const [selectedSort, setSelectedSort] = useState<"nearest" | "price" | "rating">("nearest");
  const [showSortDropdown, setShowSortDropdown] = useState(false);
  const [searchQuery, setSearchQuery] = useState(sportParam);
  const [favorites, setFavorites] = useState<Record<string, boolean>>({
    "greenfield-arena": true,
  });

  const toggleFavorite = (e: React.MouseEvent, venueId: string) => {
    e.preventDefault();
    e.stopPropagation();
    setFavorites((prev) => ({
      ...prev,
      [venueId]: !prev[venueId],
    }));
  };

  const displayedVenues = VENUES.filter((v) => {
    if (distanceFilterActive && v.distanceKm > 3.0) return false;
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      const matches =
        v.name.toLowerCase().includes(q) ||
        v.sportType.toLowerCase().includes(q) ||
        v.area.toLowerCase().includes(q) ||
        v.sportCategories.some((sc) => sc.toLowerCase().includes(q));
      if (!matches) return false;
    }
    return true;
  }).sort((a, b) => {
    if (selectedSort === "nearest") return a.distanceKm - b.distanceKm;
    if (selectedSort === "price") return a.pricePerHour - b.pricePerHour;
    if (selectedSort === "rating") return b.rating - a.rating;
    return 0;
  });

  return (
    <div className="flex flex-col w-full pb-20">
      {/* Sub-Header Context Bar */}
      <div className="flex flex-col gap-1 px-margin pt-space-xs pb-2 bg-surface-container-lowest border-b border-surface-container-high/40">
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <h1 className="font-headline-lg text-headline-lg text-primary tracking-tight">
              {searchQuery ? `${searchQuery.charAt(0).toUpperCase() + searchQuery.slice(1)} Arenas` : "Sports Venues & Grounds"}
            </h1>
            <span className="font-caption text-xs text-on-surface-variant">
              Mangaluru, Moodbidri, Puttur, Belthangady &amp; Karkala • Verified Pitch Network
            </span>
          </div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-surface-container-high rounded-full">
            <span className="w-2 h-2 rounded-full bg-secondary" />
            <span className="font-label-sm text-xs text-primary font-bold">
              {displayedVenues.length} Venues
            </span>
          </div>
        </div>
      </div>

      {/* Filter & Sort Chips Row */}
      <div className="w-full bg-surface-container-lowest py-2.5 shadow-[0_2px_8px_rgba(11,27,58,0.04)] border-b border-surface-container relative">
        <div className="flex items-center gap-2 overflow-x-auto px-margin no-scrollbar py-0.5">
          {/* Sort Pill */}
          <div className="relative shrink-0">
            <button
              type="button"
              onClick={() => setShowSortDropdown(!showSortDropdown)}
              className="flex items-center gap-1 h-9 px-3.5 rounded-full bg-primary-container text-on-primary shrink-0 active:scale-95 transition-all shadow-xs text-xs font-semibold cursor-pointer"
            >
              <span>Sort: {selectedSort.charAt(0).toUpperCase() + selectedSort.slice(1)}</span>
              <span className="material-symbols-outlined text-[16px] text-secondary-fixed">
                arrow_drop_down
              </span>
            </button>

            {showSortDropdown && (
              <div className="absolute top-10 left-0 z-40 bg-surface-container-lowest rounded-xl shadow-xl border border-surface-container p-1 w-40 flex flex-col gap-0.5">
                <button
                  type="button"
                  onClick={() => {
                    setSelectedSort("nearest");
                    setShowSortDropdown(false);
                  }}
                  className={`text-left px-3 py-1.5 text-xs rounded-lg cursor-pointer ${
                    selectedSort === "nearest"
                      ? "bg-secondary/10 text-secondary font-bold"
                      : "hover:bg-surface-container-low"
                  }`}
                >
                  Nearest First
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setSelectedSort("price");
                    setShowSortDropdown(false);
                  }}
                  className={`text-left px-3 py-1.5 text-xs rounded-lg cursor-pointer ${
                    selectedSort === "price"
                      ? "bg-secondary/10 text-secondary font-bold"
                      : "hover:bg-surface-container-low"
                  }`}
                >
                  Lowest Price
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setSelectedSort("rating");
                    setShowSortDropdown(false);
                  }}
                  className={`text-left px-3 py-1.5 text-xs rounded-lg cursor-pointer ${
                    selectedSort === "rating"
                      ? "bg-secondary/10 text-secondary font-bold"
                      : "hover:bg-surface-container-low"
                  }`}
                >
                  Top Rated
                </button>
              </div>
            )}
          </div>

          {/* Under 3km Distance Filter */}
          <button
            type="button"
            onClick={() => setDistanceFilterActive(!distanceFilterActive)}
            className={`flex items-center gap-1.5 h-9 px-3.5 rounded-full text-xs font-semibold shrink-0 active:scale-95 transition-all shadow-xs cursor-pointer ${
              distanceFilterActive
                ? "bg-secondary text-on-secondary"
                : "bg-surface-container text-on-surface-variant hover:bg-surface-container-high"
            }`}
          >
            <span className="material-symbols-outlined text-[15px]">near_me</span>
            <span>&lt; 3 km</span>
          </button>

          {/* Search Clear if active */}
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery("")}
              className="flex items-center gap-1 h-9 px-3 rounded-full bg-error-container text-on-error-container text-xs font-semibold shrink-0 cursor-pointer"
            >
              <span>Filter: {searchQuery}</span>
              <span className="material-symbols-outlined text-[14px]">close</span>
            </button>
          )}
        </div>
      </div>

      {/* Venues Card List */}
      <div className="flex flex-col gap-space-md px-margin pt-space-md">
        {displayedVenues.length === 0 ? (
          <div className="p-space-xl text-center bg-surface-container-lowest rounded-2xl shadow-sm flex flex-col items-center gap-space-sm">
            <span className="material-symbols-outlined text-[40px] text-outline">search_off</span>
            <p className="font-headline-sm text-headline-sm text-primary">No venues found</p>
            <p className="font-body-md text-xs text-on-surface-variant">
              Try adjusting your filters or search keywords.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery("");
                setDistanceFilterActive(false);
              }}
              className="mt-2 px-4 py-2 bg-secondary text-on-secondary rounded-full font-label-sm text-xs font-semibold"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          displayedVenues.map((v) => (
            <article
              key={v.id}
              className="rounded-2xl bg-surface-container-lowest shadow-[0_4px_16px_rgba(11,27,58,0.08)] overflow-hidden flex flex-col border border-surface-container transition-all hover:shadow-lg"
            >
              <div className="relative w-full h-44 bg-surface-container">
                <img
                  src={v.images[0]}
                  alt={v.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent" />

                <div className="absolute top-3 left-3 flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-container/85 backdrop-blur-md text-on-primary font-caption text-caption font-semibold">
                  <span>{v.sportType}</span>
                </div>

                <button
                  type="button"
                  aria-label="Toggle Favorite"
                  onClick={(e) => toggleFavorite(e, v.id)}
                  className={`absolute top-3 right-3 w-9 h-9 rounded-full bg-surface-container-lowest/80 backdrop-blur-md flex items-center justify-center shadow-md active:scale-90 transition-transform cursor-pointer ${
                    favorites[v.id] ? "text-error" : "text-on-surface"
                  }`}
                >
                  <span
                    className="material-symbols-outlined text-[18px]"
                    style={favorites[v.id] ? { fontVariationSettings: "'FILL' 1" } : undefined}
                  >
                    favorite
                  </span>
                </button>

                <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-on-primary font-caption text-caption">
                  <span className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-[14px]">near_me</span>
                    {v.distanceKm} km away • {v.area}
                  </span>
                  <span className="flex items-center gap-1 font-semibold text-secondary-fixed">
                    <span
                      className="material-symbols-outlined text-[14px]"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      star
                    </span>
                    {v.rating} ({v.reviewCount})
                  </span>
                </div>
              </div>

              <div className="p-4 flex flex-col gap-space-sm">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h3 className="font-headline-sm text-headline-sm text-primary tracking-tight">
                      {v.name}
                    </h3>
                    <p className="font-caption text-caption text-on-surface-variant">
                      {v.pitchDetails}
                    </p>
                  </div>
                  <span className="px-2 py-0.5 rounded-full bg-surface-container-high text-primary font-caption text-[10px] font-bold uppercase tracking-wider shrink-0">
                    {v.statusText}
                  </span>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-surface-container">
                  <div className="flex items-baseline">
                    <span className="font-headline-sm text-headline-sm text-primary font-bold">
                      ₹{v.pricePerHour}
                    </span>
                    <span className="font-caption text-caption text-on-surface-variant">/hour</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Link
                      href={`/venues/${v.id}`}
                      className="h-9 px-3.5 rounded-full bg-surface-container text-primary font-label-sm text-xs font-semibold flex items-center hover:bg-surface-container-high transition-colors"
                    >
                      Details
                    </Link>
                    <Link
                      href={`/venues/${v.id}/slots`}
                      className="h-9 px-4 rounded-full bg-secondary text-on-secondary font-label-sm text-xs font-bold flex items-center gap-1 shadow-sm active:scale-95 hover:bg-secondary/90 transition-transform"
                    >
                      <span>Book Slot</span>
                      <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          ))
        )}
      </div>
    </div>
  );
}
