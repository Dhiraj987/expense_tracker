// imports the data access object created in the model dir
import Income from "../models/income_model.js";
import mongoose from "mongoose";

// exports the function getIncome that sends all the income-data (document) in the data collection
export const getIncome = async (req, res) => {
  try {
    const allIncome = await Income.find();
    res.json(allIncome);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

// exports a post function that takes a json and saves the data in the income collection
export const insertIncome = async (req, res) => {
  // create a object from all the incoming value in the req
  const newObj = {
    date: new Date(req.body.date),
    income_source: req.body.income_source,
    amount: req.body.amount,
    notes: req.body.notes,
  };
  //   takes the object and convert it into a Income data-type object
  const obj = Income(newObj);
  //   saves the object or return error, if any
  try {
    await obj.save();
    res.status(201).json(obj);
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
};

// exports a function that takes in an id and updates some value in the document
export const updateIncome = async (req, res) => {
  // takes the id from params and stores it in the id
  const id = req.params.id;
  // from the json gets all the info and stores them in each const
  const date = new Date(req.body.date);
  const income_source = req.body.income_source;
  const amount = req.body.amount;
  const notes = req.body.notes;

  // does a check to make sure the entered id is a mongoose valid id
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`The id: ${id} is invalid`);

  // create an object with the Income model class
  const updatedIncome = {
    date: date,
    income_source: income_source,
    amount: amount,
    notes: notes,
    _id: id,
  };

  // finds an updates the document based on the id and returns the updated, new document
  await Income.findByIdAndUpdate(id, updatedIncome, { new: true });
  res.json(updatedIncome);
};

// exports a function that deletes a document from the collection given the id
export const deleteIncome = async (req, res) => {
  const id = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No income entry with id: ${id}`);

  await Income.findByIdAndRemove(id);

  res.json({ message: "Post deleted successfully." });
};
