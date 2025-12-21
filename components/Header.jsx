"use client";
import { useState } from "react";
import Link from "next/link";

const Header = () => {
    const [open, setOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 bg-[#4c1d95]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">

                    {/* Logo */}
                    <div className="flex items-center gap-2 text-white">
                        <div className="w-9 h-9 border-2 border-white rounded-lg flex items-center justify-center">
                            <span className="text-xl font-bold">◻</span>
                        </div>
                        <span className="text-xl font-semibold">Cubart</span>
                    </div>

                    {/* Desktop Menu */}
                    <nav className="hidden md:flex items-center gap-8">
                        <a href="#" className="text-[#FF8A42] font-medium">Home</a>
                        <a href="#" className="text-white/90 hover:text-[#FF8A42] transition">Pages</a>
                        <a href="#" className="text-white/90 hover:text-[#FF8A42] transition">Projects</a>
                        <a href="#" className="text-white/90 hover:text-[#FF8A42] transition">Blog</a>
                        <a href="#" className="text-white/90 hover:text-[#FF8A42] transition">Contact</a>
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
        ${open ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}
            >
                <div className="bg-[#4a1fb8] text-white flex flex-col items-center
          justify-center gap-6 py-8 text-center">

                    <a href="#" className="text-[#FF8A42] text-lg font-medium">Home</a>
                    <a href="#" className="text-lg hover:text-[#FF8A42] transition">Pages</a>
                    <a href="#" className="text-lg hover:text-[#FF8A42] transition">Projects</a>
                    <a href="#" className="text-lg hover:text-[#FF8A42] transition">Blog</a>
                    <a href="#" className="text-lg hover:text-[#FF8A42] transition">Contact</a>

                    <Link href="/signup">
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
