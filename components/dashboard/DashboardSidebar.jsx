"use client";
import React from "react";
import {
    LayoutDashboard,
    Megaphone,
    User,
    Menu,
    Briefcase,
    PlusCircle,
    PlayCircle,
    FileText,
    LogOut
} from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Sidebar = ({ isOpen, setIsOpen }) => {
    const pathname = usePathname();

    const menuItems = [
        { name: "Dashboard", icon: <LayoutDashboard size={20} />, href: "/dashboard" },
        { name: "Work Space", icon: <Briefcase size={20} />, href: "/dashboard/workspace" },
        { name: "Brand", icon: <Briefcase size={20} />, href: "/dashboard/brand" },
        { name: "Create Ads", icon: <PlusCircle size={20} />, href: "/dashboard/create-ads" },
        { name: "Profile", icon: <User size={20} />, href: "/dashboard/profile" },
    ];

    return (
        <aside className={`
            fixed inset-y-0 left-0 z-50 w-64 bg-gradient-to-b from-[#2e1065] via-[#4c1d95] to-[#7c3aed] text-white transform transition-transform duration-300 ease-in-out lg:static lg:translate-x-0
            ${isOpen ? "translate-x-0" : "-translate-x-full"}
            flex flex-col shadow-2xl lg:shadow-none
        `}>
            {/* Sidebar Header */}
            <div className="p-8 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 border-2 border-white rounded-lg flex items-center justify-center">
                        <span className="text-xl font-bold">A</span>
                    </div>
                    <span className="text-xl font-bold tracking-tight">Brand Lift</span>
                </div>
                <button
                    onClick={() => setIsOpen(false)}
                    className="lg:hidden p-2 text-white/70 hover:text-white transition-colors"
                >
                    <Menu size={24} />
                </button>
            </div>

            {/* Navigation Menu */}
            <nav className="flex-1 px-4 py-8 space-y-4">
                {menuItems.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                        <Link
                            key={item.name}
                            href={item.href}
                            onClick={() => setIsOpen(false)}
                            className={`flex items-center gap-4 px-4 py-2 group transition-all duration-300 ${isActive ? "text-white" : "text-white/60 hover:text-white"}`}
                        >
                            {/* Icon Circle */}
                            <div className={`
                                w-11 h-11 rounded-full flex items-center justify-center border-2 transition-all duration-300
                                ${isActive ? "bg-white/20 border-white shadow-lg" : "border-white/30 group-hover:border-white/60 group-hover:bg-white/5"}
                            `}>
                                {item.icon}
                            </div>
                            <span className={`text-lg font-medium tracking-wide ${isActive ? "font-bold" : ""}`}>
                                {item.name}
                            </span>
                        </Link>
                    );
                })}

                {/* Logout Button - Moved below Profile */}
                <button
                    onClick={() => console.log("Logging out...")}
                    className="w-full flex items-center gap-4 px-4 py-2 text-white/60 hover:text-white group transition-all duration-300"
                >
                    <div className="w-11 h-11 rounded-full flex items-center justify-center border-2 border-white/30 group-hover:border-white/60 group-hover:bg-red-500/20 transition-all duration-300">
                        <LogOut size={20} className="group-hover:text-red-400 transition-colors" />
                    </div>
                    <span className="text-lg font-medium tracking-wide">Logout</span>
                </button>
            </nav>
        </aside>
    );
};

export default Sidebar;
