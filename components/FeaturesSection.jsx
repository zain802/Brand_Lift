"use client";
import React from "react";
import { Cloud, Monitor, FileText, Settings, Shield, Zap } from "lucide-react";

const features = [
    {
        title: "Hyper-Local Targeting",
        description: "Reach potential customers exactly where they are—in your neighborhood.",
        icon: <Monitor />,
    },
    {
        title: "Smart Automation",
        description: "AI optimizes your ads 24/7 to ensure maximum engagement and performance.",
        icon: <Cloud />,
    },
    {
        title: "Easy Ad Creation",
        description: "Create professional-looking ads in minutes with our ready-to-use templates.",
        icon: <FileText />,
    },
    {
        title: "Secure & Reliable",
        description: "Your data and payments are protected with enterprise-grade security standards.",
        icon: <Shield />,
    },
    {
        title: "Real-Time Analytics",
        description: "Track your clicks, views, and conversions instantly from your dashboard.",
        icon: <Zap />,
    },
    {
        title: "Simple Management",
        description: "Manage multiple campaigns and locations from one single, easy-to-use platform.",
        icon: <Settings />,
    },
];

const FeaturesSection = () => {
    return (
        <section className="bg-white py-20">
            <div className="max-w-7xl mx-auto px-6 text-center">

                {/* Heading */}
                <h2 className="text-4xl font-bold text-gray-900">Powerful Features for Local Growth</h2>
                <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
                    Everything you need to launch professional campaigns, attract new customers,
                    and grow your business without the complexity of traditional ad platforms.
                </p>

                {/* Cards */}
                <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="group bg-white rounded-xl shadow-md p-10 transition-all duration-500
              hover:bg-gradient-to-br hover:from-[#2e1065] hover:via-[#4c1d95] hover:to-[#7c3aed]
              hover:-translate-y-2 hover:shadow-xl"
                        >
                            <div className="mx-auto w-16 h-16 flex items-center justify-center rounded-xl
                bg-[#FF8A42] text-white mb-6 transition group-hover:bg-white group-hover:text-[#7c3aed]">
                                {feature.icon}
                            </div>

                            <h3 className="text-xl font-semibold text-gray-900 group-hover:text-white">
                                {feature.title}
                            </h3>

                            <p className="mt-4 text-gray-500 group-hover:text-white/80">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;
