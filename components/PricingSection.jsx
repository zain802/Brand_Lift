"use client";
import React from "react";

const plans = [
    {
        name: "Basic",
        price: "$10.99",
        features: [
            "50GB Bandwidth",
            "Financ Analysing",
            "24 hour support",
            "Customer Managemet",
            "Financ Analysing",
        ],
        highlight: false,
    },
    {
        name: "Professional",
        price: "$20.99",
        features: [
            "50GB Bandwidth",
            "Financ Analysing",
            "24 hour support",
            "Customer Managemet",
            "Financ Analysing",
        ],
        highlight: true,
    },
    {
        name: "Premium",
        price: "$30.99",
        features: [
            "50GB Bandwidth",
            "Financ Analysing",
            "24 hour support",
            "Customer Managemet",
            "Financ Analysing",
        ],
        highlight: false,
    },
];

const PricingSection = () => {
    return (
        <section className="py-24 bg-white dark:bg-zinc-900">
            <div className="max-w-7xl mx-auto px-6 text-center">

                <h2 className="text-4xl font-bold text-[#1A1A1A] dark:text-white mb-4 font-poppins">
                    Our Pricing and Plans
                </h2>

                <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mb-16 text-sm md:text-base">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className={`group relative rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2
                ${plan.highlight
                                    ? "bg-gradient-to-b from-[#4f8cff] to-[#5b2ccf] text-white shadow-xl scale-105 z-10"
                                    : "bg-white dark:bg-black text-[#1A1A1A] dark:text-white shadow-lg border border-gray-100 dark:border-zinc-800 hover:bg-gradient-to-b hover:from-[#4f8cff] hover:to-[#5b2ccf]"
                                }
              `}
                        >
                            <h3 className={`text-xl font-medium mb-2 transition-colors ${plan.highlight ? "text-white" : "text-gray-600 dark:text-gray-300 group-hover:text-white"}`}>
                                {plan.name}
                            </h3>

                            <div className={`text-4xl font-bold mb-2 transition-colors ${plan.highlight ? "text-white" : "text-[#4a1fb8] group-hover:text-white"}`}>
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
                                        ? "border-white text-white hover:bg-white hover:text-[#5b2ccf]"
                                        : "border-[#FF8A42] text-[#FF8A42] hover:bg-[#FF8A42] hover:text-white group-hover:border-white group-hover:text-white group-hover:hover:bg-white group-hover:hover:text-[#5b2ccf]"
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
