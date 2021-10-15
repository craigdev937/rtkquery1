import { ITodo } from "../models/ITodo";
import { createApi, 
    fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const URL = "http://localhost:9000/api/";
export const TodoAPI = createApi({
    reducerPath: "TodoAPI",
    baseQuery: fetchBaseQuery({ baseUrl: URL }),
    tagTypes: ["Todos"],
    endpoints: (builder) => ({
        fetchAll: builder.query<ITodo[], void>({
            query: () => `todos`,
            providesTags: [{ type: "Todos", id: "LIST" }],
        }),
        addTodo: builder.mutation<string, string>({
            query(text) {
                return {
                    url: `create`,
                    method: "POST",
                    body: {
                        text,
                    },
                };
            },
            invalidatesTags: [{ type: "Todos", id: "LIST" }],
        }),
        updateTodo: builder.mutation<ITodo, ITodo>({
            query(todo) {
                return {
                    url: `todos/${todo.id}`,
                    method: "PUT",
                    body: todo,
                };
            },
            invalidatesTags: [{ type: "Todos", id: "LIST" }],
        }),
        deleteTodo: builder.mutation<ITodo, ITodo>({
            query: (todo) => {
                return {
                    url: `todos/${todo.id}`,
                    method: "DELETE",
                    body: todo,
                };
            },
            invalidatesTags: [{ type: "Todos", id: "LIST" }],
        }),
    })
});




