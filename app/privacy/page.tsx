import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const PrivacyPage = () => {
    return (
        <div className="bg-gray-50 min-h-screen py-24 px-6 md:px-12 lg:px-24">
            <div className="max-w-4xl mx-auto bg-white p-10 md:p-14 rounded-[30px] shadow-sm">
                
                <Link href="/" className="inline-flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-[#7c3aed] mb-10 transition-colors">
                    <ArrowLeft size={16} /> Back to Home
                </Link>

                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Privacy Policy</h1>
                <p className="text-gray-500 text-lg mb-12">Last updated: December, 2025</p>

                <div className="space-y-8 text-gray-600 leading-relaxed">
                    <section>
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">1. Information We Collect</h2>
                        <p>We collect information you provide directly to us when you create an account, create an ad campaign, or communicate with us. This may include your name, email address, payment information, and business details.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">2. How We Use Your Information</h2>
                        <p>We use the information we collect to provide, maintain, and improve our services, to process your transactions, and to communicate with you about your account and our services.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">3. Data Sharing</h2>
                        <p>We do not share your personal information with third parties except as described in this privacy policy or with your consent. We may share information with vendors, consultants, and other service providers who need access to such information to carry out work on our behalf.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">4. Security</h2>
                        <p>We take reasonable measures to help protect information about you from loss, theft, misuse and unauthorized access, disclosure, alteration and destruction.</p>
                    </section>

                     <section>
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">5. Contact Us</h2>
                        <p>If you have any questions about this privacy policy, please contact us at support@brandlift.com.</p>
                    </section>

                </div>
            </div>
        </div>
    );
};

export default PrivacyPage;
