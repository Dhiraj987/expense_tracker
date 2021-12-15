import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/homePage";
import ExpensePage from "./pages/expensePage.jsx";
import IncomePage from "./pages/incomePage.jsx";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/inc" element={<IncomePage />} />
          <Route path="/exp" element={<ExpensePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
