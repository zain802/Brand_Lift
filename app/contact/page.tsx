"use client";
import React from "react";
import {
    Facebook,
    Twitter,
    Instagram,
    Mail,
    Info
} from "lucide-react";

/**
 * ContactPage - Pixel-perfect implementation of the "Get in Touch" section.
 * Focusing on the floating labels (sitting on borders) and the info card.
 */
const ContactPage = () => {
    return (
        <div className="bg-white min-h-screen py-24 px-6">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

                    {/* Left: Get in Touch Form */}
                    <div className="lg:col-span-7">
                        <h2 className="text-4xl font-extrabold text-[#111827] mb-6">Get in Touch</h2>
                        <p className="text-gray-500 mb-14 text-lg leading-relaxed max-w-2xl">
                            Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod on
                            tempor incididunt ut labore et dolore magna aliqua.
                        </p>

                        <form className="space-y-12">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
                                {/* Full Name */}
                                <div className="relative">
                                    <label className="absolute -top-3 left-6 px-3 bg-white text-sm font-medium text-gray-400">Full Name</label>
                                    <input
                                        type="text"
                                        className="w-full px-8 py-5 rounded-full border border-gray-200 focus:border-[#FF8A42] focus:outline-none transition-all text-gray-700"
                                    />
                                </div>
                                {/* Email Address */}
                                <div className="relative">
                                    <label className="absolute -top-3 left-6 px-3 bg-white text-sm font-medium text-gray-400">Email Address</label>
                                    <input
                                        type="email"
                                        className="w-full px-8 py-5 rounded-full border border-gray-200 focus:border-[#FF8A42] focus:outline-none transition-all text-gray-700"
                                    />
                                </div>
                                {/* Phone */}
                                <div className="relative">
                                    <label className="absolute -top-3 left-6 px-3 bg-white text-sm font-medium text-gray-400">Phone</label>
                                    <input
                                        type="text"
                                        className="w-full px-8 py-5 rounded-full border border-gray-200 focus:border-[#FF8A42] focus:outline-none transition-all text-gray-700"
                                    />
                                </div>
                                {/* Subject */}
                                <div className="relative">
                                    <label className="absolute -top-3 left-6 px-3 bg-white text-sm font-medium text-gray-400">Subject</label>
                                    <input
                                        type="text"
                                        className="w-full px-8 py-5 rounded-full border border-gray-200 focus:border-[#FF8A42] focus:outline-none transition-all text-gray-700"
                                    />
                                </div>
                            </div>

                            {/* Your Message */}
                            <div className="relative">
                                <label className="absolute -top-3 left-6 px-3 bg-white text-sm font-medium text-[#FF8A42]">Your Message</label>
                                <textarea
                                    rows={5}
                                    className="w-full px-8 py-6 rounded-[35px] border-2 border-[#FF8A42] focus:outline-none transition-all text-gray-700 resize-none"
                                ></textarea>
                            </div>

                            <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-2">
                                <label className="flex items-center gap-3 cursor-pointer group">
                                    <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-blue-500 focus:ring-blue-500" defaultChecked />
                                    <span className="text-sm text-gray-500 font-medium">Also subscribe our newsletter</span>
                                </label>

                                <button type="submit" className="px-16 py-4 bg-[#FF8A42] text-white font-bold rounded-full shadow-2xl shadow-orange-500/40 hover:bg-[#e67a3a] transition-all transform hover:-translate-y-1 text-lg">
                                    Send
                                </button>
                            </div>
                        </form>
                    </div>

                    {/* Right: Contact Detail Card */}
                    <div className="lg:col-span-5 lg:pl-10">
                        <div className="bg-white p-12 rounded-[20px] border border-gray-200 flex flex-col items-start gap-10">
                            <div className="w-16 h-16 rounded-full border border-gray-200 flex items-center justify-center text-gray-700">
                                <Info size={24} />
                            </div>

                            <div className="space-y-10">
                                <div>
                                    <h4 className="text-2xl font-bold text-gray-900 mb-4">Contact Detail</h4>
                                    <p className="text-gray-500 text-base leading-relaxed max-w-[280px]">
                                        203, Envato Labs. Alis Steet Melbourne, Australia.
                                    </p>
                                </div>

                                <div>
                                    <p className="text-gray-500 text-sm font-medium mb-1">Call us:</p>
                                    <p className="text-gray-900 text-xl font-bold">+123 4567 8910</p>
                                </div>

                                <div>
                                    <p className="text-gray-500 text-sm font-medium mb-1">Mail us:</p>
                                    <p className="text-gray-900 text-xl font-bold">example@mail.com</p>
                                </div>
                            </div>

                            <div className="flex gap-4 pt-6 border-t border-gray-50 w-full justify-start">
                                {[Facebook, Twitter, Instagram, Mail].map((Icon, idx) => (
                                    <a
                                        key={idx}
                                        href="#"
                                        className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:bg-[#FF8A42] hover:text-white hover:border-[#FF8A42] transition-all shadow-sm"
                                    >
                                        <Icon size={20} />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ContactPage;
