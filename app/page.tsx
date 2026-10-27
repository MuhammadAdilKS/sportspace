"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function SplashScreen() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/login");
    }, 2500);
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <main className="flex flex-col relative w-full bg-surface flex-grow">
      <div className="flex flex-col w-full relative overflow-hidden bg-primary-container text-on-primary min-h-screen justify-between items-center px-margin py-space-xl">
        {/* Subtle pitch / stadium line grid geometric backdrop */}
        <div className="absolute inset-0 pointer-events-none opacity-10 flex items-center justify-center">
          <svg className="w-full h-full object-cover" fill="none" viewBox="0 0 400 800" xmlns="http://www.w3.org/2000/svg">
            <rect className="text-secondary-fixed" height="720" rx="16" stroke="currentColor" strokeWidth="2" width="360" x="20" y="40" />
            <line className="text-secondary-fixed" stroke="currentColor" strokeWidth="2" x1="20" x2="380" y1="400" y2="400" />
            <circle className="text-secondary-fixed" cx="200" cy="400" r="64" stroke="currentColor" strokeWidth="2" />
            <circle className="text-secondary-fixed" cx="200" cy="400" fill="currentColor" r="4" />
            <rect className="text-secondary-fixed" height="110" stroke="currentColor" strokeWidth="2" width="180" x="110" y="40" />
            <rect className="text-secondary-fixed" height="110" stroke="currentColor" strokeWidth="2" width="180" x="110" y="650" />
            <path className="text-secondary-fixed" d="M 20 64 A 24 24 0 0 0 44 40" stroke="currentColor" strokeWidth="2" />
            <path className="text-secondary-fixed" d="M 380 64 A 24 24 0 0 1 356 40" stroke="currentColor" strokeWidth="2" />
            <path className="text-secondary-fixed" d="M 20 736 A 24 24 0 0 1 44 760" stroke="currentColor" strokeWidth="2" />
            <path className="text-secondary-fixed" d="M 380 736 A 24 24 0 0 0 356 760" stroke="currentColor" strokeWidth="2" />
          </svg>
        </div>

        {/* Radial Floodlight Ambience Overlay */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-96 h-96 bg-secondary-fixed opacity-10 rounded-full blur-3xl pointer-events-none" />

        {/* Top Space / Micro Category Status Tag */}
        <div className="relative z-10 pt-space-md">
          <div className="inline-flex items-center gap-space-xs px-space-md py-1 rounded-full bg-surface-container-lowest/10 backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-secondary-fixed animate-pulse" />
            <span className="font-caption text-caption text-on-primary/70 tracking-wider uppercase">
              India&apos;s Premier Sports Ground Network
            </span>
          </div>
        </div>

        {/* Center: Brand Logo & Typography Anchor */}
        <div className="relative z-10 flex flex-col items-center text-center my-auto px-space-md">
          <div className="relative mb-space-lg flex items-center justify-center">
            <div className="absolute -inset-2 bg-secondary-fixed/20 rounded-3xl blur-xl animate-pulse" />
            <div className="relative w-24 h-24 rounded-2xl bg-surface-container-lowest p-2 shadow-xl flex items-center justify-center overflow-hidden">
              <img
                alt="SportSpace Logo"
                className="w-full h-full object-contain"
                src="/logo.png"
              />
            </div>
          </div>

          <h1 className="font-headline-lg text-headline-lg text-surface-container-lowest font-extrabold tracking-tight mb-space-xs">
            SportSpace
          </h1>
          <p className="font-label-md text-label-md text-secondary-fixed font-medium tracking-wide mb-space-sm">
            Play More. Book Easy.
          </p>

          <div className="flex items-center justify-center gap-space-xs mt-space-sm">
            <span className="inline-flex items-center gap-1 text-on-primary/60 font-caption text-caption">
              <span className="material-symbols-outlined text-[14px] text-secondary-fixed">sports_soccer</span> 5-a-Side
            </span>
            <span className="text-on-primary/30">•</span>
            <span className="inline-flex items-center gap-1 text-on-primary/60 font-caption text-caption">
              <span className="material-symbols-outlined text-[14px] text-secondary-fixed">sports_cricket</span> Box Cricket
            </span>
            <span className="text-on-primary/30">•</span>
            <span className="inline-flex items-center gap-1 text-on-primary/60 font-caption text-caption">
              <span className="material-symbols-outlined text-[14px] text-secondary-fixed">sports_tennis</span> Badminton
            </span>
          </div>
        </div>

        {/* Bottom Interactive / Loading Cluster */}
        <div className="relative z-10 w-full flex flex-col items-center pb-space-lg">
          <div aria-label="Loading app data" className="flex items-center gap-2 mb-space-md h-6">
            <span className="w-2.5 h-2.5 rounded-full bg-secondary-fixed animate-bounce" style={{ animationDelay: "0s", animationDuration: "0.9s" }} />
            <span className="w-2.5 h-2.5 rounded-full bg-secondary-fixed animate-bounce" style={{ animationDelay: "0.15s", animationDuration: "0.9s" }} />
            <span className="w-2.5 h-2.5 rounded-full bg-secondary-fixed animate-bounce" style={{ animationDelay: "0.3s", animationDuration: "0.9s" }} />
          </div>

          <div className="flex flex-col items-center gap-1 text-center">
            <p className="font-caption text-caption text-on-primary/50 tracking-normal">
              Made with <span className="text-error inline-block transform hover:scale-125 transition-transform duration-200">❤️</span> for Indian Sports Community
            </p>
            <p className="font-caption text-caption text-on-primary/30 text-[10px]">
              Mangaluru • Moodbidri • Puttur • Belthangady • Karkala • v2.4
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}