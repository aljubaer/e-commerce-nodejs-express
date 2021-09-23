import { LoginPayload } from "./loginInterface";
import { login } from "./loginApi";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../../app/store";

export interface UserInfo {
    email: string | null;
}

export interface UserState {
    value: UserInfo;
    status: "idle" | "loading" | "success" | "failed";
}

const initialState: UserState = {
    value: {
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
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(loginAsync.pending, (state) => {
                state.status = "loading";
            })
            .addCase(loginAsync.fulfilled, (state, action) => {
                state.status = "success";
                localStorage.setItem("jwt", action.payload.jwt.token);
                const { email } = action.payload.user;
                state.value = { email };
            });
    },
});

export const selectUser = (state: RootState) => state.user;

export default userSlice.reducer;
