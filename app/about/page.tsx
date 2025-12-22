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
            <section className="relative bg-gradient-to-br from-[#2e1065] via-[#4c1d95] to-[#7c3aed] pt-20 pb-40 overflow-hidden">
                <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl"></div>

                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 items-center gap-12 relative z-10">
                    <div className="text-white">
                        <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                            Empowering Local <br /> Businesses
                        </h1>
                        <p className="mt-6 text-white/80 text-lg max-w-xl">
                            We simplify digital advertising so you can focus on what you do best—running your business.
                            No complex jargon, just results.
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

                {/* Smooth Professional Wave Divider */}
                <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
                    <svg className="relative block w-full h-[60px] md:h-[100px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" fill="#ffffff" className="fill-white"></path>
                    </svg>
                </div>
            </section>

            {/* Section 2: High Performance Software */}
            <section className="py-24 max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <div>
                        <h2 className="text-4xl font-bold text-[#1f2937] leading-tight">
                            Everything You Need to Scale Your Business
                        </h2>
                        <p className="mt-8 text-gray-500 text-lg leading-relaxed">
                            Brand Lift provides a comprehensive suite of tools designed to help you create, manage, and optimize your local advertising campaigns with ease.
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
                                Gain instant insights into your campaigns with our streamlined dashboard navigation.
                            </p>
                        </div>
                        {/* Feature 2 */}
                        <div className="p-4 group">
                            <div className="w-14 h-14 bg-orange-100 text-orange-500 rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-orange-500 group-hover:text-white transition-all">
                                <Settings size={28} />
                            </div>
                            <h4 className="text-xl font-bold text-gray-800">Advance Management</h4>
                            <p className="mt-3 text-gray-500 text-sm leading-relaxed">
                                Control budgets, schedules, and audience targeting with granular precision.
                            </p>
                        </div>
                        {/* Feature 3 */}
                        <div className="p-4 group">
                            <div className="w-14 h-14 bg-purple-100 text-purple-500 rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-purple-500 group-hover:text-white transition-all">
                                <Cloud size={28} />
                            </div>
                            <h4 className="text-xl font-bold text-gray-800">Cloud Services</h4>
                            <p className="mt-3 text-gray-500 text-sm leading-relaxed">
                                Securely store your creative assets and campaign data on our reliable cloud infrastructure.
                            </p>
                        </div>
                        {/* Feature 4 */}
                        <div className="p-4 group">
                            <div className="w-14 h-14 bg-green-100 text-green-500 rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-green-500 group-hover:text-white transition-all">
                                <BarChart3 size={28} />
                            </div>
                            <h4 className="text-xl font-bold text-gray-800">Data Analysis</h4>
                            <p className="mt-3 text-gray-500 text-sm leading-relaxed">
                                Visualize performance metrics to make informed decisions and maximize ROI.
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
                            Seamlessly integrate your existing tools and workflows into one unified platform for maximum efficiency.
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
                                        Link your social media profiles and ad accounts to centralize your marketing efforts.
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
                                        Gather comprehensive data points from all channels to build a complete customer view.
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
                                        Upload, manage, and distribute your creative assets directly from our cloud storage.
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
