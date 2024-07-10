import React, { useState } from 'react';
import axios from 'axios';
import Button from './Button'
import { BASE_URL } from '../../config/conf';
import { useSetRecoilState, useRecoilValue } from 'recoil';
import { loansAtom, updateFilterQuerySelctor } from '../store/atoms/loans';
import Range from './Range';

const LoanFilterSidebar = ({ onLoansFetched }) => {
  const filterQuery = useRecoilValue(updateFilterQuerySelctor)
  const setFilterQuery = useSetRecoilState(updateFilterQuerySelctor)
  const setLoans = useSetRecoilState(loansAtom)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedFilter = { ...filterQuery, [name]: value };
    setFilterQuery(updatedFilter);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`${BASE_URL}/loan/loans/filter`, { params: filterQuery });
      onLoansFetched(response.data.loans);
      setLoans(response.data.loans)
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
        className="p-2 md:p-4 text-white" 
        onClick={toggleSidebar}
      >
        <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </button>
      <div className={`fixed inset-y-0 left-0 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-200 ease-in-out w-96 p-4 bg-zinc-900 border-r border-gray-200 z-30 text-white overflow-auto scrollbar-thin`}>
        <h2 className="text-xl font-semibold mb-4 ">Filter Loans</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="form-group ">
            <label className="block mb-1 font-semibold">Loan Type:</label>
            <select 
            name="loanType" 
            value={filterQuery.loanType} 
            onChange={handleChange} 
            defaultValue={""}
            className="w-full p-2 border border-gray-300 rounded text-black"
            >
                <option value="" disabled>Select Loan Type</option>
                <option value="Personal Loan">Personal Loan</option>
                <option value="Home Loan">Home Loan</option>
                <option value="Business Loan">Business Loan</option>
            </select>
            
          </div>
          <Range label="Min Interest Rate" filterQuery={filterQuery} handleChange={handleChange} min={0} max={100} name="minInterestRate" step={"0.5"} value={filterQuery.minInterestRate || 0} unit={"%"}/>
          <Range label="Max Interest Rate" filterQuery={filterQuery} handleChange={handleChange} min={0} max={100} name="maxInterestRate" step={"0.5"} value={filterQuery.maxInterestRate || 0} unit={"%"}/>
          <Range label="Min Loan Amount" filterQuery={filterQuery} handleChange={handleChange} min={0} max={10000000} step={"10000"} name="minLoanAmount" value={filterQuery.minLoanAmount || 0} unit={"₹"}/>
          <Range label="Max Loan Amount" filterQuery={filterQuery} handleChange={handleChange} min={0} max={10000000} step={"10000"} name="maxLoanAmount" value={filterQuery.maxLoanAmount || 0} unit={"₹"}/>
          <Range label="Min Tenure" filterQuery={filterQuery} handleChange={handleChange} min={0} max={120} name="minTenure" value={filterQuery.minTenure || 0} unit={"months"}/>
          <Range label="Max Tenure" filterQuery={filterQuery} handleChange={handleChange} min={0} max={120} name="maxTenure" value={filterQuery.maxTenure || 0} unit={"months"}/>
          <Range label="Min Processing Fee" filterQuery={filterQuery} handleChange={handleChange} min={0} max={10000} name="minProcessingFee" value={filterQuery.minProcessingFee || 0} unit={"₹"} step={"500"}/>
          <Range label="Max Processing Fee" filterQuery={filterQuery} handleChange={handleChange} min={0} max={10000} name="maxProcessingFee" value={filterQuery.maxProcessingFee || 0} unit={"₹"} step={"500"}/>
          <Button label={"Apply Filters"} className={"text-xl"}/>
        </form>
      </div>
      {isSidebarOpen && <div className="fixed inset-0 bg-black opacity-50 z-20" onClick={toggleSidebar}></div>}
    </div>
  );
};

export default LoanFilterSidebar