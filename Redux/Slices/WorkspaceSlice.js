import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    workspaces: [],
    pagination: {
        total: 0,
        page: 1,
        limit: 10,
        totalPages: 1
    },
    loading: false,
    error: null,
    searchQuery: "",
};

const workspaceSlice = createSlice({
    name: "workspaces",
    initialState,
    reducers: {
        setWorkspaces: (state, action) => {
            state.workspaces = action.payload.data;
            state.pagination = action.payload.pagination;
            state.loading = false;
        },
        addWorkspace: (state, action) => {
            state.workspaces = [action.payload, ...state.workspaces];
        },
        updateWorkspaceInState: (state, action) => {
            const index = state.workspaces.findIndex(ws => ws.id === action.payload.id);
            if (index !== -1) {
                state.workspaces[index] = action.payload;
            }
        },
        deleteWorkspaceFromState: (state, action) => {
            state.workspaces = state.workspaces.filter(ws => ws.id !== action.payload);
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
            state.loading = false;
        },
        setSearchQuery: (state, action) => {
            state.searchQuery = action.payload;
        },
        setPage: (state, action) => {
            state.pagination.page = action.payload;
        }
    }
});

export const {
    setWorkspaces,
    addWorkspace,
    updateWorkspaceInState,
    deleteWorkspaceFromState,
    setLoading,
    setError,
    setSearchQuery,
    setPage
} = workspaceSlice.actions;

export const selectAllWorkspaces = (state) => state.workspaces.workspaces;
export const selectWorkspaceLoading = (state) => state.workspaces.loading;
export const selectWorkspacePagination = (state) => state.workspaces.pagination;
export const selectWorkspaceSearchQuery = (state) => state.workspaces.searchQuery;

export default workspaceSlice.reducer;
