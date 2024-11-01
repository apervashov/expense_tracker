import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addNewTransaction } from "../../redux/features/balanceSlice";
import { AppDispatch } from "../../redux/store";

const AddTransaction: React.FC = () => {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState<number>(0);
  const [transactionType, setTransactionType] = useState<"income" | "expense">("income");
  const [category, setCategory] = useState<string>("");

  const dispatch = useDispatch<AppDispatch>();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newTransaction = {
      description,
      amount: transactionType === "income" ? amount : -amount,
      category,
      date: new Date().toISOString(),
    };

    dispatch(addNewTransaction(newTransaction));

    setDescription("");
    setAmount(0);
    setTransactionType("income");
    setCategory("");
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 max-w-sm mx-auto bg-white rounded-lg shadow-md">
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Transaction Type</label>
        <div className="flex items-center mb-2">
          <input
            type="radio"
            value="income"
            checked={transactionType === "income"}
            onChange={() => setTransactionType("income")}
            className="mr-2"
          />
          <label className="mr-4">Income</label>
          <input
            type="radio"
            value="expense"
            checked={transactionType === "expense"}
            onChange={() => setTransactionType("expense")}
            className="mr-2"
          />
          <label>Expense</label>
        </div>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Description</label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
          placeholder="Write a description"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Category</label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
          required
        >
          <option value="">Choose category</option>
          <option value="Food">Food</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Транспорт">Transport</option>
          <option value="Transport">Salary</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Sum</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
          className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
          placeholder="Input the value"
          required
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
      >
        Add transaction
      </button>
    </form>
  );
};

export default AddTransaction;
