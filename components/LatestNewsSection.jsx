"use client";
import React from "react";
import Image from "next/image";
import { Calendar } from "lucide-react";

const newsItems = [
    {
        id: 1,
        title: "5 Tips for Hyper-Local Marketing in 2025",
        date: "25 January, 2025",
        image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1000&auto=format&fit=crop",
        link: "#",
    },
    {
        id: 2,
        title: "Why AI is the Future of Small Business Advertising",
        date: "24 January, 2025",
        image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=1000&auto=format&fit=crop",
        link: "#",
    },
    {
        id: 3,
        title: "Maximizing ROI with Smart Budgeting",
        date: "23 January, 2025",
        image: "https://images.unsplash.com/photo-1504384308090-c54be3855833?q=80&w=1000&auto=format&fit=crop",
        link: "#",
    },
];

const LatestNewsSection = () => {
    return (
        <section className="py-24 bg-[#F8F9FF] dark:bg-black">
            <div className="max-w-7xl mx-auto px-6">

                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] dark:text-white mb-4 font-poppins">
                        Marketing Insights
                    </h2>
                    <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
                        Stay updated with the latest trends and tips to grow your business effectively.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {newsItems.map((item) => (
                        <div key={item.id} className="bg-white dark:bg-zinc-900 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 group cursor-pointer border border-gray-100 dark:border-zinc-800">

                            {/* Image Container */}
                            <div className="relative h-60 w-full overflow-hidden">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    layout="fill"
                                    objectFit="cover"
                                    className="group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-[#1A1A1A] dark:text-white mb-4 leading-snug font-poppins group-hover:text-[#FF8A42] transition-colors">
                                    {item.title}
                                </h3>

                                <div className="flex items-center text-gray-400 text-sm mb-6">
                                    <Calendar size={16} className="mr-2" />
                                    <span>{item.date}</span>
                                </div>

                                <a href={item.link} className="inline-block text-[#FF8A42] font-semibold border-b-2 border-[#FF8A42] pb-0.5 hover:text-[#e0702b] hover:border-[#e0702b] transition-colors">
                                    Read More
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default LatestNewsSection;
