"use client";
import React from "react";
import { HelpCircle, Send } from "lucide-react";

const FAQPage = () => {
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
        },
        {
            question: "How can I change my shipping address?",
            answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text."
        },
        {
            question: "What is the process of upgrate plan?",
            answer: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum."
        }
    ];

    return (
        <div className="bg-white">
            {/* Section 1: Hero Section */}
            <section className="bg-[#4c1d95] pt-32 pb-44 text-center px-6 relative overflow-hidden text-white">
                <div className="max-w-4xl mx-auto relative z-10">
                    <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                        Frequently Asked Questions
                    </h1>
                    <p className="mt-6 text-white/80 text-lg max-w-2xl mx-auto leading-relaxed">
                        Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum
                        has been the industry's standard dummy text ever since.
                    </p>
                </div>
                {/* Decorative slant bottom */}
                <div className="absolute bottom-0 left-0 w-full h-[80px] bg-white"
                    style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 0)" }}>
                </div>
            </section>

            {/* Section 2: Most Asked Questions Grid */}
            <section className="py-24 max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Most Asked Questions</h2>
                    <p className="text-gray-500 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
                        Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has
                        been the industry's standard dummy text ever since.
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
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                            been the industry's standard dummy text ever since
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
