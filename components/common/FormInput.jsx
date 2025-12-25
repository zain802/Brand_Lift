"use client";
import React from "react";

/**
 * @param {Object} props
 * @param {string} props.label - Input label
 * @param {string} props.name - Input name/id
 * @param {string} props.type - Input type
 * @param {Object} props.icon - Lucide icon component
 * @param {string} props.placeholder - Placeholder text
 * @param {Object} props.register - react-hook-form register object
 * @param {Object} props.error - error object from react-hook-form
 */
const FormInput = ({
    label,
    name,
    type = "text",
    icon: Icon,
    placeholder,
    register = {},
    error,
    className = "",
    textarea = false,
    rows = 4,
    ...props
}) => {
    const Component = textarea ? "textarea" : "input";

    return (
        <div className={`relative mb-6 ${className}`}>
            {label && (
                <label
                    htmlFor={name}
                    className="absolute -top-3 left-4 bg-white px-2 text-[10px] font-black text-gray-400 z-10 uppercase tracking-[0.1em]"
                >
                    {label}
                </label>
            )}

            <div className="relative group">
                {Icon && (
                    <div className={`absolute left-5 top-1/2 -translate-y-1/2 transition-colors z-10 ${type === 'color' ? 'text-gray-300 group-focus-within:text-[#7c3aed]' : 'text-gray-300 group-focus-within:text-[#7c3aed]'}`}>
                        <Icon size={18} strokeWidth={2.5} />
                    </div>
                )}

                {type === 'color' && (
                    <div className="w-full bg-white border border-gray-100 rounded-[14px] h-[54px] flex items-center px-14 text-gray-400 text-xs font-bold uppercase tracking-widest pointer-events-none transition-all group-focus-within:border-purple-200">
                        Select Neural Color
                    </div>
                )}

                <Component
                    id={name}
                    type={type}
                    placeholder={placeholder}
                    className={`
                        transition-all duration-300
                        ${type === 'color'
                            ? 'absolute right-4 top-1/2 -translate-y-1/2 w-8 h-8 !p-0 rounded-xl border-2 border-gray-50 cursor-pointer overflow-hidden [&::-webkit-color-swatch-wrapper]:p-0 [&::-webkit-color-swatch]:border-none [&::-webkit-color-swatch]:rounded-lg shadow-sm hover:scale-110 active:scale-95'
                            : `w-full bg-white border border-gray-100 rounded-[14px] outline-none text-sm font-medium text-gray-700
                               placeholder:text-gray-300 placeholder:text-xs placeholder:font-normal
                               ${Icon ? "pl-14 pr-6" : "px-6"} 
                               ${textarea ? "py-5 resize-none" : "py-[15px]"}
                               ${error ? "border-red-200 focus:border-red-400 bg-red-50/10" : "focus:border-purple-200 focus:ring-4 focus:ring-purple-50/50"}
                               shadow-[0_4px_10px_rgba(0,0,0,0.01)]`
                        }
                    `}
                    {...register}
                    {...(textarea ? { rows } : {})}
                    {...props}
                />
            </div>

            {error && (
                <p className="mt-1.5 ml-4 text-[10px] font-black text-red-500 uppercase tracking-widest flex items-center gap-1.5 animate-in slide-in-from-top-1 duration-200">
                    <span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span>
                    {error.message || "Required field"}
                </p>
            )}
        </div>
    );
};

export default FormInput;
