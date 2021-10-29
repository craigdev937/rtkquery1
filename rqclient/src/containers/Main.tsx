import React from "react";
import { createTodo, deleteTodo, fetchAllTodos, updateTodo } from "../global/FetchAPI";
import { QueryClient, useMutation, useQuery, UseQueryResult } from "react-query";
import { ITodo } from "../models/ITodo";

export const Main = (): JSX.Element => {
    const qClient = new QueryClient();

    const { isLoading, data: todos }
    = useQuery("todos", fetchAllTodos);

    const updateMut = useMutation(updateTodo, {
        onSuccess: () => qClient.invalidateQueries("todos"),
    });

    const deleteMut = useMutation(deleteTodo, {
        onSuccess: () => qClient.invalidateQueries("todos"),
    });

    const createMut = useMutation(createTodo, {
        onSuccess: () => qClient.invalidateQueries("todos"),
    });
    const textRef = React.useRef<HTMLInputElement>(null);

    if (isLoading) return <aside>Loading...</aside>;
    // if (isError) return <p>Error: {error?.message}</p>;

    return (
        <React.Fragment>
            {todos?.map((todo) => (
                <main key={todo.id}>
                    <aside>
                        <input 
                            type="checkbox" 
                            checked={todo.done}
                            onChange={() => {
                                updateMut.mutate({
                                    ...todo, done: !todo.done
                                });
                            }}
                        />
                        <span>{todo.text}</span>
                    </aside>
                    <button
                        onClick={() => {
                            deleteMut.mutate(todo);
                        }}
                        >Delete
                    </button>
                    <aside className="add">
                        <input 
                            type="text" 
                            ref={textRef}
                        />
                        <button
                            onClick={() => {
                                createMut.mutate(todo)
                            }}
                            >Add
                        </button>
                    </aside>
                </main>
            ))}
        </React.Fragment>
    );
};





