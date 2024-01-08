import React, { useState } from 'react';

const PaymentList = ({ payments, onDelete }) => {
  const [selectedDeleteIndex, setSelectedDeleteIndex] = useState(null);

  const handleDeleteClick = (index) => {
    onDelete(index);
    setSelectedDeleteIndex(null);
  };

  return (
    <div>
      <h2>Payment List</h2>
      <ul>
        {payments.map((payment, index) => (
          <li key={index}>
            ${payment.amount} - {payment.date}
            {selectedDeleteIndex === index ? (
              <>
                <button onClick={() => handleDeleteClick(index)}>Confirm Delete</button>
                <button onClick={() => setSelectedDeleteIndex(null)}>Cancel</button>
              </>
            ) : (
              <button onClick={() => setSelectedDeleteIndex(index)}>Delete</button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PaymentList;