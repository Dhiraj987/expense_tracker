/** this file will define the app and set up some dependencies
 * it will use
 * this will also set up the environment and connect api to
 * the app
 * */

import express from "express";
import mongoose from "mongoose";
import cors from "cors";

// create an object from the express class
const app = express();

// used for cross validation while in dev mode
app.use(cors());
// used to access and include json files
app.use(express.json());

// all the api endpoints are defined below

// the landing page of this website will have the balance table-- it shows inc, exp, bal for each month
import Balance from "./models/balance_model.js";
app.get("/", async (req, res) => {
  try {
    const allBalances = await Balance.find();
    res.json(allBalances);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
});

// connect the expenses routes to the app, the router file has all the sub routes for expenses
import expenseRoute from "./routes/expense.js";
app.use("/exp", expenseRoute);

// connect the income routes to the app, the router file has all the sub routes for income
import incomeRoute from "./routes/income.js";
app.use("/inc", incomeRoute);

import { updateBalance } from "./controller/balance_cont.js";
app.patch("/update", updateBalance);

// returns an error if the client reaches an url that's not already defined
app.use("*", (req, res) => {
  res.status(404).json({ error: "invalid url, try again" });
});
// end of api endpoints in this file

// gets the port and the url from the .env file
import dotenv from "dotenv";
dotenv.config();

const port = process.env.PORT || 8000;
const connection_url = process.env.CONNECTION_URL;

// establish a connection and if success, start the app or return the error that occurred
mongoose
  .connect(connection_url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(port, () =>
      console.log(`Server Running on Port: http://localhost:${port}`)
    )
  )
  .catch((error) => console.log(`${error} did not connect`));
