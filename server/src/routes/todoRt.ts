import express from "express";
import { CreateTodo, GetOneTodo, FetchAllTodos, 
    UpdateTodo, DeleteTodo } from "../controllers/todoCon";

export const todoRt: express.Router = express.Router();
    todoRt.post("/todos", CreateTodo);
    todoRt.get("/todos", FetchAllTodos);
    todoRt.get("/todos/:id", GetOneTodo);
    todoRt.put("/todos/:id", UpdateTodo);
    todoRt.delete("/todos/:id", DeleteTodo);


    


