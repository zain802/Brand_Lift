"use client";
import React from "react";

const HeroSection = () => {
    return (
        <section className="relative bg-gradient-to-br from-[#2e1065] via-[#4c1d95] to-[#7c3aed] text-white overflow-hidden min-h-[700px] flex items-center">
            {/* Background Decorative Circles */}
            <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-[10%] right-[-5%] w-[400px] h-[400px] bg-[#fb923c]/20 rounded-full blur-3xl"></div>

            {/* Smooth Professional Wave Divider */}
            <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
                <svg className="relative block w-full h-[80px] md:h-[120px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" fill="#ffffff" className="fill-white"></path>
                </svg>
            </div>

            <div className="max-w-7xl mx-auto px-6 py-12 relative z-10 w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">

                    {/* Left Content */}
                    <div className="flex flex-col items-start">
                        <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold leading-tight">
                            Grow Your Business with <br />
                            Smart, Hyper-Local Ads
                        </h1>

                        <p className="mt-8 text-white/80 text-lg max-w-xl">
                            The easiest way for shops, service providers, and professionals to create, run, and track ads—no agency required.
                        </p>

                        <button className="mt-10 px-10 py-4 rounded-2xl bg-[#FF8A42] 
              text-white font-bold text-lg shadow-lg hover:bg-[#e67a3a] transition-all">
                            Start Advertising
                        </button>
                    </div>

                    {/* Right Image Mockups */}
                    <div className="relative flex justify-center md:justify-end">
                        <div className="relative w-full max-w-[500px] flex justify-end gap-4">
                            {/* Main Phone Mockup */}
                            <img
                                src="/images/jpg/phone-mockup.jpg"
                                alt="Main App View"
                                className="w-[280px] h-auto object-contain z-20 drop-shadow-2xl"
                            />
                            {/* Second Phone Mockup Offset */}
                            <img
                                src="/images/jpg/phone-mockup.jpg"
                                alt="Transactions View"
                                className="w-[280px] h-auto object-contain absolute -bottom-10 right-32 z-10 drop-shadow-2xl opacity-90"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default HeroSection;
