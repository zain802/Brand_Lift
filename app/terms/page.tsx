import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const TermsPage = () => {
    return (
        <div className="bg-gray-50 min-h-screen py-24 px-6 md:px-12 lg:px-24">
            <div className="max-w-4xl mx-auto bg-white p-10 md:p-14 rounded-[30px] shadow-sm">

                <Link href="/" className="inline-flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-[#7c3aed] mb-10 transition-colors">
                    <ArrowLeft size={16} /> Back to Home
                </Link>

                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Terms of Service</h1>
                <p className="text-gray-500 text-lg mb-12">Last updated: December, 2025</p>

                <div className="space-y-8 text-gray-600 leading-relaxed">
                    <section>
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">1. Acceptance of Terms</h2>
                        <p>By accessing or using our website and services, you agree to be bound by these Terms of Service and all applicable laws and regulations.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">2. Use of License</h2>
                        <p>Permission is granted to temporarily download one copy of the materials (information or software) on Brand Lift's website for personal, non-commercial transitory viewing only.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">3. Disclaimer</h2>
                        <p>The materials on Brand Lift's website are provided on an 'as is' basis. Brand Lift makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">4. Limitations</h2>
                        <p>In no event shall Brand Lift or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Brand Lift's website.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">5. Governing Law</h2>
                        <p>These terms and conditions are governed by and construed in accordance with the laws and you irrevocably submit to the exclusive jurisdiction of the courts in that location.</p>
                    </section>

                </div>
            </div>
        </div>
    );
};

export default TermsPage;
