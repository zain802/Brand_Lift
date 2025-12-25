"use client";
import React, { useState, useRef } from "react";
import {
    Store, Palette,
    Image as ImageIcon, CheckCircle2,
    Upload, ArrowLeft, X
} from "lucide-react";
import { useForm, Controller } from "react-hook-form";
import { toast } from "sonner";
import FormInput from "@/components/common/FormInput";
import FormSelect from "@/components/common/FormSelect";

const ShopForm = ({ onBack, editData = null }) => {
    const [loading, setLoading] = useState(false);
    const [logoPreview, setLogoPreview] = useState(editData?.logo || null);

    const logoInputRef = useRef(null);

    const themeOptions = [
        { value: "light", label: "Classic Light" },
        { value: "dark", label: "Premium Dark" },
        { value: "auto", label: "System Sync" }
    ];

    const { register, handleSubmit, control, formState: { errors } } = useForm({
        defaultValues: {
            shop_name: editData?.shop_name || "",
            color_scheme: editData?.color_scheme || "#7c3aed",
            theme: editData ? themeOptions.find(t => t.value === editData.theme) : themeOptions[0],
        }
    });

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => setLogoPreview(reader.result);
            reader.readAsDataURL(file);
        }
    };

    const onSubmit = async (data) => {
        setLoading(true);
        try {
            const payload = {
                shop_name: data.shop_name,
                logo: logoPreview,
                color_scheme: data.color_scheme,
                theme: data.theme?.value,
            };

            console.log("Submitting Shop:", payload);
            await new Promise(resolve => setTimeout(resolve, 800));
            toast.success(editData ? "Shop details updated!" : "Shop successfully established!");
            onBack();
        } catch (error) {
            toast.error("An error occurred during preservation.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-5xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-700 font-poppins pb-24 px-4">
            {/* Header */}
            <div className="bg-white rounded-[20px] p-6 shadow-[0_15px_40px_rgba(0,0,0,0.02)] border border-gray-50 flex flex-col md:flex-row md:items-center justify-between gap-6 mb-5">
                <div>
                    <h2 className="text-3xl md:text-4xl font-black text-gray-800 tracking-tighter leading-none">
                        {editData ? "Refine Shop" : "Establish Shop"}
                    </h2>
                    <p className="text-gray-400 text-xs font-medium mt-2 leading-relaxed uppercase tracking-wider">
                        Configure your marketplace presence and visual identity.
                    </p>
                </div>

                <button
                    onClick={onBack}
                    className="w-full md:w-auto px-6 py-3 rounded-[15px] font-black bg-gray-50 text-gray-400 border border-gray-100 hover:text-gray-800 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-3 text-[10px] uppercase tracking-[0.2em] active:scale-95 group"
                >
                    <ArrowLeft size={18} strokeWidth={3} className="group-hover:-translate-x-1 transition-transform duration-300" />
                    Back to Library
                </button>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="bg-white rounded-[32px] shadow-[0_40px_80px_rgba(0,0,0,0.03)] border border-gray-50 p-8 md:p-16 relative overflow-hidden">
                <div className="flex flex-col items-start gap-16 relative z-10">

                    {/* 1. Logo Section (Top Centered) */}
                    <div className="flex flex-col items-start gap-6">

                        <div className="relative group">
                            <div
                                onClick={() => logoInputRef.current?.click()}
                                className={`w-48 h-48 rounded-[56px] border-2 border-dashed flex items-center justify-center transition-all duration-700 cursor-pointer overflow-hidden ${logoPreview
                                    ? 'border-solid border-purple-200 bg-white shadow-2xl shadow-purple-100/50'
                                    : 'border-gray-100 bg-white '
                                    }`}
                            >
                                {logoPreview ? (
                                    <img src={logoPreview} alt="Logo" className="w-full h-full object-cover p-2 rounded-[50px]" />
                                ) : (
                                    <div className="flex flex-col items-center gap-4 group-hover:scale-110 transition-transform duration-500">
                                        <div className="w-16 h-16 bg-white rounded-3xl flex items-center justify-center text-gray-200 shadow-sm border border-gray-50">
                                            <ImageIcon size={32} />
                                        </div>
                                        <span className="text-[10px] font-black text-gray-400 uppercase tracking-[0.1em]">Upload Logo</span>
                                    </div>
                                )}
                            </div>

                            <input type="file" ref={logoInputRef} className="hidden" accept="image/*" onChange={handleImageUpload} />

                            <button
                                type="button"
                                onClick={() => logoInputRef.current?.click()}
                                className="absolute -bottom-3 -right-3 w-16 h-16 bg-[#7c3aed] text-white rounded-[22px] shadow-2xl flex items-center justify-center hover:scale-110 hover:rotate-6 active:scale-95 transition-all border-[6px] border-white z-20 group-hover:shadow-purple-400/40"
                            >
                                <Upload size={22} strokeWidth={2.5} />
                            </button>

                            {logoPreview && (
                                <button
                                    type="button"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setLogoPreview(null);
                                    }}
                                    className="absolute -top-3 -left-3 w-12 h-12 bg-white text-red-500 rounded-2xl shadow-xl flex items-center justify-center hover:bg-red-500 hover:text-white transition-all border border-gray-50 z-20 active:scale-90"
                                >
                                    <X size={20} strokeWidth={3} />
                                </button>
                            )}
                        </div>
                    </div>

                    {/* 2. Inputs Grid Section */}
                    <div className="w-full space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-2">
                            <FormInput
                                label="Shop Identity Name"
                                name="shop_name"
                                placeholder="Business legal or trade name..."
                                icon={Store}
                                register={register("shop_name", { required: "Shop name is required" })}
                                error={errors.shop_name}
                                className="md:col-span-2"
                            />

                            <Controller
                                name="theme"
                                control={control}
                                render={({ field }) => (
                                    <FormSelect
                                        label="Interface Environment"
                                        options={themeOptions}
                                        field={field}
                                        placeholder="Select interface aesthetic..."
                                    />
                                )}
                            />

                            <FormInput
                                label="Brand Neural Color"
                                name="color_scheme"
                                type="color"
                                icon={Palette}
                                register={register("color_scheme")}
                            />
                        </div>


                    </div>
                </div>

                {/* Footer Controls */}
                <div className="mt-20 pt-12 border-t border-gray-50 flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="hidden md:block">
                        <p className="text-[10px] font-black text-gray-300 uppercase tracking-[0.3em]">Ready for preservation</p>
                    </div>

                    <div className="flex items-center gap-6 w-full md:w-auto">
                        <button
                            type="button"
                            onClick={onBack}
                            className="flex-1 md:flex-none px-10 py-5 font-black text-[10px] uppercase tracking-[0.2em] text-gray-400 hover:text-gray-800 transition-all"
                        >
                            Discard
                        </button>
                        <button
                            type="submit"
                            disabled={loading}
                            className="flex-1 md:flex-none px-6 py-4 rounded-2xl font-black bg-gradient-to-r from-[#7c3aed] to-[#4c1d95] text-white shadow-xl shadow-purple-200 hover:shadow-purple-400 transition-all flex items-center justify-center gap-3 text-[10px] uppercase tracking-[0.2em] active:scale-95 disabled:opacity-50"
                        >
                            {loading ? "Establishing..." : (editData ? "Refine Shop" : "Initialize Shop")}
                            {!loading && <CheckCircle2 size={18} strokeWidth={3} />}
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default ShopForm;
