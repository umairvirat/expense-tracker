import React from 'react';
import Value from './Value/Value';
import Available from './Available/Available';
import Amount from './Amount/Amount';
import { Expense } from '../types/index';
import { totalValue, totalAmount } from '../helpers/totals';

interface BudgetProps {
  expenses: Expense[];
}

const Budget: React.FC<BudgetProps> = ({ expenses }) => (
  <div>
    <header>
      <Available month="June 2019" />
      <Value value={totalAmount(expenses)} />
    </header>
    <Amount type={"Income"}
            amount={totalValue({ expenses: { expenses, type: "+" } })}
   />
    <Amount type={"Expenses"}
            amount={totalValue({ expenses: { expenses, type: "-" } })}
   />
  </div>
);

export default Budget;