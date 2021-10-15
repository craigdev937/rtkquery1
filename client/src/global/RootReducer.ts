import { TodoAPI } from "./TodoAPI";
import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

export const RootReducer = configureStore({
    reducer: {
        [TodoAPI.reducerPath]: TodoAPI.reducer,
    },
    // adding the TodoAPI middleware enables caching, 
    // invalidation, polling and 
    // other features of `rtk-query`
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware()
            .concat(TodoAPI.middleware);
    },
});

setupListeners(RootReducer.dispatch);
export type RootState = ReturnType<typeof RootReducer.getState>;
export type AppDispatch = typeof RootReducer.dispatch;



