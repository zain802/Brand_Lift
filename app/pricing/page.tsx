"use client";
import React, { useState } from "react";
import { HelpCircle } from "lucide-react";

const PricingPage = () => {
    const [isYearly, setIsYearly] = useState(false);

    const plans = [
        {
            name: "Starter",
            monthlyPrice: "49.00",
            yearlyPrice: "490.00",
            features: [
                "1 Ad Campaign",
                "Basic Analytics",
                "Email Support",
                "Standard Templates",
                "Local Targeting"
            ]
        },
        {
            name: "Growth",
            monthlyPrice: "99.00",
            yearlyPrice: "990.00",
            features: [
                "5 Ad Campaigns",
                "Advanced Analytics",
                "AI Optimization",
                "Priority Support",
                "Premium Templates"
            ],
            highlight: true
        },
        {
            name: "Pro",
            monthlyPrice: "199.00",
            yearlyPrice: "1990.00",
            features: [
                "Unlimited Campaigns",
                "White-label Reporting",
                "Dedicated Account Manager",
                "API Access",
                "Multi-Location Support"
            ]
        },
        {
            name: "Enterprise",
            monthlyPrice: "Custom",
            yearlyPrice: "Custom",
            features: [
                "Custom Solutions",
                "Global Reach",
                "Dedicated Infrastructure",
                "24/7 SLA Support",
                "Strategic Consulting"
            ]
        }
    ];

    const faqs = [
        {
            question: "How long is the free trial?",
            answer: "You get 14 days of full access to the Pro plan features to test everything out."
        },
        {
            question: "Can I use all premium features in trial?",
            answer: "Yes, the trial includes all premium features so you can experience the full power of Brand Lift."
        },
        {
            question: "What is the process of upgrade plan?",
            answer: "Simply go to your billing settings and select a new plan. Your data carries over instantly."
        },
        {
            question: "Can I pay using Paypal account?",
            answer: "Yes, we accept PayPal and all major credit cards for your convenience."
        }
    ];

    return (
        <div className="bg-white">
            {/* Section 1: Hero Section */}
            <section className="relative bg-gradient-to-br from-[#2e1065] via-[#4c1d95] to-[#7c3aed] pt-20 pb-40 text-center px-6 overflow-hidden">
                {/* Decorative circles */}
                <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-[20%] right-[-10%] w-[500px] h-[500px] bg-[#fb923c]/10 rounded-full blur-3xl"></div>

                <div className="max-w-4xl mx-auto relative z-10">
                    <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold text-white leading-tight">
                        Flexible Plans for <br className="hidden md:block" /> Every Stage of Growth
                    </h1>
                    <p className="mt-6 text-white/80 text-lg max-w-2xl mx-auto">
                        Start small and scale up as you grow. No hidden fees, cancel anytime.
                    </p>
                    <button className="mt-10 px-8 py-3.5 bg-[#FF8A42] text-white font-bold rounded-2xl shadow-xl hover:bg-[#e67a3a] transition-all">
                        View Plans
                    </button>
                </div>

                {/* Smooth Professional Wave Divider */}
                <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
                    <svg className="relative block w-full h-[60px] md:h-[100px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" fill="#ffffff" className="fill-white"></path>
                    </svg>
                </div>
            </section>

            {/* Section 2: Pricing Section */}
            <section className="py-24 max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900">Our Pricing and Plans</h2>
                    <p className="mt-4 text-gray-500 max-w-2xl mx-auto leading-relaxed">
                        Transparent pricing with no hidden fees. Choose the package that best fits your business needs.
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
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 px-4">
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
                            Have questions? We're here to help. Check out the most common questions about our service below.
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
