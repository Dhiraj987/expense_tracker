const { mongo } = require("mongoose");
const mongoose = require("mongoose");

// connects to the mongo db expense-01 database, creates one if not available
mongoose
  .connect("mongodb://127.0.0.1:27017/expense-01")
  .then(() => console.log("connected to MongoDB"))
  .catch((err) => console.log("error connecting to MongoDB", err));

// defines the schema for income collection
const incomeSchema = new mongoose.Schema({
  date: { type: Date, default: Date.now },
  income_source: String,
  amount: Number,
  notes: String,
});

// creates an income class from the schema defined above
const Income = mongoose.model("Income", incomeSchema);

async function insertIncome(inc_dic) {
  // create a object-- a document-- from the class
  const inc = new Income({
    income_source: inc_dic.income_source,
    amount: inc_dic.amount,
    notes: inc_dic.notes,
  });

  const result = await inc.save();
  console.log(result);
}

// a function to fetch all the expense entries in the expense collection
// async function fetchIncomes() {
//   const allIncomes = await Income.find();
//   console.log(allIncomes[0][model][_doc]);
//   return allIncomes
// }


// module.exports.fetchExpenses = fetchExpenses;

module.exports.insertIncome = insertIncome;
