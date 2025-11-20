import { configureStore } from "@reduxjs/toolkit";
import aboutReducer from "./aboutSlice"

const appStore = configureStore({
    reducer:{
        about: aboutReducer,
    },
});

export default appStore;