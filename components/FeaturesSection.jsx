"use client";
import React from "react";
import { Cloud, Monitor, FileText, Settings, Shield, Zap } from "lucide-react";

const features = [
    {
        title: "Realtime Data",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been text.",
        icon: <Monitor />,
    },
    {
        title: "Fully Cloud Access",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been text.",
        icon: <Cloud />,
    },
    {
        title: "Full Customizable",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been text.",
        icon: <FileText />,
    },
    {
        title: "Secure & Safe",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been text.",
        icon: <Shield />,
    },
    {
        title: "Fast Performance",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been text.",
        icon: <Zap />,
    },
    {
        title: "Easy Settings",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been text.",
        icon: <Settings />,
    },
];

const FeaturesSection = () => {
    return (
        <section className="bg-white py-20">
            <div className="max-w-7xl mx-auto px-6 text-center">

                {/* Heading */}
                <h2 className="text-4xl font-bold text-gray-900">Our Features</h2>
                <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
                    Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry’s standard dummy text ever
                    since
                </p>

                {/* Cards */}
                <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="group bg-white rounded-xl shadow-md p-10 transition-all duration-500
              hover:bg-gradient-to-b hover:from-[#4f8cff] hover:to-[#5b2ccf]
              hover:-translate-y-2 hover:shadow-xl"
                        >
                            <div className="mx-auto w-16 h-16 flex items-center justify-center rounded-xl
                bg-[#FF8A42] text-white mb-6 transition group-hover:bg-white group-hover:text-[#5b2ccf]">
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
