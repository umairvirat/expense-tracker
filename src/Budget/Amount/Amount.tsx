import React from 'react';
import AmountValue from './AmountValue/AmountValue';
import AmountType from './AmountType/AmountType';

interface AmountProps {
  amount: any;
  type: string;
}

const Amount: React.FC<AmountProps> = ({ amount, type }) => (
  <div>
    <AmountType amountType={type} />
    <AmountValue amountValue={amount} />
  </div>
);

export default Amount;