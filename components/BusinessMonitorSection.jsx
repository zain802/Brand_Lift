"use client";
import React from "react";
import Image from "next/image";

const BusinessMonitorSection = () => {
    return (
        <section className="py-24 bg-[#F8F9FF] dark:bg-black overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left Side - Images */}
                    <div className="relative h-[400px] w-full flex items-center justify-center lg:justify-start">
                        {/* Back Image (Overall Traffic) */}
                        <div className="absolute top-0 left-0 lg:left-0 z-10 w-[80%] max-w-[350px] shadow-2xl rounded-2xl transform -rotate-3 transition hover:rotate-0 duration-500">
                            {/* Placeholder for first image - user to replace */}
                            <div className="bg-white p-4 rounded-xl min-h-[250px] flex items-center justify-center text-gray-400">
                                <Image
                                    src="/images/jpg/chart1.jpg"
                                    alt="Overall Traffic"
                                    width={350}
                                    height={250}
                                    className="w-full h-auto rounded-lg object-cover"
                                />
                            </div>
                        </div>

                        {/* Front Image (Potential Revenue) */}
                        <div className="absolute bottom-0 right-0 lg:right-10 z-20 w-[65%] max-w-[300px] shadow-[0_20px_50px_rgba(0,0,0,0.1)] rounded-2xl bg-white transform translate-y-10 lg:translate-x-12">
                            {/* Placeholder for second image - user to replace */}
                            <div className="bg-white p-4 rounded-xl min-h-[300px] flex items-center justify-center text-gray-400">
                                <Image
                                    src="/images/jpg/chart2.jpg"
                                    alt="Potential Revenue"
                                    width={300}
                                    height={350}
                                    className="w-full h-auto rounded-lg object-cover"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Content */}
                    <div className="lg:pl-10">
                        <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] dark:text-white leading-tight mb-6 font-poppins">
                            Real-Time Performance Tracking
                        </h2>

                        <p className="text-gray-500 dark:text-gray-400 text-lg mb-8 leading-relaxed">
                            Stop guessing. Know exactly how your ads are performing with our intuitive dashboard. Track impressions, clicks, and customer engagement as they happen.
                        </p>

                        <p className="text-gray-500 dark:text-gray-400 text-lg mb-10 leading-relaxed">
                            Understand your ROI instantly and make data-driven decisions to optimize your budget and grow your business faster.
                        </p>

                        <button className="px-10 py-4 bg-[#FF8A42] hover:bg-[#ff7b29] text-white text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                            Track Your Success
                        </button>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default BusinessMonitorSection;
