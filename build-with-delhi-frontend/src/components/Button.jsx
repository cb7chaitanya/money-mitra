import React from 'react'

const Button = ({className, label, onClick}) => {
  return (
    <button className={`${className} px-8 py-2 rounded-xl bg-zinc-800 text-white font-bold hover:bg-zinc-700 duration-300`} onClick={onClick}>{label}</button>
  )
}

export default Button