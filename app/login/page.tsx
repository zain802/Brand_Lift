import React from "react";
import AuthLayout from "@/components/AuthLayout";

export default function Login() {
    return (
        <AuthLayout
            title="Welcome Back"
            subtitle="Login to manage your ad campaigns and track performance."
            switchText="Don't have an account?"
            switchLink="/signup"
            switchLinkText="Create Account"
        >
            <form className="space-y-6">
                <div className="relative">
                    <label className="absolute -top-3 left-4 bg-white px-1 text-xs text-gray-400 z-10">Email Address</label>
                    <input
                        type="email"
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
                    <input type="checkbox" id="remember" className="w-4 h-4 rounded text-[#FF8A42] focus:ring-[#FF8A42]" />
                    <label htmlFor="remember" className="text-sm text-gray-600">
                        Remember Password
                    </label>
                </div>

                <button
                    type="submit"
                    className="w-full py-4 bg-[#FF8A42] text-white rounded-2xl font-bold shadow-lg shadow-orange-200 hover:bg-[#e67a3a] transition-all"
                >
                    Log In
                </button>
            </form>
        </AuthLayout>
    );
}
