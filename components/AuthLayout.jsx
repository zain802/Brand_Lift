"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const AuthLayout = ({ children, title, subtitle, switchText, switchLink, switchLinkText }) => {
    return (
        <div className="flex min-h-screen font-sans">
            {/* Left Side - Purple Gradient and Info */}
            <div className="hidden lg:flex w-1/2 bg-gradient-to-br from-[#2e1065] via-[#4c1d95] to-[#7c3aed] p-12 flex-col justify-between relative overflow-hidden">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 text-white z-10">
                    <div className="w-10 h-10 border-2 border-white rounded-lg flex items-center justify-center">
                        <span className="text-2xl font-bold">A</span>
                    </div>
                    <span className="text-2xl font-semibold">Branding Ups</span>
                </Link>

                {/* Content Section */}
                <div className="z-10 text-center">
                    <h2 className="text-white text-4xl font-bold mb-6 leading-tight">Scale Your Brand<br />With Confidence</h2>
                    <p className="text-white/80 text-lg max-w-md mx-auto leading-relaxed mb-12">
                        Join thousands of businesses that rely on Branding Ups to optimize their advertising and reach new heights.
                    </p>

                    {/* Features Grid */}
                    <div className="grid grid-cols-2 gap-6 max-w-lg mx-auto">
                        <div className="flex flex-col items-center gap-2">
                            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                                <svg className="w-6 h-6 text-[#FF8A42]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                                </svg>
                            </div>
                            <span className="text-white/90 text-sm">Real-time Analytics</span>
                        </div>

                        <div className="flex flex-col items-center gap-2">
                            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                                <svg className="w-6 h-6 text-[#FF8A42]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                                </svg>
                            </div>
                            <span className="text-white/90 text-sm">AI-Powered</span>
                        </div>

                        <div className="flex flex-col items-center gap-2">
                            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                                <svg className="w-6 h-6 text-[#FF8A42]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                                </svg>
                            </div>
                            <span className="text-white/90 text-sm">Secure Platform</span>
                        </div>

                        <div className="flex flex-col items-center gap-2">
                            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                                <svg className="w-6 h-6 text-[#FF8A42]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                                </svg>
                            </div>
                            <span className="text-white/90 text-sm">24/7 Support</span>
                        </div>
                    </div>
                </div>

                {/* Decorative corner shape */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#FF8A42]/20 rounded-full -ml-48 -mb-48 blur-3xl"></div>
            </div>

            {/* Right Side - Form */}
            <div className="w-full lg:w-1/2 flex flex-col p-8 sm:p-12 md:p-24 relative bg-white">
                {/* Account Button/Link */}
                <div className="absolute top-8 right-8">
                    <Link href={switchLink}>
                        <button className="flex items-center gap-2 px-6 py-2 border border-[#FF8A42] text-[#FF8A42] rounded-full hover:bg-[#FF8A42] hover:text-white transition group">
                            <span className="p-1 border border-[#FF8A42] rounded-md group-hover:border-white">
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                            </span>
                            Account
                        </button>
                    </Link>
                </div>

                <div className="max-w-md w-full mx-auto flex-1 flex flex-col justify-center">
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">{title}</h1>
                    <p className="text-gray-500 mb-10">{subtitle}</p>

                    {children}

                    <div className="mt-8 text-center text-gray-600">
                        {switchText}{" "}
                        <Link href={switchLink} className="text-[#1E40AF] font-semibold underline">
                            {switchLinkText}
                        </Link>
                    </div>
                </div>

                {/* Decorative bottom right shape */}
                <div className="absolute bottom-0 right-0 w-32 h-16 bg-[#1E40AF] rounded-tl-[100px]"></div>
                <div className="absolute bottom-0 right-16 w-16 h-8 bg-blue-300 rounded-tl-[100px] opacity-50"></div>
            </div>
        </div>
    );
};

export default AuthLayout;
