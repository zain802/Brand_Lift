"use client";
import React from "react";
import Image from "next/image";
import {
    BarChart3,
    Cloud,
    Edit3,
    TrendingUp,
    ShieldCheck,
    Clock,
    User,
    Users,
    Star,
    MessageSquare,
    Play
} from "lucide-react";

const ServicesPage = () => {
    const services = [
        {
            title: "Realtime Analytics",
            icon: <BarChart3 size={32} />,
            desc: "Track every click and impression as it happens. Understand your audience better with instant data updates.",
        },
        {
            title: "Cloud-Based Platform",
            icon: <Cloud size={32} />,
            desc: "Access your dashboard from anywhere. Your campaigns are meaningful and always accessible on the secure cloud.",
        },
        {
            title: "Customizable Ads",
            icon: <Edit3 size={32} />,
            desc: "Use our professional templates or create your own custom designs to match your brand identity perfectly.",
        },
        {
            title: "AI Optimization",
            icon: <TrendingUp size={32} />,
            desc: "Our smart algorithms automatically adjust your bids and targeting to ensure maximum ROI for your budget.",
        },
        {
            title: "Enterprise Security",
            icon: <ShieldCheck size={32} />,
            desc: "We use bank-level encryption to keep your data, payments, and customer information completely safe.",
        },
        {
            title: "24/7 Support",
            icon: <Clock size={32} />,
            desc: "Our dedicated support team is available around the clock to help you with any questions or issues.",
        }
    ];

    return (
        <div className="bg-white">
            {/* Section 1: Hero Section */}
            {/* Section 1: Hero Section */}
            <section className="relative bg-gradient-to-br from-[#2e1065] via-[#4c1d95] to-[#7c3aed] pt-32 pb-44 text-center px-6 overflow-hidden">
                <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-[20%] right-[-10%] w-[500px] h-[500px] bg-[#fb923c]/10 rounded-full blur-3xl"></div>

                <div className="max-w-4xl mx-auto relative z-10">
                    <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
                        Comprehensive Advertising Solutions
                    </h1>
                    <p className="mt-6 text-white/80 text-lg max-w-2xl mx-auto">
                        From automated ad creation to real-time analytics, we provide the tools you need to succeed in the digital marketplace.
                    </p>
                    <button className="mt-10 px-10 py-4 bg-[#FF8A42] text-white font-bold rounded-2xl shadow-xl hover:bg-[#e67a3a] transition-all transform hover:-translate-y-1">
                        Get Started
                    </button>
                </div>

                {/* Smooth Professional Wave Divider */}
                <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
                    <svg className="relative block w-full h-[60px] md:h-[100px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" fill="#ffffff" className="fill-white"></path>
                    </svg>
                </div>
            </section>

            {/* Section 2: Services Grid */}
            <section className="py-24 max-w-7xl mx-auto px-4 md:px-6 -mt-20 relative z-20">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Discover services we provide</h2>
                    <p className="mt-4 text-gray-500 max-w-2xl mx-auto text-sm md:text-base">
                        We offer a complete suite of digital advertising tools tailored for local business growth.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="group p-8 md:p-10 rounded-[30px] transition-all duration-500 bg-white border border-gray-100 shadow-lg hover:shadow-2xl hover:-translate-y-2 flex flex-col items-start"
                        >
                            <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center text-[#FF8A42] shadow-sm border border-gray-100 mb-8 transition-all group-hover:bg-[#FF8A42] group-hover:text-white group-hover:scale-110">
                                {service.icon}
                            </div>
                            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 transition-colors group-hover:text-[#4c1d95]">{service.title}</h3>
                            <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-6 group-hover:text-gray-600">
                                {service.desc}
                            </p>
                            <button className="text-sm font-bold text-gray-900 border-b-2 border-transparent hover:border-[#FF8A42] hover:text-[#FF8A42] transition-all">
                                Read More
                            </button>
                        </div>
                    ))}
                </div>
            </section>



            {/* Section 4: Workflow Section */}
            <section className="py-24 max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-4xl font-bold text-gray-900 leading-tight">
                            How Our Application Works
                        </h2>
                        <p className="mt-8 text-gray-500 text-lg leading-relaxed">
                            Our platform automates the complex parts of advertising. You define the goal, we handle the bidding, targeting, and optimization to deliver results.
                        </p>
                        <p className="mt-6 text-gray-500 text-lg leading-relaxed">
                            Stay in the loop with transparent reporting and real-time alerts on your campaign performance.
                        </p>
                        <button className="mt-10 px-10 py-4 bg-[#FF8A42] text-white font-bold rounded-2xl shadow-lg hover:bg-[#e67a3a] transition-all transform hover:scale-105">
                            Learn More
                        </button>
                    </div>

                    <div className="relative group">
                        {/* Blob Background decoration */}
                        <div className="absolute -inset-4 bg-[#7c3aed]/10 rounded-[50px] blur-2xl group-hover:bg-[#7c3aed]/20 transition-all"></div>

                        <div className="relative rounded-[40px] overflow-hidden shadow-2xl border-8 border-white">
                            <Image
                                src="/images/jpg/herosection.jpg"
                                alt="Application Workflow"
                                width={800}
                                height={600}
                                className="w-full h-auto transform transition-transform duration-700 group-hover:scale-110"
                            />
                            {/* Play Button Overlay */}
                            <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity">
                                <div className="w-20 h-20 bg-blue-500 text-white rounded-full flex items-center justify-center shadow-2xl transform transition hover:scale-125 cursor-pointer">
                                    <Play fill="white" size={32} className="ml-1" />
                                </div>
                            </div>

                            {/* Pulse animation for play button when not hovered */}
                            <div className="absolute inset-0 flex items-center justify-center group-hover:hidden">
                                <div className="w-20 h-20 bg-blue-500/80 text-white rounded-full flex items-center justify-center shadow-2xl animate-pulse">
                                    <Play fill="white" size={32} className="ml-1" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ServicesPage;
