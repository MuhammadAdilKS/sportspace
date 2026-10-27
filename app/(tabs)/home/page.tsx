"use client";

import Link from "next/link";

export default function HomeDashboard() {
    return (
        <div className="flex flex-col w-full pb-24">
            {/* Top Greeting & Header Bar */}
            <section className="px-margin pt-space-sm pb-space-xs flex items-center justify-between">
                <div className="flex items-center gap-space-sm">
                    <div className="relative shrink-0">
                        <img
                            alt="Adil Profile Avatar"
                            className="w-[38px] h-[38px] rounded-full object-cover shadow-sm bg-surface-container"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuATvOyzGioJOeigEBOQw2kDqRIldpVuBrmxHnM_JvzPyXm5wcVqPfKasWYMcyMviKF8FqLC8wXrkLQ-nvOE6RFNa_PIF-xg4cTWTkY2kM0mC2w_HfIQjpPoGCMijdxmcGMsh1CBQENYrd98scD1_rSdEZgRjYtG_nHiLz6leesghQhTQrewYgbHBuyxA0UITYS98AW7T4eWRo8yC9RG_HBx0P9BINDcDRPeWGJ4uelER5ec73Rd1rxH"
                        />
                        <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-secondary-fixed-dim rounded-full shadow-[0_0_0_2px_#ffffff]" />
                    </div>
                    <div className="flex flex-col">
                        <h2 className="font-headline-md text-headline-md text-primary tracking-tight">Hi, Adil 👋</h2>
                        <p className="font-body-md text-body-md text-on-surface-variant -mt-0.5">Ready to play today?</p>
                    </div>
                </div>
                <div className="flex items-center gap-space-xs">
                    <button
                        aria-label="Notifications"
                        className="relative w-10 h-10 rounded-full bg-surface-container-lowest shadow-[0_4px_16px_rgba(11,27,58,0.08)] flex items-center justify-center text-primary active:scale-95 transition-transform"
                        type="button"
                    >
                        <span className="material-symbols-outlined text-[20px]">notifications</span>
                        <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-secondary" />
                    </button>
                </div>
            </section>

            {/* Location Selector Pill */}
            <div className="px-margin pt-space-xs pb-space-sm flex items-center">
                <button
                    className="inline-flex items-center gap-space-xs px-3 py-1.5 rounded-full bg-surface-container-high text-on-surface text-label-sm font-label-sm active:bg-surface-variant transition-colors shadow-sm"
                    type="button"
                >
                    <span className="material-symbols-outlined text-secondary text-[16px]">location_on</span>
                    <span className="font-semibold tracking-tight">Mangaluru, Karnataka</span>
                    <span className="material-symbols-outlined text-on-surface-variant text-[16px]">expand_more</span>
                </button>
            </div>

            {/* Search & Filter Bar */}
            <section className="px-margin py-space-xs">
                <div className="w-full h-12 rounded-full bg-surface-container-lowest shadow-[0_4px_16px_rgba(11,27,58,0.08)] px-4 flex items-center justify-between gap-space-sm focus-within:shadow-[0_4px_20px_rgba(0,110,47,0.18)] transition-shadow">
                    <div className="flex items-center gap-space-sm flex-1 min-w-0">
                        <span className="material-symbols-outlined text-on-surface-variant text-[20px] shrink-0">search</span>
                        <input
                            className="w-full bg-transparent font-body-md text-body-md text-primary placeholder:text-on-surface-variant focus:outline-none truncate"
                            placeholder="Search grounds, sports, areas..."
                            type="text"
                        />
                    </div>
                    <Link
                        href="/venues"
                        aria-label="Filter Search"
                        className="w-8 h-8 rounded-full bg-primary-container text-on-primary flex items-center justify-center shrink-0 active:scale-90 transition-transform"
                    >
                        <span className="material-symbols-outlined text-[16px]">tune</span>
                    </Link>
                </div>
            </section>

            {/* Popular Sports Category Chips */}
            <section className="pt-space-md pb-space-xs">
                <div className="flex items-center justify-between px-margin mb-space-xs">
                    <span className="font-label-sm text-label-sm font-bold text-primary uppercase tracking-wider">Categories</span>
                    <Link href="/explore" className="font-caption text-caption text-secondary font-semibold">
                        View All
                    </Link>
                </div>
                <div className="flex gap-space-sm overflow-x-auto px-margin pb-space-xs no-scrollbar">
                    <Link
                        href="/venues?sport=football"
                        className="shrink-0 h-9 px-4 rounded-full bg-primary-container text-on-primary font-label-md text-label-md flex items-center gap-space-xs shadow-[0_4px_16px_rgba(11,27,58,0.12)]"
                    >
                        <span className="w-2 h-2 rounded-full bg-secondary-fixed" />
                        <span className="material-symbols-outlined text-[16px] text-secondary-fixed">sports_soccer</span>
                        <span>
                            Football <span className="text-secondary-fixed opacity-90">(28)</span>
                        </span>
                    </Link>
                    <Link
                        href="/venues?sport=cricket"
                        className="shrink-0 h-9 px-4 rounded-full bg-surface-container-lowest text-on-surface-variant font-label-md text-label-md flex items-center gap-space-xs shadow-[0_2px_8px_rgba(11,27,58,0.06)] active:bg-surface-container-low transition-colors"
                    >
                        <span className="material-symbols-outlined text-[16px] text-on-surface-variant">sports_cricket</span>
                        <span>
                            Cricket <span className="text-outline text-caption">(19)</span>
                        </span>
                    </Link>
                    <Link
                        href="/venues?sport=badminton"
                        className="shrink-0 h-9 px-4 rounded-full bg-surface-container-lowest text-on-surface-variant font-label-md text-label-md flex items-center gap-space-xs shadow-[0_2px_8px_rgba(11,27,58,0.06)] active:bg-surface-container-low transition-colors"
                    >
                        <span className="material-symbols-outlined text-[16px] text-on-surface-variant">sports_tennis</span>
                        <span>
                            Badminton <span className="text-outline text-caption">(14)</span>
                        </span>
                    </Link>
                    <Link
                        href="/venues?sport=basketball"
                        className="shrink-0 h-9 px-4 rounded-full bg-surface-container-lowest text-on-surface-variant font-label-md text-label-md flex items-center gap-space-xs shadow-[0_2px_8px_rgba(11,27,58,0.06)] active:bg-surface-container-low transition-colors"
                    >
                        <span className="material-symbols-outlined text-[16px] text-on-surface-variant">sports_basketball</span>
                        <span>
                            Basketball <span className="text-outline text-caption">(8)</span>
                        </span>
                    </Link>
                </div>
            </section>

            {/* Upcoming Booking Hero Card */}
            <section className="px-margin pt-space-sm pb-space-xs">
                <div className="relative w-full rounded-2xl bg-gradient-to-br from-primary-container via-inverse-surface to-primary p-space-md text-on-primary shadow-[0_8px_24px_rgba(11,27,58,0.18)] overflow-hidden">
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-secondary-fixed via-secondary to-primary-container" />
                    <div className="absolute -right-10 -bottom-10 w-44 h-44 rounded-full bg-secondary-fixed/5 blur-2xl pointer-events-none" />
                    <div className="relative z-10 flex flex-col gap-space-xs">
                        <div className="flex items-center justify-between">
                            <span className="px-2.5 py-0.5 rounded-full bg-secondary text-on-secondary font-caption text-caption uppercase tracking-wider font-bold flex items-center gap-1">
                                <span className="w-1.5 h-1.5 rounded-full bg-secondary-fixed animate-ping" />
                                CONFIRMED • TODAY
                            </span>
                            <span className="font-caption text-caption text-secondary-fixed flex items-center gap-1">
                                <span className="material-symbols-outlined text-[14px]">sports_soccer</span>
                                7v7 Football Turf
                            </span>
                        </div>
                        <div className="pt-space-xs">
                            <h3 className="font-headline-sm text-headline-sm font-bold text-on-primary tracking-tight">
                                Sahyadri Premier Turf
                            </h3>
                            <p className="font-body-md text-body-md text-secondary-fixed font-medium">Pitch A - Floodlit Synthetic</p>
                        </div>
                        <div className="flex flex-col gap-1 pt-space-xs font-body-md text-body-md text-surface-container-highest">
                            <div className="flex items-center gap-space-xs">
                                <span className="material-symbols-outlined text-secondary-fixed text-[18px]">schedule</span>
                                <span className="font-semibold text-on-primary">07:00 PM - 08:30 PM</span>
                                <span className="text-on-primary-container text-caption">(90 mins)</span>
                            </div>
                            <div className="flex items-center gap-space-xs">
                                <span className="material-symbols-outlined text-secondary-fixed text-[18px]">pin_drop</span>
                                <span className="truncate">Belthangady, Mangalore</span>
                            </div>
                        </div>
                        <div className="pt-space-sm flex items-center justify-between gap-space-sm">
                            <div className="flex items-center gap-1 text-on-primary-container font-caption text-caption">
                                <span className="material-symbols-outlined text-[15px] text-secondary-fixed">format_image_left</span>
                                Equipment reserved
                            </div>
                            <Link
                                href="/booking/confirmed/SS-2026-48291"
                                className="px-4 py-2 rounded-full bg-surface-container-lowest/10 hover:bg-surface-container-lowest/20 active:scale-95 text-on-primary font-label-sm text-label-sm font-semibold flex items-center gap-1 transition-all backdrop-blur-sm"
                            >
                                <span>View Pass &amp; Directions</span>
                                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Nearby Facilities Section */}
            <section className="pt-space-md pb-space-xs">
                <div className="flex items-center justify-between px-margin mb-space-sm">
                    <div className="flex flex-col">
                        <h3 className="font-headline-sm text-headline-sm text-primary">Nearby Facilities</h3>
                        <p className="font-caption text-caption text-on-surface-variant">
                            Top-rated arenas within your striking range
                        </p>
                    </div>
                    <Link
                        href="/venues"
                        className="font-label-sm text-label-sm text-secondary font-semibold flex items-center gap-0.5"
                    >
                        Explore <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                    </Link>
                </div>

                <div className="flex gap-space-md overflow-x-auto px-margin pb-space-md no-scrollbar">
                    {/* Facility Card 1 */}
                    <article className="shrink-0 w-[270px] rounded-2xl bg-surface-container-lowest shadow-[0_4px_16px_rgba(11,27,58,0.08)] flex flex-col overflow-hidden">
                        <div className="relative w-full h-36 bg-surface-container">
                            <img
                                alt="Greenfield Sports Hub"
                                className="w-full h-full object-cover"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBfC0XzR3GMpg7sdP5fcWhNusXXBfQ4wag--L-5aqqvPaZ3KUhJC9_4pVQ-3wWBRCKXae4dSui0DzT-JF4xBKNxA7kPw-tW8d20r17M_LVOpQ8pzojAtQjgNW4Ql3VDc7RHIhPliJvdhIy64fFHCHmFQzn4w5WyQI3IPCiPDCEQYEYPUAKa7jUIj1vtZ55QWKZIs4CZjcPEnQ469ipCTTpSvgSrKod0i2oE8QYg5_Z6Cc8fODknr3Ws"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent" />
                            <div className="absolute top-2.5 left-2.5 flex items-center gap-1 px-2.5 py-1 rounded-full bg-primary-container/80 backdrop-blur-md text-on-primary font-caption text-caption font-semibold">
                                <span>Football • Cricket</span>
                            </div>
                            <span className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded-full bg-surface-container-lowest text-secondary font-caption text-caption font-bold shadow-sm">
                                Available Today
                            </span>
                            <div className="absolute bottom-2 left-2.5 right-2.5 flex items-center justify-between text-on-primary font-caption text-caption">
                                <span className="flex items-center gap-1">
                                    <span className="material-symbols-outlined text-[14px]">near_me</span> 1.2 km away
                                </span>
                                <span className="flex items-center gap-1 font-semibold text-secondary-fixed">
                                    <span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                                        star
                                    </span>{" "}
                                    4.8 (124)
                                </span>
                            </div>
                        </div>
                        <div className="p-3.5 flex flex-col justify-between flex-1 gap-space-sm">
                            <div>
                                <h4 className="font-headline-sm text-headline-sm text-primary tracking-tight truncate">
                                    Greenfield Sports Hub
                                </h4>
                                <p className="font-caption text-caption text-on-surface-variant truncate">
                                    Moodbidri, Mangalore
                                </p>
                            </div>
                            <div className="flex items-center justify-between pt-1">
                                <div className="flex items-baseline">
                                    <span className="font-headline-sm text-headline-sm text-primary font-bold">₹800</span>
                                    <span className="font-caption text-caption text-on-surface-variant">/hr</span>
                                </div>
                                <Link
                                    href="/venues/greenfield-arena"
                                    className="h-8 px-3.5 rounded-full bg-secondary text-on-secondary font-label-sm text-label-sm font-semibold flex items-center active:scale-95 transition-transform"
                                >
                                    Book
                                </Link>
                            </div>
                        </div>
                    </article>

                    {/* Facility Card 2 */}
                    <article className="shrink-0 w-[270px] rounded-2xl bg-surface-container-lowest shadow-[0_4px_16px_rgba(11,27,58,0.08)] flex flex-col overflow-hidden">
                        <div className="relative w-full h-36 bg-surface-container">
                            <img
                                alt="SmashZone Arena"
                                className="w-full h-full object-cover"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA9KWXT-GEB8xRVFyH8Q9X45lM6j5i4CKpKvQpxKlLsynkCBz3Znj_KWBzw9gQEFeMSHyKrkfAdQTqhs6HEQgwMc60aOq9V5o8jgQsY_vgQ0-xez85qWXqCStDYqK8Xa9Va8y2gQ2siddNxhNwUqKHQvztpj6kv91XJvx-5GU5r7DHx3TDQ2gNsQ-U8A0dOcMTT99m_ZH_M95Y5aKDX6uqATxA047RWLj_TrZu3y8P3zWo9YR6hJ5qp"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent" />
                            <div className="absolute top-2.5 left-2.5 flex items-center gap-1 px-2.5 py-1 rounded-full bg-primary-container/80 backdrop-blur-md text-on-primary font-caption text-caption font-semibold">
                                <span>Wooden 4 Courts</span>
                            </div>
                            <span className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded-full bg-surface-container-high text-primary font-caption text-caption font-bold shadow-sm">
                                Filling Fast
                            </span>
                            <div className="absolute bottom-2 left-2.5 right-2.5 flex items-center justify-between text-on-primary font-caption text-caption">
                                <span className="flex items-center gap-1">
                                    <span className="material-symbols-outlined text-[14px]">near_me</span> 2.4 km away
                                </span>
                                <span className="flex items-center gap-1 font-semibold text-secondary-fixed">
                                    <span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                                        star
                                    </span>{" "}
                                    4.9 (88)
                                </span>
                            </div>
                        </div>
                        <div className="p-3.5 flex flex-col justify-between flex-1 gap-space-sm">
                            <div>
                                <h4 className="font-headline-sm text-headline-sm text-primary tracking-tight truncate">
                                    SmashZone Arena
                                </h4>
                                <p className="font-caption text-caption text-on-surface-variant truncate">Kadri, Mangalore</p>
                            </div>
                            <div className="flex items-center justify-between pt-1">
                                <div className="flex items-baseline">
                                    <span className="font-headline-sm text-headline-sm text-primary font-bold">₹450</span>
                                    <span className="font-caption text-caption text-on-surface-variant">/hr</span>
                                </div>
                                <Link
                                    href="/venues/greenfield-arena"
                                    className="h-8 px-3.5 rounded-full bg-secondary text-on-secondary font-label-sm text-label-sm font-semibold flex items-center active:scale-95 transition-transform"
                                >
                                    Book
                                </Link>
                            </div>
                        </div>
                    </article>
                </div>
            </section>

            {/* Floating "Book Now" Pill Action */}
            <div className="fixed bottom-24 right-4 z-40">
                <Link
                    href="/venues/greenfield-arena"
                    className="h-14 px-5 rounded-full bg-secondary text-on-secondary font-label-md text-label-md shadow-[0_8px_24px_rgba(0,110,47,0.35)] flex items-center gap-2 active:scale-95 transition-transform"
                >
                    <span className="material-symbols-outlined text-[20px] text-secondary-fixed">bolt</span>
                    <span className="tracking-tight font-bold">⚡ Book Now</span>
                </Link>
            </div>
        </div>
    );
}