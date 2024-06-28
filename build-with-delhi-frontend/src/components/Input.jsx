import React from 'react'

const Input = ({type, label, onChange, placeholder, value}) => {
  return (
    <div className='pb-4'>
        <label className='block mb-2 text-sm font-semibold text-zinc-300'>{label}</label>
        <input type={type || "text"} value={value} placeholder={placeholder} className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5' onChange={onChange} />
    </div>
  )
}

export default Input