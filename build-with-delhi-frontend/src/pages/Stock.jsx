import React, {useEffect, useState} from 'react'
import TabSwitcher from '../components/TabSwitcher'
import { useTab } from '../hooks'
import axios from 'axios'
import { BASE_URL } from '../../config/conf'
import Skeleton from '../components/Skeleton'
import TickerCard from '../components/StockCard'
import Error from '../components/Error'

const Stock = () => {
  useTab()
  const [mostActive, setMostActive ] = useState([])
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    const fetchStocks = async () => {
      try {
        const response = await axios.get(`https://www.alphavantage.co/query?function=TOP_GAINERS_LOSERS&apikey=2AAOG9Z8LMHLWC5X`);
        setMostActive(response.most_actively_traded);
        console.log(mostActive)
        setTimeout(() => {
          setLoading(false)
        }, 2000)
      } catch (error) {
        console.error(error);
      }
    }
    fetchStocks();
    console.log(mostActive)
  }, [mostActive])
  return (
    <div className='h-screen w-full bg-zinc-950 flex flex-col'>
      <div className='mt-8'></div>
      <TabSwitcher />
      <Error />
    </div>
  )
}

export default Stock