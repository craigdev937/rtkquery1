import { ITodo } from "../models/ITodo";
const URL = "http://localhost:9000/api/todos/";

export const fetchAllTodos = 
async (): Promise<ITodo[]> => {
    const res: Response = await fetch(URL);
    if (!res.ok) {
        throw new Error("Failed!");
    } else {
        return res.json();
    }
};

export const getOneTodo = 
async (todo: ITodo): Promise<ITodo> => {
    const res: Response = await fetch(`${URL}/${todo.id}`);
    if (!res.ok) throw new Error("Failed!");
    return res.json();
};

export const createTodo = 
async (todo: ITodo): Promise<ITodo> => {
    const res: Response = await fetch(URL, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({ todo: todo }),
    });
    if (!res.ok) {
        throw new Error("Failed!");
    }
    return res.json();
};

export const updateTodo = 
async (todo: ITodo): Promise<ITodo> => {
    const res: Response = await fetch(`${URL}/${todo.id}`, {
        method: "PUT",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({todo: todo})
    });
    if (!res.ok) throw new Error("Failed!");
    return res.json();
};

export const deleteTodo = 
async (todo: ITodo) => {
    const res: Response = await fetch(`${URL}/${todo.id}`, {
        method: "DELETE",
    });
    if (!res.ok) throw new Error("Failed!");
    return res.json();
};





