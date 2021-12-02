import Income from "../models/income_model.js";

export const getIncome= async (req, res) => {
  try {
    const allIncome = await Income.find();
    res.json(allIncome);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export const insertIncome = async (req, res) => {
  const newObj = {

    income_source: req.body.income_source,
    amount: req.body.amount,
    notes: req.body.notes,
  };
  const obj = Income(newObj);
  try {
    await obj.save();
    res.status(201).json(obj);
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
};
