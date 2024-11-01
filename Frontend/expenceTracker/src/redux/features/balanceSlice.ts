import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import {
  getTransactions,
  addTransaction,
  deleteTransactionById,
  updateTransactionById,
} from "../../api";

interface Transaction {
  _id: string;
  description: string;
  amount: number;
  category: string;
  date: string;
}

interface BalanceState {
  transactions: Transaction[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: BalanceState = {
  transactions: [],
  status: "idle",
  error: null,
};

export const fetchAllTransactions = createAsyncThunk(
  "balance/fetchAllTransactions",
  async () => {
    const response = await getTransactions();
    return response as Transaction[];
  }
);

export const addNewTransaction = createAsyncThunk(
  "balance/addNewTransaction",
  async (transaction: Omit<Transaction, "_id">) => {
    const response = await addTransaction(transaction);
    return response as Transaction;
  }
);

export const deleteTransaction = createAsyncThunk(
  "balance/deleteTransaction",
  async (id: string) => {
    await deleteTransactionById(id);
    return id;
  }
);

export const updateTransaction = createAsyncThunk(
  "balance/updateTransaction",
  async ({
    id,
    updatedTransaction,
  }: {
    id: string;
    updatedTransaction: Partial<Transaction>;
  }) => {
    const response = await updateTransactionById(id, updatedTransaction);
    return response as Transaction;
  }
);

const balanceSlice = createSlice({
  name: "balance",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Получение транзакций
      .addCase(fetchAllTransactions.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        fetchAllTransactions.fulfilled,
        (state, action: PayloadAction<Transaction[]>) => {
          state.status = "succeeded";
          state.transactions = action.payload;
        }
      )
      .addCase(fetchAllTransactions.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Что-то пошло не так";
      })
      // Добавление транзакции
      .addCase(
        addNewTransaction.fulfilled,
        (state, action: PayloadAction<Transaction>) => {
          state.transactions.push(action.payload);
        }
      )
      // Удаление транзакции
      .addCase(
        deleteTransaction.fulfilled,
        (state, action: PayloadAction<string>) => {
          state.transactions = state.transactions.filter(
            (transaction) => transaction._id !== action.payload
          );
        }
      )
      // Обновление транзакции
      .addCase(
        updateTransaction.fulfilled,
        (state, action: PayloadAction<Transaction>) => {
          const index = state.transactions.findIndex(
            (transaction) => transaction._id === action.payload._id
          );
          if (index !== -1) {
            state.transactions[index] = action.payload;
          }
        }
      );
  },
});

export default balanceSlice.reducer;
