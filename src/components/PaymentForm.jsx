// PaymentForm.js
import React, { useState } from 'react';

const PaymentForm = ({ addPayment, handleClose }) => {
  const [amount, setAmount] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const handleAddPayment = () => {
    const newPayment = {
      amount: parseFloat(amount.replace('$', '')),
      date: new Date().toLocaleDateString(),
    };

    addPayment(newPayment);
    setAmount('');
  };

  const handleChange = (e) => {
    const inputValue = e.target.value;

    if (/^\$?\d*\.?\d*$/.test(inputValue)) {
      setAmount(inputValue);
    }
  };

  const handleFocus = () => {
    setIsFocused(true);
    if (amount === '') {
      setAmount('$');
    }
  };

  const handleBlur = () => {
    setIsFocused(false);
    if (amount === '$') {
      setAmount('');
    }
  };

  return (
    <div className="payment-form">
      <h2>Add Payment</h2>
      <div className="input-container">
          <span className="dollar-sign">$</span>
          <input
            type="number"
            value={amount}
            onChange={handleChange}
          />
        </div>
      <div className='button-container'>
        <button onClick={handleAddPayment}>Submit</button>
        <button className="cancel" onClick={handleClose}>Cancel</button>
      </div>
    </div>
  );
};

export default PaymentForm;
