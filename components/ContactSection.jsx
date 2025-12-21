"use client";
import React from "react";
import Image from "next/image";

const ContactSection = () => {
    return (
        <section className="py-24 bg-white dark:bg-zinc-900">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left Side - Monitor Image */}
                    <div className="w-full flex justify-center lg:justify-start">
                        {/* Placeholder for Monitor Image */}
                        <div className="relative w-full max-w-lg">
                            {/* You can replace this src with your specific 'monitor' image */}
                            <Image
                                src="/images/png/get.png" // Using chart1 as a placeholder for now
                                alt="Project Overview Dashboard"
                                width={600}
                                height={400}
                                className="w-full h-auto object-contain drop-shadow-2xl"
                            />
                        </div>
                    </div>

                    {/* Right Side - Form */}
                    <div className="w-full max-w-lg mx-auto lg:mx-0">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] dark:text-white mb-4 font-poppins">
                            Get in Touch
                        </h2>
                        <p className="text-gray-500 dark:text-gray-400 mb-10 text-sm md:text-base leading-relaxed">
                            Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod on tempor incididunt ut labore et dolore magna aliqua.
                        </p>

                        <form className="space-y-8">

                            {/* Full Name */}
                            <div className="relative">
                                <input
                                    type="text"
                                    id="fullname"
                                    className="peer w-full h-14 rounded-full border border-gray-300 dark:border-zinc-700 px-6 pt-2 outline-none focus:border-[#FF8A42] transition-colors bg-transparent text-[#1A1A1A] dark:text-white"
                                    placeholder=" "
                                />
                                <label
                                    htmlFor="fullname"
                                    className="absolute left-6 -top-2.5 bg-white dark:bg-zinc-900 px-2 text-sm text-gray-500 peer-focus:text-[#FF8A42] transition-colors cursor-text pointer-events-none"
                                >
                                    Full Name
                                </label>
                            </div>

                            {/* Email Address */}
                            <div className="relative">
                                <input
                                    type="email"
                                    id="email"
                                    className="peer w-full h-14 rounded-full border border-gray-300 dark:border-zinc-700 px-6 pt-2 outline-none focus:border-[#FF8A42] transition-colors bg-transparent text-[#1A1A1A] dark:text-white"
                                    placeholder=" "
                                />
                                <label
                                    htmlFor="email"
                                    className="absolute left-6 -top-2.5 bg-white dark:bg-zinc-900 px-2 text-sm text-gray-500 peer-focus:text-[#FF8A42] transition-colors cursor-text pointer-events-none"
                                >
                                    Email Address
                                </label>
                            </div>

                            {/* Your Message */}
                            <div className="relative">
                                <textarea
                                    id="message"
                                    className="peer w-full h-40 rounded-3xl border border-gray-300 dark:border-zinc-700 px-6 py-4 outline-none focus:border-[#FF8A42] transition-colors bg-transparent text-[#1A1A1A] dark:text-white resize-none"
                                    placeholder=" "
                                ></textarea>
                                <label
                                    htmlFor="message"
                                    className="absolute left-6 -top-2.5 bg-white dark:bg-zinc-900 px-2 text-sm text-gray-500 peer-focus:text-[#FF8A42] transition-colors cursor-text pointer-events-none"
                                >
                                    Your Message
                                </label>
                            </div>

                            <div className="flex items-center justify-between pt-2">
                                <label className="flex items-center gap-3 cursor-pointer group">
                                    <div className="relative flex items-center">
                                        <input type="checkbox" className="peer sr-only" />
                                        <div className="w-5 h-5 border-2 border-gray-300 rounded transition-colors peer-checked:bg-[#5b2ccf] peer-checked:border-[#5b2ccf]"></div>
                                        <svg
                                            className="absolute w-3.5 h-3.5 text-white left-0.5 top-0.5 opacity-0 peer-checked:opacity-100 transition-opacity pointer-events-none"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="4"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                    </div>
                                    <span className="text-gray-500 dark:text-gray-400 text-sm group-hover:text-[#1A1A1A] dark:group-hover:text-white transition-colors">
                                        Also subscribe our newsletter
                                    </span>
                                </label>

                                <button type="button" className="px-10 py-3.5 bg-[#FF8A42] hover:bg-[#ff7b29] text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                                    Send
                                </button>
                            </div>

                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ContactSection;
