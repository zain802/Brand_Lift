"use client";
import React from "react";
import { LogOut, Menu } from "lucide-react";
import { useDispatch } from "react-redux";
import { logout } from "@/Redux/Slices/AuthSlice";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const CreatorSidebar = ({ isOpen, setIsOpen, role = "Creator" }) => {
    const dispatch = useDispatch();
    const router = useRouter();

    const handleLogout = () => {
        dispatch(logout());
        toast.info("Logged out successfully");
        router.push("/login");
    };

    return (
        <aside className={`fixed inset-y-0 left-0 z-50 w-64 bg-slate-900 text-white transform transition-transform duration-300 ease-in-out lg:static lg:translate-x-0 ${isOpen ? "translate-x-0" : "-translate-x-full"} flex flex-col`}>
            <div className="p-8 flex items-center justify-between">
                <h2 className="text-xl font-black uppercase tracking-tighter">{role} Sidebar</h2>
                <button onClick={() => setIsOpen(false)} className="lg:hidden p-2 text-white/70 hover:text-white transition-colors">
                    <Menu size={24} />
                </button>
            </div>
            <div className="flex-1 px-6 py-10">
                <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">Navigation Placeholder</p>
                <div className="mt-4 space-y-4">
                    <div className="h-10 bg-slate-800 rounded-xl animate-pulse"></div>
                    <div className="h-10 bg-slate-800 rounded-xl animate-pulse"></div>
                </div>
            </div>
            <button onClick={handleLogout} className="p-8 flex items-center gap-4 text-red-400 hover:text-red-300 font-bold transition-colors">
                <LogOut size={20} />
                <span>Sign Out</span>
            </button>
        </aside>
    );
};

export default CreatorSidebar;
