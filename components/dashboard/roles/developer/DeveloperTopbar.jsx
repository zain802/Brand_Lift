"use client";
import React, { useState } from "react";
import { Menu as MenuIcon, LogOut, ChevronDown, Terminal } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "@/Redux/Slices/AuthSlice";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { decryptData } from "@/utils/encrypt";

const DeveloperTopbar = ({ onMenuClick }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dispatch = useDispatch();
    const router = useRouter();
    const encryptedUser = useSelector(selectUser);

    const userData = encryptedUser ? decryptData(encryptedUser) : null;
    const userName = userData?.full_name || userData?.data?.user?.full_name || "User";
    const userRole = userData?.user_type || userData?.data?.user?.user_type || "Developer";

    const handleLogout = () => {
        dispatch(logout());
        toast.info("Logged out successfully");
        router.push("/login");
    };

    return (
        <header className="h-16 bg-white border-b border-gray-100 px-4 md:px-8 flex items-center justify-between gap-4 sticky top-0 z-40">
            <div className="flex items-center gap-3 min-w-0">
                <button
                    onClick={onMenuClick}
                    className="lg:hidden p-2 text-gray-500 hover:bg-gray-100 rounded-xl transition-colors shrink-0"
                >
                    <MenuIcon size={24} />
                </button>
                <h1 className="text-base md:text-xl lg:text-2xl font-bold text-gray-800 truncate uppercase tracking-tighter">
                    Branding <span className="text-emerald-600">Ups</span>
                    <span className="hidden sm:inline-block mx-3 text-gray-200">|</span>
                    <span className="text-sm font-black text-gray-400 tracking-[0.2em]">{userRole.replace('_', ' ')} Console</span>
                </h1>
            </div>

            <div className="flex items-center gap-2 md:gap-6">
                <div className="hidden lg:flex items-center gap-2 px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full text-[10px] font-black uppercase tracking-widest border border-emerald-100">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
                    System Online
                </div>

                <button
                    onClick={handleLogout}
                    className="hidden md:flex items-center gap-2 px-4 py-2 text-xs font-black uppercase tracking-widest text-red-500 hover:bg-red-50 rounded-xl transition-all border border-transparent hover:border-red-100"
                >
                    <LogOut size={16} />
                    <span>Terminate</span>
                </button>

                <div
                    className="relative flex items-center gap-2 group"
                    onMouseEnter={() => setIsDropdownOpen(true)}
                    onMouseLeave={() => setIsDropdownOpen(false)}
                >
                    <div className="flex items-center gap-3 cursor-pointer p-1 rounded-full hover:bg-gray-50 transition-colors">
                        <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white shadow-md shrink-0 transition-transform group-hover:scale-105 bg-gray-100">
                            <img
                                src="https://randomuser.me/api/portraits/men/86.jpg"
                                alt="Profile"
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                    e.target.src = "https://ui-avatars.com/api/?name=" + userName + "&background=059669&color=fff";
                                }}
                            />
                        </div>
                        <ChevronDown size={14} className={`text-gray-400 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                    </div>

                    {isDropdownOpen && (
                        <div className="absolute top-full right-0 mt-1 w-56 bg-white rounded-2xl shadow-2xl border border-gray-50 py-2 animate-in fade-in zoom-in-95 duration-200 z-50">
                            <div className="px-5 py-4 border-b border-gray-50 mb-1">
                                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1 leading-none">{userRole.replace('_', ' ')}</p>
                                <p className="text-sm font-bold text-gray-800 truncate leading-tight">{userName}</p>
                            </div>
                            <button className="w-full flex items-center gap-3 px-5 py-3 text-sm font-bold text-gray-600 hover:bg-emerald-50 hover:text-emerald-600 transition-colors">
                                <Terminal size={18} />
                                API Settings
                            </button>
                            <button
                                onClick={handleLogout}
                                className="w-full flex items-center gap-3 px-5 py-3 text-sm font-bold text-red-500 hover:bg-red-50 transition-colors mt-1"
                            >
                                <LogOut size={18} />
                                Logout
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
};

export default DeveloperTopbar;
