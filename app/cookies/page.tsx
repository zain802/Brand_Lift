import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const CookiesPage = () => {
    return (
        <div className="bg-gray-50 min-h-screen py-24 px-6 md:px-12 lg:px-24">
            <div className="max-w-4xl mx-auto bg-white p-10 md:p-14 rounded-[30px] shadow-sm">

                <Link href="/" className="inline-flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-[#7c3aed] mb-10 transition-colors">
                    <ArrowLeft size={16} /> Back to Home
                </Link>

                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Cookie Policy</h1>
                <p className="text-gray-500 text-lg mb-12">Last updated: December, 2025</p>

                <div className="space-y-8 text-gray-600 leading-relaxed">
                    <section>
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">1. What Are Cookies</h2>
                        <p>As is common practice with almost all professional websites this site uses cookies, which are tiny files that are downloaded to your computer, to improve your experience. This page describes what information they gather, how we use it and why we sometimes need to store these cookies.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">2. How We Use Cookies</h2>
                        <p>We use cookies for a variety of reasons detailed below. Unfortunately in most cases there are no industry standard options for disabling cookies without completely disabling the functionality and features they add to this site.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">3. Disabling Cookies</h2>
                        <p>You can prevent the setting of cookies by adjusting the settings on your browser (see your browser Help for how to do this). Be aware that disabling cookies will affect the functionality of this and many other websites that you visit.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">4. The Cookies We Set</h2>
                        <ul className="list-disc pl-5 space-y-2 mt-2">
                            <li>Account related cookies</li>
                            <li>Login related cookies</li>
                            <li>Email newsletters related cookies</li>
                            <li>Orders processing related cookies</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">5. More Information</h2>
                        <p>Hopefully that has clarified things for you. However if you are still looking for more information then you can contact us through one of our preferred contact methods.</p>
                    </section>

                </div>
            </div>
        </div>
    );
};

export default CookiesPage;
