"use client";
import React, { useState, useRef } from "react";
import Select from "react-select";
import {
    FileText,
    Image as ImageIcon,
    Target,
    DollarSign,
    ChevronRight,
    Check,
    MapPin,
    Users,
    Upload,
    ArrowLeft,
    X,
    Plus,
    Layout
} from "lucide-react";

const AdForm = ({ onBack, onSubmit }) => {
    const [step, setStep] = useState(1);
    const [selectedAgeGroups, setSelectedAgeGroups] = useState([]);
    const [imagePreview, setImagePreview] = useState(null);
    const [interestTags, setInterestTags] = useState([]);
    const [interestInput, setInterestInput] = useState("");
    const [showSuccessModal, setShowSuccessModal] = useState(false);
    const fileInputRef = useRef(null);

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
            reader.onloadend = () => {
                setImagePreview(reader.result);
            };
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

    // Styling constants
    const inputWrapperClass = "relative mb-6";
    const labelClass = "absolute -top-3 left-4 bg-white px-1 text-xs text-gray-400 z-10";
    const inputClass = "w-full px-4 py-3 border border-gray-200 bg-white rounded-2xl focus:outline-none focus:border-[#7c3aed] transition text-sm";

    const navButtonBase = "h-[45px] w-[120px] rounded-2xl font-bold transition-all flex items-center justify-center gap-2 text-sm font-poppins";
    const buttonPrimaryClass = `${navButtonBase} bg-[#7c3aed] text-white hover:bg-[#6d28d9] shadow-purple-100 hover:shadow-purple-200`;
    const buttonSecondaryClass = `${navButtonBase} border border-gray-200 text-gray-500 hover:bg-gray-50`;

    const customSelectStyles = {
        control: (base, state) => ({
            ...base,
            borderRadius: '16px',
            padding: '4px 8px',
            borderColor: state.isFocused ? '#7c3aed' : '#e5e7eb',
            boxShadow: 'none',
            '&:hover': {
                borderColor: '#7c3aed'
            }
        }),
        placeholder: (base) => ({
            ...base,
            color: '#9ca3af',
            fontSize: '14px'
        }),
        option: (base, state) => ({
            ...base,
            backgroundColor: state.isSelected ? '#7c3aed' : state.isFocused ? '#f5f3ff' : 'white',
            color: state.isSelected ? 'white' : '#374151',
            fontSize: '14px',
            '&:active': {
                backgroundColor: '#7c3aed'
            }
        })
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
        <div className="max-w-6xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500 pb-20 font-poppins">
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
                <button
                    onClick={onBack}
                    className="flex items-center gap-2 text-gray-400 hover:text-gray-800 transition-colors group"
                >
                    <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                    <span className="font-bold">Back to Campaigns</span>
                </button>
                <div className="bg-purple-50 px-4 py-1.5 rounded-full">
                    <span className="text-sm font-bold text-[#7c3aed]">Step {step} of 4</span>
                </div>
            </div>

            {/* Stepper */}
            <div className="bg-white rounded-[15px] p-6 mb-4 mt-2 overflow-x-auto">
                <div className="flex items-center justify-between min-w-[500px] px-8">
                    {steps.map((s, idx) => (
                        <React.Fragment key={s.id}>
                            <div className="flex flex-col items-center gap-2 relative">
                                <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${step > s.id
                                    ? "bg-green-500 text-white"
                                    : step === s.id
                                        ? "bg-[#7c3aed] text-white shadow-lg shadow-purple-200"
                                        : "bg-gray-100 text-gray-400"
                                    }`}>
                                    {step > s.id ? <Check size={20} /> : s.icon}
                                </div>
                                <span className={`text-[10px] font-bold uppercase tracking-widest ${step === s.id ? "text-[#7c3aed]" : "text-gray-400"}`}>
                                    {s.name}
                                </span>
                            </div>
                            {idx < steps.length - 1 && (
                                <div className={`h-[2px] w-full mx-6 rounded-full transition-colors duration-500 ${step > s.id + 1 ? "bg-green-500" : "bg-gray-100"}`} />
                            )}
                        </React.Fragment>
                    ))}
                </div>
            </div>

            {/* Form Card */}
            <div className="bg-white rounded-[15px] overflow-hidden mb-12 min-h-[500px]">
                <div className="p-8 md:p-12">
                    <form onSubmit={(e) => e.preventDefault()}>
                        {/* Step 1: Identity */}
                        {step === 1 && (
                            <div className="animate-in fade-in slide-in-from-right-4 duration-500">
                                <div className="mb-10 border-b border-gray-50 pb-6">
                                    <h2 className="text-2xl font-black text-gray-800">Campaign Identity</h2>
                                    <p className="text-gray-400 text-sm mt-1">Start by defining how your campaign will be identified.</p>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-2">
                                    <div className={inputWrapperClass}>
                                        <label className={labelClass}>Campaign Title</label>
                                        <input type="text" placeholder="e.g. Summer Fashion New Collection 2025" className={inputClass} />
                                    </div>
                                    <div className={inputWrapperClass}>
                                        <label className={labelClass}>Location</label>
                                        <input type="text" placeholder="e.g. Faisalabad HQ" className={inputClass} />
                                    </div>
                                    <div className={`md:col-span-2 ${inputWrapperClass}`}>
                                        <label className={labelClass}>Description / Brand Details</label>
                                        <textarea
                                            rows={6}
                                            placeholder="Get the best chic and editorial styles with up to 50% OFF..."
                                            className={`${inputClass} resize-none py-4`}
                                        ></textarea>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Step 2: Creative Upload */}
                        {step === 2 && (
                            <div className="animate-in fade-in slide-in-from-right-4 duration-500">
                                <div className="mb-10 border-b border-gray-50 pb-6">
                                    <h2 className="text-2xl font-black text-gray-800">Ad Creative</h2>
                                    <p className="text-gray-400 text-sm mt-1">Upload the visual content for your campaign.</p>
                                </div>

                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                                    <div className="space-y-8">
                                        <div
                                            onClick={() => fileInputRef.current?.click()}
                                            className="border-2 border-dashed border-gray-100 rounded-[32px] p-12 flex flex-col items-center justify-center gap-5 bg-gray-50/50 hover:bg-purple-50/20 hover:border-purple-200 transition-all group cursor-pointer"
                                        >
                                            <input
                                                type="file"
                                                ref={fileInputRef}
                                                className="hidden"
                                                accept="image/*"
                                                onChange={handleImageUpload}
                                            />
                                            <div className="w-16 h-16 bg-white rounded-3xl shadow-lg flex items-center justify-center text-gray-300 group-hover:text-[#7c3aed] group-hover:scale-110 transition-all">
                                                <Upload size={30} />
                                            </div>
                                            <div className="text-center">
                                                <p className="font-bold text-gray-700">Click to Upload Image</p>
                                                <p className="text-xs text-gray-400 mt-2">PNG, JPG or WEBP (Max. 5MB)</p>
                                            </div>
                                        </div>
                                        <div className={inputWrapperClass}>
                                            <label className={labelClass}>Or Paste External URL</label>
                                            <input
                                                type="text"
                                                placeholder="https://..."
                                                onChange={(e) => setImagePreview(e.target.value)}
                                                className={inputClass}
                                            />
                                        </div>
                                    </div>

                                    <div className="relative group min-h-[300px]">
                                        <div className="absolute -inset-1 bg-gradient-to-r from-[#2e1065] to-[#7c3aed] rounded-[24px] blur opacity-10 group-hover:opacity-20 transition duration-1000"></div>
                                        <div className="relative h-full bg-gray-50 rounded-[20px] overflow-hidden border border-gray-100 flex items-center justify-center">
                                            {imagePreview ? (
                                                <div className="relative w-full h-full group/img">
                                                    <img
                                                        src={imagePreview}
                                                        alt="Preview"
                                                        className="w-full h-full object-cover"
                                                    />
                                                    <button
                                                        onClick={() => setImagePreview(null)}
                                                        className="absolute top-2 right-2 w-7 h-7 bg-black/50 hover:bg-black/80 text-white rounded-full flex items-center justify-center transition-all backdrop-blur-sm z-30 shadow-lg"
                                                        title="Remove Image"
                                                    >
                                                        <X size={14} />
                                                    </button>
                                                </div>
                                            ) : (
                                                <div className="flex flex-col items-center gap-3 text-gray-300">
                                                    <ImageIcon size={60} className="opacity-10" />
                                                    <p className="text-xs font-black uppercase tracking-widest opacity-30">Live Visual Preview</p>
                                                </div>
                                            )}
                                            {imagePreview && (
                                                <div className="absolute bottom-4 left-4 right-4 p-4 bg-white/90 backdrop-blur-md rounded-xl shadow-sm border border-gray-100/50">
                                                    <p className="text-[10px] font-black text-[#7c3aed] uppercase tracking-widest mb-1">Active Preview</p>
                                                    <p className="text-xs font-bold text-gray-800 truncate">Ad Creative Preview</p>
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
                                    <h2 className="text-2xl font-black text-gray-800">Targeting Strategy</h2>
                                    <p className="text-gray-400 text-sm mt-1">Define your location, radius and ideal audience parameters.</p>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-2">
                                    <div className={inputWrapperClass}>
                                        <label className={labelClass}>Radius (km)</label>
                                        <input type="number" placeholder="15" className={inputClass} />
                                    </div>
                                    <div className={inputWrapperClass}>
                                        <label className={labelClass}>Target Provinces (Comma Separated)</label>
                                        <input type="text" placeholder="e.g. Punjab, Sindh" className={inputClass} />
                                    </div>
                                    <div className={inputWrapperClass}>
                                        <label className={labelClass}>Target Cities (Comma Separated)</label>
                                        <input type="text" placeholder="e.g. Faisalabad, Lahore, Karachi" className={inputClass} />
                                    </div>
                                    <div className={inputWrapperClass}>
                                        <label className={labelClass}>Target Gender</label>
                                        <Select
                                            options={genderOptions}
                                            styles={customSelectStyles}
                                            placeholder="Select Gender"
                                            className="text-sm"
                                        />
                                    </div>
                                    <div className={inputWrapperClass}>
                                        <label className={labelClass}>Interests (Type & Enter)</label>
                                        <div className="flex flex-col gap-3">
                                            <input
                                                type="text"
                                                placeholder="fashion, shopping, lifestyle..."
                                                value={interestInput}
                                                onChange={(e) => setInterestInput(e.target.value)}
                                                onKeyDown={addInterestTag}
                                                className={inputClass}
                                            />
                                        </div>
                                    </div>
                                    <div className="md:col-span-1 flex flex-wrap gap-2 pt-2">
                                        {interestTags.map(tag => (
                                            <span key={tag} className="flex items-center gap-1.5 px-3 py-1.5 bg-purple-50 text-[#7c3aed] text-xs font-bold rounded-full border border-purple-100 animate-in zoom-in-50 duration-300">
                                                {tag}
                                                <button onClick={() => removeInterestTag(tag)} className="hover:text-red-500 transition-colors">
                                                    <X size={12} />
                                                </button>
                                            </span>
                                        ))}
                                    </div>

                                    {/* Age Multi-select */}
                                    <div className="md:col-span-2 mb-8 mt-4">
                                        <label className="text-sm font-bold text-gray-700 block mb-4 ml-1">Ideal Age Range (Target Age Groups)</label>
                                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                            {["18-24", "25-34", "35-44", "45+"].map(age => (
                                                <button
                                                    key={age}
                                                    type="button"
                                                    onClick={() => toggleAgeGroup(age)}
                                                    className={`py-3.5 px-5 rounded-2xl font-bold text-xs border transition-all ${selectedAgeGroups.includes(age)
                                                        ? "bg-[#7c3aed] text-white border-[#7c3aed] shadow-lg shadow-purple-100"
                                                        : "bg-white text-gray-400 border-gray-100 hover:border-gray-200"
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
                                    <h2 className="text-2xl font-black text-gray-800">Budget & Timeline</h2>
                                    <p className="text-gray-400 text-sm mt-1">Finalize your campaign duration and cost (Listing Price).</p>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-2">
                                    <div className={inputWrapperClass}>
                                        <label className={labelClass}>Start Date</label>
                                        <input type="datetime-local" className={`${inputClass} text-gray-500`} />
                                    </div>
                                    <div className={inputWrapperClass}>
                                        <label className={labelClass}>End Date</label>
                                        <input type="datetime-local" className={`${inputClass} text-gray-500`} />
                                    </div>
                                    <div className={inputWrapperClass}>
                                        <label className={labelClass}>Listing Price (PKR)</label>
                                        <input type="number" placeholder="e.g. 1500" className={inputClass} />
                                    </div>
                                    <div className={inputWrapperClass}>
                                        <label className={labelClass}>Duration</label>
                                        <Select
                                            options={durationOptions}
                                            styles={customSelectStyles}
                                            placeholder="Select Duration"
                                            className="text-sm"
                                        />
                                    </div>
                                </div>

                                <div className="bg-purple-50 rounded-2xl p-8 border border-purple-100/50 flex items-start gap-5 mt-6 animate-in slide-in-from-bottom-2">
                                    <div className="w-12 h-12 bg-[#7c3aed] rounded-xl flex items-center justify-center text-white flex-shrink-0">
                                        <Check size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-800 text-lg">Ready for Submission</h4>
                                        <p className="text-sm text-gray-500 mt-1 leading-relaxed">
                                            Your campaign data is ready. Once launched, it will be mapped to the server for processing.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Footer Controls */}
                        <div className=" flex items-center justify-between pt-10">
                            <div>
                                {step > 1 && (
                                    <button type="button" onClick={prevStep} className={buttonSecondaryClass}>
                                        Previous
                                    </button>
                                )}
                            </div>
                            <div className="flex gap-4">
                                {step < totalSteps ? (
                                    <button type="button" onClick={nextStep} className={buttonPrimaryClass}>
                                        <span>Continue</span>
                                        <ChevronRight size={18} />
                                    </button>
                                ) : (
                                    <button
                                        type="button"
                                        onClick={() => setShowSuccessModal(true)}
                                        className={buttonPrimaryClass}
                                    >
                                        Launch Ad
                                    </button>
                                )}
                            </div>
                        </div>
                    </form>
                </div>
            </div>

            {/* Success Modal */}
            {showSuccessModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm animate-in fade-in duration-300">
                    <div className="bg-white rounded-[28px] p-6 md:p-10 max-w-sm w-full shadow-2xl animate-in zoom-in-95 slide-in-from-bottom-8 duration-500 text-center">
                        <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6 transition-all duration-1000">
                            <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white shadow-lg shadow-green-100">
                                <Check size={28} strokeWidth={3} />
                            </div>
                        </div>

                        <h2 className="text-2xl font-black text-gray-800 mb-3 tracking-tight">Campaign Launched!</h2>
                        <p className="text-gray-500 font-medium mb-8 leading-relaxed text-sm">
                            Your campaign has been successfully created and is now ready for processing.
                        </p>

                        <div className="flex flex-col gap-2">
                            <button
                                onClick={() => {
                                    const finalData = {
                                        selectedAgeGroups,
                                        interestTags,
                                        image: imagePreview,
                                    };
                                    onSubmit(finalData);
                                }}
                                className="w-full py-3 bg-[#7c3aed] text-white font-black rounded-2xl shadow-xl shadow-purple-100 hover:shadow-purple-200 transition-all transform hover:-translate-y-1 active:scale-95 text-base"
                            >
                                Confirm & View Ads
                            </button>
                            <button
                                onClick={() => setShowSuccessModal(false)}
                                className="text-gray-400 font-bold hover:text-gray-600 transition-colors py-1 text-sm"
                            >
                                Go Back
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AdForm;
