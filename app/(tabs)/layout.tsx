"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function TabsLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    const navItems = [
        { label: "Home", href: "/home", icon: "sports_soccer" },
        { label: "Explore", href: "/explore", icon: "explore" },
        { label: "Bookings", href: "/bookings", icon: "calendar_month" },
        { label: "Profile", href: "/profile", icon: "account_circle" },
    ];

    const pageTitle =
        pathname === "/explore" || pathname === "/venues"
            ? "Explore"
            : pathname === "/bookings"
                ? "My Bookings"
                : pathname === "/profile"
                    ? "Profile"
                    : "Home";

    return (
        <div className="min-h-screen bg-surface flex flex-col">
            {/* Shared Top Header */}
            <header className="fixed top-0 w-full z-50 bg-surface-container-lowest/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(11,27,58,0.04)]">
                <div className="h-16 pt-safe flex items-center justify-between px-margin">
                    <div className="flex items-center gap-space-sm min-w-0">
                        <img
                            alt="SportSpace Logo"
                            className="h-8 w-auto object-contain"
                            src="/logo.png"
                        />
                        <div className="flex flex-col min-w-0">
                            <div className="flex items-center gap-space-xs">
                                <span className="font-headline-sm text-headline-sm text-primary tracking-tight truncate">
                                    {pageTitle}
                                </span>
                                <span className="material-symbols-outlined text-secondary text-[18px]">expand_more</span>
                            </div>
                            <span className="font-caption text-caption text-on-surface-variant flex items-center gap-space-xs">
                                <span className="material-symbols-outlined text-secondary text-[12px]">location_on</span>
                                Mangaluru, Karnataka
                            </span>
                        </div>
                    </div>
                    <Link
                        href="/profile"
                        className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0"
                    >
                        <span className="material-symbols-outlined text-on-primary text-[18px]">person</span>
                    </Link>
                </div>
            </header>

            {/* Main Screen Content */}
            <main className="flex flex-col relative w-full pt-16 pb-20 bg-surface min-h-screen">
                {children}
            </main>

            {/* Shared Bottom Navigation Bar */}
            <nav className="fixed bottom-0 w-full z-50 pb-safe bg-surface-container-lowest/95 backdrop-blur-xl shadow-[0_-4px_20px_rgba(11,27,58,0.06)]">
                <div className="flex justify-around items-center h-20 px-space-xs">
                    {navItems.map((item) => {
                        const isActive =
                            pathname === item.href || (item.href === "/explore" && pathname.startsWith("/venues"));
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`flex flex-col items-center justify-center gap-space-xs min-w-[64px] min-h-[44px] transition-colors ${isActive
                                        ? "text-secondary font-semibold"
                                        : "text-on-surface-variant hover:text-on-surface"
                                    }`}
                            >
                                <span className="material-symbols-outlined text-[24px]">{item.icon}</span>
                                <span className="font-caption text-caption">{item.label}</span>
                            </Link>
                        );
                    })}
                </div>
            </nav>
        </div>
    );
}