"use client";
import React, { useState, useRef } from "react";
import {
    ArrowLeft,
    CheckCircle2,
    Image as ImageIcon,
    Upload,
    X,
    Layers
} from "lucide-react";
import { useForm, Controller } from "react-hook-form";
import { toast } from "sonner";
import FormInput from "@/components/common/FormInput";
import FormSelect from "@/components/common/FormSelect";
import FormAddressAutocomplete from "@/components/common/FormAddressAutocomplete";

const BrandForm = ({ onBack, editData = null }) => {
    const [loading, setLoading] = useState(false);
    const [imagePreview, setImagePreview] = useState(editData?.image || null);
    const fileInputRef = useRef(null);

    const businessTypes = [
        { value: "doctor", label: "Medical & Health (Doctor)" },
        { value: "restaurant", label: "Food & Dining (Restaurant)" },
        { value: "retail", label: "Retail & Shopping" },
        { value: "agency", label: "Marketing Agency" },
        { value: "real_estate", label: "Real Estate & Housing" },
        { value: "other", label: "Other Services" }
    ];

    const { register, handleSubmit, control, setValue, formState: { errors } } = useForm({
        defaultValues: {
            business_name: editData?.business_name || "",
            business_type: editData ? businessTypes.find(t => t.value === editData.business_type) : null,
            description: editData?.description || "",
            radius_km: editData?.radius_km || 5,
            address: editData?.address || "",
            website: editData?.website || "",
            phone: editData?.phone || "",
            email: editData?.email || "",
            shop_id: editData?.shop_id || "",
            lat: editData?.location?.coordinates?.[1] || 0,
            lng: editData?.location?.coordinates?.[0] || 0,
            location_text: editData?.location?.text || "" // Added for autocomplete
        }
    });

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => setImagePreview(reader.result);
            reader.readAsDataURL(file);
        }
    };

    const onSubmit = async (data) => {
        setLoading(true);
        try {
            const payload = {
                business_name: data.business_name,
                business_type: data.business_type?.value,
                description: data.description,
                image: imagePreview || "",
                location: {
                    type: "Point",
                    coordinates: [parseFloat(data.lng || 0), parseFloat(data.lat || 0)],
                    text: data.location_text
                },
                radius_km: parseInt(data.radius_km || 0),
                address: data.address,
                website: data.website,
                phone: data.phone,
                email: data.email,
                shop_id: data.shop_id
            };

            await new Promise(resolve => setTimeout(resolve, 1000));
            console.log("Submitting Brand:", payload);
            toast.success(editData ? "Brand updated!" : "Brand registered!");
            onBack();
        } catch (error) {
            toast.error("Operation failed.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-6xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-700 font-poppins pb-24 px-4">
            {/* Header */}
            <div className="bg-white rounded-[20px] p-6 shadow-[0_15px_40px_rgba(0,0,0,0.02)] border border-gray-50 flex flex-col md:flex-row md:items-center justify-between gap-6 mb-5">
                <div>
                    <h2 className="text-3xl md:text-4xl font-black text-gray-800 tracking-tighter leading-none">
                        {editData ? "Update Asset" : "Register Brand"}
                    </h2>
                    <p className="text-gray-400 text-xs font-medium mt-2 leading-relaxed">
                        {editData ? "Update your business profile and sync changes to the library." : "Configure as new business profile for your tracking ecosystem."}
                    </p>
                </div>

                <button
                    onClick={onBack}
                    className="w-full md:w-auto px-4 py-2 rounded-[15px] font-black bg-gray-100 text-gray-400  border border-gray-100   hover:text-gray-800 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-3 text-[10px] uppercase tracking-[0.2em] active:scale-95 group"
                >
                    <ArrowLeft size={18} strokeWidth={3} className="group-hover:-translate-x-1 transition-transform duration-300" />
                    Back
                </button>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="bg-white rounded-[20px] shadow-[0_30px_70px_rgba(0,0,0,0.03)] border border-gray-50 p-8 md:p-12">
                {/* 1. Image Upload */}
                <div className="flex flex-col items-start mb-16">
                    <div className="relative group">
                        <div
                            onClick={() => fileInputRef.current?.click()}
                            className={`w-44 h-44 rounded-[38px] overflow-hidden border-2 border-dashed ${imagePreview ? 'border-solid border-purple-100 bg-white' : 'border-gray-100 bg-gray-50/50'} flex items-center justify-center transition-all duration-500 cursor-pointer group-hover:shadow-2xl group-hover:shadow-purple-100 group-hover:border-purple-200`}
                        >
                            {imagePreview ? (
                                <img src={imagePreview} alt="Brand" className="w-full h-full object-cover" />
                            ) : (
                                <div className="flex flex-col items-center gap-3">
                                    <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-gray-200 shadow-sm">
                                        <ImageIcon size={28} />
                                    </div>
                                    <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Upload Brandmark</span>
                                </div>
                            )}
                        </div>
                        <button
                            type="button"
                            onClick={() => fileInputRef.current?.click()}
                            className="absolute -bottom-3 -right-3 w-14 h-14 bg-[#7c3aed] text-white rounded-2xl shadow-xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all border-4 border-white"
                        >
                            <Upload size={20} />
                        </button>
                        <input type="file" ref={fileInputRef} className="hidden" accept="image/*" onChange={handleImageUpload} />
                    </div>
                    {imagePreview && (
                        <button type="button" onClick={() => setImagePreview(null)} className="mt-6 text-[10px] font-black text-red-500 uppercase tracking-widest hover:underline">
                            Remove Logo
                        </button>
                    )}
                </div>

                {/* 2. Grid for all inputs */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
                    <FormInput
                        label="Brand Name"
                        name="business_name"
                        placeholder="Enter brand name..."
                        register={register("business_name", { required: "Name is required" })}
                        error={errors.business_name}
                    />

                    <Controller
                        name="business_type"
                        control={control}
                        rules={{ required: "Type is required" }}
                        render={({ field }) => (
                            <FormSelect
                                label="Business Type"
                                options={businessTypes}
                                field={field}
                                error={errors.business_type}
                                placeholder="Select type..."
                            />
                        )}
                    />

                    {/* Autocomplete Location */}
                    <Controller
                        name="location_text"
                        control={control}
                        render={({ field }) => (
                            <FormAddressAutocomplete
                                label="Location"
                                placeholder="Search city or area..."
                                value={field.value}
                                onChange={(val) => field.onChange(val)}
                                onSelect={(suggestion) => {
                                    field.onChange(suggestion.description);
                                    setValue("lat", suggestion.lat);
                                    setValue("lng", suggestion.lon);
                                }}
                                error={errors.location_text}
                            />
                        )}
                    />

                    <FormInput
                        label="Email Address"
                        name="email"
                        type="email"
                        placeholder="brand@example.com"
                        register={register("email", { required: "Email is required" })}
                        error={errors.email}
                    />

                    <FormInput
                        label="Website URL"
                        name="website"
                        placeholder="https://example.com"
                        register={register("website")}
                    />

                    <FormInput
                        label="Phone Number"
                        name="phone"
                        placeholder="+1 000 0000"
                        register={register("phone")}
                    />

                    <FormInput
                        label="Shop ID"
                        name="shop_id"
                        placeholder="Internal ID..."
                        register={register("shop_id")}
                    />

                    <FormInput
                        label="Service Radius (KM)"
                        name="radius_km"
                        type="number"
                        register={register("radius_km")}
                    />

                    {/* Autocomplete Full Address */}
                    <Controller
                        name="address"
                        control={control}
                        rules={{ required: "Full address is required" }}
                        render={({ field }) => (
                            <FormAddressAutocomplete
                                label="Full Detailed Address"
                                placeholder="Enter complete office/shop address..."
                                value={field.value}
                                onChange={(val) => field.onChange(val)}
                                onSelect={(suggestion) => {
                                    field.onChange(suggestion.description);
                                    // Update lat/lng based on full address if needed
                                    setValue("lat", suggestion.lat);
                                    setValue("lng", suggestion.lon);
                                }}
                                error={errors.address}
                            />
                        )}
                    />

                    <FormInput
                        label="Description"
                        name="description"
                        textarea={true}
                        rows={3}
                        placeholder="Tell us about the brand..."
                        register={register("description")}
                    />
                </div>

                {/* 3. Footer Actions */}
                <div className="mt-12 pt-10 border-t border-gray-50 flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="hidden md:block">
                        <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Brand Integrity Check</p>
                        <p className="text-[9px] text-gray-300 font-bold mt-1 uppercase tracking-widest italic">All parameters are dynamically synced.</p>
                    </div>

                    <div className="flex items-center gap-4 w-full md:w-auto">
                        <button type="button" onClick={onBack} className="flex-1 md:flex-none px-8 py-4 rounded-2xl font-black text-gray-400 hover:text-gray-600 transition-all text-[10px] uppercase tracking-widest">
                            Cancel
                        </button>
                        <button
                            type="submit"
                            disabled={loading}
                            className="flex-1 md:flex-none px-6 py-4 rounded-2xl font-black bg-gradient-to-r from-[#7c3aed] to-[#4c1d95] text-white shadow-xl shadow-purple-200 hover:shadow-purple-400 transition-all flex items-center justify-center gap-3 text-[10px] uppercase tracking-[0.2em] active:scale-95 disabled:opacity-50"
                        >
                            {loading ? "Syncing..." : (editData ? "Update Brand" : "Create Brand")}
                            {!loading && <CheckCircle2 size={16} strokeWidth={3} />}
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default BrandForm;
