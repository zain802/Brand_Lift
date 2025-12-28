"use client";
import React from "react";
import StatCard from "../StatCard";
import RecentAds from "../RecentAds";

const MerchantDashboard = () => {
    return (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="mb-10">
                <h2 className="text-3xl md:text-5xl font-black text-gray-800 tracking-tighter uppercase">
                    Merchant Analytics Hub
                </h2>
                <p className="text-gray-500 font-medium mt-2">Manage your stores, inventory and sales performance.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-4">
                <StatCard title="Active Ads" value="14" />
                <StatCard title="Total Sales" value="PKR 450,000" subValue={true} />
                <StatCard title="Views / Clicks" value="15,800 / 950" />
                <StatCard title="Reach" value="25,000+" />
            </div>

            <div className="mt-10 flex flex-col sm:flex-row justify-start items-center gap-6">
                <button className="w-full sm:w-auto px-12 py-3.5 bg-gradient-to-r from-[#2e1065] to-[#7c3aed] text-white font-black text-[10px] uppercase tracking-widest rounded-full shadow-lg shadow-purple-200 hover:shadow-purple-300 transition-all transform hover:-translate-y-1 active:scale-95">
                    Establish Campaign
                </button>
                <button className="w-full sm:w-auto px-12 py-3.5 bg-white text-[#2e1065] border-2 border-[#2e1065] font-black text-[10px] uppercase tracking-widest rounded-full shadow-sm hover:bg-gray-50 transition-all transform hover:-translate-y-1 active:scale-95">
                    View Reports
                </button>
            </div>

            <div className="mt-16">
                <h3 className="text-xl font-black text-gray-800 tracking-tight mb-6 uppercase">Current Matrix</h3>
                <RecentAds />
            </div>
        </div>
    );
};

export default MerchantDashboard;
