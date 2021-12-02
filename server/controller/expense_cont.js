// imports the expense class from the model dir
import Expense from "../models/expense_model.js";
import mongoose from "mongoose";

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


// exports a function that takes in an id and updates some value in the document
export const updateExpense = async (req, res) => {
  // takes the id from params and stores it in the id
  const id = req.params.id;
  // from the json gets all the info and stores them in each const
  const category = req.body.category;
  const amount = req.body.amount;
  const notes = req.body.notes;

  // does a check to make sure the entered id is a mongoose valid id
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`The id: ${id} is invalid`);

  // create an object with the Expense model class
  const updatedExpense = {
    category: category,
    amount: amount,
    notes: notes,
    _id: id,
  };

  // finds an updates the document based on the id and returns the updated, new document
  await Expense.findByIdAndUpdate(id, updatedExpense, { new: true });

  res.json(updatedExpense);
};
