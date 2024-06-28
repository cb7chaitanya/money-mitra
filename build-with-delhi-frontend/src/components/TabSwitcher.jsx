import React from 'react'
import { tabAtom } from '../store/atoms/tabs'
import { useSetRecoilState } from 'recoil'

const TabSwitcher = () => {
    const setTab = useSetRecoilState(tabAtom)
  return (
    <div className='flex flex-col items-center'>
        <div className='w-[90%] border border-1 grid grid-cols-2 rounded-lg'>
                <button className='col-span-1 border-r-2 border-r-zinc-600 hover:bg-zinc-800 duration-300 rounded-l-lg' onClick={() => setTab("stock")}>
                    <span className='text-lg text-white'>Stock</span>
                </button>
                <button className='col-span-1 rounded-r-lg hover:bg-zinc-800 duration-300' onClick={() => setTab("loan")}>
                    <span className='text-lg text-white'>Loan</span>
                </button>
        </div>
    </div>
  )
}

export default TabSwitcher