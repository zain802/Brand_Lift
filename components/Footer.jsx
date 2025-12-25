"use client";
import React from "react";
import Link from "next/link";
import { Box, Facebook, Twitter, Instagram } from "lucide-react"; // Using Instagram as Pinterest alternative or generic

const Footer = () => {
    return (
        <footer className="bg-gradient-to-br from-[#2e1065] via-[#4c1d95] to-[#7c3aed] text-white pt-24 pb-10 rounded-tl-[100px] mt-24 relative overflow-hidden font-poppins">

            {/* Background Graphic overlay (optional, for the 'curve' effect inside if needed, but main shape is rounded-tl) */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-white/5 rounded-full blur-[80px] translate-y-1/3 -translate-x-1/3 pointer-events-none"></div>


            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                    {/* Brand Column */}
                    <div>
                        <div className="flex items-center gap-2 mb-6">
                            <Box size={32} className="text-white fill-white/20" />
                            <span className="text-2xl font-bold">Branding Ups</span>
                        </div>
                        <p className="text-white/70 leading-relaxed mb-8 text-sm">
                            The smartest way for local businesses to advertise online. Simple, automated, and effective.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#FF8A42] hover:text-white hover:border-[#FF8A42] transition-all">
                                <Facebook size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#FF8A42] hover:text-white hover:border-[#FF8A42] transition-all">
                                <Twitter size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#FF8A42] hover:text-white hover:border-[#FF8A42] transition-all">
                                <Instagram size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Company */}
                    <div>
                        <h3 className="text-lg font-bold mb-8">Company</h3>
                        <ul className="space-y-4 text-sm text-white/80">
                            <li><Link href="/about" className="hover:text-[#FF8A42] hover:underline transition-all">About Us</Link></li>
                            <li><Link href="/services" className="hover:text-[#FF8A42] hover:underline transition-all">Services</Link></li>
                            <li><Link href="/pricing" className="hover:text-[#FF8A42] hover:underline transition-all">Pricing</Link></li>
                            <li><Link href="/contact" className="hover:text-[#FF8A42] hover:underline transition-all">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h3 className="text-lg font-bold mb-8">Resources</h3>
                        <ul className="space-y-4 text-sm text-white/80">
                            <li><Link href="/faqs" className="hover:text-[#FF8A42] hover:underline transition-all">FAQs</Link></li>
                            <li><Link href="#" className="hover:text-[#FF8A42] hover:underline transition-all">Blog</Link></li>
                            <li><Link href="#" className="hover:text-[#FF8A42] hover:underline transition-all">Support Center</Link></li>
                            <li><Link href="#" className="hover:text-[#FF8A42] hover:underline transition-all">Success Stories</Link></li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h3 className="text-lg font-bold mb-8">Legal</h3>
                        <ul className="space-y-4 text-sm text-white/80">
                            <li><Link href="/privacy" className="hover:text-[#FF8A42] hover:underline transition-all">Privacy Policy</Link></li>
                            <li><Link href="/terms" className="hover:text-[#FF8A42] hover:underline transition-all">Terms of Service</Link></li>
                            <li><Link href="/cookies" className="hover:text-[#FF8A42] hover:underline transition-all">Cookie Policy</Link></li>
                        </ul>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/60">
                    <div className="text-center md:text-left">
                        Copyright © 2025 Branding Ups. All rights reserved.
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
