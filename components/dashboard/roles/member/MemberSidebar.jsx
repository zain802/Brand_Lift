"use client";
import React from "react";
import { LogOut, Menu } from "lucide-react";
import { useDispatch } from "react-redux";
import { logout } from "@/Redux/Slices/AuthSlice";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const MemberSidebar = ({ isOpen, setIsOpen }) => {
    const dispatch = useDispatch();
    const router = useRouter();
    const handleLogout = () => {
        dispatch(logout());
        toast.info("Logged out successfully");
        router.push("/login");
    };
    return (
        <aside className={`fixed inset-y-0 left-0 z-50 w-64 bg-blue-950 text-white transform transition-transform duration-300 lg:static lg:translate-x-0 ${isOpen ? "translate-x-0" : "-translate-x-full"} flex flex-col`}>
            <div className="p-8"><h2 className="text-xl font-black uppercase">Member</h2></div>
            <div className="flex-1 p-8 text-blue-300 font-bold uppercase text-[10px]">Portal Menu</div>
            <button onClick={handleLogout} className="p-8 flex items-center gap-4 text-red-400 font-bold"><LogOut size={20} /><span>Logout</span></button>
        </aside>
    );
};
export default MemberSidebar;
