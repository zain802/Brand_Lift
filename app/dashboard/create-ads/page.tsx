"use client";
import React, { useState } from "react";
import {
    Plus, Search, Filter, Calendar, MapPin, Target, DollarSign,
    Image as ImageIcon, ChevronLeft, FileText, PlusCircle, Edit,
    Trash2, CheckCircle2, PlayCircle, Clock, ChevronRight,
    MoreHorizontal, ArrowLeft, ArrowRight
} from "lucide-react";
import Image from "next/image";
import AdForm from "@/components/dashboard/AdForm";

export default function CreateAdsPage() {
    const [showForm, setShowForm] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);

    // Mock data for the table - updated with new payload structure
    const ads = [
        {
            id: 1,
            title: "Summer Fashion New Collection 2025",
            description: "Get the best chic and editorial styles with up to 50% OFF.",
            location: "Faisalabad HQ",
            radius_km: 15,
            target_provinces: ["Punjab"],
            target_cities: ["Faisalabad"],
            target_age_groups: ["18-24",],
            target_gender: "All",
            target_interests: ["Lifestyle"],
            duration: "Weekly",
            start_date: "Dec 25, 2025",
            end_date: "Jan 01, 2026",
            price: 1500.00,
            status: "Running",
            image: "https://brand-lift-s3.s3.amazonaws.com/ads/fashion_01.jpg"
        },
        {
            id: 2,
            title: "Winter Comfort Brew 2025",
            description: "Cozy up with our premium artisan coffee blends.",
            location: "Lahore Central",
            radius_km: 10,
            target_provinces: ["Punjab"],
            target_cities: ["Lahore"],
            target_age_groups: ["35-44"],
            target_gender: "All",
            target_interests: ["Relaxation"],
            duration: "Monthly",
            start_date: "Dec 20, 2025",
            end_date: "Jan 20, 2026",
            price: 5000.00,
            status: "Pending",
            image: null
        },
    ];

    // Stats data
    const statsData = [
        { label: "Total Ads", value: "24", icon: <Target size={20} />, color: "#7c3aed", bg: "bg-purple-50", hoverBg: "hover:bg-[#7c3aed]" },
        { label: "Complete", value: "12", icon: <CheckCircle2 size={20} />, color: "#22c55e", bg: "bg-green-50", hoverBg: "hover:bg-[#22c55e]" },
        { label: "Running", value: "08", icon: <PlayCircle size={20} />, color: "#4c89ff", bg: "bg-blue-50", hoverBg: "hover:bg-[#4c89ff]" },
        { label: "Pending", value: "04", icon: <Clock size={20} />, color: "#f97316", bg: "bg-orange-50", hoverBg: "hover:bg-[#f97316]" },
    ];

    if (showForm) {
        return <AdForm onBack={() => setShowForm(false)} onSubmit={() => setShowForm(false)} />;
    }

    return (
        <div className="max-w-7xl mx-auto animate-in fade-in duration-500 font-poppins">
            {/* Header Section */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
                <div>
                    <h1 className="text-3xl md:text-4xl font-black text-gray-800 tracking-tight">Campaign Management</h1>
                    <p className="text-gray-500 mt-2 font-medium">Track and optimize your brand performance</p>
                </div>
                <button
                    onClick={() => setShowForm(true)}
                    className="flex items-center justify-center gap-2 px-8 py-4 bg-[#7c3aed] text-white font-bold rounded-full shadow-xl shadow-purple-100 hover:shadow-purple-200 transition-all transform hover:-translate-y-1 active:scale-95 whitespace-nowrap"
                >
                    <Plus size={20} />
                    Create New Ad
                </button>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
                {statsData.map((stat, index) => (
                    <div key={index} className={`bg-white p-6 rounded-[20px]  flex items-center gap-5 hover:shadow-md transition-all cursor-pointer group ${stat.hoverBg}`}>
                        <div className={`w-14 h-14 ${stat.bg} rounded-2xl flex items-center justify-center transition-all group-hover:bg-white group-hover:scale-110`} style={{ color: stat.color }}>
                            {stat.icon}
                        </div>
                        <div>
                            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest group-hover:text-white/80 transition-colors">{stat.label}</p>
                            <h4 className="text-2xl font-black text-gray-800 group-hover:text-white transition-colors">{stat.value}</h4>
                        </div>
                    </div>
                ))}
            </div>

            {/* Table Section */}
            <div className="bg-white rounded-[24px] overflow-hidden mb-10">
                <div className="p-8 border-b border-gray-50 flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <h3 className="text-2xl font-black text-gray-800">Active Campaigns</h3>
                    <div className="flex items-center gap-4">
                        <div className="relative">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                            <input type="text" placeholder="Search..." className="pl-12 pr-6 py-3.5 bg-gray-50 border border-transparent rounded-full focus:bg-white focus:border-purple-100 outline-none transition-all w-full md:w-72 text-sm font-medium" />
                        </div>
                        <button className="h-12 w-12 flex items-center justify-center bg-gray-50 rounded-full text-gray-500 hover:bg-purple-50 hover:text-[#7c3aed] transition-all">
                            <Filter size={20} />
                        </button>
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse min-w-[1500px]">
                        <thead>
                            <tr className="bg-gray-50/50">
                                <th className="px-8 py-6 text-xs font-black text-gray-400 uppercase tracking-widest">Image</th>
                                <th className="px-8 py-6 text-xs font-black text-gray-400 uppercase tracking-widest">Title</th>
                                <th className="px-8 py-6 text-xs font-black text-gray-400 uppercase tracking-widest">Description</th>
                                <th className="px-8 py-6 text-xs font-black text-gray-400 uppercase tracking-widest">Location</th>
                                <th className="px-8 py-6 text-xs font-black text-gray-400 uppercase tracking-widest"> Provinces</th>
                                <th className="px-8 py-6 text-xs font-black text-gray-400 uppercase tracking-widest">City</th>
                                <th className="px-8 py-6 text-xs font-black text-gray-400 uppercase tracking-widest">Gender</th>
                                <th className="px-8 py-6 text-xs font-black text-gray-400 uppercase tracking-widest">Radius</th>
                                <th className="px-8 py-6 text-xs font-black text-gray-400 uppercase tracking-widest">Interests</th>
                                <th className="px-8 py-6 text-xs font-black text-gray-400 uppercase tracking-widest">Ideal Age Range</th>
                                <th className="px-8 py-6 text-xs font-black text-gray-400 uppercase tracking-widest">Start Date</th>
                                <th className="px-8 py-6 text-xs font-black text-gray-400 uppercase tracking-widest">End Date</th>
                                <th className="px-8 py-6 text-xs font-black text-gray-400 uppercase tracking-widest text-center">Price</th>
                                <th className="px-8 py-6 text-xs font-black text-gray-400 uppercase tracking-widest text-center">Duration</th>
                                <th className="px-8 py-6 text-xs font-black text-gray-400 uppercase tracking-widest text-center">Status</th>
                                <th className="px-8 py-6 text-xs font-black text-gray-400 uppercase tracking-widest text-center">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                            {ads.map((ad) => (
                                <tr key={ad.id} className="hover:bg-gray-50/30 transition-colors group">
                                    <td className="px-8 py-7">
                                        <div className="w-14 h-14 rounded-2xl bg-purple-50 flex-shrink-0 flex items-center justify-center text-purple-600 font-bold overflow-hidden shadow-sm relative">
                                            {ad.image ? (
                                                <img src={ad.image} alt="" className="w-full h-full object-cover" />
                                            ) : (
                                                <ImageIcon size={24} className="opacity-30" />
                                            )}
                                        </div>
                                    </td>
                                    <td className="px-8 py-7">
                                        <p className="font-black text-gray-800 text-base group-hover:text-[#7c3aed] transition-colors whitespace-nowrap">{ad.title}</p>
                                    </td>
                                    <td className="px-8 py-7">
                                        <p className="text-sm text-gray-500 font-medium max-w-[200px] line-clamp-2">{ad.description}</p>
                                    </td>
                                    <td className="px-8 py-7">
                                        <div className="flex items-center gap-2 text-sm font-bold text-gray-700 whitespace-nowrap">
                                            <MapPin size={14} className="text-[#7c3aed]" />
                                            {ad.location}
                                        </div>
                                    </td>
                                    <td className="px-8 py-7">
                                        <div className="flex flex-wrap gap-2">
                                            {ad.target_provinces.map(p => (
                                                <span key={p} className="px-3 py-1.5 bg-blue-50 text-blue-600 text-[11px] font-black uppercase tracking-wider rounded-lg">
                                                    {p}
                                                </span>
                                            ))}
                                        </div>
                                    </td>
                                    <td className="px-8 py-7">
                                        <div className="flex flex-wrap gap-2 max-w-[200px]">
                                            {ad.target_cities.map(c => (
                                                <span key={c} className="px-3 py-1.5 bg-gray-50 text-gray-500 text-[11px] font-black uppercase tracking-wider rounded-lg border border-gray-100">
                                                    {c}
                                                </span>
                                            ))}
                                        </div>
                                    </td>
                                    <td className="px-8 py-7">
                                        <span className="text-sm font-bold text-gray-700 capitalize">{ad.target_gender}</span>
                                    </td>
                                    <td className="px-8 py-7 font-bold text-gray-700 text-sm">
                                        {ad.radius_km} km
                                    </td>
                                    <td className="px-8 py-7">
                                        <div className="flex flex-wrap gap-2 max-w-[200px]">
                                            {ad.target_interests.map(interest => (
                                                <span key={interest} className="px-3 py-1 bg-green-50 text-green-600 text-[10px] font-bold rounded-md">
                                                    {interest}
                                                </span>
                                            ))}
                                        </div>
                                    </td>
                                    <td className="px-8 py-7">
                                        <div className="flex flex-wrap gap-1.5">
                                            {ad.target_age_groups.map(age => (
                                                <span key={age} className="px-2 py-1 bg-purple-50 text-[#7c3aed] text-[10px] font-bold rounded-md">
                                                    {age}
                                                </span>
                                            ))}
                                        </div>
                                    </td>
                                    <td className="px-8 py-7 text-sm font-bold text-gray-600 whitespace-nowrap">
                                        {ad.start_date}
                                    </td>
                                    <td className="px-8 py-7 text-sm font-bold text-gray-600 whitespace-nowrap">
                                        {ad.end_date}
                                    </td>
                                    <td className="px-8 py-7 text-center">
                                        <span className="text-sm font-black text-[#22c55e] whitespace-nowrap">PKR {ad.price.toLocaleString()}</span>
                                    </td>
                                    <td className="px-8 py-7 text-center">
                                        <span className="text-sm font-bold text-gray-600">{ad.duration}</span>
                                    </td>
                                    <td className="px-8 py-7">
                                        <div className="flex flex-col items-center gap-2">
                                            <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest ${ad.status === 'Running' ? 'bg-blue-50 text-blue-500 ' : 'bg-orange-50 text-orange-500 border border-orange-100'
                                                }`}>
                                                {ad.status}
                                            </span>
                                        </div>
                                    </td>
                                    <td className="px-8 py-7 text-center">
                                        <div className="flex items-center justify-center gap-3">
                                            <button className="h-10 w-10 flex items-center justify-center bg-gray-50 rounded-xl text-gray-400 hover:bg-[#7c3aed] hover:text-white transition-all transform hover:-translate-y-1 active:scale-90 shadow-sm">
                                                <Edit size={16} />
                                            </button>
                                            <button className="h-10 w-10 flex items-center justify-center bg-gray-50 rounded-xl text-gray-400 hover:bg-red-500 hover:text-white transition-all transform hover:-translate-y-1 active:scale-90 shadow-sm">
                                                <Trash2 size={16} />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Enhanced Pagination Section */}
                <div className="p-8 bg-white flex flex-col items-center gap-6 border-t border-gray-50">
                    <div className="flex items-center gap-2">
                        <button
                            disabled={currentPage === 1}
                            onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                            className="h-10 w-10 flex items-center justify-center rounded-xl border border-gray-100 text-gray-400 hover:bg-[#7c3aed] hover:text-white transition-all disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-gray-400"
                        >
                            <ArrowLeft size={18} />
                        </button>

                        {[1, 2, 3, "...", 8].map((page, idx) => (
                            <button
                                key={idx}
                                className={`h-10 w-10 flex items-center justify-center rounded-xl text-sm font-bold transition-all ${page === currentPage
                                    ? "bg-[#7c3aed] text-white shadow-lg shadow-purple-100"
                                    : "text-gray-400 hover:bg-purple-50 hover:text-[#7c3aed]"
                                    } ${page === "..." ? "cursor-default hover:bg-transparent" : ""}`}
                                onClick={() => typeof page === 'number' && setCurrentPage(page)}
                            >
                                {page}
                            </button>
                        ))}

                        <button
                            onClick={() => setCurrentPage(p => p + 1)}
                            className="h-10 w-10 flex items-center justify-center rounded-xl border border-gray-100 text-gray-400 hover:bg-[#7c3aed] hover:text-white transition-all"
                        >
                            <ArrowRight size={18} />
                        </button>
                    </div>
                    <p className="text-xs text-gray-400 font-medium">Showing 1 to 10 of 82 Campaigns</p>
                </div>
            </div>
        </div>
    );
}
