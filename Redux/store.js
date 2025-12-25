import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./Slices/AuthSlice";
import workspaceReducer from "./Slices/WorkspaceSlice";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        workspaces: workspaceReducer,
    },
});
