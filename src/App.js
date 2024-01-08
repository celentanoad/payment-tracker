// App.js
import React, { useState, useEffect } from 'react';
import PaymentForm from './components/PaymentForm';
import PaymentList from './components/PaymentList';

const App = () => {
  const [payments, setPayments] = useState(() => {
    const storedPayments = localStorage.getItem('payments');
    return storedPayments ? JSON.parse(storedPayments) : [];
  });
  const [showPaymentForm, setShowPaymentForm] = useState(false);

  useEffect(() => {
    localStorage.setItem('payments', JSON.stringify(payments));
  }, [payments]);

  const getTotalAmountGoal = () => 19750;

  const getProgressPercentage = () => {
    const totalAmountPaid = parseFloat(getTotalAmountPaid(payments).replace('$', '').replace(',', ''));
    const totalAmountGoal = getTotalAmountGoal();
    return (totalAmountPaid / totalAmountGoal) * 100;
  };

  const getTotalAmountPaid = (payments) => {
    if (!payments.length) return "$0";
    let totalPayments = payments.reduce((sum, payment) => sum + payment.amount, 0);

    return totalPayments.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    });
  };

  const addPayment = (newPayment) => {
    setPayments([...payments, newPayment]);
    setShowPaymentForm(false); // Hide the payment form after submission
  };

  const deletePayment = (index) => {
    const updatedPayments = [...payments];
    updatedPayments.splice(index, 1);
    setPayments(updatedPayments);
  };

  const handleClose = () => {
    setShowPaymentForm(false);
  }

  return (
    <div className='container'>
      <h1 className='main-header'>Payment Tracker</h1>
      <div className="progress-bar-container">
        <div className="progress-bar" style={{ width: `${getProgressPercentage()}%` }}></div>
      </div>
      <h2 className='sub-header'>Current Payments: {getTotalAmountPaid(payments)}/$19,750</h2>
      {showPaymentForm  ? 
        <PaymentForm addPayment={addPayment} handleClose={handleClose} />
        :
        <div className='add-payment-button'>
          <button onClick={() => setShowPaymentForm(true)}>
            Add Payment
          </button>
        </div>
      }
      <PaymentList payments={payments} onDelete={deletePayment} />
    </div>
  );
};

export default App;
