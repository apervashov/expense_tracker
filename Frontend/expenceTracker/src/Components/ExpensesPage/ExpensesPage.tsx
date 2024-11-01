import React from "react";
import Header from "../Header/Header";
import Expenses from "../Expenses/Expenses";
const ExpensesPage = () => {
  return (
    <div>
      <Header />
      <div>
        <Expenses/>
      </div>
    </div>
  );
};

export default ExpensesPage;
