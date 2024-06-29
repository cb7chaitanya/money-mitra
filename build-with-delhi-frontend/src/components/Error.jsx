import React from 'react'
import { LuConstruction } from "react-icons/lu"

const Error = () => {
  return (
    <div className='text-white flex flex-col justify-center items-center h-[70%] mt-8'>
        <div className='flex flex-col justify-center items-center'>
            <LuConstruction className='text-5xl mb-4'/>
            <span className='text-3xl text-zinc-400'>Page under work</span>
        </div>
    </div>
  )
}

export default Error