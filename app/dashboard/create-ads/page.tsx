"use client";
import React, { useState } from "react";
import {
    Plus, Target, DollarSign,
    Image as ImageIcon, CheckCircle2, PlayCircle, Clock,
    MapPin, Users, Calendar, Tags
} from "lucide-react";
import AdForm from "@/components/dashboard/AdForm";
import DataTable from "@/components/common/DataTable";

interface Ad {
    id: number;
    title: string;
    description: string;
    location: string;
    radius_km: number;
    target_provinces: string;
    target_cities: string;
    target_gender: string;
    target_interests: string[];
    target_age_groups: string[];
    start_date: string;
    end_date: string;
    price: number;
    duration: string;
    status: string;
    image: string;
}

export default function CreateAdsPage() {
    const [showForm, setShowForm] = useState(false);

    // Mock data updated to match all AdForm inputs
    const ads: Ad[] = [
        {
            id: 1,
            title: "Summer Fashion",
            description: "Get the best chic and editorial styles with up to 50% OFF.",
            location: "Faisalabad HQ",
            radius_km: 15,
            target_provinces: "Punjab",
            target_cities: "Faisalabad, Lahore",
            target_gender: "All",
            target_interests: ["Fashion", "Lifestyle", "Luxury"],
            target_age_groups: ["18-24", "25-34"],
            start_date: "2025-12-25 10:00",
            end_date: "2026-01-25 10:00",
            price: 1500,
            duration: "Weekly",
            status: "Running",
            image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=400&h=400&fit=crop"
        },
        {
            id: 2,
            title: "Winter Comfort ",
            description: "Cozy up with our premium artisan coffee blends.",
            location: "Lahore Central",
            radius_km: 10,
            target_provinces: "Punjab",
            target_cities: "Lahore",
            target_gender: "Male",
            target_interests: ["Coffee", "Relaxation"],
            target_age_groups: ["25-34", "35-44"],
            start_date: "2025-12-20 12:00",
            end_date: "2026-01-20 12:00",
            price: 5000,
            duration: "Monthly",
            status: "Pending",
            image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=400&fit=crop"
        },
    ];

    const columns = [
        {
            header: "Banner",
            width: "150px",
            accessor: (row: Ad) => (
                <div className="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center border border-purple-100 shadow-sm overflow-hidden">
                    {row.image ? (
                        <img src={row.image} alt="" className="w-full h-full object-cover" />
                    ) : (
                        <ImageIcon size={18} className="text-purple-200" />
                    )}
                </div>
            )
        },
        {
            header: "Title",
            width: "200px",
            accessor: (row: any) => <span className="font-bold text-gray-800 uppercase tracking-tight text-[11px]">{row.title}</span>
        },
        {
            header: "Description",
            width: "250px",
            accessor: (row: any) => <p className="text-[10px] text-gray-400 font-medium line-clamp-2 leading-relaxed">{row.description}</p>
        },
        {
            header: "Location",
            width: "150px",
            accessor: (row: any) => <span className="text-[10px] font-black text-gray-500 uppercase">{row.location}</span>
        },
        {
            header: "Radius",
            width: "130px",
            accessor: (row: any) => <span className="text-[10px] font-black text-purple-500 bg-purple-50 px-2 py-1 rounded-lg">{row.radius_km} KM</span>
        },
        {
            header: "Provinces",
            width: "150px",
            accessor: (row: any) => <span className="text-[10px] font-black text-blue-500 bg-blue-50 px-2 py-1 rounded-lg uppercase">{row.target_provinces}</span>
        },
        {
            header: "Cities",
            width: "200px",
            accessor: (row: any) => <span className="text-[10px] font-bold text-gray-600 uppercase tracking-tight">{row.target_cities}</span>
        },
        {
            header: "Gender",
            width: "130px",
            accessor: (row: any) => <span className="text-[10px] font-black text-orange-500 uppercase">{row.target_gender}</span>
        },
        {
            header: "Age Groups",
            width: "180px",
            accessor: (row: any) => (
                <div className="flex flex-wrap gap-1">
                    {row.target_age_groups.map((age: any) => (
                        <span key={age} className="text-[9px] font-black text-gray-400 bg-gray-50 px-1.5 py-0.5 rounded border border-gray-100">{age}</span>
                    ))}
                </div>
            )
        },
        {
            header: "Interests",
            width: "200px",
            accessor: (row: any) => (
                <div className="flex flex-wrap gap-1">
                    {row.target_interests.map((tag: any) => (
                        <span key={tag} className="text-[9px] font-black text-purple-400 px-1">#{tag}</span>
                    ))}
                </div>
            )
        },
        {
            header: "Start Date",
            width: "150px",
            accessor: (row: any) => <span className="text-[10px] font-bold text-gray-400">{row.start_date}</span>
        },
        {
            header: "End Date",
            width: "150px",
            accessor: (row: any) => <span className="text-[10px] font-bold text-gray-400">{row.end_date}</span>
        },
        {
            header: "Price",
            width: "120px",
            accessor: (row: any) => <span className="text-sm font-black text-green-600 tracking-tighter">PKR {row.price.toLocaleString()}</span>
        },
        {
            header: "Duration",
            width: "150px",
            accessor: (row: any) => <span className="px-2 py-1 bg-gray-50 text-gray-500 text-[9px] font-black uppercase rounded-lg border border-gray-100">{row.duration}</span>
        },
        {
            header: "Status",
            width: "120px",
            accessor: (row: any) => (
                <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.1em] ${row.status === 'Running' ? 'bg-blue-50 text-blue-500 border border-blue-100' : 'bg-orange-50 text-orange-500 border border-orange-100'
                    }`}>
                    {row.status}
                </span>
            )
        }
    ];

    const statsData = [
        { label: "Total Ads", value: "24", icon: <Target size={20} />, color: "#7c3aed", bg: "bg-purple-50" },
        { label: "Complete", value: "12", icon: <CheckCircle2 size={20} />, color: "#22c55e", bg: "bg-green-50" },
        { label: "Running", value: "08", icon: <PlayCircle size={20} />, color: "#4c89ff", bg: "bg-blue-50" },
        { label: "Pending", value: "04", icon: <Clock size={20} />, color: "#f97316", bg: "bg-orange-50" },
    ];

    if (showForm) {
        return <AdForm onBack={() => setShowForm(false)} onSubmit={() => setShowForm(false)} />;
    }

    return (
        <div className="max-w-[1600px] mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500 font-poppins px-2">
            {/* Header Section */}
            <div className="bg-white rounded-[20px] p-6 shadow-[0_15px_40px_rgba(0,0,0,0.02)] border border-gray-50 flex flex-col md:flex-row md:items-center justify-between gap-6 mb-6 mt-2">
                <div>
                    <h2 className="text-3xl md:text-4xl font-black text-gray-800 tracking-tighter leading-none">Campaign Hub</h2>
                    <p className="text-gray-400 text-xs font-medium mt-2 leading-relaxed">
                        Orchestrate your brand campaigns and optimize advertisement performance.
                    </p>
                </div>

                <button
                    onClick={() => setShowForm(true)}
                    className="w-full md:w-auto px-8 py-4 rounded-[18px] font-black bg-gradient-to-r from-[#7c3aed] to-[#4c1d95] text-white shadow-lg shadow-purple-100/50 hover:shadow-purple-200 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-3 text-[10px] uppercase tracking-[0.2em] active:scale-95 group"
                >
                    <Plus size={18} strokeWidth={3} className="group-hover:rotate-90 transition-transform duration-300" />
                    Establish Campaign
                </button>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
                {statsData.map((stat, index) => (
                    <div key={index} className="bg-white p-7 rounded-[20px] shadow-[0_15px_40px_rgba(0,0,0,0.02)] flex items-center gap-6 group hover:scale-[1.02] transition-all cursor-pointer border border-gray-50 relative overflow-hidden">
                        <div className={`w-14 h-14 ${stat.bg} rounded-2xl flex items-center justify-center transition-all group-hover:bg-opacity-80`} style={{ color: stat.color }}>
                            {stat.icon}
                        </div>
                        <div>
                            <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">{stat.label}</p>
                            <h4 className="text-3xl font-black text-gray-800 tracking-tight">{stat.value}</h4>
                        </div>
                        <div className="absolute top-0 right-0 w-24 h-24 bg-gray-50/10 rounded-full -mr-10 -mt-10 group-hover:scale-150 transition-transform duration-700"></div>
                    </div>
                ))}
            </div>

            {/* DataTable Section */}
            <DataTable
                title="Active Promotion Matrix"
                columns={columns}
                data={ads}
                loading={false}
                search={{
                    onChange: (v: any) => console.log(v),
                    placeholder: "Interrogate campaigns..."
                }}
                pagination={{
                    page: 1,
                    totalRows: ads.length,
                    onPageChange: (p: any) => console.log(p),
                    limit: 10
                }}
                actions={{
                    onEdit: (r: any) => console.log("Edit", r),
                    onDelete: (r: any) => alert(`Delete ${r.title}?`)
                }}
            />
        </div>
    );
}
