import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loader: false
}

const loaderSlicer = createSlice({
    name: "loader",
    initialState,

    reducers: {
        toggleLoader(state, action) {
            state.loader = action.payload
        }
    }
});

export const { toggleLoader } = loaderSlicer.actions;
export default loaderSlicer.reducer;
