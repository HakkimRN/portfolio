import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    currentPage: "about",
  },
  reducers: {
    setPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
});

export const { setPage } = uiSlice.actions;
export default uiSlice.reducer;
