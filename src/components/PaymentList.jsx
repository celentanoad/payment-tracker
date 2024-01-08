// PaymentList.js
import React, { useState } from 'react';

const PaymentList = ({ payments, onDelete }) => {
  const [showConfirm, setShowConfirm] = useState(false);

  const handleDeleteClick = (index) => {
    setShowConfirm(false);
    onDelete(index);
  };

  return (
    <div>
      <h2>Payment List</h2>
      <ul>
        {payments.map((payment, index) => (
          <li key={index}>
            ${payment.amount} - {payment.date}
            {showConfirm ? 
              <button onClick={() => handleDeleteClick(index)}>Confirm Delete</button>
            :
              <button onClick={() => setShowConfirm(true)}>Delete</button>
            }
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PaymentList;
