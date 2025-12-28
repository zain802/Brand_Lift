"use client";
import React from "react";
import StatCard from "../StatCard";

const CreatorDashboard = () => {
    return (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="mb-10">
                <h2 className="text-3xl md:text-5xl font-black text-gray-800 tracking-tighter uppercase">
                    Creator Content Studio
                </h2>
                <p className="text-gray-500 font-medium mt-2">Track your engagement, collaborations and payouts.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-4">
                <StatCard title="Total Followers" value="1.2M" />
                <StatCard title="Engagement Rate" value="4.8%" />
                <StatCard title="Active Collabs" value="8" />
                <StatCard title="Total Payout" value="PKR 85,000" subValue={true} />
            </div>

            <div className="mt-10 flex flex-col sm:flex-row justify-start items-center gap-6">
                <button className="w-full sm:w-auto px-12 py-3.5 bg-gradient-to-r from-[#2e1065] to-[#7c3aed] text-white font-black text-[10px] uppercase tracking-widest rounded-full shadow-lg shadow-purple-200 hover:shadow-purple-300 transition-all transform hover:-translate-y-1 active:scale-95">
                    Post Content
                </button>
                <button className="w-full sm:w-auto px-12 py-3.5 bg-white text-[#2e1065] border-2 border-[#2e1065] font-black text-[10px] uppercase tracking-widest rounded-full shadow-sm hover:bg-gray-50 transition-all transform hover:-translate-y-1 active:scale-95">
                    View Insights
                </button>
            </div>

            <div className="mt-16 bg-white p-10 rounded-[30px] border border-dashed border-gray-200 text-center">
                <p className="text-gray-400 font-medium uppercase tracking-widest text-xs">Content Feed coming soon...</p>
            </div>
        </div>
    );
};

export default CreatorDashboard;
