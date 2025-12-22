"use client";
import React, { useState } from "react";
import { HelpCircle } from "lucide-react";

const PricingPage = () => {
    const [isYearly, setIsYearly] = useState(false);

    const plans = [
        {
            name: "Basic",
            monthlyPrice: "0.99",
            yearlyPrice: "10.99",
            features: [
                "5 GB Bandwidth",
                "Finance Analysing",
                "Daily 2 Reports",
                "5 Team Members",
                "24 hour support"
            ]
        },
        {
            name: "Standard",
            monthlyPrice: "7.50",
            yearlyPrice: "27.50",
            features: [
                "15 GB Bandwidth",
                "Finance Analysing",
                "Daily 10 Reports",
                "10 Team Members",
                "24 hour support"
            ]
        },
        {
            name: "Professional",
            monthlyPrice: "9.90",
            yearlyPrice: "49.90",
            features: [
                "20 GB Bandwidth",
                "Finance Analysing",
                "Daily 15 Reports",
                "12 Team Members",
                "24 hour support"
            ],
            highlight: true
        },
        {
            name: "Enterprise",
            monthlyPrice: "19.99",
            yearlyPrice: "79.99",
            features: [
                "50 GB Bandwidth",
                "Finance Analysing",
                "Daily 35 Reports",
                "20 Team Members",
                "24 hour support"
            ]
        }
    ];

    const faqs = [
        {
            question: "How long I can use free trail?",
            answer: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum."
        },
        {
            question: "Can I use all premium features in trail?",
            answer: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour."
        },
        {
            question: "What is the process of upgrate plan?",
            answer: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour."
        },
        {
            question: "Can I pay using Paypal account?",
            answer: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum."
        }
    ];

    return (
        <div className="bg-white">
            {/* Section 1: Hero Section */}
            <section className="bg-[#7c3aed] pt-20 pb-40 text-center px-6 relative overflow-hidden">
                {/* Decorative circles */}
                <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-white/5 rounded-full"></div>

                <div className="max-w-4xl mx-auto relative z-10">
                    <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold text-white leading-tight">
                        Enjoy the Best Value To Your Business <br className="hidden md:block" /> for Monitoring Data
                    </h1>
                    <p className="mt-6 text-white/80 text-lg max-w-2xl mx-auto">
                        Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum
                        has been the industry's standard dummy text ever since.
                    </p>
                    <button className="mt-10 px-8 py-3.5 bg-[#FF8A42] text-white font-bold rounded-2xl shadow-xl hover:bg-[#e67a3a] transition-all">
                        Need Custom Package?
                    </button>
                </div>

                {/* Slanted Bottom */}
                <div className="absolute bottom-0 left-0 w-full h-[100px] bg-white"
                    style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 0)" }}>
                </div>
            </section>

            {/* Section 2: Pricing Section */}
            <section className="py-24 max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900">Our Pricing and Plans</h2>
                    <p className="mt-4 text-gray-500 max-w-2xl mx-auto leading-relaxed">
                        Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has
                        been the industry's standard dummy text ever since.
                    </p>

                    {/* Toggle Switch */}
                    <div className="mt-12 flex justify-center items-center gap-4">
                        <div className="bg-gray-100 p-1.5 rounded-full flex items-center shadow-inner w-48 relative">
                            <button
                                onClick={() => setIsYearly(false)}
                                className={`flex-1 py-2 text-sm font-bold rounded-full transition-all relative z-10 ${!isYearly ? 'text-white' : 'text-gray-500'}`}
                            >
                                Month
                            </button>
                            <button
                                onClick={() => setIsYearly(true)}
                                className={`flex-1 py-2 text-sm font-bold rounded-full transition-all relative z-10 ${isYearly ? 'text-white' : 'text-gray-500'}`}
                            >
                                Year
                            </button>
                            {/* Sliding background */}
                            <div className={`absolute top-1.5 bottom-1.5 left-1.5 w-[calc(50%-6px)] bg-[#FF8A42] rounded-full transition-transform duration-300 shadow-md ${isYearly ? 'translate-x-[calc(100%+6px)]' : 'translate-x-0'}`}></div>
                        </div>
                    </div>
                </div>

                {/* Pricing Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
                    {plans.map((plan) => (
                        <div
                            key={plan.name}
                            className="group relative bg-white rounded-[30px] p-8 transition-all duration-500 flex flex-col items-center text-center shadow-lg border border-gray-100 hover:shadow-2xl hover:scale-105 hover:z-10"
                        >
                            <h3 className="text-lg font-bold text-gray-800 tracking-wide uppercase transition-colors group-hover:text-[#7c3aed]">{plan.name}</h3>
                            <div className="mt-6 flex items-baseline text-[#7c3aed] transition-transform duration-500 group-hover:scale-110">
                                <span className="text-3xl font-bold">$</span>
                                <span className="text-5xl font-bold tracking-tight">
                                    {isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                                </span>
                            </div>

                            <div className="w-full h-px bg-gray-100 my-8"></div>

                            <ul className="space-y-4 mb-10 text-gray-500 text-sm font-medium">
                                {plan.features.map((feature, idx) => (
                                    <li key={idx} className="group-hover:text-gray-700 transition-colors">{feature}</li>
                                ))}
                            </ul>

                            <button className="mt-auto w-full py-3.5 rounded-full font-bold transition-all duration-300 border bg-white text-gray-700 border-gray-200 group-hover:bg-[#FF8A42] group-hover:text-white group-hover:border-[#FF8A42] shadow-sm">
                                Choose Plan
                            </button>
                        </div>
                    ))}
                </div>
            </section>

            {/* Section 3: FAQ Section */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl font-bold text-gray-900">Frequently Asked Questions</h2>
                        <p className="mt-4 text-gray-500 max-w-2xl mx-auto leading-relaxed">
                            Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has
                            been the industry's standard dummy text ever since.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
                        {faqs.map((faq, index) => (
                            <div key={index} className="flex gap-5">
                                <div className="w-10 h-10 shrink-0 bg-[#FF8A42] rounded-full flex items-center justify-center text-white shadow-md">
                                    <HelpCircle size={20} />
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-gray-800 leading-snug">
                                        {faq.question}
                                    </h4>
                                    <p className="mt-3 text-gray-500 text-sm leading-relaxed">
                                        {faq.answer}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default PricingPage;
