import { configureStore } from "@reduxjs/toolkit";

export const RootReducer = configureStore({
    reducer: {
        todo: () => "RTK Query!"
    }
});



