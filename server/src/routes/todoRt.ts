import express from "express";
import { HomeIndex } from "../controllers/todoCon";

export const todoRt: express.Router = express.Router();
    todoRt.get("/", HomeIndex);





