import { createSlice } from "@reduxjs/toolkit";

const aboutSlice = createSlice({
    name: "about",
    initialState: {
        showAboutPage: false,
    },
    reducers: {
        toggleAboutPage: (state) => {
            state.showAboutPage =!state.showAboutPage;
        }
    }
})

export const {toggleAboutPage} = aboutSlice.actions;

export default aboutSlice.reducer;