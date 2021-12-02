import express from "express";

const router = express.Router();

// from the controller dir imports the functions that will do the actual work
import { getIncome, insertIncome } from "../controller/income_cont.js";
router.get("/", getIncome);
router.post("/insert/", insertIncome);

export default router;
