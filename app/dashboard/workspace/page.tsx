"use client";
import React, { useState, useEffect } from "react";
import {
    Plus, Briefcase, CheckCircle2,
    Clock, Layout, ImageIcon, Loader2
} from "lucide-react";
import WorkspaceForm from "@/components/dashboard/WorkspaceForm";
import { useDispatch, useSelector } from "react-redux";
import apiFunction from "@/utils/apiFunction";
import { endpoints } from "@/utils/apiEndpoints";
import {
    setWorkspaces,
    setLoading,
    setError,
    deleteWorkspaceFromState,
    selectAllWorkspaces,
    selectWorkspaceLoading,
    selectWorkspacePagination,
    setPage,
    setSearchQuery,
    selectWorkspaceSearchQuery
} from "@/Redux/Slices/WorkspaceSlice";
import { toast } from "sonner";
import DataTable from "@/components/common/DataTable";

export default function WorkspacePage() {
    const dispatch = useDispatch();
    const { getData, deleteData } = apiFunction();

    const workspaces = useSelector(selectAllWorkspaces);
    const loading = useSelector(selectWorkspaceLoading);
    const pagination = useSelector(selectWorkspacePagination);
    const searchQuery = useSelector(selectWorkspaceSearchQuery);

    const [showForm, setShowForm] = useState(false);
    const [editData, setEditData] = useState(null);

    const fetchWorkspaces = async (page = pagination.page, search = searchQuery) => {
        dispatch(setLoading(true));
        try {
            const skip = (page - 1) * pagination.limit;
            const query = `?skip=${skip}&limit=${pagination.limit}${search ? `&search=${search}` : ''}`;
            const response = await getData(endpoints.workspaces + query);

            if (response) {
                const items = Array.isArray(response)
                    ? response
                    : (response.data || response.items || response.workspaces || []);

                dispatch(setWorkspaces({
                    data: items,
                    pagination: {
                        ...pagination,
                        page,
                        total: response.total || response.count || items.length,
                        totalPages: response.totalPages || Math.ceil((response.total || response.count || items.length) / pagination.limit) || 1
                    }
                }));
            }
        } catch (error: any) {
            dispatch(setError(error.message));
            toast.error("Failed to fetch workspaces");
        }
    };

    useEffect(() => {
        fetchWorkspaces();
    }, [pagination.page]);

    const handleSearchChange = (val: any) => {
        dispatch(setSearchQuery(val));
        // Debounce or trigger search could be here
    };

    const handleDelete = async (row: any) => {
        if (!window.confirm(`Are you sure you want to delete ${row.name}?`)) return;
        try {
            await deleteData(`${endpoints.workspaces}${row.id}/`);
            dispatch(deleteWorkspaceFromState(row.id));
            toast.success("Workspace deleted successfully");
        } catch (error: any) {
            toast.error("Delete failed");
        }
    };

    const handleEdit = (row: any) => {
        setEditData(row);
        setShowForm(true);
    };

    const handleCreateNew = () => {
        setEditData(null);
        setShowForm(true);
    };

    const statsData = [
        { label: "Total Workspaces", value: pagination.total || workspaces.length, icon: <Briefcase size={20} />, color: "#7c3aed", bg: "bg-purple-50", hoverBg: "hover:bg-[#7c3aed]" },
        { label: "Active", value: workspaces.filter((w: any) => w.status !== 'Archived').length, icon: <CheckCircle2 size={20} />, color: "#22c55e", bg: "bg-green-50", hoverBg: "hover:bg-[#22c55e]" },
        { label: "Archived", value: workspaces.filter((w: any) => w.status === 'Archived').length, icon: <Clock size={20} />, color: "#f97316", bg: "bg-orange-50", hoverBg: "hover:bg-[#f97316]" },
        { label: "Page", value: pagination.page, icon: <Layout size={20} />, color: "#4c89ff", bg: "bg-blue-50", hoverBg: "hover:bg-[#4c89ff]" },
    ];

    const columns = [
        {
            header: "Workspace Logo",
            accessor: (row: any) => (
                <div className="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center text-purple-600 font-bold overflow-hidden shadow-sm border border-purple-100">
                    {row.logo ? (
                        <img src={row.logo} alt="" className="w-full h-full object-cover" />
                    ) : (
                        <ImageIcon size={18} className="opacity-30" />
                    )}
                </div>
            )
        },
        {
            header: "Name",
            accessor: (row: any) => (
                <div>
                    <p className="font-black text-gray-800 text-sm">{row.name}</p>
                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">{row.theme || "Standard"}</p>
                </div>
            )
        },
        {
            header: "Description",
            accessor: (row: any) => (
                <p className="text-xs text-gray-500 font-medium max-w-[250px] line-clamp-1">{row.description || "No description provided."}</p>
            )
        },
        {
            header: "Visuals",
            accessor: (row: any) => (
                <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full border-2 border-white shadow-sm" style={{ backgroundColor: row.color_scheme || '#eee' }} title="Color Scheme"></div>
                    <div className="w-10 h-6 rounded-md bg-gray-100 overflow-hidden border border-gray-200" title="Banner Preview">
                        {row.banner && <img src={row.banner} className="w-full h-full object-cover" />}
                    </div>
                </div>
            )
        }
    ];

    if (showForm) {
        return <WorkspaceForm editData={editData} onBack={() => {
            setShowForm(false);
            setEditData(null);
            fetchWorkspaces();
        }} />;
    }

    return (
        <div className="max-w-7xl mx-auto animate-in fade-in duration-700 font-poppins px-4">
            {/* Header Section */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-12">
                <div>
                    <h1 className="text-3xl md:text-5xl font-black text-gray-800 tracking-tighter">Workspaces</h1>
                    <p className="text-gray-500 mt-2 font-medium">Architect your business environments and brand ecosystems.</p>
                </div>
                <button
                    onClick={handleCreateNew}
                    className="flex items-center justify-center gap-3 px-10 py-5 bg-[#7c3aed] text-white font-black rounded-3xl shadow-[0_15px_30px_rgba(124,58,237,0.2)] hover:shadow-[0_20px_40px_rgba(124,58,237,0.3)] transition-all transform hover:-translate-y-1 active:scale-95 whitespace-nowrap text-xs uppercase tracking-widest"
                >
                    <Plus size={20} strokeWidth={3} />
                    Integrate New Workspace
                </button>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                {statsData.map((stat, index) => (
                    <div key={index} className={`bg-white p-7 rounded-[32px] shadow-[0_15px_40px_rgba(0,0,0,0.02)] flex items-center gap-6 group hover:scale-[1.02] transition-all cursor-pointer border border-gray-50 relative overflow-hidden`}>
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

            {/* Global DataTable */}
            <DataTable
                title="Active Workspace Ecosystem"
                columns={columns}
                data={workspaces}
                loading={loading}
                search={{
                    value: searchQuery,
                    onChange: handleSearchChange,
                    placeholder: "Interrogate workspaces..."
                }}
                pagination={{
                    page: pagination.page,
                    totalPages: pagination.totalPages,
                    onPageChange: (p: number) => dispatch(setPage(p))
                }}
                actions={{
                    onEdit: handleEdit,
                    onDelete: handleDelete
                }}
            />
        </div>
    );
}
