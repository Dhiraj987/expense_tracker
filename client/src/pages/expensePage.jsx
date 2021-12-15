import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import TrackerDataService from "../services/allServices";
import { set } from "mongoose";
import logo from "../bg.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function App() {
  //   const [expenses, setExpenses] = useState([]);

  // useEffect(() => {
  //   TrackerDataService.getExp().then((resp) => {
  //     setExpenses(resp.data);
  //   });
  // });

  var expenses = [
    {
      _id: "61a82c28950f1a9946c2b7a1",
      category: "Grocery",
      amount: 110,
      notes: "Spagetti",
      date: "2021-12-02T02:15:04.469Z",
      __v: 0,
    },
    {
      _id: "61a85791b40f58dd41754c8c",
      date: "2021-11-01T00:00:00.000Z",
      category: "GroEducery",
      amount: 110,
      notes: "Spagetti",
      __v: 0,
    },
    {
      _id: "61a8579ab40f58dd41754c8e",
      date: "2021-01-01T00:00:00.000Z",
      category: "GroEducery",
      amount: 110,
      notes: "Spagetti",
      __v: 0,
    },
    {
      _id: "61a857c2b40f58dd41754c91",
      date: "2021-01-01T00:00:00.000Z",
      category: "Education",
      amount: 500,
      notes: "Spagetti",
      __v: 0,
    },
    {
      _id: "61a85998760d15cde9753aee",
      date: "2021-01-01T00:00:00.000Z",
      category: "Education",
      amount: 500,
      notes: "Spagetti",
      __v: 0,
    },
  ];

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
        <FontAwesomeIcon icon="fa-thin fa-wallet" />
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
              <th>Date</th>
              <th>Category</th>
              <th>Amount</th>
              <th>Notes </th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {" "}
            {expenses.map((exp) => (
              <tr
                style={{
                  textAlign: "center",
                }}
              >
                <td> {exp.date.substring(0, 10)} </td>
                <td> {exp.category} </td>
                <td> {exp.amount} </td>
                <td> {exp.notes} </td>
                <td>
                  {" "}
                  <button className="btn btn-info "> Edit </button>
                  {"  "}
                  <button className="btn btn-danger "> Delete </button>
                  {"  "}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
