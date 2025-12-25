"use client";
import React, { useState, useRef, useEffect } from "react";
import {
    Palette,
    ArrowLeft,
    CheckCircle2,
    Image as ImageIcon,
    Upload,
    X,
    FileText,
    Layout,
    Type,
    Hexagon
} from "lucide-react";
import { useForm, Controller } from "react-hook-form";
import { toast } from "sonner";
import apiFunction from "@/utils/apiFunction";
import { endpoints } from "@/utils/apiEndpoints";
import { useDispatch } from "react-redux";
import { addWorkspace, updateWorkspaceInState } from "@/Redux/Slices/WorkspaceSlice";
import FormInput from "@/components/common/FormInput";
import FormSelect from "@/components/common/FormSelect";

const WorkspaceForm = ({ onBack, editData = null }) => {
    const dispatch = useDispatch();
    const { postData, putData } = apiFunction();
    const [loading, setLoading] = useState(false);

    const [logoPreview, setLogoPreview] = useState(editData?.logo || null);
    const [bannerPreview, setBannerPreview] = useState(editData?.banner || null);

    const logoInputRef = useRef(null);
    const bannerInputRef = useRef(null);

    const themeOptions = [
        { value: "Modern Dark", label: "Modern Dark (Slate)" },
        { value: "Clean Light", label: "Clean Light (Default)" },
        { value: "Professional Blue", label: "Azure Professional" },
        { value: "Vibrant Orange", label: "Sunset Vibrant" }
    ];

    const { register, handleSubmit, setValue, control, reset, formState: { errors } } = useForm({
        defaultValues: {
            name: editData?.name || "",
            description: editData?.description || "",
            logo: editData?.logo || "",
            banner: editData?.banner || "",
            color_scheme: editData?.color_scheme || "#7c3aed",
            theme: editData ? themeOptions.find(o => o.value === editData.theme) : themeOptions[1]
        }
    });

    useEffect(() => {
        if (editData) {
            reset({
                name: editData.name,
                description: editData.description,
                logo: editData.logo,
                banner: editData.banner,
                color_scheme: editData.color_scheme,
                theme: themeOptions.find(o => o.value === editData.theme)
            });
            setLogoPreview(editData.logo);
            setBannerPreview(editData.banner);
        }
    }, [editData, reset]);

    const handleImageUpload = (e, type) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                if (type === 'logo') {
                    setLogoPreview(reader.result);
                    setValue('logo', reader.result);
                } else {
                    setBannerPreview(reader.result);
                    setValue('banner', reader.result);
                }
            };
            reader.readAsDataURL(file);
        }
    };

    const onSubmit = async (data) => {
        setLoading(true);
        try {
            const payload = {
                name: data.name,
                description: data.description || "",
                logo: data.logo || "",
                banner: data.banner || "",
                theme: data.theme.value,
                color_scheme: data.color_scheme
            };

            let response;
            if (editData) {
                response = await putData(`${endpoints.workspaces}${editData.id}/`, payload);
                dispatch(updateWorkspaceInState(response.data || response));
                toast.success("Workspace architecture updated!");
            } else {
                response = await postData(endpoints.workspaces, payload);
                dispatch(addWorkspace(response.data || response));
                toast.success("New workspace integrated!");
            }
            onBack();
        } catch (error) {
            toast.error("Process failed. Verify asset sizes.");
        } finally {
            setLoading(false);
        }
    };

    const UploadBox = ({ type, preview, setPreview, inputRef, label }) => (
        <div className="flex flex-col gap-4">
            <label className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] pl-1">{label}</label>
            <div
                onClick={() => inputRef.current?.click()}
                className={`relative group border-2 border-dashed border-gray-100 rounded-[32px] p-8 flex flex-col items-center justify-center gap-5 bg-gray-50/20 hover:bg-white hover:border-[#7c3aed]/40 transition-all duration-500 cursor-pointer overflow-hidden min-h-[220px] shadow-sm hover:shadow-2xl hover:shadow-purple-100/30 ${preview ? 'border-solid border-purple-100 bg-white' : ''}`}
            >
                <input type="file" ref={inputRef} className="hidden" accept="image/*" onChange={(e) => handleImageUpload(e, type)} />

                {preview ? (
                    <div className="relative w-full h-full flex items-center justify-center animate-in fade-in zoom-in duration-500">
                        <img src={preview} alt="Preview" className={`object-contain rounded-2xl max-h-[160px] ${type === 'banner' ? 'w-full shadow-lg' : 'w-32 h-32 shadow-xl shadow-purple-100'}`} />
                        <button
                            type="button"
                            onClick={(e) => {
                                e.stopPropagation();
                                setPreview(null);
                                setValue(type, "");
                            }}
                            className="absolute -top-2 -right-2 w-10 h-10 bg-white shadow-2xl border border-purple-50 rounded-[14px] flex items-center justify-center text-red-500 hover:scale-110 active:scale-95 transition-all z-20 group"
                        >
                            <X size={18} strokeWidth={3} className="group-hover:rotate-90 transition-transform" />
                        </button>
                    </div>
                ) : (
                    <>
                        <div className="w-16 h-16 bg-white rounded-3xl shadow-lg flex items-center justify-center text-[#7c3aed] group-hover:scale-110 transition-transform duration-500 border border-gray-50">
                            <Upload size={28} strokeWidth={2.5} />
                        </div>
                        <div className="text-center">
                            <p className="text-xs font-black text-gray-800 uppercase tracking-widest">Select Asset</p>
                            <p className="text-[10px] text-gray-400 mt-2 font-bold uppercase tracking-widest opacity-60 italic">SVG, PNG or JPEG</p>
                        </div>
                    </>
                )}
            </div>
        </div>
    );

    return (
        <div className="max-w-6xl mx-auto animate-in slide-in-from-bottom-8 duration-700 font-poppins pb-24">
            <div className="mb-12 flex flex-col sm:flex-row sm:items-center justify-between gap-8 px-4">
                <div className="flex items-center gap-5">
                    <div className="w-14 h-14 bg-gradient-to-tr from-blue-600 to-indigo-900 rounded-[22px] flex items-center justify-center text-white shadow-2xl shadow-blue-200">
                        <Palette size={28} />
                    </div>
                    <div>
                        <h2 className="text-3xl font-black text-gray-800 tracking-tighter">
                            {editData ? "Refine Workspace" : "Configure Workspace"}
                        </h2>
                        <p className="text-[#7c3aed] text-[10px] font-black uppercase tracking-[0.3em] mt-1">Environment Personalization</p>
                    </div>
                </div>
                <button
                    onClick={onBack}
                    className="flex items-center gap-3 px-8 py-4 bg-white text-gray-400 hover:text-gray-800 rounded-[20px] shadow-sm border border-gray-100 hover:border-gray-200 transition-all font-black uppercase tracking-widest text-[10px]"
                >
                    <ArrowLeft size={16} strokeWidth={3} />
                    Directory
                </button>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-12">
                <div className="bg-white rounded-[40px] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.04)] p-12 border border-gray-50/50 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-purple-50/30 rounded-full blur-[100px] -mr-32 -mt-32"></div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 relative z-10">
                        <UploadBox type="logo" label="Workspace Branding (Logo)" preview={logoPreview} setPreview={setLogoPreview} inputRef={logoInputRef} />
                        <UploadBox type="banner" label="Interface Hero (Banner)" preview={bannerPreview} setPreview={setBannerPreview} inputRef={bannerInputRef} />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 relative z-10">
                        <FormInput
                            label="Workspace Designation"
                            name="name"
                            icon={Type}
                            placeholder="e.g. Creative Production Hub"
                            register={register("name", { required: "Identity is mandatory" })}
                            error={errors.name}
                        />

                        <Controller
                            name="theme"
                            control={control}
                            render={({ field }) => (
                                <FormSelect
                                    label="Visual Framework (Theme)"
                                    options={themeOptions}
                                    field={field}
                                    placeholder="Select Interface Mode..."
                                />
                            )}
                        />

                        <FormInput
                            label="Theme Accent Color (HEX)"
                            name="color_scheme"
                            icon={Hexagon}
                            placeholder="#7c3aed"
                            register={register("color_scheme")}
                            className="relative"
                        >
                            <div className="absolute right-4 top-1/2 -translate-y-1/2">
                                <input type="color" {...register("color_scheme")} className="w-8 h-8 rounded-xl cursor-pointer border-4 border-white shadow-lg p-0 overflow-hidden bg-transparent" />
                            </div>
                        </FormInput>

                        <FormInput
                            label="Functional Brief (Description)"
                            name="description"
                            textarea={true}
                            rows={1}
                            placeholder="Architectural purpose of this workspace..."
                            register={register("description")}
                        />
                    </div>

                    <div className="flex items-center justify-between pt-12 mt-12 border-t border-gray-50 relative z-10">
                        <div className="hidden md:block">
                            <p className="text-[10px] font-black text-gray-300 uppercase tracking-[0.2em] mb-1">Status: Configuration Phase</p>
                            <div className="w-32 h-1 bg-gray-50 rounded-full overflow-hidden">
                                <div className="w-3/4 h-full bg-[#7c3aed] animate-pulse"></div>
                            </div>
                        </div>

                        <div className="flex items-center gap-5 w-full md:w-auto">
                            <button
                                type="button"
                                onClick={onBack}
                                className="px-10 py-5 rounded-[22px] font-black text-gray-400 hover:text-gray-600 transition-all text-[10px] uppercase tracking-widest"
                            >
                                Discard
                            </button>
                            <button
                                type="submit"
                                disabled={loading}
                                className="flex-1 md:flex-none px-12 py-5 rounded-[22px] font-black bg-[#7c3aed] text-white shadow-[0_15px_40px_rgba(124,58,237,0.3)] hover:shadow-[0_25px_50px_rgba(124,58,237,0.4)] transition-all flex items-center justify-center gap-4 text-[10px] uppercase tracking-[0.2em] active:scale-95 disabled:opacity-50"
                            >
                                {loading ? "Syncing..." : (editData ? "Commit Changes" : "Deploy Workspace")}
                                {!loading && <CheckCircle2 size={18} strokeWidth={3} />}
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default WorkspaceForm;
