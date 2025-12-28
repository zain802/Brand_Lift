"use client";
import React from "react";
import {
    LayoutDashboard, Megaphone, User, Menu, Briefcase,
    PlusCircle, PlayCircle, Store, FileText, LogOut
} from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "@/Redux/Slices/AuthSlice";
import { decryptData } from "@/utils/encrypt";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const MerchantSidebar = ({ isOpen, setIsOpen }) => {
    const pathname = usePathname();
    const dispatch = useDispatch();
    const router = useRouter();
    const encryptedUser = useSelector(selectUser);

    const userData = encryptedUser ? decryptData(encryptedUser) : null;
    const userRole = userData?.user_type || userData?.data?.user?.user_type || "Merchant";

    const handleLogout = () => {
        dispatch(logout());
        toast.info("Logged out successfully");
        router.push("/login");
    };

    const menuItems = [
        { name: "Dashboard", icon: <LayoutDashboard size={20} />, href: "/dashboard" },
        { name: "Brand", icon: <Briefcase size={20} />, href: "/dashboard/brand" },
        { name: "Shop", icon: <Store size={20} />, href: "/dashboard/shops" },
        { name: "Create Ads", icon: <PlusCircle size={20} />, href: "/dashboard/create-ads" },
        { name: "Profile", icon: <User size={20} />, href: "/dashboard/profile" },
    ];

    return (
        <aside className={`fixed inset-y-0 left-0 z-50 w-64 bg-gradient-to-b from-[#2e1065] via-[#4c1d95] to-[#7c3aed] text-white transform transition-transform duration-300 ease-in-out lg:static lg:translate-x-0 ${isOpen ? "translate-x-0" : "-translate-x-full"} flex flex-col shadow-2xl lg:shadow-none`}>
            <div className="p-8 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 border-2 border-white rounded-lg flex items-center justify-center">
                        <span className="text-xl font-bold">M</span>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-xl font-bold tracking-tight">Merchant Portal</span>
                        <span className="text-[10px] uppercase tracking-[0.2em] text-white/60 font-black">Branding Ups</span>
                    </div>
                </div>
                <button onClick={() => setIsOpen(false)} className="lg:hidden p-2 text-white/70 hover:text-white transition-colors">
                    <Menu size={24} />
                </button>
            </div>

            <nav className="flex-1 px-4 py-8 space-y-4">
                {menuItems.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                        <Link key={item.name} href={item.href} onClick={() => setIsOpen(false)} className={`flex items-center gap-4 px-4 py-2 group transition-all duration-300 ${isActive ? "text-white" : "text-white/60 hover:text-white"}`}>
                            <div className={`w-11 h-11 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${isActive ? "bg-white/20 border-white shadow-lg" : "border-white/30 group-hover:border-white/60 group-hover:bg-white/5"}`}>
                                {item.icon}
                            </div>
                            <span className={`text-lg font-medium tracking-wide ${isActive ? "font-bold" : ""}`}>{item.name}</span>
                        </Link>
                    );
                })}

                <button onClick={handleLogout} className="w-full flex items-center gap-4 px-4 py-2 text-white/60 hover:text-white group transition-all duration-300 mt-auto">
                    <div className="w-11 h-11 rounded-full flex items-center justify-center border-2 border-white/30 group-hover:border-white/60 group-hover:bg-red-500/20 transition-all duration-300">
                        <LogOut size={20} className="group-hover:text-red-400 transition-colors" />
                    </div>
                    <span className="text-lg font-medium tracking-wide">Logout</span>
                </button>
            </nav>
        </aside>
    );
};

export default MerchantSidebar;
