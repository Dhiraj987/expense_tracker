// imports the expense class from the model dir
import Expense from "../models/expense_model.js";


// exports a function that returns all the data rows, documents in the Expense collection 
export const getExpense = async (req, res) => {
  try {
    const allExpenses = await Expense.find();
    res.json(allExpenses);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};


// exports a function that takes in a json with some data and saves it to the Expense collection
export const insertExpense = async (req, res) => {
  // from the receiving json, creates an obj with the right params
  const newObj = {
    category: req.body.category,
    amount: req.body.amount,
    notes: req.body.notes,
  };
  // the newly created obj above is then transferred into an Expense object
  const obj = Expense(newObj);
  // the object is saved in the collection or returns the error that occurred
  try {
    await obj.save();
    res.status(201).json(obj);
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
};
