"use client";
import React from "react";
import Image from "next/image";
import { Apple, Play } from "lucide-react";

const steps = [
    {
        number: "1",
        title: "Signup Your Account in App",
        description: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem has been the standard dummy text.",
    },
    {
        number: "2",
        title: "Input Your Personal Data",
        description: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem has been the standard dummy text.",
    },
    {
        number: "3",
        title: "Get Daily Report and Update",
        description: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem has been the standard dummy text.",
    },
];

const DownloadAppSection = () => {
    return (
        <section className="py-16 lg:py-24 bg-[#4a1fb8] text-white overflow-hidden relative">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                    {/* Left Side - Content */}
                    <div className="text-center lg:text-left order-2 lg:order-1">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 lg:mb-12 font-poppins leading-tight">
                            Ready to Use? Download Now
                        </h2>

                        <div className="space-y-8 lg:space-y-10 mb-10 lg:mb-12">
                            {steps.map((step, index) => (
                                <div key={index} className="flex flex-col lg:flex-row items-center lg:items-start gap-4 lg:gap-6 group">
                                    <div className="flex-shrink-0 w-12 h-12 lg:w-14 lg:h-14 rounded-full border-2 border-white/30 flex items-center justify-center text-xl font-medium transition-all duration-300 group-hover:bg-white group-hover:text-[#4a1fb8] group-hover:border-white shadow-lg">
                                        {step.number}
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                                        <p className="text-white/70 leading-relaxed text-sm md:text-base max-w-md mx-auto lg:mx-0">
                                            {step.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 lg:gap-6">
                            <button className="flex items-center gap-3 px-8 py-4 border border-white rounded-full transition-all duration-300 group hover:bg-[#EA7D4E] hover:border-[#EA7D4E] hover:shadow-lg hover:-translate-y-1">
                                <Apple size={32} className="group-hover:text-white transition-colors" />
                                <div className="text-left">
                                    <div className="text-[10px] uppercase tracking-wider opacity-80 group-hover:text-white">Download on the</div>
                                    <div className="text-lg font-bold leading-none group-hover:text-white">App Store</div>
                                </div>
                            </button>

                            <button className="flex items-center gap-3 px-8 py-4 border border-white rounded-full transition-all duration-300 group hover:bg-[#EA7D4E] hover:border-[#EA7D4E] hover:shadow-lg hover:-translate-y-1">
                                <Play size={32} className="group-hover:text-white fill-current transition-colors" />
                                <div className="text-left">
                                    <div className="text-[10px] uppercase tracking-wider opacity-80 group-hover:text-white">Get it on</div>
                                    <div className="text-lg font-bold leading-none group-hover:text-white">Play Store</div>
                                </div>
                            </button>
                        </div>
                    </div>

                    {/* Right Side - Phone Image */}
                    <div className="relative flex justify-center lg:justify-end order-1 lg:order-2 mb-10 lg:mb-0">
                        {/* Placeholder for phone mockup */}
                        <div className="relative z-10 w-[240px] md:w-[320px] lg:w-[350px] transform rotate-12 drop-shadow-2xl hover:rotate-6 transition-transform duration-500">
                            <Image
                                src="/images/jpg/phone-mockup.jpg"
                                alt="App Interface"
                                width={350}
                                height={700}
                                className="w-full h-auto rounded-[3rem] border-[8px] border-gray-800 shadow-2xl"
                            />
                        </div>
                        {/* Glow effect */}
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] bg-blue-500/30 rounded-full blur-[80px] -z-10 animate-pulse"></div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default DownloadAppSection;
