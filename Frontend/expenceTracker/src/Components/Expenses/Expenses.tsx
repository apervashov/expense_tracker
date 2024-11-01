import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const Expenses: React.FC = () => {
  const transactions = useSelector(
    (state: RootState) => state.balance.transactions
  );

  const expenseTransactions = transactions.filter(
    (transaction) => transaction.amount < 0
  );

  const totalExpenses = expenseTransactions.reduce(
    (acc, transaction) => acc + transaction.amount,
    0
  );

  return (
    <div className="p-4 max-w-md mx-auto bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Expenses</h2>
      <ul>
        {expenseTransactions.map((transaction) => (
          <li
            key={transaction.id}
            className="flex justify-between items-center p-2 rounded-md mb-2 bg-red-100 border-l-4 border-red-500"
          >
            <div>
              <span className="font-medium">{transaction.description}</span>
              <span className="block text-sm text-gray-600">
                {new Date(transaction.date).toLocaleDateString()}
              </span>
            </div>
            <span className="font-bold text-red-700">{transaction.amount}</span>
          </li>
        ))}
      </ul>
      <div className="mt-4 font-bold">Total: {totalExpenses}</div>
    </div>
  );
};

export default Expenses;
