import React, { useState } from 'react';
import axios from 'axios';
import Button from './Button'
const LoanFilterSidebar = ({ onLoansFetched }) => {
  const [filters, setFilters] = useState({
    loanType: '',
    minInterestRate: '',
    maxInterestRate: '',
    minLoanAmount: '',
    maxLoanAmount: '',
    minTenure: '',
    maxTenure: '',
    minProcessingFee: '',
    maxProcessingFee: ''
  });

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get('/api/loans', { params: filters });
      onLoansFetched(response.data.loans);
    } catch (error) {
      console.error('Error fetching loans:', error);
    }
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      <button 
        className="p-4 text-white" 
        onClick={toggleSidebar}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </button>
      <div className={`fixed inset-y-0 left-0 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-200 ease-in-out w-96 p-4 bg-zinc-900 border-r border-gray-200 z-30 text-white overflow-auto scrollbar-thin`}>
        <h2 className="text-xl font-semibold mb-4 ">Filter Loans</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="form-group ">
            <label className="block mb-1">Loan Type:</label>
            <select 
            name="loanType" 
            value={filters.loanType} 
            onChange={handleChange} 
            className="w-full p-2 border border-gray-300 rounded text-black"
            >
                <option value="" disabled>Select Loan Type</option>
                <option value="Personal Loan">Personal Loan</option>
                <option value="Home Loan">Home Loan</option>
                <option value="Business Loan">Business Loan</option>
            </select>
            
          </div>
          <div className="form-group">
            <label className="block mb-1">Min Interest Rate:</label>
            <input 
              type="number" 
              name="minInterestRate" 
              value={filters.minInterestRate} 
              onChange={handleChange} 
              className="w-full p-2 border text-black border-gray-300 rounded"
            />
          </div>
          <div className="form-group">
            <label className="block mb-1">Max Interest Rate:</label>
            <input 
              type="number" 
              name="maxInterestRate" 
              value={filters.maxInterestRate} 
              onChange={handleChange} 
              className="w-full p-2 border text-black border-gray-300 rounded"
            />
          </div>
          <div className="form-group">
            <label className="block mb-1">Min Loan Amount:</label>
            <input 
              type="number" 
              name="minLoanAmount" 
              value={filters.minLoanAmount} 
              onChange={handleChange} 
              className="w-full p-2 border text-black border-gray-300 rounded"
            />
          </div>
          <div className="form-group">
            <label className="block mb-1">Max Loan Amount:</label>
            <input 
              type="number" 
              name="maxLoanAmount" 
              value={filters.maxLoanAmount} 
              onChange={handleChange} 
              className="w-full p-2 border text-black border-gray-300 rounded"
            />
          </div>
          <div className="form-group">
            <label className="block mb-1">Min Tenure:</label>
            <input 
              type="number" 
              name="minTenure" 
              value={filters.minTenure} 
              onChange={handleChange} 
              className="w-full p-2 border text-black border-gray-300 rounded"
            />
          </div>
          <div className="form-group">
            <label className="block mb-1">Max Tenure:</label>
            <input 
              type="number" 
              name="maxTenure" 
              value={filters.maxTenure} 
              onChange={handleChange} 
              className="w-full p-2 border text-black border-gray-300 rounded"
            />
          </div>
          <div className="form-group">
            <label className="block mb-1">Min Processing Fee:</label>
            <input 
              type="number" 
              name="minProcessingFee" 
              value={filters.minProcessingFee} 
              onChange={handleChange} 
              className="w-full p-2 border text-black border-gray-300 rounded"
            />
          </div>
          <div className="form-group">
            <label className="block mb-1">Max Processing Fee:</label>
            <input 
              type="number" 
              name="maxProcessingFee" 
              value={filters.maxProcessingFee} 
              onChange={handleChange} 
              className="w-full p-2 border text-black border-gray-300 rounded"
            />
          </div>
          <Button label={"Apply Filters"} className={"text-xl"}/>
        </form>
      </div>
      {isSidebarOpen && <div className="fixed inset-0 bg-black opacity-50 z-20" onClick={toggleSidebar}></div>}
    </div>
  );
};

export default LoanFilterSidebar;
