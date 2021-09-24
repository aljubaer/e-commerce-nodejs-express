import { LoginPayload } from "./loginInterface";
import { login } from "./loginApi";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../../app/store";

export interface UserInfo {
    name: string | null;
    phoneNumber: string | null;
    email: string | null;
}

export interface UserState {
    value: UserInfo | null;
    status: "idle" | "loading" | "success" | "failed";
}

const initialState: UserState = {
    value: {
        name: null,
        phoneNumber: null,
        email: null,
    },
    status: "idle",
};

export const loginAsync = createAsyncThunk(
    "user/login",
    async (userData: LoginPayload) => {
        const response = await login(userData);
        return response;
    }
);

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        logout: (state) => {
            localStorage.removeItem("jwt");
            state.status = "idle";
            state.value = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginAsync.pending, (state) => {
                state.status = "loading";
            })
            .addCase(loginAsync.fulfilled, (state, action) => {
                state.status = "success";
                localStorage.setItem("jwt", action.payload.jwt.token);
                const { name, phoneNumber, email } = action.payload.user;
                state.value = { name, phoneNumber, email };
            });
    },
});

export const { logout } = userSlice.actions;

export const selectUser = (state: RootState) => state.user;

export default userSlice.reducer;
