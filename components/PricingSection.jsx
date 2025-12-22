"use client";
import React from "react";

const plans = [
    {
        name: "Starter",
        price: "$49",
        features: [
            "1 Ad Campaign",
            "Basic Analytics",
            "Email Support",
            "Standard Templates",
            "Local Targeting",
        ],
        highlight: false,
    },
    {
        name: "Growth",
        price: "$99",
        features: [
            "5 Ad Campaigns",
            "Advanced Analytics",
            "AI Optimization",
            "Priority Support",
            "Premium Templates",
        ],
        highlight: true,
    },
    {
        name: "Pro",
        price: "$199",
        features: [
            "Unlimited Campaigns",
            "White-label Reporting",
            "Dedicated Account Manager",
            "API Access",
            "Multi-Location Support",
        ],
        highlight: false,
    },
];

const PricingSection = () => {
    return (
        <section className="py-24 bg-white dark:bg-zinc-900">
            <div className="max-w-7xl mx-auto px-6 text-center">

                <h2 className="text-4xl font-bold text-[#1A1A1A] dark:text-white mb-4 font-poppins">
                    Simple, Transparent Pricing
                </h2>

                <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mb-16 text-sm md:text-base">
                    Choose the plan that fits your business needs. No hidden fees. Cancel anytime.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className={`group relative rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2
                ${plan.highlight
                                    ? "bg-gradient-to-br from-[#2e1065] via-[#4c1d95] to-[#7c3aed] text-white shadow-xl scale-105 z-10"
                                    : "bg-white dark:bg-black text-[#1A1A1A] dark:text-white shadow-lg border border-gray-100 dark:border-zinc-800 hover:bg-gradient-to-br hover:from-[#2e1065] hover:via-[#4c1d95] hover:to-[#7c3aed]"
                                }
              `}
                        >
                            <h3 className={`text-xl font-medium mb-2 transition-colors ${plan.highlight ? "text-white" : "text-gray-600 dark:text-gray-300 group-hover:text-white"}`}>
                                {plan.name}
                            </h3>

                            <div className={`text-4xl font-bold mb-2 transition-colors ${plan.highlight ? "text-white" : "text-[#7c3aed] group-hover:text-white"}`}>
                                {plan.price}
                            </div>

                            <p className={`text-xs uppercase mb-8 transition-colors ${plan.highlight ? "text-white/80" : "text-gray-400 group-hover:text-white/80"}`}>
                                Monthly
                            </p>

                            <hr className={`mb-8 transition-colors ${plan.highlight ? "border-white/20" : "border-gray-100 group-hover:border-white/20"}`} />

                            <ul className="space-y-6 mb-10">
                                {plan.features.map((feature, idx) => (
                                    <li key={idx} className={`text-sm transition-colors ${plan.highlight ? "text-white/90" : "text-gray-500 dark:text-gray-400 group-hover:text-white/90"}`}>
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <button
                                className={`w-full py-3 px-6 rounded-full border-2 font-medium transition-colors mb-6
                  ${plan.highlight
                                        ? "border-white text-white hover:bg-white hover:text-[#7c3aed]"
                                        : "border-[#FF8A42] text-[#FF8A42] hover:bg-[#FF8A42] hover:text-white group-hover:border-white group-hover:text-white group-hover:hover:bg-white group-hover:hover:text-[#7c3aed]"
                                    }
                `}
                            >
                                Choose Plan
                            </button>

                            <a href="#" className={`text-xs underline decoration-1 underline-offset-4 transition-colors ${plan.highlight ? "text-white/80 hover:text-white" : "text-gray-500 hover:text-[#1A1A1A] group-hover:text-white/80 group-hover:hover:text-white"}`}>
                                Get 30 Days Free Trial
                            </a>

                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default PricingSection;
