"use client";
import React from "react";
import { Smartphone, Zap, BarChart3, Bell, Shield, Users } from "lucide-react";

const DownloadAppSection = () => {
    const features = [
        {
            icon: <Smartphone className="w-6 h-6" />,
            title: "Mobile First",
            description: "Manage campaigns anywhere, anytime"
        },
        {
            icon: <Zap className="w-6 h-6" />,
            title: "Instant Updates",
            description: "Real-time notifications on performance"
        },
        {
            icon: <BarChart3 className="w-6 h-6" />,
            title: "Live Analytics",
            description: "Track metrics on the go"
        },
        {
            icon: <Bell className="w-6 h-6" />,
            title: "Smart Alerts",
            description: "Never miss important insights"
        },
        {
            icon: <Shield className="w-6 h-6" />,
            title: "Secure Access",
            description: "Enterprise-grade security"
        },
        {
            icon: <Users className="w-6 h-6" />,
            title: "Team Collaboration",
            description: "Work together seamlessly"
        }
    ];

    return (
        <section className="py-20 bg-gradient-to-br from-[#2e1065] via-[#4c1d95] to-[#7c3aed] text-white overflow-hidden relative">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF8A42]/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">

                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                        Take Control of Your Campaigns
                    </h2>
                    <p className="text-white/80 text-lg max-w-2xl mx-auto leading-relaxed">
                        Access powerful advertising tools from any device. Monitor performance, adjust budgets, and grow your business—all from the palm of your hand.
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/15 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                        >
                            <div className="w-12 h-12 rounded-xl bg-[#FF8A42] flex items-center justify-center mb-4 text-white">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                            <p className="text-white/70 text-sm">{feature.description}</p>
                        </div>
                    ))}
                </div>

                {/* CTA Section */}
                <div className="text-center">
                    <p className="text-white/90 mb-6 text-lg font-medium">
                        Get started today and experience the difference
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <button className="flex items-center gap-3 px-8 py-4 bg-[#FF8A42] text-white rounded-full font-semibold shadow-lg hover:bg-[#e67a3a] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                            <Smartphone className="w-5 h-5" />
                            Start Free Trial
                        </button>
                        <button className="flex items-center gap-3 px-8 py-4 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-[#7c3aed] transition-all duration-300 hover:-translate-y-1">
                            Watch Demo
                        </button>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default DownloadAppSection;
