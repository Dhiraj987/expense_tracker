import Expense from "../models/expense_model.js";

export const getExpense = async (req, res) => {
  try {
    const allExpenses = await Expense.find();
    res.json(allExpenses);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export const insertExpense = async (req, res) => {
  const newObj = {
    category: req.body.category,
    amount: req.body.amount,
    notes: req.body.notes,
  };
  const obj = Expense(newObj);
  try {
    await obj.save();
    res.status(201).json(obj);
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
};
