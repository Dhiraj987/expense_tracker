import express from "express";
const router = express.Router();


import { getExpense, insertExpense } from '../controller/expense_cont.js'
router.get("/", getExpense);
router.post('/insert/', insertExpense)

export default router;
