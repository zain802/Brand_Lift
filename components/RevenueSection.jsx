"use client";
import React from "react";
import Image from "next/image";

const RevenueSection = () => {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left Side - Content */}
                    <div className="lg:pr-10 order-2 lg:order-1">
                        <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] leading-tight mb-6 font-poppins">
                            Maximize Your ROI
                        </h2>

                        <p className="text-gray-500 text-lg mb-8 leading-relaxed">
                            Turn ad spend into real revenue. Our smart algorithms ensure every dollar works hard for your business by targeting the right audience at the right time.
                        </p>

                        <p className="text-gray-500 text-lg mb-10 leading-relaxed">
                            Whether you are a local cafe or a growing agency, Brand Lift scales with you to maximize your profit margins and deliver clear, measurable results.
                        </p>

                        <button className="px-10 py-4 bg-[#FF8A42] hover:bg-[#ff7b29] text-white text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                            Start Growing
                        </button>
                    </div>

                    {/* Right Side - Images */}
                    <div className="relative h-[400px] w-full flex items-center justify-center lg:justify-end order-1 lg:order-2">

                        {/* Back Image (Usages by Times) */}
                        <div className="absolute top-0 right-0 lg:right-0 z-10 w-[80%] max-w-[350px] shadow-2xl rounded-2xl transform rotate-3 transition hover:rotate-0 duration-500">
                            {/* Placeholder for first image */}
                            <div className="bg-white p-4 rounded-xl min-h-[250px] flex items-center justify-center text-gray-400">
                                <Image
                                    src="/images/jpg/chart3.jpg"
                                    alt="Usages by Times"
                                    width={350}
                                    height={250}
                                    className="w-full h-auto rounded-lg object-cover"
                                />
                            </div>
                        </div>

                        {/* Front Image (Progress Graph) */}
                        <div className="absolute bottom-0 left-0 lg:left-10 z-20 w-[65%] max-w-[300px] shadow-[0_20px_50px_rgba(0,0,0,0.1)] rounded-2xl bg-white transform translate-y-10 lg:-translate-x-12">
                            {/* Placeholder for second image */}
                            <div className="bg-white p-4 rounded-xl min-h-[300px] flex items-center justify-center text-gray-400">
                                <Image
                                    src="/images/jpg/chart4.jpg"
                                    alt="Progress Graph"
                                    width={300}
                                    height={350}
                                    className="w-full h-auto rounded-lg object-cover"
                                />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default RevenueSection;
