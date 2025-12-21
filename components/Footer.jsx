"use client";
import React from "react";
import Link from "next/link";
import { Box, Facebook, Twitter, Instagram } from "lucide-react"; // Using Instagram as Pinterest alternative or generic

const Footer = () => {
    return (
        <footer className="bg-[#5b2ccf] text-white pt-24 pb-10 rounded-tl-[100px] mt-24 relative overflow-hidden font-poppins">

            {/* Background Graphic overlay (optional, for the 'curve' effect inside if needed, but main shape is rounded-tl) */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-white/5 rounded-full blur-[80px] translate-y-1/3 -translate-x-1/3 pointer-events-none"></div>


            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                    {/* Brand Column */}
                    <div>
                        <div className="flex items-center gap-2 mb-6">
                            <Box size={32} className="text-white fill-white/20" />
                            <span className="text-2xl font-bold">Cubart</span>
                        </div>
                        <p className="text-white/70 leading-relaxed mb-8 text-sm">
                            Lorem ipsum dolor sit amet conse ctetur adipiscing elit sed do eiusmod on tempor incididunt ut labore et dolore magna aliqua of the loksta.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-[#5b2ccf] transition-all">
                                <Facebook size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-[#5b2ccf] transition-all">
                                <Twitter size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-[#5b2ccf] transition-all">
                                <Instagram size={18} />
                            </a>
                        </div>
                    </div>

                    {/* About Company */}
                    <div>
                        <h3 className="text-lg font-bold mb-8">About Company</h3>
                        <ul className="space-y-4 text-sm text-white/80">
                            <li><Link href="#" className="hover:text-white hover:underline transition-all">SaaSWeb Online</Link></li>
                            <li><Link href="#" className="hover:text-white hover:underline transition-all">Our Leadership</Link></li>
                            <li><Link href="#" className="hover:text-white hover:underline transition-all">Carrers</Link></li>
                            <li><Link href="#" className="hover:text-white hover:underline transition-all">What We Do</Link></li>
                            <li><Link href="#" className="hover:text-white hover:underline transition-all">Our Strategies</Link></li>
                            <li><Link href="#" className="hover:text-white hover:underline transition-all">Product Tour</Link></li>
                        </ul>
                    </div>

                    {/* Our Services */}
                    <div>
                        <h3 className="text-lg font-bold mb-8">Our Services</h3>
                        <ul className="space-y-4 text-sm text-white/80">
                            <li><Link href="#" className="hover:text-white hover:underline transition-all">Sales Analytics</Link></li>
                            <li><Link href="#" className="hover:text-white hover:underline transition-all">Digital Marketing</Link></li>
                            <li><Link href="#" className="hover:text-white hover:underline transition-all">Financial Help</Link></li>
                            <li><Link href="#" className="hover:text-white hover:underline transition-all">Helpdesk Analytics</Link></li>
                            <li><Link href="#" className="hover:text-white hover:underline transition-all">Embedded Support</Link></li>
                            <li><Link href="#" className="hover:text-white hover:underline transition-all">Reporting Software</Link></li>
                        </ul>
                    </div>

                    {/* Access Us */}
                    <div>
                        <h3 className="text-lg font-bold mb-8">Access Us</h3>
                        <ul className="space-y-4 text-sm text-white/80">
                            <li><Link href="#" className="hover:text-white hover:underline transition-all">About Us</Link></li>
                            <li><Link href="#" className="hover:text-white hover:underline transition-all">Payment</Link></li>
                            <li><Link href="#" className="hover:text-white hover:underline transition-all">Send Money</Link></li>
                            <li><Link href="#" className="hover:text-white hover:underline transition-all">Receive Money</Link></li>
                            <li><Link href="#" className="hover:text-white hover:underline transition-all">Fees</Link></li>
                            <li><Link href="#" className="hover:text-white hover:underline transition-all">Services</Link></li>
                        </ul>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/60">
                    <div className="flex gap-8 font-medium">
                        <Link href="#" className="hover:text-white transition-colors">Terms and Conditions</Link>
                        <Link href="#" className="hover:text-white transition-colors">Privacy & Policy</Link>
                        <Link href="#" className="hover:text-white transition-colors">Legal</Link>
                        <Link href="#" className="hover:text-white transition-colors">Notice</Link>
                    </div>
                    <div className="text-center md:text-right">
                        Copyright © template_path 2019
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
