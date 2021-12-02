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
// used to access and include the jsons
app.use(express.json())



// connect the expenses routes to the app, the router file has all the sub routes for expenses
import expenseRoute from "./routes/expense.js";
app.use("/exp", expenseRoute);

// connect the income routes to the app, the router file has all the sub routes for income
import incomeRoute from "./routes/income.js";
app.use("/inc", incomeRoute);



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
