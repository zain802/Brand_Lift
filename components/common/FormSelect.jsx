"use client";
import React from "react";
import Select from "react-select";

/**
 * @param {Object} props
 * @param {string} props.label - Select label
 * @param {Array} props.options - Array of { value, label }
 * @param {Object} props.field - Controller field from react-hook-form
 * @param {Object} props.error - error object
 */
const FormSelect = ({
    label,
    options,
    field,
    error,
    placeholder = "Select option...",
    className = ""
}) => {
    const customStyles = {
        control: (base, state) => ({
            ...base,
            borderRadius: '14px',
            minHeight: '54px',
            padding: '2px 8px',
            backgroundColor: 'white',
            borderColor: error ? '#fecaca' : state.isFocused ? '#e9d5ff' : '#f3f4f6',
            boxShadow: state.isFocused ? '0 0 0 4px rgba(245, 243, 255, 0.5)' : 'none',
            transition: 'all 0.3s ease',
            '&:hover': {
                borderColor: state.isFocused ? '#e9d5ff' : '#f3f4f6'
            }
        }),
        placeholder: (base) => ({
            ...base,
            color: '#d1d5db',
            fontSize: '12px',
            fontWeight: '400'
        }),
        singleValue: (base) => ({
            ...base,
            color: '#374151',
            fontSize: '14px',
            fontWeight: '600'
        }),
        menu: (base) => ({
            ...base,
            borderRadius: '20px',
            padding: '8px',
            boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
            border: '1px solid #f3f4f6',
            overflow: 'hidden',
            zIndex: 50
        }),
        option: (base, state) => ({
            ...base,
            backgroundColor: state.isSelected ? '#7c3aed' : state.isFocused ? '#f5f3ff' : 'transparent',
            color: state.isSelected ? 'white' : state.isFocused ? '#7c3aed' : '#4b5563',
            borderRadius: '12px',
            fontSize: '13px',
            fontWeight: '600',
            cursor: 'pointer',
            marginTop: '4px',
            '&:first-of-type': { marginTop: '0' },
            '&:active': {
                backgroundColor: '#7c3aed'
            }
        })
    };

    return (
        <div className={`relative mb-6 ${className}`}>
            {label && (
                <label
                    className="absolute -top-3 left-4 bg-white px-2 text-[10px] font-black text-gray-400 z-10 uppercase tracking-[0.1em]"
                >
                    {label}
                </label>
            )}

            <Select
                {...field}
                options={options}
                styles={customStyles}
                placeholder={placeholder}
                classNamePrefix="premium-select"
            />

            {error && (
                <p className="mt-1.5 ml-4 text-[10px] font-black text-red-500 uppercase tracking-widest flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span>
                    {error.message || "Option required"}
                </p>
            )}
        </div>
    );
};

export default FormSelect;
