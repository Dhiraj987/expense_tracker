const { mongo } = require("mongoose");
const mongoose = require("mongoose");

// connects to the mongo db expense-01 database, creates one if not available
mongoose
  .connect("mongodb://127.0.0.1:27017/expense-01")
  .then(() => console.log("connected to MongoDB"))
  .catch((err) => console.log("error connecting to MongoDB", err));

// defines the schema for expense collection
const expenseSchema = new mongoose.Schema({
  date: { type: Date, default: Date.now },
  category: String,
  amount: Number,
  notes: String,
});

// creates an expense class from the schema defined above
const Expense = mongoose.model("Expense", expenseSchema);

// a function to insert a new document in the expense collection
async function insertExpense(exp_dic) {
  // create a object-- a document-- from the input
  const exp = new Expense({
    category: exp_dic.category,
    amount: exp_dic.amount,
    notes: exp_dic.notes,
  });
  // save the object to the collection and display it to the console
  await exp.save();
}

// a function to fetch all the expense entries in the expense collection
async function fetchExpenses() {
  const allExpenses = await Expense.find({});
  const inJson = JSON.stringify(allExpenses);
  return inJson
}

module.exports.insertExpense = insertExpense;
module.exports.fetchExpenses = fetchExpenses;
