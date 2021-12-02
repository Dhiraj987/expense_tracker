import express from "express";
const router = express.Router();

/** these are routes for all the expense related tasks...
 *  the index.js in the main dir is its parent, 
 *  this file is mainly responsible to direct all the requests to the 
 *  proper function in the controller file
 * */

import { getExpense, insertExpense, updateExpense } from "../controller/expense_cont.js";
router.get("/", getExpense);
router.post("/", insertExpense);
router.patch("/:id", updateExpense)

export default router;
