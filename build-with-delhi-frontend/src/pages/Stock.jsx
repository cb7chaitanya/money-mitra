import React from 'react'
import TabSwitcher from '../components/TabSwitcher'
import { useTab } from '../hooks'

const Stock = () => {
  useTab()
  return (
    <div className='h-screen w-full bg-zinc-950 flex flex-col'>
      <div className='mt-8'></div>
      <TabSwitcher />
    </div>
  )
}

export default Stock