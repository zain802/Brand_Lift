/**
 * AuthSlice for Redux state management.
 */
export const selectUser = (state) => state.auth?.user || null;

// Initial state and slice logic can be added here.
const initialState = {
    user: null,
};

export default initialState;
