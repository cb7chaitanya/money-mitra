import React, { useEffect } from 'react'
import TabSwitcher from '../components/TabSwitcher'
import { tabAtom } from '../store/atoms/tabs'
import { useRecoilValue } from 'recoil'
import { useNavigate } from 'react-router-dom'
import Default from '../components/Default'

const Dashboard = () => {
    const tab = useRecoilValue(tabAtom)
    const navigate = useNavigate()
    useEffect(() => {
        if(tab != "dashboard") {
            navigate(`/dashboard/${tab}`)
        }
    }, [tab])
  return (
    <div className='h-screen w-full bg-zinc-950 flex flex-col'>
        <div className='mt-8'></div>
        <TabSwitcher />
        {tab === "dashboard" && <Default />}
    </div>
  )
}

export default Dashboard