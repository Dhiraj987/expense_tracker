import mongoose from "mongoose";

// defines the schema for expense collection
const expenseSchema = new mongoose.Schema({
  date: { type: Date, default: Date.now },
  category: { type: String },
  amount: { type: Number, required: true },
  notes: String,
});

// creates an expense class from the schema defined above
const Expense = mongoose.model("Expense", expenseSchema);

export default Expense;
