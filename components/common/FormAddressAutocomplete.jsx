"use client";
import React, { useState, useEffect, useRef } from "react";
import { MapPin, Loader2, Search } from "lucide-react";

const FormAddressAutocomplete = ({
    label,
    name,
    placeholder,
    value,
    onChange,
    onSelect,
    error,
    className = ""
}) => {
    const [suggestions, setSuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [loading, setLoading] = useState(false);
    const [inputValue, setInputValue] = useState(value || "");
    const wrapperRef = useRef(null);

    // Sync internal state with prop value
    useEffect(() => {
        setInputValue(value || "");
    }, [value]);

    // Handle clicks outside to close suggestions
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
                setShowSuggestions(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const fetchSuggestions = async (query) => {
        if (query.length < 3) {
            setSuggestions([]);
            return;
        }

        setLoading(true);
        try {
            // Using OpenStreetMap (Nominatim) for free, no-key autocomplete
            const response = await fetch(
                `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}&addressdetails=1&limit=5&countrycodes=pk,us,ca,gb`
            );
            const data = await response.json();

            const results = data.map(item => ({
                id: item.place_id,
                description: item.display_name,
                lat: item.lat,
                lon: item.lon,
                address: item.address
            }));

            setSuggestions(results);
            setShowSuggestions(true);
        } catch (error) {
            console.error("Geocoding error:", error);
        } finally {
            setLoading(false);
        }
    };

    const handleInputChange = (e) => {
        const val = e.target.value;
        setInputValue(val);
        onChange && onChange(val);

        // Debounce search
        const timeoutId = setTimeout(() => {
            fetchSuggestions(val);
        }, 500);
        return () => clearTimeout(timeoutId);
    };

    const handleSelect = (suggestion) => {
        setInputValue(suggestion.description);
        setShowSuggestions(false);
        onSelect && onSelect(suggestion);
    };

    return (
        <div className={`relative mb-6 ${className}`} ref={wrapperRef}>
            {label && (
                <label className="absolute -top-3 left-4 bg-white px-2 text-[10px] font-black text-gray-400 z-10 uppercase tracking-[0.15em]">
                    {label}
                </label>
            )}

            <div className="relative group">
                <input
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                    onFocus={() => inputValue && suggestions.length > 0 && setShowSuggestions(true)}
                    placeholder={placeholder}
                    className={`
                        w-full bg-white border border-gray-100 rounded-[14px] outline-none transition-all duration-300 text-sm font-medium text-gray-700
                        placeholder:text-gray-300 placeholder:text-xs placeholder:font-normal py-[15px] px-6
                        ${error ? "border-red-200 focus:border-red-400 bg-red-50/10" : "focus:border-purple-200 focus:ring-4 focus:ring-purple-50/50"}
                        shadow-[0_4px_10px_rgba(0,0,0,0.01)]
                    `}
                />

                <div className="absolute right-4 top-1/2 -translate-y-1/2">
                    {loading ? (
                        <Loader2 size={16} className="animate-spin text-purple-400" />
                    ) : (
                        <Search size={16} className="text-gray-200" />
                    )}
                </div>
            </div>

            {/* Suggestions Dropdown */}
            {showSuggestions && suggestions.length > 0 && (
                <div className="absolute top-full left-0 w-full mt-2 bg-white rounded-2xl shadow-2xl border border-gray-50 z-[100] overflow-hidden animate-in fade-in slide-in-from-top-2 duration-300">
                    {suggestions.map((suggestion) => (
                        <button
                            key={suggestion.id}
                            type="button"
                            onClick={() => handleSelect(suggestion)}
                            className="w-full text-left px-5 py-3.5 hover:bg-purple-50/50 transition-colors flex items-start gap-3 border-b border-gray-50 last:border-0"
                        >
                            <MapPin size={16} className="text-purple-400 mt-0.5 shrink-0" />
                            <span className="text-xs font-semibold text-gray-600 line-clamp-2 leading-relaxed">
                                {suggestion.description}
                            </span>
                        </button>
                    ))}
                </div>
            )}

            {error && (
                <p className="mt-1.5 ml-4 text-[10px] font-black text-red-500 uppercase tracking-widest flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span>
                    {error.message || "Location required"}
                </p>
            )}
        </div>
    );
};

export default FormAddressAutocomplete;
