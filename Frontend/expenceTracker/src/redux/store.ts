// frontend/src/store.ts

import { configureStore } from "@reduxjs/toolkit";
import balanceReducer from "../redux/features/balanceSlice";

const store = configureStore({
  reducer: {
    balance: balanceReducer,
  },
});

// Типизация RootState и AppDispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
