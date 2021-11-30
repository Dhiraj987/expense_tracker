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

async function insertExpense(exp_dic) {
  // create a object-- a document-- from the class
  const exp = new Expense({
    category: exp_dic.category,
    amount: exp_dic.amount,
    notes: exp_dic.notes,
  });

  const result = await exp.save();
  console.log(result);
}

module.exports.insertExpense = insertExpense;