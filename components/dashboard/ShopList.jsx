"use client";
import React from "react";
import { Plus, Store, Palette, Layout } from "lucide-react";
import DataTable from "@/components/common/DataTable";

const ShopList = ({ shops, onCreateClick, onEditClick, onDeleteClick }) => {
    const columns = [
        {
            header: "Logo",
            width: "130px",
            accessor: (row) => (
                <div className="w-12 h-12 rounded-2xl  flex items-center justify-center  overflow-hidden p-1">
                    {row.logo ? (
                        <img src={row.logo} alt="" className="w-full h-full object-cover rounded-xl" />
                    ) : (
                        <Store size={20} className="text-gray-300" />
                    )}
                </div>
            )
        },
        {
            header: "Shop Name",
            width: "250px",
            accessor: (row) => <span className="font-black text-gray-800 text-sm uppercase tracking-tight">{row.shop_name}</span>
        },
        {
            header: "Color Scheme",
            width: "180px",
            accessor: (row) => (
                <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-lg shadow-sm border border-gray-100" style={{ backgroundColor: row.color_scheme }}></div>
                    <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{row.color_scheme}</span>
                </div>
            )
        },
        {
            header: "Interface Theme",
            width: "200px",
            accessor: (row) => (
                <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.1em] border ${row.theme === 'dark'
                    ? 'bg-gray-900 text-white border-gray-800'
                    : 'bg-white text-gray-800 border-gray-100 shadow-sm'
                    }`}>
                    {row.theme || 'Light'}
                </span>
            )
        },

    ];

    return (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 font-poppins px-2">
            {/* Header Section */}
            <div className="bg-white rounded-[20px] p-6 shadow-[0_15px_40px_rgba(0,0,0,0.02)] border border-gray-50 flex flex-col md:flex-row md:items-center justify-between gap-6 mb-6 mt-2">
                <div>
                    <h2 className="text-3xl md:text-4xl font-black text-gray-800 tracking-tighter leading-none">Marketplace Hub</h2>
                    <p className="text-gray-400 text-xs font-medium mt-2 leading-relaxed">
                        Orchestrate your shop identities and marketplace aesthetic configurations.
                    </p>
                </div>

                <button
                    onClick={onCreateClick}
                    className="w-full md:w-auto px-8 py-4 rounded-[18px] font-black bg-gradient-to-r from-[#7c3aed] to-[#4c1d95] text-white shadow-lg shadow-purple-100/50 hover:shadow-purple-200 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-3 text-[10px] uppercase tracking-[0.2em] active:scale-95 group"
                >
                    <Plus size={18} strokeWidth={3} className="group-hover:rotate-90 transition-transform duration-300" />
                    Establish New Shop
                </button>
            </div>

            {/* List Section */}
            <DataTable
                title="Active Storefront Directory"
                columns={columns}
                data={shops}
                actions={{
                    onEdit: onEditClick,
                    onDelete: onDeleteClick
                }}
                search={{
                    onChange: (val) => console.log("Searching shops:", val),
                    placeholder: "Explore shops..."
                }}
                pagination={{
                    page: 1,
                    totalRows: shops?.length || 0,
                    onPageChange: (p) => console.log("Page shifted:", p),
                    limit: 10
                }}
            />
        </div>
    );
};

export default ShopList;
