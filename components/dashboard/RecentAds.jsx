import React from "react";
import Image from "next/image";

const RecentAds = () => {
    const ads = [
        { name: "Summer Sips Promo", status: "Running", statusColor: "text-[#4c89ff]", dotColor: "bg-[#4c89ff]", image: "https://images.unsplash.com/photo-1559496417-e7f25cb247f3?q=80&w=150&h=150&auto=format&fit=crop" },
        { name: "Weekend Brunch Deal", status: "Running", statusColor: "text-gray-400", dotColor: "bg-[#22c55e]", image: "https://images.unsplash.com/photo-1559496417-e7f25cb247f3?q=80&w=150&h=150&auto=format&fit=crop" },
        { name: "New Coffee Blend", status: "Pending", statusColor: "text-gray-400", dotColor: "bg-[#fbbf24]", image: "https://images.unsplash.com/photo-1559496417-e7f25cb247f3?q=80&w=150&h=150&auto=format&fit=crop" },
        { name: "Evening Acustic Night", status: "", statusColor: "text-gray-400", dotColor: "bg-[#22c55e]", image: "https://images.unsplash.com/photo-1559496417-e7f25cb247f3?q=80&w=150&h=150&auto=format&fit=crop" },
    ];

    return (
        <div className="mt-8 md:mt-12 bg-gray-50/50 rounded-2xl">
            <div className="flex items-center justify-between mb-6 px-4">
                <h3 className="text-xl md:text-2xl font-bold text-gray-800 tracking-tight">Recent Ads</h3>
                <button className="text-[#7c3aed] text-sm font-semibold hover:underline">View All</button>
            </div>
            <div className="bg-white rounded-[15px] overflow-hidden shadow-lg">
                <div className="overflow-x-auto scrollbar-hide">
                    <div className="min-w-full">
                        {ads.map((ad, idx) => (
                            <div key={idx} className="flex items-center justify-between px-2 md:px-6 py-2.5 md:py-3 border-b border-gray-50 last:border-0 hover:bg-gray-50/30 transition-colors gap-2 md:gap-4">
                                <div className="flex items-center gap-2 md:gap-4 flex-1 min-w-0">
                                    <div className="w-10 h-10 md:w-16 md:h-16 rounded-lg overflow-hidden flex-shrink-0 bg-gray-100 border border-gray-50">
                                        {ad.image ? (
                                            <Image
                                                src={ad.image}
                                                alt={ad.name}
                                                width={64}
                                                height={64}
                                                className="w-full h-full object-cover"
                                            />
                                        ) : (
                                            <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300"></div>
                                        )}
                                    </div>
                                    <span className="font-bold text-gray-700 text-xs md:text-lg truncate tracking-tight">
                                        {ad.name}
                                    </span>
                                </div>
                                <div className="flex items-center gap-2 md:gap-12 flex-shrink-0">
                                    <span className={`text-[10px] md:text-base font-bold min-w-[40px] md:w-20 text-right ${ad.statusColor}`}>
                                        {ad.status}
                                    </span>
                                    <div className="flex items-center gap-1 md:gap-3 min-w-[70px] md:w-32">
                                        <div className={`w-2 h-2 md:w-3.5 md:h-3.5 rounded-full flex-shrink-0 ${ad.dotColor}`}></div>
                                        <span className="text-[10px] md:text-base font-bold text-gray-300 whitespace-nowrap uppercase tracking-wider">Completed</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecentAds;
