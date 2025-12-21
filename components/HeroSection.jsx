"use client";
import React from "react";

const HeroSection = () => {
    return (
        <section className="relative bg-[#4c1d95] text-white overflow-hidden min-h-[600px] flex items-center">
            {/* Background Decorative Circles */}
            <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-white/5 rounded-full"></div>
            <div className="absolute bottom-[-100px] left-[10%] w-[300px] h-[300px] bg-white/5 rounded-full"></div>

            {/* Slanted White Background Part */}
            <div className="absolute bottom-0 right-0 w-full h-[30%] bg-white"
                style={{ clipPath: "polygon(100% 0, 100% 100%, 0 100%)" }}>
            </div>

            <div className="max-w-7xl mx-auto px-6 py-12 relative z-10 w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">

                    {/* Left Content */}
                    <div className="flex flex-col items-start">
                        <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold leading-tight">
                            Best Application for Monitor <br />
                            Your Business
                        </h1>

                        <p className="mt-8 text-white/80 text-lg max-w-xl">
                            Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum
                            has been the industry's standard dummy text ever since the 1500s, when an unknown
                            printer took a galley of type.
                        </p>

                        <button className="mt-10 px-10 py-4 rounded-2xl bg-[#FF8A42] 
              text-white font-bold text-lg shadow-lg hover:bg-[#e67a3a] transition-all">
                            Get Started
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
