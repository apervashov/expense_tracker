import React, { useState } from "react";
import { useSelector } from "react-redux";
import {
  Chart,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
import { Bar, Pie } from "react-chartjs-2";
import { RootState } from "../../redux/store";

Chart.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const IncomeExpenseChart: React.FC = () => {
  const transactions = useSelector(
    (state: RootState) => state.balance.transactions
  );
  const [view, setView] = useState<"monthly" | "categories">("monthly");

  const incomeTransactions = transactions.filter(
    (transaction) => transaction.amount > 0
  );
  const expenseTransactions = transactions.filter(
    (transaction) => transaction.amount < 0
  );

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const monthlyIncomeData = months.map((month, index) => {
    return incomeTransactions
      .filter((transaction) => new Date(transaction.date).getMonth() === index)
      .reduce((acc, transaction) => acc + transaction.amount, 0);
  });

  const monthlyExpenseData = months.map((month, index) => {
    return expenseTransactions
      .filter((transaction) => new Date(transaction.date).getMonth() === index)
      .reduce((acc, transaction) => acc + Math.abs(transaction.amount), 0);
  });

  const monthlyChartData = {
    labels: months,
    datasets: [
      {
        label: "Income",
        data: monthlyIncomeData,
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
      {
        label: "Expenses",
        data: monthlyExpenseData,
        backgroundColor: "rgba(255, 99, 132, 0.6)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
    ],
  };

  const categories = Array.from(
    new Set(transactions.map((transaction) => transaction.category))
  );
  const categoryIncomeData = categories.map((category) => {
    return incomeTransactions
      .filter((transaction) => transaction.category === category)
      .reduce((acc, transaction) => acc + transaction.amount, 0);
  });

  const categoryExpenseData = categories.map((category) => {
    return expenseTransactions
      .filter((transaction) => transaction.category === category)
      .reduce((acc, transaction) => acc + Math.abs(transaction.amount), 0);
  });

  const categoryChartData = {
    labels: categories,
    datasets: [
      {
        label: "Income",
        data: categoryIncomeData,
        backgroundColor: categories.map(() => "rgba(75, 192, 192, 0.6)"),
        borderColor: categories.map(() => "rgba(75, 192, 192, 1)"),
        borderWidth: 1,
      },
      {
        label: "Expenses",
        data: categoryExpenseData,
        backgroundColor: categories.map(() => "rgba(255, 99, 132, 0.6)"),
        borderColor: categories.map(() => "rgba(255, 99, 132, 1)"),
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="p-4 max-w-md mx-auto bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Income and expenses chart</h2>
      <div className="mb-4">
        <button
          onClick={() => setView(view === "monthly" ? "categories" : "monthly")}
          className="mr-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          {view === "monthly" ? "By categorie" : "By month"}
        </button>
      </div>
      {view === "monthly" ? (
        <Bar data={monthlyChartData} />
      ) : (
        <Pie data={categoryChartData} />
      )}
    </div>
  );
};

export default IncomeExpenseChart;
