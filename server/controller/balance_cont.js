import mongoose from "mongoose";

// imports all the data object created in the model dir
import Income from "../models/income_model.js";
import Expense from "../models/expense_model.js";
import Balance from "../models/balance_model.js";

// this function will populate the balance table with all the details
export const updateBalance = async (req, res) => {
  await Balance.deleteMany({});
  var array_for_expenses = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  var array_for_income = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  var array_for_month = [
    "Ignore_this",
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // get all the expenses for each month
  let grouped_exp = await Expense.aggregate([
    {
      $group: {
        _id: { $month: "$date" },
        totalExpense: {
          $sum: "$amount",
        },
      },
    },
  ]);

  // get all the income for each month
  let grouped_inc = await Income.aggregate([
    {
      $group: {
        _id: { $month: "$date" },
        totalIncome: {
          $sum: "$amount",
        },
      },
    },
  ]);

  for (var each of grouped_exp) {
    array_for_expenses[each["_id"]] = each["totalExpense"];
  }

  for (var each of grouped_inc) {
    array_for_income[each["_id"]] = each["totalIncome"];
  }

  for (let i = 1; i <= 12; i++) {
    const newObj = {
      year: 2021,
      month: array_for_month[i],
      income: array_for_income[i],
      expense: array_for_expenses[i],
      balance: array_for_income[i] - array_for_expenses[i],
    };

    const obj = Balance(newObj);
    try {
      await obj.save();
    } catch (err) {
      res.status(409).json({ message: err.message });
    }
  }

  res.json({ message: "done" });
};
