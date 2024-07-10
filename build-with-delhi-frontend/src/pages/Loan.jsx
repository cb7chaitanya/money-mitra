import React, {useEffect, useState} from 'react'
import TabSwitcher from '../components/TabSwitcher'
import { useTab } from '../hooks'
import LoanFilterSidebar from '../components/LoanSwitcher'
import axios from 'axios'
import { BASE_URL } from '../../config/conf'
import LoanCard from '../components/LoanCard'
import Skeleton from '../components/Skeleton'
import { loansAtom } from '../store/atoms/loans'
import { useRecoilState } from 'recoil'

const Loan = () => {
  useTab()
  const [loans, setLoans] = useRecoilState(loansAtom);
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const fetchLoans = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/loan/loans`);
        console.log(response.data.loans)
        setLoans(response.data.loans);
        setTimeout(() => {
          setLoading(false)
        }, 2000)
      } catch (error) {
        console.error(error);
      }
    }
    fetchLoans();
    console.log(loans)
  }, [])

  return (
    <div className='h-screen overflow-auto w-full bg-zinc-950 flex flex-col'>
      <div className='mt-8'></div>
      <div className='flex flex-col justify-center '>
        <div className='ml-4'>
          <TabSwitcher />
        </div>
        <div className='fixed top-12'>
          <LoanFilterSidebar onLoansFetched={setLoans}/>
        </div>
      </div>
    {loading === true ? <div className='flex flex-col-2 justify-center items-center mt-16'><Skeleton /><Skeleton /><Skeleton /></div> : <div className='flex flex-col justify-center items-center text-white mt-16'>
      <h1 className='text-3xl'>All Loans</h1>
      <div className="flex-1 p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {loans.map((loan) => (
          <LoanCard key={loan._id} loan={loan} />
        ))}
      </div>
    </div>
    </div>}
    </div>
  )
}

export default Loan