// PaymentList.js
import React from 'react';

const PaymentList = ({ payments, onDelete }) => {
  return (
    <div>
      <h2>Payment List</h2>
      <ul>
        {payments.map((payment, index) => (
          <li key={index}>
            ${payment.amount} - {payment.date}
            <button onClick={() => onDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PaymentList;
