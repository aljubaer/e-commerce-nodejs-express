import { fetchAllWishLists, removeFromWish } from "./wishlistApi";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface WishState {
    value: any[];
    status: "idle" | "loading" | "success" | "failed";
}

const initialState: WishState = {
    value: [],
    status: "idle",
};

export const loadAsync = createAsyncThunk("wish/load", async () => {
    const response = await fetchAllWishLists();
    return response;
});

export const removeAsync = createAsyncThunk(
    "wish/remove",
    async (wishId: number) => {
        await removeFromWish(wishId);
        const response = await fetchAllWishLists();
        return response;
    }
);

export const wishSlice = createSlice({
    name: "wish",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(loadAsync.pending, (state) => {
                state.status = "loading";
            })
            .addCase(loadAsync.fulfilled, (state, action) => {
                state.status = "success";
                console.log(state.value, action.payload);
                state.value = action.payload.data;
            })
            .addCase(removeAsync.pending, (state) => {
                state.status = "loading";
            })
            .addCase(removeAsync.fulfilled, (state, action) => {
                state.status = "success";
                state.value = action.payload.data;
            });
    },
});

export const selectWish = (state: RootState) => state.wish;

export default wishSlice.reducer;
