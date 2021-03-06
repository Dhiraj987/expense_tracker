import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import TrackerDataService from "../services/allServices";
import { set } from "mongoose";
import logo from "../bg.png";

function App() {
  const [balances, setBalances] = useState([]);

  useEffect(() => {
    TrackerDataService.getBal().then((resp) => {
      console.log(resp.data);
      setBalances(resp.data);
    });
  }, []);

  return (
    <div>
      {/* navigation bar here */}
      <nav className="p-4 navbar navbar-expand navbar-dark bg-dark justify-content-evenly">
        <img src={logo} alt="Logo" href="/" />;
        <a
          href="/"
          className="mr_3 navbar-brand"
          style={{
            margin: 5,
            fontSize: 30,
          }}
        >
          {" "}
          Expense Tracker
        </a>
        <div
          className="navbar-nav mr-auto"
          style={{
            margin: 5,
            fontSize: 20,
          }}
        >
          <button
            className="btn btn-outline-secondary "
            style={{
              margin: 5,
              fontSize: 20,
            }}
          >
            <li className="nav-item ">
              <Link to={"/exp"} className="nav-link">
                Expenses
              </Link>
            </li>
          </button>
          <li className="nav-item">
            <button
              className="btn btn-outline-secondary "
              style={{
                margin: 5,
                fontSize: 20,
              }}
            >
              <Link to={"/inc"} className="nav-link">
                Incomes
              </Link>
            </button>
          </li>
        </div>
      </nav>

      <br />

      {/* table begins */}
      <div className="table-responsive p-5">
        <table className="table border border-dark align-middle table-bordered table-light table-hover">
          <thead>
            <tr
              style={{
                textAlign: "center",
                margin: 5,
                fontSize: 17,
              }}
            >
              <th>Year</th>
              <th>Month</th>
              <th>Income</th>
              <th>Expense </th>
              <th>Balance</th>
            </tr>
          </thead>
          <tbody>
            {" "}
            {balances.map((bal) => (
              <tr
                style={{
                  textAlign: "center",
                }}
              >
                <td> {bal.year} </td>
                <td> {bal.month} </td>
                <td> {bal.income} </td>
                <td> {bal.expense} </td>
                <td> {bal.balance} </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
