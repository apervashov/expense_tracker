import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../redux/store";
import { fetchAllTransactions, deleteTransaction } from "../../redux/features/balanceSlice";

const Ledger: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const transactions = useSelector((state: RootState) => state.balance.transactions);
  const status = useSelector((state: RootState) => state.balance.status);
  const error = useSelector((state: RootState) => state.balance.error);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchAllTransactions());
    }
  }, [status, dispatch]);

  const handleDelete = (id: string) => {
    dispatch(deleteTransaction(id));
  };

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="p-4 max-w-md mx-auto bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Transactions ledger</h2>
      <ul>
        {transactions.map((transaction) => (
          <li
            key={transaction._id}
            className={`flex justify-between items-center p-2 rounded-md mb-2 ${
              transaction.amount > 0 ? "bg-green-100 border-l-4 border-green-500" : "bg-red-100 border-l-4 border-red-500"
            }`}
          >
            <div>
              <span className="font-medium">{transaction.description}</span>
              <span className="block text-sm text-gray-600">{new Date(transaction.date).toLocaleDateString()}</span>
              <span className="block text-sm text-gray-600">{transaction.category}</span>
            </div>
            <div className="flex items-center">
              <span className={`font-bold ${transaction.amount > 0 ? "text-green-700" : "text-red-700"}`}>
                {transaction.amount > 0 ? `+${transaction.amount}` : transaction.amount}
              </span>
              <button
                onClick={() => handleDelete(transaction._id)}
                className="ml-4 text-red-500 hover:text-red-700"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Ledger;
