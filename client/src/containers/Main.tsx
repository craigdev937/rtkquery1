import React from "react";
import { TodoAPI } from "../global/TodoAPI";
import { ITodo } from "../models/ITodo";

export const Main = (): JSX.Element => {
    const { data: todos } = TodoAPI.useFetchAllQuery();
    const [addTodo] = TodoAPI.useAddTodoMutation();
    const [updateTodo] = TodoAPI.useUpdateTodoMutation();
    const [deleteTodo] = TodoAPI.useDeleteTodoMutation();

    const onUpdate = React.useCallback(
        (todo: ITodo) => updateTodo({...todo, done: !todo.done}),
        [updateTodo]
    );

    const onDelete = React.useCallback(
        (todo: ITodo) => deleteTodo(todo), [deleteTodo]
    );

    const textRef = React.useRef<HTMLInputElement>(null);

    const onAdd = React.useCallback(
        () => addTodo(textRef.current!.value ?? ""),
        [addTodo]
    );

    return (
        <React.Fragment>
            <h1>Main</h1>
            {todos?.map((todo) => (
                <main key={todo.id}>
                    <aside>
                        <input
                            type="checkbox" 
                            checked={todo.done}
                            onChange={() => onUpdate(todo)}
                        />
                        <span>{todo.text}</span>
                    </aside>
                    <aside><button onClick={() => onDelete(todo)}>Delete</button></aside>
                </main>
            ))}
            <section>
                <input type="text" ref={textRef} />
                <button onClick={onAdd}>Add</button>
            </section>
        </React.Fragment>
    );
};




