import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import TrackerDataService from "../services/allServices";
import { set } from "mongoose";
import logo from "../bg.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function App() {
  // const [incomes, setIncomes] = useState([]);

  // useEffect(() => {
  //   TrackerDataService.getInc().then((resp) => {
  //     setIncomes(resp.data);
  //   });
  // });

  var incomes = [
    {
      _id: "61a8311fc3fcb8061b53865c",
      income_source: "Tari",
      amount: 160,
      notes: "iykyk",
      date: "2021-12-02T02:36:15.976Z",
      __v: 0,
    },
    {
      _id: "61a842ddcfca1327e758f601",
      income_source: "VernG",
      amount: 100,
      notes: "ad",
      date: "2021-12-02T03:51:57.019Z",
      __v: 0,
    },
    {
      _id: "61a842f8cfca1327e758f603",
      income_source: "VernG",
      amount: 100,
      notes: "ad",
      date: "2021-12-02T03:52:24.293Z",
      __v: 0,
    },
    {
      _id: "61a84368e3cd101920083d1c",
      date: "2021-12-01T00:00:00.000Z",
      income_source: "adsf",
      amount: 100,
      notes: "ad",
      __v: 0,
    },
    {
      _id: "61a84377e3cd101920083d1e",
      date: "2021-11-01T00:00:00.000Z",
      income_source: "try2",
      amount: 100,
      notes: "ad",
      __v: 0,
    },
    {
      _id: "61a876a3b5b82e2c53f708f7",
      date: "2021-11-01T00:00:00.000Z",
      income_source: "afd",
      amount: 100,
      notes: "ad",
      __v: 0,
    },
    {
      _id: "61a876b0b5b82e2c53f708f9",
      date: "2021-01-01T05:00:00.000Z",
      income_source: "afd",
      amount: 1200,
      notes: "ad",
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
              <th>Income Source</th>
              <th>Amount</th>
              <th>Notes </th>
            </tr>
          </thead>
          <tbody>
            {" "}
            {incomes.map((inc) => (
              <tr
                style={{
                  textAlign: "center",
                }}
              >
                <td> {inc.date.substring(0, 10)} </td>
                <td> {inc.income_source} </td>
                <td> {inc.amount} </td>
                <td> {inc.notes} </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
