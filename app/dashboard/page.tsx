"use client";
import React from "react";
import StatCard from "@/components/dashboard/StatCard";
import RecentAds from "@/components/dashboard/RecentAds";

export default function DashboardPage() {
    return (
        <div className="max-w-[1600px] mx-auto w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-4">
                <StatCard
                    title="Active Ads"
                    value="14"
                />
                <StatCard
                    title="Total Spend"
                    value="$1,250.80"
                    subValue={true}
                />
                <StatCard
                    title="Views / Clicks"
                    value="15,800 / 950"
                />
                <StatCard
                    title="Reach"
                    value="25,000+"
                />
            </div>

            <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-6">
                <button className="w-full sm:w-auto px-12 py-3.5 bg-gradient-to-r from-[#2e1065] to-[#7c3aed] text-white font-bold rounded-full shadow-lg shadow-purple-200 hover:shadow-purple-300 transition-all transform hover:-translate-y-1 active:scale-95">
                    Create New Ad
                </button>
                <button className="w-full sm:w-auto px-12 py-3.5 bg-gradient-to-r from-[#2e1065] to-[#7c3aed] text-white font-bold rounded-full shadow-lg shadow-purple-200 hover:shadow-purple-300 transition-all transform hover:-translate-y-1 active:scale-95">
                    View Reports
                </button>
            </div>

            <RecentAds />
        </div>
    );
}
