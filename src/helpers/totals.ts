import formatExpense from './formatExpense';

export function totalValue(expenses: any, type: string) {
    const amount = expenses
        .filter(({ expense }: any) => expense.type === type)
        .map(({ expense }) => expense.value)
        .reduce((previousValue: any, currentValue: any) => previousValue + currentValue, 0);

    const formattedAmount = formatExpense(amount);
    return formattedAmount;
}

export const totalAmount = (expenses: any) => {
    const totalIncomes = expenses
      .filter(({ expense }: any) => expense.type === "+")
      .map(({ expense }) => expense.value)
      .reduce((previousValue, currentValue) => previousValue + currentValue, 0);
    const totalExpenses = expenses
      .filter(({ expense }: any) => expense.type === "-")
      .map(({ expense }) => expense.value)
      .reduce((previousValue, currentValue) => previousValue + currentValue, 0);
    const totalAmount = formatExpense(totalIncomes - totalExpenses);
    return totalAmount;
  };



 