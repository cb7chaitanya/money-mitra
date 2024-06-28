import React from 'react'
import { TbClick } from "react-icons/tb";

const Default = () => {
  return (
    <div className='text-white flex flex-col justify-center items-center h-[70%] mt-8'>
        <div className='flex flex-col justify-center items-center'>
            <TbClick className='text-5xl mb-4'/>
            <span className='text-3xl text-zinc-400'>Choose a tab to proceed</span>
        </div>
    </div>
  )
}

export default Default