"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const AuthLayout = ({ children, title, subtitle, imageSrc, switchText, switchLink, switchLinkText }) => {
    return (
        <div className="flex min-h-screen font-sans">
            {/* Left Side - Blue Gradient and Info */}
            <div className="hidden lg:flex w-1/2 bg-gradient-to-br from-[#1E40AF] via-[#1E3A8A] to-[#172554] p-12 flex-col justify-between relative overflow-hidden">
                {/* Logo */}
                <div className="flex items-center gap-2 text-white z-10">
                    <div className="w-10 h-10 border-2 border-white rounded-lg flex items-center justify-center">
                        <span className="text-2xl font-bold">◻</span>
                    </div>
                    <span className="text-2xl font-semibold">Cubart</span>
                </div>

                {/* Content Section */}
                <div className="z-10 text-center mb-50">

                    <h2 className="text-white text-3xl font-bold mb-4 mt-12">Everything in One Place</h2>
                    <p className="text-white/70 max-w-md mx-auto">
                        Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>


                </div>

                {/* Decorative corner shape */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400/10 rounded-full -ml-48 -mb-48"></div>
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
