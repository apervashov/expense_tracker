// frontend/src/api.ts

import axios from 'axios';

const API_URL = 'http://localhost:5000/api/transactions'; // Измените, если backend развернут иначе

// Определение интерфейса Transaction
export interface Transaction {
  _id: string;
  description: string;
  amount: number;
  category: string;
  date: string;
}

// Получение всех транзакций
export const getTransactions = async () => {
  const response = await axios.get<Transaction[]>(API_URL);
  return response.data;
};

// Добавление новой транзакции
export const addTransaction = async (transaction: Omit<Transaction, '_id'>) => {
  const response = await axios.post<Transaction>(API_URL, transaction);
  return response.data;
};

// Удаление транзакции по ID
export const deleteTransactionById = async (id: string) => {
  try {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error('Ошибка при удалении транзакции:', error);
    throw error;
  }
};

// Обновление транзакции по ID
export const updateTransactionById = async (id: string, updatedTransaction: Partial<Transaction>) => {
  const response = await axios.put<Transaction>(`${API_URL}/${id}`, updatedTransaction);
  return response.data;
};
