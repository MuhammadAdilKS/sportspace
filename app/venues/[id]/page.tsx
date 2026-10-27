"use client";

import { Suspense, useState, useEffect } from "react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { VENUES } from "@/lib/mockData";

export default function VenueDetailsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-surface flex items-center justify-center">Loading arena details...</div>}>
      <VenueDetailsContent />
    </Suspense>
  );
}

function VenueDetailsContent() {
  const router = useRouter();
  const params = useParams();
  const venueId = (params?.id as string) || "greenfield-arena";
  const venue = VENUES.find((v) => v.id === venueId) || VENUES[0];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);
  const [copiedShare, setCopiedShare] = useState(false);

  const images = venue.images && venue.images.length > 0 ? venue.images : [
    "https://lh3.googleusercontent.com/aida-public/AB6AXuC6VewcbJl_Lmk33VydVwJvn-r5lKiDCUxAtb7s62BNFud6sM01ihX-vTC1fSMlm1AKvL85ryS-WtLIolzseSojxEPjweWC5zRLfDrxTBtX3qBNYM_hYdi8HQNNhbToNCy2wvLG5QcEtI5a120-ZPCkAby3ayanN9Xff4SksKnUSwxIVa2ROescRJbOy_htjRjrwOkLO_yMgSasxCkJHMxWhFaMGJjyn-UPXRnV4ACehHAoAbCmdxvN"
  ];

  useEffect(() => {
    if (images.length > 1) {
      const timer = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % images.length);
      }, 4000);
      return () => clearInterval(timer);
    }
  }, [images.length]);

  const handleShare = () => {
    if (typeof navigator !== "undefined" && navigator.share) {
      navigator.share({
        title: venue.name,
        text: `Book a match slot at ${venue.name} on SportSpace!`,
        url: window.location.href,
      }).catch(() => {});
    } else if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopiedShare(true);
      setTimeout(() => setCopiedShare(false), 2000);
    }
  };

  return (
    <div className="bg-surface font-body-md text-on-surface antialiased min-h-screen flex flex-col">
      {/* Top Header */}
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
              {venue.name}
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
      <main className="flex flex-col relative w-full pt-16 pb-28 bg-surface min-h-screen">
        {/* Image Carousel */}
        <div className="relative w-full h-[260px] overflow-hidden bg-primary-container">
          <div
            className="flex w-full h-full transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {images.map((img, idx) => (
              <div key={idx} className="min-w-full h-full relative">
                <img
                  src={img}
                  alt={`${venue.name} view ${idx + 1}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20" />
              </div>
            ))}
          </div>

          {/* Carousel Overlay Actions */}
          <div className="absolute top-4 right-4 z-20 flex items-center gap-2">
            <button
              type="button"
              onClick={handleShare}
              aria-label="Share venue"
              className="w-10 h-10 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center text-on-surface shadow-md active:scale-95 transition-transform relative cursor-pointer"
            >
              <span className="material-symbols-outlined text-[20px]">share</span>
              {copiedShare && (
                <span className="absolute -bottom-7 right-0 bg-black text-white text-[10px] px-2 py-0.5 rounded shadow whitespace-nowrap">
                  Link copied!
                </span>
              )}
            </button>
            <button
              type="button"
              onClick={() => setIsFavorite(!isFavorite)}
              aria-label="Favorite venue"
              className={`w-10 h-10 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center shadow-md active:scale-95 transition-transform cursor-pointer ${
                isFavorite ? "text-error" : "text-on-surface"
              }`}
            >
              <span
                className="material-symbols-outlined text-[20px]"
                style={isFavorite ? { fontVariationSettings: "'FILL' 1" } : undefined}
              >
                favorite
              </span>
            </button>
          </div>

          {/* Carousel Dot Indicators */}
          {images.length > 1 && (
            <div className="absolute bottom-9 left-0 right-0 z-20 flex items-center justify-center gap-1.5">
              {images.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setCurrentSlide(idx)}
                  className={`h-1.5 rounded-full transition-all ${
                    idx === currentSlide ? "w-6 bg-secondary-fixed" : "w-1.5 bg-white/60"
                  }`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Main Details Sheet */}
        <div className="relative z-10 -mt-6 bg-surface-container-lowest rounded-t-[28px] px-margin pt-6 pb-6 shadow-xl flex flex-col gap-space-md border-t border-surface-container">
          {/* Top Badges & Venue Title */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between gap-2">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-surface-container-low text-secondary font-label-sm text-xs font-semibold">
                <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                Open Now • Closes 11:30 PM
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-surface-container-high text-primary-container font-label-sm text-xs font-semibold">
                <span
                  className="material-symbols-outlined text-secondary text-[14px]"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  verified
                </span>
                Verified Arena
              </span>
            </div>

            <h1 className="font-headline-lg text-headline-lg text-primary tracking-tight">
              {venue.name}
            </h1>

            <div className="flex items-center gap-2 text-on-surface-variant font-label-md text-xs">
              <div className="flex items-center text-secondary gap-1 font-bold">
                <span
                  className="material-symbols-outlined text-[18px]"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  star
                </span>
                <span className="text-on-surface">{venue.rating}</span>
              </div>
              <span className="text-on-surface-variant/40">•</span>
              <span>{venue.reviewCount} player reviews</span>
            </div>

            <div className="flex items-start gap-1.5 text-on-surface-variant font-body-md text-xs pt-0.5">
              <span className="material-symbols-outlined text-[18px] text-secondary shrink-0 mt-0.5">
                location_on
              </span>
              <div className="flex flex-col">
                <span>{venue.fullAddress} • {venue.distanceKm} km away</span>
                <a
                  href="#mapSection"
                  className="text-secondary font-semibold hover:underline inline-flex items-center gap-0.5 pt-0.5 text-xs"
                >
                  View on interactive map
                  <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                </a>
              </div>
            </div>
          </div>

          {/* Pitch Summary Box */}
          <div className="bg-surface-container-low rounded-xl p-4 flex flex-col gap-1.5 border border-surface-container">
            <div className="flex items-center gap-2 text-primary-container font-headline-sm font-bold text-sm">
              <span className="material-symbols-outlined text-[18px] text-secondary">
                sports_soccer
              </span>
              <span>{venue.sportType} • {venue.sportCategories.join(" • ")}</span>
            </div>
            <p className="font-body-md text-xs text-on-surface-variant leading-relaxed">
              {venue.description}
            </p>
          </div>

          {/* Key Amenities Grid */}
          <div className="flex flex-col gap-space-sm">
            <div className="flex items-center justify-between">
              <h2 className="font-headline-sm text-headline-sm text-primary">Key Amenities</h2>
              <span className="font-caption text-caption text-on-surface-variant uppercase tracking-wider font-semibold">
                {venue.amenities.length} Included
              </span>
            </div>
            <div className="grid grid-cols-2 gap-2.5">
              {venue.amenities.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 p-3 rounded-xl bg-surface-container-low border border-surface-container/60"
                >
                  <div className="w-9 h-9 rounded-lg bg-surface-container flex items-center justify-center text-primary-container shrink-0">
                    <span className="material-symbols-outlined text-[20px] text-secondary">
                      {item.icon}
                    </span>
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="font-label-sm text-xs font-semibold text-on-surface truncate">
                      {item.title}
                    </span>
                    <span className="font-caption text-[11px] text-on-surface-variant truncate">
                      {item.subtitle}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Opening Hours */}
          <div className="bg-surface-container-low rounded-xl p-4 flex items-center justify-between border border-surface-container">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-secondary-fixed/30 text-secondary flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-[22px]">schedule</span>
              </div>
              <div className="flex flex-col">
                <span className="font-label-sm text-xs text-on-surface font-semibold">
                  Opening Hours
                </span>
                <span className="font-body-md text-xs text-on-surface-variant">
                  {venue.openingHours}
                </span>
              </div>
            </div>
            <span className="font-caption text-[11px] font-semibold px-2 py-1 rounded bg-secondary-fixed text-on-secondary-fixed">
              {venue.openingDays}
            </span>
          </div>

          {/* Player Reviews */}
          <div className="flex flex-col gap-space-sm">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <h2 className="font-headline-sm text-headline-sm text-primary">Player Reviews</h2>
                <span className="px-2 py-0.5 rounded-full bg-secondary-fixed/40 text-secondary font-headline-sm text-xs font-bold">
                  {venue.rating} ★
                </span>
              </div>
              <span className="font-label-sm text-xs text-secondary font-semibold">
                {venue.reviewCount} Reviews
              </span>
            </div>

            <div className="p-4 rounded-xl bg-surface-container-low flex flex-col gap-3 border border-surface-container">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    className="w-11 h-11 rounded-full object-cover border border-white shadow-xs"
                    src={venue.featuredReview.avatar}
                    alt={venue.featuredReview.author}
                  />
                  <div className="flex flex-col">
                    <span className="font-headline-sm font-bold text-xs text-on-surface">
                      {venue.featuredReview.author}
                    </span>
                    <span className="font-caption text-[11px] text-on-surface-variant">
                      {venue.featuredReview.sportTag} • {venue.featuredReview.timeAgo}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-0.5 text-secondary">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className="material-symbols-outlined text-[16px]"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      star
                    </span>
                  ))}
                </div>
              </div>
              <p className="font-body-md text-xs text-on-surface-variant leading-relaxed">
                &ldquo;{venue.featuredReview.text}&rdquo;
              </p>
            </div>
          </div>

          {/* Location & Access Section */}
          <div className="flex flex-col gap-space-sm" id="mapSection">
            <h2 className="font-headline-sm text-headline-sm text-primary">Location &amp; Access</h2>
            <div className="relative w-full h-44 rounded-2xl overflow-hidden shadow-md border border-surface-container">
              <div
                className="w-full h-full bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD9navYNCV8K0D_bEUrEo0UBFsKCW0-iQRk_zZKyVYBLt2_I2CwZpjRe_FVbx8hvY9P4SsGaMhmR4tgd_S1Ux4nrhMC5a8gzeTgdOJpYdJ2XCWLVwFWAx2FxHVdkcxFvqLnOrnE7U9sEWoYH8-Rdjw7dw_vsRC643VC3V_8_ceQkNtppFG49dK1wfJ2uKZwzxIfnqPTiYos71Ot2yXfIx8LB4pLxN4JYm83P3WpACzA_VWGfOulC7E5')",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                <div className="flex items-center gap-2 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-full shadow-sm">
                  <span className="w-2.5 h-2.5 rounded-full bg-secondary" />
                  <span className="font-headline-sm font-bold text-xs text-primary-container">
                    {venue.name}
                  </span>
                </div>
                <a
                  className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-primary-container text-white font-label-sm text-xs font-semibold shadow-md active:scale-95 transition-transform"
                  href="https://maps.google.com"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span className="material-symbols-outlined text-[16px] text-secondary-fixed">
                    turn_right
                  </span>
                  <span>Get Directions</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Sticky Bottom Bar */}
        <div className="fixed bottom-0 left-0 right-0 z-40 bg-surface-container-lowest/95 backdrop-blur-xl px-margin py-3.5 shadow-[0_-4px_20px_rgba(11,27,58,0.08)] border-t border-surface-container flex items-center justify-between pb-safe">
          <div className="flex flex-col">
            <div className="flex items-baseline gap-1">
              <span className="font-headline-md text-headline-md text-primary font-extrabold tracking-tight">
                ₹{venue.pricePerHour}
              </span>
              <span className="font-label-sm text-xs text-on-surface-variant font-medium">/ hour</span>
            </div>
            <span className="font-caption text-[11px] text-secondary font-semibold flex items-center gap-1">
              <span className="material-symbols-outlined text-[13px]">local_offer</span>
              Slot discounts applied
            </span>
          </div>
          <Link
            href={`/venues/${venue.id}/slots`}
            className="px-8 py-3.5 rounded-full bg-secondary text-white font-headline-sm text-sm font-bold tracking-wide shadow-lg active:scale-95 hover:bg-secondary/90 transition-all flex items-center gap-2"
          >
            <span>Book Now</span>
            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </Link>
        </div>
      </main>
    </div>
  );
}
