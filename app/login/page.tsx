"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default function LoginSignUpScreen() {
    const router = useRouter();
    const [activeTab, setActiveTab] = useState<"login" | "signup">("login");
    const [loading, setLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState<string | null>(null);

    const handleGoogleAuth = async () => {
        setLoading(true);
        setErrorMsg(null);

        const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://vqikjvjkvpaqxxchjkqn.supabase.co";

        try {
            // Pre-check if Google OAuth provider is enabled on this Supabase project
            const preCheck = await fetch(`${supabaseUrl}/auth/v1/authorize?provider=google`, { method: "GET" });
            
            if (!preCheck.ok) {
                const errJson = await preCheck.json().catch(() => ({}));
                if (errJson?.msg?.includes("provider is not enabled") || preCheck.status === 400) {
                    setErrorMsg("Google Provider is not enabled in your Supabase project yet. You can enable it in the Supabase Dashboard, or click below to continue in Demo Mode.");
                    setLoading(false);
                    return;
                }
            }

            const { error } = await supabase.auth.signInWithOAuth({
                provider: "google",
                options: {
                    redirectTo: typeof window !== "undefined" ? `${window.location.origin}/home` : undefined,
                },
            });

            if (error) {
                setErrorMsg(error.message);
            }
        } catch (err: any) {
            console.warn("OAuth verification note:", err);
            setErrorMsg("Unable to reach Google OAuth right now. Click below to continue in Demo Mode.");
        } finally {
            setLoading(false);
        }
    };

    const handleDemoLogin = () => {
        if (typeof window !== "undefined") {
            localStorage.setItem("sportspace_auth_status", "authenticated");
            localStorage.setItem("sportspace_user_name", "Adil Farooq");
            localStorage.setItem("sportspace_user_email", "adil.sports@gmail.com");
            localStorage.setItem("sportspace_user_phone", "+91 98765 43210");
        }
        router.push("/home");
    };

    const handleGuestExplore = () => {
        if (typeof window !== "undefined") {
            localStorage.setItem("sportspace_auth_status", "guest");
        }
        router.push("/home");
    };

    return (
        <main className="flex flex-col relative w-full bg-surface flex-grow min-h-screen">
            <div className="flex flex-col w-full relative flex-grow">
                {/* Dynamic Athletic Graphic Banner Hero */}
                <div className="relative w-full bg-primary-container overflow-hidden pt-8 pb-10 px-margin flex flex-col justify-between">
                    {/* Abstract turf line styling & floodlight beam ambiance */}
                    <div className="absolute inset-0 opacity-15 pointer-events-none">
                        <svg className="w-full h-full object-cover" fill="none" viewBox="0 0 390 220" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="195" cy="180" r="110" stroke="#6BFF8F" strokeDasharray="6 6" strokeWidth="2" />
                            <path d="M-20 60 L410 160" stroke="#6BFF8F" strokeWidth="1.5" />
                            <path d="M70 -10 L150 240" stroke="#FFFFFF" strokeOpacity="0.4" strokeWidth="1" />
                            <path d="M310 -20 L240 230" stroke="#FFFFFF" strokeOpacity="0.4" strokeWidth="1" />
                            <circle cx="90" cy="100" fill="#6BFF8F" r="3" />
                            <circle cx="300" cy="80" fill="#6BFF8F" r="4" />
                        </svg>
                    </div>

                    {/* Sport illustration backdrop */}
                    <div className="absolute -right-4 -bottom-2 w-52 h-44 opacity-25 pointer-events-none">
                        <svg fill="none" viewBox="0 0 200 160" xmlns="http://www.w3.org/2000/svg">
                            <path d="M40 140 L55 95 L75 85 L90 55 L80 40 L88 32 C88 32 98 42 92 52 L105 75 L85 92 L75 140 Z" fill="#6BFF8F" />
                            <circle cx="82" cy="24" fill="#6BFF8F" r="8" />
                            <circle cx="48" cy="144" fill="#FFFFFF" r="7" />
                            <path d="M140 135 L135 100 L145 78 L138 52 L148 40 L156 46 L148 62 L158 85 L150 135 Z" fill="#FFFFFF" />
                            <circle cx="152" cy="30" fill="#FFFFFF" r="8" />
                            <rect fill="#6BFF8F" height="42" transform="rotate(25 156 44)" width="6" x="156" y="44" />
                        </svg>
                    </div>

                    {/* Header Branding */}
                    <div className="relative z-10 flex items-center justify-between">
                        <div className="flex items-center gap-2.5">
                            <img
                                alt="SportSpace Logo"
                                className="w-9 h-9 object-contain rounded-lg shadow-sm"
                                src="/logo.png"
                            />
                            <span className="font-headline-md text-headline-md text-on-primary tracking-tight">SportSpace</span>
                        </div>
                        <div className="flex items-center gap-1 bg-surface-container-lowest/10 backdrop-blur-md px-2.5 py-1 rounded-full">
                            <span className="w-2 h-2 rounded-full bg-secondary-fixed animate-pulse" />
                            <span className="font-caption text-caption text-surface-variant font-medium">Turfs Live</span>
                        </div>
                    </div>

                    {/* Tagline & Visual Pill */}
                    <div className="relative z-10 mt-6">
                        <span className="inline-flex items-center gap-1.5 font-label-sm text-label-sm text-secondary-fixed bg-secondary-fixed/10 px-2.5 py-1 rounded-full mb-1.5">
                            <span className="material-symbols-outlined text-[14px]">sports_soccer</span>
                            Book. Play. Repeat.
                        </span>
                        <h1 className="font-headline-lg text-headline-lg text-on-primary font-bold tracking-tight">Own The Turf</h1>
                    </div>

                    {/* Segmented Control Toggle (Login vs Sign Up) */}
                    <div className="relative z-10 mt-5 p-1 bg-surface-container-highest/20 backdrop-blur-md rounded-full flex items-center">
                        <button
                            type="button"
                            onClick={() => { setActiveTab("login"); setErrorMsg(null); }}
                            className={`flex-1 py-2 text-center rounded-full font-label-md text-label-md transition-all duration-200 cursor-pointer ${activeTab === "login"
                                    ? "bg-surface-container-lowest text-primary-container shadow-sm font-semibold"
                                    : "text-primary-fixed-dim hover:text-on-primary"
                                }`}
                        >
                            Login
                        </button>
                        <button
                            type="button"
                            onClick={() => { setActiveTab("signup"); setErrorMsg(null); }}
                            className={`flex-1 py-2 text-center rounded-full font-label-md text-label-md transition-all duration-200 cursor-pointer ${activeTab === "signup"
                                    ? "bg-surface-container-lowest text-primary-container shadow-sm font-semibold"
                                    : "text-primary-fixed-dim hover:text-on-primary"
                                }`}
                        >
                            Sign Up
                        </button>
                    </div>
                </div>

                {/* Main Card Container with Rounded Top Corners */}
                <div className="relative z-20 -mt-3 bg-surface-container-lowest rounded-t-3xl shadow-md px-margin pt-6 pb-8 flex flex-col flex-grow justify-between">
                    <div className="flex flex-col">
                        <div className="flex items-center justify-between">
                            <h2 className="font-headline-md text-headline-md text-primary-container font-semibold">
                                {activeTab === "login" ? "Welcome back to SportSpace" : "Create your Account"}
                            </h2>
                            <span className="material-symbols-outlined text-secondary text-[24px]">verified</span>
                        </div>
                        <p className="font-body-md text-body-md text-on-surface-variant mt-1">
                            {activeTab === "login"
                                ? "Sign in with your Google account to access your bookings and favorite arenas."
                                : "Join the premier sports network in Karnataka with one-click Google verification."}
                        </p>

                        {/* Error Alert Box with Immediate Action */}
                        {errorMsg && (
                            <div className="mt-4 p-3.5 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-on-surface text-xs flex flex-col gap-2">
                                <div className="flex items-start gap-2 text-amber-600 dark:text-amber-400 font-medium">
                                    <span className="material-symbols-outlined text-[18px] shrink-0 mt-0.5">info</span>
                                    <span>{errorMsg}</span>
                                </div>
                                <button
                                    type="button"
                                    onClick={handleDemoLogin}
                                    className="self-start mt-1 px-3 py-1.5 rounded-full bg-secondary text-on-secondary font-label-sm text-xs font-semibold hover:bg-secondary/90 transition-all cursor-pointer shadow-xs flex items-center gap-1"
                                >
                                    <span>Continue in Demo Mode</span>
                                    <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                                </button>
                            </div>
                        )}

                        {/* Feature Highlights Grid */}
                        <div className="grid grid-cols-2 gap-3 mt-6 mb-6">
                            <div className="p-3 rounded-2xl bg-surface-container-low/80 border border-surface-container flex flex-col gap-1">
                                <span className="material-symbols-outlined text-secondary text-[22px]">flash_on</span>
                                <span className="font-label-md text-xs text-primary font-bold">Instant Booking</span>
                                <span className="font-caption text-[11px] text-on-surface-variant leading-tight">
                                    Real-time slot confirmation
                                </span>
                            </div>
                            <div className="p-3 rounded-2xl bg-surface-container-low/80 border border-surface-container flex flex-col gap-1">
                                <span className="material-symbols-outlined text-secondary text-[22px]">qr_code_2</span>
                                <span className="font-label-md text-xs text-primary font-bold">Digital QR Pass</span>
                                <span className="font-caption text-[11px] text-on-surface-variant leading-tight">
                                    Contactless ground entry
                                </span>
                            </div>
                        </div>

                        {/* Primary Call to Action: Continue with Google */}
                        <button
                            type="button"
                            disabled={loading}
                            onClick={handleGoogleAuth}
                            className="w-full h-14 rounded-full bg-surface-container-lowest hover:bg-surface-container-low shadow-md flex items-center justify-center gap-3 px-4 active:scale-[0.98] transition-all cursor-pointer border border-surface-container-high hover:border-secondary/40 disabled:opacity-75"
                        >
                            {loading ? (
                                <span className="material-symbols-outlined text-[22px] animate-spin text-primary">
                                    progress_activity
                                </span>
                            ) : (
                                <>
                                    <svg className="w-6 h-6 flex-shrink-0" viewBox="0 0 24 24">
                                        <path d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z" fill="#4285F4" />
                                        <path d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z" fill="#34A853" />
                                        <path d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.42l4.03-3.15z" fill="#FBBC05" />
                                        <path d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z" fill="#EA4335" />
                                    </svg>
                                    <span className="font-label-md text-base text-primary-container font-bold">
                                        {activeTab === "login" ? "Sign in with Google" : "Sign up with Google"}
                                    </span>
                                </>
                            )}
                        </button>

                        {/* Guest / Demo Option */}
                        <div className="mt-4 flex items-center justify-center">
                            <button
                                type="button"
                                onClick={handleGuestExplore}
                                className="font-label-sm text-xs text-secondary hover:underline cursor-pointer flex items-center gap-1 font-semibold py-1.5 px-3 rounded-full hover:bg-surface-container"
                            >
                                <span>Explore Turfs as Guest</span>
                                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                            </button>
                        </div>
                    </div>

                    {/* Bottom Legal / Terms Caption */}
                    <div className="mt-8 pt-4 border-t border-surface-container/60">
                        <p className="text-center font-caption text-caption text-on-surface-variant leading-relaxed px-4">
                            By continuing, you agree to SportSpace&apos;s{" "}
                            <a className="text-primary-container font-semibold underline underline-offset-2" href="#">
                                Terms of Service
                            </a>{" "}
                            and{" "}
                            <a className="text-primary-container font-semibold underline underline-offset-2" href="#">
                                Privacy Policy
                            </a>
                            .
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
}
