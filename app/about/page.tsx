import React from "react";
import Image from "next/image";
import {
    Zap,
    Settings,
    Cloud,
    BarChart3,
    LayoutDashboard,
    MonitorDot,
    Link as LinkIcon
} from "lucide-react";

const AboutPage = () => {
    return (
        <div className="bg-white">
            {/* Section 1: Hero Section */}
            <section className="relative bg-[#7c3aed] pt-20 pb-40 overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 items-center gap-12 relative z-10">
                    <div className="text-white">
                        <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                            Designed for Every <br /> Business
                        </h1>
                        <p className="mt-6 text-white/80 text-lg max-w-xl">
                            Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum
                            has been the industry's standard dummy text ever since the 1500s.
                        </p>
                        <button className="mt-10 px-8 py-3 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-[#7c3aed] transition-all">
                            Learn More
                        </button>
                    </div>

                    <div className="relative flex justify-center lg:justify-end">
                        <div className="relative w-full max-w-[500px] aspect-[4/3] rounded-[40px] overflow-hidden rotate-[-2deg] border-4 border-white/20 shadow-2xl">
                            <Image
                                src="/images/jpg/herosection.jpg"
                                alt="Business Design"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 flex items-center justify-center bg-black/20 group cursor-pointer">
                                <div className="w-16 h-16 bg-[#7c3aed] rounded-full flex items-center justify-center text-white shadow-xl transform transition hover:scale-110">
                                    <Zap fill="white" size={24} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Wave Shape Divider */}
                <div className="absolute bottom-0 left-0 w-full leading-[0]">
                    <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
                        <path d="M0 120L1440 120L1440 0C1440 0 1100 120 720 120C340 120 0 0 0 0L0 120Z" fill="white" />
                    </svg>
                </div>
            </section>

            {/* Section 2: High Performance Software */}
            <section className="py-24 max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <div>
                        <h2 className="text-4xl font-bold text-[#1f2937] leading-tight">
                            High Performance Software that Increase Your Overall Workflow
                        </h2>
                        <p className="mt-8 text-gray-500 text-lg leading-relaxed">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
                            suspendisse ultrices gravida. Risus commodo viverra maecenas.
                        </p>
                        <button className="mt-10 px-8 py-4 bg-[#FF8A42] text-white font-bold rounded-2xl shadow-lg hover:bg-[#e67a3a] transition-all">
                            Learn More
                        </button>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                        {/* Feature 1 */}
                        <div className="p-4 group">
                            <div className="w-14 h-14 bg-blue-100 text-blue-500 rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-blue-500 group-hover:text-white transition-all">
                                <MonitorDot size={28} />
                            </div>
                            <h4 className="text-xl font-bold text-gray-800">Quick Access</h4>
                            <p className="mt-3 text-gray-500 text-sm leading-relaxed">
                                Lorem ipsum is simply dummy text of the printing and typesetting industry.
                            </p>
                        </div>
                        {/* Feature 2 */}
                        <div className="p-4 group">
                            <div className="w-14 h-14 bg-orange-100 text-orange-500 rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-orange-500 group-hover:text-white transition-all">
                                <Settings size={28} />
                            </div>
                            <h4 className="text-xl font-bold text-gray-800">Advance Management</h4>
                            <p className="mt-3 text-gray-500 text-sm leading-relaxed">
                                Lorem ipsum is simply dummy text of the printing and typesetting industry.
                            </p>
                        </div>
                        {/* Feature 3 */}
                        <div className="p-4 group">
                            <div className="w-14 h-14 bg-purple-100 text-purple-500 rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-purple-500 group-hover:text-white transition-all">
                                <Cloud size={28} />
                            </div>
                            <h4 className="text-xl font-bold text-gray-800">Cloud Services</h4>
                            <p className="mt-3 text-gray-500 text-sm leading-relaxed">
                                Lorem ipsum is simply dummy text of the printing and typesetting industry.
                            </p>
                        </div>
                        {/* Feature 4 */}
                        <div className="p-4 group">
                            <div className="w-14 h-14 bg-green-100 text-green-500 rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-green-500 group-hover:text-white transition-all">
                                <BarChart3 size={28} />
                            </div>
                            <h4 className="text-xl font-bold text-gray-800">Data Analysis</h4>
                            <p className="mt-3 text-gray-500 text-sm leading-relaxed">
                                Lorem ipsum is simply dummy text of the printing and typesetting industry.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 3: Integration Feature */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 leading-tight">
                            We Bring Everything in One <br /> Single Place
                        </h2>
                        <p className="mt-4 text-gray-500 max-w-2xl">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-10">
                            {/* Sub Feature 1 */}
                            <div className="flex gap-6 items-start">
                                <div className="w-12 h-12 shrink-0 bg-[#FF8A42] text-white rounded-xl flex items-center justify-center shadow-md">
                                    <LayoutDashboard size={24} />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-gray-800">Connect with Your Business</h4>
                                    <p className="mt-2 text-gray-500 text-sm leading-relaxed max-w-md">
                                        Lorem ipsum is simply dummy text of the printing and typesetting
                                        industry. Lorem ipsum has been the standard dummy text.
                                    </p>
                                </div>
                            </div>
                            {/* Sub Feature 2 */}
                            <div className="flex gap-6 items-start">
                                <div className="w-12 h-12 shrink-0 bg-blue-500 text-white rounded-xl flex items-center justify-center shadow-md">
                                    <MonitorDot size={24} />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-gray-800">Collect and Analyze Data</h4>
                                    <p className="mt-2 text-gray-500 text-sm leading-relaxed max-w-md">
                                        Lorem ipsum is simply dummy text of the printing and typesetting
                                        industry. Lorem ipsum has been the standard dummy text.
                                    </p>
                                </div>
                            </div>
                            {/* Sub Feature 3 */}
                            <div className="flex gap-6 items-start">
                                <div className="w-12 h-12 shrink-0 bg-purple-500 text-white rounded-xl flex items-center justify-center shadow-md">
                                    <LinkIcon size={24} />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-gray-800">Integration with Cloud Files</h4>
                                    <p className="mt-2 text-gray-500 text-sm leading-relaxed max-w-md">
                                        Lorem ipsum is simply dummy text of the printing and typesetting
                                        industry. Lorem ipsum has been the standard dummy text.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="rounded-[30px] overflow-hidden shadow-2xl border-8 border-white">
                                <Image
                                    src="/images/jpg/chart3.jpg"
                                    alt="Dashboard Visualization"
                                    width={800}
                                    height={600}
                                    className="w-full h-auto"
                                />
                            </div>
                            {/* Decorative element */}
                            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-[#FF8A42]/10 rounded-full blur-3xl -z-10"></div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutPage;
