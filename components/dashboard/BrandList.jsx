"use client";
import React from "react";
import { Plus, Box, MapPin } from "lucide-react";
import DataTable from "@/components/common/DataTable";

const BrandList = ({ brands, onCreateClick, onEditClick, onDeleteClick }) => {
    const columns = [
        {
            header: "Logo",
            minWidth: "100px",
            accessor: (row) => (
                <div className="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center border border-purple-100 shadow-sm overflow-hidden">
                    {row.image ? (
                        <img src={row.image} alt="" className="w-full h-full object-cover" />
                    ) : (
                        <span className="text-sm font-black text-[#7c3aed] uppercase">{row.business_name?.charAt(0)}</span>
                    )}
                </div>
            )
        },
        {
            header: "Business Name",
            accessor: "business_name",
            sortable: true,
            minWidth: "220px",
            cell: (row) => <span className="font-bold text-gray-800">{row.business_name}</span>
        },
        {
            header: "Description",
            accessor: "description",
            minWidth: "150px",
            cell: (row) => <span className="text-xs font-mono font-bold text-gray-400">{row.description || "N/A"}</span>
        },
        {
            header: "Business Type",
            accessor: "business_type",
            minWidth: "180px",
            cell: (row) => (
                <span className="px-2 py-1 bg-blue-50 text-blue-600 text-[10px] font-black uppercase tracking-wider rounded-lg border border-blue-100">
                    {row.business_type}
                </span>
            )
        },
        {
            header: "Location",
            accessor: "location",
            minWidth: "250px",
            cell: (row) => <span className="text-xs font-medium text-gray-600">{row.location}</span>
        },
        {
            header: "Email Address",
            accessor: "email",
            minWidth: "250px",
            cell: (row) => <span className="text-xs font-medium text-gray-600">{row.email}</span>
        },
        {
            header: "Website URL",
            accessor: "website",
            minWidth: "250px",
            cell: (row) => <span className="text-xs font-medium text-gray-600">{row.website}</span>
        },
        {
            header: "Phone Number",
            accessor: "phone",
            minWidth: "180px",
            cell: (row) => <span className="text-xs font-bold text-gray-500">{row.phone || "N/A"}</span>
        },
        {
            header: "Radius (KM)",
            accessor: "radius_km",
            minWidth: "180px",
            center: true,
            cell: (row) => (
                <div className="flex flex-col items-center">
                    <span className="text-sm font-black text-gray-700">{row.radius_km}</span>
                    <span className="text-[10px] text-gray-300 font-bold uppercase tracking-widest">Kilometers</span>
                </div>
            )
        },
        {
            header: "Full Detailed Address",
            accessor: "address",
            minWidth: "400px",
            cell: (row) => (
                <div className="flex items-start gap-2">
                    <MapPin size={12} className="text-red-400 mt-0.5 shrink-0" />
                    <span className="text-[11px] font-medium text-gray-500 leading-relaxed italic">{row.address}</span>
                </div>
            )
        }
    ];

    return (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 font-poppins px-2">
            <div className="bg-white rounded-[20px] p-6 shadow-[0_15px_40px_rgba(0,0,0,0.02)] border border-gray-50 flex flex-col md:flex-row md:items-center justify-between gap-6 mb-6 mt-2">
                <div>
                    <h2 className="text-3xl md:text-4xl font-black text-gray-800 tracking-tighter leading-none">Brands Library</h2>
                    <p className="text-gray-400 text-xs font-medium mt-2 leading-relaxed">
                        Manage and monitor all your registered brands and their business profiles.
                    </p>

                </div>

                <button
                    onClick={onCreateClick}
                    className="w-full md:w-auto px-8 py-4 rounded-[18px] font-black bg-gradient-to-r from-[#7c3aed] to-[#4c1d95] text-white shadow-lg shadow-purple-100/50 hover:shadow-purple-200 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-3 text-[10px] uppercase tracking-[0.2em] active:scale-95 group"
                >
                    <Plus size={18} strokeWidth={3} className="group-hover:rotate-90 transition-transform duration-300" />
                    Register New Asset
                </button>
            </div>

            <DataTable
                title="Detailed Brand Inventory"
                columns={columns}
                data={brands}
                actions={{
                    onEdit: onEditClick,
                    onDelete: onDeleteClick
                }}
                search={{
                    onChange: (val) => console.log("Searching:", val),
                    placeholder: "Search by any field..."
                }}
                pagination={{
                    page: 1,
                    totalRows: brands?.length || 0,
                    onPageChange: (p) => console.log("Page changed:", p),
                    limit: 10
                }}
            />
        </div>
    );
};

export default BrandList;
