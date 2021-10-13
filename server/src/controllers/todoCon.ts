import express from "express";
import { Todos } from "../models/Todos";

export const CreateTodo: express.RequestHandler =
async (req, res, next) => {
    try {
        const todo: Todos = new Todos();
        todo.text = req.body.text;
        todo.active = req.body.active;
        todo.done = req.body.done;
        await todo.save();
        return res.status(201).json(todo);
    } catch (error) {
        res.status(500).json(error);
        next(error);
    }
};

export const FetchAllTodos: express.RequestHandler =
async (req, res, next) => {
    try {
        await Todos.find()
        .then((todos) => res.status(201).json(todos));
    } catch (error) {
        res.status(500).json(error);
        next(error);
    }
};

export const GetOneTodo: express.RequestHandler =
async (req, res, next) => {
    try {
        const todo: Todos = 
            await Todos.findOneOrFail(req.params.id);
        return res.status(201).json(todo);
    } catch (error) {
        res.status(500).json(error);
        next(error);
    }
};

export const UpdateTodo: express.RequestHandler =
async (req, res, next) => {
    try {
        const todo: Todos = 
            await Todos.findOneOrFail(req.params.id);
        todo.text = req.body.text;
        todo.active = req.body.active;
        todo.done = req.body.done;
        await todo.save();
        return res.status(201).json("The Todo was Updated!");
    } catch (error) {
        res.status(500).json(error);
        next(error);
    }
};

export const DeleteTodo: express.RequestHandler =
async (req, res, next) => {
    try {
        const todo: Todos = 
            await Todos.findOneOrFail(req.params.id);
        await todo.remove();
        res.status(201).json("The Todo was Deleted!");
    } catch (error) {
        res.status(500).json(error);
        next(error);
    }
};





