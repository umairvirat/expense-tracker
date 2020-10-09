import { useState } from 'react';
import { Expense } from '../types/index';

const useBudget = () => {
    const [expenses, setExpenses] = useState([]);
    const addExpense = (expense: Expense) => {
      const newExpenses = [...expenses, { expense }];
      setExpenses(newExpenses);
      console.log(newExpenses);
    };
    const deleteExpense = (index: number) => {
      const newExpenses = [...expenses];
      newExpenses.splice(index, 1);
      setExpenses(newExpenses);
    };
    return { expenses, addExpense, deleteExpense };
  };

export default useBudget;