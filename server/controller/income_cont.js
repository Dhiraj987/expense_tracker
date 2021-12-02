// imports the data access object created in the model dir
import Income from "../models/income_model.js";


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
