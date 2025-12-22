"use client";
import React from "react";
import { HelpCircle, Send } from "lucide-react";

const FAQPage = () => {
    const faqs = [
        {
            question: "How does the free trial work?",
            answer: "You can try Brand Lift risk-free for 14 days. You'll have access to all features on the Growth plan to see how it works for your business."
        },
        {
            question: "Can I cancel my subscription anytime?",
            answer: "Yes, absolutely. There are no lock-in contracts. You can cancel or upgrade your plan at any time from your dashboard."
        },
        {
            question: "Do you support multiple locations?",
            answer: "Yes! Our Pro plan is designed specifically for businesses with multiple locations or franchises, allowing you to manage everything from one login."
        },
        {
            question: "How do I pay for my ads?",
            answer: "We accept all major credit cards and PayPal. You set your own daily ad budget, so you never spend more than you intend."
        },
        {
            question: "Do I need design skills?",
            answer: "Not at all. Our platform comes with professional, ready-to-use templates. Just add your text and images, and you're good to go."
        },
        {
            question: "Is there a setup fee?",
            answer: "No, there are no setup fees. You only pay your monthly subscription and your ad budget, which goes directly to the ad networks."
        }
    ];

    return (
        <div className="bg-white">
            {/* Section 1: Hero Section */}
            {/* Section 1: Hero Section */}
            <section className="relative bg-gradient-to-br from-[#2e1065] via-[#4c1d95] to-[#7c3aed] pt-32 pb-44 text-center px-6 overflow-hidden text-white">
                <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-[20%] right-[-10%] w-[500px] h-[500px] bg-[#fb923c]/10 rounded-full blur-3xl"></div>

                <div className="max-w-4xl mx-auto relative z-10">
                    <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                        Frequently Asked Questions
                    </h1>
                    <p className="mt-6 text-white/80 text-lg max-w-2xl mx-auto leading-relaxed">
                        Find answers to the most common questions about our platform, billing, and services.
                    </p>
                </div>
                {/* Smooth Professional Wave Divider */}
                <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
                    <svg className="relative block w-full h-[60px] md:h-[100px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" fill="#ffffff" className="fill-white"></path>
                    </svg>
                </div>
            </section>

            {/* Section 2: Most Asked Questions Grid */}
            <section className="py-24 max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Most Asked Questions</h2>
                    <p className="text-gray-500 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
                        Here are some of the most frequent inquiries we receive from our customers.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
                    {faqs.map((faq, index) => (
                        <div key={index} className="flex gap-5 group">
                            <div className="w-10 h-10 shrink-0 bg-[#7c3aed] text-white rounded-full flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110">
                                <HelpCircle size={20} />
                            </div>
                            <div>
                                <h4 className="text-lg font-bold text-gray-800 mb-3 group-hover:text-[#7c3aed] transition-colors line-clamp-2">
                                    {faq.question}
                                </h4>
                                <p className="text-gray-500 text-sm leading-relaxed group-hover:text-gray-600">
                                    {faq.answer}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Section 3: Ask Questions Form */}
            <section className="py-24 bg-white">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-[#1f2937] mb-4">Ask Questions</h2>
                        <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed">
                            Can't find the answer you're looking for? Submit your question below and we'll get back to you shortly.
                        </p>
                    </div>

                    <form className="space-y-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {/* Full Name */}
                            <div className="space-y-3">
                                <label className="block text-sm font-medium text-gray-500 ml-2">Full Name</label>
                                <input
                                    type="text"
                                    placeholder=""
                                    className="w-full px-8 py-5 rounded-full border border-gray-200 focus:border-[#7c3aed] focus:outline-none transition-all text-gray-700"
                                />
                            </div>
                            {/* Phone */}
                            <div className="space-y-3">
                                <label className="block text-sm font-medium text-gray-500 ml-2">Phone</label>
                                <input
                                    type="text"
                                    placeholder=""
                                    className="w-full px-8 py-5 rounded-full border border-gray-200 focus:border-[#7c3aed] focus:outline-none transition-all text-gray-700"
                                />
                            </div>
                            {/* Email Address */}
                            <div className="space-y-3">
                                <label className="block text-sm font-medium text-gray-500 ml-2">Email Address</label>
                                <input
                                    type="email"
                                    placeholder=""
                                    className="w-full px-8 py-5 rounded-full border border-gray-200 focus:border-[#7c3aed] focus:outline-none transition-all text-gray-700"
                                />
                            </div>
                            {/* Subject */}
                            <div className="space-y-3">
                                <label className="block text-sm font-medium text-gray-500 ml-2">Subject</label>
                                <input
                                    type="text"
                                    placeholder=""
                                    className="w-full px-8 py-5 rounded-full border border-gray-200 focus:border-[#7c3aed] focus:outline-none transition-all text-gray-700"
                                />
                            </div>
                        </div>

                        {/* Your Questions */}
                        <div className="space-y-3">
                            <label className="block text-sm font-medium text-gray-500 ml-2">Your Questions</label>
                            <textarea
                                rows={4}
                                className="w-full px-8 py-6 rounded-[40px] border border-gray-200 focus:border-[#7c3aed] focus:outline-none transition-all text-gray-700 resize-none"
                            ></textarea>
                        </div>

                        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-4">
                            <label className="flex items-center gap-3 cursor-pointer group">
                                <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-[#7c3aed] focus:ring-[#7c3aed]" />
                                <span className="text-sm text-gray-500 font-medium">Also subscribe our newsletter</span>
                            </label>

                            <button type="submit" className="px-14 py-4 bg-[#7c3aed] text-white font-bold rounded-full shadow-lg shadow-purple-500/30 hover:bg-[#6d28d9] transition-all transform hover:-translate-y-1">
                                Send
                            </button>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default FAQPage;
