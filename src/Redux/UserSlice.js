import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    token: null,
    isLoggedIn: false,
    isLoading: false,
    error: null,
    success: null,
    message: null
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        login: (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;
            state.isLoading = false;
            state.error = null;
            state.success = true;
            state.message = "Login successful";
        },
        logout: (state) => {
            state.user = null;
            state.token = null;
            state.isLoggedIn = false;
            state.isLoading = false;
            state.error = null;
            state.success = true;
            state.message = "Logout successful";
        },
        setLoading: (state, action) => {
            state.isLoading = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
            state.success = false;
            state.message = "An error occurred";
        },
        clearError: (state) => {
            state.error = null;
            state.success = false;
            state.message = null;
        }
    }
})

export const { login, logout, setLoading, setError, clearError } = userSlice.actions;
export default userSlice.reducer;