"use client";
import React, { useState, useRef } from "react";
import { useForm, Controller } from "react-hook-form";
import {
    FileText,
    Image as ImageIcon,
    Target,
    Check,
    Upload,
    ArrowLeft,
    X,
    ChevronRight,
    MapPin,
    Calendar,
    DollarSign,
    Clock
} from "lucide-react";
import FormInput from "@/components/common/FormInput";
import FormSelect from "@/components/common/FormSelect";

const AdForm = ({ onBack, onSubmit, editData = null }) => {
    const [step, setStep] = useState(1);
    const [selectedAgeGroups, setSelectedAgeGroups] = useState(editData?.target_age_groups || []);
    const [imagePreview, setImagePreview] = useState(editData?.image || null);
    const [interestTags, setInterestTags] = useState(editData?.target_interests || []);
    const [interestInput, setInterestInput] = useState("");
    const [showSuccessModal, setShowSuccessModal] = useState(false);
    const fileInputRef = useRef(null);

    const { register, handleSubmit, control, formState: { errors } } = useForm({
        defaultValues: {
            title: editData?.title || "",
            location: editData?.location || "",
            description: editData?.description || "",
            radius_km: editData?.radius_km || 15,
            target_provinces: editData?.target_provinces || "",
            target_cities: editData?.target_cities || "",
            target_gender: editData ? { value: editData.target_gender?.toLowerCase(), label: editData.target_gender } : null,
            start_date: editData?.start_date || "",
            end_date: editData?.end_date || "",
            price: editData?.price || "",
            duration: editData ? { value: editData.duration?.toLowerCase(), label: editData.duration } : null,
        }
    });

    const totalSteps = 4;

    const nextStep = () => {
        if (step < totalSteps) setStep(step + 1);
    };

    const prevStep = () => {
        if (step > 1) setStep(step - 1);
    };

    const toggleAgeGroup = (age) => {
        if (selectedAgeGroups.includes(age)) {
            setSelectedAgeGroups(selectedAgeGroups.filter(a => a !== age));
        } else {
            setSelectedAgeGroups([...selectedAgeGroups, age]);
        }
    };

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => setImagePreview(reader.result);
            reader.readAsDataURL(file);
        }
    };

    const addInterestTag = (e) => {
        if (e.key === 'Enter' || e.key === ',') {
            e.preventDefault();
            const tag = interestInput.trim().replace(',', '');
            if (tag && !interestTags.includes(tag)) {
                setInterestTags([...interestTags, tag]);
                setInterestInput("");
            }
        }
    };

    const removeInterestTag = (tag) => {
        setInterestTags(interestTags.filter(t => t !== tag));
    };

    const onFormSubmit = (data) => {
        const finalData = {
            ...data,
            target_age_groups: selectedAgeGroups,
            target_interests: interestTags,
            image: imagePreview,
            target_gender: data.target_gender?.label,
            duration: data.duration?.label,
        };
        setShowSuccessModal(true);
        // The actual submission will happen when the user clicks the button in the modal
    };

    const steps = [
        { id: 1, name: "Identity", icon: <FileText size={18} /> },
        { id: 2, name: "Creative", icon: <Upload size={18} /> },
        { id: 3, name: "Targeting", icon: <Target size={18} /> },
        { id: 4, name: "Success", icon: <Check size={18} /> },
    ];

    const genderOptions = [
        { value: 'all', label: 'All Genders' },
        { value: 'male', label: 'Male' },
        { value: 'female', label: 'Female' }
    ];

    const durationOptions = [
        { value: 'day', label: 'Daily' },
        { value: 'week', label: 'Weekly' },
        { value: 'month', label: 'Monthly' }
    ];

    return (
        <div className="max-w-6xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-700 pb-20 font-poppins px-4">
            {/* Design Header */}
            <div className="bg-white rounded-[20px] p-6 shadow-[0_15px_40px_rgba(0,0,0,0.02)] border border-gray-50 flex flex-col md:flex-row md:items-center justify-between gap-6 mb-5">
                <div>
                    <h2 className="text-3xl md:text-4xl font-black text-gray-800 tracking-tighter leading-none">
                        {editData ? "Refine Campaign" : "Construct Campaign"}
                    </h2>
                    <p className="text-gray-400 text-xs font-medium mt-2 leading-relaxed">
                        Follow the multi-step configuration to launch your tactical advertisement.
                    </p>
                </div>

                <button
                    onClick={onBack}
                    className="w-full md:w-auto px-4 py-2 rounded-[15px] font-black bg-gray-100 text-gray-400 border border-gray-100 hover:text-gray-800 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-3 text-[10px] uppercase tracking-[0.2em] active:scale-95 group"
                >
                    <ArrowLeft size={18} strokeWidth={3} className="group-hover:-translate-x-1 transition-transform duration-300" />
                    Back
                </button>
            </div>

            {/* Stepper */}
            <div className="bg-white rounded-[20px] p-8 mb-5 border border-gray-50 shadow-[0_10px_30px_rgba(0,0,0,0.01)] overflow-x-auto">
                <div className="flex items-center justify-between min-w-[500px] px-8">
                    {steps.map((s, idx) => (
                        <React.Fragment key={s.id}>
                            <div className="flex flex-col items-center gap-3 relative group">
                                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-500 ${step > s.id
                                    ? "bg-green-500 text-white shadow-lg shadow-green-100"
                                    : step === s.id
                                        ? "bg-[#7c3aed] text-white shadow-xl shadow-purple-100 scale-110"
                                        : "bg-gray-50 text-gray-300 border border-gray-100"
                                    }`}>
                                    {step > s.id ? <Check size={22} strokeWidth={3} /> : s.icon}
                                </div>
                                <span className={`text-[10px] font-black uppercase tracking-[0.2em] ${step === s.id ? "text-[#7c3aed]" : "text-gray-400"}`}>
                                    {s.name}
                                </span>
                            </div>
                            {idx < steps.length - 1 && (
                                <div className={`h-[2px] w-full mx-6 rounded-full transition-all duration-700 ${step > idx + 1 ? "bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.3)]" : "bg-gray-100"}`} />
                            )}
                        </React.Fragment>
                    ))}
                </div>
            </div>

            {/* Form Card */}
            <div className="bg-white rounded-[20px] shadow-[0_30px_70px_rgba(0,0,0,0.03)] border border-gray-50 overflow-hidden mb-12 min-h-[500px]">
                <div className="p-8 md:p-12">
                    <form onSubmit={handleSubmit(onFormSubmit)}>
                        {/* Step 1: Identity */}
                        {step === 1 && (
                            <div className="animate-in fade-in slide-in-from-right-4 duration-500">
                                <div className="mb-10 border-b border-gray-50 pb-6">
                                    <h2 className="text-2xl font-black text-gray-800 tracking-tight">Campaign Identity</h2>
                                    <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mt-1">Foundational Info</p>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
                                    <FormInput
                                        label="Campaign Title"
                                        name="title"
                                        placeholder="e.g. Summer Fashion 2025"
                                        icon={FileText}
                                        register={register("title", { required: "Title is required" })}
                                        error={errors.title}
                                    />
                                    <FormInput
                                        label="Primary Location"
                                        name="location"
                                        placeholder="e.g. Faisalabad HQ"
                                        icon={MapPin}
                                        register={register("location", { required: "Location is required" })}
                                        error={errors.location}
                                    />
                                    <FormInput
                                        label="Campaign Description"
                                        name="description"
                                        placeholder="Detailed brand story and goals..."
                                        textarea={true}
                                        rows={5}
                                        className="md:col-span-2"
                                        register={register("description")}
                                    />
                                </div>
                            </div>
                        )}

                        {/* Step 2: Creative Upload */}
                        {step === 2 && (
                            <div className="animate-in fade-in slide-in-from-right-4 duration-500">
                                <div className="mb-10 border-b border-gray-50 pb-6">
                                    <h2 className="text-2xl font-black text-gray-800 tracking-tight">Ad Creative</h2>
                                    <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mt-1">Visual Branding</p>
                                </div>

                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                                    <div className="space-y-8">
                                        <div
                                            onClick={() => fileInputRef.current?.click()}
                                            className="border-2 border-dashed border-gray-100 rounded-[32px] p-12 flex flex-col items-center justify-center gap-5 bg-gray-50/50 hover:bg-white hover:border-purple-200 transition-all group cursor-pointer shadow-inner"
                                        >
                                            <input
                                                type="file"
                                                ref={fileInputRef}
                                                className="hidden"
                                                accept="image/*"
                                                onChange={handleImageUpload}
                                            />
                                            <div className="w-16 h-16 bg-white rounded-3xl shadow-lg flex items-center justify-center text-gray-200 group-hover:text-[#7c3aed] group-hover:scale-110 transition-all">
                                                <Upload size={30} />
                                            </div>
                                            <div className="text-center">
                                                <p className="font-black text-gray-600 uppercase text-[10px] tracking-widest">Select Visual Data</p>
                                                <p className="text-[9px] text-gray-300 font-bold mt-2 uppercase">PNG, JPG or WEBP (Standard Tier)</p>
                                            </div>
                                        </div>

                                        <FormInput
                                            label="External Resource URL"
                                            placeholder="https://cloud-storage.com/asset.jpg"
                                            onChange={(e) => setImagePreview(e.target.value)}
                                            icon={ImageIcon}
                                        />
                                    </div>

                                    <div className="relative group min-h-[300px]">
                                        <div className="relative h-full bg-gray-50 rounded-[24px] overflow-hidden border border-gray-100 flex items-center justify-center shadow-lg transition-transform duration-700 group-hover:scale-[1.01]">
                                            {imagePreview ? (
                                                <div className="relative w-full h-full">
                                                    <img
                                                        src={imagePreview}
                                                        alt="Preview"
                                                        className="w-full h-full object-cover"
                                                    />
                                                    <button
                                                        onClick={() => setImagePreview(null)}
                                                        className="absolute top-4 right-4 w-10 h-10 bg-white/90 hover:bg-white text-red-500 rounded-2xl flex items-center justify-center transition-all backdrop-blur-sm shadow-xl z-30"
                                                    >
                                                        <X size={18} strokeWidth={3} />
                                                    </button>
                                                </div>
                                            ) : (
                                                <div className="flex flex-col items-center gap-4 text-gray-300">
                                                    <ImageIcon size={60} className="opacity-10" />
                                                    <p className="text-[10px] font-black uppercase tracking-[0.3em] opacity-30">Neural Preview Active</p>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Step 3: Combined Targeting */}
                        {step === 3 && (
                            <div className="animate-in fade-in slide-in-from-right-4 duration-500">
                                <div className="mb-10 border-b border-gray-50 pb-6">
                                    <h2 className="text-2xl font-black text-gray-800 tracking-tight">Targeting Strategy</h2>
                                    <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mt-1">Audience Parameters</p>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
                                    <FormInput
                                        label="Service Radius (KM)"
                                        name="radius_km"
                                        type="number"
                                        placeholder="15"
                                        icon={Target}
                                        register={register("radius_km")}
                                    />

                                    <Controller
                                        name="target_gender"
                                        control={control}
                                        render={({ field }) => (
                                            <FormSelect
                                                label="Demographic Gender"
                                                options={genderOptions}
                                                field={field}
                                                placeholder="Select Gender..."
                                            />
                                        )}
                                    />

                                    <FormInput
                                        label="Target Provinces"
                                        name="target_provinces"
                                        placeholder="e.g. Punjab, Sindh"
                                        register={register("target_provinces")}
                                    />

                                    <FormInput
                                        label="Target Cities"
                                        name="target_cities"
                                        placeholder="e.g. Lahore, Islamabad"
                                        register={register("target_cities")}
                                    />

                                    <FormInput
                                        label="Interest Matrix (Type & Enter)"
                                        placeholder="fashion, lifestyle, luxury..."
                                        value={interestInput}
                                        onChange={(e) => setInterestInput(e.target.value)}
                                        onKeyDown={addInterestTag}
                                        className="md:col-span-2"
                                    />

                                    <div className="md:col-span-2 flex flex-wrap gap-2 mb-8">
                                        {interestTags.map(tag => (
                                            <span key={tag} className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-50 to-white text-[#7c3aed] text-[10px] font-black uppercase tracking-widest rounded-xl border border-purple-100 shadow-sm animate-in zoom-in-50 duration-300 group">
                                                {tag}
                                                <button onClick={() => removeInterestTag(tag)} className="text-gray-300 hover:text-red-500 transition-colors">
                                                    <X size={12} strokeWidth={3} />
                                                </button>
                                            </span>
                                        ))}
                                    </div>

                                    {/* Age Multi-select */}
                                    <div className="md:col-span-2 mt-4">
                                        <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest block mb-4 ml-1">Target Age Clusters</label>
                                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                            {["18-24", "25-34", "35-44", "45+"].map(age => (
                                                <button
                                                    key={age}
                                                    type="button"
                                                    onClick={() => toggleAgeGroup(age)}
                                                    className={`py-4 px-6 rounded-2xl font-black text-[10px] uppercase tracking-widest border transition-all duration-300 ${selectedAgeGroups.includes(age)
                                                        ? "bg-[#7c3aed] text-white border-[#7c3aed] shadow-lg shadow-purple-100 scale-[1.05]"
                                                        : "bg-white text-gray-400 border-gray-100 hover:border-purple-200"
                                                        }`}
                                                >
                                                    {age}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Step 4: Budget & Schedule */}
                        {step === 4 && (
                            <div className="animate-in fade-in slide-in-from-right-4 duration-500">
                                <div className="mb-10 border-b border-gray-50 pb-6">
                                    <h2 className="text-2xl font-black text-gray-800 tracking-tight">Timeline & Commercials</h2>
                                    <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mt-1">Final Sync</p>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
                                    <FormInput
                                        label="Active From"
                                        name="start_date"
                                        type="datetime-local"
                                        icon={Calendar}
                                        register={register("start_date")}
                                    />
                                    <FormInput
                                        label="Active Until"
                                        name="end_date"
                                        type="datetime-local"
                                        icon={Clock}
                                        register={register("end_date")}
                                    />
                                    <FormInput
                                        label="Listing Price (PKR)"
                                        name="price"
                                        type="number"
                                        placeholder="0.00"
                                        icon={DollarSign}
                                        register={register("price")}
                                    />
                                    <Controller
                                        name="duration"
                                        control={control}
                                        render={({ field }) => (
                                            <FormSelect
                                                label="Broadcast Duration"
                                                options={durationOptions}
                                                field={field}
                                                placeholder="Select Frequency..."
                                            />
                                        )}
                                    />
                                </div>

                                <div className="bg-[#7c3aed] rounded-[24px] p-8 text-white flex items-start gap-6 mt-8 animate-in slide-in-from-bottom-4 shadow-2xl shadow-purple-200">
                                    <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-md flex-shrink-0">
                                        <Check size={28} strokeWidth={3} />
                                    </div>
                                    <div>
                                        <h4 className="font-black text-lg tracking-tight">System Integrity Verified</h4>
                                        <p className="text-white/70 text-xs font-medium mt-1 leading-relaxed">
                                            Your campaign parameters are optimized. Finalizing the broadcast will sync this asset to the global directory.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Footer Controls */}
                        <div className="flex items-center justify-between pt-12 border-t border-gray-50 mt-12">
                            <div>
                                {step > 1 && (
                                    <button
                                        type="button"
                                        onClick={prevStep}
                                        className="px-10 py-4 rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] text-gray-400 hover:text-gray-800 transition-all active:scale-95"
                                    >
                                        Return
                                    </button>
                                )}
                            </div>
                            <div className="flex gap-4">
                                {step < totalSteps ? (
                                    <button
                                        type="button"
                                        onClick={nextStep}
                                        className="px-10 py-4 rounded-2xl font-black bg-[#7c3aed] text-white shadow-xl shadow-purple-100 hover:shadow-purple-400 transition-all flex items-center justify-center gap-3 text-[10px] uppercase tracking-[0.2em] active:scale-95 group"
                                    >
                                        <span>Proceed</span>
                                        <ChevronRight size={18} strokeWidth={3} className="group-hover:translate-x-1 transition-transform" />
                                    </button>
                                ) : (
                                    <button
                                        type="submit"
                                        className="px-10 py-4 rounded-2xl font-black bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-xl shadow-green-100 hover:shadow-green-400 transition-all flex items-center justify-center gap-3 text-[10px] uppercase tracking-[0.2em] active:scale-95"
                                    >
                                        Activate Campaign
                                    </button>
                                )}
                            </div>
                        </div>
                    </form>
                </div>
            </div>

            {/* Success Modal */}
            {showSuccessModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-md animate-in fade-in duration-300">
                    <div className="bg-white rounded-[28px] p-10 max-w-sm w-full shadow-2xl animate-in zoom-in-95 slide-in-from-bottom-8 duration-500 text-center border border-gray-100">
                        <div className="w-20 h-20 bg-green-50 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-inner">
                            <div className="w-14 h-14 bg-green-500 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-green-100">
                                <Check size={32} strokeWidth={4} />
                            </div>
                        </div>

                        <h2 className="text-3xl font-black text-gray-800 mb-4 tracking-tighter">Campaign Live!</h2>
                        <p className="text-gray-400 font-bold text-xs uppercase tracking-widest mb-10 leading-relaxed">
                            Your advertisement is being synced with our global network.
                        </p>

                        <div className="flex flex-col gap-3">
                            <button
                                onClick={() => {
                                    setShowSuccessModal(false);
                                    onBack(); // Go back to the ads list
                                }}
                                className="w-full py-4 bg-[#7c3aed] text-white font-black rounded-2xl shadow-xl shadow-purple-100 hover:shadow-purple-400 transition-all transform hover:-translate-y-1 active:scale-95 text-[10px] uppercase tracking-[0.2em]"
                            >
                                Dashboard Overview
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AdForm;
