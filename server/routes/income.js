import express from "express";
const router = express.Router();

/**
 * this file is responsible to route all the income requests
 * from its parent "/inc" in the index.js dire from main dir
 * to the right functions in the controller file
 */

// from the controller dir imports the functions that will do the actual work
import {
  getIncome,
  insertIncome,
  updateIncome,
  deleteIncome,
} from "../controller/income_cont.js";
router.get("/", getIncome);
router.post("/", insertIncome);
router.patch("/:id", updateIncome);
router.delete("/:id", deleteIncome);

export default router;
