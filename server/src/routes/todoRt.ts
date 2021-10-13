import express from "express";
import { CreateTodo, DeleteTodo, FetchAllTodos, GetOneTodo, 
    UpdateTodo } from "../controllers/todoCon";

export const todoRt: express.Router = express.Router();
    todoRt.post("/", CreateTodo);
    todoRt.get("/", FetchAllTodos);
    todoRt.get("/:id", GetOneTodo);
    todoRt.put("/:id", UpdateTodo);
    todoRt.delete("/:id", DeleteTodo);





