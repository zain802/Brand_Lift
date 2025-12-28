"use client";
import React, { useState } from "react";
import AuthLayout from "@/components/AuthLayout";
import apiFunction from "@/utils/apiFunction";
import { endpoints } from "@/utils/apiEndpoints";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Eye, EyeOff } from "lucide-react";
import { useDispatch } from "react-redux";
import { setUser } from "@/Redux/Slices/AuthSlice";
import { encryptData } from "@/utils/encrypt";

// Zod Validation Schema
const loginSchema = z.object({
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters"),
});

type LoginFormData = z.infer<typeof loginSchema>;

export default function Login() {
    const { postData } = apiFunction();
    const router = useRouter();
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginFormData>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: "",
            password: "",
        }
    });

    const onSubmit = async (data: LoginFormData) => {
        setLoading(true);

        try {
            const response = await postData(endpoints.auth.login, data);
            console.log("Login success:", response);

            // Store the response which includes access_token and user_type
            const encryptedResponse = encryptData(response);
            dispatch(setUser(encryptedResponse));

            const userType = response.user_type || "member";
            toast.success(`Logged in as ${userType.replace('_', ' ')} successfully!`);

            // Redirect to dashboard
            router.push("/dashboard");
        } catch (error: any) {
            console.error("Login failed:", error);
            const errorMessage = error?.response?.data?.message || "Login failed. Please try again.";
            toast.error(errorMessage);
        } finally {
            setLoading(false);
        }
    };

    return (
        <AuthLayout
            title="Welcome Back"
            subtitle="Login to manage your ad campaigns and track performance."
            switchText="Don't have an account?"
            switchLink="/signup"
            switchLinkText="Create Account"
        >
            <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                {/* Email */}
                <div className="relative">
                    <label className="absolute -top-3 left-4 bg-white px-1 text-xs text-gray-400 z-10">Email Address</label>
                    <input
                        {...register("email")}
                        type="email"
                        placeholder="you@company.com"
                        className={`w-full px-4 py-3 border rounded-2xl focus:outline-none focus:border-[#FF8A42] transition ${errors.email ? "border-red-500" : "border-gray-200"
                            }`}
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1 ml-2">{errors.email.message}</p>}
                </div>

                {/* Password */}
                <div className="relative">
                    <label className="absolute -top-3 left-4 bg-white px-1 text-xs text-gray-400 z-10">Password</label>
                    <div className="relative">
                        <input
                            {...register("password")}
                            type={showPassword ? "text" : "password"}
                            placeholder="********"
                            className={`w-full px-4 py-3 border rounded-2xl focus:outline-none focus:border-[#FF8A42] transition ${errors.password ? "border-red-500" : "border-gray-200"
                                }`}
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 focus:outline-none"
                        >
                            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                        </button>
                    </div>
                    {errors.password && <p className="text-red-500 text-xs mt-1 ml-2">{errors.password.message}</p>}
                </div>



                <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 bg-[#FF8A42] text-white rounded-2xl font-bold shadow-lg shadow-orange-200 hover:bg-[#e67a3a] transition-all disabled:opacity-50"
                >
                    {loading ? "Logging in..." : "Log In"}
                </button>
            </form>
        </AuthLayout>
    );
}
