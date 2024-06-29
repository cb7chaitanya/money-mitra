import React from 'react';
import { Link } from 'react-router-dom';

const LoanCard = ({ loan }) => {
  const documentsRequired = loan.documentsRequired
  return (
    <div className="p-4 mb-4 bg-zinc-800 border text-white border-gray-300 rounded-lg shadow-sm">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-xl font-semibold">{loan.loanType}</h2>
      </div>
      <div className="mb-2">
        <p><strong>Interest Rate:</strong> {loan.interestRate}%</p>
        <p><strong>Min Loan Amount:</strong> {loan.minLoanAmount}</p>
        <p><strong>Max Loan Amount:</strong> {loan.maxLoanAmount}</p>
        <p><strong>Tenure:</strong> {loan.tenure} months</p>
        <p><strong>Processing Fee:</strong> {loan.processingFee}</p>
        <Link to={loan.bank.website} target='_blank'><strong>Loan Provider:</strong> {loan.bank.name}</Link>
        <p><strong>Contact Number:</strong> {loan.bank.contactNumber}</p>
        <ul><strong>Documents Required</strong>{documentsRequired.map((document, index) => {
          return <li key={index}>{document}</li>
        })}</ul>
      </div>
        <div className="mt-2">
      </div>
    </div>
  );
};

export default LoanCard;
