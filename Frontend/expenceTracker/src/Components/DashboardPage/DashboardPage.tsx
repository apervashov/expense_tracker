import React from "react";
import Header from "../Header/Header";
import AddTransaction from "../addTransaction/addTransaction";
import Ledger from "../Ledger/Ledger";
import IncomeChart from "../Chart/IncomeChart";
const DashboardPage = () => {
  return (
    <div>
      <Header />
      <div>
        <AddTransaction />
      </div>
      <Ledger/>
      <IncomeChart/>
    </div>
  );
};

export default DashboardPage;
