import mongoose from "mongoose";

// defines the schema for balance collection
const balanceSchema = new mongoose.Schema({
  year: { type: Number, required: true },
  month: { type: String, required: true },
  income: { type: Number, required: true },
  expense: { type: Number, required: true },
  balance: { type: Number, required: true },
});

// creates a balance class from the schema defined above
const Balance = mongoose.model("Balance", balanceSchema);

// export the newly created balance object
export default Balance;
