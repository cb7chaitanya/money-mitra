import React, {useState} from 'react'
import TabSwitcher from '../components/TabSwitcher'
import { useTab } from '../hooks'
import LoanFilterSidebar from '../components/LoanSwitcher'

const Loan = () => {
  useTab()
  const [loans, setLoans] = useState([]);

  const handleLoansFetched = (fetchedLoans) => {
    setLoans(fetchedLoans);
  };
  return (
    <div className='h-[100vh] w-full bg-zinc-950 flex flex-col'>
      <div className='mt-8'></div>
      <div className='flex flex-col justify-center '>
        <div className='ml-4'>
          <TabSwitcher />
        </div>
        <div className='absolute top-5'>
          <LoanFilterSidebar />
        </div>
      </div>
      <div className='flex flex-col justify-center items-center text-white mt-16'>
        <h1 className='text-3xl'>All Loans</h1>
        <div className="flex-1 p-4">
        <h1 className="text-2xl font-bold mb-4">Loan Results</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {loans.map((loan) => (
            <LoanCard key={loan.id} loan={loan} />
          ))}
        </div>
      </div>
      </div>
    </div>
  )
}

export default Loan