import mongoose from "mongoose";

// defines the schema for income collection
const incomeSchema = new mongoose.Schema({
  date: { type: Date, default: Date.now },
  income_source: String,
  amount: Number,
  notes: String,
});

// creates an income class from the schema defined above
const Income = mongoose.model("Income", incomeSchema);

export default Income;
