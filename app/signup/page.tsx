"use client";
import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import AuthLayout from "@/components/AuthLayout";
import apiFunction from "@/utils/apiFunction";
import { endpoints } from "@/utils/apiEndpoints";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Select from "react-select";

// Zod Validation Schema
const signupSchema = z.object({
    full_name: z.string().min(3, "Name must be at least 3 characters"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    user_type: z.object({
        value: z.enum(["merchant", "creator", "member", "elite_partner"]),
        label: z.string()
    }).nullable().refine((val) => val !== null, "Please select an account type"),
    terms: z.boolean().refine(val => val === true, "You must agree to terms"),
});

type SignupFormData = z.infer<typeof signupSchema>;

const userTypeOptions = [
    { value: "merchant", label: "Ambassador" },
    { value: "creator", label: "Celebrity" },
    { value: "member", label: "Member" },
    { value: "elite_partner", label: "Investor" },
] as const;

const customSelectStyles = {
    control: (provided: any, state: any) => ({
        ...provided,
        borderRadius: "1rem", // 2xl
        padding: "0.2rem",
        borderColor: state.isFocused ? "#FF8A42" : "#e5e7eb",
        boxShadow: "none",
        "&:hover": {
            borderColor: "#FF8A42"
        }
    }),
    option: (provided: any, state: any) => ({
        ...provided,
        backgroundColor: state.isSelected ? "#FF8A42" : state.isFocused ? "#fff7ed" : "#fff",
        color: state.isSelected ? "#fff" : "#374151",
        "&:active": {
            backgroundColor: "#FF8A42"
        }
    })
};

export default function SignUp() {
    const { postData } = apiFunction();
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm<SignupFormData>({
        resolver: zodResolver(signupSchema),
        defaultValues: {
            full_name: "",
            email: "",
            password: "",
            user_type: null,
            terms: false
        }
    });

    const onSubmit = async (data: SignupFormData) => {
        if (!data.user_type) return;
        setLoading(true);

        const payload = {
            email: data.email,
            full_name: data.full_name,
            password: data.password,
            user_type: data.user_type.value,
            // Including required defaults based on your schema
            phone_number: "",
            profile_picture: "",
            location: {
                type: "Point",
                coordinates: [0, 0]
            },
            is_incognito: false,
            price_per_ad: 0,
        };

        try {
            const response = await postData(endpoints.auth.signup, payload);
            console.log("Signup success:", response);
            toast.success("Account created successfully!");
            router.push("/login");
        } catch (error: any) {
            console.error("Signup failed:", error);
            const errorMessage = error?.response?.data?.message || "Signup failed. Please try again.";
            toast.error(errorMessage);
        } finally {
            setLoading(false);
        }
    };

    return (
        <AuthLayout
            title="Start Growing Today"
            subtitle="Create your free account and launch your first local ad in minutes."
            switchText="Already have an account?"
            switchLink="/login"
            switchLinkText="Log In"
        >
            <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                {/* Full Name */}
                <div className="relative">
                    <label className="absolute -top-3 left-4 bg-white px-1 text-xs text-gray-400 z-10">Full Name</label>
                    <input
                        {...register("full_name")}
                        type="text"
                        placeholder="John Doe"
                        className={`w-full px-4 py-3 border rounded-2xl focus:outline-none focus:border-[#FF8A42] transition ${errors.full_name ? "border-red-500" : "border-gray-200"
                            }`}
                    />
                    {errors.full_name && <p className="text-red-500 text-xs mt-1 ml-2">{errors.full_name.message}</p>}
                </div>

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

                {/* User Type Select (React Select) */}
                <div className="relative">
                    <label className="absolute -top-3 left-4 bg-white px-1 text-xs text-gray-400 z-10">Account Type</label>
                    <Controller
                        name="user_type"
                        control={control}
                        render={({ field }) => (
                            <Select
                                {...field}
                                options={userTypeOptions}
                                styles={customSelectStyles}
                                classNamePrefix="react-select"
                                placeholder="Select User Type"
                                isClearable
                            />
                        )}
                    />
                    {errors.user_type && <p className="text-red-500 text-xs mt-1 ml-2">{errors.user_type.message}</p>}
                </div>

                {/* Terms */}
                <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                        <input
                            {...register("terms")}
                            type="checkbox"
                            id="terms"
                            className="w-4 h-4 rounded text-[#FF8A42] focus:ring-[#FF8A42]"
                        />
                        <label htmlFor="terms" className="text-sm text-gray-600">
                            Agree with <span className="text-gray-900 font-medium">Terms and Conditions</span>
                        </label>
                    </div>
                    {errors.terms && <p className="text-red-500 text-xs mt-1 ml-2">{errors.terms.message}</p>}
                </div>

                <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 bg-[#FF8A42] text-white rounded-2xl font-bold shadow-lg shadow-orange-200 hover:bg-[#e67a3a] transition-all disabled:opacity-50"
                >
                    {loading ? "Creating Account..." : "Create Account"}
                </button>
            </form>
        </AuthLayout>
    );
}
