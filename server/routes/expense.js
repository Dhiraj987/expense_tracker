import express from "express";
const router = express.Router();


import {getExpense} from '../controller/expense_cont.js'
router.get("/", getExpense);

export default router;
