"use client";

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";

export default function LoginSignUpScreen() {
    const router = useRouter();
    const [activeTab, setActiveTab] = useState<"login" | "signup">("login");
    const [phone, setPhone] = useState("9876543210");
    const [otpSent, setOtpSent] = useState(false);
    const [otp, setOtp] = useState(["4", "9", "", ""]);
    const inputRefs = [
        useRef<HTMLInputElement>(null),
        useRef<HTMLInputElement>(null),
        useRef<HTMLInputElement>(null),
        useRef<HTMLInputElement>(null),
    ];

    const handleOtpChange = (index: number, value: string) => {
        if (!/^\d*$/.test(value)) return;
        const newOtp = [...otp];
        newOtp[index] = value.slice(-1);
        setOtp(newOtp);

        if (value && index < 3) {
            inputRefs[index + 1].current?.focus();
        }
    };

    const handleGetOrVerifyOtp = () => {
        if (!otpSent) {
            setOtpSent(true);
        } else {
            router.push("/home");
        }
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
                            onClick={() => setActiveTab("login")}
                            className={`flex-1 py-2 text-center rounded-full font-label-md text-label-md transition-all duration-200 ${activeTab === "login"
                                    ? "bg-surface-container-lowest text-primary-container shadow-sm"
                                    : "text-primary-fixed-dim hover:text-on-primary"
                                }`}
                        >
                            Login
                        </button>
                        <button
                            type="button"
                            onClick={() => setActiveTab("signup")}
                            className={`flex-1 py-2 text-center rounded-full font-label-md text-label-md transition-all duration-200 ${activeTab === "signup"
                                    ? "bg-surface-container-lowest text-primary-container shadow-sm"
                                    : "text-primary-fixed-dim hover:text-on-primary"
                                }`}
                        >
                            Sign Up
                        </button>
                    </div>
                </div>

                {/* Main Card Container with Rounded Top Corners */}
                <div className="relative z-20 -mt-3 bg-surface-container-lowest rounded-t-3xl shadow-md px-margin pt-6 pb-8 flex flex-col flex-grow">
                    <div className="flex flex-col gap-1">
                        <div className="flex items-center justify-between">
                            <h2 className="font-headline-md text-headline-md text-primary-container font-semibold">
                                {activeTab === "login" ? "Welcome to SportSpace" : "Create your Account"}
                            </h2>
                            <span className="material-symbols-outlined text-secondary text-[24px]">verified</span>
                        </div>
                        <p className="font-body-md text-body-md text-on-surface-variant">
                            Enter your phone number to receive a one-time password (OTP)
                        </p>
                    </div>

                    {/* Phone Input Field */}
                    <div className="mt-5 flex flex-col gap-1.5">
                        <label className="font-label-sm text-label-sm text-primary-container font-medium">Mobile Number</label>
                        <div className="h-12 rounded-xl flex items-center px-3 shadow-sm bg-surface-container-low/60 focus-within:bg-surface-container-lowest transition-all">
                            <div className="flex items-center gap-1.5 pr-2.5">
                                <div className="w-5 h-3.5 rounded-sm overflow-hidden flex flex-col justify-between shadow-xs">
                                    <span className="h-[33.3%] w-full bg-[#FF9933] block" />
                                    <span className="h-[33.3%] w-full bg-[#FFFFFF] flex items-center justify-center relative">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[#000080] inline-block" />
                                    </span>
                                    <span className="h-[33.3%] w-full bg-[#128807] block" />
                                </div>
                                <span className="font-label-md text-label-md text-primary-container font-semibold">+91</span>
                            </div>
                            <span className="w-[1px] h-5 bg-outline-variant mr-3" />
                            <input
                                className="flex-1 bg-transparent font-body-lg text-body-lg text-on-surface placeholder:text-outline focus:outline-none tracking-wide"
                                maxLength={10}
                                placeholder="98765 43210"
                                type="tel"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                            />
                            <span className="material-symbols-outlined text-outline text-[20px]">smartphone</span>
                        </div>
                    </div>

                    {/* Green CTA Button: Get OTP / Verify & Continue */}
                    <button
                        type="button"
                        onClick={handleGetOrVerifyOtp}
                        className="mt-4 w-full h-14 rounded-full bg-secondary-fixed-dim hover:bg-secondary text-primary-container font-label-md text-body-lg font-bold shadow-md flex items-center justify-center gap-2 active:scale-[0.98] transition-all cursor-pointer"
                    >
                        <span>{otpSent ? "Verify & Continue" : "Get OTP"}</span>
                        <span className="material-symbols-outlined text-[20px] font-bold">arrow_forward</span>
                    </button>

                    {/* 4-Digit OTP Verification Row Showcase */}
                    <div className="mt-6 p-4 rounded-2xl bg-surface-container-low flex flex-col items-center">
                        <div className="w-full flex items-center justify-between mb-3">
                            <span className="font-label-sm text-label-sm text-on-surface-variant font-medium">
                                Verify OTP sent to +91 {phone.slice(0, 5)} •••••
                            </span>
                            <button
                                type="button"
                                onClick={() => setOtpSent(false)}
                                className="font-caption text-caption text-secondary font-semibold hover:underline"
                            >
                                Edit
                            </button>
                        </div>

                        <div className="flex items-center justify-center gap-3 w-full">
                            {otp.map((digit, idx) => (
                                <input
                                    key={idx}
                                    ref={inputRefs[idx]}
                                    type="text"
                                    inputMode="numeric"
                                    maxLength={1}
                                    value={digit}
                                    onChange={(e) => handleOtpChange(idx, e.target.value)}
                                    onFocus={() => setOtpSent(true)}
                                    placeholder="-"
                                    className="w-12 h-13 rounded-xl bg-surface-container-lowest shadow-sm text-center font-headline-sm text-headline-sm text-primary-container font-bold focus:outline-none focus:ring-2 focus:ring-secondary-fixed-dim"
                                />
                            ))}
                        </div>

                        <div className="flex items-center gap-1.5 mt-3">
                            <span className="material-symbols-outlined text-outline text-[16px]">schedule</span>
                            <span className="font-caption text-caption text-on-surface-variant font-medium">
                                Resend OTP in <span className="text-primary-container font-semibold">00:28</span>
                            </span>
                        </div>
                    </div>

                    {/* Divider with "or continue with" */}
                    <div className="relative flex items-center justify-center my-5">
                        <div className="w-full h-[1px] bg-surface-container-high" />
                        <span className="absolute px-3 bg-surface-container-lowest font-caption text-caption text-on-surface-variant uppercase tracking-wider font-semibold">
                            or continue with
                        </span>
                    </div>

                    {/* Outlined Button: Continue with Google */}
                    <button
                        type="button"
                        onClick={() => router.push("/home")}
                        className="w-full h-12 rounded-full bg-surface-container-lowest hover:bg-surface-container-low shadow-sm flex items-center justify-center gap-3 px-4 active:scale-[0.99] transition-all cursor-pointer"
                    >
                        <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24">
                            <path d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z" fill="#4285F4" />
                            <path d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z" fill="#34A853" />
                            <path d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.42l4.03-3.15z" fill="#FBBC05" />
                            <path d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z" fill="#EA4335" />
                        </svg>
                        <span className="font-label-md text-label-md text-primary-container font-semibold">Continue with Google</span>
                    </button>

                    {/* Bottom Legal / Terms Caption */}
                    <p className="mt-5 text-center font-caption text-caption text-on-surface-variant leading-relaxed px-4">
                        By signing up, you agree to our{" "}
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
        </main>
    );
}