import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
const Dashboard = () => {
  const balance = useSelector((state: RootState) => state.balance.total);
  return(
    <div>
      <h2 className="text-xl font-bold mb-4">Total balance: {balance}</h2>
    </div>
  );
};

export default Dashboard; 