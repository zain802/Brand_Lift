import React from "react";

const StatCard = ({ title = "", value = "", subValue = false, icon = null }) => {
    return (
        <div className="bg-white p-6 md:p-8 rounded-[15px] flex flex-col justify-between h-full transition-all duration-300 hover:bg-gradient-to-br hover:from-[#2e1065] hover:via-[#4c1d95] hover:to-[#7c3aed] group hover:shadow-xl hover:-translate-y-1">
            <div>
                <p className="text-gray-500 text-xs md:text-sm font-semibold mb-3 md:mb-4 uppercase tracking-wider group-hover:text-white/80 transition-colors">
                    {title}
                </p>
                <h3 className="text-xl md:text-3xl font-bold text-gray-900 break-words group-hover:text-white transition-colors">
                    {value}
                </h3>
                {subValue && (
                    <div className="mt-5 w-full h-1.5 bg-gray-50 rounded-full overflow-hidden group-hover:bg-white/20 transition-colors">
                        <div className="h-full bg-[#4c89ff] group-hover:bg-[#FF8A42] w-1/2 rounded-full transition-colors"></div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default StatCard;
