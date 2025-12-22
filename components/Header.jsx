"use client";
import { useState } from "react";
import Link from "next/link";

const Header = () => {
    const [open, setOpen] = useState(false);
    const [pagesOpen, setPagesOpen] = useState(false);

    const pages = [
        { name: "Services", href: "/services" },
        { name: "Pricing", href: "/pricing" },
        { name: "FAQs", href: "/faqs" },
    ];

    return (
        <header className="sticky top-0 z-50 bg-[#4c1d95]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">

                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 text-white">
                        <div className="w-9 h-9 border-2 border-white rounded-lg flex items-center justify-center">
                            <span className="text-xl font-bold">◻</span>
                        </div>
                        <span className="text-xl font-semibold">Cubart</span>
                    </Link>

                    {/* Desktop Menu */}
                    <nav className="hidden md:flex items-center gap-8">
                        <Link href="/" className="text-[#FF8A42] font-medium">Home</Link>

                        {/* Dropdown for Pages */}
                        <div
                            className="relative group py-4"
                            onMouseEnter={() => setPagesOpen(true)}
                            onMouseLeave={() => setPagesOpen(false)}
                        >
                            <button className="text-white/90 hover:text-[#FF8A42] transition flex items-center gap-1">
                                Pages
                                <span className={`transition-transform duration-300 ${pagesOpen ? 'rotate-180' : ''}`}>▼</span>
                            </button>

                            {/* Dropdown Menu */}
                            <div className={`absolute top-full left-0 w-48 bg-white rounded-xl shadow-xl py-2 transition-all duration-300 
                                ${pagesOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}>
                                {pages.map((link) => (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        className="block px-4 py-2 text-[#4c1d95] hover:bg-[#FF8A42]/10 hover:text-[#FF8A42] transition"
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        <Link href="/about" className="text-white/90 hover:text-[#FF8A42] transition">About</Link>
                        <a href="#" className="text-white/90 hover:text-[#FF8A42] transition">Blog</a>
                        <Link href="/contact" className="text-white/90 hover:text-[#FF8A42] transition">Contact</Link>
                    </nav>

                    {/* Desktop Button */}
                    <div className="hidden md:block">
                        <Link href="/signup">
                            <button className="px-6 py-2 border border-white text-white rounded-full
                  hover:bg-[#FF8A42] hover:border-[#FF8A42] transition">
                                Sign Up
                            </button>
                        </Link>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        className="md:hidden text-white text-2xl"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? "✕" : "☰"}
                    </button>
                </div>
            </div>

            {/* Mobile Menu (Smooth Slide Down) */}
            <div
                className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out
        ${open ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"}`}
            >
                <div className="bg-[#4a1fb8] text-white flex flex-col items-center
          justify-center gap-6 py-8 text-center">

                    <Link href="/" className="text-[#FF8A42] text-lg font-medium" onClick={() => setOpen(false)}>Home</Link>

                    <div className="flex flex-col gap-3">
                        <span className="text-white/50 text-sm uppercase tracking-widest">Pages</span>
                        {pages.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-lg hover:text-[#FF8A42] transition"
                                onClick={() => setOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    <Link href="/about" className="text-lg hover:text-[#FF8A42] transition" onClick={() => setOpen(false)}>About</Link>
                    <a href="#" className="text-lg hover:text-[#FF8A42] transition">Blog</a>
                    <Link href="/contact" className="text-lg hover:text-[#FF8A42] transition" onClick={() => setOpen(false)}>Contact</Link>

                    <Link href="/signup" onClick={() => setOpen(false)}>
                        <button className="mt-4 px-8 py-2.5 border border-white rounded-full
                hover:bg-[#FF8A42] hover:border-[#FF8A42] transition">
                            Sign Up
                        </button>
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Header;
