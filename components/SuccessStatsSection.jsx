"use client";
import React from "react";
import { Users, UserCheck, Star, MessageCircle } from "lucide-react";

const stats = [
    {
        icon: <Users size={32} className="text-white" />,
        value: "10k+",
        label: "Businesses Empowered",
        color: "bg-[#4f8cff]", // Blue
        shadow: "shadow-blue-200",
    },
    {
        icon: <UserCheck size={32} className="text-white" />,
        value: "5M+",
        label: "Ads Served",
        color: "bg-[#FF8A42]", // Orange
        shadow: "shadow-orange-200",
    },
    {
        icon: <Star size={32} className="text-white" />,
        value: "98%",
        label: "Customer Satisfaction",
        color: "bg-[#8c52ff]", // Purple
        shadow: "shadow-purple-200",
    },
    {
        icon: <MessageCircle size={32} className="text-white" />,
        value: "24/7",
        label: "Expert Support",
        color: "bg-[#42fda8]", // Green (approx from image)
        shadow: "shadow-green-200",
    },
];

const SuccessStatsSection = () => {
    return (
        <section className="py-24 bg-[#F8F9FF] dark:bg-black relative overflow-hidden">
            {/* Background Map Placeholder */}
            <div
                className="absolute inset-0 opacity-5 pointer-events-none"
                style={{
                    backgroundImage: "url('/globe.svg')",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "contain"
                }}
            ></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">

                <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] dark:text-white mb-4 font-poppins">
                    Proven Results
                </h2>

                <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mb-20 text-lg">
                    Join thousands of local businesses that are growing with Brand Lift.
                    Our platform delivers real reliability and performance you can trust.
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
                    {stats.map((stat, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <div
                                className={`w-20 h-20 rounded-full flex items-center justify-center ${stat.color} ${stat.shadow} shadow-lg mb-6 transform hover:scale-110 transition-transform duration-300`}
                            >
                                {stat.icon}
                            </div>
                            <h3 className="text-4xl font-bold text-[#FF8A42] mb-2 font-poppins">
                                {stat.value}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400 font-medium">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default SuccessStatsSection;
