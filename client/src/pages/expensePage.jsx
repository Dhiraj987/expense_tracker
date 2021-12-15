import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import TrackerDataService from "../services/allServices";
import logo from "../bg.png";

function App() {
  const [expenses, setExpenses] = useState([]);
  const [click, setClicked] = useState([]);

  useEffect(() => {
    TrackerDataService.getExp().then((resp) => {
      {
        console.log("parsed the data");
      }
      setExpenses(resp.data);
    });
  }, [click]);

  function toggleClick() {
    setClicked(!click);
  }

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
                key={exp._id}
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
                  <button
                    onClick={() => {
                      TrackerDataService.deleteExp(exp._id);
                      {
                        toggleClick();
                      }
                    }}
                    className="btn btn-danger btn-sm"
                  >
                    {" "}
                    Delete{" "}
                  </button>
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
