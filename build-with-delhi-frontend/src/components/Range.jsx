import React from 'react'
import { MdCancel } from "react-icons/md";

const Range = (props) => {
  return (
    <div className="form-group">
        <div className='flex justify-between'>
            <label className="block mb-1 font-semibold">{props.label}</label>
            <div className='bg-zinc-800 p-1 font-semibold rounded-lg'>
              {`${props.value} ${props.unit}`}
            </div>
        </div>
        <input 
          type="range" 
          step={props?.step}
          min={props.min}
          max={props.max}
          name={props.name}
          value={props.value} 
          onChange={props.handleChange} 
          className="w-full p-2 border text-black border-gray-300 rounded"
        />
    </div>
  )
}

export default Range