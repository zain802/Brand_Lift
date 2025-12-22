import React from "react";
import AuthLayout from "@/components/AuthLayout";

export default function SignUp() {
    return (
        <AuthLayout
            title="Start Growing Today"
            subtitle="Create your free account and launch your first local ad in minutes."
            switchText="Already have an account?"
            switchLink="/login"
            switchLinkText="Log In"
        >
            <form className="space-y-6">
                <div className="relative">
                    <label className="absolute -top-3 left-4 bg-white px-1 text-xs text-gray-400 z-10">Full Name</label>
                    <input
                        type="text"
                        placeholder="John Doe"
                        className="w-full px-4 py-3 border border-gray-200 bg-white rounded-2xl focus:outline-none focus:border-[#FF8A42] transition"
                    />
                </div>

                <div className="relative">
                    <label className="absolute -top-3 left-4 bg-white px-1 text-xs text-gray-400 z-10">Email Address</label>
                    <input
                        type="text"
                        placeholder="you@company.com"
                        className="w-full px-4 py-3 border border-gray-200 bg-white rounded-2xl focus:outline-none focus:border-[#FF8A42] transition"
                    />
                </div>

                <div className="relative">
                    <label className="absolute -top-3 left-4 bg-white px-1 text-xs text-gray-400 z-10">Password</label>
                    <input
                        type="password"
                        placeholder="********"
                        className="w-full px-4 py-3 border border-gray-200 bg-white rounded-2xl focus:outline-none focus:border-[#FF8A42] transition"
                    />
                </div>

                <div className="flex items-center gap-2">
                    <input type="checkbox" id="terms" className="w-4 h-4 rounded text-[#FF8A42] focus:ring-[#FF8A42]" />
                    <label htmlFor="terms" className="text-sm text-gray-600">
                        Agree with <span className="text-gray-900 font-medium">Terms and Conditions</span>
                    </label>
                </div>

                <button
                    type="submit"
                    className="w-full py-4 bg-[#FF8A42] text-white rounded-2xl font-bold shadow-lg shadow-orange-200 hover:bg-[#e67a3a] transition-all"
                >
                    Create Account
                </button>
            </form>
        </AuthLayout>
    );
}
