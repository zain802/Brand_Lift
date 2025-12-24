"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Bell, MapPin, User, Menu as MenuIcon, LogOut, ChevronDown, UserCircle } from "lucide-react";

const Topbar = ({ onMenuClick }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    return (
        <header className="h-16 bg-white border-b border-gray-100 px-4 md:px-8 flex items-center justify-between gap-4 sticky top-0 z-40">
            <div className="flex items-center gap-3 min-w-0">
                <button
                    onClick={onMenuClick}
                    className="lg:hidden p-2 text-gray-500 hover:bg-gray-100 rounded-xl transition-colors shrink-0"
                >
                    <MenuIcon size={24} />
                </button>
                <h1 className="text-base md:text-lg font-bold text-gray-600 truncate">
                    The Daily Grind Cafe
                </h1>
            </div>

            <div className="flex items-center gap-4 md:gap-8 shrink-0">
                <button className="text-gray-500 hover:text-gray-700 transition-colors p-1">
                    <Bell size={22} className="fill-current" />
                </button>

                <div className="relative">
                    <button className="text-red-500 hover:text-red-600 transition-colors p-1">
                        <MapPin size={22} className="fill-current" />
                    </button>
                    {/* Notification dot shown in the design */}
                    <span className="absolute top-0 right-0 w-4 h-4 bg-white rounded-full flex items-center justify-center">
                        <span className="w-2.5 h-2.5 bg-red-500 rounded-full border border-white"></span>
                    </span>
                </div>

                <div
                    className="relative flex items-center gap-2 pl-2 md:pl-4 group"
                    onMouseEnter={() => setIsDropdownOpen(true)}
                    onMouseLeave={() => setIsDropdownOpen(false)}
                >
                    <div className="flex items-center gap-3 cursor-pointer p-1 rounded-full hover:bg-gray-50 transition-colors">
                        <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white shadow-md shrink-0 transition-transform group-hover:scale-105">
                            <Image
                                src="https://randomuser.me/api/portraits/men/32.jpg"
                                alt="User"
                                width={40}
                                height={40}
                                className="object-cover"
                            />
                        </div>
                        <ChevronDown size={14} className={`text-gray-400 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                    </div>

                    {/* Profile Dropdown */}
                    {isDropdownOpen && (
                        <div className="absolute top-full right-0 mt-1 w-48 bg-white rounded-2xl shadow-2xl border border-gray-50 py-2 animate-in fade-in zoom-in-95 duration-200 z-50">
                            <div className="px-4 py-3 border-b border-gray-50 mb-1">
                                <p className="text-xs font-black text-gray-400 uppercase tracking-widest mb-0.5">Account</p>
                                <p className="text-sm font-bold text-gray-800 truncate">Alex Jackson</p>
                            </div>

                            <button className="w-full flex items-center gap-3 px-4 py-2.5 text-sm font-bold text-gray-600 hover:bg-purple-50 hover:text-[#7c3aed] transition-colors">
                                <UserCircle size={18} />
                                Profile Details
                            </button>

                            <button className="w-full flex items-center gap-3 px-4 py-2.5 text-sm font-bold text-red-500 hover:bg-red-50 transition-colors mt-1">
                                <LogOut size={18} />
                                Sign Out
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Topbar;
