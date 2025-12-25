"use client";
import React from "react";
import DataTable from "react-data-table-component";
import { Search, Filter, Loader2, ChevronLeft, ChevronRight } from "lucide-react";

/**
 * Premium Wrapper for react-data-table-component
 * @param {Object} props
 * @param {Array} props.columns - Columns configuration
 * @param {Array} props.data - Data array
 * @param {boolean} props.loading - Loading state
 * @param {Object} props.search - Search configuration { value, onChange, placeholder }
 * @param {string} props.title - Table title
 * @param {Object} props.pagination - Pagination config { page, totalRows, onPageChange, limit }
 */
const PremiumTable = ({
    columns,
    data,
    loading = false,
    search,
    title,
    pagination,
    actions
}) => {
    // Custom Styles for react-data-table-component
    const customStyles = {
        table: {
            style: {
                backgroundColor: 'transparent',
            },
        },
        header: {
            style: {
                display: 'none', // We use our own header
            },
        },
        headRow: {
            style: {
                backgroundColor: '#f9fafb',
                borderTopStyle: 'solid',
                borderTopWidth: '1px',
                borderTopColor: '#f3f4f6',
                borderBottomStyle: 'solid',
                borderBottomWidth: '1px',
                borderBottomColor: '#f3f4f6',
                minHeight: '52px',
            },
        },
        headCells: {
            style: {
                color: '#9ca3af',
                fontSize: '10px',
                fontWeight: '900',
                textTransform: 'uppercase',
                letterSpacing: '0.2em',
                paddingLeft: '24px',
                paddingRight: '24px',
                whiteSpace: 'nowrap',
                overflow: 'visible',
                minWidth: 'auto', // Allow header to expand
            },
        },
        cells: {
            style: {
                paddingLeft: '24px',
                paddingRight: '24px',
                color: '#374151',
                fontSize: '14px',
                fontWeight: '500',
                whiteSpace: 'nowrap',
            },
        },
        rows: {
            style: {
                minHeight: '64px',
                '&:not(:last-of-type)': {
                    borderBottomStyle: 'solid',
                    borderBottomWidth: '1px',
                    borderBottomColor: '#f9fafb',
                },
                '&:hover': {
                    backgroundColor: '#fbfcff',
                    transition: 'all 0.3s ease',
                },
            },
        },
        pagination: {
            style: {
                border: 'none',
                minHeight: '80px',
            },
        },
    };

    // --- Custom Pagination Component ---
    const CustomPagination = ({
        rowsPerPage,
        rowCount,
        onChangePage,
        currentPage,
    }) => {
        const totalPages = Math.ceil(rowCount / rowsPerPage);

        const handlePrevious = () => {
            if (currentPage > 1) onChangePage(currentPage - 1);
        };

        const handleNext = () => {
            if (currentPage < totalPages) onChangePage(currentPage + 1);
        };

        const renderPageNumbers = () => {
            const pages = [];
            const maxVisible = 5;

            let start = Math.max(1, currentPage - 2);
            let end = Math.min(totalPages, start + maxVisible - 1);

            if (end - start < maxVisible - 1) {
                start = Math.max(1, end - maxVisible + 1);
            }

            for (let i = start; i <= end; i++) {
                pages.push(
                    <button
                        key={i}
                        onClick={() => onChangePage(i)}
                        className={`w-10 h-10 rounded-xl font-bold transition-all duration-300 ${i === currentPage
                            ? "bg-[#7c3aed] text-white shadow-lg shadow-purple-200 scale-110"
                            : "text-gray-400 hover:text-gray-600 hover:bg-gray-50"
                            }`}
                    >
                        {i}
                    </button>
                );
            }

            if (end < totalPages) {
                if (end < totalPages - 1) pages.push(<span key="ell" className="text-gray-300 font-bold px-1">...</span>);
                pages.push(
                    <button
                        key={totalPages}
                        onClick={() => onChangePage(totalPages)}
                        className="w-10 h-10 rounded-xl font-bold text-gray-400 hover:text-gray-600 hover:bg-gray-50"
                    >
                        {totalPages}
                    </button>
                );
            }

            return pages;
        };

        return (
            <div className="flex items-center justify-center gap-2 py-6 border-t border-gray-50 bg-white">
                <button
                    onClick={handlePrevious}
                    disabled={currentPage === 1}
                    className="w-10 h-10 flex items-center justify-center rounded-xl bg-gray-50/50 text-gray-300 hover:bg-white hover:text-gray-600 border border-transparent hover:border-gray-100 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                >
                    <ChevronLeft size={20} strokeWidth={3} />
                </button>

                <div className="flex items-center gap-1 mx-2">
                    {renderPageNumbers()}
                </div>

                <button
                    onClick={handleNext}
                    disabled={currentPage === totalPages}
                    className="w-10 h-10 flex items-center justify-center rounded-xl bg-gray-50/50 text-gray-300 hover:bg-white hover:text-gray-600 border border-transparent hover:border-gray-100 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                >
                    <ChevronRight size={20} strokeWidth={3} />
                </button>
            </div>
        );
    };

    // If actions are provided (Edit/Delete), append them as a column
    const finalColumns = [
        ...columns,
        ...(actions ? [{
            name: "Actions",
            center: true,
            cell: (row) => (
                <div className="flex items-center justify-center gap-3">
                    {actions.onEdit && (
                        <button
                            onClick={() => actions.onEdit(row)}
                            className="h-10 w-10 flex items-center justify-center bg-gray-50/50 hover:bg-white rounded-xl text-gray-400 hover:text-[#7c3aed] transition-all shadow-sm border border-transparent hover:border-purple-100"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9" /><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" /></svg>
                        </button>
                    )}
                    {actions.onDelete && (
                        <button
                            onClick={() => actions.onDelete(row)}
                            className="h-10 w-10 flex items-center justify-center bg-gray-50/50 hover:bg-white rounded-xl text-gray-400 hover:text-red-500 transition-all shadow-sm border border-transparent hover:border-red-100"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 6h18" /><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" /><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" /><line x1="10" y1="11" x2="10" y2="17" /><line x1="14" y1="11" x2="14" y2="17" /></svg>
                        </button>
                    )}
                </div>
            )
        }] : [])
    ].map(col => {
        return {
            ...col,
            name: col.header || col.name,
            selector: col.accessor && typeof col.accessor !== 'function' ? (row => row[col.accessor]) : col.selector,
            cell: typeof col.accessor === 'function' ? col.accessor : col.cell,
            sortable: col.sortable !== undefined ? col.sortable : true,
        };
    });

    return (
        <div className="bg-white rounded-[20px] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.03)] border border-gray-50 overflow-hidden font-poppins">
            {/* Table Header Section */}
            {(title || search) && (
                <div className="px-6 py-7 border-b border-gray-50 flex flex-col md:flex-row md:items-center justify-between gap-6">
                    {title && (
                        <div>
                            <h3 className="text-xl font-black text-gray-800 tracking-tight leading-none">{title}</h3>
                            <p className="text-[10px] text-[#7c3aed] font-black uppercase tracking-[0.2em] mt-2">Live Database</p>
                        </div>
                    )}

                    <div className="flex items-center gap-4">
                        {search && (
                            <div className="relative group">
                                <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within:text-[#7c3aed] transition-colors" size={16} strokeWidth={3} />
                                <input
                                    type="text"
                                    placeholder={search.placeholder || "Interrogate data..."}
                                    value={search.value}
                                    onChange={(e) => search.onChange(e.target.value)}
                                    className="pl-12 pr-6 py-3 bg-white border border-gray-100 rounded-full focus:border-purple-200 outline-none transition-all w-full md:w-80 text-xs font-bold text-gray-700 "
                                />
                            </div>
                        )}
                    </div>
                </div>
            )}

            {/* React Data Table Component */}
            <div className="premium-datatable relative">
                <DataTable
                    columns={finalColumns}
                    data={data}
                    progressPending={loading}
                    progressComponent={
                        <div className="py-20 flex flex-col items-center gap-4">
                            <Loader2 className="animate-spin text-[#7c3aed]" size={40} />
                            <p className="text-[10px] font-black text-gray-300 uppercase tracking-widest">Syncing Records...</p>
                        </div>
                    }
                    customStyles={customStyles}
                    noDataComponent={
                        <div className="py-24 text-center">
                            <div className="w-20 h-20 bg-gray-50 rounded-[30px] flex items-center justify-center text-gray-200 mx-auto mb-6">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="8" y1="12" x2="16" y2="12" /></svg>
                            </div>
                            <h4 className="text-xl font-black text-gray-800 tracking-tight">System Empty</h4>
                            <p className="text-sm text-gray-400 mt-2 font-medium">No records matching your current criteria.</p>
                        </div>
                    }
                    highlightOnHover
                    pointerOnHover
                    pagination={!!pagination}
                    paginationServer
                    paginationTotalRows={pagination?.totalRows}
                    onChangePage={pagination?.onPageChange}
                    paginationPerPage={pagination?.limit || 10}
                    paginationComponent={CustomPagination}
                />
            </div>
        </div>
    );
};

export default PremiumTable;
