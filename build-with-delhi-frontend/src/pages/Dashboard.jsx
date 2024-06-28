import React, { useEffect } from 'react'
import TabSwitcher from '../components/TabSwitcher'
import { useTab } from '../hooks'
import Default from '../components/Default'

const Dashboard = () => {
    useTab()
  return (
    <div className='h-screen w-full bg-zinc-950 flex flex-col'>
        <div className='mt-8'></div>
        <TabSwitcher />
        <Default />
    </div>
  )
}

export default Dashboard